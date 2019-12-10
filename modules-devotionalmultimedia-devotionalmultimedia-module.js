(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-devotionalmultimedia-devotionalmultimedia-module"],{

/***/ "./src/app/modules/devotionalmultimedia/devotionalmultimedia-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/devotionalmultimedia/devotionalmultimedia-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DevotionalmultimediaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalmultimediaRoutingModule", function() { return DevotionalmultimediaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devotionalmultimedia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalmultimedia.component */ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.ts");




var routes = [
    {
        path: "",
        component: _devotionalmultimedia_component__WEBPACK_IMPORTED_MODULE_3__["DevotionalmultimediaComponent"],
        data: {},
        children: []
    }
];
var DevotionalmultimediaRoutingModule = /** @class */ (function () {
    function DevotionalmultimediaRoutingModule() {
    }
    DevotionalmultimediaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevotionalmultimediaRoutingModule);
    return DevotionalmultimediaRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV2b3Rpb25hbG11bHRpbWVkaWEvZGV2b3Rpb25hbG11bHRpbWVkaWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  devotionalmultimedia works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.ts ***!
  \********************************************************************************/
/*! exports provided: DevotionalmultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalmultimediaComponent", function() { return DevotionalmultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevotionalmultimediaComponent = /** @class */ (function () {
    function DevotionalmultimediaComponent() {
    }
    DevotionalmultimediaComponent.prototype.ngOnInit = function () {
    };
    DevotionalmultimediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionalmultimedia',
            template: __webpack_require__(/*! ./devotionalmultimedia.component.html */ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.html"),
            styles: [__webpack_require__(/*! ./devotionalmultimedia.component.css */ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevotionalmultimediaComponent);
    return DevotionalmultimediaComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/devotionalmultimedia/devotionalmultimedia.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DevotionalmultimediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalmultimediaModule", function() { return DevotionalmultimediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _devotionalmultimedia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalmultimedia-routing.module */ "./src/app/modules/devotionalmultimedia/devotionalmultimedia-routing.module.ts");
/* harmony import */ var _devotionalmultimedia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devotionalmultimedia.component */ "./src/app/modules/devotionalmultimedia/devotionalmultimedia.component.ts");





var DevotionalmultimediaModule = /** @class */ (function () {
    function DevotionalmultimediaModule() {
    }
    DevotionalmultimediaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devotionalmultimedia_component__WEBPACK_IMPORTED_MODULE_4__["DevotionalmultimediaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devotionalmultimedia_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevotionalmultimediaRoutingModule"]
            ]
        })
    ], DevotionalmultimediaModule);
    return DevotionalmultimediaModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-devotionalmultimedia-devotionalmultimedia-module.js.map