/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function showNotes(e) {\r\n    e.preventDefault();\r\n    let index = document.getElementById(\"outday\").value;\r\n    let showHeading = document.getElementById(\"heading_notes\");\r\n    let showDesc = document.getElementById(\"paragraph\");\r\n    let arr = JSON.parse(localStorage.getItem(\"notes\"));\r\n    if (arr == null) {\r\n        showHeading.innerText = \"Notes Not Available! Enter First\";\r\n        showHeading.style.color = \"red\";\r\n        showDesc.innerText = \"\";\r\n    }\r\n    let found = false;\r\n    for ({ day,heading,desc } of arr) {\r\n        if (day == index) {\r\n            showHeading.innerText = heading;\r\n            showHeading.style.color = \"green\";\r\n            showDesc.innerText = desc;\r\n            found = true;\r\n            break;\r\n        }\r\n    }\r\n    if (!found) {\r\n        showHeading.innerText = \"Notes Not Available For The Given Day\";\r\n        showHeading.style.color = \"red\";\r\n        showDesc.innerText = \"\";\r\n    }\r\n    \r\n}\r\n\r\nfunction saveData(e) {\r\n    e.preventDefault();\r\n    let index = document.getElementById(\"inday\").value;\r\n    let heading = document.getElementById(\"Heading\").value;\r\n    let desc = document.getElementById(\"Description\").value;\r\n    let in_form = document.getElementById(\"in_form\");\r\n    in_form.reset();\r\n    let arr = JSON.parse(localStorage.getItem(\"notes\"));\r\n    if (arr == null) {\r\n        arr = [];\r\n    }\r\n    let obj = {\r\n        day: index,\r\n        heading: heading,\r\n        desc:desc\r\n    }\r\n    for (let i = 0; i < arr.length; i++) {\r\n        if (arr[i].day == index) {\r\n            arr.splice(i, 1);\r\n        }\r\n    }\r\n    arr.push(obj);\r\n    localStorage.setItem(\"notes\",JSON.stringify(arr));\r\n    console.log(\"in\",index,heading,desc)\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;