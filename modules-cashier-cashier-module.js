(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cashier-cashier-module"],{

/***/ "./src/app/modules/cashier/cashier-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/cashier/cashier-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CashierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierRoutingModule", function() { return CashierRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cashier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier.component */ "./src/app/modules/cashier/cashier.component.ts");
/* harmony import */ var _cashierdashboard_cashierdashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cashierdashboard/cashierdashboard.component */ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.ts");





var routes = [
    {
        path: "",
        component: _cashier_component__WEBPACK_IMPORTED_MODULE_3__["CashierComponent"],
        data: {},
        children: [
            { path: "", component: _cashierdashboard_cashierdashboard_component__WEBPACK_IMPORTED_MODULE_4__["CashierdashboardComponent"] },
        ]
    }
];
var CashierRoutingModule = /** @class */ (function () {
    function CashierRoutingModule() {
    }
    CashierRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CashierRoutingModule);
    return CashierRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/cashier/cashier.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/cashier/cashier.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FzaGllci9jYXNoaWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/cashier/cashier.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/cashier/cashier.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cashier works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/cashier/cashier.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/cashier/cashier.component.ts ***!
  \******************************************************/
/*! exports provided: CashierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierComponent", function() { return CashierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CashierComponent = /** @class */ (function () {
    function CashierComponent() {
    }
    CashierComponent.prototype.ngOnInit = function () {
    };
    CashierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashier',
            template: __webpack_require__(/*! ./cashier.component.html */ "./src/app/modules/cashier/cashier.component.html"),
            styles: [__webpack_require__(/*! ./cashier.component.css */ "./src/app/modules/cashier/cashier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CashierComponent);
    return CashierComponent;
}());



/***/ }),

/***/ "./src/app/modules/cashier/cashier.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cashier/cashier.module.ts ***!
  \***************************************************/
/*! exports provided: CashierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierModule", function() { return CashierModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier-routing.module */ "./src/app/modules/cashier/cashier-routing.module.ts");
/* harmony import */ var _cashier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cashier.component */ "./src/app/modules/cashier/cashier.component.ts");
/* harmony import */ var _cashierdashboard_cashierdashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashierdashboard/cashierdashboard.component */ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.ts");






var CashierModule = /** @class */ (function () {
    function CashierModule() {
    }
    CashierModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cashier_component__WEBPACK_IMPORTED_MODULE_4__["CashierComponent"], _cashierdashboard_cashierdashboard_component__WEBPACK_IMPORTED_MODULE_5__["CashierdashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__["CashierRoutingModule"]
            ]
        })
    ], CashierModule);
    return CashierModule;
}());



/***/ }),

/***/ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FzaGllci9jYXNoaWVyZGFzaGJvYXJkL2Nhc2hpZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cashierdashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: CashierdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierdashboardComponent", function() { return CashierdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CashierdashboardComponent = /** @class */ (function () {
    function CashierdashboardComponent() {
    }
    CashierdashboardComponent.prototype.ngOnInit = function () {
    };
    CashierdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashierdashboard',
            template: __webpack_require__(/*! ./cashierdashboard.component.html */ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.html"),
            styles: [__webpack_require__(/*! ./cashierdashboard.component.css */ "./src/app/modules/cashier/cashierdashboard/cashierdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CashierdashboardComponent);
    return CashierdashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-cashier-cashier-module.js.map