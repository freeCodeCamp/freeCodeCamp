
import { h } from 'preact';
declare const defaultTemplates: {
    empty(): string;
    item(data: {
        __position: number;
        __queryID?: string;
    } & {
        objectID: string;
        _highlightResult?: import("../../types").HitHighlightResult;
        _snippetResult?: import("../../types").HitSnippetResult;
        _rankingInfo?: {
            promoted: boolean;
            nbTypos: number;
            firstMatchedWord: number;
            proximityDistance?: number;
            geoDistance: number;
            geoPrecision?: number;
            nbExactWords: number;
            words: number;
            filters: number;
            userScore: number;
            matchedGeoLocation?: {
                lat: number;
                lng: number;
                distance: number;
            };
        };
        _distinctSeqID?: number;
        _geoloc?: import("../../types").GeoLoc;
    } & import("../../types").BaseHit & {
        __hitIndex: number;
    }): h.JSX.Element;
};
export default defaultTemplates;
