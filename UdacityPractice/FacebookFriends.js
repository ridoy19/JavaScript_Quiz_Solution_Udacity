/*
 * Programming Quiz: Facebook Friends
 */

var facebookProfile = {
	name : "Jakaria Hossain Ridoy",
	friends : 576,
	messages : ["Tui Ajke Ki khabi.","Shalar Routine Ta Pura Faltu Banaise!","Kalke Sokal 9.05am a Registration."],


	postMessage : function postMessage (message) {
		facebookProfile.messages.push(message);
	},

	deleteMessage : function deleteMessage (index) {
		facebookProfile.messages.splice(index,1);
	},

	addFriend: function addFriend () {
		facebookProfile.friends += 1;
	},

	removeFriend: function removeFriend () {
		facebookProfile.friends -= 1;
	}
};


facebookProfile.postMessage("Today is Rangpur Riders Day!");
facebookProfile.postMessage("Today is Dhaka Dynamites Day!");
console.log(facebookProfile.messages);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);