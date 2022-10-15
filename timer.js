document.addEventListener("DOMContentLoaded", () => {
  let countDownDate = new Date("Nov 19, 2022 00:00:00").getTime();
  var x = setInterval(function () {
    let now = new Date().getTime();
    let diff = countDownDate - now;
    let days = Math.floor(diff / (1000 * 24 * 60 * 60));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff % (1000 * 60)) / 1000);
    if (secs < 0) {
      days = 0;
      hours = 0;
      mins = 0;
      secs = 0;
    }
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
  }, 1000);
});
