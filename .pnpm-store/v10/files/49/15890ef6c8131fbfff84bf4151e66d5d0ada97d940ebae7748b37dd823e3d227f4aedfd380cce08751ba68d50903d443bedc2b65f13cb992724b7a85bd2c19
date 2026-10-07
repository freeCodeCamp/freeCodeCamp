import { StandardWheelEvent } from '../../mouseEvent.js';
import { AbstractScrollbar } from './abstractScrollbar.js';
import { ARROW_IMG_SIZE } from './scrollbarArrow.js';
import { ScrollbarState } from './scrollbarState.js';
import { Codicon } from '../../../common/codicons.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HorizontalScrollbar extends AbstractScrollbar {
    constructor(scrollable, options, host) {
        const scrollDimensions = scrollable.getScrollDimensions();
        const scrollPosition = scrollable.getCurrentScrollPosition();
        super({
            lazyRender: options.lazyRender,
            host: host,
            scrollbarState: new ScrollbarState((options.horizontalHasArrows ? options.arrowSize : 0), (options.horizontal === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.horizontalScrollbarSize), (options.vertical === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.verticalScrollbarSize), scrollDimensions.width, scrollDimensions.scrollWidth, scrollPosition.scrollLeft),
            visibility: options.horizontal,
            extraScrollbarClassName: 'horizontal',
            scrollable: scrollable,
            scrollByPage: options.scrollByPage
        });
        if (options.horizontalHasArrows) {
            const arrowDelta = (options.arrowSize - ARROW_IMG_SIZE) / 2;
            const scrollbarDelta = (options.horizontalScrollbarSize - ARROW_IMG_SIZE) / 2;
            this._createArrow({
                className: 'scra',
                icon: Codicon.scrollbarButtonLeft,
                top: scrollbarDelta,
                left: arrowDelta,
                bottom: undefined,
                right: undefined,
                bgWidth: options.arrowSize,
                bgHeight: options.horizontalScrollbarSize,
                onActivate: () => this._host.onMouseWheel(new StandardWheelEvent(null, 1, 0)),
            });
            this._createArrow({
                className: 'scra',
                icon: Codicon.scrollbarButtonRight,
                top: scrollbarDelta,
                left: undefined,
                bottom: undefined,
                right: arrowDelta,
                bgWidth: options.arrowSize,
                bgHeight: options.horizontalScrollbarSize,
                onActivate: () => this._host.onMouseWheel(new StandardWheelEvent(null, -1, 0)),
            });
        }
        this._createSlider(Math.floor((options.horizontalScrollbarSize - options.horizontalSliderSize) / 2), 0, undefined, options.horizontalSliderSize);
    }
    _updateSlider(sliderSize, sliderPosition) {
        this.slider.setWidth(sliderSize);
        this.slider.setLeft(sliderPosition);
    }
    _renderDomNode(largeSize, smallSize) {
        this.domNode.setWidth(largeSize);
        this.domNode.setHeight(smallSize);
        this.domNode.setLeft(0);
        this.domNode.setBottom(0);
    }
    onDidScroll(e) {
        this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender;
        this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender;
        this._shouldRender = this._onElementSize(e.width) || this._shouldRender;
        return this._shouldRender;
    }
    _pointerDownRelativePosition(offsetX, offsetY) {
        return offsetX;
    }
    _sliderPointerPosition(e) {
        return e.pageX;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageY;
    }
    _updateScrollbarSize(size) {
        this.slider.setHeight(size);
    }
    writeScrollPosition(target, scrollPosition) {
        target.scrollLeft = scrollPosition;
    }
    updateOptions(options) {
        this.updateScrollbarSize(options.horizontal === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.horizontalScrollbarSize);
        this._scrollbarState.setOppositeScrollbarSize(options.vertical === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.verticalScrollbarSize);
        this._visibilityController.setVisibility(options.horizontal);
        this._scrollByPage = options.scrollByPage;
    }
}

export { HorizontalScrollbar };
