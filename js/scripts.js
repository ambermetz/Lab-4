const name = "Amber";
const age = 30;
const birthday = "10/06";
const detroitGC = true;
const lifeEvents = [
  "I was born in Ohio.",
  "I moved to Michigan when I was 9 years old.",
  "I own a house that was built in 1830 and have been remodeling it for the past 7 years.",
  "I did woodworking professionally for a year Lucky Monkey Tattoo in Ann Arbor hired me to do work for their new shop."
];
let arrayLength = lifeEvents.length;

let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;

if (detroitGC === true) {
  console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
        I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
  console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids,
        Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i <= arrayLength - 1; i++) {
  console.log(lifeEvents[i]);
}

while (true) {
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
    randomNumber = Math.floor(Math.random() * 11);
    counter++;
  } else {
    counter++;
    console.log(`5 === 5. It took ${counter}
    iterations to randomly generate the number 5.`);
    break;
  }
}
