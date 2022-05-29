import RGB from './RGB';

export default class Ball {
  private readonly name: string;
  private readonly color: RGB;
  private readonly vector: Vector2 = new Vector2(
    window.innerWidth / 2 - 30,
    window.innerHeight / 2 - 30,
  );
  htmlBall!: HTMLDivElement;
  readonly currentBallIndex = Ball.ballIndex;

  static ballIndex = 0;
  private static ballMap = document.getElementById('root') as HTMLDivElement;

  constructor(name: string, color: RGB) {
    this.name = name;
    this.color = color;
    window.addEventListener('resize', () => {
      this.checkAndMoveToLimit();
    });
  }

  private generateBall(): HTMLDivElement {
    const newBall = document.createElement('div');
    newBall.classList.add('ball');
    newBall.dataset.number = Ball.ballIndex.toString();
    newBall.style.left = this.vector.x + 'px';
    newBall.style.top = this.vector.y + 'px';
    Ball.ballIndex++;

    const ballName = document.createElement('h2');
    ballName.innerText = this.name;
    newBall.appendChild(ballName);

    const ballStyle = document.createElement('div');
    ballStyle.classList.add('ball-style');
    ballStyle.style.backgroundColor = this.color.htmlRgbColor();
    newBall.appendChild(ballStyle);
    return newBall;
  }

  insertBallIntoBrowser(): void {
    this.htmlBall = this.generateBall();
    Ball.ballMap.appendChild(this.htmlBall);
    this.focusBall();
    console.log(`${this.name} was generated!`);
  }

  focusBall(): void {
    this.htmlBall.classList.add('ball-focus');
  }

  unfocusBall(): void {
    this.htmlBall.classList.remove('ball-focus');
  }

  move(x: number, y: number) {
    this.vector.updateLocation(x, y);
    this.htmlBall.style.left = this.vector.x + 'px';
    this.htmlBall.style.top = this.vector.y + 'px';
  }

  private checkAndMoveToLimit() {
    console.log('checking');
    this.vector.checkNewLimit();
    this.htmlBall.style.left = this.vector.x + 'px';
    this.htmlBall.style.top = this.vector.y + 'px';
  }
}

class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static defaultLocation() {
    return new Vector2(0, 0);
  }

  updateLocation(x: number, y: number) {
    if (this.x + x <= window.innerWidth - 30 && this.x + x >= 0) this.x += x;
    if (this.y + y <= window.innerHeight - 30 && this.y + y >= 0) this.y += y;
  }

  checkNewLimit() {
    if (this.x > window.innerWidth - 30) this.x = window.innerWidth - 30;
    if (this.y > window.innerHeight - 30) this.y = window.innerHeight - 30;
  }
}
