const maxC = (str) => {
  let charsObj = {};
  let mostSeenChar = "";
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    charsObj[str[i]] = charsObj[str[i]] + 1 || 1;

    if (charsObj[str[i]] > charCount) {
      charCount = charsObj[str[i]];
      mostSeenChar = str[i];
    }
  }
  return `in a given string "${str}", most used character is "${mostSeenChar}", which is used ${charCount} times!`;
};

const str = "rusetis dedas shevecit";

const test = maxC(str);
console.log(test);
