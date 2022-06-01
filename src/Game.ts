import Ball from './Ball';

export default class Game {
  private currentBall?: Ball;
  private speed!: number;
  public ballsInGame: Ball[] = [];
  private keysPressed: { [key: string]: boolean } = {};
  private walkInterval!: NodeJS.Timer;
  private gameSound = document.querySelector('#game-sound') as HTMLAudioElement;

  init(): void {
    // To be honest, I almost have no idea what I'm doing here.
    this.walkInterval = setInterval(() => {
      this.speed = 10;

      // Checks if he is moving diagonally probably in the worst way possible
      if (
        (this.keysPressed['ArrowLeft'] && this.keysPressed['ArrowUp']) ||
        (this.keysPressed['ArrowLeft'] && this.keysPressed['ArrowDown']) ||
        (this.keysPressed['ArrowRight'] && this.keysPressed['ArrowUp']) ||
        (this.keysPressed['ArrowRight'] && this.keysPressed['ArrowDown'])
      )
        this.speed = this.speed - this.speed / 5;

      if (this.keysPressed['ArrowLeft']) this.checkKeyPressX(-this.speed);
      if (this.keysPressed['ArrowRight']) this.checkKeyPressX(this.speed);
      if (this.keysPressed['ArrowUp']) this.checkKeyPressY(-this.speed);
      if (this.keysPressed['ArrowDown']) this.checkKeyPressY(this.speed);
    }, 40);

    document.addEventListener('click', (e) => {
      const ball = e.target as HTMLDivElement;
      if (ball.className == 'ball') this.switchBallTarget(ball);
      if (ball.className == 'ball-style')
        this.switchBallTarget(ball.parentElement as HTMLDivElement);
    });

    document.addEventListener('keydown', (e) => {
      this.keysPressed[e.code] = true;
    });

    document.addEventListener('keyup', (e) => {
      delete this.keysPressed[e.code];
    });
  }

  private checkKeyPressX(value: number): void {
    if (!this.currentBall) return;
    this.currentBall.move(value, 0);
  }

  private checkKeyPressY(value: number): void {
    if (!this.currentBall) return;
    this.currentBall.move(0, value);
  }

  private switchBallTarget(ball: HTMLDivElement) {
    for (const ballInGame of this.ballsInGame) {
      ballInGame.unfocusBall();

      if (ballInGame.currentBallIndex == Number(ball.dataset.number)) {
        this.updateCurrentBall(ballInGame);
        this.currentBall?.focusBall();
      }
    }
  }

  public updateCurrentBall(ball: Ball): void {
    this.currentBall = ball;
    console.log(this.currentBall);
  }

  public createNewBall(ball: Ball): void {
    this.gameSound.volume = 0.6;
    this.gameSound.play();
    this.updateCurrentBall(ball);
    this.currentBall?.insertBallIntoBrowser();
    this.ballsInGame.push(ball);
    this.switchBallTarget(ball.htmlBall);
  }
}
