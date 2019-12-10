(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-devotionalbook-devotionalbook-module"],{

/***/ "./node_modules-1/ngx-pagination/dist/ngx-pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules-1/ngx-pagination/dist/ngx-pagination.js ***!
  \**************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGV2b3Rpb25hbGJvb2svYm9va2NvbnRhaW5lci9ib29rY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_pageDisplay\" style=\"text-align:center;justify-content: center;\">\n  <h2 style=\"font-size: 3.5em;\">\n    <u>{{_bookData.displayname}}</u>\n  </h2>\n \n  <table class=\"table\">\n    <tbody *ngFor=\"let item of _collection.data | paginate: _config\">\n        <th style=\"font-size: 2.5em;\"><u>{{item.heading}}</u></th>\n        <tr *ngFor=\"let d of item.data.split('#')\" style=\"font-size: 1.5em;\">{{d}}</tr>\n      </tbody>\n  </table>\n \n  <pagination-controls (pageChange)=\"pageChanged($event)\" style=\"font-size: 1.5em; color: #d6f0f5\"></pagination-controls>\n</div>\n<div class=\"booklist-footer\">Powered by devtrip developers and contributors © www.devtrip.com 2012-2019</div>"

/***/ }),

/***/ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BookcontainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookcontainerComponent", function() { return BookcontainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookservice_bookitems_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookservice/bookitems.service */ "./src/app/modules/devotionalbook/bookservice/bookitems.service.ts");




var BookcontainerComponent = /** @class */ (function () {
    function BookcontainerComponent(route, bookItemsService) {
        this.route = route;
        this.bookItemsService = bookItemsService;
        this._pageDisplay = true;
        this._bookDispaly = false;
        this._collection = { count: 60, data: [] };
    }
    BookcontainerComponent.prototype.ngOnInit = function () {
        var book = this.route.snapshot.paramMap.get('book');
        this.getBookData(book);
    };
    BookcontainerComponent.prototype.getBookData = function (str) {
        var _this = this;
        this.bookItemsService.getBookData(str)
            .subscribe(function (data) {
            for (var i in data) {
                if (data[i]['name'] == str.toLocaleUpperCase()) {
                    _this._bookData = data[i];
                    if (_this._pageDisplay) {
                        _this.updatePaginationConfig();
                    }
                    break;
                }
            }
        });
    };
    BookcontainerComponent.prototype.updatePaginationConfig = function () {
        this._collection.count = this._bookData['page'].length;
        this._collection.data = this._bookData['page'];
        this._config = {
            itemsPerPage: 3,
            currentPage: 1,
            totalItems: this._collection.count
        };
    };
    BookcontainerComponent.prototype.pageChanged = function (event) {
        this._config.currentPage = event;
    };
    BookcontainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookcontainer',
            template: __webpack_require__(/*! ./bookcontainer.component.html */ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.html"),
            styles: [__webpack_require__(/*! ./bookcontainer.component.css */ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _bookservice_bookitems_service__WEBPACK_IMPORTED_MODULE_3__["BookitemsService"]])
    ], BookcontainerComponent);
    return BookcontainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalbook/booklist/booklist.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/booklist/booklist.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".booklist-footer{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    justify-content: space-around;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    align-content: center;\r\n    position: relative;\r\n    color: #d6f0f5;\r\n    width: 100%;\r\n    bottom: 0;\r\n    text-align: center;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZXZvdGlvbmFsYm9vay9ib29rbGlzdC9ib29rbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQWM7SUFBZCxjQUFjO0lBQ2QsNkJBQXVCO0lBQXZCLDhCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7R0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rldm90aW9uYWxib29rL2Jvb2tsaXN0L2Jvb2tsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2xpc3QtZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/devotionalbook/booklist/booklist.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/booklist/booklist.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\">\n<div class=\"book-items-list\" *ngIf=\"(bookItems)\">\n    <div *ngFor='let item of bookItems'>\n        <app-booklistitem [value]=\"item\"></app-booklistitem>\n    </div>\n</div>\n<div class=\"booklist-footer\" >Powered by devtrip developers and contributors © www.devtrip.com 2012-2019</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/devotionalbook/booklist/booklist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/devotionalbook/booklist/booklist.component.ts ***!
  \***********************************************************************/
/*! exports provided: BooklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooklistComponent", function() { return BooklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_bookitems_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookservice/bookitems.service */ "./src/app/modules/devotionalbook/bookservice/bookitems.service.ts");



var BooklistComponent = /** @class */ (function () {
    function BooklistComponent(_bookitemservice) {
        this._bookitemservice = _bookitemservice;
    }
    BooklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookitemservice.getBookItems()
            .subscribe(function (data) {
            _this.bookItems = data;
        });
    };
    BooklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booklist',
            template: __webpack_require__(/*! ./booklist.component.html */ "./src/app/modules/devotionalbook/booklist/booklist.component.html"),
            styles: [__webpack_require__(/*! ./booklist.component.css */ "./src/app/modules/devotionalbook/booklist/booklist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bookservice_bookitems_service__WEBPACK_IMPORTED_MODULE_2__["BookitemsService"]])
    ], BooklistComponent);
    return BooklistComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border-radius: 50%;\r\n    height: 30px;\r\n    width: 30px;\r\n    border: 3px solid;\r\n    border-color: lightgray;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n    border: 1px solid lightgrey;\r\n    background-color: white;\r\n  }\r\n  \r\n  tr {\r\n    padding: 10px;\r\n    position: relative;\r\n  }\r\n  \r\n  table td {\r\n    padding: 10px;\r\n    font-size: 0.95em;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n    color: lightslategrey;\r\n    vertical-align: top;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    position: relative;\r\n  }\r\n  \r\n  .item-heading{\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n  }\r\n  \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZXZvdGlvbmFsYm9vay9ib29rbGlzdC9ib29rbGlzdGl0ZW0vYm9va2xpc3RpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix3QkFBd0I7R0FDekI7O0VBRUQ7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZXZvdGlvbmFsYm9vay9ib29rbGlzdC9ib29rbGlzdGl0ZW0vYm9va2xpc3RpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICB0ciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"value\" (click)=\"bookClickHandler(value)\">\n    <table>\n        <tr>\n            <td></td>\n            <td style=\"width:90%\">\n                <div class=\"item-heading\">{{value.name}}</div>\n                <div class=\"item-content\">{{value.description}}</div>\n            </td>\n            <td>Author : {{value.author}}</td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BooklistitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooklistitemComponent", function() { return BooklistitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BooklistitemComponent = /** @class */ (function () {
    function BooklistitemComponent(router) {
        this.router = router;
    }
    BooklistitemComponent.prototype.ngOnInit = function () {
    };
    BooklistitemComponent.prototype.bookClickHandler = function (event) {
        this.router.navigate([this.router.routerState.snapshot.url + '/item/' + event.route]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BooklistitemComponent.prototype, "value", void 0);
    BooklistitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booklistitem',
            template: __webpack_require__(/*! ./booklistitem.component.html */ "./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.html"),
            styles: [__webpack_require__(/*! ./booklistitem.component.css */ "./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BooklistitemComponent);
    return BooklistitemComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalbook/bookservice/bookitems.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/bookservice/bookitems.service.ts ***!
  \*************************************************************************/
/*! exports provided: BookitemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookitemsService", function() { return BookitemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BookitemsService = /** @class */ (function () {
    function BookitemsService(_http) {
        this._http = _http;
        this._itemUrl = 'assets/json/books.json';
        this._bookPrefix = 'assets/books';
    }
    BookitemsService.prototype.getBookItems = function () {
        var _this = this;
        if (this._bookItems) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._bookItems);
        }
        else {
            return this._http.get(this._itemUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                _this._bookItems = data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('error with getting module info', [])));
        }
    };
    BookitemsService.prototype.getBookData = function (str) {
        var _this = this;
        if (this._bookData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._bookData);
        }
        else {
            return this._http.get(this._bookPrefix + '/' + str.toLowerCase() + '.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                _this._bookData = data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('error with getting module info', [])));
        }
    };
    /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
    BookitemsService.prototype.handleError = function (operation, result) {
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
    BookitemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BookitemsService);
    return BookitemsService;
}());



/***/ }),

/***/ "./src/app/modules/devotionalbook/devotionalbook-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/devotionalbook/devotionalbook-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DevotionalbookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalbookRoutingModule", function() { return DevotionalbookRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devotionalbook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalbook.component */ "./src/app/modules/devotionalbook/devotionalbook.component.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/modules/devotionalbook/booklist/booklist.component.ts");
/* harmony import */ var _bookcontainer_bookcontainer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookcontainer/bookcontainer.component */ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.ts");






var routes = [
    {
        path: "",
        component: _devotionalbook_component__WEBPACK_IMPORTED_MODULE_3__["DevotionalbookComponent"],
        data: {},
        children: [
            { path: "", component: _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_4__["BooklistComponent"] },
            { path: "item/:book", component: _bookcontainer_bookcontainer_component__WEBPACK_IMPORTED_MODULE_5__["BookcontainerComponent"] }
        ]
    }
];
var DevotionalbookRoutingModule = /** @class */ (function () {
    function DevotionalbookRoutingModule() {
    }
    DevotionalbookRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevotionalbookRoutingModule);
    return DevotionalbookRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/devotionalbook/devotionalbook.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/devotionalbook/devotionalbook.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".booklist-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    height: 100vh;\r\n    color: #d6f0f5;\r\n    overflow: visible;\r\n    overflow: auto; \r\n}\r\n\r\n.booklist-footer{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    justify-content: space-around;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    align-content: center;\r\n    position: relative;\r\n    color: #d6f0f5;\r\n    width: 100%;\r\n    bottom: 0;\r\n    text-align: center;\r\n  }\r\n\r\n.booklist-main {\r\n    padding-top: 10vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    justify-content: space-around;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.booklist-menu {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: right;\r\n            justify-content: right;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.booklist-menu-item {\r\n    width: 48%;\r\n    max-width: 200px;\r\n    position: relative;\r\n}\r\n\r\n.booklist-container{\r\n    padding-top: 10vh;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    min-height: 90vh;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZXZvdGlvbmFsYm9vay9kZXZvdGlvbmFsYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQWM7SUFBZCxjQUFjO0lBQ2QsNkJBQXVCO0lBQXZCLDhCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBdUI7SUFBdkIsOEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsMEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtHQUNwQjs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBYztJQUFkLGNBQWM7SUFDZCw2QkFBdUI7SUFBdkIsOEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsMEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBSUQ7SUFDSSxxQkFBYztJQUFkLGNBQWM7SUFDZCx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDBCQUFrQjtPQUFsQix1QkFBa0I7UUFBbEIsc0JBQWtCO1lBQWxCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUdEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFjO0lBQWQsY0FBYztJQUNkLDZCQUF1QjtJQUF2Qiw4QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZXZvdGlvbmFsYm9vay9kZXZvdGlvbmFsYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tsaXN0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxyXG59XHJcblxyXG4uYm9va2xpc3QtZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2Q2ZjBmNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbi5ib29rbGlzdC1tYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmJvb2tsaXN0LW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJvb2tsaXN0LW1lbnUtaXRlbSB7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5ib29rbGlzdC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/devotionalbook/devotionalbook.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/devotionalbook/devotionalbook.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"booklist-wrapper\">\n    <div class=\"booklist-menu\">\n      <div class=\"booklist-menu-item\">\n        <div class=\"button\" routerLink=\"/home\">\n          <span>Home</span>\n        </div>\n      </div>\n      <div class=\"booklist-menu-item\">\n        <div class=\"button\" routerLink=\"/devotional\">\n          <span>Devotional</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"booklist-container\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/modules/devotionalbook/devotionalbook.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/devotionalbook/devotionalbook.component.ts ***!
  \********************************************************************/
/*! exports provided: DevotionalbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalbookComponent", function() { return DevotionalbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevotionalbookComponent = /** @class */ (function () {
    function DevotionalbookComponent() {
    }
    DevotionalbookComponent.prototype.ngOnInit = function () {
    };
    DevotionalbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devotionalbook',
            template: __webpack_require__(/*! ./devotionalbook.component.html */ "./src/app/modules/devotionalbook/devotionalbook.component.html"),
            styles: [__webpack_require__(/*! ./devotionalbook.component.css */ "./src/app/modules/devotionalbook/devotionalbook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevotionalbookComponent);
    return DevotionalbookComponent;
}());



/***/ }),

/***/ "./src/app/modules/devotionalbook/devotionalbook.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/devotionalbook/devotionalbook.module.ts ***!
  \*****************************************************************/
/*! exports provided: DevotionalbookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevotionalbookModule", function() { return DevotionalbookModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _devotionalbook_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devotionalbook-routing.module */ "./src/app/modules/devotionalbook/devotionalbook-routing.module.ts");
/* harmony import */ var _devotionalbook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devotionalbook.component */ "./src/app/modules/devotionalbook/devotionalbook.component.ts");
/* harmony import */ var _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booklist/booklist.component */ "./src/app/modules/devotionalbook/booklist/booklist.component.ts");
/* harmony import */ var _bookcontainer_bookcontainer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookcontainer/bookcontainer.component */ "./src/app/modules/devotionalbook/bookcontainer/bookcontainer.component.ts");
/* harmony import */ var _booklist_booklistitem_booklistitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booklist/booklistitem/booklistitem.component */ "./src/app/modules/devotionalbook/booklist/booklistitem/booklistitem.component.ts");
/* harmony import */ var node_modules_1_ngx_pagination_dist_ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! node_modules-1/ngx-pagination/dist/ngx-pagination */ "./node_modules-1/ngx-pagination/dist/ngx-pagination.js");









var DevotionalbookModule = /** @class */ (function () {
    function DevotionalbookModule() {
    }
    DevotionalbookModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devotionalbook_component__WEBPACK_IMPORTED_MODULE_4__["DevotionalbookComponent"], _booklist_booklist_component__WEBPACK_IMPORTED_MODULE_5__["BooklistComponent"], _bookcontainer_bookcontainer_component__WEBPACK_IMPORTED_MODULE_6__["BookcontainerComponent"], _booklist_booklistitem_booklistitem_component__WEBPACK_IMPORTED_MODULE_7__["BooklistitemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devotionalbook_routing_module__WEBPACK_IMPORTED_MODULE_3__["DevotionalbookRoutingModule"],
                node_modules_1_ngx_pagination_dist_ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
            ]
        })
    ], DevotionalbookModule);
    return DevotionalbookModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-devotionalbook-devotionalbook-module.js.map