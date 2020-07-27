/* 
  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/


function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var regTotal = 0; // value will hold the total of all cash in register
  var toReturn = [];
  // create object to hold denomination name and value
  var denom = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": .25,
    "DIME": .10,
    "NICKEL": .05,
    "PENNY": .01
  }

  for (var i = 0; i < cid.length; i++) {
    regTotal += cid[i][1];
  }

  // round to nearest hundreth to avoid precision error
  regTotal = Math.round(regTotal * 100) / 100;

  // check for obvious insufficient fund
  if (change > regTotal) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: toReturn
    };
  }
  // check for exact change
  if (regTotal === change) {
    return {
      status: "CLOSED",
      change: cid
    };
  } 

  // begin register wizardry
  let index = 0;
  
  for (let i = cid.length - 1; i >= 0; i--) {
    let bill = ["placeholder", 0];
    while (change >= denom[cid[i][0]] && cid[i][1] - denom[cid[i][0]] >= 0) {
      bill[0] = cid[i][0];
      change -= denom[bill[0]];
      change = Math.round(change * 100) / 100;
      regTotal -= denom[bill[0]];
      regTotal = Math.round(regTotal * 100) / 100;
      cid[i][1] -= denom[bill[0]];
      cid[i][1] = Math.round(cid[i][1] * 100) / 100;
      bill[1] += denom[bill[0]];
      bill[1] = Math.round(bill[1] * 100) / 100;
      console.log(change);  
    } 
    if (!toReturn.includes(bill) && bill[0] !== "placeholder") {
        toReturn.push(bill);
    }
  }
  
  
  if (change !== 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  console.log(toReturn);
  console.log(regTotal);
  console.log("cash - price = " + change);
  return {
    status: "OPEN",
    change: toReturn
  };
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);