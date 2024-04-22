class SlotMachineSlot{
	constructor(){
		this.value = null;
		this.image = new SlotMachineSlotImage();
		this.element = this.init(this.image);
	}

	init(image){
		let root = document.createElement("div");
		root.className = "slotmachineslot";
		root.style.width = "72px";
		root.style.height = "72px";
		root.style.backgroundColor = "green";
		root.append(image.element);

		return root;
	}

}