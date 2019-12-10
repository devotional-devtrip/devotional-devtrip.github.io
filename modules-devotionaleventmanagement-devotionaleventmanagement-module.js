(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-devotionaleventmanagement-devotionaleventmanagement-module"],{

/***/ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/devotionaleventmanagement/devotionaleventmanagement-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: DevotionaleventmanagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionaleventmanagementRoutingModule", function() { return DevotionaleventmanagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devotionaleventmanagement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionaleventmanagement.component */ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.ts");




var routes = [
    {
        path: "",
        component: _devotionaleventmanagement_component__WEBPACK_IMPORTED_MODULE_3__["DevotionaleventmanagementComponent"],
        data: {},
        children: []
    }
];
var DevotionaleventmanagementRoutingModule = /** @class */ (function () {
    function DevotionaleventmanagementRoutingModule() {
    }
    DevotionaleventmanagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevotionaleventmanagementRoutingModule);
    return DevotionaleventmanagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV2b3Rpb25hbGV2ZW50bWFuYWdlbWVudC9kZXZvdGlvbmFsZXZlbnRtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  devotionaleventmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DevotionaleventmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionaleventmanagementComponent", function() { return DevotionaleventmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevotionaleventmanagementComponent = /** @class */ (function () {
    function DevotionaleventmanagementComponent() {
    }
    DevotionaleventmanagementComponent.prototype.ngOnInit = function () {
    };
    DevotionaleventmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionaleventmanagement',
            template: __webpack_require__(/*! ./devotionaleventmanagement.component.html */ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.html"),
            styles: [__webpack_require__(/*! ./devotionaleventmanagement.component.css */ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevotionaleventmanagementComponent);
    return DevotionaleventmanagementComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DevotionaleventmanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionaleventmanagementModule", function() { return DevotionaleventmanagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _devotionaleventmanagement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionaleventmanagement-routing.module */ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement-routing.module.ts");
/* harmony import */ var _devotionaleventmanagement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devotionaleventmanagement.component */ "./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.component.ts");





var DevotionaleventmanagementModule = /** @class */ (function () {
    function DevotionaleventmanagementModule() {
    }
    DevotionaleventmanagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devotionaleventmanagement_component__WEBPACK_IMPORTED_MODULE_4__["DevotionaleventmanagementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devotionaleventmanagement_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevotionaleventmanagementRoutingModule"]
            ]
        })
    ], DevotionaleventmanagementModule);
    return DevotionaleventmanagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-devotionaleventmanagement-devotionaleventmanagement-module.js.map