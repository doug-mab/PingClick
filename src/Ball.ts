import RGB from './RGB';

export default class Ball {
  private readonly name: string;
  private readonly color: RGB;
  private readonly vector: Vector2 = Vector2.defaultLocation();
  private htmlBall!: HTMLDivElement;
  readonly currentBallIndex = Ball.ballIndex;

  private static ballIndex = 0;
  private static ballMap = document.getElementById('root') as HTMLDivElement;

  constructor(name: string, color: RGB) {
    this.name = name;
    this.color = color;
  }

  // <div class="ball">
  //   <h2>Doug</h2>
  //   <div class="ball-style"></div>
  // </div>

  private generateBall(): HTMLDivElement {
    const newBall = document.createElement('div');
    newBall.classList.add('ball');
    newBall.dataset.number = Ball.ballIndex.toString();
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
    console.log(`${this.name} was generated!`);
  }

  move(x: number, y: number) {
    this.vector.updateLocation(x, y);
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
    this.x += x;
    this.y += y;
  }
}
