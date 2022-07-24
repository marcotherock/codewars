// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //split iterable into smaller arrays
    //creat solution array
    //loop through it and check if array[i] === array[i+1]
    //nest a second if to check if last item in solution array is === array[i]
  if (typeof iterable == "string"){
    var it = iterable.split("");
  } else {
    var it = iterable;
  }
    let i=0;
    
    for (i=0; i<it.length; i++) {
      if (it[i] == it[i+1]) {
        it.splice(i,1);
        i = i-1;
    }
  }
        return it;
  
  }