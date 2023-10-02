/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-red: rgb(214, 5, 5);
  --color-skyblue: rgb(206, 230, 238);
  --color-greenblue: rgba(0, 255, 149, 0.3);
}

* {
  padding: 0;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  display: grid;
  grid-template-columns: 25vw 1fr;
  height: 100vh;
}

.todo-card-container {
  width: 50vw;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem lightgrey;
  padding: 0.8rem;
  padding-bottom: 0.5rem;
}

.todo-card-container:hover:not(:has(button:hover)):not(:has(input:hover)) {
  background-color: rgb(201, 234, 247);
  position: relative;
}

.todo-card-container:hover:not(:has(button:hover)):not(:has(input:hover))::before {
  content: 'Click to expand or close!';
  font-size: 0.7rem;
  color: grey;
  position: absolute;
  top: -1rem;
  padding: 0 0.5rem;
}

.todo-card-container:active:not(:has(button:hover)):not(:has(input:hover)) {
  filter: brightness(0.8);
}

.todo-card-header {
  padding: 0.5rem;
  padding-top: 0;

  display: grid;
  gap: 0.2rem;
}

.todo-card-title {
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.todo-card-priority {
  font-size: 0.6rem;
  font-weight: bold;
  color: white;
  width: min-content;
  padding: 0.2rem;
  border-radius: 0.2rem;
}

.todo-card-footer {
  display: grid;
  gap: 0 0.5rem;
  grid-template-columns: 1rem 1fr;
  border-top: 0.1rem solid darkgray;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
}

.todo-card-due-date {
  grid-column: 2;
  font-size: 0.8rem;
  display: inline-block;
}

.todo-card-status {
  grid-column: 1;
  grid-row: 1;
  display: inline-block;
  width: 1rem;
  height: 1rem;
}

.todo-card-remove-btn {
  grid-column: 2;
  grid-row: 2;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
  border: none;
  font-size: 0.7rem;
  position: relative;
  left: 0.5rem;
  justify-self: right;
}

.todo-card-remove-btn:hover {
  filter: brightness(0.8);
}

.todo-card-desc {
  font-size: 1rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: none;
}

.todo-card-desc.shown {
  display: block;
}

.fa-clock {
  color: lightgrey;
}

.fa-circle-check {
  color: rgb(13, 228, 13);
}

.site-icon {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: serif;
  font-weight: bold;
  font-style: italic;
  border: 0.2rem double black;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.site-icon:hover {
  animation: rainbow 0.5s linear;
  animation-iteration-count: infinite;
}

@keyframes rainbow {
  100%,
  0% {
    color: rgb(255, 0, 0);
    border-color: rgb(255, 0, 0);
  }
  8% {
    color: rgb(255, 127, 0);
    border-color: rgb(255, 127, 0);
  }
  16% {
    color: rgb(255, 255, 0);
    border-color: rgb(255, 255, 0);
  }
  25% {
    color: rgb(127, 255, 0);
    border-color: rgb(127, 255, 0);
  }
  33% {
    color: rgb(0, 255, 0);
    border-color: rgb(0, 255, 0);
  }
  41% {
    color: rgb(0, 255, 127);
    border-color: rgb(0, 255, 127);
  }
  50% {
    color: rgb(0, 255, 255);
    border-color: rgb(0, 255, 255);
  }
  58% {
    color: rgb(0, 127, 255);
    border-color: rgb(0, 127, 255);
  }
  66% {
    color: rgb(0, 0, 255);
    border-color: rgb(0, 0, 25);
  }
  75% {
    color: rgb(127, 0, 255);
    border-color: rgb(127, 0, 255);
  }
  83% {
    color: rgb(255, 0, 255);
    border-color: rgb(255, 0, 255);
  }
  91% {
    color: rgb(255, 0, 127);
    border-color: rgb(255, 0, 127);
  }
}

.menu-container {
  grid-column: 1;
  background-color: var(--color-skyblue);
  padding: 1rem;
  box-sizing: border-box;
}

.menu-default-group-title,
.menu-custom-group-header {
  text-transform: uppercase;
  font-size: small;
  font-weight: bold;
  padding-bottom: 0.2rem;
}

.menu-custom-group-header {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.menu-custom-group-btn {
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
}

.menu-custom-group-btn:hover,
.menu-custom-group-btn.active {
  filter: opacity(0.3);
}

.menu-default-group,
.menu-custom-group {
  padding-bottom: 0.5rem;
  display: grid;
  font-size: 1rem;
}

.menu-default-group {
  border-bottom: 0.1rem solid grey;
}

.menu-item-container {
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-item-container:not(:has(button:hover)):has(form.hidden):hover,
.menu-item-container.selected:has(form.hidden) {
  background-color: var(--color-greenblue);
}

.menu-item-btn {
  border: none;
  background-color: transparent;
  color: var(--color-red);
  font-size: 0.9rem;
  display: none;
}

.menu-item-btn:hover {
  filter: opacity(0.5);
}

.menu-item-btn.shown {
  display: initial;
}

.menu-item-title-input {
  padding: 0.2rem;
  width: 95%;
}

.proj-view-container {
  margin: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.proj-view-placeholder {
  flex-grow: 1;
  margin: 8rem;
  padding: 3rem;
  border: 0.5rem dashed lightgrey;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}

.proj-view-add-todo-btn {
  z-index: 25;
  position: fixed;
  right: 10vh;
  bottom: 5vh;
  border: none;
  font-size: 4rem;
  width: 3rem;
  color: darkblue;
  background-color: transparent;
}

.proj-view-add-todo-btn:hover {
  filter: opacity(0.5);
}

.proj-view-title {
  font-size: 2rem;
  font-weight: bold;
}

.proj-view-card-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.new-todo-form-backdrop {
  backdrop-filter: blur(2px) brightness(0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
}

#new-todo-form {
  width: 70vw;
  border: 0.2rem solid darkblue;
  border-radius: 0.5rem;
  background-color: var(--color-skyblue);
}

.new-todo-form-title {
  background-color: darkblue;
  color: white;
  font-weight: bold;
  padding: 0.5rem;
}

.new-todo-form-fields {
  padding: 2rem 0.5rem 1rem 0.5rem;
  display: grid;
  grid-template: repeat(7, 1fr) / 20% 1fr;
  gap: 1rem;
}

.new-todo-desc-input {
  grid-row: span 4;
  resize: none;
  padding: 0.2rem;
}

.new-todo-form-cancel-btn,
.new-todo-form-submit-btn {
  width: 25%;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
}

#new-todo-form button:hover {
  filter: opacity(0.5);
}

.new-todo-form-cancel-btn {
  color: darkblue;
}

.new-todo-form-submit-btn {
  background-color: darkblue;
  color: white;
}

.new-todo-form-btn-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.hidden {
  display: none;
}

.high {
  background-color: var(--color-red);
}

.med {
  background-color: orange;
}

.low {
  background-color: green;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --color-red: rgb(214, 5, 5);\n  --color-skyblue: rgb(206, 230, 238);\n  --color-greenblue: rgba(0, 255, 149, 0.3);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 25vw 1fr;\n  height: 100vh;\n}\n\n.todo-card-container {\n  width: 50vw;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 0.5rem lightgrey;\n  padding: 0.8rem;\n  padding-bottom: 0.5rem;\n}\n\n.todo-card-container:hover:not(:has(button:hover)):not(:has(input:hover)) {\n  background-color: rgb(201, 234, 247);\n  position: relative;\n}\n\n.todo-card-container:hover:not(:has(button:hover)):not(:has(input:hover))::before {\n  content: 'Click to expand or close!';\n  font-size: 0.7rem;\n  color: grey;\n  position: absolute;\n  top: -1rem;\n  padding: 0 0.5rem;\n}\n\n.todo-card-container:active:not(:has(button:hover)):not(:has(input:hover)) {\n  filter: brightness(0.8);\n}\n\n.todo-card-header {\n  padding: 0.5rem;\n  padding-top: 0;\n\n  display: grid;\n  gap: 0.2rem;\n}\n\n.todo-card-title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.todo-card-priority {\n  font-size: 0.6rem;\n  font-weight: bold;\n  color: white;\n  width: min-content;\n  padding: 0.2rem;\n  border-radius: 0.2rem;\n}\n\n.todo-card-footer {\n  display: grid;\n  gap: 0 0.5rem;\n  grid-template-columns: 1rem 1fr;\n  border-top: 0.1rem solid darkgray;\n  padding-top: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  align-items: center;\n}\n\n.todo-card-due-date {\n  grid-column: 2;\n  font-size: 0.8rem;\n  display: inline-block;\n}\n\n.todo-card-status {\n  grid-column: 1;\n  grid-row: 1;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n}\n\n.todo-card-remove-btn {\n  grid-column: 2;\n  grid-row: 2;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0.3rem;\n  border-radius: 0.2rem;\n  border: none;\n  font-size: 0.7rem;\n  position: relative;\n  left: 0.5rem;\n  justify-self: right;\n}\n\n.todo-card-remove-btn:hover {\n  filter: brightness(0.8);\n}\n\n.todo-card-desc {\n  font-size: 1rem;\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  display: none;\n}\n\n.todo-card-desc.shown {\n  display: block;\n}\n\n.fa-clock {\n  color: lightgrey;\n}\n\n.fa-circle-check {\n  color: rgb(13, 228, 13);\n}\n\n.site-icon {\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n  font-family: serif;\n  font-weight: bold;\n  font-style: italic;\n  border: 0.2rem double black;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.site-icon:hover {\n  animation: rainbow 0.5s linear;\n  animation-iteration-count: infinite;\n}\n\n@keyframes rainbow {\n  100%,\n  0% {\n    color: rgb(255, 0, 0);\n    border-color: rgb(255, 0, 0);\n  }\n  8% {\n    color: rgb(255, 127, 0);\n    border-color: rgb(255, 127, 0);\n  }\n  16% {\n    color: rgb(255, 255, 0);\n    border-color: rgb(255, 255, 0);\n  }\n  25% {\n    color: rgb(127, 255, 0);\n    border-color: rgb(127, 255, 0);\n  }\n  33% {\n    color: rgb(0, 255, 0);\n    border-color: rgb(0, 255, 0);\n  }\n  41% {\n    color: rgb(0, 255, 127);\n    border-color: rgb(0, 255, 127);\n  }\n  50% {\n    color: rgb(0, 255, 255);\n    border-color: rgb(0, 255, 255);\n  }\n  58% {\n    color: rgb(0, 127, 255);\n    border-color: rgb(0, 127, 255);\n  }\n  66% {\n    color: rgb(0, 0, 255);\n    border-color: rgb(0, 0, 25);\n  }\n  75% {\n    color: rgb(127, 0, 255);\n    border-color: rgb(127, 0, 255);\n  }\n  83% {\n    color: rgb(255, 0, 255);\n    border-color: rgb(255, 0, 255);\n  }\n  91% {\n    color: rgb(255, 0, 127);\n    border-color: rgb(255, 0, 127);\n  }\n}\n\n.menu-container {\n  grid-column: 1;\n  background-color: var(--color-skyblue);\n  padding: 1rem;\n  box-sizing: border-box;\n}\n\n.menu-default-group-title,\n.menu-custom-group-header {\n  text-transform: uppercase;\n  font-size: small;\n  font-weight: bold;\n  padding-bottom: 0.2rem;\n}\n\n.menu-custom-group-header {\n  margin-top: 1rem;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.menu-custom-group-btn {\n  border: none;\n  background-color: transparent;\n  font-size: 0.9rem;\n}\n\n.menu-custom-group-btn:hover,\n.menu-custom-group-btn.active {\n  filter: opacity(0.3);\n}\n\n.menu-default-group,\n.menu-custom-group {\n  padding-bottom: 0.5rem;\n  display: grid;\n  font-size: 1rem;\n}\n\n.menu-default-group {\n  border-bottom: 0.1rem solid grey;\n}\n\n.menu-item-container {\n  padding: 0.3rem 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.menu-item-container:not(:has(button:hover)):has(form.hidden):hover,\n.menu-item-container.selected:has(form.hidden) {\n  background-color: var(--color-greenblue);\n}\n\n.menu-item-btn {\n  border: none;\n  background-color: transparent;\n  color: var(--color-red);\n  font-size: 0.9rem;\n  display: none;\n}\n\n.menu-item-btn:hover {\n  filter: opacity(0.5);\n}\n\n.menu-item-btn.shown {\n  display: initial;\n}\n\n.menu-item-title-input {\n  padding: 0.2rem;\n  width: 95%;\n}\n\n.proj-view-container {\n  margin: 2rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.proj-view-placeholder {\n  flex-grow: 1;\n  margin: 8rem;\n  padding: 3rem;\n  border: 0.5rem dashed lightgrey;\n  color: grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.proj-view-add-todo-btn {\n  z-index: 25;\n  position: fixed;\n  right: 10vh;\n  bottom: 5vh;\n  border: none;\n  font-size: 4rem;\n  width: 3rem;\n  color: darkblue;\n  background-color: transparent;\n}\n\n.proj-view-add-todo-btn:hover {\n  filter: opacity(0.5);\n}\n\n.proj-view-title {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.proj-view-card-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.new-todo-form-backdrop {\n  backdrop-filter: blur(2px) brightness(0.8);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 50;\n}\n\n#new-todo-form {\n  width: 70vw;\n  border: 0.2rem solid darkblue;\n  border-radius: 0.5rem;\n  background-color: var(--color-skyblue);\n}\n\n.new-todo-form-title {\n  background-color: darkblue;\n  color: white;\n  font-weight: bold;\n  padding: 0.5rem;\n}\n\n.new-todo-form-fields {\n  padding: 2rem 0.5rem 1rem 0.5rem;\n  display: grid;\n  grid-template: repeat(7, 1fr) / 20% 1fr;\n  gap: 1rem;\n}\n\n.new-todo-desc-input {\n  grid-row: span 4;\n  resize: none;\n  padding: 0.2rem;\n}\n\n.new-todo-form-cancel-btn,\n.new-todo-form-submit-btn {\n  width: 25%;\n  padding: 0.5rem 1.5rem;\n  border: none;\n  border-radius: 2rem;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n#new-todo-form button:hover {\n  filter: opacity(0.5);\n}\n\n.new-todo-form-cancel-btn {\n  color: darkblue;\n}\n\n.new-todo-form-submit-btn {\n  background-color: darkblue;\n  color: white;\n}\n\n.new-todo-form-btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.high {\n  background-color: var(--color-red);\n}\n\n.med {\n  background-color: orange;\n}\n\n.low {\n  background-color: green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/mainController.js":
/*!*******************************!*\
  !*** ./src/mainController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _newTodoModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodoModal */ "./src/newTodoModal.js");
/* harmony import */ var _projectMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectMenu */ "./src/projectMenu.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");






const mainController = (() => {
  function createNewProject (projTitle) {
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projTitle, false)
    saveState()
  }

  function getProject (projTitle) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getReadOnlyProject(projTitle)
  }

  function run () {
    const body = document.querySelector('body')

    body.append(
      _projectMenu__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectMenu(),
      _projectView__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectView(),
      _newTodoModal__WEBPACK_IMPORTED_MODULE_1__["default"]
    )
    loadState()
    const projects = _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAllReadOnlyProject()
    _projectMenu__WEBPACK_IMPORTED_MODULE_2__["default"].loadMenuItems(projects)
  }

  function deleteProject (projTitle) {
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(projTitle)
    saveState()
  }

  function deleteTodoFromProject (todoTitle, projTitle) {
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodoFromProject(todoTitle, projTitle)
    saveState()
  }

  function setTodoAsDone (boolean, todoTitle, projTitle) {
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].setTodoAsDone(boolean, todoTitle, projTitle)
    saveState()
  }

  function addNewTodoToProject (title, desc, dueDate, priority, projTitle) {
    _model__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoToProject(title, desc, dueDate, priority, projTitle)
    saveState()
  }

  function saveState () {
    console.log(JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_0__["default"]))
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(_model__WEBPACK_IMPORTED_MODULE_0__["default"])
  }

  function loadState () {
    if (!_storage__WEBPACK_IMPORTED_MODULE_4__["default"].isPageVisited()) {
      _model__WEBPACK_IMPORTED_MODULE_0__["default"].setUpDefault()
    } else {
      _model__WEBPACK_IMPORTED_MODULE_0__["default"].load(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getData())
    }
  }

  return {
    run,
    createNewProject,
    getProject,
    deleteProject,
    deleteTodoFromProject,
    setTodoAsDone,
    addNewTodoToProject
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainController);


/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoFactory = (title, desc, dueDate, priority) => {
  let isDone = false
  const creationDate = Date.now()

  return {
    get title () {
      return title
    },
    get desc () {
      return desc
    },
    get dueDate () {
      return dueDate
    },
    get priority () {
      return priority
    },
    get isDone () {
      return isDone
    },
    setIsDone: function (boolean) {
      isDone = boolean
    }
  }
}

const projectFactory = (title, isDefault) => {
  let todos = []

  return {
    get title () {
      return title
    },
    addTodo (title, desc, dueDate, priority) {
      todos.push(todoFactory(title, desc, dueDate, priority))
    },
    deleteTodo (title) {
      todos = todos.filter(todo => todo.title !== title)
    },
    getNoOfProjects () {
      return todos.length()
    },
    getAllReadOnlyTodos () {
      const result = []
      for (let todo of todos) {
        const { title, desc, dueDate, priority, isDone, creationDate } = todo
        const readOnlyTodo = {
          title,
          desc,
          dueDate,
          priority,
          isDone,
          creationDate
        }
        result.push(readOnlyTodo)
      }
      return result
    },
    isDefaultProject () {
      return isDefault
    },
    setTodoAsDone (boolean, title) {
      todos.forEach(todo => {
        if (todo.title === title) {
          todo.setIsDone(boolean)
        }
      })
    }
  }
}

const projectCatalogue = (() => {
  let projects = []

  return {
    addProject (title, isDefault) {
      const newProject = projectFactory(title, isDefault)
      projects.push(newProject)
    },
    addTodoToProject (title, desc, dueDate, priority, projTitle) {
      const project = projects.filter(proj => proj.title === projTitle)[0]
      project.addTodo(title, desc, dueDate, priority)
    },
    deleteProject (title) {
      projects = projects.filter(project => project.title !== title)
    },
    deleteTodoFromProject (title, projTitle) {
      projects.forEach(proj => {
        if (proj.title === projTitle) proj.deleteTodo(title)
      })
    },
    getAllReadOnlyProject () {
      const result = []
      for (let p of projects) {
        const readOnlyProject = {
          get title () {
            return p.title
          },
          get todos () {
            return p.getAllReadOnlyTodos()
          },
          get isDefaultProject () {
            return p.isDefaultProject()
          }
        }
        result.push(readOnlyProject)
      }
      return result
    },
    setTodoAsDone (boolean, title, projTitle) {
      projects.forEach(proj => {
        if (proj.title === projTitle) {
          proj.setTodoAsDone(boolean, title)
        }
      })
    },
    setUpDefault () {
      projectCatalogue.addProject('Tasks', true)
      projectCatalogue.addProject('Due this week', true)
      projectCatalogue.addProject('Example Project', false)

      const projects = projectCatalogue.getAllReadOnlyProject()
      const project = projects[0]

      projectCatalogue.addTodoToProject(
        'Example 1',
        'Bla bla bla',
        '2023/09/13',
        'HIGH',
        project.title
      )
      projectCatalogue.addTodoToProject(
        'Example 2',
        'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
        '16/10/2023',
        'MED',
        project.title
      ),
        projectCatalogue.addTodoToProject(
          'Example 3',
          'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          '16/10/2024',
          'LOW',
          project.title
        )
    },
    getReadOnlyProject (projTitle) {
      const project = projects.filter(proj => proj.title === projTitle)[0]
      return {
        get title () {
          return project.title
        },
        get todos () {
          return project.getAllReadOnlyTodos()
        },
        isDefaultProject: project.isDefaultProject
      }
    },
    toJSON() {
      return this.getAllReadOnlyProject()
    },
    load (arrayData) {
      for (let obj of arrayData) {
        const projTitle = obj['title']
        const projIsDefault = obj['isDefaultProject']
        this.addProject(projTitle, projIsDefault)
        const todos = obj['todos']
        for (let todo of todos) {
          const { title, desc, dueDate, priority, isDone } = todo
          this.addTodoToProject(title, desc, dueDate, priority, projTitle)
          if (isDone) {
            this.setTodoAsDone(true, title, projTitle)
          }
        }
      }
    }
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectCatalogue);


/***/ }),

/***/ "./src/newTodoModal.js":
/*!*****************************!*\
  !*** ./src/newTodoModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainController */ "./src/mainController.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");



const newTodoModal = (projTitle => {
  const backdrop = document.createElement('div')
  const form = document.createElement('form')
  const formTitle = document.createElement('div')
  const formFieldContainer = document.createElement('div')
  const titleLabel = document.createElement('label')
  const titleInput = document.createElement('input')
  const descLabel = document.createElement('label')
  const descInput = document.createElement('textarea')
  const priorityLabel = document.createElement('label')
  const priorityInput = document.createElement('select')
  const priorityValueLow = document.createElement('option')
  const priorityValueMed = document.createElement('option')
  const priorityValueHigh = document.createElement('option')
  const dueDateLabel = document.createElement('label')
  const dueDateInput = document.createElement('input')
  const buttonContainer = document.createElement('div')
  const submitBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  backdrop.className = 'new-todo-form-backdrop hidden'
  form.id = 'new-todo-form'
  formTitle.className = 'new-todo-form-title'
  formFieldContainer.className = 'new-todo-form-fields'
  titleLabel.className = 'new-todo-title-label'
  titleInput.className = 'new-todo-title-input'
  descLabel.className = 'new-todo-desc-label'
  descInput.className = 'new-todo-desc-input'
  priorityLabel.className = 'new-todo-priority-label'
  priorityInput.className = 'new-todo-priority-input'
  dueDateLabel.className = 'new-todo-due-date-label'
  dueDateInput.className = 'new-todo-due-date-input'
  submitBtn.className = 'new-todo-form-submit-btn'
  cancelBtn.className = 'new-todo-form-cancel-btn'
  buttonContainer.className = 'new-todo-form-btn-container'

  formTitle.textContent = 'Add a new todo'
  titleLabel.for = titleInput
  titleLabel.textContent = 'Title'
  titleInput.type = 'text'
  titleInput.required = true
  descLabel.for = descInput
  descLabel.textContent = 'Description'
  descInput.defaultValue = '(No description available)'
  descInput.required = true
  priorityLabel.for = priorityInput
  priorityLabel.textContent = 'Priority'
  priorityInput.required = true
  priorityValueHigh.value = 'HIGH'
  priorityValueHigh.label = 'HIGH'
  priorityValueMed.value = 'MED'
  priorityValueMed.label = 'MED'
  priorityValueLow.value = 'LOW'
  priorityValueLow.label = 'LOW'
  dueDateLabel.for = descInput
  dueDateLabel.textContent = 'Due date'
  dueDateInput.type = 'date'
  dueDateInput.required = true
  submitBtn.type = 'submit'
  submitBtn.textContent = 'Submit'
  cancelBtn.type = 'button'
  cancelBtn.textContent = 'Cancel'

  function handleSubmitForm (e) {
    e.preventDefault()
    backdrop.classList.toggle('hidden')
    const currProjTitle = _projectView__WEBPACK_IMPORTED_MODULE_1__["default"].getDisplayedProjTitle()
    _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].addNewTodoToProject(
      titleInput.value,
      descInput.value,
      dueDateInput.value,
      priorityInput.value,
      currProjTitle
    )
    resetFields()

    // redraw project view
    const updatedProject = _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(currProjTitle)
    _projectView__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(updatedProject)
  }

  function handleClickOnCancel () {
    backdrop.classList.toggle('hidden')
    resetFields()
  }

  function resetFields () {
    titleInput.value = ''
    dueDateInput.value = ''
    priorityInput.value = 'LOW'
    descInput.value = descInput.defaultValue
  }

  form.addEventListener('submit', handleSubmitForm)
  cancelBtn.addEventListener('click', handleClickOnCancel)

  priorityInput.append(priorityValueLow, priorityValueMed, priorityValueHigh)
  buttonContainer.append(cancelBtn, submitBtn)
  formFieldContainer.append(
    titleLabel,
    titleInput,
    dueDateLabel,
    dueDateInput,
    priorityLabel,
    priorityInput,
    descLabel,
    descInput
  )

  form.append(formTitle, formFieldContainer, buttonContainer)

  backdrop.append(form)

  return backdrop
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoModal);


/***/ }),

/***/ "./src/projectMenu.js":
/*!****************************!*\
  !*** ./src/projectMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainController */ "./src/mainController.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");



const menuItemFactory = (project, isEditable) => {
  const FA_MINUS = '<i class="fa-solid fa-minus-circle"></i>'

  const container = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const removeButton = document.createElement('button')
  const newProjectForm = document.createElement('form')
  const titleInput = document.createElement('input')
  const hiddenSubmitElement = document.createElement('input')

  function handleClickOnRemoveBtn (event) {
    event.stopPropagation()
    projectMenuController.toggleSettingsState()
    projectMenuController.removeMenuItem(container)
    _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(titleDisplay.textContent)
  }

  function initializeEditableMenuItem () {
    // hide title display and show the input field
    titleDisplay.classList.add('hidden')
    newProjectForm.classList.remove('hidden')
  }

  function handleClickOnForm (e) {
    e.stopPropagation()
  }

  function handleSubmitNewProjectForm (event) {
    event.preventDefault()
    titleDisplay.classList.remove('hidden')
    newProjectForm.classList.add('hidden')
    if (titleInput.value) {
      titleDisplay.textContent = titleInput.value
      _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject(titleInput.value)
    } else {
      projectMenuController.undoAddedMenuItem()
    }
    projectMenuController.toggleAddBtnState()
  }

  container.className = 'menu-item-container'
  newProjectForm.className = 'menu-item-new-proj-form hidden'
  titleInput.className = 'menu-item-title-input'
  hiddenSubmitElement.className = 'menu-item-submit-element hidden'
  removeButton.className = 'menu-item-btn'

  removeButton.innerHTML = FA_MINUS
  titleInput.type = 'text'
  hiddenSubmitElement.type = 'submit'

  removeButton.addEventListener('click', handleClickOnRemoveBtn)
  // to prevent triggering action of selecting the menu item
  newProjectForm.addEventListener('click', handleClickOnForm)
  newProjectForm.addEventListener('submit', handleSubmitNewProjectForm)

  if (isEditable) {
    initializeEditableMenuItem()
  } else {
    titleDisplay.textContent = project.title
  }

  newProjectForm.append(titleInput, hiddenSubmitElement)
  container.append(titleDisplay, newProjectForm, removeButton)

  return {
    get title () {
      return titleDisplay.textContent
    },
    getMenuItem () {
      return container
    },
    attachClickHandler (handler) {
      container.addEventListener('click', handler)
    },
    toggleButtonVisibility () {
      if (titleDisplay.textContent.length === 0) {
        return
      }
      removeButton.classList.toggle('shown')
    },
    toggleSelectedState () {
      container.classList.toggle('selected')
    }
  }
}

const projectMenuController = (() => {
  const FA_PLUS = '<i class="fa-solid fa-plus"></i>'
  const FA_COG = '<i class="fa-solid fa-cog"></i>'

  const icon = document.createElement('div')
  const sidebar = document.createElement('div')
  const defaultGroup = document.createElement('div')
  const defaultGroupTitle = document.createElement('div')
  const customGroup = document.createElement('div')
  const customGroupHeader = document.createElement('div')
  const addProjectButton = document.createElement('button')
  const settingsButton = document.createElement('button')

  let menuItems = []
  let selectedItem = ''
  let newMenuItem = ''

  icon.className = 'site-icon'
  sidebar.className = 'menu-container'
  defaultGroup.className = 'menu-default-group'
  defaultGroupTitle.className = 'menu-default-group-title'
  customGroup.className = 'menu-custom-group'
  customGroupHeader.className = 'menu-custom-group-header'
  settingsButton.className = 'menu-custom-group-btn'
  addProjectButton.className = 'menu-custom-group-btn'

  icon.textContent = 'Tada!'
  defaultGroupTitle.textContent = 'Default'
  customGroupHeader.textContent = 'Your projects'
  settingsButton.innerHTML = FA_COG
  settingsButton.title = 'Manage your projects'
  addProjectButton.innerHTML = FA_PLUS
  addProjectButton.title = 'Add a new project'

  function toggleSettingsState () {
    settingsButton.classList.toggle('active')
    for (let menuItem of menuItems) {
      menuItem.toggleButtonVisibility()
    }
  }

  function toggleAddBtnState () {
    addProjectButton.classList.toggle('active')
  }

  function handleClickOnSettings (e) {
    e.stopPropagation()
    toggleSettingsState()
  }

  function handleClickOnAddProject (e) {
    const isBtnActive = addProjectButton.classList.contains('active')
    if (isBtnActive && !newMenuItem.title) {
      undoAddedMenuItem()
    } else if (!isBtnActive) {
      e.stopPropagation()
      newMenuItem = menuItemFactory(null, true)
      newMenuItem.attachClickHandler(event =>
        handleClickOnContainer(event, newMenuItem)
      )
      menuItems.push(newMenuItem)
      customGroup.append(newMenuItem.getMenuItem())
    }
    toggleAddBtnState()
  }

  function undoAddedMenuItem () {
    customGroup.removeChild(newMenuItem.getMenuItem())
    menuItems.pop()
  }

  function handleClickOnContainer (event, menuItem) {
    if (
      addProjectButton.classList.contains('active') &&
      event.target === newMenuItem.getMenuItem()
    ) {
      return
    }
    selectMenuItem(menuItem)
  }

  function selectMenuItem (menuItem) {
    if (selectedItem) {
      selectedItem.toggleSelectedState()
    }
    selectedItem = menuItem
    menuItem.toggleSelectedState()

    const selectedProject = _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(menuItem.title)
    _projectView__WEBPACK_IMPORTED_MODULE_1__["default"].displayProject(selectedProject)
  }

  settingsButton.addEventListener('click', handleClickOnSettings)
  addProjectButton.addEventListener('click', handleClickOnAddProject)

  customGroupHeader.append(settingsButton, addProjectButton)
  sidebar.append(
    icon,
    defaultGroupTitle,
    defaultGroup,
    customGroupHeader,
    customGroup
  )
  return {
    getProjectMenu () {
      return sidebar
    },
    loadMenuItems (projects) {
      menuItems = []
      for (let p of projects) {
        const menuItem = menuItemFactory(p, false)
        menuItem.attachClickHandler(event =>
          handleClickOnContainer(event, menuItem)
        )
        menuItems.push(menuItem)
        if (p.isDefaultProject) {
          defaultGroup.append(menuItem.getMenuItem())
        } else {
          customGroup.append(menuItem.getMenuItem())
        }
      }
    },
    toggleSettingsState,
    toggleAddBtnState,
    undoAddedMenuItem,
    removeMenuItem(menuItem) {
      customGroup.removeChild(menuItem)
    }
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectMenuController);


/***/ }),

/***/ "./src/projectView.js":
/*!****************************!*\
  !*** ./src/projectView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newTodoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodoModal */ "./src/newTodoModal.js");
/* harmony import */ var _todoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCard */ "./src/todoCard.js");



const projectViewController = (() => {
  const PLACEHOLDER_MESSAGE_EMPTY = 'No todos to see here'
  const PLACEHOLDER_MESSAGE_PROMPT_ACTION =
    'Click on a project to view its todos!'
  const FA_PLUS_CIRCLE = '<i class="fa-solid fa-plus-circle"></i>'

  const placeholder = document.createElement('div')
  const container = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const todoCardContainer = document.createElement('div')
  const addTodoButton = document.createElement('button')

  let todoCards = []
  let projTitle = ''

  container.className = 'proj-view-container'
  placeholder.className = 'proj-view-placeholder visible'
  titleDisplay.className = 'proj-view-title'
  todoCardContainer.className = 'proj-view-card-container'
  addTodoButton.className = 'proj-view-add-todo-btn'

  placeholder.textContent = PLACEHOLDER_MESSAGE_PROMPT_ACTION
  addTodoButton.innerHTML = FA_PLUS_CIRCLE

  function displayPlaceholder (isVisible) {
    todoCards = []
    todoCardContainer.innerHTML = ''
    placeholder.classList.toggle('hidden', !isVisible)
    titleDisplay.classList.toggle('hidden', isVisible)
    todoCardContainer.classList.toggle('hidden', isVisible)
  }

  function handleClickOnNewTodo () {
    _newTodoModal__WEBPACK_IMPORTED_MODULE_0__["default"].classList.toggle('hidden')
  }

  addTodoButton.addEventListener('click', handleClickOnNewTodo)
  container.append(placeholder, titleDisplay, todoCardContainer, addTodoButton)

  return {
    getProjectView () {
      return container
    },
    displayProject (project) {
      projTitle = project.title

      // cannot use !project.todos as a check because an empty array in javascript is truthy!
      if (project.todos.length === 0) {
        displayPlaceholder(true)

        placeholder.textContent = PLACEHOLDER_MESSAGE_EMPTY
        return
      }

      displayPlaceholder(false)
      titleDisplay.textContent = project.title
      for (let todo of project.todos) {
        const todoCard = (0,_todoCard__WEBPACK_IMPORTED_MODULE_1__["default"])(todo, project.title)
        todoCards.push(todoCard)
        todoCardContainer.append(todoCard)
      }
    },
    removeChildFromTodoCardContainer (childNode) {
      todoCardContainer.removeChild(childNode)
    },
    getDisplayedProjTitle () {
      return projTitle
    }
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectViewController);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = (() => {
  let storage
  // taken from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  function storageAvailable (type) {
    try {
      storage = window[type]
      const x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      )
    }
  }

  function saveData (object) {
    if (storageAvailable('localStorage')) {
      storage.setItem('data', JSON.stringify(object))
      markPageAsVisited()
    } else {
      console.log('Local storage not available for data saving.')
    }
  }

  function getData () {
    if (storageAvailable('localStorage')) {
        return JSON.parse(storage.getItem('data'))
    } else {
        console.log('Local storage not available for data loading.')
    }
  }

  function isPageVisited () {
    if (storageAvailable('localStorage')) {
        return Boolean(Number(storage.getItem('isPageVisited')))
    } else {
        console.log('Local storage not available for data loading.')
    }
  }

  function markPageAsVisited() {
    if (storageAvailable('localStorage')) {
        storage.setItem('isPageVisited', '1')
    } else {
        console.log('Local storage not available for data saving.')
    }
  }
  return {
    saveData,
    getData,
    isPageVisited
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ "./src/todoCard.js":
/*!*************************!*\
  !*** ./src/todoCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainController */ "./src/mainController.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");



const todoCardFactory = (todo, projTitle) => {
  const FA_TRASH = '<i class="fa-solid fa-trash"> </i>'

  const container = document.createElement('div')
  const header = document.createElement('div')
  const footer = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const statusDisplay = document.createElement('input')
  const descDisplay = document.createElement('div')
  const dueDateDisplay = document.createElement('div')
  const priorityDisplay = document.createElement('div')
  const removeButton = document.createElement('button')

  container.className = 'todo-card-container'
  header.className = 'todo-card-header'
  footer.className = 'todo-card-footer'
  titleDisplay.className = 'todo-card-title'
  statusDisplay.className = 'todo-card-status'
  descDisplay.className = 'todo-card-desc'
  dueDateDisplay.className = 'todo-card-due-date'
  priorityDisplay.className = 'todo-card-priority'
  removeButton.className = 'todo-card-remove-btn'

  titleDisplay.textContent = todo.title
  statusDisplay.setAttribute('type', 'checkbox')
  statusDisplay.checked = todo.isDone
  descDisplay.textContent = todo.desc
  dueDateDisplay.textContent = `Due date: ${todo.dueDate}`
  priorityDisplay.textContent = todo.priority
  removeButton.innerHTML = FA_TRASH

  function handleClickOnContainer () {
    descDisplay.classList.toggle('shown')
  }

  function handleClickOnRemove (event) {
    event.stopPropagation()
    _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodoFromProject(todo.title, projTitle)
    _projectView__WEBPACK_IMPORTED_MODULE_1__["default"].removeChildFromTodoCardContainer(container)
  }

  function handleClickOnCheckbox (event) {
    event.stopPropagation()
    _mainController__WEBPACK_IMPORTED_MODULE_0__["default"].setTodoAsDone(!todo.isDone, todo.title, projTitle)
  }

  switch (todo.priority) {
    case 'HIGH':
      priorityDisplay.classList.add('high')
      break
    case 'MED':
      priorityDisplay.classList.add('med')
      break
    case 'LOW':
      priorityDisplay.classList.add('low')
  }

  statusDisplay.addEventListener('click', handleClickOnCheckbox)

  container.addEventListener('click', handleClickOnContainer)

  removeButton.addEventListener('click', handleClickOnRemove)

  header.append(titleDisplay, priorityDisplay)
  footer.append(statusDisplay, dueDateDisplay, removeButton)
  container.append(header, descDisplay, footer)

  return container
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoCardFactory);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mainController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainController */ "./src/mainController.js");



_mainController__WEBPACK_IMPORTED_MODULE_1__["default"].run()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyxnQ0FBZ0Msd0NBQXdDLDhDQUE4QyxHQUFHLE9BQU8sZUFBZSxjQUFjLDZKQUE2SixHQUFHLFVBQVUsa0JBQWtCLG9DQUFvQyxrQkFBa0IsR0FBRywwQkFBMEIsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsb0JBQW9CLDJCQUEyQixHQUFHLCtFQUErRSx5Q0FBeUMsdUJBQXVCLEdBQUcsdUZBQXVGLHlDQUF5QyxzQkFBc0IsZ0JBQWdCLHVCQUF1QixlQUFlLHNCQUFzQixHQUFHLGdGQUFnRiw0QkFBNEIsR0FBRyx1QkFBdUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsZ0JBQWdCLEdBQUcsc0JBQXNCLHNCQUFzQixzQkFBc0Isd0JBQXdCLHFCQUFxQiw0QkFBNEIsR0FBRyx5QkFBeUIsc0JBQXNCLHNCQUFzQixpQkFBaUIsdUJBQXVCLG9CQUFvQiwwQkFBMEIsR0FBRyx1QkFBdUIsa0JBQWtCLGtCQUFrQixvQ0FBb0Msc0NBQXNDLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHdCQUF3QixHQUFHLHlCQUF5QixtQkFBbUIsc0JBQXNCLDBCQUEwQixHQUFHLHVCQUF1QixtQkFBbUIsZ0JBQWdCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLG1CQUFtQixnQkFBZ0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsMEJBQTBCLGlCQUFpQixzQkFBc0IsdUJBQXVCLGlCQUFpQix3QkFBd0IsR0FBRyxpQ0FBaUMsNEJBQTRCLEdBQUcscUJBQXFCLG9CQUFvQixvQ0FBb0Msa0JBQWtCLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLGVBQWUscUJBQXFCLEdBQUcsc0JBQXNCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLG9CQUFvQix1QkFBdUIsc0JBQXNCLHVCQUF1QixnQ0FBZ0Msb0JBQW9CLHdCQUF3QixHQUFHLHNCQUFzQixtQ0FBbUMsd0NBQXdDLEdBQUcsd0JBQXdCLGlCQUFpQiw0QkFBNEIsbUNBQW1DLEtBQUssUUFBUSw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw0QkFBNEIsbUNBQW1DLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw0QkFBNEIsa0NBQWtDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssU0FBUyw4QkFBOEIscUNBQXFDLEtBQUssR0FBRyxxQkFBcUIsbUJBQW1CLDJDQUEyQyxrQkFBa0IsMkJBQTJCLEdBQUcsMkRBQTJELDhCQUE4QixxQkFBcUIsc0JBQXNCLDJCQUEyQixHQUFHLCtCQUErQixxQkFBcUIsa0JBQWtCLGNBQWMsd0JBQXdCLEdBQUcsNEJBQTRCLGlCQUFpQixrQ0FBa0Msc0JBQXNCLEdBQUcsa0VBQWtFLHlCQUF5QixHQUFHLDhDQUE4QywyQkFBMkIsa0JBQWtCLG9CQUFvQixHQUFHLHlCQUF5QixxQ0FBcUMsR0FBRywwQkFBMEIsMkJBQTJCLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMEhBQTBILDZDQUE2QyxHQUFHLG9CQUFvQixpQkFBaUIsa0NBQWtDLDRCQUE0QixzQkFBc0Isa0JBQWtCLEdBQUcsMEJBQTBCLHlCQUF5QixHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyw0QkFBNEIsb0JBQW9CLGVBQWUsR0FBRywwQkFBMEIsaUJBQWlCLGlCQUFpQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLDRCQUE0QixpQkFBaUIsaUJBQWlCLGtCQUFrQixvQ0FBb0MsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGdCQUFnQixvQkFBb0Isa0NBQWtDLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDZCQUE2QiwrQ0FBK0Msb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLFdBQVcsWUFBWSxpQkFBaUIsa0JBQWtCLGdCQUFnQixHQUFHLG9CQUFvQixnQkFBZ0Isa0NBQWtDLDBCQUEwQiwyQ0FBMkMsR0FBRywwQkFBMEIsK0JBQStCLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsMkJBQTJCLHFDQUFxQyxrQkFBa0IsNENBQTRDLGNBQWMsR0FBRywwQkFBMEIscUJBQXFCLGlCQUFpQixvQkFBb0IsR0FBRywyREFBMkQsZUFBZSwyQkFBMkIsaUJBQWlCLHdCQUF3QixvQkFBb0Isc0JBQXNCLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLCtCQUErQixvQkFBb0IsR0FBRywrQkFBK0IsK0JBQStCLGlCQUFpQixHQUFHLGtDQUFrQyxrQkFBa0IsNEJBQTRCLGNBQWMsMEJBQTBCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxXQUFXLHVDQUF1QyxHQUFHLFVBQVUsNkJBQTZCLEdBQUcsVUFBVSw0QkFBNEIsR0FBRyxxQkFBcUI7QUFDdDhVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQztBQUNHO0FBQ1E7QUFDQTtBQUNsQjs7QUFFL0I7QUFDQTtBQUNBLElBQUksOENBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDhDQUFnQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxvREFBcUI7QUFDM0IsTUFBTSxvREFBcUI7QUFDM0IsTUFBTSxxREFBWTtBQUNsQjtBQUNBO0FBQ0EscUJBQXFCLDhDQUFnQjtBQUNyQyxJQUFJLG9EQUFxQjtBQUN6Qjs7QUFFQTtBQUNBLElBQUksOENBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhDQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4Q0FBZ0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLElBQUksOENBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsOENBQWdCO0FBQy9DLElBQUksZ0RBQU8sVUFBVSw4Q0FBZ0I7QUFDckM7O0FBRUE7QUFDQSxTQUFTLGdEQUFPO0FBQ2hCLE1BQU0sOENBQWdCO0FBQ3RCLE1BQU07QUFDTixNQUFNLDhDQUFnQixNQUFNLGdEQUFPO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUN6RTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBdUQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlDQUF5QztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxjO0FBQ0k7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBcUI7QUFDL0MsSUFBSSx1REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQix1REFBYztBQUN6QyxJQUFJLG9EQUFxQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhrQjtBQUNJOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix1REFBYztBQUMxQyxJQUFJLG9EQUFxQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU5LO0FBQ0Q7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxREFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUMxRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXVCO0FBQ0k7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCLElBQUksb0RBQXFCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7VUN6RTlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ3lCOztBQUU3Qyx1REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL25ld1RvZG9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9DYXJkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29sb3ItcmVkOiByZ2IoMjE0LCA1LCA1KTtcbiAgLS1jb2xvci1za3libHVlOiByZ2IoMjA2LCAyMzAsIDIzOCk7XG4gIC0tY29sb3ItZ3JlZW5ibHVlOiByZ2JhKDAsIDI1NSwgMTQ5LCAwLjMpO1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjV2dyAxZnI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi50b2RvLWNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuLnRvZG8tY2FyZC1jb250YWluZXI6aG92ZXI6bm90KDpoYXMoYnV0dG9uOmhvdmVyKSk6bm90KDpoYXMoaW5wdXQ6aG92ZXIpKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIzNCwgMjQ3KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kby1jYXJkLWNvbnRhaW5lcjpob3Zlcjpub3QoOmhhcyhidXR0b246aG92ZXIpKTpub3QoOmhhcyhpbnB1dDpob3ZlcikpOjpiZWZvcmUge1xuICBjb250ZW50OiAnQ2xpY2sgdG8gZXhwYW5kIG9yIGNsb3NlISc7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogZ3JleTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLnRvZG8tY2FyZC1jb250YWluZXI6YWN0aXZlOm5vdCg6aGFzKGJ1dHRvbjpob3ZlcikpOm5vdCg6aGFzKGlucHV0OmhvdmVyKSkge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbn1cblxuLnRvZG8tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHBhZGRpbmctdG9wOiAwO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4ycmVtO1xufVxuXG4udG9kby1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRvZG8tY2FyZC1wcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4udG9kby1jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMCAwLjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSAxZnI7XG4gIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCBkYXJrZ3JheTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8tY2FyZC1kdWUtZGF0ZSB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9kby1jYXJkLXN0YXR1cyB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG4udG9kby1jYXJkLXJlbW92ZS1idG4ge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDI7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwLjVyZW07XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi50b2RvLWNhcmQtcmVtb3ZlLWJ0bjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuXG4udG9kby1jYXJkLWRlc2Mge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWNhcmQtZGVzYy5zaG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmEtY2xvY2sge1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4uZmEtY2lyY2xlLWNoZWNrIHtcbiAgY29sb3I6IHJnYigxMywgMjI4LCAxMyk7XG59XG5cbi5zaXRlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJvcmRlcjogMC4ycmVtIGRvdWJsZSBibGFjaztcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc2l0ZS1pY29uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiByYWluYm93IDAuNXMgbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByYWluYm93IHtcbiAgMTAwJSxcbiAgMCUge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICB9XG4gIDglIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMTI3LCAwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDEyNywgMCk7XG4gIH1cbiAgMTYlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XG4gIH1cbiAgMjUlIHtcbiAgICBjb2xvcjogcmdiKDEyNywgMjU1LCAwKTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMjcsIDI1NSwgMCk7XG4gIH1cbiAgMzMlIHtcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcbiAgfVxuICA0MSUge1xuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAxMjcpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDI1NSwgMTI3KTtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDI1NSwgMjU1KTtcbiAgfVxuICA1OCUge1xuICAgIGNvbG9yOiByZ2IoMCwgMTI3LCAyNTUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDEyNywgMjU1KTtcbiAgfVxuICA2NiUge1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAyNSk7XG4gIH1cbiAgNzUlIHtcbiAgICBjb2xvcjogcmdiKDEyNywgMCwgMjU1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMjcsIDAsIDI1NSk7XG4gIH1cbiAgODMlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMjU1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDAsIDI1NSk7XG4gIH1cbiAgOTElIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMTI3KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDAsIDEyNyk7XG4gIH1cbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNreWJsdWUpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWVudS1kZWZhdWx0LWdyb3VwLXRpdGxlLFxuLm1lbnUtY3VzdG9tLWdyb3VwLWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ubWVudS1jdXN0b20tZ3JvdXAtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1jdXN0b20tZ3JvdXAtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5tZW51LWN1c3RvbS1ncm91cC1idG46aG92ZXIsXG4ubWVudS1jdXN0b20tZ3JvdXAtYnRuLmFjdGl2ZSB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjMpO1xufVxuXG4ubWVudS1kZWZhdWx0LWdyb3VwLFxuLm1lbnUtY3VzdG9tLWdyb3VwIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubWVudS1kZWZhdWx0LWdyb3VwIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIGdyZXk7XG59XG5cbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWVudS1pdGVtLWNvbnRhaW5lcjpub3QoOmhhcyhidXR0b246aG92ZXIpKTpoYXMoZm9ybS5oaWRkZW4pOmhvdmVyLFxuLm1lbnUtaXRlbS1jb250YWluZXIuc2VsZWN0ZWQ6aGFzKGZvcm0uaGlkZGVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuYmx1ZSk7XG59XG5cbi5tZW51LWl0ZW0tYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1pdGVtLWJ0bjpob3ZlciB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xufVxuXG4ubWVudS1pdGVtLWJ0bi5zaG93biB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUtaW5wdXQge1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5wcm9qLXZpZXctY29udGFpbmVyIHtcbiAgbWFyZ2luOiAycmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4ucHJvai12aWV3LXBsYWNlaG9sZGVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDhyZW07XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJvcmRlcjogMC41cmVtIGRhc2hlZCBsaWdodGdyZXk7XG4gIGNvbG9yOiBncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2otdmlldy1hZGQtdG9kby1idG4ge1xuICB6LWluZGV4OiAyNTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTB2aDtcbiAgYm90dG9tOiA1dmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICB3aWR0aDogM3JlbTtcbiAgY29sb3I6IGRhcmtibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnByb2otdmlldy1hZGQtdG9kby1idG46aG92ZXIge1xuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbn1cblxuLnByb2otdmlldy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9qLXZpZXctY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG59XG5cbi5uZXctdG9kby1mb3JtLWJhY2tkcm9wIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCkgYnJpZ2h0bmVzcygwLjgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogNTA7XG59XG5cbiNuZXctdG9kby1mb3JtIHtcbiAgd2lkdGg6IDcwdnc7XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGRhcmtibHVlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNreWJsdWUpO1xufVxuXG4ubmV3LXRvZG8tZm9ybS10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5uZXctdG9kby1mb3JtLWZpZWxkcyB7XG4gIHBhZGRpbmc6IDJyZW0gMC41cmVtIDFyZW0gMC41cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIDIwJSAxZnI7XG4gIGdhcDogMXJlbTtcbn1cblxuLm5ldy10b2RvLWRlc2MtaW5wdXQge1xuICBncmlkLXJvdzogc3BhbiA0O1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLm5ldy10b2RvLWZvcm0tY2FuY2VsLWJ0bixcbi5uZXctdG9kby1mb3JtLXN1Ym1pdC1idG4ge1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNuZXctdG9kby1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xufVxuXG4ubmV3LXRvZG8tZm9ybS1jYW5jZWwtYnRuIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuXG4ubmV3LXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ldy10b2RvLWZvcm0tYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cblxuLm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFt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YUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbG9yLXJlZDogcmdiKDIxNCwgNSwgNSk7XFxuICAtLWNvbG9yLXNreWJsdWU6IHJnYigyMDYsIDIzMCwgMjM4KTtcXG4gIC0tY29sb3ItZ3JlZW5ibHVlOiByZ2JhKDAsIDI1NSwgMTQ5LCAwLjMpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjV2dyAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udG9kby1jYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTB2dztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gbGlnaHRncmV5O1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY2FyZC1jb250YWluZXI6aG92ZXI6bm90KDpoYXMoYnV0dG9uOmhvdmVyKSk6bm90KDpoYXMoaW5wdXQ6aG92ZXIpKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMzQsIDI0Nyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWNhcmQtY29udGFpbmVyOmhvdmVyOm5vdCg6aGFzKGJ1dHRvbjpob3ZlcikpOm5vdCg6aGFzKGlucHV0OmhvdmVyKSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnQ2xpY2sgdG8gZXhwYW5kIG9yIGNsb3NlISc7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbn1cXG5cXG4udG9kby1jYXJkLWNvbnRhaW5lcjphY3RpdmU6bm90KDpoYXMoYnV0dG9uOmhvdmVyKSk6bm90KDpoYXMoaW5wdXQ6aG92ZXIpKSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuLnRvZG8tY2FyZC1oZWFkZXIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi50b2RvLWNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50b2RvLWNhcmQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuLnRvZG8tY2FyZC1mb290ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMCAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFyZW0gMWZyO1xcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIGRhcmtncmF5O1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY2FyZC1kdWUtZGF0ZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9kby1jYXJkLXN0YXR1cyB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvLWNhcmQtcmVtb3ZlLWJ0biB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAwLjVyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4udG9kby1jYXJkLXJlbW92ZS1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcblxcbi50b2RvLWNhcmQtZGVzYyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZC1kZXNjLnNob3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZmEtY2xvY2sge1xcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmZhLWNpcmNsZS1jaGVjayB7XFxuICBjb2xvcjogcmdiKDEzLCAyMjgsIDEzKTtcXG59XFxuXFxuLnNpdGUtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJvcmRlcjogMC4ycmVtIGRvdWJsZSBibGFjaztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zaXRlLWljb246aG92ZXIge1xcbiAgYW5pbWF0aW9uOiByYWluYm93IDAuNXMgbGluZWFyO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XFxuICAxMDAlLFxcbiAgMCUge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICB9XFxuICA4JSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxMjcsIDApO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDEyNywgMCk7XFxuICB9XFxuICAxNiUge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgY29sb3I6IHJnYigxMjcsIDI1NSwgMCk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEyNywgMjU1LCAwKTtcXG4gIH1cXG4gIDMzJSB7XFxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcXG4gIH1cXG4gIDQxJSB7XFxuICAgIGNvbG9yOiByZ2IoMCwgMjU1LCAxMjcpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAyNTUsIDEyNyk7XFxuICB9XFxuICA1MCUge1xcbiAgICBjb2xvcjogcmdiKDAsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMjU1LCAyNTUpO1xcbiAgfVxcbiAgNTglIHtcXG4gICAgY29sb3I6IHJnYigwLCAxMjcsIDI1NSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDEyNywgMjU1KTtcXG4gIH1cXG4gIDY2JSB7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMjUpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgY29sb3I6IHJnYigxMjcsIDAsIDI1NSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEyNywgMCwgMjU1KTtcXG4gIH1cXG4gIDgzJSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAyNTUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDAsIDI1NSk7XFxuICB9XFxuICA5MSUge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMTI3KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAwLCAxMjcpO1xcbiAgfVxcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1za3libHVlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWVudS1kZWZhdWx0LWdyb3VwLXRpdGxlLFxcbi5tZW51LWN1c3RvbS1ncm91cC1oZWFkZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5tZW51LWN1c3RvbS1ncm91cC1oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1jdXN0b20tZ3JvdXAtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5tZW51LWN1c3RvbS1ncm91cC1idG46aG92ZXIsXFxuLm1lbnUtY3VzdG9tLWdyb3VwLWJ0bi5hY3RpdmUge1xcbiAgZmlsdGVyOiBvcGFjaXR5KDAuMyk7XFxufVxcblxcbi5tZW51LWRlZmF1bHQtZ3JvdXAsXFxuLm1lbnUtY3VzdG9tLWdyb3VwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1kZWZhdWx0LWdyb3VwIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCBncmV5O1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOm5vdCg6aGFzKGJ1dHRvbjpob3ZlcikpOmhhcyhmb3JtLmhpZGRlbik6aG92ZXIsXFxuLm1lbnUtaXRlbS1jb250YWluZXIuc2VsZWN0ZWQ6aGFzKGZvcm0uaGlkZGVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbmJsdWUpO1xcbn1cXG5cXG4ubWVudS1pdGVtLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuLm1lbnUtaXRlbS1idG4uc2hvd24ge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ucHJvai12aWV3LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDJyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4ucHJvai12aWV3LXBsYWNlaG9sZGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1hcmdpbjogOHJlbTtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBib3JkZXI6IDAuNXJlbSBkYXNoZWQgbGlnaHRncmV5O1xcbiAgY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvai12aWV3LWFkZC10b2RvLWJ0biB7XFxuICB6LWluZGV4OiAyNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxMHZoO1xcbiAgYm90dG9tOiA1dmg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJvai12aWV3LWFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuLnByb2otdmlldy10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2otdmlldy1jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0tYmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCkgYnJpZ2h0bmVzcygwLjgpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogNTA7XFxufVxcblxcbiNuZXctdG9kby1mb3JtIHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgZGFya2JsdWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1za3libHVlKTtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0tdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0tZmllbGRzIHtcXG4gIHBhZGRpbmc6IDJyZW0gMC41cmVtIDFyZW0gMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg3LCAxZnIpIC8gMjAlIDFmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5ldy10b2RvLWRlc2MtaW5wdXQge1xcbiAgZ3JpZC1yb3c6IHNwYW4gNDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0tY2FuY2VsLWJ0bixcXG4ubmV3LXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbmV3LXRvZG8tZm9ybSBidXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBvcGFjaXR5KDAuNSk7XFxufVxcblxcbi5uZXctdG9kby1mb3JtLWNhbmNlbC1idG4ge1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybS1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbn1cXG5cXG4ubWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0Q2F0YWxvZ3VlIGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgbmV3VG9kb01vZGFsIGZyb20gJy4vbmV3VG9kb01vZGFsJ1xuaW1wb3J0IHByb2plY3RNZW51Q29udHJvbGxlciBmcm9tICcuL3Byb2plY3RNZW51J1xuaW1wb3J0IHByb2plY3RWaWV3Q29udHJvbGxlciBmcm9tICcuL3Byb2plY3RWaWV3J1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJ1xuXG5jb25zdCBtYWluQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QgKHByb2pUaXRsZSkge1xuICAgIHByb2plY3RDYXRhbG9ndWUuYWRkUHJvamVjdChwcm9qVGl0bGUsIGZhbHNlKVxuICAgIHNhdmVTdGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0IChwcm9qVGl0bGUpIHtcbiAgICByZXR1cm4gcHJvamVjdENhdGFsb2d1ZS5nZXRSZWFkT25seVByb2plY3QocHJvalRpdGxlKVxuICB9XG5cbiAgZnVuY3Rpb24gcnVuICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICBib2R5LmFwcGVuZChcbiAgICAgIHByb2plY3RNZW51Q29udHJvbGxlci5nZXRQcm9qZWN0TWVudSgpLFxuICAgICAgcHJvamVjdFZpZXdDb250cm9sbGVyLmdldFByb2plY3RWaWV3KCksXG4gICAgICBuZXdUb2RvTW9kYWxcbiAgICApXG4gICAgbG9hZFN0YXRlKClcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDYXRhbG9ndWUuZ2V0QWxsUmVhZE9ubHlQcm9qZWN0KClcbiAgICBwcm9qZWN0TWVudUNvbnRyb2xsZXIubG9hZE1lbnVJdGVtcyhwcm9qZWN0cylcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKHByb2pUaXRsZSkge1xuICAgIHByb2plY3RDYXRhbG9ndWUuZGVsZXRlUHJvamVjdChwcm9qVGl0bGUpXG4gICAgc2F2ZVN0YXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG9Gcm9tUHJvamVjdCAodG9kb1RpdGxlLCBwcm9qVGl0bGUpIHtcbiAgICBwcm9qZWN0Q2F0YWxvZ3VlLmRlbGV0ZVRvZG9Gcm9tUHJvamVjdCh0b2RvVGl0bGUsIHByb2pUaXRsZSlcbiAgICBzYXZlU3RhdGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VG9kb0FzRG9uZSAoYm9vbGVhbiwgdG9kb1RpdGxlLCBwcm9qVGl0bGUpIHtcbiAgICBwcm9qZWN0Q2F0YWxvZ3VlLnNldFRvZG9Bc0RvbmUoYm9vbGVhbiwgdG9kb1RpdGxlLCBwcm9qVGl0bGUpXG4gICAgc2F2ZVN0YXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5ld1RvZG9Ub1Byb2plY3QgKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvalRpdGxlKSB7XG4gICAgcHJvamVjdENhdGFsb2d1ZS5hZGRUb2RvVG9Qcm9qZWN0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvalRpdGxlKVxuICAgIHNhdmVTdGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb2plY3RDYXRhbG9ndWUpKVxuICAgIHN0b3JhZ2Uuc2F2ZURhdGEocHJvamVjdENhdGFsb2d1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRTdGF0ZSAoKSB7XG4gICAgaWYgKCFzdG9yYWdlLmlzUGFnZVZpc2l0ZWQoKSkge1xuICAgICAgcHJvamVjdENhdGFsb2d1ZS5zZXRVcERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0Q2F0YWxvZ3VlLmxvYWQoc3RvcmFnZS5nZXREYXRhKCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBydW4sXG4gICAgY3JlYXRlTmV3UHJvamVjdCxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0LFxuICAgIHNldFRvZG9Bc0RvbmUsXG4gICAgYWRkTmV3VG9kb1RvUHJvamVjdFxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Db250cm9sbGVyXG4iLCJjb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgbGV0IGlzRG9uZSA9IGZhbHNlXG4gIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IERhdGUubm93KClcblxuICByZXR1cm4ge1xuICAgIGdldCB0aXRsZSAoKSB7XG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9LFxuICAgIGdldCBkZXNjICgpIHtcbiAgICAgIHJldHVybiBkZXNjXG4gICAgfSxcbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICByZXR1cm4gZHVlRGF0ZVxuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5ICgpIHtcbiAgICAgIHJldHVybiBwcmlvcml0eVxuICAgIH0sXG4gICAgZ2V0IGlzRG9uZSAoKSB7XG4gICAgICByZXR1cm4gaXNEb25lXG4gICAgfSxcbiAgICBzZXRJc0RvbmU6IGZ1bmN0aW9uIChib29sZWFuKSB7XG4gICAgICBpc0RvbmUgPSBib29sZWFuXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBpc0RlZmF1bHQpID0+IHtcbiAgbGV0IHRvZG9zID0gW11cblxuICByZXR1cm4ge1xuICAgIGdldCB0aXRsZSAoKSB7XG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9LFxuICAgIGFkZFRvZG8gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgdG9kb3MucHVzaCh0b2RvRmFjdG9yeSh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpKVxuICAgIH0sXG4gICAgZGVsZXRlVG9kbyAodGl0bGUpIHtcbiAgICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby50aXRsZSAhPT0gdGl0bGUpXG4gICAgfSxcbiAgICBnZXROb09mUHJvamVjdHMgKCkge1xuICAgICAgcmV0dXJuIHRvZG9zLmxlbmd0aCgpXG4gICAgfSxcbiAgICBnZXRBbGxSZWFkT25seVRvZG9zICgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUsIGNyZWF0aW9uRGF0ZSB9ID0gdG9kb1xuICAgICAgICBjb25zdCByZWFkT25seVRvZG8gPSB7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzYyxcbiAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgIGlzRG9uZSxcbiAgICAgICAgICBjcmVhdGlvbkRhdGVcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChyZWFkT25seVRvZG8pXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSxcbiAgICBpc0RlZmF1bHRQcm9qZWN0ICgpIHtcbiAgICAgIHJldHVybiBpc0RlZmF1bHRcbiAgICB9LFxuICAgIHNldFRvZG9Bc0RvbmUgKGJvb2xlYW4sIHRpdGxlKSB7XG4gICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBpZiAodG9kby50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICB0b2RvLnNldElzRG9uZShib29sZWFuKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBwcm9qZWN0Q2F0YWxvZ3VlID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW11cblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QgKHRpdGxlLCBpc0RlZmF1bHQpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSwgaXNEZWZhdWx0KVxuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgIH0sXG4gICAgYWRkVG9kb1RvUHJvamVjdCAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qVGl0bGUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIocHJvaiA9PiBwcm9qLnRpdGxlID09PSBwcm9qVGl0bGUpWzBdXG4gICAgICBwcm9qZWN0LmFkZFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgIH0sXG4gICAgZGVsZXRlUHJvamVjdCAodGl0bGUpIHtcbiAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSAhPT0gdGl0bGUpXG4gICAgfSxcbiAgICBkZWxldGVUb2RvRnJvbVByb2plY3QgKHRpdGxlLCBwcm9qVGl0bGUpIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgIGlmIChwcm9qLnRpdGxlID09PSBwcm9qVGl0bGUpIHByb2ouZGVsZXRlVG9kbyh0aXRsZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZXRBbGxSZWFkT25seVByb2plY3QgKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICAgIGZvciAobGV0IHAgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgcmVhZE9ubHlQcm9qZWN0ID0ge1xuICAgICAgICAgIGdldCB0aXRsZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcC50aXRsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0IHRvZG9zICgpIHtcbiAgICAgICAgICAgIHJldHVybiBwLmdldEFsbFJlYWRPbmx5VG9kb3MoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0IGlzRGVmYXVsdFByb2plY3QgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHAuaXNEZWZhdWx0UHJvamVjdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHJlYWRPbmx5UHJvamVjdClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIHNldFRvZG9Bc0RvbmUgKGJvb2xlYW4sIHRpdGxlLCBwcm9qVGl0bGUpIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgIGlmIChwcm9qLnRpdGxlID09PSBwcm9qVGl0bGUpIHtcbiAgICAgICAgICBwcm9qLnNldFRvZG9Bc0RvbmUoYm9vbGVhbiwgdGl0bGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZXRVcERlZmF1bHQgKCkge1xuICAgICAgcHJvamVjdENhdGFsb2d1ZS5hZGRQcm9qZWN0KCdUYXNrcycsIHRydWUpXG4gICAgICBwcm9qZWN0Q2F0YWxvZ3VlLmFkZFByb2plY3QoJ0R1ZSB0aGlzIHdlZWsnLCB0cnVlKVxuICAgICAgcHJvamVjdENhdGFsb2d1ZS5hZGRQcm9qZWN0KCdFeGFtcGxlIFByb2plY3QnLCBmYWxzZSlcblxuICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q2F0YWxvZ3VlLmdldEFsbFJlYWRPbmx5UHJvamVjdCgpXG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbMF1cblxuICAgICAgcHJvamVjdENhdGFsb2d1ZS5hZGRUb2RvVG9Qcm9qZWN0KFxuICAgICAgICAnRXhhbXBsZSAxJyxcbiAgICAgICAgJ0JsYSBibGEgYmxhJyxcbiAgICAgICAgJzIwMjMvMDkvMTMnLFxuICAgICAgICAnSElHSCcsXG4gICAgICAgIHByb2plY3QudGl0bGVcbiAgICAgIClcbiAgICAgIHByb2plY3RDYXRhbG9ndWUuYWRkVG9kb1RvUHJvamVjdChcbiAgICAgICAgJ0V4YW1wbGUgMicsXG4gICAgICAgICdCbGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYScsXG4gICAgICAgICcxNi8xMC8yMDIzJyxcbiAgICAgICAgJ01FRCcsXG4gICAgICAgIHByb2plY3QudGl0bGVcbiAgICAgICksXG4gICAgICAgIHByb2plY3RDYXRhbG9ndWUuYWRkVG9kb1RvUHJvamVjdChcbiAgICAgICAgICAnRXhhbXBsZSAzJyxcbiAgICAgICAgICAnQmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEgYmxhIGJsYSBibGEnLFxuICAgICAgICAgICcxNi8xMC8yMDI0JyxcbiAgICAgICAgICAnTE9XJyxcbiAgICAgICAgICBwcm9qZWN0LnRpdGxlXG4gICAgICAgIClcbiAgICB9LFxuICAgIGdldFJlYWRPbmx5UHJvamVjdCAocHJvalRpdGxlKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKHByb2ogPT4gcHJvai50aXRsZSA9PT0gcHJvalRpdGxlKVswXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHRpdGxlICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdC50aXRsZVxuICAgICAgICB9LFxuICAgICAgICBnZXQgdG9kb3MgKCkge1xuICAgICAgICAgIHJldHVybiBwcm9qZWN0LmdldEFsbFJlYWRPbmx5VG9kb3MoKVxuICAgICAgICB9LFxuICAgICAgICBpc0RlZmF1bHRQcm9qZWN0OiBwcm9qZWN0LmlzRGVmYXVsdFByb2plY3RcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEFsbFJlYWRPbmx5UHJvamVjdCgpXG4gICAgfSxcbiAgICBsb2FkIChhcnJheURhdGEpIHtcbiAgICAgIGZvciAobGV0IG9iaiBvZiBhcnJheURhdGEpIHtcbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gb2JqWyd0aXRsZSddXG4gICAgICAgIGNvbnN0IHByb2pJc0RlZmF1bHQgPSBvYmpbJ2lzRGVmYXVsdFByb2plY3QnXVxuICAgICAgICB0aGlzLmFkZFByb2plY3QocHJvalRpdGxlLCBwcm9qSXNEZWZhdWx0KVxuICAgICAgICBjb25zdCB0b2RvcyA9IG9ialsndG9kb3MnXVxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSB9ID0gdG9kb1xuICAgICAgICAgIHRoaXMuYWRkVG9kb1RvUHJvamVjdCh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2pUaXRsZSlcbiAgICAgICAgICBpZiAoaXNEb25lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvZG9Bc0RvbmUodHJ1ZSwgdGl0bGUsIHByb2pUaXRsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENhdGFsb2d1ZVxuIiwiaW1wb3J0IG1haW5Db250cm9sbGVyIGZyb20gJy4vbWFpbkNvbnRyb2xsZXInXG5pbXBvcnQgcHJvamVjdFZpZXdDb250cm9sbGVyIGZyb20gJy4vcHJvamVjdFZpZXcnXG5cbmNvbnN0IG5ld1RvZG9Nb2RhbCA9IChwcm9qVGl0bGUgPT4ge1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgZm9ybUZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICBjb25zdCBwcmlvcml0eVZhbHVlTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgY29uc3QgcHJpb3JpdHlWYWx1ZU1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIGNvbnN0IHByaW9yaXR5VmFsdWVIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgYmFja2Ryb3AuY2xhc3NOYW1lID0gJ25ldy10b2RvLWZvcm0tYmFja2Ryb3AgaGlkZGVuJ1xuICBmb3JtLmlkID0gJ25ldy10b2RvLWZvcm0nXG4gIGZvcm1UaXRsZS5jbGFzc05hbWUgPSAnbmV3LXRvZG8tZm9ybS10aXRsZSdcbiAgZm9ybUZpZWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9ICduZXctdG9kby1mb3JtLWZpZWxkcydcbiAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAnbmV3LXRvZG8tdGl0bGUtbGFiZWwnXG4gIHRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ25ldy10b2RvLXRpdGxlLWlucHV0J1xuICBkZXNjTGFiZWwuY2xhc3NOYW1lID0gJ25ldy10b2RvLWRlc2MtbGFiZWwnXG4gIGRlc2NJbnB1dC5jbGFzc05hbWUgPSAnbmV3LXRvZG8tZGVzYy1pbnB1dCdcbiAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSAnbmV3LXRvZG8tcHJpb3JpdHktbGFiZWwnXG4gIHByaW9yaXR5SW5wdXQuY2xhc3NOYW1lID0gJ25ldy10b2RvLXByaW9yaXR5LWlucHV0J1xuICBkdWVEYXRlTGFiZWwuY2xhc3NOYW1lID0gJ25ldy10b2RvLWR1ZS1kYXRlLWxhYmVsJ1xuICBkdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ25ldy10b2RvLWR1ZS1kYXRlLWlucHV0J1xuICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ25ldy10b2RvLWZvcm0tc3VibWl0LWJ0bidcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9ICduZXctdG9kby1mb3JtLWNhbmNlbC1idG4nXG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbmV3LXRvZG8tZm9ybS1idG4tY29udGFpbmVyJ1xuXG4gIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgYSBuZXcgdG9kbydcbiAgdGl0bGVMYWJlbC5mb3IgPSB0aXRsZUlucHV0XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnXG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICBkZXNjTGFiZWwuZm9yID0gZGVzY0lucHV0XG4gIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbidcbiAgZGVzY0lucHV0LmRlZmF1bHRWYWx1ZSA9ICcoTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlKSdcbiAgZGVzY0lucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICBwcmlvcml0eUxhYmVsLmZvciA9IHByaW9yaXR5SW5wdXRcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcbiAgcHJpb3JpdHlJbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgcHJpb3JpdHlWYWx1ZUhpZ2gudmFsdWUgPSAnSElHSCdcbiAgcHJpb3JpdHlWYWx1ZUhpZ2gubGFiZWwgPSAnSElHSCdcbiAgcHJpb3JpdHlWYWx1ZU1lZC52YWx1ZSA9ICdNRUQnXG4gIHByaW9yaXR5VmFsdWVNZWQubGFiZWwgPSAnTUVEJ1xuICBwcmlvcml0eVZhbHVlTG93LnZhbHVlID0gJ0xPVydcbiAgcHJpb3JpdHlWYWx1ZUxvdy5sYWJlbCA9ICdMT1cnXG4gIGR1ZURhdGVMYWJlbC5mb3IgPSBkZXNjSW5wdXRcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlJ1xuICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xuICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbiAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIGNvbnN0IGN1cnJQcm9qVGl0bGUgPSBwcm9qZWN0Vmlld0NvbnRyb2xsZXIuZ2V0RGlzcGxheWVkUHJvalRpdGxlKClcbiAgICBtYWluQ29udHJvbGxlci5hZGROZXdUb2RvVG9Qcm9qZWN0KFxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NJbnB1dC52YWx1ZSxcbiAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICBjdXJyUHJvalRpdGxlXG4gICAgKVxuICAgIHJlc2V0RmllbGRzKClcblxuICAgIC8vIHJlZHJhdyBwcm9qZWN0IHZpZXdcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdCA9IG1haW5Db250cm9sbGVyLmdldFByb2plY3QoY3VyclByb2pUaXRsZSlcbiAgICBwcm9qZWN0Vmlld0NvbnRyb2xsZXIuZGlzcGxheVByb2plY3QodXBkYXRlZFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja09uQ2FuY2VsICgpIHtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIHJlc2V0RmllbGRzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0RmllbGRzICgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gJydcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJ1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSAnTE9XJ1xuICAgIGRlc2NJbnB1dC52YWx1ZSA9IGRlc2NJbnB1dC5kZWZhdWx0VmFsdWVcbiAgfVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0Rm9ybSlcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPbkNhbmNlbClcblxuICBwcmlvcml0eUlucHV0LmFwcGVuZChwcmlvcml0eVZhbHVlTG93LCBwcmlvcml0eVZhbHVlTWVkLCBwcmlvcml0eVZhbHVlSGlnaClcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdG4sIHN1Ym1pdEJ0bilcbiAgZm9ybUZpZWxkQ29udGFpbmVyLmFwcGVuZChcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZHVlRGF0ZUxhYmVsLFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eUxhYmVsLFxuICAgIHByaW9yaXR5SW5wdXQsXG4gICAgZGVzY0xhYmVsLFxuICAgIGRlc2NJbnB1dFxuICApXG5cbiAgZm9ybS5hcHBlbmQoZm9ybVRpdGxlLCBmb3JtRmllbGRDb250YWluZXIsIGJ1dHRvbkNvbnRhaW5lcilcblxuICBiYWNrZHJvcC5hcHBlbmQoZm9ybSlcblxuICByZXR1cm4gYmFja2Ryb3Bcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgbmV3VG9kb01vZGFsXG4iLCJpbXBvcnQgbWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9tYWluQ29udHJvbGxlcidcbmltcG9ydCBwcm9qZWN0Vmlld0NvbnRyb2xsZXIgZnJvbSAnLi9wcm9qZWN0VmlldydcblxuY29uc3QgbWVudUl0ZW1GYWN0b3J5ID0gKHByb2plY3QsIGlzRWRpdGFibGUpID0+IHtcbiAgY29uc3QgRkFfTUlOVVMgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taW51cy1jaXJjbGVcIj48L2k+J1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IGhpZGRlblN1Ym1pdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPblJlbW92ZUJ0biAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHByb2plY3RNZW51Q29udHJvbGxlci50b2dnbGVTZXR0aW5nc1N0YXRlKClcbiAgICBwcm9qZWN0TWVudUNvbnRyb2xsZXIucmVtb3ZlTWVudUl0ZW0oY29udGFpbmVyKVxuICAgIG1haW5Db250cm9sbGVyLmRlbGV0ZVByb2plY3QodGl0bGVEaXNwbGF5LnRleHRDb250ZW50KVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUVkaXRhYmxlTWVudUl0ZW0gKCkge1xuICAgIC8vIGhpZGUgdGl0bGUgZGlzcGxheSBhbmQgc2hvdyB0aGUgaW5wdXQgZmllbGRcbiAgICB0aXRsZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPbkZvcm0gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXROZXdQcm9qZWN0Rm9ybSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGl0bGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSkge1xuICAgICAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgICAgbWFpbkNvbnRyb2xsZXIuY3JlYXRlTmV3UHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0TWVudUNvbnRyb2xsZXIudW5kb0FkZGVkTWVudUl0ZW0oKVxuICAgIH1cbiAgICBwcm9qZWN0TWVudUNvbnRyb2xsZXIudG9nZ2xlQWRkQnRuU3RhdGUoKVxuICB9XG5cbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0tY29udGFpbmVyJ1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSAnbWVudS1pdGVtLW5ldy1wcm9qLWZvcm0gaGlkZGVuJ1xuICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0tdGl0bGUtaW5wdXQnXG4gIGhpZGRlblN1Ym1pdEVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUtaXRlbS1zdWJtaXQtZWxlbWVudCBoaWRkZW4nXG4gIHJlbW92ZUJ1dHRvbi5jbGFzc05hbWUgPSAnbWVudS1pdGVtLWJ0bidcblxuICByZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gRkFfTUlOVVNcbiAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXG4gIGhpZGRlblN1Ym1pdEVsZW1lbnQudHlwZSA9ICdzdWJtaXQnXG5cbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPblJlbW92ZUJ0bilcbiAgLy8gdG8gcHJldmVudCB0cmlnZ2VyaW5nIGFjdGlvbiBvZiBzZWxlY3RpbmcgdGhlIG1lbnUgaXRlbVxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT25Gb3JtKVxuICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXROZXdQcm9qZWN0Rm9ybSlcblxuICBpZiAoaXNFZGl0YWJsZSkge1xuICAgIGluaXRpYWxpemVFZGl0YWJsZU1lbnVJdGVtKClcbiAgfSBlbHNlIHtcbiAgICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXG4gIH1cblxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgaGlkZGVuU3VibWl0RWxlbWVudClcbiAgY29udGFpbmVyLmFwcGVuZCh0aXRsZURpc3BsYXksIG5ld1Byb2plY3RGb3JtLCByZW1vdmVCdXR0b24pXG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgdGl0bGUgKCkge1xuICAgICAgcmV0dXJuIHRpdGxlRGlzcGxheS50ZXh0Q29udGVudFxuICAgIH0sXG4gICAgZ2V0TWVudUl0ZW0gKCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH0sXG4gICAgYXR0YWNoQ2xpY2tIYW5kbGVyIChoYW5kbGVyKSB7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICAgIH0sXG4gICAgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSAoKSB7XG4gICAgICBpZiAodGl0bGVEaXNwbGF5LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpXG4gICAgfSxcbiAgICB0b2dnbGVTZWxlY3RlZFN0YXRlICgpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHByb2plY3RNZW51Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IEZBX1BMVVMgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPidcbiAgY29uc3QgRkFfQ09HID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29nXCI+PC9pPidcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGRlZmF1bHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGRlZmF1bHRHcm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgY3VzdG9tR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBjdXN0b21Hcm91cEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgbGV0IG1lbnVJdGVtcyA9IFtdXG4gIGxldCBzZWxlY3RlZEl0ZW0gPSAnJ1xuICBsZXQgbmV3TWVudUl0ZW0gPSAnJ1xuXG4gIGljb24uY2xhc3NOYW1lID0gJ3NpdGUtaWNvbidcbiAgc2lkZWJhci5jbGFzc05hbWUgPSAnbWVudS1jb250YWluZXInXG4gIGRlZmF1bHRHcm91cC5jbGFzc05hbWUgPSAnbWVudS1kZWZhdWx0LWdyb3VwJ1xuICBkZWZhdWx0R3JvdXBUaXRsZS5jbGFzc05hbWUgPSAnbWVudS1kZWZhdWx0LWdyb3VwLXRpdGxlJ1xuICBjdXN0b21Hcm91cC5jbGFzc05hbWUgPSAnbWVudS1jdXN0b20tZ3JvdXAnXG4gIGN1c3RvbUdyb3VwSGVhZGVyLmNsYXNzTmFtZSA9ICdtZW51LWN1c3RvbS1ncm91cC1oZWFkZXInXG4gIHNldHRpbmdzQnV0dG9uLmNsYXNzTmFtZSA9ICdtZW51LWN1c3RvbS1ncm91cC1idG4nXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ21lbnUtY3VzdG9tLWdyb3VwLWJ0bidcblxuICBpY29uLnRleHRDb250ZW50ID0gJ1RhZGEhJ1xuICBkZWZhdWx0R3JvdXBUaXRsZS50ZXh0Q29udGVudCA9ICdEZWZhdWx0J1xuICBjdXN0b21Hcm91cEhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIHByb2plY3RzJ1xuICBzZXR0aW5nc0J1dHRvbi5pbm5lckhUTUwgPSBGQV9DT0dcbiAgc2V0dGluZ3NCdXR0b24udGl0bGUgPSAnTWFuYWdlIHlvdXIgcHJvamVjdHMnXG4gIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gRkFfUExVU1xuICBhZGRQcm9qZWN0QnV0dG9uLnRpdGxlID0gJ0FkZCBhIG5ldyBwcm9qZWN0J1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNldHRpbmdzU3RhdGUgKCkge1xuICAgIHNldHRpbmdzQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgZm9yIChsZXQgbWVudUl0ZW0gb2YgbWVudUl0ZW1zKSB7XG4gICAgICBtZW51SXRlbS50b2dnbGVCdXR0b25WaXNpYmlsaXR5KClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBZGRCdG5TdGF0ZSAoKSB7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPblNldHRpbmdzIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHRvZ2dsZVNldHRpbmdzU3RhdGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPbkFkZFByb2plY3QgKGUpIHtcbiAgICBjb25zdCBpc0J0bkFjdGl2ZSA9IGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxuICAgIGlmIChpc0J0bkFjdGl2ZSAmJiAhbmV3TWVudUl0ZW0udGl0bGUpIHtcbiAgICAgIHVuZG9BZGRlZE1lbnVJdGVtKClcbiAgICB9IGVsc2UgaWYgKCFpc0J0bkFjdGl2ZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgbmV3TWVudUl0ZW0gPSBtZW51SXRlbUZhY3RvcnkobnVsbCwgdHJ1ZSlcbiAgICAgIG5ld01lbnVJdGVtLmF0dGFjaENsaWNrSGFuZGxlcihldmVudCA9PlxuICAgICAgICBoYW5kbGVDbGlja09uQ29udGFpbmVyKGV2ZW50LCBuZXdNZW51SXRlbSlcbiAgICAgIClcbiAgICAgIG1lbnVJdGVtcy5wdXNoKG5ld01lbnVJdGVtKVxuICAgICAgY3VzdG9tR3JvdXAuYXBwZW5kKG5ld01lbnVJdGVtLmdldE1lbnVJdGVtKCkpXG4gICAgfVxuICAgIHRvZ2dsZUFkZEJ0blN0YXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZG9BZGRlZE1lbnVJdGVtICgpIHtcbiAgICBjdXN0b21Hcm91cC5yZW1vdmVDaGlsZChuZXdNZW51SXRlbS5nZXRNZW51SXRlbSgpKVxuICAgIG1lbnVJdGVtcy5wb3AoKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPbkNvbnRhaW5lciAoZXZlbnQsIG1lbnVJdGVtKSB7XG4gICAgaWYgKFxuICAgICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmXG4gICAgICBldmVudC50YXJnZXQgPT09IG5ld01lbnVJdGVtLmdldE1lbnVJdGVtKClcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWxlY3RNZW51SXRlbShtZW51SXRlbSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdE1lbnVJdGVtIChtZW51SXRlbSkge1xuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHNlbGVjdGVkSXRlbS50b2dnbGVTZWxlY3RlZFN0YXRlKClcbiAgICB9XG4gICAgc2VsZWN0ZWRJdGVtID0gbWVudUl0ZW1cbiAgICBtZW51SXRlbS50b2dnbGVTZWxlY3RlZFN0YXRlKClcblxuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IG1haW5Db250cm9sbGVyLmdldFByb2plY3QobWVudUl0ZW0udGl0bGUpXG4gICAgcHJvamVjdFZpZXdDb250cm9sbGVyLmRpc3BsYXlQcm9qZWN0KHNlbGVjdGVkUHJvamVjdClcbiAgfVxuXG4gIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPblNldHRpbmdzKVxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPbkFkZFByb2plY3QpXG5cbiAgY3VzdG9tR3JvdXBIZWFkZXIuYXBwZW5kKHNldHRpbmdzQnV0dG9uLCBhZGRQcm9qZWN0QnV0dG9uKVxuICBzaWRlYmFyLmFwcGVuZChcbiAgICBpY29uLFxuICAgIGRlZmF1bHRHcm91cFRpdGxlLFxuICAgIGRlZmF1bHRHcm91cCxcbiAgICBjdXN0b21Hcm91cEhlYWRlcixcbiAgICBjdXN0b21Hcm91cFxuICApXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdE1lbnUgKCkge1xuICAgICAgcmV0dXJuIHNpZGViYXJcbiAgICB9LFxuICAgIGxvYWRNZW51SXRlbXMgKHByb2plY3RzKSB7XG4gICAgICBtZW51SXRlbXMgPSBbXVxuICAgICAgZm9yIChsZXQgcCBvZiBwcm9qZWN0cykge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtRmFjdG9yeShwLCBmYWxzZSlcbiAgICAgICAgbWVudUl0ZW0uYXR0YWNoQ2xpY2tIYW5kbGVyKGV2ZW50ID0+XG4gICAgICAgICAgaGFuZGxlQ2xpY2tPbkNvbnRhaW5lcihldmVudCwgbWVudUl0ZW0pXG4gICAgICAgIClcbiAgICAgICAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0pXG4gICAgICAgIGlmIChwLmlzRGVmYXVsdFByb2plY3QpIHtcbiAgICAgICAgICBkZWZhdWx0R3JvdXAuYXBwZW5kKG1lbnVJdGVtLmdldE1lbnVJdGVtKCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VzdG9tR3JvdXAuYXBwZW5kKG1lbnVJdGVtLmdldE1lbnVJdGVtKCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZVNldHRpbmdzU3RhdGUsXG4gICAgdG9nZ2xlQWRkQnRuU3RhdGUsXG4gICAgdW5kb0FkZGVkTWVudUl0ZW0sXG4gICAgcmVtb3ZlTWVudUl0ZW0obWVudUl0ZW0pIHtcbiAgICAgIGN1c3RvbUdyb3VwLnJlbW92ZUNoaWxkKG1lbnVJdGVtKVxuICAgIH1cbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWVudUNvbnRyb2xsZXJcbiIsImltcG9ydCBuZXdUb2RvTW9kYWwgZnJvbSAnLi9uZXdUb2RvTW9kYWwnXG5pbXBvcnQgdG9kb0NhcmRGYWN0b3J5IGZyb20gJy4vdG9kb0NhcmQnXG5cbmNvbnN0IHByb2plY3RWaWV3Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IFBMQUNFSE9MREVSX01FU1NBR0VfRU1QVFkgPSAnTm8gdG9kb3MgdG8gc2VlIGhlcmUnXG4gIGNvbnN0IFBMQUNFSE9MREVSX01FU1NBR0VfUFJPTVBUX0FDVElPTiA9XG4gICAgJ0NsaWNrIG9uIGEgcHJvamVjdCB0byB2aWV3IGl0cyB0b2RvcyEnXG4gIGNvbnN0IEZBX1BMVVNfQ0lSQ0xFID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1cy1jaXJjbGVcIj48L2k+J1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdG9kb0NhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICBsZXQgdG9kb0NhcmRzID0gW11cbiAgbGV0IHByb2pUaXRsZSA9ICcnXG5cbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qLXZpZXctY29udGFpbmVyJ1xuICBwbGFjZWhvbGRlci5jbGFzc05hbWUgPSAncHJvai12aWV3LXBsYWNlaG9sZGVyIHZpc2libGUnXG4gIHRpdGxlRGlzcGxheS5jbGFzc05hbWUgPSAncHJvai12aWV3LXRpdGxlJ1xuICB0b2RvQ2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvai12aWV3LWNhcmQtY29udGFpbmVyJ1xuICBhZGRUb2RvQnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9qLXZpZXctYWRkLXRvZG8tYnRuJ1xuXG4gIHBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gUExBQ0VIT0xERVJfTUVTU0FHRV9QUk9NUFRfQUNUSU9OXG4gIGFkZFRvZG9CdXR0b24uaW5uZXJIVE1MID0gRkFfUExVU19DSVJDTEVcblxuICBmdW5jdGlvbiBkaXNwbGF5UGxhY2Vob2xkZXIgKGlzVmlzaWJsZSkge1xuICAgIHRvZG9DYXJkcyA9IFtdXG4gICAgdG9kb0NhcmRDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhaXNWaXNpYmxlKVxuICAgIHRpdGxlRGlzcGxheS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBpc1Zpc2libGUpXG4gICAgdG9kb0NhcmRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgaXNWaXNpYmxlKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPbk5ld1RvZG8gKCkge1xuICAgIG5ld1RvZG9Nb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT25OZXdUb2RvKVxuICBjb250YWluZXIuYXBwZW5kKHBsYWNlaG9sZGVyLCB0aXRsZURpc3BsYXksIHRvZG9DYXJkQ29udGFpbmVyLCBhZGRUb2RvQnV0dG9uKVxuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdFZpZXcgKCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgIH0sXG4gICAgZGlzcGxheVByb2plY3QgKHByb2plY3QpIHtcbiAgICAgIHByb2pUaXRsZSA9IHByb2plY3QudGl0bGVcblxuICAgICAgLy8gY2Fubm90IHVzZSAhcHJvamVjdC50b2RvcyBhcyBhIGNoZWNrIGJlY2F1c2UgYW4gZW1wdHkgYXJyYXkgaW4gamF2YXNjcmlwdCBpcyB0cnV0aHkhXG4gICAgICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGlzcGxheVBsYWNlaG9sZGVyKHRydWUpXG5cbiAgICAgICAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBQTEFDRUhPTERFUl9NRVNTQUdFX0VNUFRZXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBkaXNwbGF5UGxhY2Vob2xkZXIoZmFsc2UpXG4gICAgICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlXG4gICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb3MpIHtcbiAgICAgICAgY29uc3QgdG9kb0NhcmQgPSB0b2RvQ2FyZEZhY3RvcnkodG9kbywgcHJvamVjdC50aXRsZSlcbiAgICAgICAgdG9kb0NhcmRzLnB1c2godG9kb0NhcmQpXG4gICAgICAgIHRvZG9DYXJkQ29udGFpbmVyLmFwcGVuZCh0b2RvQ2FyZClcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZUNoaWxkRnJvbVRvZG9DYXJkQ29udGFpbmVyIChjaGlsZE5vZGUpIHtcbiAgICAgIHRvZG9DYXJkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkTm9kZSlcbiAgICB9LFxuICAgIGdldERpc3BsYXllZFByb2pUaXRsZSAoKSB7XG4gICAgICByZXR1cm4gcHJvalRpdGxlXG4gICAgfVxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RWaWV3Q29udHJvbGxlclxuIiwiY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gIGxldCBzdG9yYWdlXG4gIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYl9TdG9yYWdlX0FQSS9Vc2luZ190aGVfV2ViX1N0b3JhZ2VfQVBJXG4gIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUgKHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXVxuICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJ1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpXG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVEYXRhIChvYmplY3QpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpXG4gICAgICBtYXJrUGFnZUFzVmlzaXRlZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGUgZm9yIGRhdGEgc2F2aW5nLicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSAoKSB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGUgZm9yIGRhdGEgbG9hZGluZy4nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGFnZVZpc2l0ZWQgKCkge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihOdW1iZXIoc3RvcmFnZS5nZXRJdGVtKCdpc1BhZ2VWaXNpdGVkJykpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGUgZm9yIGRhdGEgbG9hZGluZy4nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtQYWdlQXNWaXNpdGVkKCkge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oJ2lzUGFnZVZpc2l0ZWQnLCAnMScpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZSBmb3IgZGF0YSBzYXZpbmcuJylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzYXZlRGF0YSxcbiAgICBnZXREYXRhLFxuICAgIGlzUGFnZVZpc2l0ZWRcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlXG4iLCJpbXBvcnQgbWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9tYWluQ29udHJvbGxlcidcbmltcG9ydCBwcm9qZWN0Vmlld0NvbnRyb2xsZXIgZnJvbSAnLi9wcm9qZWN0VmlldydcblxuY29uc3QgdG9kb0NhcmRGYWN0b3J5ID0gKHRvZG8sIHByb2pUaXRsZSkgPT4ge1xuICBjb25zdCBGQV9UUkFTSCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+IDwvaT4nXG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3Qgc3RhdHVzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29uc3QgZGVzY0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b2RvLWNhcmQtY29udGFpbmVyJ1xuICBoZWFkZXIuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZC1oZWFkZXInXG4gIGZvb3Rlci5jbGFzc05hbWUgPSAndG9kby1jYXJkLWZvb3RlcidcbiAgdGl0bGVEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvLWNhcmQtdGl0bGUnXG4gIHN0YXR1c0Rpc3BsYXkuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZC1zdGF0dXMnXG4gIGRlc2NEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvLWNhcmQtZGVzYydcbiAgZHVlRGF0ZURpc3BsYXkuY2xhc3NOYW1lID0gJ3RvZG8tY2FyZC1kdWUtZGF0ZSdcbiAgcHJpb3JpdHlEaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvLWNhcmQtcHJpb3JpdHknXG4gIHJlbW92ZUJ1dHRvbi5jbGFzc05hbWUgPSAndG9kby1jYXJkLXJlbW92ZS1idG4nXG5cbiAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICBzdGF0dXNEaXNwbGF5LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gIHN0YXR1c0Rpc3BsYXkuY2hlY2tlZCA9IHRvZG8uaXNEb25lXG4gIGRlc2NEaXNwbGF5LnRleHRDb250ZW50ID0gdG9kby5kZXNjXG4gIGR1ZURhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3RvZG8uZHVlRGF0ZX1gXG4gIHByaW9yaXR5RGlzcGxheS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHlcbiAgcmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9IEZBX1RSQVNIXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPbkNvbnRhaW5lciAoKSB7XG4gICAgZGVzY0Rpc3BsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPblJlbW92ZSAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG1haW5Db250cm9sbGVyLmRlbGV0ZVRvZG9Gcm9tUHJvamVjdCh0b2RvLnRpdGxlLCBwcm9qVGl0bGUpXG4gICAgcHJvamVjdFZpZXdDb250cm9sbGVyLnJlbW92ZUNoaWxkRnJvbVRvZG9DYXJkQ29udGFpbmVyKGNvbnRhaW5lcilcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT25DaGVja2JveCAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG1haW5Db250cm9sbGVyLnNldFRvZG9Bc0RvbmUoIXRvZG8uaXNEb25lLCB0b2RvLnRpdGxlLCBwcm9qVGl0bGUpXG4gIH1cblxuICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcbiAgICBjYXNlICdISUdIJzpcbiAgICAgIHByaW9yaXR5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWdoJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnTUVEJzpcbiAgICAgIHByaW9yaXR5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtZWQnKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdMT1cnOlxuICAgICAgcHJpb3JpdHlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2xvdycpXG4gIH1cblxuICBzdGF0dXNEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPbkNoZWNrYm94KVxuXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT25Db250YWluZXIpXG5cbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPblJlbW92ZSlcblxuICBoZWFkZXIuYXBwZW5kKHRpdGxlRGlzcGxheSwgcHJpb3JpdHlEaXNwbGF5KVxuICBmb290ZXIuYXBwZW5kKHN0YXR1c0Rpc3BsYXksIGR1ZURhdGVEaXNwbGF5LCByZW1vdmVCdXR0b24pXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBkZXNjRGlzcGxheSwgZm9vdGVyKVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb0NhcmRGYWN0b3J5XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG1haW5Db250cm9sbGVyIGZyb20gJy4vbWFpbkNvbnRyb2xsZXInXG5cbm1haW5Db250cm9sbGVyLnJ1bigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=