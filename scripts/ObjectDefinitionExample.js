var maria = {
	firstName 		: "Maria",
	hair	  		: "blond",
	eye 	  		: "blue",	
};

var pesho = {
	firstName 		: "Pesho",
	hair	  		: "black",
	eye 	  		: "red",	
};

// add another property to each object:
maria.lastName = "Popova";
pesho.lastName = "petrov";

// add method greet to each object:
maria.greet = function(){
	console.log(`Hello, I'm ${this.firstName} ${this.lastName}. I have ${this.hair} hair. My eyes are ${this.eye}.`);
    
}
pesho.greet = function(){
	console.log(`Hello, I'm ${this.firstName} ${this.lastName}. I have ${this.hair} hair. My eyes are ${this.eye}.`);
}


//Let's use the objets:
maria.greet();
pesho.greet();