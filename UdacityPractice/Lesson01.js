// console.log("Hello" % 10);

/*for (var i = 0; i < 10; i++) {
    console.log((i + 1) % 4 == 0 ? "\n" : "no");
}*/

// var name = "Jakaria";
// console.log(name.charAt(3));

// var name = "Jakaria Hossain Ridoy"
// console.log("Character at index \"4\" is :\t " + name.charAt(4));
// console.log("The file located at \"C:\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster.");
// console.log("1" == 1); //This is bad practice for comparing
//values string, numbers and booleans

// console.log("1" === 1); //This is good practice and is called Strict Equality
// console.log(true >= 0);
// // calculating the square root of a negative number will return NaN -- Not-a-Number
// console.log(Math.sqrt(-10));

// trying to divide a string by 5 will return NaN
// "hello"/5

// var x = null;
// console.log(x);

//Udacity Quiz

// var bill = 10.25 + 3.99 + 7.15;
// var tip = bill * 0.15;
// var total = bill + tip;
// console.log("Total is : " + "$" + total.toFixed(2));
// /**round decimal point to two points use toFixed() method */

//Udacity Quiz
var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

//Udacity Eevn/Odd quiz example
// var number = 2;
// if (number % 2 === 0){
//     console.log("even");
// }else {
//     console.log("odd");
// }

var firstName = "Jakaria";
var interest = "cricket";
var hobby = "cats";
var awesomeMessgae = "Hi, my name is " + firstName + "." +" I love " + interest + "."+" In my spare time, I like to "+hobby+".";
console.log(awesomeMessgae);

console.log(6 % 3);