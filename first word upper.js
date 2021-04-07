// ask user in a prompt for their name

var name = prompt("What is your name?");

var cap = name.slice(0,1);

var upper = cap.toUpperCase();

var last = name.slice(1,name.length);

//this line will make everything lower case except first letter if user inputs random upper case
last = last.toLowerCase();

alert("Hello" + ' ' + upper + last);

