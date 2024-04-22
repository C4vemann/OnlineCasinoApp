class SlotMachine{
	constructor(){
		this.slotMachineImageHandler = new SlotMachineImageHandler();
		this.slotNumberGenerator = new SlotNumberGenerator();
		this.slotMachineScreen = new SlotMachineScreen(this.slotMachineImageHandler);
		this.slotMachinePullBar = new SlotMachinePullBar(this.slotNumberGenerator,this.slotMachineScreen);
		this.element = this.init(this.slotMachineScreen,this.slotMachinePullBar);
	}

	init(slotMachineScreen,slotMachinePullBar){
		let root = document.createElement("div");
		root.style.width = "fit-content";
		root.style.margin = "auto";
		root.append(slotMachineScreen.element);
		root.append(slotMachinePullBar.element);
		return root;
	}

}