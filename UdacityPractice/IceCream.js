var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// if (flavor === "vanilla" || flavor === "chocolate" || flavor === "strawberry") {
// 	if (vessel === "cone" || vessel === "bowl") {
// 		if (toppings === "sprinkles" || toppings === "peanuts" || toppings === "cookies") {
// 			console.log('I\'d like two scoops of ' + flavor +  ' ice cream in a ' + vessel + ' with ' + toppings + '.');		}
// 	}
// }

if ((flavor === "vanilla" || flavor === "chocolate" || flavor === "strawberry")
	&& (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts" || toppings === "cookies")) {
		console.log('I\'d like two scoops of ' + flavor +  ' ice cream in a ' + vessel + ' with ' + toppings + '.');
}