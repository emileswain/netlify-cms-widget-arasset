/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatenetlify_cms_widget_arasset"]("main",{

/***/ "./dev/bootstrap.js":
/*!**************************!*\
  !*** ./dev/bootstrap.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

"use strict";
eval("\n\nwindow.CMS_MANUAL_INIT = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRsaWZ5LWNtcy13aWRnZXQtYXJhc3NldC8uL2Rldi9ib290c3RyYXAuanM/MjRmZSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJDTVNfTUFOVUFMX0lOSVQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLGVBQVAsR0FBeUIsSUFBekIiLCJmaWxlIjoiLi9kZXYvYm9vdHN0cmFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkNNU19NQU5VQUxfSU5JVCA9IHRydWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/bootstrap.js\n");

/***/ }),

/***/ "./dev/index.js":
/*!**********************!*\
  !*** ./dev/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./bootstrap.js */ \"./dev/bootstrap.js\");\n\nvar _netlifyCms = __webpack_require__(/*! netlify-cms */ \"./node_modules/netlify-cms/dist/netlify-cms.js\");\n\nvar _netlifyCms2 = _interopRequireDefault(_netlifyCms);\n\n__webpack_require__(/*! netlify-cms/dist/cms.css */ \"./node_modules/netlify-cms/dist/cms.css\");\n\nvar _src = __webpack_require__(/*! ../src */ \"./src/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar config = {\n    backend: {\n        name: 'test-repo',\n        login: false\n    },\n    media_folder: 'assets',\n    collections: [{\n        name: 'test',\n        label: 'Test',\n        files: [{\n            file: 'test.yml',\n            name: 'test',\n            label: 'Test',\n            fields: [{ name: 'test_widget', label: 'Test Widget', widget: 'test' }]\n        }]\n    }]\n};\n\n_netlifyCms2.default.registerWidget('test', _src.ARAssetControl, _src.ARAssetPreview);\n\n(0, _netlifyCms.init)({ config: config });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRsaWZ5LWNtcy13aWRnZXQtYXJhc3NldC8uL2Rldi9pbmRleC5qcz8yMDBlIl0sIm5hbWVzIjpbImNvbmZpZyIsImJhY2tlbmQiLCJuYW1lIiwibG9naW4iLCJtZWRpYV9mb2xkZXIiLCJjb2xsZWN0aW9ucyIsImxhYmVsIiwiZmlsZXMiLCJmaWxlIiwiZmllbGRzIiwid2lkZ2V0IiwiQ01TIiwicmVnaXN0ZXJXaWRnZXQiLCJBUkFzc2V0Q29udHJvbCIsIkFSQXNzZXRQcmV2aWV3Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ1hDLGFBQVM7QUFDTEMsY0FBTSxXQUREO0FBRUxDLGVBQU87QUFGRixLQURFO0FBS1hDLGtCQUFjLFFBTEg7QUFNWEMsaUJBQWEsQ0FBQztBQUNWSCxjQUFNLE1BREk7QUFFVkksZUFBTyxNQUZHO0FBR1ZDLGVBQU8sQ0FBQztBQUNKQyxrQkFBTSxVQURGO0FBRUpOLGtCQUFNLE1BRkY7QUFHSkksbUJBQU8sTUFISDtBQUlKRyxvQkFBUSxDQUNKLEVBQUVQLE1BQU0sYUFBUixFQUF1QkksT0FBTyxhQUE5QixFQUE2Q0ksUUFBUSxNQUFyRCxFQURJO0FBSkosU0FBRDtBQUhHLEtBQUQ7QUFORixDQUFmOztBQW9CQUMscUJBQUlDLGNBQUosQ0FBbUIsTUFBbkIsRUFBMkJDLG1CQUEzQixFQUEyQ0MsbUJBQTNDOztBQUVBLHNCQUFLLEVBQUVkLGNBQUYsRUFBTCIsImZpbGUiOiIuL2Rldi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ib290c3RyYXAuanMnXHJcbmltcG9ydCBDTVMsIHsgaW5pdCB9IGZyb20gJ25ldGxpZnktY21zJ1xyXG5pbXBvcnQgJ25ldGxpZnktY21zL2Rpc3QvY21zLmNzcydcclxuaW1wb3J0IHsgQVJBc3NldENvbnRyb2wsIEFSQXNzZXRQcmV2aWV3IH0gZnJvbSAnLi4vc3JjJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgYmFja2VuZDoge1xyXG4gICAgICAgIG5hbWU6ICd0ZXN0LXJlcG8nLFxyXG4gICAgICAgIGxvZ2luOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBtZWRpYV9mb2xkZXI6ICdhc3NldHMnLFxyXG4gICAgY29sbGVjdGlvbnM6IFt7XHJcbiAgICAgICAgbmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgIGxhYmVsOiAnVGVzdCcsXHJcbiAgICAgICAgZmlsZXM6IFt7XHJcbiAgICAgICAgICAgIGZpbGU6ICd0ZXN0LnltbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdUZXN0JyxcclxuICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICd0ZXN0X3dpZGdldCcsIGxhYmVsOiAnVGVzdCBXaWRnZXQnLCB3aWRnZXQ6ICd0ZXN0J30sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XSxcclxufVxyXG5cclxuQ01TLnJlZ2lzdGVyV2lkZ2V0KCd0ZXN0JywgQVJBc3NldENvbnRyb2wsIEFSQXNzZXRQcmV2aWV3KVxyXG5cclxuaW5pdCh7IGNvbmZpZyB9KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "67a27d569b8e5d75a8cd"
/******/ 	})();
/******/ 	
/******/ }
);