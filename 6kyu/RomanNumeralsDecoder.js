// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution (roman) {
 
    let letters = roman.split("");
    let solution = [];
    let sum;
    
    for (let i=0; i<letters.length; i++){
      if (letters[i] == "M") {
        solution.push(1000)
      } else if (letters[i] == "D") {
        solution.push(500)
      }  else if (letters[i] == "C") {
        solution.push(100)
      }  else if (letters[i] == "L") {
        solution.push(50)
      }  else if (letters[i] == "X") {
        solution.push(10)
      }  else if (letters[i] == "V") {
        solution.push(5)
      }  else if (letters[i] == "I") {
        solution.push(1)
      }
    }
    
    for (let l=0; l<solution.length-1; l++) {
      if (solution[l]<solution[l+1]) {
        let new_value = solution[l+1]-solution[l]
        solution.splice(l,2,new_value)
      }
    }
    
    return solution.reduce((a, b) => a + b, 0)
    
  }
