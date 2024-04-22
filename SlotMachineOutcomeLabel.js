class SlotMachineOutcomeLabel{
	constructor(){
		this.outcomeText = new SlotMachineOutcomeText();
		this.element = this.init(this.outcomeText);
	}

	init(outcomeText){
		let root = document.createElement("div");
		root.append(outcomeText.element);
		return root;
	}

	changeText(newText){
		this.outcomeText.element.innerText = newText;
	}
}