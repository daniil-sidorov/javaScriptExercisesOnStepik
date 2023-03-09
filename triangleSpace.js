// А тут вам нужно вычислить и вернуть из функции площадь треугольника. 
// Передаваемые в функцию аргументы "a" и "b" - 
// это длины сторон, а "c" - это угол между ними в градусах.

function testMath(a, b, c) {
    let numberOrDegreesInRad = c * (Math.PI / 180);

    let triangleSpace = (1/2) * a * b * (Math.sin(numberOrDegreesInRad)); 
    return triangleSpace;
};

console.log(testMath(2, 10, 16));
