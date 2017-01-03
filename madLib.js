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

var getWords = function(loop){
	if(loop < 2){ 
		inquirer.prompt({ 
			name:"noun",
			message:"Enter a noun: "
		}).then(function(answer){ 
			nouns.push(answer.noun);
			loop++;
			getWords(loop);
		})
	 }
	if(loop >= 2 && loop < 3){
		inquirer.prompt({
			name:"adjective",
			message:"Enter an adjective: "
		}).then(function(answers){
			adjectives.push(answers.adjective);
			loop++;
			getWords(loop);
		})
	}
	if(loop >= 3  && loop < 4){
		inquirer.prompt({
			name:"verb",
			message:"Enter an verb: "
		}).then(function(answers){
			verb.push(answers.verb);
			var madLib = new MadLib(noun,adjectives,verbs);
			constructStory(madLib);
		})
	}
}

	 var constructStory = function(completeObject){
   		for(var i=0;i<2;i++){
 		completeObject.story = completeObject.story.replace("[noun]",completeObject.nouns[i]);
 	}
 	 	for(var i=0;i<1;i++){
   		completeObject.story = completeObject.story.replace("[adjective]",completeObject.adjectives[i]);
    	}
    	for(var i=0;i<1;i++){
   		completeObject.story = completeObject.story.replace("[verb]",completeObject.verbs[i]);
    		}
    	console.loop(completeObject.story);
    }	

 getWords(loop);

