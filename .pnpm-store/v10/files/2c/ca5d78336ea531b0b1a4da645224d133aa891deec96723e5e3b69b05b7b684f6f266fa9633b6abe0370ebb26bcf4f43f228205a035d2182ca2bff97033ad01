import { $ } from '../../dom.js';
import './dnd.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function applyDragImage(event, container, label, extraClasses = []) {
    if (!event.dataTransfer) {
        return;
    }
    const dragImage = $('.monaco-drag-image');
    dragImage.textContent = label;
    dragImage.classList.add(...extraClasses);
    const getDragImageContainer = (e) => {
        while (e && !e.classList.contains('monaco-workbench')) {
            e = e.parentElement;
        }
        return e || container.ownerDocument.body;
    };
    const dragContainer = getDragImageContainer(container);
    dragContainer.appendChild(dragImage);
    event.dataTransfer.setDragImage(dragImage, -10, -10);
    // Removes the element when the DND operation is done
    setTimeout(() => dragImage.remove(), 0);
}

export { applyDragImage };
