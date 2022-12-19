webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
  _this = undefined,
  _jsxFileName = "C:\\Users\\\uC218\uC601\\Desktop\\nodebird\\front\\pages\\signup.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    color: red;\n"])));
_c = ErrorMessage;
var Signup = function Signup() {
  _s();
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    id = _useInput2[0],
    onChangedId = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    nickname = _useInput4[0],
    onChangedNickname = _useInput4[1];
  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
    password = _useInput6[0],
    onChangedPassword = _useInput6[1];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    passwordCheck = _useState[0],
    setPasswordCheck = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    passwrodError = _useState2[0],
    setPasswordError = _useState2[1];
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, []);
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    term = _useState3[0],
    setTerm = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    termError = _useState4[0],
    setTermError = _useState4[1];
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {}, []);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785 | NodeBird")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangedId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-nickname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-nickname",
    value: nickname,
    required: true,
    onChange: onChangedNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password",
    value: password,
    required: true,
    onChange: onChangedPassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password-check",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), passwrodError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 31
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0\uC54A\uC2B5\uB2C8\uB2E4")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C\uD569\uB2C8\uB2E4."))));
};
_s(Signup, "fkLR1FCkZSDwTFX9vLs5ysikLQc=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});
_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);
var _c, _c2;
$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZWRJZCIsIm5pY2tuYW1lIiwib25DaGFuZ2VkTmlja25hbWUiLCJwYXNzd29yZCIsIm9uQ2hhbmdlZFBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3cm9kRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNEO0FBQ3BCO0FBQ3VCO0FBQ1Y7QUFDRjtBQUV2QyxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQUcsa0tBRTlCO0FBQUMsS0FGSUYsWUFBWTtBQUlsQixJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBTSxHQUFPO0VBQUE7RUFDZixnQkFBdUJDLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBNUJDLEVBQUU7SUFBQ0MsV0FBVztFQUNyQixpQkFBbUNGLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBeENHLFFBQVE7SUFBQ0MsaUJBQWlCO0VBQ2pDLGlCQUFtQ0osK0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUF4Q0ssUUFBUTtJQUFDQyxpQkFBaUI7RUFFakMsZ0JBQXVDQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUE1Q0MsYUFBYTtJQUFDQyxnQkFBZ0I7RUFDckMsaUJBQXVDRixzREFBUSxDQUFDLEtBQUssQ0FBQztJQUEvQ0csYUFBYTtJ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QUFLO0lBQUMsSUFBSSxFQUFDLHFCQUFxQjtJQUFDLEtBQUssRUFBRUUsYUFBYztJQUFDLFFBQVE7SUFBQyxRQUFRLEVBQUVJLHFCQUFzQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUUsRUFDbEdGLGFBQWEsSUFBSSxNQUFDLFlBQVk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxxRkFBOEIsQ0FDM0QsRUFDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyw2Q0FBUTtJQUFDLElBQUksRUFBQyxXQUFXO0lBQUMsT0FBTyxFQUFFTyxJQUFLO0lBQUMsUUFBUSxFQUFFSSxZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0RBQXNCLEVBQ3RGRixTQUFTLElBQUksTUFBQyxZQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMEVBQTZCLENBQ3RELENBQ0gsQ0FDSztBQUNoQixDQUFDO0FBQUEsR0F2REtwQixNQUFNO0VBQUEsUUFDZUMsdURBQVEsRUFDSUEsdURBQVEsRUFDUkEsdURBQVE7QUFBQTtBQUFBLE1BSHpDRCxNQUFNO0FBd0RHQSxxRUFBTSxFQUFDO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC4yYjYyYTMxOWU3MTBlMzM3OTcxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFjayx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsQ2hlY2tib3gsQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiByZWQ7XHJcbmA7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKT0+e1xyXG4gICAgY29uc3QgW2lkLG9uQ2hhbmdlZElkXT11c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbbmlja25hbWUsb25DaGFuZ2VkTmlja25hbWVdPXVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCxvbkNoYW5nZWRQYXNzd29yZF09dXNlSW5wdXQoJycpO1xyXG5cclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLHNldFBhc3N3b3JkQ2hlY2tdPXVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd3JvZEVycm9yLHNldFBhc3N3b3JkRXJyb3JdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IFt0ZXJtLHNldFRlcm1dPXVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0ZXJtRXJyb3Isc2V0VGVybUVycm9yXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+7ZqM7JuQ6rCA7J6FIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZWRJZH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1uaWNrbmFtZVwiPuuLieuEpOyehDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1uaWNrbmFtZVwiIHZhbHVlPXtuaWNrbmFtZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlZE5pY2tuYW1lfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VkUGFzc3dvcmR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmQtY2hlY2tcIj7ruYTrsIDrsojtmLgg7LK07YGsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkLWNoZWNrXCIgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9Lz5cclxuICAgICAgICAgICAge3Bhc3N3cm9kRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeA7JWK7Iq164uI64ukPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+7JW96rSA7JeQIOuPmeydmO2VqeuLiOuLpC48L0NoZWNrYm94PlxyXG4gICAgICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvO2VqeuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICA8L0FwcExheW91dD4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyAgICJdLCJzb3VyY2VSb290IjoiIn0=