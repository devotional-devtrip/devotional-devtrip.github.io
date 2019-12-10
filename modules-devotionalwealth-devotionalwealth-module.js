(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-devotionalwealth-devotionalwealth-module"],{

/***/ "./src/app/modules/devotionalwealth/devotionalwealth-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/devotionalwealth/devotionalwealth-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DevotionalwealthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalwealthRoutingModule", function() { return DevotionalwealthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devotionalwealth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalwealth.component */ "./src/app/modules/devotionalwealth/devotionalwealth.component.ts");




var routes = [
    {
        path: "",
        component: _devotionalwealth_component__WEBPACK_IMPORTED_MODULE_3__["DevotionalwealthComponent"],
        data: {},
        children: []
    }
];
var DevotionalwealthRoutingModule = /** @class */ (function () {
    function DevotionalwealthRoutingModule() {
    }
    DevotionalwealthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevotionalwealthRoutingModule);
    return DevotionalwealthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/devotionalwealth/devotionalwealth.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/devotionalwealth/devotionalwealth.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV2b3Rpb25hbHdlYWx0aC9kZXZvdGlvbmFsd2VhbHRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/devotionalwealth/devotionalwealth.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/devotionalwealth/devotionalwealth.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  devotionalwealth works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/devotionalwealth/devotionalwealth.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/devotionalwealth/devotionalwealth.component.ts ***!
  \************************************************************************/
/*! exports provided: DevotionalwealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalwealthComponent", function() { return DevotionalwealthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevotionalwealthComponent = /** @class */ (function () {
    function DevotionalwealthComponent() {
    }
    DevotionalwealthComponent.prototype.ngOnInit = function () {
    };
    DevotionalwealthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionalwealth',
            template: __webpack_require__(/*! ./devotionalwealth.component.html */ "./src/app/modules/devotionalwealth/devotionalwealth.component.html"),
            styles: [__webpack_require__(/*! ./devotionalwealth.component.css */ "./src/app/modules/devotionalwealth/devotionalwealth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevotionalwealthComponent);
    return DevotionalwealthComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalwealth/devotionalwealth.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/devotionalwealth/devotionalwealth.module.ts ***!
  \*********************************************************************/
/*! exports provided: DevotionalwealthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalwealthModule", function() { return DevotionalwealthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _devotionalwealth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalwealth-routing.module */ "./src/app/modules/devotionalwealth/devotionalwealth-routing.module.ts");
/* harmony import */ var _devotionalwealth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devotionalwealth.component */ "./src/app/modules/devotionalwealth/devotionalwealth.component.ts");





var DevotionalwealthModule = /** @class */ (function () {
    function DevotionalwealthModule() {
    }
    DevotionalwealthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devotionalwealth_component__WEBPACK_IMPORTED_MODULE_4__["DevotionalwealthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devotionalwealth_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevotionalwealthRoutingModule"]
            ]
        })
    ], DevotionalwealthModule);
    return DevotionalwealthModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-devotionalwealth-devotionalwealth-module.js.map