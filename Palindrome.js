// function will check if a string is a palindrome, 
// and return a boolean true if the string is the exact same if read backwards or forwards.  
// If not it will return false.

function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let reverseStr = [];
  for (let i = str.length - 1; i >=0; i--) {
    reverseStr.push(str.charAt(i));
  }
  reverseStr = reverseStr.join("");
  if (reverseStr === str) {
    return true;
  }
  console.log(str);
  console.log(reverseStr);
  return false;
}



palindrome("Eye");