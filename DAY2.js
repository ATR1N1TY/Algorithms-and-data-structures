//<<<<<<<<<<<<<<<<{WELCOME TO ALGORITHMS AND DATA STRUCTURES DAY2!}>>>>>>>>>>>>>>>>

//5. Symplifing BigO notation
//6. Space complexity
//7. Logarithmic time complexity
//8. introduction to algorithms

//5.

//this is a easy one:
//firslty constants doesn't matter while determining the complexity of a code
//for example if complexity of a code is O(2n) we simplify it to O(n) and write the biggest term

//O(1234151) --> O(1)
//O(14213N) --> O(n)
//O(n^2 + n + 1) --> O(n^2)
//O(38294n) --> O(n)

//that's becouse smaller terms doesn't matter, as the number of inputs(n) approaches to infinity
// for example if we have:
// O(n^2 + n + 1) and n = 100000000
//the most weight comes from n^2 and n and 1 in the expression doesnt matter as they're really small compared to n^2

//also we refer some of the complexities as names, for example:
// O(1) --> Constant time complexity
// O(n) --> linear time complexity
// O(n^2) --> quadratic time complexity
// O(n^3) --> cubic time complexity
//etc...

//6.

//Space complexity means how much RAM does code take, unlike time complexity which means how much CPU does the code take
//for basic types like: integers and booleans
//asigning a variable's space complexity is O(1) which means var a = 100 & var a = 200 take same space(roughly)

//for lists, objects and strings take O(n) space complexity which means taken space on RAM is dependent on how many
//elements do we have in the array, how much key-value pairs we have in an object or hom many charachters we have in
//a string

//lets compare space complexity of a codes:

const codeOne = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("code 1");
  }
};

//Space complexity of this code is O(1), because there's no any variable assigned to something
//but let i = 0 means that only one variable is assigned to somthing and value of i changes as the loop iterates.

const codeTwo = (arr) => {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
};

//there's only one variable declaired and assigned and every element of an array is added to that so it means O(1)

const codeThree = (str) => {
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }
  return reverseStr;
};

//there's one variable declaired, but the size of variable increases as str charachters approach to infinity
//so it means O(n)

const codeFour = (arr) => {
  let resArr = [];
  arr.forEach((item) => {
    if (Math.random() < 0.5) {
      resArr.push(item);
    }
  });
  return resArr;
};

//here we have one list and we add roughly the half of the items in the inputed array
//in worst cases it's O(n)

//remember, you should always prioritize time complexity over space one, becouse it can cost much more

//7.

// one of the most interesting complexities are logarithmic complexities
//Generally we have 2 logarithmic complexities: n log n and log n

//and it's the opposite of quadratic complexity:
//log of base 2 and n of 8 = 3; log of base 2 and n of 16 = 4

//we can think logarithmic complexities as if the number of input is doubled then we only have to do one more
//operation

//we will see logarithmic complexity code in the upcomming days!.
