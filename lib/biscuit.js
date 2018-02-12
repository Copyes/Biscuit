(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("biscuit", [], factory);
	else if(typeof exports === 'object')
		exports["biscuit"] = factory();
	else
		root["biscuit"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["remove"] = remove;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extend__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


function get(name) {
    if (!document) return;
    var cookies = {};
    document.cookie.split(';').forEach(function (cookie) {
        var cookieArr = [];
        cookieArr = cookie.split('=');
        if (cookieArr.length !== 2) return;
        var itemName = decodeURIComponent(cookieArr[0].trim());
        var itemValue = decodeURIComponent(cookieArr[1].trim());
        cookies[itemName] = itemValue;
    });
    return (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === undefined ? cookies : cookies[name] || null;
}
function set(name, value, options) {
    if (value === void 0) {
        value = '';
    }
    if (options === void 0) {
        options = {};
    }
    if (!document) return;
    name = encodeURIComponent(name);
    value = encodeURIComponent(value);
    var path = options.path,
        domain = options.domain,
        secure = options.secure,
        expires = options.expires;
    var cookie = [name + "=" + value, (typeof path === 'undefined' ? 'undefined' : _typeof(path)) === undefined ? '' : ";path=" + path, (typeof domain === 'undefined' ? 'undefined' : _typeof(domain)) === undefined ? '' : ";domain=" + domain, (typeof expires === 'undefined' ? 'undefined' : _typeof(expires)) === undefined ? '' : ";expires=" + new Date(Date.now() + expires * 24 * 60 * 60 * 1000).toUTCString(), (typeof secure === 'undefined' ? 'undefined' : _typeof(secure)) === undefined ? '' : ";secure=" + secure];
    var cookieStr = cookie.join('');
    document.cookie = cookieStr;
}
function remove(name, attrs) {
    if (attrs === void 0) {
        attrs = {};
    }
    set(name, '', Object(__WEBPACK_IMPORTED_MODULE_0__extend__["a" /* default */])(attrs, {
        expires: -1
    }));
}
/* harmony default export */ __webpack_exports__["default"] = ({
    get: get,
    set: set,
    remove: remove
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
function extend() {
    var result = {};
    var i = 0;
    var key = '';
    for (; i < arguments.length; ++i) {
        var attributes = arguments[i];
        for (key in attributes) {
            result[key] = attributes[key];
        }
    }
    return result;
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=biscuit.js.map