//Write a function which will capitalize every first charachter of a word in a string
//and also lowers the rest of the chars!

const capitalize = (str) => {
  const wordArr = str.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] =
      wordArr[i][0].toUpperCase() +
      wordArr[i].slice(1, wordArr[i].length).toLowerCase();
  }
  console.log(wordArr.join(" "));
};

capitalize("gaMaRJoBa msoFlIo rAto vMGeri? aRVICi Ki rAVI aRa AnDaC XO, ARAAA");
