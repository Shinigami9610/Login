"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/tablas.js":
/*!**********************************!*\
  !*** ./src/components/tablas.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MostarElementos: function() { return /* binding */ MostarElementos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default,MostarElementos auto */ \n\nconst TablaUsuarios = (param)=>{\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    name: \"\",\n                    id: \"\",\n                    class: \"btn btn-primary\",\n                    href: \"#\",\n                    role: \"button\",\n                    children: \"Agregar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                    lineNumber: 14,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                lineNumber: 14,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"table-responsive\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        class: \"table table-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Nombre\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Correo\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Acciones\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        class: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                scope: \"row\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                                    href: \"/backend/app/Http/Controllers/Api/ContenidoController.php\" + contenidos.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"dfgghfdf\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        name: \"\",\n                                                        id: \"\",\n                                                        class: \"btn btn-info\",\n                                                        href: \"#\",\n                                                        role: \"button\",\n                                                        children: \"editar\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        name: \"\",\n                                                        id: \"\",\n                                                        class: \"btn btn-danger\",\n                                                        href: \"#\",\n                                                        role: \"button\",\n                                                        children: \"editar\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        class: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                scope: \"row\",\n                                                children: \"Item\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"Item\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"Item\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n                lineNumber: 22,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\proyectos orlando\\\\laravel-next\\\\login-breeze\\\\frontend\\\\src\\\\components\\\\tablas.js\",\n        lineNumber: 13,\n        columnNumber: 1\n    }, undefined);\n};\n_c = TablaUsuarios;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nasync function MostarElementos() {\n    const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/backend/app/Http/Controllers/Api/ContenidoController.php\");\n    return {\n        props: {\n            components: response.data.data\n        }\n    };\n}\n_c1 = MostarElementos;\nvar _c, _c1;\n$RefreshReg$(_c, \"TablaUsuarios\");\n$RefreshReg$(_c1, \"MostarElementos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RhYmxhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRStCO0FBSy9CLE1BQU1DLGdCQUFlO1FBQUMsRUFBQ0MsS0FBSyxFQUFDO0lBSTdCLHFCQUNBLDhEQUFDQzs7MEJBQ0QsOERBQUNBOzBCQUFJLDRFQUFDQztvQkFDRUMsTUFBSztvQkFDTEMsSUFBRztvQkFDSEMsT0FBTTtvQkFDTkMsTUFBSztvQkFDTEMsTUFBSzs4QkFDSjs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNOO2dCQUNHSSxPQUFNOztrQ0FHTiw4REFBQ0o7Ozs7O2tDQUNELDhEQUFDTzt3QkFDR0gsT0FBTTs7MENBRU4sOERBQUNJOzBDQUNHLDRFQUFDQzs7c0RBQ0csOERBQUNDOzRDQUFHQyxPQUFNO3NEQUFNOzs7Ozs7c0RBQ2hCLDhEQUFDRDs0Q0FBR0MsT0FBTTtzREFBTTs7Ozs7O3NEQUNoQiw4REFBQ0Q7NENBQUdDLE9BQU07c0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUd4Qiw4REFBQ0M7O2tEQUNHLDhEQUFDSDt3Q0FBR0wsT0FBTTs7MERBQ04sOERBQUNTO2dEQUFHRixPQUFNOzBEQUFNLDRFQUFDRztvREFBS1QsTUFBTSw4REFBNkRVLFdBQVdiLElBQUk7Ozs7Ozs7Ozs7OzBEQUN4Ryw4REFBQ1c7MERBQUc7Ozs7OzswREFDSiw4REFBQ0E7O2tFQUFHLDhEQUFDWjt3REFDREMsTUFBSzt3REFDTEMsSUFBRzt3REFDSEMsT0FBTTt3REFDTkMsTUFBSzt3REFDTEMsTUFBSztrRUFDSjs7Ozs7O2tFQUNELDhEQUFDTDt3REFDREMsTUFBSzt3REFDTEMsSUFBRzt3REFDSEMsT0FBTTt3REFDTkMsTUFBSzt3REFDTEMsTUFBSztrRUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUdULDhEQUFDRzt3Q0FBR0wsT0FBTTs7MERBQ04sOERBQUNTO2dEQUFHRixPQUFNOzBEQUFNOzs7Ozs7MERBQ2hCLDhEQUFDRTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXBCO0tBaEVNZjtBQWlFTiwrREFBZWtCLE1BQU1BLEVBQUE7QUFDZCxlQUFlQztJQUNsQixNQUFNQyxXQUFVLE1BQU1yQixrREFBS0EsQ0FBQ3NCLEdBQUcsQ0FBQztJQUNoQyxPQUFPO1FBQ0hDLE9BQU07WUFDRkMsWUFBV0gsU0FBU0ksSUFBSSxDQUFDQSxJQUFJO1FBQ2pDO0lBQ0o7QUFDSjtNQVBzQkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGFzLmpzP2VmODQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbid1c2UgY2xpZW50J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9saWIvYXhpb3MnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBUYWJsYVVzdWFyaW9zID0oe3RpdGxlfSk9PntcclxuXHJcbiAgIFxyXG4gIFxyXG5yZXR1cm4oXHJcbjxkaXY+XHJcbjxkaXY+PGFcclxuICAgICAgICBuYW1lPVwiXCJcclxuICAgICAgICBpZD1cIlwiXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICA+QWdyZWdhcjwvYT5cclxuICAgIDwvZGl2PlxyXG48ZGl2XHJcbiAgICBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIlxyXG4+XHJcbiAgICBcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgICA8dGFibGVcclxuICAgICAgICBjbGFzcz1cInRhYmxlIHRhYmxlLXByaW1hcnlcIlxyXG4gICAgPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Tm9tYnJlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvcnJlbzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY2Npb25lczwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCI+PExpbmsgaHJlZj17Jy9iYWNrZW5kL2FwcC9IdHRwL0NvbnRyb2xsZXJzL0FwaS9Db250ZW5pZG9Db250cm9sbGVyLnBocCcrIGNvbnRlbmlkb3MubmFtZX0+PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+ZGZnZ2hmZGY8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPmVkaXRhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPmVkaXRhcjwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCI+SXRlbTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+SXRlbTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+SXRlbTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuKVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBNb3N0YXJFbGVtZW50b3MoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9YXdhaXQgYXhpb3MuZ2V0KCcvYmFja2VuZC9hcHAvSHR0cC9Db250cm9sbGVycy9BcGkvQ29udGVuaWRvQ29udHJvbGxlci5waHAnKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6cmVzcG9uc2UuZGF0YS5kYXRhXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSAiXSwibmFtZXMiOlsiYXhpb3MiLCJUYWJsYVVzdWFyaW9zIiwidGl0bGUiLCJkaXYiLCJhIiwibmFtZSIsImlkIiwiY2xhc3MiLCJocmVmIiwicm9sZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsInRkIiwiTGluayIsImNvbnRlbmlkb3MiLCJIZWFkZXIiLCJNb3N0YXJFbGVtZW50b3MiLCJyZXNwb25zZSIsImdldCIsInByb3BzIiwiY29tcG9uZW50cyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/tablas.js\n"));

/***/ })

});