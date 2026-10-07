import type { Connector, CreateURL, WidgetRenderState } from '../../types';
type BuiltInSendEventForToggle = (eventType: string, isRefined: boolean, eventName?: string) => void;
type CustomSendEventForToggle = (customPayload: any) => void;
export type SendEventForToggle = BuiltInSendEventForToggle & CustomSendEventForToggle;
export type ToggleRefinementValue = {
    /**
     * Whether this option is enabled.
     */
    isRefined: boolean;
    /**
     * Number of result if this option is toggled.
     */
    count: number | null;
};
export type ToggleRefinementConnectorParams = {
    /**
     * Name of the attribute for faceting (e.g., "free_shipping").
     */
    attribute: string;
    /**
     * Value to filter on when toggled.
     * @default "true"
     */
    on?: FacetValue | FacetValue[];
    /**
     * Value to filter on when not toggled.
     */
    off?: FacetValue | FacetValue[];
};
type FacetValue = string | boolean | number;
export type ToggleRefinementRenderState = {
    /** The current toggle value */
    value: {
        /**
         * The attribute name of this toggle.
         */
        name: string;
        /**
         * Whether the current option is "on" (true) or "off" (false)
         */
        isRefined: boolean;
        /**
         * Number of results if this option is toggled.
         */
        count: number | null;
        /**
         * Information about the "on" toggle.
         */
        onFacetValue: ToggleRefinementValue;
        /**
         * Information about the "off" toggle.
         */
        offFacetValue: ToggleRefinementValue;
    };
    /**
     * Creates an URL for the next state.
     */
    createURL: CreateURL<void>;
    /**
     * Send a "Facet Clicked" Insights event.
     */
    sendEvent: SendEventForToggle;
    /**
     * Indicates if search state can be refined.
     */
    canRefine: boolean;
    /**
     * Updates to the next state by applying the toggle refinement.
     */
    refine: (value?: {
        isRefined: boolean;
    }) => void;
};
export type ToggleRefinementWidgetDescription = {
    $$type: 'ais.toggleRefinement';
    renderState: ToggleRefinementRenderState;
    indexRenderState: {
        toggleRefinement: {
            [attribute: string]: WidgetRenderState<ToggleRefinementRenderState, ToggleRefinementConnectorParams>;
        };
    };
    indexUiState: {
        toggle: {
            [attribute: string]: boolean;
        };
    };
};
export type ToggleRefinementConnector = Connector<ToggleRefinementWidgetDescription, ToggleRefinementConnectorParams>;
/**
 * **Toggle** connector provides the logic to build a custom widget that will provide
 * an on/off filtering feature based on an attribute value or values.
 *
 * Two modes are implemented in the custom widget:
 *  - with or without the value filtered
 *  - switch between two values.
 */
declare const connectToggleRefinement: ToggleRefinementConnector;
export default connectToggleRefinement;
