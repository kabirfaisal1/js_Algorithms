# Functions Explanation
# [Table of Contents](#table-of-contents)
  * [How would you verify a prime number](#how-would-you-verify-a-prime-number)
  * [How would you verify prime number inside an array](#how-would-you-verify-prime-number-inside-an-array)
  * [How could you find all prime factors of a verify number](#How-could-you-find-all-prime-factors-of-a-verify-number)
  
# [How would you verify a prime number](#table-of-contents)
   <!-- [function](/beginner/prime/primeNumber.js?plain=1)  -->
   `isPrime(num)` will take an augment as `n` and evaluate `n` by divisor of two.
   - `let isPrime = true` flag is set to true
   - `let divisor = 2` number is set to be divided by 2.
   - `if (n < 1)` checks to verify that given augment is not below 1. If it is then output will be `The augment value ${n} is less that one (1). code will not evaluate the number`. 
   -  `while (divisor < n)` looping through numbers to compare `divisor` and `n` until `divisor` is more than `n`
        - `if (n % divisor === 0)` evaluate if the augment `n` is divisible by `n` other than 1 and itself
            - if true it will set `let isPrime = true` to `let isPrime = false` and will `break` out of the loop. Because we want the code to make sure augment can't be divided other then itself.
            <br>
            ** HINT: `(%)` JavaScript check for even numbers by using the modulo operator.
        - If we don't enter the code block for `if (n % divisor === 0)`. `divisor === 0)` will continue increment until any `n` is less than `divisor` and `n` are the same value.

- `if (isPrime)` after exiting out of while loop and if the augment `n` return true then output will be 
    `The augment value ${n} is prime: ${isPrime}`
- `else` after exiting out of while loop and if the augment `n` return false then output will be 
    `The augment value ${n} is prime: ${isPrime}`

# [How would you verify prime number inside an array](#table-of-contents)
`arrayPrime_Numbers(arr)` will take an array augment  as `arr` and evaluate which value with in the array list is by prime.
- `const arrPrime_List = arr.filter(isPrime)`
    - taking the augment `arr` and using `filter()` method crates a new array filled with elements that passes `isPrime` function.

# [How could you find all prime factors of a verify number](#table-of-contents)
- `priemFactors(num)` will take an augment as `n` and evaluate `n` by divisor of two.
- `let factors = [];` empty array variable to store divider value
- `let  divisor = 2;` number need to be divisible by even number ONLY. for better time complexity time complexity set this to 3, and we only care about number that divisible by any even number
- `while (num > 2)` to start dividing by two and if not divisible increase divider until code is done.  
- `if (num % divisor === 0){` evaluate if the augment `n` is divisible by `n` other than 1 and itself, if so enter the block
- `factors.push(divisor);` push the current divisor to factors array bucket
- `num = num / divisor;}`then number is divided by divisor and update the current state of number
- `else { divisor++; }` increment the divisor until while loop is satisfied
