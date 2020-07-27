function convertToRoman(num) {

  let roman = [];

  let chart = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };
  
  let divisors = Object.keys(chart);

  for (let i = divisors.length - 1; i >= 0; i--) {
    let quotient = Math.floor(num / divisors[i]);
    if (quotient > 0) {
      num -= quotient * divisors[i];
      roman.push(...Array(quotient).fill(chart[divisors[i]]));
    }
  }

  console.log(roman.join(""));
  return roman.join("");
}

convertToRoman(306);