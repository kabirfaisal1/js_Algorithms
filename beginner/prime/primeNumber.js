//* How would you verify a prime number?
export function isPrime(num) {
    let isPrime = true
    let divisor = 2
    if (num < 1) {
        isPrime = false
    } else {
        while (num > divisor) {
            if (num % divisor === 0) {
                isPrime = false
                break
            }
            divisor++
        }
        return isPrime
    }
}
//* How would you verify a prime number inside an array?
//TODO: remove this const after adding test
const array = [137, 120, 237, 0, 1, 4, 77, 78, '180', '190', 601, 607, 998, 996]
export function arrayPrime_Numbers(arr) {
    const arrPrime_List = arr.filter(isPrime)
    return arrPrime_List
}
//* How could you find all prime factors of a verify number?
export function priemFactors(num) {
    let factors = [],
        divisor = 2
    while (num > 2) {
        if (num % divisor === 0) {
            factors.push(divisor)
            num = num / divisor
        } else {
            divisor++
        }
    }
    return factors
}

console.log('checked array list for prime.', arrayPrime_Numbers(array))
console.log(`given prime: ${isPrime(607)}`)
console.log(priemFactors(608))
