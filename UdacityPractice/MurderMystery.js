var room = "dining room";
var weapons = "";
var suspects = "Mr. Parkes";
var solved = false;

if (room === "ballrooom" && suspects === "Mr. Kalehoff") {
    weapons = "poison";
    solved = true;
}else if (room === "dining room" && suspects === "Mr. Parkes") {
    weapons = "knife";
    solved = true;
}else if (room === "billiards room" && suspects === "Mrs. Sparr") {
    weapons = "pool stick";
    solved = true;
}else {
    weapons = "trophy";
    solved = true;
}

if (solved) {
    console.log(suspects + " did it in the " + room + " with the " + weapons + "!");
}