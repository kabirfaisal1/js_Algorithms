
const numArr = [1, 2, 1, 3, 4, 5, 1, 3, 7];
const numArr2 = [1, 2, 1, 3, 4,7,8,9];
const alpArr = ["a", "b", "c", "a", "d", "e", "f", "a", "c"];
const stringArr = ["QA", "DEV", "BA", "QA", "PM", "DEV", "DEV", "CEO", "CTO"];

const sentence = "Hand, Hand, Fingers, Thumb, one thumb one thumb drumming on a drum";
const str2 = "123 4516 713 123 76887 713";
const strletters = "Faisal";

var findDuplicatedValues = (value) => {
  let arrayFlag = Array.isArray(value)
  if (arrayFlag) {
    let storedArr = Array.from(value);
    const temp = {};
    return storedArr.filter(data => {
      temp[data] = (temp[data] || 0) + 1;
      return temp[data] > 1;
    })
  } else {
    const words = value.split(" ");
    const wordArray = [];
    for (let i = 0; i < words.length; i++) {
      if (words.indexOf(words[i]) !== words.lastIndexOf(words[i])) {
        if (!wordArray.includes(words[i])) {
          wordArray.push(words[i]);
        };
      };
    };
    return wordArray.join(" ");
  }
};

var findNonDuplicatedValues = (value) => {
  let arrayFlag = Array.isArray(value)
  if (arrayFlag) {
    let storedArr = Array.from(value);
    const temp = {};
    let count = 0
    return value.filter((item, index) => {
      value.splice(index, 1)
      const unique = !value.includes(item)
      value.splice(index, 0, item)
      return unique
    })
  } else {
    let words = value.split(" ");
    let wordArray = [];

    for (let i = 0; i < words.length; i++) {
      if (words.indexOf(words[i]) === words.lastIndexOf(words[i])) {
        if (!wordArray.includes(words[i])) {
          wordArray.push(words[i]);
        };
      };
    };
    return wordArray.join(" ");
  }
};


var countDuplicatedValues = (value) => {
  let arrayFlag = Array.isArray(value)
  let elementCounts;
  if (arrayFlag) {
    let storedArr = Array.from(value);
    return elementCounts = storedArr.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
  } else {
    let words = value.split(" ");
    let wordMap = {};
  
    for (let i = 0; i < words.length; i++) {
      let currentWordCount = wordMap[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      wordMap[words[i]] = count + 1;
    }
  }
  return wordMap;
  };


// console.log("string Array: Duplicates: ", findDuplicatedValues(stringArr),
//   "string Array: Non Duplicated Values: ", findNonDuplicatedValues(stringArr), "value and quantity",countDuplicatedValues(stringArr))

//   console.log("number: Duplicates: ", findDuplicatedValues(numArr),
//   "number: Non Duplicated Values: ", findNonDuplicatedValues(numArr), "value and quantity", countDuplicatedValues(numArr))

  // console.log(`sentence: Duplicates: ${findDuplicatedValues(sentence)},
  // "sentence: Non Duplicated Values: ${findNonDuplicatedValues(sentence)}, value and quantity: ${countDuplicatedValues(sentence)}`)
  // console.log(`sentence: Duplicates: ${countDuplicatedValues(sentence)}`)

  function longestCommonPrefix(...words) {
    words.sort(); // shortest string will be first and the longest last
    return (
      words[0].split('') // converts shortest word to an array of chars
        .map((char, idx) => words[words.length - 1][idx] === char ? char : '\0') // replaces non-matching chars with NULL char
        .join('') // converts back to a string
        .split('\0') // splits the string by NULL characters
        .at(0) // returns the first part
    );
  }
  console.log(longestCommonPrefix(sentence))

  function teainTime(arg1,arg2) {
    let i=0
    let matchTime= []
    // arg1.filter(gTrain)
       
      /*while(i<arg1.length || i< arg2.lenght ){
          if(arg1.includes(arg2[i])){
              matchTime.push(arg2[i]);
          }
          i++
      }*/
      return matchTime;
  }
  
  console.log(teainTime(numArr,numArr2));
  console.log(longestCommonPrefix(sentence))