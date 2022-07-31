function rot13(str) {
    // first set an alphabeth variable
   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   // create an empty string that stores the answer
   let answer = ""
   // run through str with a for loop
   for (let i = 0; i < str.length; i++) {
     // get the index and loop through with an if statement
     if (alphabet.indexOf(str[i]) >= 13) {
       answer += alphabet[alphabet.indexOf(str[i]) - 13]
     } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
       answer += alphabet[alphabet.indexOf(str[i]) + 13]
     } else {
       answer += str[i]
     }
   }
   return answer;
 }
 
 console.log(rot13("SERR PBQR PNZC"));