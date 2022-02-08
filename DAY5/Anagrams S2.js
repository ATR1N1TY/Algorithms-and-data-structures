const anagram = (word1, word2) => {
  if (word1.length === word2.length) {
    word1 = word1.toLowerCase().replace(/[\W_]/g, "");
    word2 = word2.toLowerCase().replace(/[\W_]/g, "");

    //we are using JS sort method as we don't know sorting algorithms yet in this course
    const sortedW1 = word1.split("").sort().join("");
    const sortedW2 = word2.split("").sort().join("");

    if (sortedW1 === sortedW2) {
      return true;
    }
  }
  return false;
};

const test = anagram("DELTARUNE!#!@", "UnderTale?!/#");
console.log(test);
