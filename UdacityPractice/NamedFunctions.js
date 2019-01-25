var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(favoriteMovie, name) {
  favoriteMovie(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");


//Another Way
//But you could have bypassed the first assignment of the function, by passing the
// function to the movies() function inline.

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

/*
Why use anonymous inline function expressions?
Using an anonymous inline function expression might seem like a very not-useful thing at 
first. Why define a function that can only be used once and you can't even call it by name?

Anonymous inline function expressions are often used with function callbacks that are
probably not going to be reused elsewhere. Yes, you could store the function in a variable, 
give it a name, and pass it in like you saw in the examples above. However,
when you know the function is not going to be reused, it could save you many lines of 
code to just define it inline.
*/


//Function Expression: When a function is assigned to a variable. 
//The function can be named, or anonymous. Use the variable name to call a function defined
//in a function expression.

// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};
// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5);