'use strict';

import Phaser from 'phaser';

export default class RainbowText extends Phaser.Text {

    constructor(game, x, y, text) {

        super(game, x, y, text, { font: "60px Arial", align: "center" });

        this._speed = 1000/60; //60fps
        this._colorIndex = 0;
        this._colors = ['yellow', 'magenta', 'cyan'];

        this.colorize();
        this.startTimer();

        this.game.stage.addChild(this);
    }

    update() {
        this.position.x = this.position.x + 3 * ((Math.random() >= .5) ? 1 : -1);    // up 1 pixel
        this.position.y = this.position.y + 3 * ((Math.random() >= .5) ? 1 : -1);    // up 1 pixel
        this.angle += 1;
    }



    startTimer() {
        this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
    }

    colorize() {

        for (let i = 0; i < this.text.length; i++) {
            if (this._colorIndex === this._colors.length) {
                this._colorIndex = 0;
            }

            this.addColor(this._colors[this._colorIndex], i);
            this._colorIndex++;
        }
    }
}
