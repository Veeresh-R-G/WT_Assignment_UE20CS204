const today = new Date();
const mealTime = require('./mealtime');
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(`Current Date : ${date}`);
console.log(`Current Time : ${time}`)

mealTime.func(time)