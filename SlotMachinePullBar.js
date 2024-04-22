class SlotMachinePullBar{
	constructor(slotNumberGenerator,slotMachineScreen){
		this.element = this.init(slotNumberGenerator,slotMachineScreen);
	}

	init(slotNumberGenerator,slotMachineScreen){
		let root = document.createElement("button");
		root.innerText = "PULL";
		root.style.margin = "auto";
		root.style.width = "100%";
		root.style.fontSize = "24px";

		root.addEventListener("click", () => {
			slotNumberGenerator.generateListOfNumbers();
			slotMachineScreen.changeSlots(slotNumberGenerator);
		});


		return root;
	}
}