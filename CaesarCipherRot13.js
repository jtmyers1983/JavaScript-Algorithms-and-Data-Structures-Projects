function rot13(str) {
  let midIndex = 110;
  console.log(String.fromCharCode(110));
  str = str.toLowerCase().split(" ");
  
  str = str.map(item => {
    item = item.split("");
    for (let i = 0; i < item.length; i++) {
      let charCode = item[i].charCodeAt();
      
      if (charCode > 96 && charCode < midIndex) {
        item[i] = String.fromCharCode(charCode + 13);
      } 
      else if (charCode > 96 && charCode < 123) {
        item[i] = String.fromCharCode(charCode - 13);
      }
    }
    return item.join("");
  });

  console.log(str.join(" ").toUpperCase());
  return str.join(" ").toUpperCase();
}

rot13("SERR CVMMN!");