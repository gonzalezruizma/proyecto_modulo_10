class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = 10,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game, width, height, x, y);
        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
        this.speed = speed;
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }
    
    collide() {
        this.game.endGame();
    }
}