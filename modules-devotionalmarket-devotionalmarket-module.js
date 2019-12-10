(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-devotionalmarket-devotionalmarket-module"],{

/***/ "./src/app/modules/devotionalmarket/devotionalmarket-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/devotionalmarket/devotionalmarket-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DevotionalmarketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalmarketRoutingModule", function() { return DevotionalmarketRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devotionalmarket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalmarket.component */ "./src/app/modules/devotionalmarket/devotionalmarket.component.ts");




var routes = [
    {
        path: "",
        component: _devotionalmarket_component__WEBPACK_IMPORTED_MODULE_3__["DevotionalmarketComponent"],
        data: {},
        children: []
    }
];
var DevotionalmarketRoutingModule = /** @class */ (function () {
    function DevotionalmarketRoutingModule() {
    }
    DevotionalmarketRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevotionalmarketRoutingModule);
    return DevotionalmarketRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/devotionalmarket/devotionalmarket.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/devotionalmarket/devotionalmarket.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV2b3Rpb25hbG1hcmtldC9kZXZvdGlvbmFsbWFya2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/devotionalmarket/devotionalmarket.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/devotionalmarket/devotionalmarket.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  devotionalmarket works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/devotionalmarket/devotionalmarket.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/devotionalmarket/devotionalmarket.component.ts ***!
  \************************************************************************/
/*! exports provided: DevotionalmarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalmarketComponent", function() { return DevotionalmarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevotionalmarketComponent = /** @class */ (function () {
    function DevotionalmarketComponent() {
    }
    DevotionalmarketComponent.prototype.ngOnInit = function () {
    };
    DevotionalmarketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionalmarket',
            template: __webpack_require__(/*! ./devotionalmarket.component.html */ "./src/app/modules/devotionalmarket/devotionalmarket.component.html"),
            styles: [__webpack_require__(/*! ./devotionalmarket.component.css */ "./src/app/modules/devotionalmarket/devotionalmarket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevotionalmarketComponent);
    return DevotionalmarketComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalmarket/devotionalmarket.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/devotionalmarket/devotionalmarket.module.ts ***!
  \*********************************************************************/
/*! exports provided: DevotionalmarketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalmarketModule", function() { return DevotionalmarketModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _devotionalmarket_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalmarket-routing.module */ "./src/app/modules/devotionalmarket/devotionalmarket-routing.module.ts");
/* harmony import */ var _devotionalmarket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devotionalmarket.component */ "./src/app/modules/devotionalmarket/devotionalmarket.component.ts");





var DevotionalmarketModule = /** @class */ (function () {
    function DevotionalmarketModule() {
    }
    DevotionalmarketModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devotionalmarket_component__WEBPACK_IMPORTED_MODULE_4__["DevotionalmarketComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devotionalmarket_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevotionalmarketRoutingModule"]
            ]
        })
    ], DevotionalmarketModule);
    return DevotionalmarketModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-devotionalmarket-devotionalmarket-module.js.map