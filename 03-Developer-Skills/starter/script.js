// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// What is temp amplitude? Answer: difference between highest and lowest temp
// How to compute a  max and min temp?
// What is a sensor error? ANd what to do when it occurs?

// 2) Breaking up into sub-problems
// -How to ignore errors?
//Find max value in temp array
// Find min value
// Subtract min from max and then return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should receive 2 arrays of temp

// 1) Undertstanding the problem
// 2) Breaking upinto sub-problems


const measurementKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) Fix the bug, convert string to number
    value: Number(prompt('Degrees celcius:')),
  };
  //console.log(measurement);
  // B) Find
  console.table(measurement);
  
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// identify the bug
console.log(measurementKelvin());
*/
