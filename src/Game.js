'use strict';

import Phaser from 'phaser';

import GameState from './State/GameState';

export default class Game extends Phaser.Game {

    constructor({ nbmummies }) {

        super(1024, 768, Phaser.AUTO, 'content', null);

        //this.time.advancedTiming = true;

        this.state.add('GameState', GameState, false);
        this.state.start(
            'GameState',
            true,
            true, {
                nbmummies
            }
        );
    }
};
