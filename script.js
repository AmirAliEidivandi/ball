const obj = {
    possible: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    natral: [11, 12, 13, 14, 15],
    negative: [16, 17, 18, 19, 20],
    balls() {
        const random = Math.floor(Math.random() * this);
        if (random === this.possible) {
            console.log(`${this.possible}`);
        } else if (random === this.natral) {
            console.log(`${this.natral}`);
        } else if (random === this.negative) {
            console.log(`${this.negative}`);
        }
    }
};
obj.balls()