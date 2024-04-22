class SlotMachineScreen{
	constructor(slotMachineImageHandler){
		this.slotMachineImageHandler = slotMachineImageHandler;
		this.outcomeLabel = new SlotMachineOutcomeLabel();
		this.slots = this.createSlots();
		this.element = this.init(this.outcomeLabel, this.slots);
	}

	createSlots(){
		let slots = [];
		for(let i = 0; i < 9; i++){
			slots.push(new SlotMachineSlot());
		}
		return slots;
	}

	changeSlots(slotNumberGenerator){
		for(let i = 0; i < 9; i++){
			this.slots[i].image.changeImage(this.slotMachineImageHandler.get(slotNumberGenerator.generatedListOfNumbers[i]));
		}
		if(slotNumberGenerator.isWinner){
			this.outcomeLabel.changeText("WINNER");
		} else {
			this.outcomeLabel.changeText("LOSER");
		}
	}

	init(outcomeLabel, slots){
		let root = document.createElement("div");
		root.append(outcomeLabel.element);

		let outcomeBody = document.createElement("div");
		outcomeBody.style.display = "grid";
		outcomeBody.style.gridTemplateColumns = "72px 72px 72px";
		for(let slot of slots){
			outcomeBody.append(slot.element);
		}
		root.append(outcomeBody);

		return root;
	}
}