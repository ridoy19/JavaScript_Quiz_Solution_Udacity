var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1);
rainbow.splice(2, 0, "Yellow","Green");
rainbow.splice(5, 0, "Purple");

//console.log(rainbow.splice(rainbow.length - 2,1,"Yellow","Green","Purple"));
console.log(rainbow);