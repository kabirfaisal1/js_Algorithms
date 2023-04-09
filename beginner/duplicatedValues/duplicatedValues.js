
let numArr = [1,2,1,3,4,5,1,3,7];
let alpArr = ["a","b","c","a","d","e","f","a","c"];

let stringArr = ["QA","DEV","BA","QA","PM","DEV","DEV","CEO","CTO"];
var findDuplicatedValues = (value)=> {
    const temp = {};
    return value.filter(data => {
        temp[data] = (temp[data] || 0) + 1;
        return temp[data] > 1;
    })
};

var findNonDuplicatedValues = (value) => 
value.filter((item,index) => {
  value.splice(index,1)
  const unique = !value.includes(item)
  value.splice(index,0,item)
  return unique
})
console.log("number: Duplicates: ",findDuplicatedValues(numArr),
 "number: Non Duplicated Values: ",findNonDuplicatedValues(numArr))

console.log("abc Duplicates: ",findDuplicatedValues(alpArr),
"abc Non Duplicated Values: ",findNonDuplicatedValues(alpArr))


console.log("abc Duplicates: ",findDuplicatedValues(stringArr),
"abc Non Duplicated Values: ",findNonDuplicatedValues(stringArr))