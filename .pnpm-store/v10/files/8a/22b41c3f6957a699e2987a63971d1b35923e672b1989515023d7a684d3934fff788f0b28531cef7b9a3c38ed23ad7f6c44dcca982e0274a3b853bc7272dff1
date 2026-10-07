import type { SendEventForHits } from '.';
export type RecommendClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element without results
     */
    emptyRoot: string;
    /**
     * Class names to apply to the title element
     */
    title: string;
    /**
     * Class names to apply to the container element
     */
    container: string;
    /**
     * Class names to apply to the list element
     */
    list: string;
    /**
     * Class names to apply to each item element
     */
    item: string;
};
export type RecommendTranslations = {
    /**
     * The title of the recommendation section
     */
    title: string;
    /**
     * The label of the horizontal slider
     */
    sliderLabel: string;
};
export type RecommendLayoutProps<TItem extends RecordWithObjectID, TClassNames extends Record<string, string>> = {
    classNames: TClassNames;
    itemComponent: <TComponentProps extends Record<string, unknown> = Record<string, unknown>>(props: RecommendItemComponentProps<RecordWithObjectID<TItem>> & TComponentProps) => JSX.Element;
    items: TItem[];
    sendEvent: SendEventForHits;
};
export type RecommendComponentProps<TObject, TComponentProps extends Record<string, unknown> = Record<string, unknown>> = {
    itemComponent?: (props: RecommendItemComponentProps<RecordWithObjectID<TObject>> & TComponentProps) => JSX.Element;
    items: Array<RecordWithObjectID<TObject>>;
    classNames?: Partial<RecommendClassNames>;
    emptyComponent?: (props: TComponentProps) => JSX.Element;
    headerComponent?: (props: RecommendInnerComponentProps<TObject> & TComponentProps) => JSX.Element;
    status: RecommendStatus;
    translations?: Partial<RecommendTranslations>;
    sendEvent: SendEventForHits;
    layout?: (props: RecommendLayoutProps<RecordWithObjectID<TObject>, Record<string, string>> & TComponentProps) => JSX.Element;
};
export type RecommendInnerComponentProps<TObject> = {
    classNames: Partial<RecommendClassNames>;
    items: TObject[];
    translations: Partial<RecommendTranslations>;
};
export type RecordWithObjectID<TObject = Record<string, unknown>> = TObject & {
    objectID: string;
    __position: number;
    __queryID?: string;
};
export type RecommendItemComponentProps<TObject> = {
    item: TObject;
    sendEvent: SendEventForHits;
    onClick?: () => void;
    onAuxClick?: () => void;
};
export type RecommendStatus = 'idle' | 'loading' | 'stalled' | 'error';
