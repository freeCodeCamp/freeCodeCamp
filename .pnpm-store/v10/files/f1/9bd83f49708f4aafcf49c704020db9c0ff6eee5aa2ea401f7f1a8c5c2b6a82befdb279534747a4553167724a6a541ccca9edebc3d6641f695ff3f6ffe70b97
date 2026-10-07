export const createEvaluateSource = (window) => {
    return (source) => new Promise((resolve, reject) => {
        if (window === null) {
            // Bug #182 Chrome and Edge do throw an instance of a SyntaxError instead of a DOMException.
            reject(new SyntaxError());
            return;
        }
        const head = window.document.head;
        if (head === null) {
            // Bug #182 Chrome and Edge do throw an instance of a SyntaxError instead of a DOMException.
            reject(new SyntaxError());
        }
        else {
            const script = window.document.createElement('script');
            // @todo Safari doesn't like URLs with a type of 'application/javascript; charset=utf-8'.
            const blob = new Blob([source], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const originalOnErrorHandler = window.onerror;
            const removeErrorEventListenerAndRevokeUrl = () => {
                window.onerror = originalOnErrorHandler;
                URL.revokeObjectURL(url);
            };
            window.onerror = (message, src, lineno, colno, error) => {
                // @todo Edge thinks the source is the one of the html document.
                if (src === url || (src === window.location.href && lineno === 1 && colno === 1)) {
                    removeErrorEventListenerAndRevokeUrl();
                    reject(error);
                    return false;
                }
                if (originalOnErrorHandler !== null) {
                    return originalOnErrorHandler(message, src, lineno, colno, error);
                }
            };
            script.onerror = () => {
                removeErrorEventListenerAndRevokeUrl();
                // Bug #182 Chrome and Edge do throw an instance of a SyntaxError instead of a DOMException.
                reject(new SyntaxError());
            };
            script.onload = () => {
                removeErrorEventListenerAndRevokeUrl();
                resolve();
            };
            script.src = url;
            script.type = 'module';
            head.appendChild(script);
        }
    });
};
//# sourceMappingURL=evaluate-source.js.map