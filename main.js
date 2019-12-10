(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin/admin.module": [
		"./src/app/modules/admin/admin.module.ts",
		"modules-admin-admin-module"
	],
	"./modules/cashier/cashier.module": [
		"./src/app/modules/cashier/cashier.module.ts",
		"modules-cashier-cashier-module"
	],
	"./modules/devotionalbook/devotionalbook.module": [
		"./src/app/modules/devotionalbook/devotionalbook.module.ts",
		"modules-devotionalbook-devotionalbook-module"
	],
	"./modules/devotionaleventmanagement/devotionaleventmanagement.module": [
		"./src/app/modules/devotionaleventmanagement/devotionaleventmanagement.module.ts",
		"modules-devotionaleventmanagement-devotionaleventmanagement-module"
	],
	"./modules/devotionalhealth/devotionalhealth.module": [
		"./src/app/modules/devotionalhealth/devotionalhealth.module.ts",
		"modules-devotionalhealth-devotionalhealth-module"
	],
	"./modules/devotionalmarket/devotionalmarket.module": [
		"./src/app/modules/devotionalmarket/devotionalmarket.module.ts",
		"modules-devotionalmarket-devotionalmarket-module"
	],
	"./modules/devotionalmultimedia/devotionalmultimedia.module": [
		"./src/app/modules/devotionalmultimedia/devotionalmultimedia.module.ts",
		"modules-devotionalmultimedia-devotionalmultimedia-module"
	],
	"./modules/devotionalwealth/devotionalwealth.module": [
		"./src/app/modules/devotionalwealth/devotionalwealth.module.ts",
		"modules-devotionalwealth-devotionalwealth-module"
	],
	"./modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"modules-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _devotional_devotional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devotional/devotional.component */ "./src/app/devotional/devotional.component.ts");
/* harmony import */ var _selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selective-preloading-strategy */ "./src/app/selective-preloading-strategy.ts");
/* harmony import */ var _modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/user/authguard/auth.guard */ "./src/app/modules/user/authguard/auth.guard.ts");








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'devotional', component: _devotional_devotional_component__WEBPACK_IMPORTED_MODULE_5__["DevotionalComponent"] },
    { path: 'user', loadChildren: "./modules/user/user.module#UserModule" },
    { path: 'admin', loadChildren: "./modules/admin/admin.module#AdminModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'cashier', loadChildren: "./modules/cashier/cashier.module#CashierModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'devotional/books', loadChildren: "./modules/devotionalbook/devotionalbook.module#DevotionalbookModule", data: { preload: true } },
    { path: 'devotional/multimedia', loadChildren: "./modules/devotionalmultimedia/devotionalmultimedia.module#DevotionalmultimediaModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'devotional/market', loadChildren: "./modules/devotionalmarket/devotionalmarket.module#DevotionalmarketModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'devotional/eventmanagement', loadChildren: "./modules/devotionaleventmanagement/devotionaleventmanagement.module#DevotionaleventmanagementModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'devotional/health', loadChildren: "./modules/devotionalhealth/devotionalhealth.module#DevotionalhealthModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'devotional/wealth', loadChildren: "./modules/devotionalwealth/devotionalwealth.module#DevotionalwealthModule", data: { preload: false }, canActivate: [_modules_user_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_6__["SelectivePreloadingStrategy"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_6__["SelectivePreloadingStrategy"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 100vh;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    color: #d6f0f5;\r\n}\r\n\r\n.main {\r\n    background-color: #338fb9;\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.site-bg{ \r\n    width: 100%;\r\n    height:100%;\r\n    background-size:cover;\r\n    padding: 0;\r\n    background-image:url('devotional-2.png'); align-content: center;   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCwyQkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQVE7WUFBUixRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gseUNBQXVELENBQUMsc0JBQXNCO0NBQ2pGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGNvbG9yOiAjZDZmMGY1O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM4ZmI5O1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnNpdGUtYmd7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vYXNzZXRzL2ltZy9kZXZvdGlvbmFsLTIucG5nJyk7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<section class=\"site-wrapper\">\n    <section class=\"main\">\n      <div class=\"site-bg\">\n        <router-outlet></router-outlet>\n      </div>\n    </section>\n  </section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DTdevotional';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _modules_user_userservices_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/user/userservices/authentication.service */ "./src/app/modules/user/userservices/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _devotional_devotional_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devotional/devotional.component */ "./src/app/devotional/devotional.component.ts");
/* harmony import */ var _devotional_devotionalitem_devotionalitem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./devotional/devotionalitem/devotionalitem.component */ "./src/app/devotional/devotionalitem/devotionalitem.component.ts");
/* harmony import */ var _devotional_devotionalitemservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./devotional/devotionalitemservice.service */ "./src/app/devotional/devotionalitemservice.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"],
                _devotional_devotional_component__WEBPACK_IMPORTED_MODULE_9__["DevotionalComponent"],
                _devotional_devotionalitem_devotionalitem_component__WEBPACK_IMPORTED_MODULE_10__["DevotionalitemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_modules_user_userservices_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _devotional_devotionalitemservice_service__WEBPACK_IMPORTED_MODULE_11__["DevotionalitemserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/devotional/devotional.component.css":
/*!*****************************************************!*\
  !*** ./src/app/devotional/devotional.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".devotional-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    height: 100vh;\r\n    color: #d6f0f5;\r\n    overflow: visible;\r\n    overflow: auto; \r\n}\r\n\r\n.devotional-footer{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    justify-content: space-around;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    align-content: center;\r\n    position: relative;\r\n    color: #d6f0f5;\r\n    width: 100%;\r\n    bottom: 0;\r\n    text-align: center;\r\n  }\r\n\r\n.devotional-main {\r\n    padding-top: 10vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    justify-content: space-around;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.devotional-item-container{\r\n    padding-top: 10vh;\r\n    width: 40%;\r\n    min-width: 40%;\r\n    min-height: 30vh;\r\n    \r\n}\r\n\r\n.devotional-menu {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: right;\r\n            justify-content: right;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.devotional-menu-item {\r\n    width: 48%;\r\n    max-width: 200px;\r\n    position: relative;\r\n}\r\n\r\n.img {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    margin-right: 5px;\r\n}\r\n\r\n.span {\r\n    font-size: 1.3rem;\r\n    line-height: 2.50;\r\n    margin: 0;\r\n    font-family: 'Baloo';\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2b3Rpb25hbC9kZXZvdGlvbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBdUI7SUFBdkIsOEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHFCQUFjO0lBQWQsY0FBYztJQUNkLDZCQUF1QjtJQUF2Qiw4QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0dBQ3BCOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFjO0lBQWQsY0FBYztJQUNkLDZCQUF1QjtJQUF2Qiw4QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjs7Q0FFcEI7O0FBRUQ7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9kZXZvdGlvbmFsL2Rldm90aW9uYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXZvdGlvbmFsLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxyXG59XHJcblxyXG4uZGV2b3Rpb25hbC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZDZmMGY1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmRldm90aW9uYWwtbWFpbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGV2b3Rpb25hbC1pdGVtLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgbWluLWhlaWdodDogMzB2aDtcclxuICAgIFxyXG59XHJcblxyXG4uZGV2b3Rpb25hbC1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5kZXZvdGlvbmFsLW1lbnUtaXRlbSB7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41MDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28nO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/devotional/devotional.component.html":
/*!******************************************************!*\
  !*** ./src/app/devotional/devotional.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"devotional-wrapper\">\n  <div class=\"devotional-menu\">\n    <div class=\"devotional-menu-item\">\n      <div class=\"button\" routerLink=\"/home\">\n        <span>Home</span>\n      </div>\n    </div>\n    <div class=\"devotional-menu-item\">\n      <div class=\"button\" routerLink=\"/cashier\">\n        <span>Cashier</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"devotional-main\" *ngIf=\"itemInfo\" >\n    <div class=\"devotional-item-container\" *ngFor=\"let i of itemInfo; let i=index \">\n      <app-devotionalitem [item]='(i)'></app-devotionalitem>\n    </div>\n  </div>\n  <div class=\"devotional-footer\">Powered by devtrip developers and contributors © www.devtrip.com 2012-2019</div>\n</div>"

/***/ }),

/***/ "./src/app/devotional/devotional.component.ts":
/*!****************************************************!*\
  !*** ./src/app/devotional/devotional.component.ts ***!
  \****************************************************/
/*! exports provided: DevotionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalComponent", function() { return DevotionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_user_userservices_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/user/userservices/authentication.service */ "./src/app/modules/user/userservices/authentication.service.ts");
/* harmony import */ var _devotionalitemservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalitemservice.service */ "./src/app/devotional/devotionalitemservice.service.ts");




var DevotionalComponent = /** @class */ (function () {
    function DevotionalComponent(authenticationService, devotionalItemService) {
        this.authenticationService = authenticationService;
        this.devotionalItemService = devotionalItemService;
        this.isSubscriber = false;
        this.currentUser = this.authenticationService.currentUserValue;
        if (this.currentUser) {
            this.isSubscriber = true;
        }
    }
    DevotionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.devotionalItemService.getItems()
            .subscribe(function (data) {
            _this.itemInfo = data;
        });
    };
    DevotionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotional',
            template: __webpack_require__(/*! ./devotional.component.html */ "./src/app/devotional/devotional.component.html"),
            styles: [__webpack_require__(/*! ./devotional.component.css */ "./src/app/devotional/devotional.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_user_userservices_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _devotionalitemservice_service__WEBPACK_IMPORTED_MODULE_3__["DevotionalitemserviceService"]])
    ], DevotionalComponent);
    return DevotionalComponent;
}());



/***/ }),

/***/ "./src/app/devotional/devotionalitem/devotionalitem.component.css":
/*!************************************************************************!*\
  !*** ./src/app/devotional/devotionalitem/devotionalitem.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".devotional-element{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  box-shadow: 0 5px 50px #e1e3e4;\r\n  -webkit-transition: all 100ms linear;\r\n  transition: all 100ms linear; \r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n  \r\n.info-head{\r\n  padding: 10px;\r\n  font-size: 1.95em;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n  vertical-align: top;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  position: relative;\r\n}\r\n  \r\n.info-description{\r\n  padding: 10px;\r\n  font-size: 0.95em;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n  vertical-align: top;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  position: relative;\r\n}\r\n  \r\n.button-item{\r\n  max-width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2b3Rpb25hbC9kZXZvdGlvbmFsaXRlbS9kZXZvdGlvbmFsaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWM7RUFBZCxjQUFjO0VBQ2QsNkJBQXVCO0VBQXZCLDhCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsK0JBQThCO1VBQTlCLDhCQUE4QjtFQUM5QiwwQkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGV2b3Rpb25hbC9kZXZvdGlvbmFsaXRlbS9kZXZvdGlvbmFsaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldm90aW9uYWwtZWxlbWVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNTBweCAjZTFlM2U0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBsaW5lYXI7IFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4gIFxyXG4uaW5mby1oZWFke1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjk1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbmZvLWRlc2NyaXB0aW9ue1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5idXR0b24taXRlbXtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/devotional/devotionalitem/devotionalitem.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/devotional/devotionalitem/devotionalitem.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"devotional-element\">\n  <div class=\"info-head\">{{item.name}}</div>\n  \n  <div class=\"info-description\">\n      {{item.description}}\n  </div>\n  <button (click)=\"viewClickHandler(item)\">View {{ item.name.split(' ')[0]}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/devotional/devotionalitem/devotionalitem.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/devotional/devotionalitem/devotionalitem.component.ts ***!
  \***********************************************************************/
/*! exports provided: DevotionalitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalitemComponent", function() { return DevotionalitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DevotionalitemComponent = /** @class */ (function () {
    function DevotionalitemComponent(router) {
        this.router = router;
    }
    DevotionalitemComponent.prototype.ngOnInit = function () {
    };
    DevotionalitemComponent.prototype.viewClickHandler = function (evt) {
        this.router.navigate([evt.route]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DevotionalitemComponent.prototype, "item", void 0);
    DevotionalitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionalitem',
            template: __webpack_require__(/*! ./devotionalitem.component.html */ "./src/app/devotional/devotionalitem/devotionalitem.component.html"),
            styles: [__webpack_require__(/*! ./devotionalitem.component.css */ "./src/app/devotional/devotionalitem/devotionalitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DevotionalitemComponent);
    return DevotionalitemComponent;
}());



/***/ }),

/***/ "./src/app/devotional/devotionalitemservice.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/devotional/devotionalitemservice.service.ts ***!
  \*************************************************************/
/*! exports provided: DevotionalitemserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalitemserviceService", function() { return DevotionalitemserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DevotionalitemserviceService = /** @class */ (function () {
    function DevotionalitemserviceService(_http) {
        this._http = _http;
        this.itemUrl = "assets/json/info.json";
    }
    DevotionalitemserviceService.prototype.getItems = function () {
        var _this = this;
        if (this.devotionalModules) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.devotionalModules);
        }
        else {
            return this._http.get(this.itemUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                _this.devotionalModules = data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('error with getting module info', [])));
        }
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DevotionalitemserviceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DevotionalitemserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DevotionalitemserviceService);
    return DevotionalitemserviceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    height: 100vh;\r\n    color: #d6f0f5;\r\n  }\r\n\r\n  .home-main {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    color: #d6f0f5;\r\n  }\r\n\r\n  .home-logo{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    vertical-align: middle; \r\n    height: 70vh;\r\n  }\r\n\r\n  .home-menu {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: right;\r\n            justify-content: right;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n\r\n  .home-menu-item {\r\n    width: 48%;\r\n    max-width: 200px;\r\n    position: relative;\r\n  }\r\n\r\n  .img {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .span {\r\n    font-size: 1.3rem;\r\n    line-height: 2.50;\r\n    margin: 0;\r\n  }\r\n\r\n  .home-footer{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    justify-content: space-around;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    align-content: center;\r\n    position: relative;\r\n    color: #d6f0f5;\r\n    width: 100%;\r\n    bottom: 0;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBdUI7SUFBdkIsOEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBdUI7SUFBdkIsOEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7R0FDaEI7O0VBRUQ7SUFDRSxxQkFBYztJQUFkLGNBQWM7SUFDZCx5QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZDs7RUFFRDtJQUNFLHFCQUFjO0lBQWQsY0FBYztJQUNkLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtHQUNYOztFQUVEO0lBQ0UscUJBQWM7SUFBZCxjQUFjO0lBQ2QsNkJBQXVCO0lBQXZCLDhCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7R0FDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICB9XHJcblxyXG4gIC5ob21lLW1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICB9XHJcblxyXG4gIC5ob21lLWxvZ297XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1tZW51LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjUwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n  <div class=\"home-menu\">\n      <div *ngIf=\"notlogin\" class=\"home-menu-item\">\n          <div class=\"button\" routerLink=\"/devotional\">\n               <span>Free Devotional</span>\n           </div>\n      </div>\n      <div *ngIf=\"notlogin\" class=\"home-menu-item\">\n         <div class=\"button\" routerLink=\"/user\" (click)='signIn()'>\n              <span>Sign In</span>\n          </div>\n      </div>\n      <div *ngIf=\"!notlogin\" class=\"home-menu-item\">\n        <div class=\"button\" routerLink=\"/devotional\">\n             <span>Devotional</span>\n         </div>\n     </div>\n     <div *ngIf=\"!notlogin\" class=\"home-menu-item\">\n        <div class=\"button\" (click)='signOut()' routerLink=\"/\">\n             <span>Sign Out</span>\n         </div>\n      </div>\n      <div *ngIf=\"notlogin\" class=\"home-menu-item\">\n          <div class=\"button\" routerLink=\"/user/signup\">\n              <span>Sign Up</span>\n          </div>\n      </div>\n  </div>\n  \n  <div class=\"home-logo\">\n      <img width=\"10%\" src=\"assets/logo.png\">\n  </div>\n  <div *ngIf=\"notlogin\" class=\"home-main\">\n      <h2>Welcome to Devtrip Devotional</h2>\n      <h1>Join us to watch devotional content online, and to perform many more related activities.</h1>  \n  </div> \n  <div *ngIf=\"!notlogin\" class=\"home-main\">\n        <h2>Welcome {{currentUser.name}} to Devtrip Devotional</h2>\n        <h1>Watch devotional content online, and perform many more related activities.</h1>  \n    </div>\n    <div class=\"home-footer\">Powered by devtrip developers and contributors © www.devtrip.com 2012-2019</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_user_userservices_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/user/userservices/authentication.service */ "./src/app/modules/user/userservices/authentication.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.notlogin = true;
        this.currentUser = this.authenticationService.currentUserValue;
        if (this.currentUser) {
            this.notlogin = false;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.signIn = function () {
    };
    HomeComponent.prototype.signOut = function () {
        this.authenticationService.signOut();
        this.notlogin = true;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_user_userservices_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/authguard/auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/user/authguard/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userservices_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userservices/authentication.service */ "./src/app/modules/user/userservices/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/user'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _userservices_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/modules/user/userservices/authentication.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/userservices/authentication.service.ts ***!
  \*********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_utils_restServiceClient_service_requester_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/restServiceClient/service-requester.service */ "./src/app/utils/restServiceClient/service-requester.service.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, _restService) {
        this.http = http;
        this._restService = _restService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            if (this.currentUserSubject.value == null) {
                this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
            }
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.signIn = function (username, password) {
        var _this = this;
        var param = new Object();
        param["useremail"] = username;
        param['userpassword'] = password;
        return this._restService.getNonce('validateLogin', param, 'dtusers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            console.log('fetched User from here ' + JSON.stringify(data));
            // {"status":"ok","id":"3","cookie":"45bf8eb634943efe7a73d0816a7d69a72995bcd7","usercredit":"0","userstring":"1-1-10:2-1-0:3-0-0:4-0-0:5-0-0","name":"abc1 xyz1","ops":"login done","success":true}
            if (data && data['success'] && data['cookie']) {
                if (param["useremail"] == 'dtdm.app@gmail.com' || param["useremail"] == 'devtrip.dev@gmail.com') {
                    if (data['usercredit'] == 0) {
                        data['usercredit'] = 1000;
                    }
                }
                localStorage.setItem('currentUser', JSON.stringify(data));
                _this.currentUserSubject.next(data);
            }
            else {
                _this.handleError('updateUser', []);
            }
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateUser', [])));
    };
    AuthenticationService.prototype.updateUser = function (user) {
        return this._restService.getNonce('updateuserData', user, 'dtusers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('updated User from here ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateUser', [])));
    };
    AuthenticationService.prototype.signOut = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        console.log('From Logout', this.currentUserSubject.value);
    };
    AuthenticationService.prototype.signUp = function (firstname, lastname, email, password, phonenumber, useraddress, usercountery) {
        var _this = this;
        var param = new Object();
        param["firstname"] = firstname;
        param["lastname"] = lastname;
        param["useremail"] = email;
        param["userpassword"] = password;
        param["userphone"] = phonenumber;
        param["useraddress"] = useraddress;
        param["usercountery"] = usercountery;
        param["userstring"] = '1-1-0:2-0-0:3-0-0:4-0-0:5-0-0';
        param["userstatus"] = 1;
        param['usercredit'] = 0;
        return this._restService.getNonce('registeruser', param, 'dtusers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            //console.log('fetched User from registered '+ JSON.stringify(data))
            if (data && data['success'] && data['cookie']) {
                localStorage.setItem('currentUser', JSON.stringify(data));
                _this.currentUserSubject.next(data);
            }
            else {
                _this.handleError('updateUser', []);
            }
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateUser', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AuthenticationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_utils_restServiceClient_service_requester_service__WEBPACK_IMPORTED_MODULE_5__["ServiceRequesterService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/selective-preloading-strategy.ts":
/*!**************************************************!*\
  !*** ./src/app/selective-preloading-strategy.ts ***!
  \**************************************************/
/*! exports provided: SelectivePreloadingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategy", function() { return SelectivePreloadingStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * selective-preloading-strategy
 */



var SelectivePreloadingStrategy = /** @class */ (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to our preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    };
    SelectivePreloadingStrategy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SelectivePreloadingStrategy);
    return SelectivePreloadingStrategy;
}());



/***/ }),

/***/ "./src/app/utils/restServiceClient/service-requester.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/utils/restServiceClient/service-requester.service.ts ***!
  \**********************************************************************/
/*! exports provided: ServiceRequesterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRequesterService", function() { return ServiceRequesterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ServiceRequesterService = /** @class */ (function () {
    function ServiceRequesterService(_http) {
        this._http = _http;
        this._apiUrl = "https://kavindraknit.000webhostapp.com/api/"; //'http://127.0.0.1:4001/wordpress/api/';//
    }
    ServiceRequesterService.prototype.getNonce = function (str, param, ctrl) {
        var _this = this;
        //console.log('here in init service method');
        var url = this._apiUrl + 'get_nonce/?controller=' + ctrl + '&method=' + str;
        this._paramObject = param;
        return this._http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this._nonceObject = data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (_) { return _this.getLoginData(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUser', [])));
    };
    ServiceRequesterService.prototype.getLoginData = function () {
        //console.log('here in calling service method');
        var paramString = '';
        for (var i in this._paramObject) {
            paramString += (i + '=' + this._paramObject[i] + "&");
        }
        var url = this._apiUrl + '' + this._nonceObject['controller'] + '/' + this._nonceObject['method'] + '/?' + paramString + 'nonce=' + this._nonceObject['nonce'];
        return this._http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("received data is " + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUser', [])));
    };
    //getRestData(data,'devtrip.dev@gmail.com','Asdfg@123')
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    ServiceRequesterService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ServiceRequesterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceRequesterService);
    return ServiceRequesterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GIT\devotional-devtrip\source\devotional-devtrip-source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map