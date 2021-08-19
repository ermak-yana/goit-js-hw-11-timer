
function logger () {
    // console.log("start");
};
let id = null;
function timerStart () {
    startData = Date.now();
    id = setInterval(logger, 1000);
   
} ;

window.addEventListener('DOMContentLoaded', timerStart);

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 23, 2021'),
  });