import { _ as _$1 } from '@swc/helpers/esm/_class_call_check.js';
import { _ } from '@swc/helpers/esm/_create_class.js';
import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { range } from '../../lib/utils/range.js';

var Paginator = /*#__PURE__*/ function() {
    function Paginator(params) {
        _$1(this, Paginator);
        _$2(this, "currentPage", void 0);
        _$2(this, "total", void 0);
        _$2(this, "padding", void 0);
        this.currentPage = params.currentPage;
        this.total = params.total;
        this.padding = params.padding;
    }
    _(Paginator, [
        {
            key: "pages",
            value: function pages() {
                var _this = this, total = _this.total, currentPage = _this.currentPage, padding = _this.padding;
                if (total === 0) return [
                    0
                ];
                var totalDisplayedPages = this.nbPagesDisplayed(padding, total);
                if (totalDisplayedPages === total) {
                    return range({
                        end: total
                    });
                }
                var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
                var paddingRight = totalDisplayedPages - paddingLeft;
                var first = currentPage - paddingLeft;
                var last = currentPage + paddingRight;
                return range({
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

export { Paginator as default };
