// import Ball from './Ball';
import RGB from './RGB';

export default class CreationControls {
  private readonly controlsPanel = document.querySelector(
    '#controls',
  ) as HTMLDivElement;
  private readonly creationForm = this.controlsPanel.querySelector(
    'form',
  ) as HTMLFormElement;
  private readonly colorPanel = document.querySelector(
    '.rgb-selector',
  ) as HTMLDivElement;
  private readonly closePanelButton = this.controlsPanel.querySelector(
    '#close',
  ) as HTMLButtonElement;
  private readonly openPanelButton = document.querySelector(
    '#add-button',
  ) as HTMLButtonElement;
  private readonly randomColorButton = this.controlsPanel.querySelector(
    '#random-color',
  ) as HTMLButtonElement;

  constructor() {
    this.openPanelButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.openPanel();
    });

    this.closePanelButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.closePanel();
    });

    this.randomColorButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.getRandomColor();
    });

    this.initColorDisplayUpdateChecker();
  }

  private openPanel() {
    this.controlsPanel.classList.remove('controls-closed');
  }

  private closePanel() {
    this.controlsPanel.classList.add('controls-closed');
    const inputs = this.creationForm.querySelectorAll(
      'input',
    ) as unknown as HTMLInputElement[];

    inputs.forEach((input) => {
      input.value = '';
    });
  }

  private getRgbArray(): RGB {
    const colorData = this.colorPanel.querySelectorAll(
      'input',
    ) as NodeListOf<HTMLInputElement>;

    const rgbArray: number[] = [];

    colorData.forEach((colorInput) => {
      const value = Number(colorInput.value);
      if (value > 255) return rgbArray.push(255);

      rgbArray.push(value);
    });

    // console.log(rgbArray);
    return new RGB(rgbArray[0], rgbArray[1], rgbArray[2]);
  }

  private getRandomColor() {
    const inputs = this.colorPanel.querySelectorAll(
      'input',
    ) as unknown as HTMLInputElement[];

    inputs.forEach((input) => {
      input.value = Math.floor(Math.random() * 255 + 1).toString();
    });
  }

  private initColorDisplayUpdateChecker() {
    const colorDisplay = this.colorPanel.querySelector(
      '#color-display',
    ) as HTMLDivElement;
    setInterval(() => {
      colorDisplay.style.backgroundColor = this.getRgbArray().htmlRgbColor();
    }, 600);
  }
}
