/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\nclass Ball {\n    constructor(name, color) {\n        this.vector = new Vector2(window.innerWidth / 2 - 30, window.innerHeight / 2 - 30);\n        this.currentBallIndex = Ball.ballIndex;\n        this.name = name;\n        this.color = color;\n        window.addEventListener('resize', () => {\n            this.checkAndMoveToLimit();\n        });\n    }\n    generateBall() {\n        const newBall = document.createElement('div');\n        newBall.classList.add('ball');\n        newBall.dataset.number = Ball.ballIndex.toString();\n        newBall.style.left = this.vector.x + 'px';\n        newBall.style.top = this.vector.y + 'px';\n        Ball.ballIndex++;\n        const ballName = document.createElement('h2');\n        ballName.innerText = this.name;\n        newBall.appendChild(ballName);\n        const ballStyle = document.createElement('div');\n        ballStyle.classList.add('ball-style');\n        ballStyle.style.backgroundColor = this.color.htmlRgbColor();\n        newBall.appendChild(ballStyle);\n        return newBall;\n    }\n    insertBallIntoBrowser() {\n        this.htmlBall = this.generateBall();\n        Ball.ballMap.appendChild(this.htmlBall);\n        this.focusBall();\n        console.log(`${this.name} was generated!`);\n    }\n    focusBall() {\n        this.htmlBall.classList.add('ball-focus');\n    }\n    unfocusBall() {\n        this.htmlBall.classList.remove('ball-focus');\n    }\n    move(x, y) {\n        this.vector.updateLocation(x, y);\n        this.htmlBall.style.left = this.vector.x + 'px';\n        this.htmlBall.style.top = this.vector.y + 'px';\n    }\n    checkAndMoveToLimit() {\n        console.log('checking');\n        this.vector.checkNewLimit();\n        this.htmlBall.style.left = this.vector.x + 'px';\n        this.htmlBall.style.top = this.vector.y + 'px';\n    }\n}\nBall.ballIndex = 0;\nBall.ballMap = document.getElementById('root');\nclass Vector2 {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    static defaultLocation() {\n        return new Vector2(0, 0);\n    }\n    updateLocation(x, y) {\n        if (this.x + x <= window.innerWidth - 30 && this.x + x >= 0)\n            this.x += x;\n        if (this.y + y <= window.innerHeight - 30 && this.y + y >= 0)\n            this.y += y;\n    }\n    checkNewLimit() {\n        if (this.x > window.innerWidth - 30)\n            this.x = window.innerWidth - 30;\n        if (this.y > window.innerHeight - 30)\n            this.y = window.innerHeight - 30;\n    }\n}\n\n\n//# sourceURL=webpack://PingBall/./src/Ball.ts?");

/***/ }),

/***/ "./src/CreationPanel.ts":
/*!******************************!*\
  !*** ./src/CreationPanel.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreationControls)\n/* harmony export */ });\n/* harmony import */ var _RGB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGB */ \"./src/RGB.ts\");\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n\n\nclass CreationControls {\n    constructor(gameInstance) {\n        this.controlsPanel = document.querySelector('#controls');\n        this.creationForm = this.controlsPanel.querySelector('form');\n        this.colorPanel = document.querySelector('.rgb-selector');\n        this.closePanelButton = this.controlsPanel.querySelector('#close');\n        this.openPanelButton = document.querySelector('#add-button');\n        this.randomColorButton = this.controlsPanel.querySelector('#random-color');\n        this.createButton = this.creationForm.querySelector('#create-ball');\n        this.newBallInfo = {\n            name: '',\n            color: new _RGB__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0),\n        };\n        this.gameInstance = gameInstance;\n    }\n    init() {\n        this.openPanelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.openPanel();\n        });\n        this.closePanelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.closePanel();\n        });\n        this.randomColorButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.getRandomColor();\n        });\n        this.createButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.createBall();\n        });\n        this.initColorDisplayUpdateChecker();\n    }\n    openPanel() {\n        this.controlsPanel.classList.remove('controls-closed');\n    }\n    closePanel() {\n        this.controlsPanel.classList.add('controls-closed');\n        const inputs = this.creationForm.querySelectorAll('input');\n        inputs.forEach((input) => {\n            input.value = '';\n        });\n    }\n    getRgb() {\n        const colorData = this.colorPanel.querySelectorAll('input');\n        const rgbArray = [];\n        colorData.forEach((colorInput) => {\n            const value = Number(colorInput.value);\n            if (value > 255)\n                return rgbArray.push(255);\n            rgbArray.push(value);\n        });\n        return new _RGB__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rgbArray[0], rgbArray[1], rgbArray[2]);\n    }\n    getRandomColor() {\n        const inputs = this.colorPanel.querySelectorAll('input');\n        inputs.forEach((input) => {\n            input.value = Math.floor(Math.random() * 255 + 1).toString();\n        });\n    }\n    initColorDisplayUpdateChecker() {\n        const colorDisplay = this.colorPanel.querySelector('#color-display');\n        setInterval(() => {\n            colorDisplay.style.backgroundColor = this.getRgb().htmlRgbColor();\n        }, 600);\n    }\n    registerInfo() {\n        const name = this.creationForm.querySelector('#ball-name');\n        this.newBallInfo = {\n            name: name.value || `Ball ${_Ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ballIndex}`,\n            color: this.getRgb(),\n        };\n    }\n    createBall() {\n        this.registerInfo();\n        this.closePanel();\n        const newBall = new _Ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.newBallInfo.name, this.newBallInfo.color);\n        this.gameInstance.createNewBall(newBall);\n        return newBall;\n    }\n}\n\n\n//# sourceURL=webpack://PingBall/./src/CreationPanel.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nclass Game {\n    constructor() {\n        this.ballsInGame = [];\n        this.keysPressed = {};\n        this.gameSound = document.querySelector('#game-sound');\n    }\n    init() {\n        this.walkInterval = setInterval(() => {\n            this.speed = 10;\n            if ((this.keysPressed['ArrowLeft'] && this.keysPressed['ArrowUp']) ||\n                (this.keysPressed['ArrowLeft'] && this.keysPressed['ArrowDown']) ||\n                (this.keysPressed['ArrowRight'] && this.keysPressed['ArrowUp']) ||\n                (this.keysPressed['ArrowRight'] && this.keysPressed['ArrowDown']))\n                this.speed = this.speed - this.speed / 5;\n            if (this.keysPressed['ArrowLeft'])\n                this.checkKeyPressX(-this.speed);\n            if (this.keysPressed['ArrowRight'])\n                this.checkKeyPressX(this.speed);\n            if (this.keysPressed['ArrowUp'])\n                this.checkKeyPressY(-this.speed);\n            if (this.keysPressed['ArrowDown'])\n                this.checkKeyPressY(this.speed);\n        }, 40);\n        document.addEventListener('click', (e) => {\n            const ball = e.target;\n            if (ball.className == 'ball')\n                this.switchBallTarget(ball);\n            if (ball.className == 'ball-style')\n                this.switchBallTarget(ball.parentElement);\n        });\n        document.addEventListener('keydown', (e) => {\n            this.keysPressed[e.code] = true;\n        });\n        document.addEventListener('keyup', (e) => {\n            delete this.keysPressed[e.code];\n        });\n    }\n    checkKeyPressX(value) {\n        if (!this.currentBall)\n            return;\n        this.currentBall.move(value, 0);\n    }\n    checkKeyPressY(value) {\n        if (!this.currentBall)\n            return;\n        this.currentBall.move(0, value);\n    }\n    switchBallTarget(ball) {\n        var _a;\n        for (const ballInGame of this.ballsInGame) {\n            ballInGame.unfocusBall();\n            if (ballInGame.currentBallIndex == Number(ball.dataset.number)) {\n                this.updateCurrentBall(ballInGame);\n                (_a = this.currentBall) === null || _a === void 0 ? void 0 : _a.focusBall();\n            }\n        }\n    }\n    updateCurrentBall(ball) {\n        this.currentBall = ball;\n        console.log(this.currentBall);\n    }\n    createNewBall(ball) {\n        var _a;\n        this.gameSound.volume = 0.6;\n        this.gameSound.play();\n        this.updateCurrentBall(ball);\n        (_a = this.currentBall) === null || _a === void 0 ? void 0 : _a.insertBallIntoBrowser();\n        this.ballsInGame.push(ball);\n        this.switchBallTarget(ball.htmlBall);\n    }\n}\n\n\n//# sourceURL=webpack://PingBall/./src/Game.ts?");

/***/ }),

/***/ "./src/RGB.ts":
/*!********************!*\
  !*** ./src/RGB.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RGB)\n/* harmony export */ });\nclass RGB {\n    constructor(red = 0, green = 0, blue = 0) {\n        this.red = red;\n        this.green = green;\n        this.blue = blue;\n    }\n    rgbArray() {\n        return [this.red, this.green, this.blue];\n    }\n    htmlRgbColor() {\n        return `rgb(${this.rgbArray().join(', ')})`;\n    }\n}\n\n\n//# sourceURL=webpack://PingBall/./src/RGB.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n/* harmony import */ var _CreationPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreationPanel */ \"./src/CreationPanel.ts\");\n\n\nconst myGame = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst panel = new _CreationPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](myGame);\nmyGame.init();\npanel.init();\n\n\n//# sourceURL=webpack://PingBall/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;