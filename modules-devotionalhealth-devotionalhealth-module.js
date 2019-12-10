(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-devotionalhealth-devotionalhealth-module"],{

/***/ "./src/app/modules/devotionalhealth/devotionalhealth-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/devotionalhealth/devotionalhealth-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DevotionalhealthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalhealthRoutingModule", function() { return DevotionalhealthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devotionalhealth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalhealth.component */ "./src/app/modules/devotionalhealth/devotionalhealth.component.ts");




var routes = [
    {
        path: "",
        component: _devotionalhealth_component__WEBPACK_IMPORTED_MODULE_3__["DevotionalhealthComponent"],
        data: {},
        children: []
    }
];
var DevotionalhealthRoutingModule = /** @class */ (function () {
    function DevotionalhealthRoutingModule() {
    }
    DevotionalhealthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevotionalhealthRoutingModule);
    return DevotionalhealthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/devotionalhealth/devotionalhealth.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/devotionalhealth/devotionalhealth.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV2b3Rpb25hbGhlYWx0aC9kZXZvdGlvbmFsaGVhbHRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/devotionalhealth/devotionalhealth.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/devotionalhealth/devotionalhealth.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  devotionalhealth works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/devotionalhealth/devotionalhealth.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/devotionalhealth/devotionalhealth.component.ts ***!
  \************************************************************************/
/*! exports provided: DevotionalhealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalhealthComponent", function() { return DevotionalhealthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevotionalhealthComponent = /** @class */ (function () {
    function DevotionalhealthComponent() {
    }
    DevotionalhealthComponent.prototype.ngOnInit = function () {
    };
    DevotionalhealthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionalhealth',
            template: __webpack_require__(/*! ./devotionalhealth.component.html */ "./src/app/modules/devotionalhealth/devotionalhealth.component.html"),
            styles: [__webpack_require__(/*! ./devotionalhealth.component.css */ "./src/app/modules/devotionalhealth/devotionalhealth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevotionalhealthComponent);
    return DevotionalhealthComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalhealth/devotionalhealth.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/devotionalhealth/devotionalhealth.module.ts ***!
  \*********************************************************************/
/*! exports provided: DevotionalhealthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalhealthModule", function() { return DevotionalhealthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _devotionalhealth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalhealth-routing.module */ "./src/app/modules/devotionalhealth/devotionalhealth-routing.module.ts");
/* harmony import */ var _devotionalhealth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devotionalhealth.component */ "./src/app/modules/devotionalhealth/devotionalhealth.component.ts");





var DevotionalhealthModule = /** @class */ (function () {
    function DevotionalhealthModule() {
    }
    DevotionalhealthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devotionalhealth_component__WEBPACK_IMPORTED_MODULE_4__["DevotionalhealthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devotionalhealth_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevotionalhealthRoutingModule"]
            ]
        })
    ], DevotionalhealthModule);
    return DevotionalhealthModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-devotionalhealth-devotionalhealth-module.js.map