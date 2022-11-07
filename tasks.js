function turtle(hillSize = 100) {
    let wayDay = 50;
    let wayNight = -30;
    let days = 1;
    let wayAll = 0;

    while (wayAll < hillSize) {
        wayAll += wayDay;
        if (wayAll >= hillSize) {
            return days;
        }
        wayAll += wayNight
        days++;
    }
}

function handshake(count = 10) {
    let allHand = 0;
    for (let i = 1; i <= count; i++) {
        allHand += i - 1;
    }
    return allHand
}

function duplicates(str) {
    return Array.from(new Set(str.split(','))).join(',')
}