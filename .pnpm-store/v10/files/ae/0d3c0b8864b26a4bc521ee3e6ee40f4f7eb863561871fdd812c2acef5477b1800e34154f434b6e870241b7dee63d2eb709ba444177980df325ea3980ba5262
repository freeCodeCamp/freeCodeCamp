export * from './utils';
type ScrollDirection = 'forward' | 'backward';
type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';
type ScrollBehavior = 'auto' | 'smooth';
export interface ScrollToOptions {
    align?: ScrollAlignment;
    behavior?: ScrollBehavior;
}
type ScrollToOffsetOptions = ScrollToOptions;
type ScrollToIndexOptions = ScrollToOptions;
export interface Range {
    startIndex: number;
    endIndex: number;
    overscan: number;
    count: number;
}
type Key = number | string;
export interface VirtualItem {
    key: Key;
    index: number;
    start: number;
    end: number;
    size: number;
    lane: number;
}
interface Rect {
    width: number;
    height: number;
}
export declare const defaultKeyExtractor: (index: number) => number;
export declare const defaultRangeExtractor: (range: Range) => number[];
export declare const observeElementRect: <T extends Element>(instance: Virtualizer<T, any>, cb: (rect: Rect) => void) => (() => void) | undefined;
export declare const observeWindowRect: (instance: Virtualizer<Window, any>, cb: (rect: Rect) => void) => (() => void) | undefined;
export declare const observeElementOffset: <T extends Element>(instance: Virtualizer<T, any>, cb: (offset: number) => void) => (() => void) | undefined;
export declare const observeWindowOffset: (instance: Virtualizer<Window, any>, cb: (offset: number) => void) => (() => void) | undefined;
export declare const measureElement: <TItemElement extends Element>(element: TItemElement, entry: ResizeObserverEntry | undefined, instance: Virtualizer<any, TItemElement>) => number;
export declare const windowScroll: <T extends Window>(offset: number, { adjustments, behavior, }: {
    adjustments?: number | undefined;
    behavior?: ScrollBehavior | undefined;
}, instance: Virtualizer<T, any>) => void;
export declare const elementScroll: <T extends Element>(offset: number, { adjustments, behavior, }: {
    adjustments?: number | undefined;
    behavior?: ScrollBehavior | undefined;
}, instance: Virtualizer<T, any>) => void;
export interface VirtualizerOptions<TScrollElement extends Element | Window, TItemElement extends Element> {
    count: number;
    getScrollElement: () => TScrollElement | null;
    estimateSize: (index: number) => number;
    scrollToFn: (offset: number, options: {
        adjustments?: number;
        behavior?: ScrollBehavior;
    }, instance: Virtualizer<TScrollElement, TItemElement>) => void;
    observeElementRect: (instance: Virtualizer<TScrollElement, TItemElement>, cb: (rect: Rect) => void) => void | (() => void);
    observeElementOffset: (instance: Virtualizer<TScrollElement, TItemElement>, cb: (offset: number) => void) => void | (() => void);
    debug?: any;
    initialRect?: Rect;
    onChange?: (instance: Virtualizer<TScrollElement, TItemElement>, sync: boolean) => void;
    measureElement?: (element: TItemElement, entry: ResizeObserverEntry | undefined, instance: Virtualizer<TScrollElement, TItemElement>) => number;
    overscan?: number;
    horizontal?: boolean;
    paddingStart?: number;
    paddingEnd?: number;
    scrollPaddingStart?: number;
    scrollPaddingEnd?: number;
    initialOffset?: number;
    getItemKey?: (index: number) => Key;
    rangeExtractor?: (range: Range) => number[];
    scrollMargin?: number;
    scrollingDelay?: number;
    indexAttribute?: string;
    initialMeasurementsCache?: VirtualItem[];
    lanes?: number;
}
export declare class Virtualizer<TScrollElement extends Element | Window, TItemElement extends Element> {
    private unsubs;
    options: Required<VirtualizerOptions<TScrollElement, TItemElement>>;
    scrollElement: TScrollElement | null;
    isScrolling: boolean;
    private isScrollingTimeoutId;
    private scrollToIndexTimeoutId;
    measurementsCache: VirtualItem[];
    private itemSizeCache;
    private pendingMeasuredCacheIndexes;
    scrollRect: Rect;
    scrollOffset: number;
    scrollDirection: ScrollDirection | null;
    private scrollAdjustments;
    measureElementCache: Map<Key, TItemElement>;
    private observer;
    range: {
        startIndex: number;
        endIndex: number;
    } | null;
    constructor(opts: VirtualizerOptions<TScrollElement, TItemElement>);
    setOptions: (opts: VirtualizerOptions<TScrollElement, TItemElement>) => void;
    private notify;
    private maybeNotify;
    private cleanup;
    _didMount: () => () => void;
    _willUpdate: () => void;
    private getSize;
    private memoOptions;
    private getFurthestMeasurement;
    private getMeasurements;
    calculateRange: () => {
        startIndex: number;
        endIndex: number;
    } | null;
    private getIndexes;
    indexFromElement: (node: TItemElement) => number;
    private _measureElement;
    resizeItem: (item: VirtualItem, size: number) => void;
    measureElement: (node: TItemElement | null) => void;
    getVirtualItems: () => VirtualItem[];
    getVirtualItemForOffset: (offset: number) => VirtualItem;
    getOffsetForAlignment: (toOffset: number, align: ScrollAlignment) => number;
    getOffsetForIndex: (index: number, align?: ScrollAlignment) => readonly [number, "auto"] | readonly [number, "start" | "center" | "end"];
    private isDynamicMode;
    private cancelScrollToIndex;
    scrollToOffset: (toOffset: number, { align, behavior }?: ScrollToOffsetOptions) => void;
    scrollToIndex: (index: number, { align: initialAlign, behavior }?: ScrollToIndexOptions) => void;
    scrollBy: (delta: number, { behavior }?: ScrollToOffsetOptions) => void;
    getTotalSize: () => number;
    private _scrollToOffset;
    measure: () => void;
}
