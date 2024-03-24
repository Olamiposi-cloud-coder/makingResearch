"use strict";
// Given an array of temperature values for one day, 
// calculate the temperature amplitude. 
// but keep in mind that there might be a sensor error

const temperaturesArray = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let max = temperaturesArray[0];
let min = temperaturesArray[0];

function calcTempAmplitude (temps) {
    for (let i = 0; i < temps.length; i++) {

        if (typeof temps[i] !== 'number') continue;

        if (temps[i] > max) {
            max = temps[i];
        } else if (temps[i] < min) {
            min = temps[i];
        }
    }

    console.log(max, min)

    return max - min;
}

const amplitude = calcTempAmplitude(temperaturesArray);
console.log(amplitude)

// further problems
// the same solution should happen when two argument are passed



function calcTempAmplitudeNew (temps1, temps2) {

    const temps = temps1.concat(temps2)

    console.log(temps)

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) { 
            max = temps[i];
        } else if (temps[i] < min) {
            min = temps[i];
        }
    }

    console.log(max, min)

    return max - min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew)