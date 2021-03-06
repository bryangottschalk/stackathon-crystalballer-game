let game, ball, bumper1, bumper2;

let playerOneState = {
  direction: null,
};
let playerTwoState = {
  direction: null,
};
window.onload = function() {
  const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    parent: 'phaser-game',
    scene: [SceneMain, GameOver],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
  };
  game = new Phaser.Game(config);
};

const noscroll = () => {
  window.scrollTo(0, 0);
};

window.addEventListener('scroll', noscroll);
