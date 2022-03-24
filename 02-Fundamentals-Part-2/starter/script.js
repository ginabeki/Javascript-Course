'Use strict';

/* let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive:D');

// const interface = 'Audio';
// const private = 534;

// Functions

function logger() {
    console.log('My name is Gina');
}

// Calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;

}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Gina'));
console.log(yearsUntilRetirement(1980, 'Diana'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


// Reviewing functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1
    }

    // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Gina'));
console.log(yearsUntilRetirement(1970, 'Beki'));

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀

// Introduction to arrays

const friend1 = 'Michael';
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
// to get the last element in the array
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends);

const firstName = 'gina';
const gina = [firstName, 'Beki', 2037 - 1991, 'developer', friends];
console.log(gina);
console.log(gina.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];
//push adds element to the end of an array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//unshift add elements
friends.unshift('Gina')
console.log(friends);

// remove elements
friends.pop()
const popped = friends.pop();
console.log(popped)
console.log(friends);

// remove first element
friends.shift(); // first
console.log(friends);

// position
console.log(friends.indexOf('Steven'));


//es6 method
console.log(friends.includes('Bob'))

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀

// Introduction to objects

const jonas = {
    firstName :'Jonas',
    lastName:'Beki',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'Ray', 'Jay']
};

//Dot vs bracket notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Beki',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'Ray', 'Jay']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// in what situation should we use dot notation and brackets notation

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@gina_bw'
console.log(jonas)

// challenge
//'Jonas has 3 friends, and his best friend is called Michael'

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//Object methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Beki',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'Ray', 'Jay'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a - ${this.age} year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// Challenge
// 'Jonas is a 46-year old teacher, and he has a drivers license'
// console.log();
console.log(jonas.getSummary());


// Iteration The for Loop
// console.log('Lifting weights repetition');

//for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonas = [
    'Jonas',
    'Beki',
    2037 - 1991,
    'teacher',
    ['michael', 'Peter', 'Steven'],
    true

];
const types = [];


// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     //FIlling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(2037 - years[i])
}
console.log(age);

// Continue and break
console.log('===ONLY STRING===')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);

}

// Break terminates the whole loop

console.log('===BREAK WITH NUMBER===')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') break;
    console.log(jonas[i], typeof jonas[i]);

}

const jonas = [
    'Jonas',
    'Beki',
    2037 - 1991,
    'teacher',
    ['michael', 'Peter', 'Steven'],


];

// loop backwards 4,3, ...
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// loop inside a loop
for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`== Starting exercise ${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise${exercise}:Lifting weight repetition ${rep}`)
    }
}
*/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++
}
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end ...')
}