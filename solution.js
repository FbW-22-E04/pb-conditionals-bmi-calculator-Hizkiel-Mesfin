//Q1 Store Mark's and John's mass and height in variables.

const markHeight = 1.85;
const markMass = 90;
const johnHeight = 1.64;
const johnMass = 71;

//Q2 Calculate both their BMIs and store their BMIs in variables.

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreBeefCake = markBMI > johnBMI;

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  `Q4: Say true or false. Does mark have a higher BMI than john? And the answer is ${markMoreBeefCake}`
);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI) {
  console.log(`Mark ${markBMI.toFixed(2)}`);
} else {
  console.log(`John ${johnBMI.toFixed(2)}`);
}
