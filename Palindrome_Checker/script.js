function palindrome(str) {
    // use regex to replace non-string to nothing also changing all letters to lowercase
    str = str.replace(/\W|_/g, "").toLowerCase();
    // reverse each words by spliting them and joining them again
    let reverse = str.split("").reverse().join("");
    // compare if the reversed string is the same as the prior string. return true if that is true and false if it is not
    if (reverse === str) return true
    return false
  }
  
  palindrome("eye");