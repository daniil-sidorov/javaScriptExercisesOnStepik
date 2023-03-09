// speed limit = 70;
// 5 >> 1 point 
// 12 points >> suspended

checkSpeed(76);

function checkSpeed(speed) {

    let speedLimit = 70;
    let pointsPerKm = 5;

    if (speed < speedLimit + pointsPerKm) {
        console.log('Ok')
    } else {
        let points = Math.floor((speed - speedLimit) / pointsPerKm);

        if (points >= 12) {
            console.log('Your dirver licence has been suspended');
        } else {
            console.log(`You have obtained ${points} point(s)`);;
        }
    }
}