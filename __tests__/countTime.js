const freeTime = require('../index.js');

test('computes difference between two times', () => {
  let dt1 = new Date(1989, 4, 15, 13, 30, 0, 0);
  let dt2 = new Date(2021, 4, 15, 21, 0, 0, 0);
  expect(freeTime(dt1, dt2)).toBe(1009870200000);
});
