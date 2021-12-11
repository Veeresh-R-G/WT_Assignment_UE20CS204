
function mealTime(date) {
    const myArr = date.split(':')
    const hour = myArr[0]
    const month = myArr[1]
    const sec = myArr[2]

    if ((8 < hour) && (hour < 12)) {
        console.log("Its BreakFast Time ! ! ! ");
    }
    else if ((1 < hour) && (hour < 5)) {
        console.log("Its Lunch Time ! ! ! ");
    }
    else if ((7 < hour) && (hour < 11)) {
        console.log("Its Dinner Time ! ! ! ");
    }
    else {
        console.log("Invalid Eating Hours ! ! ! ");
    }
}

module.exports.func = mealTime;