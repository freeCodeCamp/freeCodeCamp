var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEqualSelectors(a, b) {
    var cursor1 = a.head;
    var cursor2 = b.head;

    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return cursor1 === null && cursor2 === null;
}

function isEqualDeclarations(a, b) {
    var cursor1 = a.head;
    var cursor2 = b.head;

    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return cursor1 === null && cursor2 === null;
}

function compareDeclarations(declarations1, declarations2) {
    var result = {
        eq: [],
        ne1: [],
        ne2: [],
        ne2overrided: []
    };

    var fingerprints = Object.create(null);
    var declarations2hash = Object.create(null);

    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
        declarations2hash[cursor.data.id] = true;
    }

    for (var cursor = declarations1.head; cursor; cursor = cursor.next)  {
        var data = cursor.data;

        if (data.fingerprint) {
            fingerprints[data.fingerprint] = data.important;
        }

        if (declarations2hash[data.id]) {
            declarations2hash[data.id] = false;
            result.eq.push(data);
        } else {
            result.ne1.push(data);
        }
    }

    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
        var data = cursor.data;

        if (declarations2hash[data.id]) {
            // when declarations1 has an overriding declaration, this is not a difference
            // unless no !important is used on prev and !important is used on the following
            if (!hasOwnProperty.call(fingerprints, data.fingerprint) ||
                (!fingerprints[data.fingerprint] && data.important)) {
                result.ne2.push(data);
            }

            result.ne2overrided.push(data);
        }
    }

    return result;
}

function addSelectors(dest, source) {
    source.each(function(sourceData) {
        var newStr = sourceData.id;
        var cursor = dest.head;

        while (cursor) {
            var nextStr = cursor.data.id;

            if (nextStr === newStr) {
                return;
            }

            if (nextStr > newStr) {
                break;
            }

            cursor = cursor.next;
        }

        dest.insert(dest.createItem(sourceData), cursor);
    });

    return dest;
}

// check if simpleselectors has no equal specificity and element selector
function hasSimilarSelectors(selectors1, selectors2) {
    var cursor1 = selectors1.head;

    while (cursor1 !== null) {
        var cursor2 = selectors2.head;

        while (cursor2 !== null) {
            if (cursor1.data.compareMarker === cursor2.data.compareMarker) {
                return true;
            }

            cursor2 = cursor2.next;
        }

        cursor1 = cursor1.next;
    }

    return false;
}

// test node can't to be skipped
function unsafeToSkipNode(node) {
    switch (node.type) {
        case 'Rule':
            // unsafe skip ruleset with selector similarities
            return hasSimilarSelectors(node.prelude.children, this);

        case 'Atrule':
            // can skip at-rules with blocks
            if (node.block) {
                // unsafe skip at-rule if block contains something unsafe to skip
                return node.block.children.some(unsafeToSkipNode, this);
            }
            break;

        case 'Declaration':
            return false;
    }

    // unsafe by default
    return true;
}

module.exports = {
    isEqualSelectors: isEqualSelectors,
    isEqualDeclarations: isEqualDeclarations,
    compareDeclarations: compareDeclarations,
    addSelectors: addSelectors,
    hasSimilarSelectors: hasSimilarSelectors,
    unsafeToSkipNode: unsafeToSkipNode
};
