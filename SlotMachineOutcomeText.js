class SlotMachineOutcomeText{
	constructor(){
		this.element = this.init();
	}

	init(){
		let root = document.createElement("p");
		root.style.padding = "10px 0px";
		root.style.margin = "0px";
		root.style.textAlign = "center";
		root.style.fontSize = "32px";
		root.innerText = "\n";
		return root;
	}
}