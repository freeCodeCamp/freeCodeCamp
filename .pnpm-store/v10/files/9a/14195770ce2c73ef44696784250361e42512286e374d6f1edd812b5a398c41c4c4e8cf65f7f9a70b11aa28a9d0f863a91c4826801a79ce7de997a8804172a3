const postfixRE = /[?#].*$/;
export function cleanUrl(url) {
    return url.replace(postfixRE, '');
}
export function extractQueryWithoutFragment(url) {
    const questionMarkIndex = url.indexOf('?');
    if (questionMarkIndex === -1) {
        return '';
    }
    const fragmentIndex = url.indexOf('#', questionMarkIndex); // Search for # after ?
    if (fragmentIndex === -1) {
        return url.substring(questionMarkIndex);
    }
    else {
        return url.substring(questionMarkIndex, fragmentIndex);
    }
}
