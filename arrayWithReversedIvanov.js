function testArray(a, b) {
    const total = a.split('').concat(b.split('')); // сплитом превращаем строку в массив
    total.unshift("Иванов");
    return total.reverse().join('');
}
console.log(testArray('4326', '297515'));