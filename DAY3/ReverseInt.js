//this is so easy, we should reverse an integer and return an integer

const reverseInt = (num) => {
  numb = `${num}`; //we turn number into a string
  let revNum = ""; //this is where reversed strin goes

  for (let i = 0; i < numb.length; i++) {
    if (numb[i] === "-") {
      continue; //if first char of string is "-" we dont want to add it to revNum, so we continue
    }
    revNum = numb[i] + revNum; //this is reversing in a nutshell
  }

  //if the inputed number is less than zero we should turn revNum into number and multiply by -1
  //else just return number version of revNum string
  if (num < 0) {
    return +revNum * -1;
  } else {
    return +revNum;
  }
};

const test = reverseInt(-1234567890);
console.log(test, typeof test);
