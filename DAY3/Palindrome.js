//if a string is equal to reversal of that string it means that, this string is palindrome
//for example: ema -> ame = it's not palindrome, but Madam -> madaM = is a palindrome

const palingDrone = (str) => {
  let lowerStr = str.toLowerCase();
  let revStr = "";

  for (let i = 0; i < str.length; i++) {
    revStr = lowerStr[i] + revStr;
  }

  if (revStr === lowerStr) {
    return true;
  } else {
    return false;
  }
};

const check = palingDrone("Madam");
console.log(check);
