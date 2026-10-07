import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { createInsightsEventHandler } from '../../lib/insights/listener.js';
import Template from '../Template/Template.js';

var DefaultBanner = function DefaultBanner(param) {
    var banner = param.banner, classNames = param.classNames;
    if (!banner.image.urls[0].url) {
        return null;
    }
    return /*#__PURE__*/ h("aside", {
        className: cx(classNames.bannerRoot)
    }, banner.link ? /*#__PURE__*/ h("a", {
        className: cx(classNames.bannerLink),
        href: banner.link.url,
        target: banner.link.target
    }, /*#__PURE__*/ h("img", {
        className: cx(classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    })) : /*#__PURE__*/ h("img", {
        className: cx(classNames.bannerImage),
        src: banner.image.urls[0].url,
        alt: banner.image.title
    }));
};
var InfiniteHits = function InfiniteHits(param) {
    var results = param.results, hits = param.hits, insights = param.insights, bindEvent = param.bindEvent, sendEvent = param.sendEvent, hasShowPrevious = param.hasShowPrevious, showPrevious = param.showPrevious, showMore = param.showMore, isFirstPage = param.isFirstPage, isLastPage = param.isLastPage, cssClasses = param.cssClasses, templateProps = param.templateProps, banner = param.banner;
    var handleInsightsClick = createInsightsEventHandler({
        insights: insights,
        sendEvent: sendEvent
    });
    if (results.hits.length === 0) {
        return /*#__PURE__*/ h("div", {
            className: cx(cssClasses.root, cssClasses.emptyRoot),
            onClick: handleInsightsClick
        }, banner && (templateProps.templates.banner ? /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
            templateKey: "banner",
            rootTagName: "fragment",
            data: {
                banner: banner,
                className: cssClasses.bannerRoot
            }
        })) : /*#__PURE__*/ h(DefaultBanner, {
            banner: banner,
            classNames: cssClasses
        })), /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
            templateKey: "empty",
            rootTagName: "fragment",
            data: results
        })));
    }
    return /*#__PURE__*/ h("div", {
        className: cssClasses.root
    }, hasShowPrevious && /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "showPreviousText",
        rootTagName: "button",
        rootProps: {
            className: cx(cssClasses.loadPrevious, isFirstPage && cssClasses.disabledLoadPrevious),
            disabled: isFirstPage,
            onClick: showPrevious
        }
    })), banner && (templateProps.templates.banner ? /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "banner",
        rootTagName: "fragment",
        data: {
            banner: banner,
            className: cssClasses.bannerRoot
        }
    })) : /*#__PURE__*/ h(DefaultBanner, {
        banner: banner,
        classNames: cssClasses
    })), /*#__PURE__*/ h("ol", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
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
            data: _(_$1({}, hit), {
                get __hitIndex () {
                    return index;
                }
            }),
            bindEvent: bindEvent,
            sendEvent: sendEvent
        }));
    })), /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "showMoreText",
        rootTagName: "button",
        rootProps: {
            className: cx(cssClasses.loadMore, isLastPage && cssClasses.disabledLoadMore),
            disabled: isLastPage,
            onClick: showMore
        }
    })));
};

export { InfiniteHits as default };
