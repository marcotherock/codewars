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