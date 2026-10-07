import type { Connector, TransformItems, CreateURL, WidgetRenderState } from '../../types';
export type BreadcrumbConnectorParamsItem = {
    /**
     * Label of the category or subcategory.
     */
    label: string;
    /**
     * Value of breadcrumb item.
     */
    value: string | null;
};
export type BreadcrumbConnectorParams = {
    /**
     * Attributes to use to generate the hierarchy of the breadcrumb.
     */
    attributes: string[];
    /**
     * Prefix path to use if the first level is not the root level.
     */
    rootPath?: string;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<BreadcrumbConnectorParamsItem>;
    /**
     * The level separator used in the records.
     *
     * @default '>'
     */
    separator?: string;
};
export type BreadcrumbRenderState = {
    /**
     * Creates the URL for a single item name in the list.
     */
    createURL: CreateURL<BreadcrumbConnectorParamsItem['value']>;
    /**
     * Array of objects defining the different values and labels.
     */
    items: BreadcrumbConnectorParamsItem[];
    /**
     * Sets the path of the hierarchical filter and triggers a new search.
     */
    refine: (value: BreadcrumbConnectorParamsItem['value']) => void;
    /**
     * True if refinement can be applied.
     */
    canRefine: boolean;
};
export type BreadcrumbWidgetDescription = {
    $$type: 'ais.breadcrumb';
    renderState: BreadcrumbRenderState;
    indexRenderState: {
        breadcrumb: {
            [rootAttribute: string]: WidgetRenderState<BreadcrumbRenderState, BreadcrumbConnectorParams>;
        };
    };
};
export type BreadcrumbConnector = Connector<BreadcrumbWidgetDescription, BreadcrumbConnectorParams>;
declare const connectBreadcrumb: BreadcrumbConnector;
export default connectBreadcrumb;
