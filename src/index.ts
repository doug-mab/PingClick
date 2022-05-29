// That's for test purposes :D

import Ball from './Ball';
import CreationControls from './CreationPanel';
import RGB from './RGB';

const newBall = new Ball('John', new RGB(100, 0, 100));
const newBall2 = new Ball('Evan', new RGB(150, 20, 50));
const newBall3 = new Ball('Steven', new RGB(20, 20, 80));

const creation = new CreationControls();

newBall.insertBallIntoBrowser();
newBall2.insertBallIntoBrowser();
newBall3.insertBallIntoBrowser();
