
const numArr = [1, 2, 1, 3, 4, 5, 1, 3, 7];
const alpArr = ["a", "b", "c", "a", "d", "e", "f", "a", "c"];
const stringArr = ["QA", "DEV", "BA", "QA", "PM", "DEV", "DEV", "CEO", "CTO"];

const strWord = "Hand, Hand, Fingers, Thumb, one thumb one thumb drumming on a drum";
const str2 = "123 4516 713 123 76887 713";
const strletters = "Faisal";

var findDuplicatedValues = (value) => {
  let arrayFlag= Array.isArray(value)
  if(arrayFlag){
    let storedArr = Array.from(value); 
  const temp = {};
  return storedArr.filter(data => {
    temp[data] = (temp[data] || 0) + 1;
    return temp[data] > 1;
  })}else{
    const strArr = value.split(" ");
    const res = [];
    for (let i = 0; i < strArr.length; i++) {
      if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
        if (!res.includes(strArr[i])) {
          res.push(strArr[i]);
        };
      };
    };
    return res.join(" ");
  }
};

var findNonDuplicatedValues = (value) =>{
  let arrayFlag= Array.isArray(value)
  if(arrayFlag){
    let storedArr = Array.from(value); 
  const temp = {};
  let count= 0
 return value.filter((item, index) => {
    value.splice(index, 1)
    const unique = !value.includes(item)
    value.splice(index, 0, item)
    return unique
  })}else{
    let strArr = value.split(" ");
    let res = [];
   
    for (let i = 0; i < strArr.length; i++) {
      if (strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) {
        if (!res.includes(strArr[i])) {
          res.push(strArr[i]);
        };
      };
    };
    return res.join(" ");
  }
};

console.log("number: Duplicates: ", findDuplicatedValues(stringArr),
  "number: Non Duplicated Values: ", findNonDuplicatedValues(stringArr))
  
console.log("word: Duplicates: ", findDuplicatedValues(strWord), "number: Non Duplicated Values: ",findNonDuplicatedValues(strWord))

var countDuplicatedValues = (value) => {
  let arrayFlag= Array.isArray(value)
  let elementCounts;
  if(arrayFlag){
    let storedArr = Array.from(value); 
   
    return elementCounts = storedArr.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
   
  }else{
   // const strArr = value.split(" ");
    return value.toLowerCase().split(" ").sort().join(" ").match(/(.)\1+/g).length; 
   
    // for (let i = 0; i < strArr.length; i++) {
    //   if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
    //     if (!res.includes(strArr[i])) {
    //       res.push(strArr[i]);
    //     };
    //   };
    // };
    // return res.join(" ");
  }
};

console.log("with count: Duplicates: ", countDuplicatedValues(stringArr))

console.log("with count: Duplicates: ", countDuplicatedValues(strWord))
  