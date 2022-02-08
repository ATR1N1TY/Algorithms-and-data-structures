//თუ ორ სტრინგს გააჩნია ერთიდაიგივე რაოდენობის ერთიდაიგივე ასოები მათ ეწოდებათ ანაგრამები
//ანუ ერთი სიტყვისგან შეგვიძლია შევადგინოთ სხვა სიტყვა
//anagram("earth", "heart") ---> true

//aehrt
//aehrt
//solution 1: let's sort the strings by alphabet order, if both strings match it's an anargram

//solution 2: თუ str-ის პირველი ასო არის str2-ში, შეამოწმოს str-ის მეორე ასო და ა.შ
//თუ აღმოჩნდა რომ ყველა ასო არის str2-ში დააბრუნოს true
//თუ არა დააბრუნოს false

//ჭეშმარიტებები ანაგრამებზე:
//1. პირველ და მეორე ანაგრამულ სიტყვებს გააჩნიათ ასოების ერთნაირი რაოდენობა
//2. ანაგრამულ სიტყვებში ერთიდაიგივე ასოებია გამოყენებული

//როგორ შევამოწმო არის თუ არა რაიმე ასო გამოყენებული რაიმე სიტყვაში

const anagram = (word1, word2) => {
  if (word1.length === word2.length) {
    word1 = word1.toLowerCase().replace(/[\W_]/g, "");
    word2 = word2.toLowerCase().replace(/[\W_]/g, "");

    for (let i = 0; i < word2.length; i++) {
      if (word2.includes(word1[i])) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};

const test = anagram("DELTARUNE!#!@", "UnderTale?!/#");
console.log(test);
