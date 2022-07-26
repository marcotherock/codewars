// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    let arr = string.split("").sort();
    let counter = 1;
    let sol = {};
    
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        counter ++;
      } else if (arr[i] != arr[i+1] && arr[i] != arr[i-1]) {
        counter =1;
        sol[arr[i]] = counter;
      } else if (arr[i] != arr[i+1] && arr[i] === arr[i-1]) {
        sol[arr[i]] = counter;
        counter =1;
      }
    }
    return sol;
  }