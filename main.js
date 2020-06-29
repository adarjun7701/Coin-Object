let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        return this.state = Math.floor(Math.random() * 2)

    },


    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

        return this.state === 0 ? "Head" : "Tails"
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        if (this.state === 0) {
            image.src = "./coin-face-up.jpg"

        } else {
            image.src = "./coin-face-down.jpg"
        }
        return image;

    }
};


function display20Flips() {
    for (let i = 0; i < 20; i++) {
        let inPutBox = document.createElement('main')
        coin.flip()
        inPutBox.append(coin.toString())
        document.body.append(inPutBox)
    }


}

display20Flips()



function display20images() {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }

}
display20images()
