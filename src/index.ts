import Game from './Game';
import CreationControls from './CreationPanel';

const myGame = new Game();
const panel = new CreationControls(myGame);

myGame.init();
panel.init();
