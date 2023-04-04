//* How would you verify a prime number?
export function isPrime(num) {
    let isPrime = true;
    let divisor = 2;
    if (num < 1) {
        isPrime = false;
    } else {
        while (num > divisor) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
            divisor++;
        }
        return isPrime;
    }
}
//* How would you verify a prime number inside an array?
//TODO: remove this let after adding test
let array = [137, 120, 237, 0, 1, 4, 77, 78, '180', '190', 601, 607, 998, 996]
export function arrayPrime_Numbers(arr) {
    let arrPrime_List = arr.filter(isPrime);
    return arrPrime_List;
}
//* How could you find all prime factors of a verify number?
export function priemFactors(num) {
    let factors = [];
    let  divisor = 2; // * O(n) for better run time complexity divisible will be by 3
    while (num > 2) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return factors
}

console.log('from the array list for prime.', arrayPrime_Numbers(array))
console.log(`given augment IsPrime: ${isPrime(607)}`)
console.log(`given augment IsPrime: ${isPrime(999)}`)
console.log(priemFactors(33))
