/* 
divisible by 3 - fizz
divisible by 5 - buzz
divisibe by 3 and 5 - fizzbuzz
not divisible by 3 or 5 - input 
not a number - "Not a number" 
*/

function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        console.log('FizzBuzz');
    } else if (input % 3 === 0) {
        console.log('Fizz');
    } else if (input % 5 === 0) {
        console.log('Buzz');
    } else if (typeof input !== 'number') {
        console.log('Not a number');
    } else {
        console.log(input);
    }
}

fizzBuzz(15);