import '../utils/dataTransfer/Clipboard.js';
import { isContentEditable } from '../utils/edit/isContentEditable.js';
import { getUIValue } from './UI.js';

function getValueOrTextContent(element) {
    // istanbul ignore if
    if (!element) {
        return null;
    }
    if (isContentEditable(element)) {
        return element.textContent;
    }
    return getUIValue(element);
}

export { getValueOrTextContent };
