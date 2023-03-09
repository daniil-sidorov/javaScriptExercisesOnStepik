const marks = [80, 80, 50];

function calculateGrade(marks) {
    let sum = 0;
    for (let i of marks) {
        sum += i;
    }
    
    let average = 0;
    average = sum / marks.length;

    if (average >= 1 && average <= 59) {
        console.log('F');
    } else if (average < 70) {
        console.log('D');
    } else if (average < 80) {
        console.log('C');
    } else if (average < 90) {
        console.log('B');
    } else if (average <= 100) {
        console.log('A');
    } else {
        console.log('number does not fall into any stated categories');
    }

}

calculateGrade(marks);




// найти сумму элментов в массиве (+)
// найти среднее значение суммы элементов в массиве (+)
// присвоить сумме элементов в массиве буквенное значение