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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion/accordion.js */ \"./src/js/modules/accordion/accordion.js\");\n/* harmony import */ var _modules_adaptiveImages_adaptiveImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/adaptiveImages/adaptiveImages.js */ \"./src/js/modules/adaptiveImages/adaptiveImages.js\");\n/* harmony import */ var _modules_modals_instanceModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals/instanceModal.js */ \"./src/js/modules/modals/instanceModal.js\");\n/* harmony import */ var _modules_upload_fileUpload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/upload/fileUpload.js */ \"./src/js/modules/upload/fileUpload.js\");\n/* harmony import */ var _modules_upload_policiesHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/upload/policiesHandler.js */ \"./src/js/modules/upload/policiesHandler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst form = document.querySelector(\".area-upload\");\r\nconst fileInput = form.querySelector(\"input[type='file']\");\r\nconst uploadButton = form.querySelector(\".btn-upload\");\r\nconst policiesBtn = document.querySelector(\"#policiesAgreeBtn\");\r\n\r\nif (document.querySelector(\".result\")) {\r\n    (0,_modules_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0__.initAccordion)(\".result__content-accordion\", \".result__content-accordion-item\");\r\n}\r\n\r\n(0,_modules_upload_fileUpload_js__WEBPACK_IMPORTED_MODULE_3__.initFileUpload)(form, fileInput, uploadButton);\r\n(0,_modules_upload_policiesHandler_js__WEBPACK_IMPORTED_MODULE_4__.initBindsPoliciesAgree)(policiesBtn);\r\n(0,_modules_adaptiveImages_adaptiveImages_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nif (document.querySelector(\".modal-loader-show\")) {\r\n    _modules_modals_instanceModal_js__WEBPACK_IMPORTED_MODULE_2__.modalLoader.onOpen();\r\n} \r\n\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/js/modules/accordion/accordion.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initAccordion: () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion(containerSelector, itemSelector) {\r\n    const container = document.querySelector(containerSelector);\r\n\r\n    const accordions = container.querySelectorAll(itemSelector);\r\n\r\n    accordions.forEach((accordion) => {\r\n        const header = accordion.querySelector('.result__content-accordion-header');\r\n\r\n        header.addEventListener('click', () => {\r\n            accordions.forEach((item) => {\r\n                if (item !== accordion) {\r\n                    item.classList.remove('js-active');\r\n                }\r\n            });\r\n\r\n            accordion.classList.toggle('js-active');\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://project-name/./src/js/modules/accordion/accordion.js?");

/***/ }),

/***/ "./src/js/modules/adaptiveImages/adaptiveImages.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/adaptiveImages/adaptiveImages.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initAdaptiveImages() {\r\n    const adaptiveImages = document.querySelectorAll(\"[data-mob]\");\r\n\r\n    if (adaptiveImages && window.innerWidth <= 768) {\r\n        adaptiveImages.forEach(el => {\r\n            el.setAttribute(\"src\", el.getAttribute(\"data-mob\"));\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAdaptiveImages);\n\n//# sourceURL=webpack://project-name/./src/js/modules/adaptiveImages/adaptiveImages.js?");

/***/ }),

/***/ "./src/js/modules/modals/Modal.js":
/*!****************************************!*\
  !*** ./src/js/modules/modals/Modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal { \r\n    constructor(modalEl, btnOpen, canClose = true, outsideClick = true) {\r\n        this.modal = typeof modalEl === \"string\" ? document.querySelector(modalEl) : modalEl; \r\n        this.btnOpen = typeof btnOpen === \"string\" ? document.querySelector(btnOpen) : btnOpen;\r\n        this.canClose = canClose;\r\n        this.btnClose = this.modal.querySelector(\".js-modal-close\");\r\n        this.outsideClick = outsideClick;\r\n        this.activeClass = \"js-modal-show\";\r\n        this.open = false;\r\n\r\n        this.bindEvents();\r\n    }\r\n\r\n    update = () => {\r\n        this.modal.classList.toggle(this.activeClass, this.open);\r\n    }\r\n\r\n    onOpen = () => {\r\n        this.open = true;\r\n        this.update();\r\n        document.addEventListener(\"keydown\", this.onKeyDown);\r\n    }\r\n\r\n    onClose = () => {\r\n        this.open = false;\r\n        this.update();\r\n        document.removeEventListener(\"keydown\", this.onKeyDown);\r\n    }\r\n\r\n    toggle = () => {\r\n        this.open ? this.onClose() : this.onOpen();\r\n    }\r\n\r\n    onKeyDown = (event) => {\r\n        if (event.key === \"Escape\" && this.canClose) {\r\n            this.onClose();\r\n        }\r\n    }\r\n\r\n    onOutsideClick = (event) => {\r\n        if (this.outsideClick && event.target === this.modal && this.canClose) {\r\n            this.onClose();\r\n        }\r\n    }\r\n\r\n    bindEvents = () => {\r\n        if (this.btnOpen) {\r\n            this.btnOpen.addEventListener(\"click\", this.onOpen);\r\n        }\r\n        if (this.canClose) {\r\n            this.btnClose.addEventListener(\"click\", this.onClose);\r\n            this.modal.addEventListener(\"click\", this.onOutsideClick);\r\n        }\r\n    }\r\n\r\n    render = () => {\r\n        this.update();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://project-name/./src/js/modules/modals/Modal.js?");

/***/ }),

/***/ "./src/js/modules/modals/instanceModal.js":
/*!************************************************!*\
  !*** ./src/js/modules/modals/instanceModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalLoader: () => (/* binding */ modalLoader),\n/* harmony export */   modalPolicies: () => (/* binding */ modalPolicies),\n/* harmony export */   modalUpload: () => (/* binding */ modalUpload)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/modules/modals/Modal.js\");\n\r\n\r\nconst modalPolicies = new _Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".modal-policies\", '.js-modal-policies-open');\r\nconst modalUpload = new _Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.modal-upload', '.js-modal-upload-open');\r\nconst modalLoader = new _Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.modal-loader', '.js-modal-loader-open', false)\n\n//# sourceURL=webpack://project-name/./src/js/modules/modals/instanceModal.js?");

/***/ }),

/***/ "./src/js/modules/upload/fileUpload.js":
/*!*********************************************!*\
  !*** ./src/js/modules/upload/fileUpload.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFileUpload: () => (/* binding */ initFileUpload)\n/* harmony export */ });\n/* harmony import */ var _uploadHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadHandler */ \"./src/js/modules/upload/uploadHandler.js\");\n\r\n\r\nfunction initFileUpload(form, fileInput, uploadButton) {\r\n  uploadButton.addEventListener(\"click\", () => fileInput.click());\r\n\r\n  fileInput.addEventListener(\"change\", () => (0,_uploadHandler__WEBPACK_IMPORTED_MODULE_0__.handleFiles)(fileInput));\r\n\r\n  form.addEventListener(\"dragover\", (event) => {\r\n    event.preventDefault();\r\n    form.classList.add(\"drag-over\");\r\n  });\r\n\r\n  form.addEventListener(\"dragleave\", () => {\r\n    form.classList.remove(\"drag-over\");\r\n  });\r\n\r\n  form.addEventListener(\"drop\", (event) => {\r\n    event.preventDefault();\r\n    form.classList.remove(\"drag-over\");\r\n\r\n    if (event.dataTransfer.files.length) {\r\n      fileInput.files = event.dataTransfer.files;\r\n      (0,_uploadHandler__WEBPACK_IMPORTED_MODULE_0__.handleFiles)(fileInput);\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://project-name/./src/js/modules/upload/fileUpload.js?");

/***/ }),

/***/ "./src/js/modules/upload/policiesHandler.js":
/*!**************************************************!*\
  !*** ./src/js/modules/upload/policiesHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initBindsPoliciesAgree: () => (/* binding */ initBindsPoliciesAgree),\n/* harmony export */   sendFile: () => (/* binding */ sendFile)\n/* harmony export */ });\n/* harmony import */ var _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/instanceModal */ \"./src/js/modules/modals/instanceModal.js\");\n/* harmony import */ var _uploadHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadHandler */ \"./src/js/modules/upload/uploadHandler.js\");\n\r\n\r\n\r\nfunction initBindsPoliciesAgree(btn) {\r\n  btn.addEventListener(\"click\", () => {\r\n    localStorage.setItem(\"policiesAgree\", \"true\");\r\n    _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__.modalPolicies.onClose();\r\n    (0,_uploadHandler__WEBPACK_IMPORTED_MODULE_1__.processPendingFile)();\r\n  });\r\n}\r\n\r\nfunction sendFile(file) {\r\n  _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__.modalLoader.onOpen();\r\n\r\n  const formData = new FormData();\r\n  formData.append(\"document\", file);\r\n\r\n  // Имитация запроса   \r\n  fetch(\"/upload\", {\r\n    method: \"POST\",\r\n    body: formData,\r\n  })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      console.log(\"Файл загружен!\", data);\r\n      setTimeout(() => {\r\n        _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__.modalLoader.onClose();\r\n      }, 3000)\r\n    })\r\n    .catch(error => {\r\n      setTimeout(() => {\r\n        _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__.modalLoader.onClose();\r\n      }, 3000)\r\n      console.error(\"Ошибка загрузки\", error)\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://project-name/./src/js/modules/upload/policiesHandler.js?");

/***/ }),

/***/ "./src/js/modules/upload/uploadHandler.js":
/*!************************************************!*\
  !*** ./src/js/modules/upload/uploadHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFiles: () => (/* binding */ handleFiles),\n/* harmony export */   processPendingFile: () => (/* binding */ processPendingFile)\n/* harmony export */ });\n/* harmony import */ var _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/instanceModal */ \"./src/js/modules/modals/instanceModal.js\");\n/* harmony import */ var _policiesHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policiesHandler.js */ \"./src/js/modules/upload/policiesHandler.js\");\n\r\n\r\n\r\nlet pendingFile = null; \r\n\r\nfunction handleFiles(fileInput) {\r\n  const file = fileInput.files[0];\r\n  if (!file) return;\r\n\r\n  if (localStorage.getItem(\"policiesAgree\") === \"true\") {\r\n    (0,_policiesHandler_js__WEBPACK_IMPORTED_MODULE_1__.sendFile)(file); // Если согласие уже дано, сразу отправляем\r\n  } else {\r\n    pendingFile = file; // Сохраняем файл\r\n    _modals_instanceModal__WEBPACK_IMPORTED_MODULE_0__.modalPolicies.onOpen(); // Открываем модалку\r\n  }\r\n}\r\n\r\n// Функция для продолжения загрузки после принятия политики\r\nfunction processPendingFile() {\r\n  if (pendingFile) {\r\n    (0,_policiesHandler_js__WEBPACK_IMPORTED_MODULE_1__.sendFile)(pendingFile);\r\n    pendingFile = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://project-name/./src/js/modules/upload/uploadHandler.js?");

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