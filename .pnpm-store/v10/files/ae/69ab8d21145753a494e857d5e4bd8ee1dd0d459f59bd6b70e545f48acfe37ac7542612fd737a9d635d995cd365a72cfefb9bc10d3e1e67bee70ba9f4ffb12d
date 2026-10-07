function gotoNextSibling(newCursor, oldCursor) {
    const n = newCursor.gotoNextSibling();
    const o = oldCursor.gotoNextSibling();
    if (n !== o) {
        throw new Error('Trees are out of sync');
    }
    return n && o;
}
function gotoParent(newCursor, oldCursor) {
    const n = newCursor.gotoParent();
    const o = oldCursor.gotoParent();
    if (n !== o) {
        throw new Error('Trees are out of sync');
    }
    return n && o;
}
function gotoNthChild(newCursor, oldCursor, index) {
    const n = newCursor.gotoFirstChild();
    const o = oldCursor.gotoFirstChild();
    if (n !== o) {
        throw new Error('Trees are out of sync');
    }
    if (index === 0) {
        return n && o;
    }
    for (let i = 1; i <= index; i++) {
        const nn = newCursor.gotoNextSibling();
        const oo = oldCursor.gotoNextSibling();
        if (nn !== oo) {
            throw new Error('Trees are out of sync');
        }
        if (!nn || !oo) {
            return false;
        }
    }
    return n && o;
}
function nextSiblingOrParentSibling(newCursor, oldCursor) {
    do {
        if (newCursor.currentNode.nextSibling) {
            return gotoNextSibling(newCursor, oldCursor);
        }
        if (newCursor.currentNode.parent) {
            gotoParent(newCursor, oldCursor);
        }
    } while (newCursor.currentNode.nextSibling || newCursor.currentNode.parent);
    return false;
}
function getClosestPreviousNodes(cursor, tree) {
    // Go up parents until the end of the parent is before the start of the current.
    const findPrev = tree.walk();
    findPrev.resetTo(cursor);
    const startingNode = cursor.currentNode;
    do {
        if (findPrev.currentNode.previousSibling && ((findPrev.currentNode.endIndex - findPrev.currentNode.startIndex) !== 0)) {
            findPrev.gotoPreviousSibling();
        }
        else {
            while (!findPrev.currentNode.previousSibling && findPrev.currentNode.parent) {
                findPrev.gotoParent();
            }
            findPrev.gotoPreviousSibling();
        }
    } while ((findPrev.currentNode.endIndex > startingNode.startIndex)
        && (findPrev.currentNode.parent || findPrev.currentNode.previousSibling)
        && (findPrev.currentNode.id !== startingNode.id));
    if ((findPrev.currentNode.id !== startingNode.id) && findPrev.currentNode.endIndex <= startingNode.startIndex) {
        return findPrev.currentNode;
    }
    else {
        return undefined;
    }
}

export { getClosestPreviousNodes, gotoNextSibling, gotoNthChild, gotoParent, nextSiblingOrParentSibling };
