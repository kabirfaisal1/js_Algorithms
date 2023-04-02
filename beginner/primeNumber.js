// How would you verify a prime number?
function isPrime(n) {
    let isPrime = true
    let divisor = 2
    if (n < 1) {
        console.log(
            `The augment value ${n} is less that one (1). code will not evaluate the number`
        )
    } else {
        while (n > divisor ) {
            if (n % divisor === 0) {
                isPrime = false
                break;
            }
            divisor++;
        }
        if (isPrime) {
            console.log(`The augment value ${n} is prime: ${isPrime}`)
        } else {
            console.log(`The augment value ${n} is prime: ${isPrime}`)
        }
    }
}
isPrime(137)
isPrime(120)
isPrime(237)
isPrime(0)
isPrime(1)
isPrime(4)
isPrime("120")
isPrime('137')

isPrime(9801)


