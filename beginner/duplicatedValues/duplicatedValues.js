/**
 * @param {number[]} nums
 * @return {number}
 */
let arr = [1,2,1,3,4,5,1,3,7]

var findDuplicatedValues = (nums)=> {
    const temp = {};
    return nums.filter(num => {
        temp[num] = (temp[num] || 0) + 1;
        return temp[num] > 1;
    })
};

var findNonDuplicatedValues = (arr) => 
arr.filter((item,index) => {
  arr.splice(index,1)
  const unique = !arr.includes(item)
  arr.splice(index,0,item)
  return unique
})
console.log("Duplicates: ",findDuplicatedValues(arr),
 "Non Duplicated Values: ",findNonDuplicatedValues(arr))