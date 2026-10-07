import '../utils/dataTransfer/Clipboard.js';
import { getWindow } from '../utils/misc/getWindow.js';
import { setUIValueClean, hasUISelection, setUISelection } from './UI.js';

const TrackChanges = Symbol('Track programmatic changes for React workaround');
// When the input event happens in the browser, React executes all event handlers
// and if they change state of a controlled value, nothing happens.
// But when we trigger the event handlers in test environment with React@17,
// the changes are rolled back before the state update is applied.
// This results in a reset cursor.
// There might be a better way to work around if we figure out
// why the batched update is executed differently in our test environment.
function isReact17Element(element) {
    return Object.getOwnPropertyNames(element).some((k)=>k.startsWith('__react')) && getWindow(element).REACT_VERSION === 17;
}
function startTrackValue(element) {
    if (!isReact17Element(element)) {
        return;
    }
    element[TrackChanges] = {
        previousValue: String(element.value),
        tracked: []
    };
}
function trackOrSetValue(element, v) {
    var _element_TrackChanges_tracked, _element_TrackChanges;
    (_element_TrackChanges = element[TrackChanges]) === null || _element_TrackChanges === void 0 ? void 0 : (_element_TrackChanges_tracked = _element_TrackChanges.tracked) === null || _element_TrackChanges_tracked === void 0 ? void 0 : _element_TrackChanges_tracked.push(v);
    if (!element[TrackChanges]) {
        setUIValueClean(element);
        setUISelection(element, {
            focusOffset: v.length
        });
    }
}
function commitValueAfterInput(element, cursorOffset) {
    var _changes_tracked;
    const changes = element[TrackChanges];
    element[TrackChanges] = undefined;
    if (!(changes === null || changes === void 0 ? void 0 : (_changes_tracked = changes.tracked) === null || _changes_tracked === void 0 ? void 0 : _changes_tracked.length)) {
        return;
    }
    const isJustReactStateUpdate = changes.tracked.length === 2 && changes.tracked[0] === changes.previousValue && changes.tracked[1] === element.value;
    if (!isJustReactStateUpdate) {
        setUIValueClean(element);
    }
    if (hasUISelection(element)) {
        setUISelection(element, {
            focusOffset: isJustReactStateUpdate ? cursorOffset : element.value.length
        });
    }
}

export { commitValueAfterInput, startTrackValue, trackOrSetValue };
