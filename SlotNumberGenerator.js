class SlotNumberGenerator{
	constructor(){
		this.generatedListOfNumbers = [];
		this.isWinner = false;
	}

	generateListOfNumbers(){
		this.generatedListOfNumbers = [];
		this.isWinner = false;

		for(let i = 0; i < 9; i++){
			this.generatedListOfNumbers.push(Math.floor(Math.random() * (9 - 0)) + 0);
		}

		this.checkIfWinner();
	}

	checkIfWinner(){
		let flag1 = false;
		let flag2 = false;
		let flag3 = false;
		let flag4 = false;
		let flag5 = false;

		if(	this.generatedListOfNumbers[0] === this.generatedListOfNumbers[1] &&
			this.generatedListOfNumbers[0] === this.generatedListOfNumbers[2] &&
			this.generatedListOfNumbers[1] === this.generatedListOfNumbers[2]){
			flag1 = true;
		}

		if(	this.generatedListOfNumbers[3] === this.generatedListOfNumbers[4] &&
			this.generatedListOfNumbers[3] === this.generatedListOfNumbers[5] &&
			this.generatedListOfNumbers[4] === this.generatedListOfNumbers[5]){
			flag2 = true;
		}

		if(	this.generatedListOfNumbers[6] === this.generatedListOfNumbers[7] &&
			this.generatedListOfNumbers[6] === this.generatedListOfNumbers[8] &&
			this.generatedListOfNumbers[7] === this.generatedListOfNumbers[8]){
			flag3 = true;
		}

		if(	this.generatedListOfNumbers[0] === this.generatedListOfNumbers[4] &&
			this.generatedListOfNumbers[0] === this.generatedListOfNumbers[8] &&
			this.generatedListOfNumbers[4] === this.generatedListOfNumbers[8]){
			flag4 = true;
		}

		if(	this.generatedListOfNumbers[2] === this.generatedListOfNumbers[4] &&
			this.generatedListOfNumbers[2] === this.generatedListOfNumbers[6] &&
			this.generatedListOfNumbers[4] === this.generatedListOfNumbers[6]){
			flag5 = true;
		}

		if(flag1 || flag2 || flag3 || flag4 || flag5){
			this.isWinner = true;
		} else{
			this.isWinner = false;
		}
	}
}