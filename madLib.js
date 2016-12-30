var inquirer = require("inquirer");

function MadLib(nouns,adjectives,verbs){
	this.nouns = nouns;
	this.adjectives = adjectives;
	this.verbs = verbs;
	this.story = "Once upon a [noun] there was a [adjectives] village filled wtih [noun]. The villagers to [verb] all day long.";
}
// global variables
var nouns = [];
var adjectives = [];
var verbs = [];
var loop = 0;

var getwords = function(loop){
	console.log(loop);
	console.log(adjectives);
	if(loop < 2){
		inquirer.prompt({
			name:"noun",
			message:"Enter a noun: "
		}).then(function(answers){ 
		nouns.push(answers.noun)	
		loop++;
		getwords(loop);
		})
	}
	if(loop >= 2 && loop < 3){
		inquirer.prompt({
			name:"adjective",
			message:"Enter an adjective: "
		}).then(function(answers){
			adjectives.push(answers.adjective);
			loop++;
			getwords(loop);
		})
	}
	if(loop >= 2 && loop < 3){
		inquirer.prompt({
			name:"verb",
			message:"Enter an verb: "
		}).then(function(answers){
			adjectives.push(answers.verb);
			var MadLib = new MadLib(noun,adjectives,verbs);
			console.log(madlib);
		})
	}
}
getwords(loop);