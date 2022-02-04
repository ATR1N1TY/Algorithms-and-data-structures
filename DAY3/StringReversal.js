const reverseStr = (str) => {
  const arr = str.split("").reverse().join("");
  return arr;
};

const rev = reverseStr("new york");
console.log(rev);

//time complexity of this code is O(n)
//space complexity of this code is O(n)
