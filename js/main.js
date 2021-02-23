var canvas = document.getElementById("canvas")
game = new Game(canvas)

setInterval(() => game.update(), 1000 / 60)
