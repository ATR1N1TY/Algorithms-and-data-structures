//this is a real algorithmic solution of an string reversal algorithm

const reverseStr = (str) => {
  const res = [];

  for (let i = str.length - 1; i >= 0; i--) {
    res.push(str[i]);
  }
  return res.join("");
};

const rev = reverseStr("new york");
console.log(rev);

//time complexity of this code is O(n)
//space complexity of this code is O(n)
