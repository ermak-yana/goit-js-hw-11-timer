
  
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      // timer: document.querySelector('#timer-1'),
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
    this.intervalId = null;
  }

  start() {
    const startTime = this.targetDate.getTime();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      if (deltaTime <= 0) {
        clearInterval(this.intervalId);
      }
      this.getTimeComponents(deltaTime);
    }, 1000);
  }

  // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateTimer(days, hours, mins, secs);
  }

  // метод принимает число приводит к строке и добавляет к нему знаки, в начало 0 если число меньше 2 - х знаков
  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimer(days, hours, mins, secs) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 23, 2021'),
});

timer.start();
