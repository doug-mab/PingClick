import Ball from './Ball';

export default class Game {
  private currentBall?: Ball;
  private speed!: number;
  public ballsInGame: Ball[] = [];
  private keysPressed: { [key: string]: boolean } = {};
  private walkInterval!: NodeJS.Timer;

  init(): void {
    // To be honest, I almost have no idea what I'm doing here.
    this.walkInterval = setInterval(() => {
      this.speed = 6;

      // Checks if he is moving diagonally probably in the worst way possible
      if (
        (this.keysPressed['ArrowLeft'] && this.keysPressed['ArrowUp']) ||
        (this.keysPressed['ArrowLeft'] && this.keysPressed['ArrowDown']) ||
        (this.keysPressed['ArrowRight'] && this.keysPressed['ArrowUp']) ||
        (this.keysPressed['ArrowRight'] && this.keysPressed['ArrowDown'])
      )
        this.speed /= 2;

      if (this.keysPressed['ArrowLeft']) this.checkKeyPressX(-this.speed);
      if (this.keysPressed['ArrowRight']) this.checkKeyPressX(this.speed);
      if (this.keysPressed['ArrowUp']) this.checkKeyPressY(-this.speed);
      if (this.keysPressed['ArrowDown']) this.checkKeyPressY(this.speed);
    }, 20);

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

  public updateCurrentBall(ball: Ball): void {
    this.currentBall = ball;
  }
  public createNewBall(ball: Ball): void {
    this.updateCurrentBall(ball);
    this.ballsInGame.push(ball);
    this.currentBall?.insertBallIntoBrowser();
  }
}
