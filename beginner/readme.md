# Functions Explanation

## How would you verify a prime number(s) ?
   `isPrime` will take an augment as `n` and evaluate `n` by divisor of two.
   -`let isPrime = true` flag is set to true
   - `let divisor = 2` number is set to be divided by 2.
   - `if (n < 1)` checks to verify that given augment is not below 1. If it is then output will be `The augment value ${n} is less that one (1). code will not evaluate the number`. 
   -  `while (divisor < n)` looping through numbers to compare `divisor` and `n` until `divisor` is more than `n`
        - `if (n % divisor === 0)` evaluate if the augment number by 2
            - if true it will set `let isPrime = true` to `let isPrime = false` and will `break` out of the loop. Because we want the code to make sure augment can't be divided other then itself.
            <br>
            ** HINT: `(%)` JavaScript check for even numbers by using the modulo operator.
        - If we don't enter the code block for `if (n % divisor === 0)`. `divisor === 0)` will continue increment until any `n` is less than `divisor` and `n` are the same value.

- `if (isPrime)` after exiting out of while loop and if the augment `n` return true then output will be 
    `The augment value ${n} is prime: ${isPrime}`
- `else` after exiting out of while loop and if the augment `n` return false then output will be 
    `The augment value ${n} is prime: ${isPrime}`

## How would you verify a prime number(s) inside an array?
            