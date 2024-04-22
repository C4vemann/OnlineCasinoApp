class SlotMachineImageHandler{
	constructor(){
		this.imageDir = "./images/";
		this.imageNames = ["1F600.svg","1F601.svg","1F602.svg","1F603.svg","1F604.svg","1F605.svg","1F606.svg","1F923.svg","1FAE0.svg"];
	}

	get(index){
		return this.imageDir + this.imageNames[index];
	}
}