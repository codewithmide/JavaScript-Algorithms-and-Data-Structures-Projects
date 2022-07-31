function telephoneCheck(str) {
    // used regex in checking all required number
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");