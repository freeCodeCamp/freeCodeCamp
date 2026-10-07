"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = usePagination;
const use_ref_ts_1 = require("../use-ref.js");
const utils_ts_1 = require("../utils.js");
function usePointerPosition({ active, renderedItems, pageSize, loop, }) {
    const state = (0, use_ref_ts_1.useRef)({
        lastPointer: active,
        lastActive: undefined,
    });
    const { lastPointer, lastActive } = state.current;
    const middle = Math.floor(pageSize / 2);
    const renderedLength = renderedItems.reduce((acc, item) => acc + item.length, 0);
    const defaultPointerPosition = renderedItems
        .slice(0, active)
        .reduce((acc, item) => acc + item.length, 0);
    let pointer = defaultPointerPosition;
    if (renderedLength > pageSize) {
        if (loop) {
            /**
             * Creates the next position for the pointer considering an infinitely
             * looping list of items to be rendered on the page.
             *
             * The goal is to progressively move the cursor to the middle position as the user move down, and then keep
             * the cursor there. When the user move up, maintain the cursor position.
             */
            // By default, keep the cursor position as-is.
            pointer = lastPointer;
            if (
            // First render, skip this logic.
            lastActive != null &&
                // Only move the pointer down when the user moves down.
                lastActive < active &&
                // Check user didn't move up across page boundary.
                active - lastActive < pageSize) {
                pointer = Math.min(
                // Furthest allowed position for the pointer is the middle of the list
                middle, Math.abs(active - lastActive) === 1
                    ? Math.min(
                    // Move the pointer at most the height of the last active item.
                    lastPointer + (renderedItems[lastActive]?.length ?? 0), 
                    // If the user moved by one item, move the pointer to the natural position of the active item as
                    // long as it doesn't move the cursor up.
                    Math.max(defaultPointerPosition, lastPointer))
                    : // Otherwise, move the pointer down by the difference between the active and last active item.
                        lastPointer + active - lastActive);
            }
        }
        else {
            /**
             * Creates the next position for the pointer considering a finite list of
             * items to be rendered on a page.
             *
             * The goal is to keep the pointer in the middle of the page whenever possible, until
             * we reach the bounds of the list (top or bottom). In which case, the cursor moves progressively
             * to the bottom or top of the list.
             */
            const spaceUnderActive = renderedItems
                .slice(active)
                .reduce((acc, item) => acc + item.length, 0);
            pointer =
                spaceUnderActive < pageSize - middle
                    ? // If the active item is near the end of the list, progressively move the cursor towards the end.
                        pageSize - spaceUnderActive
                    : // Otherwise, progressively move the pointer to the middle of the list.
                        Math.min(defaultPointerPosition, middle);
        }
    }
    // Save state for the next render
    state.current.lastPointer = pointer;
    state.current.lastActive = active;
    return pointer;
}
function usePagination({ items, active, renderItem, pageSize, loop = true, }) {
    const width = (0, utils_ts_1.readlineWidth)();
    const bound = (num) => ((num % items.length) + items.length) % items.length;
    const renderedItems = items.map((item, index) => {
        if (item == null)
            return [];
        return (0, utils_ts_1.breakLines)(renderItem({ item, index, isActive: index === active }), width).split('\n');
    });
    const renderedLength = renderedItems.reduce((acc, item) => acc + item.length, 0);
    const renderItemAtIndex = (index) => renderedItems[index] ?? [];
    const pointer = usePointerPosition({ active, renderedItems, pageSize, loop });
    // Render the active item to decide the position.
    // If the active item fits under the pointer, we render it there.
    // Otherwise, we need to render it to fit at the bottom of the page; moving the pointer up.
    const activeItem = renderItemAtIndex(active).slice(0, pageSize);
    const activeItemPosition = pointer + activeItem.length <= pageSize ? pointer : pageSize - activeItem.length;
    // Create an array of lines for the page, and add the lines of the active item into the page
    const pageBuffer = Array.from({ length: pageSize });
    pageBuffer.splice(activeItemPosition, activeItem.length, ...activeItem);
    // Store to prevent rendering the same item twice
    const itemVisited = new Set([active]);
    // Fill the page under the active item
    let bufferPointer = activeItemPosition + activeItem.length;
    let itemPointer = bound(active + 1);
    while (bufferPointer < pageSize &&
        !itemVisited.has(itemPointer) &&
        (loop && renderedLength > pageSize ? itemPointer !== active : itemPointer > active)) {
        const lines = renderItemAtIndex(itemPointer);
        const linesToAdd = lines.slice(0, pageSize - bufferPointer);
        pageBuffer.splice(bufferPointer, linesToAdd.length, ...linesToAdd);
        // Move pointers for next iteration
        itemVisited.add(itemPointer);
        bufferPointer += linesToAdd.length;
        itemPointer = bound(itemPointer + 1);
    }
    // Fill the page over the active item
    bufferPointer = activeItemPosition - 1;
    itemPointer = bound(active - 1);
    while (bufferPointer >= 0 &&
        !itemVisited.has(itemPointer) &&
        (loop && renderedLength > pageSize ? itemPointer !== active : itemPointer < active)) {
        const lines = renderItemAtIndex(itemPointer);
        const linesToAdd = lines.slice(Math.max(0, lines.length - bufferPointer - 1));
        pageBuffer.splice(bufferPointer - linesToAdd.length + 1, linesToAdd.length, ...linesToAdd);
        // Move pointers for next iteration
        itemVisited.add(itemPointer);
        bufferPointer -= linesToAdd.length;
        itemPointer = bound(itemPointer - 1);
    }
    return pageBuffer.filter((line) => typeof line === 'string').join('\n');
}
