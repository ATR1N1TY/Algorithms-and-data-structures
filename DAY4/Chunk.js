//Write a function that splits an array(arr) into groups the length of size s

//chunk([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]

const chunk = (arr, s) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const lastSub = res[res.length - 1];
    if (!lastSub || lastSub.length === s) {
      res.push([arr[i]]);
    } else {
      lastSub.push(arr[i]);
    }
  }
  return res;
};

const test = chunk(["1", 2, 3, "4", 23, 4, 35, 32, 5, 326, 23, 531, 5, 25], 4);
// []
// [["1"]]
// [["1", 2]]
// [["1", 2, 3]]
// [["1", 2, 3, 4]]
// [["1", 2, 3, 4], [23]]......
console.log(test);
