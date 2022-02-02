//<<<<<<<<<<<<<<<<{WELCOME TO ALGORITHMS AND DATA STRUCTURES DAY1!}>>>>>>>>>>>>>>>>

//1. Time complexity AKA bigO
//2. How do we mesure code performance?
//3. Counting operations
//4. Big O notation introduction indepth

//1.

//BigO notation gives us precise numeric and objective way to judge how efficent is the code is

//it helps you write better code and becomes important when number of inputs are huge like FB
//posts, user inputs etc.

//with my understanding, running inneficent code can cost too much because code takes computing
//resources to do it's own things.

//as the code coplmexity increses, consumed computing resources increase too!,
//which means higher electricity bill and low lifespan of servers which your code runs on
//or if you use AWS and other clouding/server services fee would be much higher than it should be!.

// if you aren't building apps, you still must learn this things, because they will ask you
//what's the time complexity of an algorithm which you wrote as they said to do it and solve it
// on the interview.

//2.

//what is better implementation of code? or how can code be implemented better?
//better implementation of code is when code's easy on CPU and RAM
//CPU - takes much less time to compute
//RAM - takes least amount of space as possible

//there is much stronger emphasis on CPU, as CPU draws more power than RAM does
// so it's much more important that code be faster than take least space, but when possible
// both is good together

//also code can be unreadable but it's much important to code be optimized on CPU

//so we should strive for writing code that's readable, faster and lighter, this sounds hard eih?
//No acctualy after learning it's quite easy to write what I call trippe way efficent code!

//next questin is how can we measure the complexity of the code?
//By hard time measurements?
//well, it's not practical and it's not accurate eather becouse every computer runs code in
//different amount of time as computer computing power differs widely among

//what if we use same computers while writing code?
//well, that would cost too much and also your code might be run on different devices, so no.

//Bassically we measure <time> complexity of a code depending on how much operations or steps
//code takes to do it's own task

//with this, we can just look at code and tell how complex it is! isn't it amazing? I think it is!.

//BTW, when inputs are small inneficent code and efficent one acts same, but with too much
//inputs they differ widely!.

//3.
//Let's measure code performance by counting how many steps it takes to return an answer

//here we have 2 functions which does exactly the same thing, it takes number and
// returns sum up to that number

//UNOPTIMIZED code:
const sum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

//the loop in function is dependent on n(number we want to sum up to)
//if n = 6 it means that i will be added to total 6 times, which means 6 operations
//if n = 100 it means that i will be added to total 100 times, which means 100 operations
//if n = 100000000 it means that i will be added to total 100000000 times, which means 100000000 operations
//which means that complexity of this code is O(n)
//IMPORTANT: if loop body had more lines it time coplexity would be: O(number of lines * n)

//OPTIMIZED code:
const optSum = (n) => {
  return (n * (n + 1)) / 2;
};

//there we have only 3 operations *(multiplication), +(addition) and /(division).
//also this code isn't dependent on n(number we want to sum up to)
//that means time complexity of this code is O(3)
// that means if n = 100000000 total number of operations will still reamin 3.

//if we hard measure time, unoptimized code will take much more time to return an answer than optimized one as number of
//operations is much grater than in second optimized code:

let t1, t2;

t1 = Date.now();
optSum(2000000000);
t2 = Date.now();
console.log(`Optimized code took: ${(t2 - t1) / 1000} seconds`);

t1 = Date.now();
sum(2000000000);
t2 = Date.now();
console.log(`Unoptimized code took: ${(t2 - t1) / 1000} seconds`);
