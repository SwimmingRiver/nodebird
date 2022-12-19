webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject,
  _templateObject2,
  _this = undefined,
  _jsxFileName = "C:\\Users\\\uC218\uC601\\Desktop\\nodebird\\front\\components\\LoginForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top:10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding:10px;\n"])));
_c2 = FormWrapper;
var LoginForm = function LoginForm(_ref) {
  _s();
  var setIsLoggedIn = _ref.setIsLoggedIn;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    id = _useState[0],
    setId = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    password = _useState2[0],
    setPassword = _useState2[1];
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx(ButtonWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 34
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};
_s(LoginForm, "aN5eHyxAoOn72knhzyM25pL8Oj8=");
_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2, _c3;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25DaGFuZ2VJZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDWjtBQUNYO0FBQ1U7QUFFdkMsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLHVLQUUvQjtBQUFDLEtBRklGLGFBQWE7QUFJbkIsSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBSSxDQUFDLHNLQUUvQjtBQUFDLE1BRklELFdBQVc7QUFJakIsSUFBTUUsU0FBUyxHQUFFLFNBQVhBLFNBQVMsT0FBcUI7RUFBQTtFQUFBLElBQWpCQyxhQUFhLFFBQWJBLGFBQWE7RUFDNUIsZ0JBQWlCQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUF0QkMsRUFBRTtJQUFDQyxLQUFLO0VBQ2YsaUJBQTZCRixzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFsQ0csUUFBUTtJQUFDQyxXQUFXO0VBRTNCLElBQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFDLEVBQUc7SUFDL0JMLEtBQUssQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUMxQixDQUFDLEVBQUMsRUFBRSxDQUFDO0VBRUwsSUFBTUMsZ0JBQWdCLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsQ0FBQyxFQUFHO0lBQ3RDSCxXQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDaEMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztFQUVMLElBQU1FLFlBQVksR0FBQ0wseURBQVcsQ0FBQyxZQUFJO0lBQ2xDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osRUFBRSxFQUFDRSxRQUFRLENBQUM7SUFDeEJKLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQyxFQUFDLENBQUNFLEVBQUUsRUFBQ0UsUUFBUSxDQUFDLENBQUM7RUFFZixPQUNJLE1BQUMsV0FBVztJQUFDLFFBQVEsRUFBRVEsWUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3BDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSTtJQUFPLE9BQU8sRUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0JBQVksRUFDcEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFLLEVBQ0wsTUFBQywwQ0FBSztJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsS0FBSyxFQUFFVixFQUFHO0lBQUMsUUFBUSxFQUFFSSxVQUFXO0lBQUMsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQVMsQ0FDdEUsRUFDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0E7SUFBTyxPQUFPLEVBQUMsZUFBZTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFhLEVBQ3ZDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBSyxFQUNMLE1BQUMsMENBQUs7SUFDTCxJQUFJLEVBQUMsZUFBZTtJQUNwQixJQUFJLEVBQUMsVUFBVTtJQUNmLEtBQUssRUFBRUYsUUFBUztJQUNoQixRQUFRLEVBQUVPLGdCQUFpQjtJQUMzQixRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRSxDQUNULEVBQ04sTUFBQyxhQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDVixNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxRQUFRLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBRSxLQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0JBQWEsRUFDckUsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQUcsTUFBQywyQ0FBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFjLENBQUksQ0FBTyxDQUM1QyxDQUNGO0FBRXRCLENBQUM7QUFBQSxHQXhDS1osU0FBUztBQUFBLE1BQVRBLFNBQVM7QUF5Q0FBLHdFQUFTLEVBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjk3ZGZiODc2ODRiMjg3MDE2YTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIFJlYWN0LHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9ICBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgSW5wdXQsQnV0dG9ufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7IFxyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICAgIHBhZGRpbmc6MTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9KHtzZXRJc0xvZ2dlZElufSk9PntcclxuICAgIGNvbnN0IFtpZCxzZXRJZF09dXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXT11c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICB9LFtdKTtcclxuXHJcbiAgIGNvbnN0IG9uU3VibWl0Rm9ybT11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgY29uc29sZS5sb2coaWQscGFzc3dvcmQpO1xyXG4gICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgfSxbaWQscGFzc3dvcmRdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItaWQnPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPSd1c2VyLWlkJyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZD48L0lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItcGFzc3dvcmQnPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgbmFtZT0ndXNlci1wYXNzd29yZCdcclxuICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgICByZXF1aXJlZC8+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIGh0bWxUeXBlPSdzdWJtaXQnIGxvYWRpbmc9e2ZhbHNlfT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=