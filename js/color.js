class Color {
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }

    toCssString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}

function colorFromHsv(h, s, v) {
    // https://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c

    let r, g, b;

    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return new Color(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255))
}
