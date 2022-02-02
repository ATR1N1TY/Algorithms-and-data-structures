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
