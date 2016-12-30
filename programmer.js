// Lesson 11.1 Programming Loop

var inquirer = require('inquirer');

function Programmer(name, position, age, language){
	this.name = name;
	this.posistion = position;
	this.age = age;
	this.language = language;

	this.printInfo = function(){
		console.log("Name: "+this.name+"\nPosition: "+this.postion+"\nAge: "+this.age+"\nLanguage: "+this.language);
 }
}
// var count = 0;
// var askQuestion = function(){ 
 //	if (count < 2){ 
	inquirer.prompt([{
		name:"name",
		massage:"What is your name?"
	},{ 
		name: "position",
		message: "What is your position?"
	},{
		name: "age",
		message: "What is your age?"
	},{
		name: "language",
		message: "What is your favorute Programming language?"
	}]).then(function(answers){
		var newGuy = new Programmer(answers.name,answers.postion,answers.age,answers.language);
		newGuy.printInfo();
// 		count++;
//		askQuestion();		
	})
// } else {
//	console.log('All done!")
// }
// }
// recursion 