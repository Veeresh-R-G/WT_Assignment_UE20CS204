const DATE = new Date();
const date = DATE.getDate();
const day = DATE.getDay();
const month = DATE.getMonth();
const year = DATE.getFullYear();
const hour = DATE.getHours();
const minute = DATE.getMinutes()
const seconds = DATE.getSeconds();
let day_equi;

switch (day) {
    case 0:
        day_equi = "Sunday";
        break;
    case 1:
        day_equi = "Monday";
        break;
    case 2:
        day_equi = "Tuesday";
        break;
    case 4:
        day_equi = "Thursday";
        break;
    case 5:
        day_equi = "Friday";
        break;
    case 6:
        day_equi = "Saturday";
        break;
    case 3:
        day_equi = "Wednesday";
        break;
    default:
        break;
}
document.querySelector(".date").innerHTML = date + "/" + (Number(month) + 1) + "/" + year;
document.querySelector(".time").innerHTML = DATE.toLocaleTimeString();
document.querySelector(".day").innerHTML = day_equi;





