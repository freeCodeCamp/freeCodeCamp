
import { h } from 'preact';
import type { VoiceListeningState } from '../../lib/voiceSearchHelper/types';
import type { ComponentCSSClasses } from '../../types';
import type { VoiceSearchCSSClasses, VoiceSearchTemplates } from '../../widgets/voice-search/voice-search';
export type VoiceSearchComponentCSSClasses = ComponentCSSClasses<VoiceSearchCSSClasses>;
export type VoiceSearchComponentTemplates = Required<VoiceSearchTemplates>;
export type VoiceSearchProps = {
    cssClasses: VoiceSearchComponentCSSClasses;
    isBrowserSupported: boolean;
    isListening: boolean;
    toggleListening: () => void;
    voiceListeningState: VoiceListeningState;
    templates: VoiceSearchComponentTemplates;
};
declare const VoiceSearch: ({ cssClasses, isBrowserSupported, isListening, toggleListening, voiceListeningState, templates, }: VoiceSearchProps) => h.JSX.Element;
export default VoiceSearch;
