'use strict';

import Phaser from 'phaser';

export default class Mummy extends Phaser.Sprite {

    static spritehandler = 'mummysprite';

    static preload(game) {

        //  37x45 is the size of each frame
        //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
        //  blank frames at the end, so we tell the loader how many to load
        game.load.spritesheet(Mummy.spritehandler, 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
    }
}
