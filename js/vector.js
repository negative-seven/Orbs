class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	equals(position) {
		return this.x == position.x && this.y == position.y
	}

	add(vector) {
		return new Vector(this.x + vector.x, this.y + vector.y)
	}

	subtract(vector) {
		return this.add(vector.multiply(-1))
	}

	multiply(scalar) {
		return new Vector(this.x * scalar, this.y * scalar)
	}

	divide(scalar) {
		return this.multiply(1 / scalar)
	}

	magnitude() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}

	angle() {
		return Math.atan2(this.y, this.x)
	}
}

function vectorFromPolarCoordinates(magnitude, angle) {
	return new Vector(
		magnitude * Math.cos(angle),
		magnitude * Math.sin(angle),
	)
}
