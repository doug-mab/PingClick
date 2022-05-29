export default class RGB {
  private readonly red: number;
  private readonly green: number;
  private readonly blue: number;

  constructor(red = 0, green = 0, blue = 0) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  rgbArray(): number[] {
    return [this.red, this.green, this.blue];
  }

  htmlRgbColor(): string {
    return `rgb(${this.rgbArray().join(', ')})`;
  }
}
