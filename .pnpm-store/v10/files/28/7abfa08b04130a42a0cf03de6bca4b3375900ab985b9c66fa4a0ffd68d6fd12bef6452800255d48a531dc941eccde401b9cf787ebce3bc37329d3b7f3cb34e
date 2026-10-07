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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _listener = require("../../lib/insights/listener");
var _utils = require("../../lib/utils");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var DefaultBanner = function DefaultBanner(param) {
    var banner = param.banner, classNames = param.classNames;
    if (!banner.image.urls[0].url) {
        return null;
    }
    return /*#__PURE__*/ (0, _preact.h)("aside", {
        className: (0, _instantsearchuicomponents.cx)(classNames.bannerRoot)
    }, banner.link ? /*#__PURE__*/ (0, _preact.h)("a", {
        className: (0, _instantsearchuicomponents.cx)(classNames.bannerLink),
        href: banner.link.url,
        target: banner.link.target
    }, /*#__PURE__*/ (0, _preact.h)("img", {
        className: (0, _instantsearchuicomponents.cx)(classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    })) : /*#__PURE__*/ (0, _preact.h)("img", {
        className: (0, _instantsearchuicomponents.cx)(classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    }));
};
var InfiniteHits = function InfiniteHits(param) {
    var results = param.results, hits = param.hits, insights = param.insights, bindEvent = param.bindEvent, sendEvent = param.sendEvent, hasShowPrevious = param.hasShowPrevious, showPrevious = param.showPrevious, showMore = param.showMore, isFirstPage = param.isFirstPage, isLastPage = param.isLastPage, cssClasses = param.cssClasses, templateProps = param.templateProps, banner = param.banner;
    var handleInsightsClick = (0, _listener.createInsightsEventHandler)({
        insights: insights,
        sendEvent: sendEvent
    });
    if (results.hits.length === 0) {
        return /*#__PURE__*/ (0, _preact.h)("div", {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.root, cssClasses.emptyRoot),
            onClick: handleInsightsClick
        }, banner && (templateProps.templates.banner ? /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
            templateKey: "banner",
            rootTagName: "fragment",
            data: {
                banner: banner,
                className: cssClasses.bannerRoot
            }
        })) : /*#__PURE__*/ (0, _preact.h)(DefaultBanner, {
            banner: banner,
            classNames: cssClasses
        })), /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
            templateKey: "empty",
            rootTagName: "fragment",
            data: results
        })));
    }
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: cssClasses.root
    }, hasShowPrevious && /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "showPreviousText",
        rootTagName: "button",
        rootProps: {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.loadPrevious, isFirstPage && cssClasses.disabledLoadPrevious),
            disabled: isFirstPage,
            onClick: showPrevious
        }
    })), banner && (templateProps.templates.banner ? /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "banner",
        rootTagName: "fragment",
        data: {
            banner: banner,
            className: cssClasses.bannerRoot
        }
    })) : /*#__PURE__*/ (0, _preact.h)(DefaultBanner, {
        banner: banner,
        classNames: cssClasses
    })), /*#__PURE__*/ (0, _preact.h)("ol", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item,
                onClick: function onClick(event) {
                    handleInsightsClick(event);
                    sendEvent('click:internal', hit, 'Hit Clicked');
                },
                onAuxClick: function onAuxClick(event) {
                    handleInsightsClick(event);
                    sendEvent('click:internal', hit, 'Hit Clicked');
                }
            },
            key: hit.objectID,
            data: _object_spread_props._(_object_spread._({}, hit), {
                get __hitIndex () {
                    (0, _utils.warning)(false, 'The `__hitIndex` property is deprecated. Use the absolute `__position` instead.');
                    return index;
                }
            }),
            bindEvent: bindEvent,
            sendEvent: sendEvent
        }));
    })), /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "showMoreText",
        rootTagName: "button",
        rootProps: {
            className: (0, _instantsearchuicomponents.cx)(cssClasses.loadMore, isLastPage && cssClasses.disabledLoadMore),
            disabled: isLastPage,
            onClick: showMore
        }
    })));
};
var _default = InfiniteHits;
