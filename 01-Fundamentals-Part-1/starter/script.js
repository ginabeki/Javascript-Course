/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Gina");
console.log("23");

let firstName = "Gina";

//Variable Name Conventions

// let first = "Gina"
// let firstNamePerson
// let first_name_person

let person = "Gina";
let PI = 3.1415;

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";

console.log(myFirstJob);
console.log(myCurrentJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


//We use let key word for variables likely to change

let age = 30;
//Reassigning or mutating a variable
age = 31;

console.log(age);

//const variables cannot be changed

// const birthYear = 1991;

// const job;
//Always use const unless you are sure the variables can change that is when you can use let

var job = 'programmer';
job = 'teacher';

//Always declare variables, don't do this
lastName = 'Beki';
console.log(lastName);

//Math operators
const now = 2037;
const ageGina = now - 1991;
const ageDiana = now - 2018;
console.log(ageGina, ageDiana);

console.log(ageGina * 2, ageGina / 10, 2 ** 3)
//2**3 means 2 to the power of three = 2*2*2

const firstName = 'Gina';
const lastName = 'Beki';

console.log(firstName + ' ' + lastName);

//Assignment operators

let x = 10 + 5; // 15
x += 10; // x= x+10 = 25
x *= 4; // x= x*4 = 100
x++; // x= x+1 = 101
x--; // x= x-1 = 99
console.log(x);

//Comparison operators to produce boolean values

console.log(ageGina > ageDiana); // >, >, >=, <=
console.log(ageDiana >= 18);

const isFullAge = ageDiana >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageGina = now - 1991;
const ageDiana = now - 2018;


console.log(now - 1991 > now - 2018);

console.log(25 - 1 - 5);
let x, y;
x = y = 25 - 10 - 5; //x=y=10, x=10
console.log(x, y);

const averageAge = (ageGina + ageDiana) / 2
console.log(ageGina, ageDiana, averageAge);

JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀


// SOLUTION
//Test 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Test 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2; // 27.309968138370508
const BMIJohn = massJohn / heightJohn ** 2; // 24.194608809993426
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

//STRING LITERALS

const firstName = 'Gina';
const job = 'Software engineer';
const birthYear = 1991;
const year = 2037;

const Gina = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(Gina);

const ginaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ginaNew);

console.log(`JUst a regular string...`)

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`)


const age = 15;

if (age >= 18) {
    console.log('Gina can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Gina is too young. Wait another ${yearsLeft} years :)`);
}
// Control structure
// if(){

// } else {

// }

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
//Test 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Test 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2; // 27.309968138370508
const BMIJohn = massJohn / heightJohn ** 2; // 24.194608809993426
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark >= BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`John's BMI (${BMIJohn})is higher than Mark's (${BMIMark})`)
}

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Gina'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

// Guess the output
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(String('Gina'));
console.log(Boolean(''));

const money = 0;
//test if someone has money or not
if (money) {
    console.log("Don't spend it all;");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

//Equality operator
// Always use tripple equal operator
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
// avoid loose equality operate, helps to prevent bugs
if (age == 18) console.log('You just became an adult :D (loose)');

// get a value from any webpage
const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //'23' ==23 22 === 23 -> FALSE
    console.log("Cool! 23 is an amazing number!")
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is a cool number');
}
else {
    console.log('Number is not 23 or 7 0r 9')
}

if (favourite !== 23) console.log("Why not 23");

const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK


// // Average
// const averageDolphins = (96 + 108 + 89) / 3; // 97.66666666666667
// const averageKoalas = (88 + 91 + 110) / 3; // 96.33333333333333
// console.log(averageDolphins);
// console.log(averageKoalas);

// if (averageDolphins > averageKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (averageKoalas > averageDolphins) {
//     console.log('Koalas win the trophy');
// } else if (averageDolphins === averageKoalas) {
//     console.log('Draw');
// }

// Bonus 1
// Average
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins);
console.log(averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log('Draw');
}


// The switch statement

const day = 'Monday';

switch (day) {
    case 'Monday': // day === 'moday
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break; // means, stop
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
        console.log('ENjoy the weekend: D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'Monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');

} else if (day === 'Friday') {
    console.log('Record videos');

} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend: D');

} else {
    console.log('Not a valid day!');
}


// Statements and expressions
if (23 > 10) {
    const str = '23 is bogger'; 
}

console.log(`I'm ${2037 - 1991} years old`);


const age = 23;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

*/