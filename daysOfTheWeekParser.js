function testDateTime(a, b) {
    let firstDate = new Date(a);
    let secondDate = new Date(b);

    let daysOfTheWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let getterFirstDate = firstDate.getDay();
    let getterSecondDate = secondDate.getDay();

    if (firstDate > secondDate) {
        return daysOfTheWeek[getterFirstDate];
    } else {
        return daysOfTheWeek[getterSecondDate];
    }
}