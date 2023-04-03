//* How would you verify a prime number?
export function isPrime(n) {
    let isPrime = true
    let divisor = 2
    if (n < 1) {
        console.log(
            `The augment value ${n} is less that one (1). code will not evaluate the number`
        )
        isPrime = false
    } else {
        while (n > divisor) {
            if (n % divisor === 0) {
                isPrime = false
                break;
            }
            divisor++
        }
        if (isPrime) {
            console.log(`The augment value ${n} is prime: ${isPrime}`)
        } else {
            console.log(`The augment value ${n} is prime: ${isPrime}`)
        }
        return isPrime
    }
}
//* How would you verify a prime number(s) inside an array?
const array = [137, 120, 237, 0, 1, 4, 77, 78, "180", '190', 601,607,998,996]
export function arrayPrime_Numbers(arr) {
    const arrPrime_List = arr.filter(isPrime)
    console.log('checked array list for prime.', arrPrime_List)
}

arrayPrime_Numbers(array);
isPrime(80)
