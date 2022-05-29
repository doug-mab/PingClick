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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\nclass Ball {\n    constructor(name, color) {\n        this.vector = Vector2.defaultLocation();\n        this.currentBallIndex = Ball.ballIndex;\n        this.name = name;\n        this.color = color;\n    }\n    generateBall() {\n        const newBall = document.createElement('div');\n        newBall.classList.add('ball');\n        newBall.dataset.number = Ball.ballIndex.toString();\n        Ball.ballIndex++;\n        const ballName = document.createElement('h2');\n        ballName.innerText = this.name;\n        newBall.appendChild(ballName);\n        const ballStyle = document.createElement('div');\n        ballStyle.classList.add('ball-style');\n        ballStyle.style.backgroundColor = this.color.htmlRgbColor();\n        newBall.appendChild(ballStyle);\n        return newBall;\n    }\n    insertBallIntoBrowser() {\n        Ball.ballMap.appendChild(this.generateBall());\n        console.log(`${this.name} was generated!`);\n    }\n}\nBall.ballIndex = 0;\nBall.ballMap = document.getElementById('root');\nclass Vector2 {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    static defaultLocation() {\n        return new Vector2(0, 0);\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/Ball.ts?");

/***/ }),

/***/ "./src/CreationPanel.ts":
/*!******************************!*\
  !*** ./src/CreationPanel.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreationControls)\n/* harmony export */ });\n/* harmony import */ var _RGB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGB */ \"./src/RGB.ts\");\n\nclass CreationControls {\n    constructor() {\n        this.controlsPanel = document.querySelector('#controls');\n        this.creationForm = this.controlsPanel.querySelector('form');\n        this.colorPanel = document.querySelector('.rgb-selector');\n        this.closePanelButton = this.controlsPanel.querySelector('#close');\n        this.openPanelButton = document.querySelector('#add-button');\n        this.randomColorButton = this.controlsPanel.querySelector('#random-color');\n        this.openPanelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.openPanel();\n        });\n        this.closePanelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.closePanel();\n        });\n        this.randomColorButton.addEventListener('click', (e) => {\n            e.preventDefault();\n            this.getRandomColor();\n        });\n        this.initColorDisplayUpdateChecker();\n    }\n    openPanel() {\n        this.controlsPanel.classList.remove('controls-closed');\n    }\n    closePanel() {\n        this.controlsPanel.classList.add('controls-closed');\n        const inputs = this.creationForm.querySelectorAll('input');\n        inputs.forEach((input) => {\n            input.value = '';\n        });\n    }\n    getRgbArray() {\n        const colorData = this.colorPanel.querySelectorAll('input');\n        const rgbArray = [];\n        colorData.forEach((colorInput) => {\n            const value = Number(colorInput.value);\n            if (value > 255)\n                return rgbArray.push(255);\n            rgbArray.push(value);\n        });\n        return new _RGB__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rgbArray[0], rgbArray[1], rgbArray[2]);\n    }\n    getRandomColor() {\n        const inputs = this.colorPanel.querySelectorAll('input');\n        inputs.forEach((input) => {\n            input.value = Math.floor(Math.random() * 255 + 1).toString();\n        });\n    }\n    initColorDisplayUpdateChecker() {\n        const colorDisplay = this.colorPanel.querySelector('#color-display');\n        setInterval(() => {\n            colorDisplay.style.backgroundColor = this.getRgbArray().htmlRgbColor();\n        }, 600);\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/CreationPanel.ts?");

/***/ }),

/***/ "./src/RGB.ts":
/*!********************!*\
  !*** ./src/RGB.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RGB)\n/* harmony export */ });\nclass RGB {\n    constructor(red = 0, green = 0, blue = 0) {\n        this.red = red;\n        this.green = green;\n        this.blue = blue;\n    }\n    rgbArray() {\n        return [this.red, this.green, this.blue];\n    }\n    htmlRgbColor() {\n        return `rgb(${this.rgbArray().join(', ')})`;\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/RGB.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _CreationPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreationPanel */ \"./src/CreationPanel.ts\");\n/* harmony import */ var _RGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RGB */ \"./src/RGB.ts\");\n\n\n\nconst newBall = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('John', new _RGB__WEBPACK_IMPORTED_MODULE_2__[\"default\"](100, 0, 100));\nconst newBall2 = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Evan', new _RGB__WEBPACK_IMPORTED_MODULE_2__[\"default\"](150, 20, 50));\nconst newBall3 = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Steven', new _RGB__WEBPACK_IMPORTED_MODULE_2__[\"default\"](20, 20, 80));\nconst creation = new _CreationPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nnewBall.insertBallIntoBrowser();\nnewBall2.insertBallIntoBrowser();\nnewBall3.insertBallIntoBrowser();\n\n\n//# sourceURL=webpack://typescript/./src/index.ts?");

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