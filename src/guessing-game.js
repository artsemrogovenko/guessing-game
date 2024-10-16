class GuessingGame {
    constructor() {
        this.array=[];
        this.middleIndex= null;
    }

    setRange(min, max) {
        for (let i = 0; i < max-min; i++) {
            this.array.push(i);
        }
    }

    guess() {
        this.middleIndex =  Math.round(this.array.length / 2);
        // console.log(this.array);
        return this.array[this.middleIndex];
    }

    lower() {
        this.array= this.array.slice(0, this.middleIndex);
    }

    greater() {
        this.array= this.array.slice(this.middleIndex, this.array.length);
    }
}

module.exports = GuessingGame;
