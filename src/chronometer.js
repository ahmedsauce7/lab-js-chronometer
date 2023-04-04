class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) { printTimeCallback() };
    }, 1000);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60); 
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
   return (`0${value}`).slice(-2);
  }

  /* another way other than the .slice  if ( value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    } 
    */ 

  stop() {
    return clearInterval(this.intervalId); 
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

/* longer but clearer version: 

split () { 
  const minute = this.computeTwoDigitNumber(this.getMinutes());
  const second = this.computeTwoDigitNumber(this.getSeconds());
  return `${minute}:${second}`; 
}
} 

*/