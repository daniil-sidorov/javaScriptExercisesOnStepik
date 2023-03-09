function testMath(a, b, c, d) {
   let smallestNumber = Math.min(a, b, c, d);
   let largestNumber = Math.max(a, b, c, d);
   let resultOfTheDivision = Math.floor(largestNumber/smallestNumber); 

   return resultOfTheDivision;
}

console.log(testMath(7, 4, 8, 9));


// find the largest number
// find the smallest number
// divide the largest number by the smallest number 
// math.floor the result of the division
// return the result of the division
