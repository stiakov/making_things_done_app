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

/***/ "./node_modules/css-loader/dist/cjs.js!./semantic/dist/semantic.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./semantic/dist/semantic.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  background: url('https://images.unsplash.com/photo-1522199670076-2852f80289c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');\\n  background-size: cover;\\n}\\n\\n#main-container {\\n  margin-top: 2em;\\n}\\n\\n.left-text {\\n  text-align: left;\\n}\\n\\n.btn-style {\\n  background: rgba(255, 134, 134, 1.0) !important;\\n  color: white !important;\\n}\\n\\n.extra-space {\\n  margin-top: 1em !important;\\n}\\n\\n.extra-space-bottom {\\n  margin-bottom: 1em !important;\\n}\\n\\n.inactive {\\n  background: lightgray !important;\\n}\\n\\n.project-container {\\n  min-width: 33% !important;\\n  max-width: 50% !important;\\n}\\n\\n.small {\\n  margin-bottom: 0 !important;\\n}\\n\\n@media only screen and (max-width: 768px) {\\n  .project-container {\\n    min-width: 100% !important;\\n  }\\n}\\n\\n.task-title {\\n  font-size: 1.2em;\\n  font-weight: bolder;\\n}\\n\\n.important {\\n  border-left: solid !important;\\n  border-left-width: thick !important;\\n  border-left-color: #ffbfd1 !important;\\n}\\n\\n.normal {\\n  border-left: solid !important;\\n  border-left-width: thick !important;\\n  border-left-color: #ffdbbf !important;\\n}\\n\\n.completed {\\n  background-color: #dfdfdf !important;\\n  color: grey !important;\\n  border-left-color: #b6b6b6 !important;\\n\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./semantic/dist/semantic.css":
/*!************************************!*\
  !*** ./semantic/dist/semantic.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./semantic.css */ \"./node_modules/css-loader/dist/cjs.js!./semantic/dist/semantic.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./semantic/dist/semantic.css?");

/***/ }),

/***/ "./semantic/dist/semantic.js":
/*!***********************************!*\
  !*** ./semantic/dist/semantic.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/brand-icons.eot":
/*!*******************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/brand-icons.eot ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/brand-icons.eot\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/brand-icons.eot?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/brand-icons.svg":
/*!*******************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/brand-icons.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/brand-icons.svg\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/brand-icons.svg?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/brand-icons.ttf":
/*!*******************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/brand-icons.ttf ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/brand-icons.ttf\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/brand-icons.ttf?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/brand-icons.woff":
/*!********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/brand-icons.woff ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/brand-icons.woff\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/brand-icons.woff?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/brand-icons.woff2":
/*!*********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/brand-icons.woff2 ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/brand-icons.woff2\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/brand-icons.woff2?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/icons.eot":
/*!*************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/icons.eot ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/icons.eot\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/icons.eot?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/icons.svg":
/*!*************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/icons.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/icons.svg\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/icons.svg?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/icons.ttf":
/*!*************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/icons.ttf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/icons.ttf\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/icons.ttf?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/icons.woff":
/*!**************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/icons.woff ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/icons.woff\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/icons.woff?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/icons.woff2":
/*!***************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/icons.woff2 ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/icons.woff2\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/icons.woff2?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/outline-icons.eot":
/*!*********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/outline-icons.eot ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/outline-icons.eot\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/outline-icons.eot?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/outline-icons.svg":
/*!*********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/outline-icons.svg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/outline-icons.svg\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/outline-icons.svg?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/outline-icons.ttf":
/*!*********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/outline-icons.ttf ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/outline-icons.ttf\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/outline-icons.ttf?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/outline-icons.woff":
/*!**********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/outline-icons.woff ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/outline-icons.woff\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/outline-icons.woff?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/fonts/outline-icons.woff2":
/*!***********************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/fonts/outline-icons.woff2 ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/fonts/outline-icons.woff2\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/fonts/outline-icons.woff2?");

/***/ }),

/***/ "./semantic/dist/themes/default/assets/images/flags.png":
/*!**************************************************************!*\
  !*** ./semantic/dist/themes/default/assets/images/flags.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"semantic/dist/themes/default/assets/images/flags.png\"];\n\n//# sourceURL=webpack:///./semantic/dist/themes/default/assets/images/flags.png?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/img/favicon.ico":
/*!*****************************!*\
  !*** ./src/img/favicon.ico ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + [\"\",\"img/favicon.ico\"];\n\n//# sourceURL=webpack:///./src/img/favicon.ico?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _semantic_dist_semantic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../semantic/dist/semantic */ \"./semantic/dist/semantic.js\");\n/* harmony import */ var _semantic_dist_semantic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_semantic_dist_semantic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _semantic_dist_semantic_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../semantic/dist/semantic.css */ \"./semantic/dist/semantic.css\");\n/* harmony import */ var _semantic_dist_semantic_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_semantic_dist_semantic_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_js_setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/js/setup */ \"./src/js/setup.js\");\n/* harmony import */ var _src_js_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/layout */ \"./src/js/layout.js\");\n\n\n\n\n\n\n_src_js_setup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setFavicon();\n_src_js_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addNewProjectBtn();\n_src_js_setup__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setProjectInit();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/behaviour.js":
/*!*****************************!*\
  !*** ./src/js/behaviour.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/js/layout.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/js/setup.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ \"./src/js/logic.js\");\n\n\n\n\n\nconst sm = _logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nconst behaviour = {\n  getTaskData: () => {\n    let task_id = _setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTaskCounter();\n    const task_title = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('task-title').value;\n    const task_description = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('task-description').value;\n    const task_date = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('task-date').value;\n    const task_priority = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('task-priority').checked;\n    const task_status = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('task-status').checked;\n    const item = sm.todoItem(\n      task_id,\n      task_title,\n      task_description,\n      task_date,\n      task_priority,\n      task_status\n    );\n    return item;\n  },\n  addTaskToProject: (project, item = behaviour.getTaskData()) => {\n    const proj = JSON.parse(localStorage.getItem(project.id));\n    proj.tasks.push(item);\n    _layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadTask(proj, item);\n    localStorage.setItem(project.id, JSON.stringify(proj));\n  },\n  deleteTask: (project, item) => {\n    let tempData = JSON.parse(localStorage.getItem(project.id));\n    let tempFilter = tempData.tasks.filter((task) => task.id !== item.id);\n    tempData.tasks = tempFilter;\n    localStorage.setItem(project.id, JSON.stringify(tempData));\n    const principal = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])(`sgc-${item.id}`);\n    principal.parentElement.removeChild(principal);\n  },\n  removeModal: () => {\n    const main = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('main-container');\n    let modal = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('modal');\n    if (modal) main.removeChild(modal);\n    modal = undefined;\n  },\n  editStatus: (project, item) => {\n    project.tasks.map((task) => {\n      if (task.id == item.id) {\n        task.status = !task.status ? true : false;\n        localStorage.setItem(project.id, JSON.stringify(project));\n        const card = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])(`sgc-${item.id}`);\n        card.classList.toggle('completed');\n      }\n    });\n  },\n  getNewProjectData: () => {\n    let project_id = _setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectsNum();\n    const project_name = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])('project-name').value;\n    const project = sm.ProjectManager.newProject(project_id, project_name);\n    return project;\n  },\n  addNewProject: (project = behaviour.getNewProjectData()) => {\n    localStorage.setItem(project.id, JSON.stringify(project));\n    _setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setColumnInit(project);\n  },\n  deleteProject: (id) => {\n    localStorage.removeItem(id);\n    const column = Object(_layout__WEBPACK_IMPORTED_MODULE_0__[\"getById\"])(`col-${id}`);\n    column.parentElement.removeChild(column);\n  },\n  getLocal: (id) => JSON.parse(localStorage.getItem(id)),\n  setLocal: (id, project) => localStorage.setItem(id, JSON.stringify(project)),\n  setEditable: (segment, key) => {\n    document.body.addEventListener('click', (e) => {\n      if (e.target !== segment) {\n        const segmentCard = segment.parentElement;\n        const taskId = segmentCard.id.split('-')[1];\n        const project = segmentCard.parentElement;\n        const projectId = project.id.split('-')[1];\n        const tempObj = behaviour.getLocal(projectId);\n\n        tempObj.tasks.map((task) => {\n          if (taskId == task.id) {\n            task[key] = segment.innerText;\n            behaviour.setLocal(projectId, tempObj);\n          }\n        });\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (behaviour);\n\n\n//# sourceURL=webpack:///./src/js/behaviour.js?");

/***/ }),

/***/ "./src/js/layout.js":
/*!**************************!*\
  !*** ./src/js/layout.js ***!
  \**************************/
/*! exports provided: getById, append, create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getById\", function() { return getById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony import */ var _behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behaviour */ \"./src/js/behaviour.js\");\n\n\nconst getById = (id) => document.getElementById(id);\n\nconst append = (parent, child) => parent.appendChild(child);\n\nconst create = (type, attrib = []) => {\n  const elem = document.createElement(type);\n  if (attrib.length > 0) attrib.forEach((item) => Object.assign(elem, item));\n  return elem;\n};\n\nconst layout = {\n  addNewProjectBtn: () => {\n    const button = getById('btnNewProject');\n    button.addEventListener('click', () => {\n      layout.loadModal('project', layout.formNewProject());\n    });\n  },\n  column: (project) => {\n    const colContainer = getById('colContainer');\n    const projectContainer = create('div', [\n      { className: 'column project-container' },\n      { id: `col-${project.id}` }\n    ]);\n    const mainSegment = create('div', [\n      { className: 'ui placeholder segments' },\n      { id: `segments-${project.id}` }\n    ]);\n    const headerSegment = create('div', [{ className: 'ui center aligned segment' }]);\n    const headerContent = create('h2', [\n      { className: 'header edit' },\n      { innerText: project.name },\n      { contentEditable: 'true' }\n    ]);\n    headerContent.addEventListener('click', () => {\n      document.body.addEventListener('click', (e) => {\n        if (e.target !== headerContent) {\n          const princ = headerContent.parentElement.parentElement.parentElement.id;\n          const projectId = princ.split('-')[1];\n          const tempObj = _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLocal(projectId);\n          tempObj.name = headerContent.innerText;\n          _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setLocal(projectId, tempObj);\n        }\n      });\n    });\n    const spanTitle = create('span', [{ id: 'spanTitle' }]);\n    const spanIcon = create('span', [{ id: 'spanDelete' }]);\n    const delProjectBtn = create('div', [{ className: 'ui top right attached label' }]);\n    const iconDelBtn = create('i', [{ className: 'trash alternate icon' }]);\n\n    delProjectBtn.addEventListener('click', () => _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(project.id));\n\n    append(spanTitle, headerContent);\n    append(spanIcon, delProjectBtn);\n    append(delProjectBtn, iconDelBtn);\n    append(headerSegment, spanTitle);\n    append(headerSegment, spanIcon);\n    append(colContainer, projectContainer);\n    append(projectContainer, mainSegment);\n    append(mainSegment, headerSegment);\n    return colContainer;\n  },\n\n  taskProjectButton: (project) => {\n    const mainSegmnt = getById(`segments-${project.id}`);\n    const projectAddTaskBtn = create('div', [\n      { className: 'ui attached center aligned button btn-style' },\n      { id: `newTaskBtn-${project.id}` },\n      { innerText: 'Add Task' }\n    ]);\n    projectAddTaskBtn.addEventListener('click', () =>\n      layout.loadModal('task', layout.formNewTask(project))\n    );\n    append(mainSegmnt, projectAddTaskBtn);\n    return mainSegmnt;\n  },\n\n  cardFields: () => {\n    const basicSeg = create('div', [\n      { className: 'ui segment left-text normal' }\n    ]);\n    const sgmDivider = create('div', [{ className: 'ui clearing divider' }]);\n    const sgmCard = create('span', [\n      { className: 'task-title edit' },\n      { contentEditable: 'true' }\n    ]);\n    sgmCard.addEventListener('click', () => _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setEditable(sgmCard, 'title'));\n    const contentDescription = create('div', [\n      { className: 'content edit' },\n      { contentEditable: 'true' }\n    ]);\n    contentDescription.addEventListener('click', () => {\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setEditable(contentDescription, 'description');\n    });\n    const contentDate = create('div', [\n      { className: 'meta edit' },\n      { contentEditable: 'true' }\n    ]);\n    contentDate.addEventListener('click', () => {\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setEditable(contentDate, 'dueDate');\n    });\n    const contentButtons = create('div', [{ className: 'meta' }]);\n    const deleteBtn = create('label', [\n      { className: 'ui right icon label delete' },\n      { innerText: 'Delete' }\n    ]);\n    deleteBtn.addEventListener('click', () => {\n      const id = deleteBtn.id.split('-');\n      const parent = JSON.parse(localStorage.getItem(id[1]));\n      const conTask = parent.tasks.filter((task) => task['id'] == id[2]);\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(parent, conTask[0]);\n    });\n    const deleteIcon = create('i', [{ className: 'trash alternate icon' }]);\n    const doneBtn = create('label', [\n      { className: 'ui right icon label done' },\n      { innerText: 'Complete' }\n    ]);\n    doneBtn.addEventListener('click', () => {\n      const id = deleteBtn.id.split('-');\n      const parent = JSON.parse(localStorage.getItem(id[1]));\n      const conTask = parent.tasks.filter((task) => task['id'] == id[2]);\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editStatus(parent, conTask[0]);\n    });\n    const doneIcon = create('i', [{ className: 'check circle icon' }]);\n    return {\n      segment: basicSeg,\n      divider: sgmDivider,\n      title: sgmCard,\n      content: contentDescription,\n      date: contentDate,\n      contentButtons,\n      delete: deleteBtn,\n      deleteIcon,\n      doneButton: doneBtn,\n      doneIcon\n    };\n  },\n  loadTask: (project, task = []) => {\n    const mainSegmnt = getById(`segments-${project.id}`);\n    const taskCollection = task.length === 0 ? project.tasks : [task];\n    const addTaskBtn = getById(`newTaskBtn-${project.id}`);\n    if (addTaskBtn) mainSegmnt.removeChild(addTaskBtn);\n\n    taskCollection.forEach((task) => {\n      const card = layout.cardFields();\n      card['title'].innerText = task.title;\n      card['content'].innerText = task.description;\n      card['date'].innerText = task.dueDate;\n      if (task.status) {\n        card['segment'].classList.toggle('completed');\n      }\n      if (task.priority) {\n        card['segment'].classList.toggle('important');\n        card['segment'].classList.toggle('normal');\n      }\n      card['segment'].id = `sgc-${task.id}`;\n      card['contentButtons'].id = `btns-${task.id}`;\n      card['delete'].id = `trash-${project.id}-${task.id}`;\n      card['doneButton'].id = `check-${project.id}-${task.id}`;\n\n      card['segment'].appendChild(card['title']);\n      card['segment'].appendChild(card['divider']);\n      card['segment'].appendChild(card['content']);\n      card['segment'].appendChild(card['date']);\n      card['segment'].appendChild(card['contentButtons']);\n      card['contentButtons'].appendChild(card['delete']);\n      card['contentButtons'].appendChild(card['doneButton']);\n      card['delete'].appendChild(card['deleteIcon']);\n      card['doneButton'].appendChild(card['doneIcon']);\n      mainSegmnt.appendChild(card['segment']);\n    });\n    if (addTaskBtn) append(mainSegmnt, addTaskBtn);\n    return mainSegmnt;\n  },\n\n  formNewTask: (project) => {\n    const fields = [\n      {\n        name: 'Title',\n        type: 'text',\n        id: 'task-title',\n        placeholder: 'Title'\n      },\n      {\n        name: 'Description',\n        type: 'text',\n        id: 'task-description',\n        placeholder: 'Description'\n      },\n      {\n        name: 'Due date',\n        type: 'date',\n        id: 'task-date'\n      }\n    ];\n    const checkboxes = [\n      {\n        name: 'High priority?',\n        type: 'checkbox',\n        id: 'task-priority'\n      },\n      {\n        name: 'Done?',\n        type: 'checkbox',\n        id: 'task-status'\n      }\n    ];\n\n    const formContainer = create('div', [{ id: 'card-fields' }]);\n\n    fields.forEach((input) => {\n      const fieldCont = create('div', [{ className: 'field' }]);\n      const nameField = create('input', [\n        { type: input.type },\n        { placeholder: input.placeholder },\n        { name: input.name },\n        { id: input.id }\n      ]);\n      append(fieldCont, nameField);\n      append(formContainer, fieldCont);\n    });\n\n    checkboxes.forEach((input) => {\n      const checkCont = create('div', [{ className: 'field' }]);\n      const checkField = create('div', [{ className: 'ui checkbox' }]);\n      const boxField = create('input', [\n        { type: input.type },\n        { id: input.id }\n      ]);\n      const checkLabel = create('label', [{ innerText: input.name }]);\n      append(checkCont, checkField);\n      append(checkField, boxField);\n      append(checkField, checkLabel);\n      append(formContainer, checkCont);\n    });\n    const addTaskBtn = create('button', [\n      { className: 'ui button btn-style extra-space' },\n      { type: 'submit' },\n      { id: `create-task-${project.id}` },\n      { innerText: 'Submit' }\n    ]);\n\n    addTaskBtn.addEventListener('click', () => {\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskToProject(project);\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeModal();\n    });\n\n    append(formContainer, addTaskBtn);\n    return formContainer;\n  },\n  formNewProject: () => {\n    const title = create('input', [\n      { type: 'text' },\n      { placeholder: 'Name your project' },\n      { id: 'project-name' }\n    ]);\n    const button = create('button', [\n      { className: 'ui button btn-style extra-space' },\n      { innerText: 'Create Project' }\n    ]);\n    button.addEventListener('click', () => {\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNewProject();\n      _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeModal();\n    });\n    return { title, button };\n  },\n  \n  loadModal: (from, fields) => {\n    // from must be 'project' or 'task'\n    const modalTitle = from === 'project' ? 'New Project' : 'New Task';\n    const modalLabel =\n      from === 'project' ? 'Start a new project' : 'Write a new task';\n\n    const mainContainer = getById('main-container');\n    let modal = create('div', [\n      { className: 'ui dimmer modals page transition visible active underlay' },\n      { tabIndex: 1 },\n      { id: 'modal' }\n    ]);\n\n    document.body.addEventListener('keydown', (e) => {\n      if (e.key === 'Escape') {\n        _behaviour__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeModal();\n      }\n    });\n\n    const modalGrid = create('div', [\n      { className: 'ui centered grid' },\n      { style: 'margin-top:20vh' }\n    ]);\n    const card = create('div', [{ className: 'ui card extra-space overlay' }]);\n    const cardHeader = create('div', [\n      { className: 'ui medium header extra-space' },\n      { innerText: modalTitle }\n    ]);\n    const cardSub = create('div', [\n      { className: 'meta' },\n      { innerText: modalLabel }\n    ]);\n    const cardContent = create('div', [\n      { className: 'content ui form extra-space' }\n    ]);\n    const cardFooter = create('div', [\n      { className: 'meta' },\n      { innerText: 'or press Escape to exit' }\n    ]);\n\n    if (from === 'project') {\n      let cardFields = create('div', [{ id: 'card-fields' }]);\n      append(cardFields, fields['title']);\n      append(cardFields, fields['button']);\n      append(cardContent, cardFields);\n    } else {\n      append(cardContent, fields);\n    }\n\n    append(mainContainer, modal);\n    append(modal, modalGrid);\n    append(modalGrid, card);\n    append(card, cardHeader);\n    append(card, cardSub);\n    append(card, cardContent);\n    append(card, cardFooter);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n\n//# sourceURL=webpack:///./src/js/layout.js?");

/***/ }),

/***/ "./src/js/logic.js":
/*!*************************!*\
  !*** ./src/js/logic.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst systemManager = {\n  todoItem: (id, title, description, dueDate, priority = 0, status = false) => {\n    return {\n      id,\n      title,\n      description,\n      dueDate,\n      priority,\n      status\n    };\n  },\n\n  ProjectManager: {\n    newProject: (id, name, tasks = []) => ({\n      id,\n      name,\n      tasks\n    })\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (systemManager);\n\n\n//# sourceURL=webpack:///./src/js/logic.js?");

/***/ }),

/***/ "./src/js/setup.js":
/*!*************************!*\
  !*** ./src/js/setup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/favicon.ico */ \"./src/img/favicon.ico\");\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_ico__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/layout */ \"./src/js/layout.js\");\n/* harmony import */ var _js_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/logic */ \"./src/js/logic.js\");\n\n\n\n\nconst sm = _js_logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nconst setup = {\n  counterProj: 1,\n  counterTask: 1,\n\n  setFavicon: () => {\n    const setFav = document.getElementById('favicon');\n    setFav.href = _img_favicon_ico__WEBPACK_IMPORTED_MODULE_0___default.a;\n  },\n  setProjectInit: () => {\n    const demo = sm.ProjectManager.newProject(\n      setup.counterProj,\n      'Project Demo'\n    );\n\n    if (localStorage.length < 1) {\n      const taskInit = sm.todoItem(\n        setup.counterTask,\n        'Test task',\n        'Hi! Click on me to edit',\n        '2029-10-01'\n      );\n      demo.tasks.push(taskInit);\n      localStorage.setItem(setup.counterProj, JSON.stringify(demo));\n      setup.setColumnInit(demo);\n    } else {\n      if (localStorage.length > 0) {\n        const keys = Object.keys(localStorage);\n        keys.sort().forEach((key) => {\n          setup.setColumnInit(JSON.parse(localStorage.getItem(key)));\n        });\n      }\n    }\n    setup.getProjectsNum();\n    setup.loadTaskNum();\n    return demo;\n  },\n  setColumnInit: (project) => {\n    _js_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"].column(project);\n    _js_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadTask(project);\n    _js_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"].taskProjectButton(project);\n  },\n  getProjectsNum: () => (setup.counterProj = localStorage.length + 1),\n  getTaskCounter: () => (setup.counterTask += 1),\n  loadTaskNum: () => {\n    const keys = Object.keys(localStorage);\n    keys.forEach((key) => {\n      const proj = JSON.parse(localStorage.getItem(key));\n      setup.counterTask += proj.tasks.length;\n    });\n    return setup.counterTask;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setup);\n\n\n//# sourceURL=webpack:///./src/js/setup.js?");

/***/ })

/******/ });