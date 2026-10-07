import type { CreateVoiceSearchHelper, VoiceListeningState } from '../../lib/voiceSearchHelper/types';
import type { Connector, WidgetRenderState } from '../../types';
import type { PlainSearchParameters } from 'algoliasearch-helper';
export type VoiceSearchConnectorParams = {
    searchAsYouSpeak?: boolean;
    language?: string;
    additionalQueryParameters?: (params: {
        query: string;
    }) => PlainSearchParameters | void;
    createVoiceSearchHelper?: CreateVoiceSearchHelper;
};
export type VoiceSearchRenderState = {
    isBrowserSupported: boolean;
    isListening: boolean;
    toggleListening: () => void;
    voiceListeningState: VoiceListeningState;
};
export type VoiceSearchWidgetDescription = {
    $$type: 'ais.voiceSearch';
    renderState: VoiceSearchRenderState;
    indexRenderState: {
        voiceSearch: WidgetRenderState<VoiceSearchRenderState, VoiceSearchConnectorParams>;
    };
    indexUiState: {
        query: string;
    };
};
export type VoiceSearchConnector = Connector<VoiceSearchWidgetDescription, VoiceSearchConnectorParams>;
declare const connectVoiceSearch: VoiceSearchConnector;
export default connectVoiceSearch;
