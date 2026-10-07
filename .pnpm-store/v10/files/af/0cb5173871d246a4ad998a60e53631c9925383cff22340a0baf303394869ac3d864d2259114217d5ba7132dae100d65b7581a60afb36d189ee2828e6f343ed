import type { renderTemplate } from '../../lib/templating';
export type HTMLMarkerArguments = {
    __id: string;
    position: google.maps.LatLngLiteral;
    map: google.maps.Map;
    template: ReturnType<typeof renderTemplate>;
    title?: string;
    className: string;
    anchor?: {
        x: number;
        y: number;
    };
};
interface Marker {
    __id: string;
    anchor: {
        x: number;
        y: number;
    };
    offset?: {
        x: number;
        y: number;
    };
    listeners: {
        [key: string]: EventListener;
    };
    latLng: google.maps.LatLng;
    element: HTMLDivElement;
    getPosition: () => google.maps.LatLng;
}
declare const createHTMLMarker: (googleReference: typeof google) => new (args: HTMLMarkerArguments) => google.maps.OverlayView & Marker;
export default createHTMLMarker;
