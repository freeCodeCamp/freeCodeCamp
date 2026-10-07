'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _utils = require("../../lib/utils");
var Paginator = /*#__PURE__*/ function() {
    function Paginator(params) {
        _class_call_check._(this, Paginator);
        _define_property._(this, "currentPage", void 0);
        _define_property._(this, "total", void 0);
        _define_property._(this, "padding", void 0);
        this.currentPage = params.currentPage;
        this.total = params.total;
        this.padding = params.padding;
    }
    _create_class._(Paginator, [
        {
            key: "pages",
            value: function pages() {
                var _this = this, total = _this.total, currentPage = _this.currentPage, padding = _this.padding;
                if (total === 0) return [
                    0
                ];
                var totalDisplayedPages = this.nbPagesDisplayed(padding, total);
                if (totalDisplayedPages === total) {
                    return (0, _utils.range)({
                        end: total
                    });
                }
                var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
                var paddingRight = totalDisplayedPages - paddingLeft;
                var first = currentPage - paddingLeft;
                var last = currentPage + paddingRight;
                return (0, _utils.range)({
                    start: first,
                    end: last
                });
            }
        },
        {
            key: "nbPagesDisplayed",
            value: function nbPagesDisplayed(padding, total) {
                return Math.min(2 * padding + 1, total);
            }
        },
        {
            key: "calculatePaddingLeft",
            value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
                if (current <= padding) {
                    return current;
                }
                if (current >= total - padding) {
                    return totalDisplayedPages - (total - current);
                }
                return padding;
            }
        },
        {
            key: "isLastPage",
            value: function isLastPage() {
                return this.currentPage >= this.total - 1;
            }
        },
        {
            key: "isFirstPage",
            value: function isFirstPage() {
                return this.currentPage <= 0;
            }
        }
    ]);
    return Paginator;
}();
var _default = Paginator;
