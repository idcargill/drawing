class Canvas {
	constructor(heigh, width) {
		this.height = heigh;
		this.width = width;
	}

	createCanvas() {
		const canvas = document.createElement('canvas');
		canvas.setAttribute('height', this.height);
		canvas.setAttribute('width', this.width);
		return canvas;
	}
}

export default Canvas;
