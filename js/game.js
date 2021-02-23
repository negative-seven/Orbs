class Game {
	static get ORB_COUNT() {
		return 30
	}

	constructor(canvas) {
		this.canvas = canvas
		this.context = canvas.getContext("2d")
		this.orbs = []

		this.start()
	}

	start() {
		this.orbs = []
		for (let i = 0; i < Game.ORB_COUNT; i++)
		{
			this.orbs.push(new Orb(
				this,
				new Vector(100 + Math.random() * 300, 100 + Math.random() * 300),
				Math.random()
			))
		}
	}

	update() {
		for (let orb of this.orbs) {
			orb.runTick();
		}

		for (let orb of this.orbs) {
			orb.applySpeed();
		}

		this.draw()
	}

	draw() {
		this.context.fillStyle = 'white'
		this.context.fillRect(0, 0, canvas.width, canvas.height)

		for (let orb of this.orbs) {
			this.context.beginPath()
			this.context.arc(orb.position.x, orb.position.y, 5, 0, 2 * Math.PI, false)
			this.context.fillStyle = colorFromHsv(orb.hue, 1, 1).toCssString()
			this.context.fill()
		}
	}
}