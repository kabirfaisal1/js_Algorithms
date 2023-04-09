# Functions Explanation
# [Table of Contents](#table-of-contents)
  * [Verify if existing data and modify](#verify-if-existing-data-and-modify)
  <!-- * [How would you verify prime number inside an array](#how-would-you-verify-prime-number-inside-an-array)
  * [How could you find all prime factors of a verify number](#how-could-you-find-all-prime-factors-of-a-verify-number) -->
  
  
# [Verify if existing data and modify](#table-of-contents)
* [Function: modifyKeyStorage(currentBaseData, updateBaseData)](/medium/keyValue/keyValueStorage.js) 
   takes two augment as `currentBaseData` and `updateBaseData`. `updateBaseData` will be evaluate against `currentBaseData`.
- Following line of code `map`s `currentBaseData` with `updateBaseData` and `find` data index that have same `.id` and verify if any object in the block (index) for the `.id` has changed if it does that update the `currentBaseData` associated object for the `.id`. In this solution this step has to happen before adding new data that that exist to avoid duplicate object.
 
  ```
      currentBaseData = currentBaseData.map(e => (e = updateBaseData.find(a => a.id == e.id) || e, e));
  ```
- Following line of code uses `filter` `updateBaseData` with `currentBaseData` and `find` data that don't exist and push the data to `currentBaseData`.

  ```
     currentBaseData.push(...updateBaseData.filter(compare => !currentBaseData.find(finalResults => finalResults === compare)))
   
  ```
  

