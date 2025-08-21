let _day = new Date().getDay();
let _dayList = "";
switch (_day) {
  case 0:
    _dayList = "Sunday";
    break;
  case 1:
    _dayList = "Monday";
    break;
  case 2:
    _dayList = "Thuesday";
    break;
  case 3:
    _dayList = "Wednesday";
    break;
  case 4:
    _dayList = "Thursday";
    break;
  case 5:
    _dayList = "Friday";
    break;
  case 6:
    _dayList = "Saturday";
    break;
}
let days = document.getElementById("days");
days.innerHTML = "<h2>" + _dayList + "</h2>";
setInterval(() => {
  // seconds
  let _second = new Date().getSeconds();
  let _secondsClock = document.getElementById("secondsClock");
  _secondsClock.style.transform = `rotate(${90 + _second * 6}deg)`;
  //   minute
  let _minute = new Date().getMinutes();
  let _minuteClock = document.getElementById("minuteClock");
  _minuteClock.style.transform = `rotate(${90 + _minute * 6}deg)`;

  //   hour
  let _hour = new Date().getHours() - 12;
  let _hourClock = document.getElementById("hourClock");

  _hourClock.style.transform = `rotate(${90 + _hour * 30}deg)`;
  //   day
}, 1000);
