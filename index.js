function freeTime(dt1, dt2) {
  let elapsedTime = Math.abs(dt2 - dt1);
  return elapsedTime;
};

module.exports = freeTime;
