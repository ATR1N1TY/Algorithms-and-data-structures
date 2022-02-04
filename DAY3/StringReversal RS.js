//this is a real algorithmic solution of an string reversal algorithm

const reverseStr = (str) => {
  const res = [];

  for (let i = str.length - 1; i >= 0; i--) {
    res.push(str[i]);
  }
  return res.join("");
};

// const rev = reverseStr("new york");
// console.log(rev);

//time complexity of this code is O(n)
//space complexity of this code is O(n)

//this is a second full solution,without using push and join methods
// and it's a bit different than a first one and better.

const reverseStrSec = (str) => {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    res = str[i] + res;
  }
  return res;
};

// const riv = reverseStrSec("nocaB .P sirhC");
// console.log(riv);

//space and time complexities are the same as in the first one: O(n)
