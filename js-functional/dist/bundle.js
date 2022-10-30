/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/changeTheme.js":
/*!************************************!*\
  !*** ./controllers/changeTheme.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTheme": () => (/* binding */ changeTheme)
/* harmony export */ });
const changeTheme = () => {
   const root = document.querySelector(":root");
   const rootStyle = getComputedStyle(root);
   const lightThemeColor = rootStyle
      .getPropertyValue("--light-bg")
      .substring(1);
   let containerDiv = document.querySelector(".container");
   let containerDivBgColor = getComputedStyle(containerDiv).backgroundColor;

   let todosContainer = document.querySelector(".todosContainer");
   let todoItem = document.querySelectorAll(".todoItem");

   function changeThemeToLight() {
      containerDiv.style.backgroundColor = "var(--light-bg)";
      todosContainer.style.backgroundColor = "var(--light-primary-color)";

      for (let i = 0; i < todoItem.length; i++) {
         todoItem[i].style.backgroundColor = "var(--light-secondary-color)";
      }
   }

   function changeThemeToDark() {
      containerDiv.style.backgroundColor = "var(--dark-bg)";
      todosContainer.style.backgroundColor = "var(--dark-primary-color)";

      for (let i = 0; i < todoItem.length; i++) {
         todoItem[i].style.backgroundColor = "var(--dark-secondary-color)";
      }
   }
   if (lightThemeColor === containerDivBgColor) {
      changeThemeToDark();
   } else {
      // change theme to light
      changeThemeToLight();
   }
};


/***/ }),

/***/ "./print.js":
/*!******************!*\
  !*** ./print.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
   console.log("I get called from prints!");
}


/***/ }),

/***/ "../node_modules/.pnpm/nanoid@4.0.0/node_modules/nanoid/index.browser.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/.pnpm/nanoid@4.0.0/node_modules/nanoid/index.browser.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "../node_modules/.pnpm/nanoid@4.0.0/node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "../node_modules/.pnpm/nanoid@4.0.0/node_modules/nanoid/url-alphabet/index.js":
/*!************************************************************************************!*\
  !*** ../node_modules/.pnpm/nanoid@4.0.0/node_modules/nanoid/url-alphabet/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "../node_modules/.pnpm/nanoid@4.0.0/node_modules/nanoid/index.browser.js");
/* harmony import */ var _controllers_changeTheme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/changeTheme.js */ "./controllers/changeTheme.js");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./print.js");

// const nanoid = require("nanoid");



const theme = document.getElementById("changeTheme");
const todosForm = document.querySelector(".todosForm");
const tempBtn = document.querySelector(".tempBtn");

tempBtn.addEventListener("click", _print_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

const tasksArray = [
   {
      complete: true,
      title: "the is random task",

      id: 1,
   },
   {
      complete: false,
      title: "the is dhuishdies task",
      id: 2,
   },
];

function addFunction(e) {
   e.preventDefault();
   const inputValue = document.querySelector(".todosInput").value;

   const _input = {
      inputValue,
      id: (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),

      complete: false,
   };
   console.log(_input);
}

todosForm.addEventListener("submit", addFunction);

theme.addEventListener("click", _controllers_changeTheme_js__WEBPACK_IMPORTED_MODULE_0__.changeTheme);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ2U7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZxRDtBQUM5QztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQzJEO0FBQzFCOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLGlEQUFPOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsOENBQU07O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxvRUFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWZ1bmN0aW9uYWwvLi9jb250cm9sbGVycy9jaGFuZ2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9qcy1mdW5jdGlvbmFsLy4vcHJpbnQuanMiLCJ3ZWJwYWNrOi8vanMtZnVuY3Rpb25hbC8uLi9ub2RlX21vZHVsZXMvLnBucG0vbmFub2lkQDQuMC4wL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9qcy1mdW5jdGlvbmFsLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANC4wLjAvbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanMtZnVuY3Rpb25hbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1mdW5jdGlvbmFsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1mdW5jdGlvbmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtZnVuY3Rpb25hbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLWZ1bmN0aW9uYWwvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2hhbmdlVGhlbWUgPSAoKSA9PiB7XG4gICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuICAgY29uc3Qgcm9vdFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KTtcbiAgIGNvbnN0IGxpZ2h0VGhlbWVDb2xvciA9IHJvb3RTdHlsZVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCItLWxpZ2h0LWJnXCIpXG4gICAgICAuc3Vic3RyaW5nKDEpO1xuICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgbGV0IGNvbnRhaW5lckRpdkJnQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lckRpdikuYmFja2dyb3VuZENvbG9yO1xuXG4gICBsZXQgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zQ29udGFpbmVyXCIpO1xuICAgbGV0IHRvZG9JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvSXRlbVwiKTtcblxuICAgZnVuY3Rpb24gY2hhbmdlVGhlbWVUb0xpZ2h0KCkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQtYmcpXCI7XG4gICAgICB0b2Rvc0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpXCI7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHRvZG9JdGVtW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQtc2Vjb25kYXJ5LWNvbG9yKVwiO1xuICAgICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiBjaGFuZ2VUaGVtZVRvRGFyaygpIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWRhcmstYmcpXCI7XG4gICAgICB0b2Rvc0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWRhcmstcHJpbWFyeS1jb2xvcilcIjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgdG9kb0l0ZW1baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1kYXJrLXNlY29uZGFyeS1jb2xvcilcIjtcbiAgICAgIH1cbiAgIH1cbiAgIGlmIChsaWdodFRoZW1lQ29sb3IgPT09IGNvbnRhaW5lckRpdkJnQ29sb3IpIHtcbiAgICAgIGNoYW5nZVRoZW1lVG9EYXJrKCk7XG4gICB9IGVsc2Uge1xuICAgICAgLy8gY2hhbmdlIHRoZW1lIHRvIGxpZ2h0XG4gICAgICBjaGFuZ2VUaGVtZVRvTGlnaHQoKTtcbiAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICAgY29uc29sZS5sb2coXCJJIGdldCBjYWxsZWQgZnJvbSBwcmludHMhXCIpO1xufVxuIiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuLy8gY29uc3QgbmFub2lkID0gcmVxdWlyZShcIm5hbm9pZFwiKTtcbmltcG9ydCB7IGNoYW5nZVRoZW1lIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvY2hhbmdlVGhlbWUuanNcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50LmpzXCI7XG5cbmNvbnN0IHRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2VUaGVtZVwiKTtcbmNvbnN0IHRvZG9zRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NGb3JtXCIpO1xuY29uc3QgdGVtcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcEJ0blwiKTtcblxudGVtcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpbnRNZSk7XG5cbmNvbnN0IHRhc2tzQXJyYXkgPSBbXG4gICB7XG4gICAgICBjb21wbGV0ZTogdHJ1ZSxcbiAgICAgIHRpdGxlOiBcInRoZSBpcyByYW5kb20gdGFza1wiLFxuXG4gICAgICBpZDogMSxcbiAgIH0sXG4gICB7XG4gICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICB0aXRsZTogXCJ0aGUgaXMgZGh1aXNoZGllcyB0YXNrXCIsXG4gICAgICBpZDogMixcbiAgIH0sXG5dO1xuXG5mdW5jdGlvbiBhZGRGdW5jdGlvbihlKSB7XG4gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc0lucHV0XCIpLnZhbHVlO1xuXG4gICBjb25zdCBfaW5wdXQgPSB7XG4gICAgICBpbnB1dFZhbHVlLFxuICAgICAgaWQ6IG5hbm9pZCgpLFxuXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICB9O1xuICAgY29uc29sZS5sb2coX2lucHV0KTtcbn1cblxudG9kb3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkRnVuY3Rpb24pO1xuXG50aGVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlVGhlbWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9