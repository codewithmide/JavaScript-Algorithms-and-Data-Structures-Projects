function convertToRoman(num) {
    // get the variables of each roman numerals first
    let romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
    let total = ""
    // run a for loop for each numeral in the roman numerals
    for (let numeral in romanNumerals) {
      // run a while loop for num(36)
      while (num >= romanNumerals[numeral]) {
        // total will combine each letter
        total += numeral;
        // num will decrement to stop the loop
        num -= romanNumerals[numeral];
      }
    }
  return total;
 }
 
 console.log(convertToRoman(36));