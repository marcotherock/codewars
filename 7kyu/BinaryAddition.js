// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  
    let number = a+b // sum the two numbers
    let binary_num = [] //create empty array 
    
    // loop through all the divisions, adding the remainders as bits
    // extrapolate the new number and make it an Integer
    while (number > 0) {
      binary_num.unshift(number%2) 
      number = number /= 2;
      number = Math.floor(number);
    }
    // join the array into a string without commas
    return binary_num.join("")
  }