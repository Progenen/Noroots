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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fileUpload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fileUpload.js */ \"./src/js/modules/fileUpload.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const form = document.querySelector(\".upload__form\");\n    const fileInput = form.getElementById(\"fileInput\");\n    const uploadButton = form.querySelector(\".btn-upload\");\n\n    (0,_modules_fileUpload_js__WEBPACK_IMPORTED_MODULE_0__.initFileUpload)(form, fileInput, uploadButton);\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/fileUpload.js":
/*!**************************************!*\
  !*** ./src/js/modules/fileUpload.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFileUpload: () => (/* binding */ initFileUpload)\n/* harmony export */ });\nfunction initFileUpload(form, fileInput, uploadButton) {\n    // Открытие окна выбора файла\n    uploadButton.addEventListener(\"click\", () => fileInput.click());\n\n    // Обработка выбора файла\n    fileInput.addEventListener(\"change\", () => handleFiles(fileInput));\n\n    // Перетаскивание файлов\n    form.addEventListener(\"dragover\", (event) => {\n        event.preventDefault();\n        form.classList.add(\"drag-over\");\n    });\n\n    form.addEventListener(\"dragleave\", () => {\n        form.classList.remove(\"drag-over\");\n    });\n\n    form.addEventListener(\"drop\", (event) => {\n        event.preventDefault();\n        form.classList.remove(\"drag-over\");\n\n        if (event.dataTransfer.files.length) {\n            fileInput.files = event.dataTransfer.files;\n            handleFiles(fileInput);\n        }\n    });\n}\n\nfunction handleFiles(fileInput) {\n    const file = fileInput.files[0];\n    if (file) {\n        console.log(\"Выбран файл:\", file.name);\n    }\n}\n\n\n//# sourceURL=webpack://project-name/./src/js/modules/fileUpload.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;