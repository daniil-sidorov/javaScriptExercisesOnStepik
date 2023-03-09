/* 
В этом задании вам нужно вычислить факториал для числа, 
передаваемого в нашу функцию и вывести его с помощью команды 
return. На всякий случай напоминаем, что факториал числа a это 
произведение всех целых чисел от 1 до a, например, если а = 5, 
то факториал a будет равен
1 * 2 * 3 * 4 * 5
*/

function testFactorial(a) {
    var x;
    x = a;

    if (x === 0) {
        return 1;
    } else {
        return x * testFactorial(x - 1);
    }
}