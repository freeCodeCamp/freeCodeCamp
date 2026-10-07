
import type { VoiceSearchConnectorParams, VoiceSearchWidgetDescription } from '../../connectors/voice-search/connectVoiceSearch';
import type { CreateVoiceSearchHelper } from '../../lib/voiceSearchHelper/types';
import type { WidgetFactory, Template } from '../../types';
import type { PlainSearchParameters } from 'algoliasearch-helper';
export type VoiceSearchCSSClasses = Partial<{
    root: string | string[];
    button: string | string[];
    status: string | string[];
}>;
type VoiceSearchTemplateProps = {
    status: string;
    errorCode: string;
    isListening: boolean;
    transcript: string;
    isSpeechFinal: boolean;
    isBrowserSupported: boolean;
};
export type VoiceSearchTemplates = Partial<{
    buttonText: Template<VoiceSearchTemplateProps>;
    status: Template<VoiceSearchTemplateProps>;
}>;
export type VoiceSearchWidgetParams = {
    container: string | HTMLElement;
    cssClasses?: VoiceSearchCSSClasses;
    templates?: VoiceSearchTemplates;
    searchAsYouSpeak?: boolean;
    language?: string;
    additionalQueryParameters?: (params: {
        query: string;
    }) => PlainSearchParameters | void;
    createVoiceSearchHelper?: CreateVoiceSearchHelper;
};
export type VoiceSearchWidget = WidgetFactory<VoiceSearchWidgetDescription & {
    $$type: 'ais.voiceSearch';
}, VoiceSearchConnectorParams, VoiceSearchWidgetParams>;
declare const voiceSearch: VoiceSearchWidget;
export default voiceSearch;
