'use strict';

import Phaser from 'phaser';
import RainbowText from '../Object/RainbowText';

import Mummy from '../Object/Mummy';

export default class GameState extends Phaser.State {

    init({ nbmummies }) {
        this.nbmummies = nbmummies;
    }

    preload() {
        console.log('preload !');
        Mummy.preload(this.game);
    }

    create() {

        const { game } = this;

        game.stage.backgroundColor = "#ffffff";
        game.time.advancedTiming = true;

        // Les sprites

        for(let k = 0; k < this.nbmummies; k++) {
            const mummysprite = game.add.sprite(k * 20, (k * 20) % 333, Mummy.spritehandler);

            mummysprite.animations.add('walk');
            mummysprite.animations.play('walk', 13+k, true);

            game.add.tween(mummysprite).to({ x: game.width }, 30000, Phaser.Easing.Linear.None, true);
        }

        const key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        key1.onDown.add(() => console.log(1), this);

        this.cursors = game.input.keyboard.createCursorKeys();
    }

    update() {

        const { cursors, game } = this;

        game.debug.text(game.time.fps ? game.time.fps + ' fps' : '--', 2, 14, "#AAA");

        //  For example this checks if the up or down keys are pressed and moves the camera accordingly.
        if (cursors.up.isDown) {
            //  If the shift key is also pressed then the world is rotated
            if (cursors.up.shiftKey) {
                game.world.rotation += 0.05;
            } else {
                game.camera.y -= 4;
            }
        } else if (cursors.down.isDown) {
            if (cursors.down.shiftKey) {
                game.world.rotation -= 0.05;
            } else {
                game.camera.y += 4;
            }
        }

        if (cursors.left.isDown) {
            game.camera.x -= 4;
        } else if (cursors.right.isDown) {
            game.camera.x += 4;
        }

    }
};
