function testStr(a, b) {
    if (a.includes(b)) {
        return a.indexOf(b);
    } else {
        return -1;
    }
}

console.log(testStr('This is a test string', 'test'));

// проверяем, входит ли в а б
// если да, возвращаем индекс б
// если нет, возвращаем -1
// проводим проверку