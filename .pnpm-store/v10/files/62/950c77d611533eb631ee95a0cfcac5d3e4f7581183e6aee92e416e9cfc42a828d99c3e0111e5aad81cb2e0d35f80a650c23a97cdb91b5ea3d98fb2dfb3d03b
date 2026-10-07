'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createStickToBottom", {
    enumerable: true,
    get: function() {
        return createStickToBottom;
    }
});
var _instanceof = require("@swc/helpers/_/_instanceof");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _type_of = require("@swc/helpers/_/_type_of");
var DEFAULT_SPRING_ANIMATION = {
    /**
   * A value from 0 to 1, on how much to damp the animation.
   * 0 means no damping, 1 means full damping.
   *
   * @default 0.7
   */ damping: 0.7,
    /**
   * The stiffness of how fast/slow the animation gets up to speed.
   *
   * @default 0.05
   */ stiffness: 0.05,
    /**
   * The inertial mass associated with the animation.
   * Higher numbers make the animation slower.
   *
   * @default 1.25
   */ mass: 1.25
};
var STICK_TO_BOTTOM_OFFSET_PX = 70;
var SIXTY_FPS_INTERVAL_MS = 1000 / 60;
var RETAIN_ANIMATION_DURATION_MS = 350;
var mouseDown = false;
if (typeof window !== 'undefined') {
    var _window_document, _window_document1, _window_document2;
    (_window_document = window.document) === null || _window_document === void 0 ? void 0 : _window_document.addEventListener('mousedown', function() {
        mouseDown = true;
    });
    (_window_document1 = window.document) === null || _window_document1 === void 0 ? void 0 : _window_document1.addEventListener('mouseup', function() {
        mouseDown = false;
    });
    (_window_document2 = window.document) === null || _window_document2 === void 0 ? void 0 : _window_document2.addEventListener('click', function() {
        mouseDown = false;
    });
}
function createStickToBottom(param) {
    var useCallback = param.useCallback, useEffect = param.useEffect, useMemo = param.useMemo, useRef = param.useRef, useState = param.useState;
    return function useStickToBottom() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _useState = _sliced_to_array._(useState(false), 2), escapedFromLock = _useState[0], updateEscapedFromLock = _useState[1];
        var _useState1 = _sliced_to_array._(useState(options.initial !== false), 2), isAtBottom = _useState1[0], updateIsAtBottom = _useState1[1];
        var _useState2 = _sliced_to_array._(useState(false), 2), isNearBottom = _useState2[0], setIsNearBottom = _useState2[1];
        var optionsRef = useRef(null);
        optionsRef.current = options;
        // Create refs early so they can be used in other hooks
        var scrollRef = useRef(null);
        var contentRef = useRef(null);
        var isSelecting = useCallback(function() {
            var _scrollRef_current;
            if (!mouseDown) {
                return false;
            }
            if (typeof window === 'undefined') {
                return false;
            }
            var selection = window.getSelection();
            if (!selection || !selection.rangeCount) {
                return false;
            }
            var range = selection.getRangeAt(0);
            return range.commonAncestorContainer.contains(scrollRef.current) || ((_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.contains(range.commonAncestorContainer));
        }, []);
        // biome-ignore lint/correctness/useExhaustiveDependencies: state is intentionally stable
        var state = useMemo(function() {
            var lastCalculation;
            return {
                escapedFromLock: escapedFromLock,
                isAtBottom: isAtBottom,
                resizeDifference: 0,
                accumulated: 0,
                velocity: 0,
                get scrollTop () {
                    var _ref;
                    var _scrollRef_current;
                    return (_ref = (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollTop) !== null && _ref !== void 0 ? _ref : 0;
                },
                set scrollTop (scrollTop){
                    if (scrollRef.current) {
                        scrollRef.current.scrollTop = scrollTop;
                        state.ignoreScrollToTop = scrollRef.current.scrollTop;
                    }
                },
                get targetScrollTop () {
                    if (!scrollRef.current || !contentRef.current) {
                        return 0;
                    }
                    return scrollRef.current.scrollHeight - 1 - scrollRef.current.clientHeight;
                },
                get calculatedTargetScrollTop () {
                    if (!scrollRef.current || !contentRef.current) {
                        return 0;
                    }
                    var targetScrollTop = this.targetScrollTop;
                    if (!optionsRef.current.targetScrollTop) {
                        return targetScrollTop;
                    }
                    if ((lastCalculation === null || lastCalculation === void 0 ? void 0 : lastCalculation.targetScrollTop) === targetScrollTop) {
                        return lastCalculation.calculatedScrollTop;
                    }
                    var calculatedScrollTop = Math.max(Math.min(optionsRef.current.targetScrollTop(targetScrollTop, {
                        scrollElement: scrollRef.current,
                        contentElement: contentRef.current
                    }), targetScrollTop), 0);
                    lastCalculation = {
                        targetScrollTop: targetScrollTop,
                        calculatedScrollTop: calculatedScrollTop
                    };
                    requestAnimationFrame(function() {
                        lastCalculation = undefined;
                    });
                    return calculatedScrollTop;
                },
                get scrollDifference () {
                    return this.calculatedTargetScrollTop - this.scrollTop;
                },
                get isNearBottom () {
                    return this.scrollDifference <= STICK_TO_BOTTOM_OFFSET_PX;
                }
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        var setIsAtBottom = useCallback(function(value) {
            state.isAtBottom = value;
            updateIsAtBottom(value);
        }, [
            state
        ]);
        var setEscapedFromLock = useCallback(function(value) {
            state.escapedFromLock = value;
            updateEscapedFromLock(value);
        }, [
            state
        ]);
        var scrollToBottom = useCallback(function() {
            var scrollOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _state_animation;
            if (typeof scrollOptions === 'string') {
                scrollOptions = {
                    animation: scrollOptions
                };
            }
            if (!scrollOptions.preserveScrollPosition) {
                setIsAtBottom(true);
            }
            var waitElapsed = Date.now() + (Number(scrollOptions.wait) || 0);
            var behavior = mergeAnimations(optionsRef.current, scrollOptions.animation);
            var _scrollOptions_ignoreEscapes = scrollOptions.ignoreEscapes, ignoreEscapes = _scrollOptions_ignoreEscapes === void 0 ? false : _scrollOptions_ignoreEscapes;
            var durationElapsed;
            var startTarget = state.calculatedTargetScrollTop;
            if (_instanceof._(scrollOptions.duration, Promise)) {
                scrollOptions.duration.then(function() {
                    durationElapsed = Date.now();
                }, function() {
                    durationElapsed = Date.now();
                });
            } else {
                var _scrollOptions_duration;
                durationElapsed = waitElapsed + ((_scrollOptions_duration = scrollOptions.duration) !== null && _scrollOptions_duration !== void 0 ? _scrollOptions_duration : 0);
            }
            var next = function next1() {
                var promise = new Promise(requestAnimationFrame).then(function() {
                    var _state_lastTick, _state;
                    if (!state.isAtBottom) {
                        state.animation = undefined;
                        return false;
                    }
                    var scrollTop1 = state.scrollTop;
                    var tick = performance.now();
                    var tickDelta = (tick - ((_state_lastTick = state.lastTick) !== null && _state_lastTick !== void 0 ? _state_lastTick : tick)) / SIXTY_FPS_INTERVAL_MS;
                    (_state = state).animation || (_state.animation = {
                        behavior: behavior,
                        promise: promise,
                        ignoreEscapes: ignoreEscapes
                    });
                    if (state.animation.behavior === behavior) {
                        state.lastTick = tick;
                    }
                    if (isSelecting()) {
                        return next();
                    }
                    if (waitElapsed > Date.now()) {
                        return next();
                    }
                    if (scrollTop1 < Math.min(startTarget, state.calculatedTargetScrollTop)) {
                        var _state_animation;
                        if (((_state_animation = state.animation) === null || _state_animation === void 0 ? void 0 : _state_animation.behavior) === behavior) {
                            if (behavior === 'instant') {
                                state.scrollTop = state.calculatedTargetScrollTop;
                                return next();
                            }
                            state.velocity = (behavior.damping * state.velocity + behavior.stiffness * state.scrollDifference) / behavior.mass;
                            state.accumulated += state.velocity * tickDelta;
                            state.scrollTop += state.accumulated;
                            if (state.scrollTop !== scrollTop1) {
                                state.accumulated = 0;
                            }
                        }
                        return next();
                    }
                    if (durationElapsed > Date.now()) {
                        startTarget = state.calculatedTargetScrollTop;
                        return next();
                    }
                    state.animation = undefined;
                    /**
             * If we're still below the target, then queue
             * up another scroll to the bottom with the last
             * requested animatino.
             */ if (state.scrollTop < state.calculatedTargetScrollTop) {
                        return scrollToBottom({
                            animation: mergeAnimations(optionsRef.current, optionsRef.current.resize),
                            ignoreEscapes: ignoreEscapes,
                            duration: Math.max(0, durationElapsed - Date.now()) || undefined
                        });
                    }
                    return state.isAtBottom;
                });
                return promise.then(function(result) {
                    requestAnimationFrame(function() {
                        if (!state.animation) {
                            state.lastTick = undefined;
                            state.velocity = 0;
                        }
                    });
                    return result;
                });
            };
            if (scrollOptions.wait !== true) {
                state.animation = undefined;
            }
            if (((_state_animation = state.animation) === null || _state_animation === void 0 ? void 0 : _state_animation.behavior) === behavior) {
                return state.animation.promise;
            }
            return next();
        }, [
            setIsAtBottom,
            isSelecting,
            state
        ]);
        var stopScroll = useCallback(function() {
            setEscapedFromLock(true);
            setIsAtBottom(false);
        }, [
            setEscapedFromLock,
            setIsAtBottom
        ]);
        var handleScroll = useCallback(function(param) {
            var target = param.target;
            if (target !== scrollRef.current) {
                return;
            }
            var scrollTop1 = state.scrollTop, ignoreScrollToTop = state.ignoreScrollToTop;
            var _state_lastScrollTop = state.lastScrollTop, lastScrollTop = _state_lastScrollTop === void 0 ? scrollTop1 : _state_lastScrollTop;
            state.lastScrollTop = scrollTop1;
            state.ignoreScrollToTop = undefined;
            if (ignoreScrollToTop && ignoreScrollToTop > scrollTop1) {
                /**
           * When the user scrolls up while the animation plays, the `scrollTop` may
           * not come in separate events; if this happens, to make sure `isScrollingUp`
           * is correct, set the lastScrollTop to the ignored event.
           */ lastScrollTop = ignoreScrollToTop;
            }
            setIsNearBottom(state.isNearBottom);
            /**
         * Scroll events may come before a ResizeObserver event,
         * so in order to ignore resize events correctly we use a
         * timeout.
         *
         * @see https://github.com/WICG/resize-observer/issues/25#issuecomment-248757228
         */ setTimeout(function() {
                var _state_animation;
                /**
           * When theres a resize difference ignore the resize event.
           */ if (state.resizeDifference || scrollTop1 === ignoreScrollToTop) {
                    return;
                }
                if (isSelecting()) {
                    setEscapedFromLock(true);
                    setIsAtBottom(false);
                    return;
                }
                var isScrollingDown = scrollTop1 > lastScrollTop;
                var isScrollingUp = scrollTop1 < lastScrollTop;
                if ((_state_animation = state.animation) === null || _state_animation === void 0 ? void 0 : _state_animation.ignoreEscapes) {
                    state.scrollTop = lastScrollTop;
                    return;
                }
                if (isScrollingUp) {
                    setEscapedFromLock(true);
                    setIsAtBottom(false);
                }
                if (isScrollingDown) {
                    setEscapedFromLock(false);
                }
                if (!state.escapedFromLock && state.isNearBottom) {
                    setIsAtBottom(true);
                }
            }, 1);
        }, [
            setEscapedFromLock,
            setIsAtBottom,
            isSelecting,
            state
        ]);
        var handleWheel = useCallback(function(param) {
            var target = param.target, deltaY = param.deltaY;
            var _state_animation;
            var element = target;
            while(![
                'scroll',
                'auto'
            ].includes(getComputedStyle(element).overflow)){
                if (!element.parentElement) {
                    return;
                }
                element = element.parentElement;
            }
            /**
         * The browser may cancel the scrolling from the mouse wheel
         * if we update it from the animation in meantime.
         * To prevent this, always escape when the wheel is scrolled up.
         */ if (element === scrollRef.current && deltaY < 0 && scrollRef.current.scrollHeight > scrollRef.current.clientHeight && !((_state_animation = state.animation) === null || _state_animation === void 0 ? void 0 : _state_animation.ignoreEscapes)) {
                setEscapedFromLock(true);
                setIsAtBottom(false);
            }
        }, [
            setEscapedFromLock,
            setIsAtBottom,
            state
        ]);
        // Attach scroll and wheel event listeners
        useEffect(function() {
            var scroll = scrollRef.current;
            if (!scroll) {
                return undefined;
            }
            scroll.addEventListener('scroll', handleScroll, {
                passive: true
            });
            scroll.addEventListener('wheel', handleWheel, {
                passive: true
            });
            return function() {
                scroll.removeEventListener('scroll', handleScroll);
                scroll.removeEventListener('wheel', handleWheel);
            };
        }, [
            handleScroll,
            handleWheel
        ]);
        // Attach ResizeObserver to content element
        useEffect(function() {
            var content = contentRef.current;
            if (!content) {
                return undefined;
            }
            var previousHeight;
            var resizeObserver = new ResizeObserver(function(param) {
                var _param = _sliced_to_array._(param, 1), entry = _param[0];
                var height = entry.contentRect.height;
                var difference = height - (previousHeight !== null && previousHeight !== void 0 ? previousHeight : height);
                state.resizeDifference = difference;
                /**
         * Sometimes the browser can overscroll past the target,
         * so check for this and adjust appropriately.
         */ if (state.scrollTop > state.targetScrollTop) {
                    state.scrollTop = state.targetScrollTop;
                }
                setIsNearBottom(state.isNearBottom);
                if (difference >= 0) {
                    /**
           * If it's a positive resize, scroll to the bottom when
           * we're already at the bottom.
           */ var animation = mergeAnimations(optionsRef.current, previousHeight ? optionsRef.current.resize : optionsRef.current.initial);
                    scrollToBottom({
                        animation: animation,
                        wait: true,
                        preserveScrollPosition: true,
                        duration: animation === 'instant' ? undefined : RETAIN_ANIMATION_DURATION_MS
                    });
                } else if (state.isNearBottom) {
                    /**
           * Else if it's a negative resize, check if we're near the bottom
           * if we are want to un-escape from the lock, because the resize
           * could have caused the container to be at the bottom.
           */ setEscapedFromLock(false);
                    setIsAtBottom(true);
                }
                previousHeight = height;
                /**
         * Reset the resize difference after the scroll event
         * has fired. Requires a rAF to wait for the scroll event,
         * and a setTimeout to wait for the other timeout we have in
         * resizeObserver in case the scroll event happens after the
         * resize event.
         */ requestAnimationFrame(function() {
                    setTimeout(function() {
                        if (state.resizeDifference === difference) {
                            state.resizeDifference = 0;
                        }
                    }, 1);
                });
            });
            resizeObserver.observe(content);
            state.resizeObserver = resizeObserver;
            return function() {
                resizeObserver.disconnect();
                state.resizeObserver = undefined;
            };
        }, [
            state,
            setIsNearBottom,
            setEscapedFromLock,
            setIsAtBottom,
            scrollToBottom
        ]);
        return {
            contentRef: contentRef,
            scrollRef: scrollRef,
            scrollToBottom: scrollToBottom,
            stopScroll: stopScroll,
            isAtBottom: isAtBottom || isNearBottom,
            isNearBottom: isNearBottom,
            escapedFromLock: escapedFromLock,
            state: state
        };
    };
}
var animationCache = new Map();
function mergeAnimations() {
    for(var _len = arguments.length, animations = new Array(_len), _key = 0; _key < _len; _key++){
        animations[_key] = arguments[_key];
    }
    var result = _object_spread._({}, DEFAULT_SPRING_ANIMATION);
    var instant = false;
    animations.forEach(function(animation) {
        var _animation_damping, _animation_stiffness, _animation_mass;
        if (animation === 'instant') {
            instant = true;
            return;
        }
        if ((typeof animation === "undefined" ? "undefined" : _type_of._(animation)) !== 'object') {
            return;
        }
        instant = false;
        result.damping = (_animation_damping = animation.damping) !== null && _animation_damping !== void 0 ? _animation_damping : result.damping;
        result.stiffness = (_animation_stiffness = animation.stiffness) !== null && _animation_stiffness !== void 0 ? _animation_stiffness : result.stiffness;
        result.mass = (_animation_mass = animation.mass) !== null && _animation_mass !== void 0 ? _animation_mass : result.mass;
    });
    var key = JSON.stringify(result);
    if (!animationCache.has(key)) {
        animationCache.set(key, Object.freeze(result));
    }
    return instant ? 'instant' : animationCache.get(key);
}
