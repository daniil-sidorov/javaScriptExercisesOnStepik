function showNumbers(limit) {
    for (let index = 0; index <= limit; index++) {
        if (index % 2 === 0) {
            console.log(index, 'EVEN');
        } else {
            console.log(index, 'ODD');
        }
    }
}

showNumbers(10);