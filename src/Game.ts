import Ball from './Ball';

export default class Game {
  private currentBall?: Ball;
  private speed = 3;
  public ballsInGame: Ball[] = [];
  private keysPressed: { [key: string]: boolean } = {};
  private walkInterval!: ReturnType<typeof setInterval>;

  init(): void {
    document.addEventListener('keydown', (e) => {
      this.keysPressed[e.code] = true;
      if (!this.walkInterval) {
        this.walkInterval = setInterval(() => {
          if (this.keysPressed['ArrowLeft']) this.checkKeyPressX(-this.speed);
          if (this.keysPressed['ArrowRight']) this.checkKeyPressX(this.speed);
          if (this.keysPressed['ArrowUp']) this.checkKeyPressY(-this.speed);
          if (this.keysPressed['ArrowDown']) this.checkKeyPressY(this.speed);
        }, 20);
      }
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
