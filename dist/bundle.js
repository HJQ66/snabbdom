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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mySnabbdom/h.js */ \"./src/mySnabbdom/h.js\");\n/* harmony import */ var _mySnabbdom_patch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mySnabbdom/patch.js */ \"./src/mySnabbdom/patch.js\");\n\r\n\r\n\r\nconst Vnode1 = (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('ul', '你好呀')\r\n\r\nconst Vnode2 = (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('ul', [\r\n    (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('p', '你好啊'),\r\n    (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('p', '哈哈哈'),\r\n    (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('p', '嘿嘿嘿'),\r\n])\r\nconst Vnode3 = (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('ul', [\r\n    (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('p', '香蕉'),\r\n    (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('p', '梨子'),\r\n    (0,_mySnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__.h)('p', '苹果'),\r\n])\r\n\r\n\r\nconst container = document.getElementById('container')\r\nconst btn = document.querySelector('.btn')\r\n\r\n;(0,_mySnabbdom_patch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container, Vnode1)\r\n\r\nbtn.onclick = () => {\r\n    ;(0,_mySnabbdom_patch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Vnode1, Vnode3)\r\n}\n\n//# sourceURL=webpack://study-snabbdom1/./src/index.js?");

/***/ }),

/***/ "./src/mySnabbdom/createElement.js":
/*!*****************************************!*\
  !*** ./src/mySnabbdom/createElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\n//真正创建节点。将vnode创建为DOM\r\nfunction createElement(vnode) {\r\n    // console.log('目的是把虚拟节点');\r\n    //创建一个dom节点，这个节点现在还是孤儿节点\r\n    let domNode = document.createElement(vnode.sel)\r\n    //有子节点还是有文本？？\r\n    if (vnode.text !== \"\" && (vnode.children === undefined || vnode.children.length === 0)) {\r\n        //它内部是文字\r\n        domNode.innerText = vnode.text\r\n    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {\r\n        //它内部有子节点，就要递归创建节点\r\n        for (let i = 0; i < vnode.children.length; i++) {\r\n            //得到当前这个children\r\n            let ch = vnode.children[i];\r\n            //递归调用\r\n            let chDom = createElement(ch);\r\n            //上树\r\n            domNode.appendChild(chDom);\r\n        }\r\n    }\r\n    //补充elm属性\r\n    vnode.elm = domNode;\r\n    return vnode.elm;\r\n}\n\n//# sourceURL=webpack://study-snabbdom1/./src/mySnabbdom/createElement.js?");

/***/ }),

/***/ "./src/mySnabbdom/h.js":
/*!*****************************!*\
  !*** ./src/mySnabbdom/h.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"h\": () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/mySnabbdom/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ \"./src/mySnabbdom/is.js\");\n\r\n\r\n\r\nfunction h(sel, b, c) {\r\n    let data = {}\r\n    let children\r\n    let text\r\n\r\n    //三种参数的情况\r\n    if (c !== undefined) {\r\n        if (b !== null) {\r\n            data = b\r\n        }\r\n        if (_is__WEBPACK_IMPORTED_MODULE_1__.array(c)) {\r\n            children = c\r\n        } else if (_is__WEBPACK_IMPORTED_MODULE_1__.primitive(c)) {\r\n            text = c.toString()\r\n        } else if (c && c.sel) {\r\n            children = [c]\r\n        }\r\n    }\r\n    //两种参数的情况\r\n    else if (b !== undefined && b !== null) {\r\n        if (_is__WEBPACK_IMPORTED_MODULE_1__.primitive(b)) {\r\n            text = b.toString()\r\n        } else if (_is__WEBPACK_IMPORTED_MODULE_1__.array(b)) {\r\n            children = b\r\n        } else if (b && b.sel) {\r\n            children = [b]\r\n        } else {\r\n            data = b\r\n        }\r\n    }\r\n    if (children != undefined) {\r\n        // 判断数组中的数据是否是数字，或字符串 [1,2,'哈哈哈哈']\r\n        for (let i = 0; i < children.length; i++) {\r\n            if (_is__WEBPACK_IMPORTED_MODULE_1__.primitive(children[i])) {\r\n                children[i] = (0,_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(undefined, undefined, undefined, children[i], undefined)\r\n            }\r\n        }\r\n    }\r\n    return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel, data, children, text, undefined)\r\n}\r\n\n\n//# sourceURL=webpack://study-snabbdom1/./src/mySnabbdom/h.js?");

/***/ }),

/***/ "./src/mySnabbdom/is.js":
/*!******************************!*\
  !*** ./src/mySnabbdom/is.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"array\": () => (/* binding */ array),\n/* harmony export */   \"primitive\": () => (/* binding */ primitive)\n/* harmony export */ });\nconst  array = Array.isArray\r\nfunction primitive(s){\r\n    return (\r\n        typeof s === 'number' || typeof s === \"string\" || s instanceof Number || s instanceof String\r\n    )\r\n}\r\n\n\n//# sourceURL=webpack://study-snabbdom1/./src/mySnabbdom/is.js?");

/***/ }),

/***/ "./src/mySnabbdom/patch.js":
/*!*********************************!*\
  !*** ./src/mySnabbdom/patch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ patch)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/mySnabbdom/vnode.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ \"./src/mySnabbdom/createElement.js\");\n/* harmony import */ var _patchVnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patchVnode */ \"./src/mySnabbdom/patchVnode.js\");\n\r\n\r\n\r\n\r\nfunction patch(oldVnode, newVnode) {\r\n    //判断oldVnode是不是虚拟节点，如果不是，则转换为虚拟节点\r\n    if (oldVnode.sel == \"\" || oldVnode.sel == undefined) {\r\n        oldVnode = (0,_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)\r\n    }\r\n    //判断旧虚拟dom和新虚拟dom是不是同一个节点\r\n    if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {\r\n        (0,_patchVnode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(oldVnode, newVnode)\r\n    } else {\r\n        //不是同一个节点\r\n        console.log('不是同一个节点，此时需要暴力插入新的，删除旧的');\r\n        let newVnodeElm = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newVnode)\r\n        //插入到老节点之前\r\n        if (oldVnode.elm.parentNode && newVnodeElm) {\r\n            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)\r\n        }\r\n        //移除旧的dom\r\n        oldVnode.elm.parentNode.removeChild(oldVnode.elm)\r\n    }\r\n}\n\n//# sourceURL=webpack://study-snabbdom1/./src/mySnabbdom/patch.js?");

/***/ }),

/***/ "./src/mySnabbdom/patchVnode.js":
/*!**************************************!*\
  !*** ./src/mySnabbdom/patchVnode.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ patchVnode)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/mySnabbdom/createElement.js\");\n\r\n\r\nfunction patchVnode(oldVnode, newVnode) {\r\n    // console.log(\"是同一个节点\");\r\n    //精细化比较\r\n    //如果oldVnode和newVnode是内存中的同一个对象\r\n    if (oldVnode === newVnode) return;\r\n    //判断newVnode中是否有text且没有children\r\n    if (newVnode.text !== undefined && (newVnode.children === undefined || newVnode.children.length === 0)) {\r\n        if (newVnode.text !== oldVnode.text) {\r\n            //如果新虚拟节点中的text和老的虚拟节点的text不同\r\n            oldVnode.elm.innerText = newVnode.text;\r\n        }\r\n    } else {\r\n        //newVnode中没有text属性，但是有children\r\n        if (oldVnode.children !== undefined && oldVnode.children.length > 0) {\r\n            //此时oldVnode有children属性\r\n            console.log('此时是最复杂的情况');\r\n\r\n        } else {\r\n            console.log(\"oldVnode没有children属性，newVnode中有children属性\");\r\n            //先清空oldVnode中的text值\r\n            oldVnode.elm.innerHTML = \"\"\r\n            //此时oldVnode没有children属性，newVnode中有children属性\r\n            for (let i = 0; i < newVnode.children.length; i++) {\r\n                let dom = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newVnode.children[i])\r\n                oldVnode.elm.appendChild(dom)\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://study-snabbdom1/./src/mySnabbdom/patchVnode.js?");

/***/ }),

/***/ "./src/mySnabbdom/vnode.js":
/*!*********************************!*\
  !*** ./src/mySnabbdom/vnode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sel, data, children, text, elm) {\r\n    const key = data.key\r\n    return {\r\n        sel, data, children, text, elm, key\r\n    }\r\n}\n\n//# sourceURL=webpack://study-snabbdom1/./src/mySnabbdom/vnode.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;