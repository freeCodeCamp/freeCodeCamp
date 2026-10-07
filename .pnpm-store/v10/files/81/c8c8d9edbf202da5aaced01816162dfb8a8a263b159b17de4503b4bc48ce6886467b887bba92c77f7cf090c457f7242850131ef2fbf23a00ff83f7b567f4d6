import katexReplaceWithTex from "./katex2tex";

// Return <div class="katex"> element containing node, or null if not found.
function closestKatex(node: Node): Element | null | undefined {
    // If node is a Text Node, for example, go up to containing Element,
    // where we can apply the `closest` method.
    const element: Element | null | undefined =
        (node instanceof Element ? node : node.parentElement);
    return element && element.closest('.katex');
}

// Global copy handler to modify behavior on/within .katex elements.
document.addEventListener('copy', function(event: ClipboardEvent) {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !event.clipboardData) {
        return; // default action OK if selection is empty or unchangeable
    }
    const clipboardData = event.clipboardData;
    const range = selection.getRangeAt(0);

    // When start point is within a formula, expand to entire formula.
    const startKatex = closestKatex(range.startContainer);
    if (startKatex) {
        range.setStartBefore(startKatex);
    }

    // Similarly, when end point is within a formula, expand to entire formula.
    const endKatex = closestKatex(range.endContainer);
    if (endKatex) {
        range.setEndAfter(endKatex);
    }

    const fragment = range.cloneContents();
    if (!fragment.querySelector('.katex-mathml')) {
        return; // default action OK if no .katex-mathml elements
    }

    const htmlContents = Array.prototype.map.call(fragment.childNodes,
        (el) => (el instanceof Text ? el.textContent : el.outerHTML)
    ).join('');

    // Preserve usual HTML copy/paste behavior.
    clipboardData.setData('text/html', htmlContents);
    // Rewrite plain-text version.
    clipboardData.setData('text/plain',
        katexReplaceWithTex(fragment).textContent);
    // Prevent normal copy handling.
    event.preventDefault();
});
