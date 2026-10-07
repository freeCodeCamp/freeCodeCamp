import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h, Fragment } from 'preact';
import Template from '../Template/Template.js';
import GeoSearchButton from './GeoSearchButton.js';
import GeoSearchToggle from './GeoSearchToggle.js';

var GeoSearchControls = function GeoSearchControls(param) {
    var cssClasses = param.cssClasses, enableRefine = param.enableRefine, enableRefineControl = param.enableRefineControl, enableClearMapRefinement = param.enableClearMapRefinement, isRefineOnMapMove = param.isRefineOnMapMove, isRefinedWithMap = param.isRefinedWithMap, hasMapMoveSinceLastRefine = param.hasMapMoveSinceLastRefine, onRefineToggle = param.onRefineToggle, onRefineClick = param.onRefineClick, onClearClick = param.onClearClick, templateProps = param.templateProps;
    return /*#__PURE__*/ h(Fragment, null, enableRefine && /*#__PURE__*/ h("div", null, enableRefineControl && /*#__PURE__*/ h("div", {
        className: cssClasses.control
    }, isRefineOnMapMove || !hasMapMoveSinceLastRefine ? /*#__PURE__*/ h(GeoSearchToggle, {
        classNameLabel: cx(cssClasses.label, isRefineOnMapMove && cssClasses.selectedLabel),
        classNameInput: cssClasses.input,
        checked: isRefineOnMapMove,
        onToggle: onRefineToggle
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "toggle",
        rootTagName: "span"
    }))) : /*#__PURE__*/ h(GeoSearchButton, {
        className: cssClasses.redo,
        disabled: !hasMapMoveSinceLastRefine,
        onClick: onRefineClick
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "redo",
        rootTagName: "span"
    })))), !enableRefineControl && !isRefineOnMapMove && /*#__PURE__*/ h("div", {
        className: cssClasses.control
    }, /*#__PURE__*/ h(GeoSearchButton, {
        className: cx(cssClasses.redo, !hasMapMoveSinceLastRefine && cssClasses.disabledRedo),
        disabled: !hasMapMoveSinceLastRefine,
        onClick: onRefineClick
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "redo",
        rootTagName: "span"
    })))), enableClearMapRefinement && isRefinedWithMap && /*#__PURE__*/ h(GeoSearchButton, {
        className: cssClasses.reset,
        onClick: onClearClick
    }, /*#__PURE__*/ h(Template, _(_$1({}, templateProps), {
        templateKey: "reset",
        rootTagName: "span"
    })))));
};

export { GeoSearchControls as default };
