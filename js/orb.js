class Orb {
	static get FRICTION() {
		return 0.90
	}

	constructor(game, position, hue) {
		this.game = game
		this.position = position
		this.velocity = new Vector(0, 0)
		this.hue = hue
	}

	runTick() {
		for (let other of this.game.orbs) {
			let force = new Vector(
				other.position.x - this.position.x,
				other.position.y - this.position.y,
			)
			force = force.multiply(10)
			
			let distance = this.position.subtract(other.position).magnitude()
			if (distance < 1)
			{
				distance = 1
			}
			force = force.multiply(1 / Math.pow(distance, 2))

			let hueDistance = Math.min(
				((this.hue - other.hue) % 1 + 1) % 1,
				((other.hue - this.hue) % 1 + 1) % 1,
			)
			force = force.multiply(Math.pow(1 - hueDistance * 4, 31))

			this.velocity = this.velocity.add(force)
		}

		this.velocity = this.velocity.multiply(Orb.FRICTION)

		this.hue = ((this.hue + this.velocity.magnitude() / 100) % 1 + 1) % 1
	}

	applySpeed() {
		this.position = this.position.add(this.velocity)

		if (this.position.x < 0) {
			this.position.x = 0
		}
		else if (this.position.x > 500) {
			this.position.x = 500
		}

		if (this.position.y < 0) {
			this.position.y = 0
		}
		else if (this.position.y > 500) {
			this.position.y = 500
		}
	}
}