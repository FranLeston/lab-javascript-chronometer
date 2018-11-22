// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = '';
  this.currentMilliseconds = 0;
}

// startClick function
Chronometer.prototype.startClick = function () {
  
  // Necessary in order to pass "this" to the nested function call
  var that = this;
  this.intervalId = setInterval(function () {
    
    // Adds 1 to the currentTime property every 1 second 
    that.currentTime += 1;
    that.setTime();
  }, 1000);

  this.millisecondsIntervalId = setInterval(function () {
    if (that.currentMilliseconds === 99) {
      that.currentMilliseconds = 0;
    }
    that.setMilliseconds();
    that.currentMilliseconds += 1;
  }, 10);
};

// setMinutes function
Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

// setSeconds function
Chronometer.prototype.setSeconds = function (minutes) {
  return Math.floor(this.currentTime - (minutes * 60));
};

// twoDigitsNumber function
Chronometer.prototype.twoDigitsNumber = function (value) {
  return ('0' + value).slice(-2);
};

// setTime function called on every interval of the setInterval
// in startClick method. Function creates minutes and seconds
// variables with their values according to currentTime
Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  // printTime(minutes, seconds);
};

Chronometer.prototype.setMilliseconds = function () {
  var miliseconds = this.twoDigitsNumber(this.currentMilliseconds);
  // printMilliseconds(miliseconds);
};

// Clears "setInterval" using "clearInterval"
Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.millisecondsIntervalId);
};

// resetClick method
Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.currentMilliseconds = 0;
  this.setTime();
  this.setMilliseconds();
  // clearSplits();
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  var miliseconds = this.twoDigitsNumber(this.currentMilliseconds);
  printSplit(minutes, seconds, miliseconds);
};