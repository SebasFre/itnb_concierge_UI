"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/chat/chat-interface.tsx":
/*!********************************************!*\
  !*** ./components/chat/chat-interface.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatInterface: function() { return /* binding */ ChatInterface; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Send_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ ChatInterface auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ChatInterface() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hello! I'm ITNB's AI assistant. How can I help you today?\",\n            timestamp: \"15:58:12\"\n        }\n    ]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSend = ()=>{\n        if (!input.trim()) return;\n        setMessages((prev)=>[\n                ...prev,\n                {\n                    role: \"user\",\n                    content: input.trim()\n                }\n            ]);\n        setInput(\"\");\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\" && !e.shiftKey) {\n            e.preventDefault();\n            handleSend();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#1a1a1a]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex-1 overflow-y-auto p-6 pb-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: messages.map((message, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex \".concat(message.role === \"user\" ? \"justify-end\" : \"justify-start\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-[80%] rounded-xl px-4 py-2 \".concat(message.role === \"user\" ? \"bg-[#1e3fec] text-white\" : \"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2\",\n                                        children: [\n                                            message.role === \"assistant\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex h-6 w-6 items-center justify-center rounded-lg bg-[#1e3fec]\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-xs font-medium text-white\",\n                                                    children: \"AI\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 21\n                                            }, this),\n                                            message.timestamp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs text-gray-500 dark:text-gray-400\",\n                                                children: message.timestamp\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1\",\n                                        children: message.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    message.role === \"assistant\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 flex gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200\",\n                                                children: \"Helpful\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200\",\n                                                children: \"Not helpful\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, i, false, {\n                            fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                className: \"absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#1a1a1a]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: input,\n                            onChange: (e)=>setInput(e.target.value),\n                            onKeyDown: handleKeyDown,\n                            placeholder: \"Ask anything about ITNB AG...\",\n                            className: \"flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-900 transition-colors focus:border-[#1e3fec] focus:outline-none focus:ring-1 focus:ring-[#1e3fec] dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSend,\n                            disabled: !input.trim(),\n                            className: \"flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3fec] text-white transition-colors hover:bg-[#1e3fec]/90 disabled:opacity-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Send_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebas.frenck/Dropbox/ITNB/itnb products/UI/Cursor code/itnb_client0_UI_new/components/chat/chat-interface.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatInterface, \"3cvfmCBEQeGle8+0c8QDooQnebM=\");\n_c = ChatInterface;\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2hhdC9jaGF0LWludGVyZmFjZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDRztBQUNpQztBQVE3RCxTQUFTSzs7SUFDZCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQVk7UUFDbEQ7WUFDRVEsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLFdBQVc7UUFDYjtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1hLGFBQWE7UUFDakIsSUFBSSxDQUFDRixNQUFNRyxJQUFJLElBQUk7UUFFbkJQLFlBQVlRLENBQUFBLE9BQVE7bUJBQUlBO2dCQUFNO29CQUFFUCxNQUFNO29CQUFRQyxTQUFTRSxNQUFNRyxJQUFJO2dCQUFHO2FBQUU7UUFDdEVGLFNBQVM7SUFDWDtJQUVBLE1BQU1JLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssV0FBVyxDQUFDRCxFQUFFRSxRQUFRLEVBQUU7WUFDcENGLEVBQUVHLGNBQWM7WUFDaEJQO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWCxxREFBSUE7UUFBQ21CLFdBQVU7OzBCQUNkLDhEQUFDbEIsNERBQVdBO2dCQUFDa0IsV0FBVTswQkFDckIsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNaZixTQUFTaUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLGtCQUN0Qiw4REFBQ0g7NEJBRUNELFdBQVcsUUFFVixPQURDRyxRQUFRaEIsSUFBSSxLQUFLLFNBQVMsZ0JBQWdCO3NDQUc1Qyw0RUFBQ2M7Z0NBQ0NELFdBQVcsb0NBSVYsT0FIQ0csUUFBUWhCLElBQUksS0FBSyxTQUNiLDRCQUNBOztrREFHTiw4REFBQ2M7d0NBQUlELFdBQVU7OzRDQUNaRyxRQUFRaEIsSUFBSSxLQUFLLDZCQUNoQiw4REFBQ2M7Z0RBQUlELFdBQVU7MERBQ2IsNEVBQUNLO29EQUFLTCxXQUFVOzhEQUFpQzs7Ozs7Ozs7Ozs7NENBR3BERyxRQUFRZCxTQUFTLGtCQUNoQiw4REFBQ2dCO2dEQUFLTCxXQUFVOzBEQUE0Q0csUUFBUWQsU0FBUzs7Ozs7Ozs7Ozs7O2tEQUdqRiw4REFBQ2lCO3dDQUFFTixXQUFVO2tEQUFRRyxRQUFRZixPQUFPOzs7Ozs7b0NBQ25DZSxRQUFRaEIsSUFBSSxLQUFLLDZCQUNoQiw4REFBQ2M7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDTztnREFBT1AsV0FBVTswREFBd0Y7Ozs7OzswREFHMUcsOERBQUNPO2dEQUFPUCxXQUFVOzBEQUF3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQTVCM0dJOzs7Ozs7Ozs7Ozs7Ozs7MEJBdUNiLDhEQUFDckIsMkRBQVVBO2dCQUFDaUIsV0FBVTswQkFDcEIsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ1Y7NEJBQ0NrQixNQUFLOzRCQUNMQyxPQUFPbkI7NEJBQ1BvQixVQUFVLENBQUNkLElBQU1MLFNBQVNLLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDeENHLFdBQVdqQjs0QkFDWGtCLGFBQVk7NEJBQ1piLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ087NEJBQ0NPLFNBQVN0Qjs0QkFDVHVCLFVBQVUsQ0FBQ3pCLE1BQU1HLElBQUk7NEJBQ3JCTyxXQUFVO3NDQUVWLDRFQUFDcEIsZ0ZBQUlBO2dDQUFDb0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQTFGZ0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXQvY2hhdC1pbnRlcmZhY2UudHN4PzA1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2VuZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIHJvbGU6IFwidXNlclwiIHwgXCJhc3Npc3RhbnRcIlxuICBjb250ZW50OiBzdHJpbmdcbiAgdGltZXN0YW1wPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0SW50ZXJmYWNlKCkge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW1xuICAgIHtcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICBjb250ZW50OiBcIkhlbGxvISBJJ20gSVROQidzIEFJIGFzc2lzdGFudC4gSG93IGNhbiBJIGhlbHAgeW91IHRvZGF5P1wiLFxuICAgICAgdGltZXN0YW1wOiBcIjE1OjU4OjEyXCJcbiAgICB9XG4gIF0pXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBoYW5kbGVTZW5kID0gKCkgPT4ge1xuICAgIGlmICghaW5wdXQudHJpbSgpKSByZXR1cm5cbiAgICBcbiAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBpbnB1dC50cmltKCkgfV0pXG4gICAgc2V0SW5wdXQoXCJcIilcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZVNlbmQoKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBzaGFkb3ctc20gZGFyazpib3JkZXItZ3JheS04MDAgZGFyazpiZy1bIzFhMWExYV1cIj5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNiBwYi0yNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4ICR7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIiA/IFwianVzdGlmeS1lbmRcIiA6IFwianVzdGlmeS1zdGFydFwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWF4LXctWzgwJV0gcm91bmRlZC14bCBweC00IHB5LTIgJHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLVsjMWUzZmVjXSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktMTAwIGRhcms6YmctZ3JheS04MDAgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTYgdy02IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJnLVsjMWUzZmVjXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPkFJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS50aW1lc3RhbXAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e21lc3NhZ2UudGltZXN0YW1wfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPnttZXNzYWdlLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlLnJvbGUgPT09IFwiYXNzaXN0YW50XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgSGVscGZ1bFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTm90IGhlbHBmdWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBwLTQgZGFyazpib3JkZXItZ3JheS04MDAgZGFyazpiZy1bIzFhMWExYV1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgYW55dGhpbmcgYWJvdXQgSVROQiBBRy4uLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHB4LTQgcHktMiB0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJvcmRlci1bIzFlM2ZlY10gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLVsjMWUzZmVjXSBkYXJrOmJvcmRlci1ncmF5LTgwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTEwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFpbnB1dC50cmltKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtMTAgdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBiZy1bIzFlM2ZlY10gdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1bIzFlM2ZlY10vOTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkRm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgKVxufSAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZW5kIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkNoYXRJbnRlcmZhY2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJ0aW1lc3RhbXAiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlU2VuZCIsInRyaW0iLCJwcmV2IiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwibWVzc2FnZSIsImkiLCJzcGFuIiwicCIsImJ1dHRvbiIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/chat/chat-interface.tsx\n"));

/***/ })

});