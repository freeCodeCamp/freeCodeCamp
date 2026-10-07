import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { createCarouselComponent, generateCarouselId } from 'instantsearch-ui-components';
import React, { createElement, Fragment, useState, useRef } from 'react';

var CarouselUiComponent = createCarouselComponent({
    createElement: createElement,
    Fragment: Fragment
});
function Carousel(props) {
    var _useState = _(useState(false), 2), canScrollLeft = _useState[0], setCanScrollLeft = _useState[1];
    var _useState1 = _(useState(true), 2), canScrollRight = _useState1[0], setCanScrollRight = _useState1[1];
    var carouselRefs = {
        listRef: useRef(null),
        nextButtonRef: useRef(null),
        previousButtonRef: useRef(null),
        carouselIdRef: useRef(generateCarouselId()),
        canScrollLeft: canScrollLeft,
        canScrollRight: canScrollRight,
        setCanScrollLeft: setCanScrollLeft,
        setCanScrollRight: setCanScrollRight
    };
    return /*#__PURE__*/ React.createElement(CarouselUiComponent, _$1({}, carouselRefs, props));
}

export { Carousel };
