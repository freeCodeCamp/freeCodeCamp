import { _ } from '@swc/helpers/esm/_object_spread.js';

// `SpeechRecognition` is an API used on the browser so we can safely disable
// the `window` check.
var createVoiceSearchHelper = function createVoiceSearchHelper(param) {
    var searchAsYouSpeak = param.searchAsYouSpeak, language = param.language, onQueryChange = param.onQueryChange, onStateChange = param.onStateChange;
    var SpeechRecognitionAPI = window.webkitSpeechRecognition || window.SpeechRecognition;
    var getDefaultState = function getDefaultState(status) {
        return {
            status: status,
            transcript: '',
            isSpeechFinal: false,
            errorCode: undefined
        };
    };
    var state = getDefaultState('initial');
    var recognition;
    var isBrowserSupported = function isBrowserSupported() {
        return Boolean(SpeechRecognitionAPI);
    };
    var isListening = function isListening() {
        return state.status === 'askingPermission' || state.status === 'waiting' || state.status === 'recognizing';
    };
    var setState = function setState() {
        var newState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        state = _({}, state, newState);
        onStateChange();
    };
    var getState = function getState() {
        return state;
    };
    var resetState = function resetState() {
        var status = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'initial';
        setState(getDefaultState(status));
    };
    var onStart = function onStart() {
        setState({
            status: 'waiting'
        });
    };
    var onError = function onError(event) {
        setState({
            status: 'error',
            errorCode: event.error
        });
    };
    var onResult = function onResult(event) {
        setState({
            status: 'recognizing',
            transcript: event.results[0] && event.results[0][0] && event.results[0][0].transcript || '',
            isSpeechFinal: event.results[0] && event.results[0].isFinal
        });
        if (searchAsYouSpeak && state.transcript) {
            onQueryChange(state.transcript);
        }
    };
    var onEnd = function onEnd() {
        if (!state.errorCode && state.transcript && !searchAsYouSpeak) {
            onQueryChange(state.transcript);
        }
        if (state.status !== 'error') {
            setState({
                status: 'finished'
            });
        }
    };
    var startListening = function startListening() {
        recognition = new SpeechRecognitionAPI();
        if (!recognition) {
            return;
        }
        resetState('askingPermission');
        recognition.interimResults = true;
        if (language) {
            recognition.lang = language;
        }
        recognition.addEventListener('start', onStart);
        recognition.addEventListener('error', onError);
        recognition.addEventListener('result', onResult);
        recognition.addEventListener('end', onEnd);
        recognition.start();
    };
    var dispose = function dispose() {
        if (!recognition) {
            return;
        }
        recognition.stop();
        recognition.removeEventListener('start', onStart);
        recognition.removeEventListener('error', onError);
        recognition.removeEventListener('result', onResult);
        recognition.removeEventListener('end', onEnd);
        recognition = undefined;
    };
    var stopListening = function stopListening() {
        dispose();
        // Because `dispose` removes event listeners, `end` listener is not called.
        // So we're setting the `status` as `finished` here.
        // If we don't do it, it will be still `waiting` or `recognizing`.
        resetState('finished');
    };
    return {
        getState: getState,
        isBrowserSupported: isBrowserSupported,
        isListening: isListening,
        startListening: startListening,
        stopListening: stopListening,
        dispose: dispose
    };
};

export { createVoiceSearchHelper as default };
