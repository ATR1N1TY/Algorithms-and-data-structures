//Fizbuzz is famous question many interviewers ask
//Altough it's really simple to write, many developers fail to write algorithm which:

//log the numbers from 1 to n
//if the number is divisible by 3, log fizz
//if the number is divisible by 5, log buzz
//if number is both divisible on 3 and 5, log fizzbuzz

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("fizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(50);
