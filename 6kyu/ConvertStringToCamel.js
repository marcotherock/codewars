// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    // split string in to array
    // loop through array
    // if - || _ then splice and change toUpperCase
    
    let s = str.split("");
    let i;
    
    for (i=0; i<s.length; i++) {
      if ((s[i] == "-") || (s[i] == "_")){
        s.splice(i,1);
        s[i] = s[i].toUpperCase();
      }
    }
    return s.join("");
  }