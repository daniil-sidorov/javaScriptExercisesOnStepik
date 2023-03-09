// prime - factors are only 1 and itself
// composite - factors are more than 2 numbers

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) console.log(number);
}
}

showPrimes(20);