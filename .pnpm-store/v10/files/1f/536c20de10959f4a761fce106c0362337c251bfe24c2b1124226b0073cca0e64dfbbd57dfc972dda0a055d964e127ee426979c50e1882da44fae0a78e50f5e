import type { ComponentProps, MutableRef, RecommendItemComponentProps, RecordWithObjectID, Renderer, SendEventForHits } from '../types';
export type CarouselProps<TObject, TComponentProps extends Record<string, unknown> = Record<string, unknown>> = ComponentProps<'div'> & {
    listRef: MutableRef<HTMLOListElement | null>;
    nextButtonRef: MutableRef<HTMLButtonElement | null>;
    previousButtonRef: MutableRef<HTMLButtonElement | null>;
    carouselIdRef: MutableRef<string>;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    setCanScrollLeft: (canScrollLeft: boolean) => void;
    setCanScrollRight: (canScrollRight: boolean) => void;
    items: Array<RecordWithObjectID<TObject>>;
    itemComponent?: (props: RecommendItemComponentProps<RecordWithObjectID<TObject>> & TComponentProps) => JSX.Element;
    previousIconComponent?: () => JSX.Element;
    nextIconComponent?: () => JSX.Element;
    headerComponent?: (props: {
        canScrollLeft: boolean;
        canScrollRight: boolean;
        scrollLeft: () => void;
        scrollRight: () => void;
    }) => JSX.Element;
    showNavigation?: boolean;
    classNames?: Partial<CarouselClassNames>;
    translations?: Partial<CarouselTranslations>;
    sendEvent: SendEventForHits;
};
export type CarouselClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string | string[];
    /**
     * Class names to apply to the list element
     */
    list: string | string[];
    /**
     * Class names to apply to each item element
     */
    item: string | string[];
    /**
     * Class names to apply to both navigation elements
     */
    navigation: string | string[];
    /**
     * Class names to apply to the next navigation element
     */
    navigationNext: string | string[];
    /**
     * Class names to apply to the previous navigation element
     */
    navigationPrevious: string | string[];
};
export type CarouselTranslations = {
    /**
     * The label of the next navigation element
     */
    nextButtonLabel: string;
    /**
     * The title of the next navigation element
     */
    nextButtonTitle: string;
    /**
     * The label of the previous navigation element
     */
    previousButtonLabel: string;
    /**
     * The title of the previous navigation element
     */
    previousButtonTitle: string;
    /**
     * The label of the carousel
     */
    listLabel: string;
};
export declare function generateCarouselId(): string;
export declare function createCarouselComponent({ createElement, Fragment }: Renderer): <TObject extends Record<string, unknown>>(userProps: CarouselProps<TObject>) => JSX.Element | null;
