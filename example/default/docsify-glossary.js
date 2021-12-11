/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: GlossaryOptionsDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlossaryOptionsDefault\", function() { return GlossaryOptionsDefault; });\nconst GlossaryOptionsDefault = {\n  filePaths: { \"/\": \"/_glossary.md\" },\n  caseSensitive: false,\n  glossaryTermPrefix: \"## \",\n  matchDocumentationTerm: (term, slug) => term,\n};\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ \"./src/plugin.js\");\n\r\n\r\nif (!window.$docsify) window.$docsify = {};\r\nif (!window.$docsify.glossary) window.$docsify.glossary = {};\r\nif (!window.$docsify.plugins) window.$docsify.plugins = [];\r\nwindow.$docsify.plugins.push(_plugin__WEBPACK_IMPORTED_MODULE_0__[\"GlossaryPlugin\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/*! exports provided: TermsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TermsMap\", function() { return TermsMap; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass TermsMap {\n  constructor() {\n    if (!window.$docsify.glossary.__termsMap) {\n      window.$docsify.glossary.__termsMap = {};\n    }\n    this._map = window.$docsify.glossary.__termsMap;\n  }\n  get isEmpty() {\n    return !Boolean(this.keys.length);\n  }\n  get keys() {\n    return Object.keys(this._map);\n  }\n  addTerm(term) {\n    const slug = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createSlug\"])(term);\n    this._map[term] = slug;\n  }\n  forEach(delegate) {\n    this.keys.forEach((a) => delegate(a, this._map[a]));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/models.js?");

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! exports provided: GlossaryPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlossaryPlugin\", function() { return GlossaryPlugin; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\nfunction GlossaryPlugin(hook, vm) {\r\n  hook.beforeEach((content, next) => {\r\n    const {\r\n      caseSensitive,\r\n      filePaths,\r\n      glossaryTermPrefix,\r\n      matchDocumentationTerm,\r\n    } = {\r\n      ..._constants__WEBPACK_IMPORTED_MODULE_0__[\"GlossaryOptionsDefault\"],\r\n      ...window.$docsify.glossary,\r\n    };\r\n    const url = arguments[1].route.path;\r\n    const termsMap = new _models__WEBPACK_IMPORTED_MODULE_1__[\"TermsMap\"]();\r\n    const filePath = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getGlossaryFilePathByUrl\"])(filePaths, url);\r\n    if (!filePath) next(content);\r\n    const replaceTermsWithLinks = () => {\r\n      termsMap.forEach((term, slug) => {\r\n        const link = `[${term}](${filePath}?id=${slug})`;\r\n        const regexQuery = matchDocumentationTerm(term, slug);\r\n        const regexOptions = caseSensitive ? \"g\" : \"gi\";\r\n        const regex = new RegExp(regexQuery, regexOptions);\r\n        content = content.replace(regex, link);\r\n      });\r\n      next(content);\r\n    };\r\n    if (termsMap.isEmpty)\r\n      Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"populateTermsMap\"])(termsMap, filePath, glossaryTermPrefix).then(\r\n        replaceTermsWithLinks\r\n      );\r\n    else replaceTermsWithLinks();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/plugin.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createSlug, getGlossaryFilePathByUrl, populateTermsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSlug\", function() { return createSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGlossaryFilePathByUrl\", function() { return getGlossaryFilePathByUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateTermsMap\", function() { return populateTermsMap; });\nfunction createSlug(str) {\n  str = str.replace(/^\\s+|\\s+$/g, \"\"); // trim\n  str = str.toLowerCase();\n  // remove accents, swap ñ for n, etc\n  var from = \"àáäâèéëêìíïîòóöôùúüûñç·/_,:;\";\n  var to = \"aaaaeeeeiiiioooouuuunc------\";\n  for (var i = 0, l = from.length; i < l; i++) {\n    str = str.replace(new RegExp(from.charAt(i), \"g\"), to.charAt(i));\n  }\n  str = str\n    .replace(/[^a-z0-9 -]/g, \"\") // remove invalid chars\n    .replace(/\\s+/g, \"-\") // collapse whitespace and replace by -\n    .replace(/-+/g, \"-\"); // collapse dashes\n  return str;\n}\n\nfunction getGlossaryFilePathByUrl(filePaths, url) {\n  var key = Object.keys(filePaths).find((a) => {\n    const regex = new RegExp(`^${a}`, \"i\");\n    return regex.test(url);\n  });\n  return key && filePaths[key];\n}\n\nasync function populateTermsMap(termsMap, filePath, glossaryTermPrefix) {\n  const data = await fetch(filePath);\n  const text = await data.text();\n  const lines = text.split(\"\\n\");\n  lines.forEach((line) => {\n    const linePrefixRegex = new RegExp(`^${glossaryTermPrefix}`);\n    if (line.match(linePrefixRegex)) {\n      const term = line.replace(glossaryTermPrefix, \"\").trim();\n      termsMap.addTerm(term);\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });