import type { WidgetFactory, WidgetRenderState } from '../../types';
// @ts-ignore
import type * as Places from 'places.js';
type StaticOptions = Places.StaticOptions;
type PlacesInstance = Places.PlacesInstance;
type ReconfigurableOptions = Places.ReconfigurableOptions;
export type PlacesWidgetParams = {
    /**
     * The Algolia Places reference to use.
     *
     * @see https://github.com/algolia/places
     */
    placesReference: (options: StaticOptions & ReconfigurableOptions) => PlacesInstance;
    /**
     * The default position when the input is empty.
     */
    defaultPosition?: string[];
} & StaticOptions;
export type PlacesWidgetDescription = {
    $$type: 'ais.places';
    $$widgetType: 'ais.places';
    renderState: Record<string, unknown>;
    indexRenderState: {
        places: WidgetRenderState<Record<string, unknown>, PlacesWidgetParams>;
    };
    indexUiState: {
        places: {
            query: string;
            position: string;
        };
    };
};
export type PlacesWidget = WidgetFactory<PlacesWidgetDescription, PlacesWidgetParams, PlacesWidgetParams>;
declare const _default: PlacesWidget;
export default _default;
