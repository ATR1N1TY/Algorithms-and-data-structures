//Caesars cyphre is really a cool thing!
//it takes in string, shifts each letter by n and gives otuput

//Chiper('abcd', 1) ->>> 'bcde'
//Chiper('saba', 3) ->>> 'wbcb'
//Chiper('eternity', 6) ->>> 'kzkxtoze'

//პროგრამამ უნდა გაიგოს რომელ ინდექსზე მდებარეობს str[i] ელემენტი
//ამ ინდექსის რიცხვს უნდა დაუმატოს shift-ის რიცხვი
//უნდა მოძებნოს ელემენტი alphabet-იდან, ახალი ინდექსით და ჩაამატოს res ცვლადში

//რა მოხდება სიტყვაზე თუ y ამოვა და უნდა დავუმატოთ 6?
//25 + 6 = 31
//თუ მიღებული რიცხვი მეტია alphabet-ის სიგრძეზე მაშინ:
//31 - 26 = 5 ->>> e

const cypher = (str, shift) => {
  let res = "";
  str = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  if (shift > alphabet.length) {
    shift = shift % alphabet.length;
  }

  for (let i = 0; i < str.length; i++) {
    let newChar = alphabet.indexOf(str[i]) + shift;

    if (newChar >= alphabet.length) {
      newChar = newChar % alphabet.length;
    }

    res += alphabet[newChar];
    console.log(`${str[i]} ->>> ${alphabet[newChar]}`);
  }
  return res;
};

const test = cypher("eternity", 54);
//54 = 26 + 26 + 2
console.log(test);
