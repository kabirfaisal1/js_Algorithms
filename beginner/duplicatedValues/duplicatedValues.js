
let numArr = [1, 2, 1, 3, 4, 5, 1, 3, 7];
let alpArr = ["a", "b", "c", "a", "d", "e", "f", "a", "c"];
let stringArr = ["QA", "DEV", "BA", "QA", "PM", "DEV", "DEV", "CEO", "CTO"];

const strWprd = "Hand, Hand, Fingers, Thumb, one thumb one thumb drumming on a drum";
const str2 = "123 4516 713 123 76887 713";
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

var findNonDuplicatedArrayValues = (value) =>{

 return value.filter((item, index) => {
    value.splice(index, 1)
    const unique = !value.includes(item)
    value.splice(index, 0, item)
    return unique
  })
}

console.log("number: Duplicates: ", findDuplicatedValues(stringArr),
  "number: Non Duplicated Values: ", findNonDuplicatedArrayValues(stringArr))
  
  console.log("word: Duplicates: ", findDuplicatedValues(strWprd))

// console.log("abc Duplicates: ", findDuplicatedArrayValues(alpArr),
//   "abc Non Duplicated Values: ", findNonDuplicatedArrayValues(alpArr))


// console.log("abc Duplicates: ", findDuplicatedArrayValues(stringArr),
//   "abc Non Duplicated Values: ", findNonDuplicatedArrayValues(stringArr))

