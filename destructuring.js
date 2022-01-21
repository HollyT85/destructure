/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages= [30, 26, 27];
let [john, mary, joe]= ages;
/**let john=ages[0];
let mary = ages [1];
let joe = ages[2];*/
console.log (john, mary, joe);

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
}

let {mike, jill, alicia}=jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages=['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary]=languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, , marySecondary]=languages;
console.log(maryNative, marySecondary);

let lang = {
    firstLang:'english',
    secondLang:'french',
    thirdLang:'spanish',
    fourthLang:'german'
};
let {firstLang, thirdLang}=lang;
console.log(firstLang, thirdLang);

// Using rest parameter syntax
let fruits=['apple', 'orange', 'banana', 'peach', 'cherry'];
let [fave, secondFave, ...others]=fruits;
console.log (fave);
console.log(secondFave);
console.log(others);

let faveFoods= {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak',
}

let {brian, anna, ...rest}=faveFoods;
console.log(brian, anna, rest);

