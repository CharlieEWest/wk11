// constuctor is used to create an object.
// fellows skematie property and method 
  function Charactor(name, profession, gender, age, strength, hitpoints){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hitpoints;
// adding method
this.printStats = function(){
	console.log("Name: "+this.name+"\nProfession: "+this.profession+"\nGender: "+this.Gender+ "\nAge: "+this.age+"\nStrength: "+this.strength+"\nHitpoints: "+this.hitpoints);
};
this.isAlive = function(){ 
	if(this.hitpoints > 0){ 
		console.log(this.name+" is alive!");
		return true;
		} else {
		console.log(this.name+" is dead!");
		return false;
		}
	}
	this.attack = function(Charactor2){
		Charactor2.hitpoints -= this.strength;
	}
	this.levelUp = function(){
		this.age += 1;
		this.strength += 5;
		this.hitpoints += 25;
	}
}
 
 var warrior = new Charactor("Crusher", "Warrior", "Male", 25, 10,75);
 var rogue = new Charactor("Dodger", "Rogue", "female",23,20,50);

warrior.printStats();
console.log();
rogue.printStats();

rogue.attack(warrior);
console.log();
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
console.log();
rogue.printStats();
 

// basic constructor
/*function Person(name, age){
	this.name = name;
	this.age = age;
}

var person1 = new Person("chuck", 56);
var person2 = new Person("Marj",60);

console.log(person1);
console.log(person2);*/