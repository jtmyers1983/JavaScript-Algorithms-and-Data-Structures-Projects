// Function will verify that a phone number is in the correct format. 

function telephoneCheck(str) {
  
  // matches phone numbers in the form (XXX) XXX XXXX (country code 1 optional)
  if (str.match(/1?\s?\(\d{3}\)\s\d{3}\s\d{4}/)) {
    return true;
  }
  
  if (str.charAt(0) === "(" && str.charAt(4) !== ")") {
    return false;
  }

  // mathces the form XXX XXX XXXX (optional 1 country code) or XXXXXXXXXXX
  if (str.match(/1?\s?\d{3}\s\d{3}\s\d{4}/)) {
    return true;
  }

  if (str.match(/(^|\D)\d{10}($|\D)/)) {
    return true;
  }

  if (str.charAt(1) === "(" && str.charAt(0) !== "1") {
    return false;
  }

  if (str.match(/1?\s?\(\d{3}\)\d{3}\-\d{4}/)) {
    return true;
  }

  if (str.match(/[1]?\s?\d{3}\-\d{3}\-\d{4}/)) {
    return true;
  }  

  if (str.charAt(0) !== "1" || str.charAt(1) !== " ") {
    return false;
  }

  if (str.match(/(1\s)?\(\d{3}\)\s\d{3}\-\d{4}/)) {
    return true;
  }


  console.log(str);
  return false;
}

console.log(telephoneCheck("2(757)622-7382"));