function testMath(a, b, c) {
    
    let angleInRadians = c * Math.PI / 180;
    
    let spaceOfTheTriangle = 
    Math.sin(angleInRadians) * a * b * 0.5;

    return spaceOfTheTriangle;

};

console.log(testMath(2, 10, 16));