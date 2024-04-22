class SlotMachineSlotImage{
	constructor(imageName = null){
		this.imageName = imageName;
		this.element = this.init(this.imageName);
	}

	init(imageName){
		let image = document.createElement("img");
		image.style.width = "100%";
		image.style.height = "100%";

		if(imageName == null || imageName == undefined){
			image.src = "./images/1F643.svg";
		} else {
			image.src = imageName;
		}

		return image;
	}

	changeImage(imageName){
		this.imageName = imageName;
		this.element.src = this.imageName;
	}
}