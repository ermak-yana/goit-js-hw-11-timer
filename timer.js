



function Logger () {
    // console.log("start");
};

function timerStart () {setInterval(Logger, 1000)} ;

window.addEventListener('DOMContentLoaded', timerStart);

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 23, 2021'),
  });