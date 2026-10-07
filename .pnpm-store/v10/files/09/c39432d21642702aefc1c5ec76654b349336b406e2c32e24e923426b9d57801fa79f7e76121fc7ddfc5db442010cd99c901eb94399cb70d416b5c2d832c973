import { createScanner } from '../../../../jsonc-parser/lib/esm/main.js';
import '../jsonLanguageTypes.js';
import { format } from './format.js';
import { PropertyTree, Container } from './propertyTree.js';
import { TextDocument } from '../../../../vscode-languageserver-textdocument/lib/esm/main.js';
import { TextEdit, Range, Position } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
// import { TextEdit} from 'vscode-languageserver-textdocument';
function sort(documentToSort, formattingOptions) {
    const options = {
        ...formattingOptions,
        keepLines: false, // keepLines must be false so that the properties are on separate lines for the sorting
    };
    const formattedJsonString = TextDocument.applyEdits(documentToSort, format(documentToSort, options, undefined));
    const formattedJsonDocument = TextDocument.create('test://test.json', 'json', 0, formattedJsonString);
    const jsonPropertyTree = findJsoncPropertyTree(formattedJsonDocument);
    const sortedJsonDocument = sortJsoncDocument(formattedJsonDocument, jsonPropertyTree);
    const edits = format(sortedJsonDocument, options, undefined);
    const sortedAndFormattedJsonDocument = TextDocument.applyEdits(sortedJsonDocument, edits);
    return [TextEdit.replace(Range.create(Position.create(0, 0), documentToSort.positionAt(documentToSort.getText().length)), sortedAndFormattedJsonDocument)];
}
function findJsoncPropertyTree(formattedDocument) {
    const formattedString = formattedDocument.getText();
    const scanner = createScanner(formattedString, false);
    // The tree that will be returned
    let rootTree = new PropertyTree();
    // The tree where the current properties can be added as children
    let currentTree = rootTree;
    // The tree representing the current property analyzed
    let currentProperty = rootTree;
    // The tree representing the previous property analyzed
    let lastProperty = rootTree;
    // The current scanned token
    let token = undefined;
    // Line number of the last token found
    let lastTokenLine = 0;
    // Total number of characters on the lines prior to current line 
    let numberOfCharactersOnPreviousLines = 0;
    // The last token scanned that is not trivial, nor a comment
    let lastNonTriviaNonCommentToken = undefined;
    // The second to last token scanned that is not trivial, nor a comment
    let secondToLastNonTriviaNonCommentToken = undefined;
    // Line number of last token that is not trivial, nor a comment
    let lineOfLastNonTriviaNonCommentToken = -1;
    // End index on its line of last token that is not trivial, nor a comment
    let endIndexOfLastNonTriviaNonCommentToken = -1;
    // Line number of the start of the range of current/next property
    let beginningLineNumber = 0;
    // Line number of the end of the range of current/next property
    let endLineNumber = 0;
    // Stack indicating whether we are inside of an object or an array
    let currentContainerStack = [];
    // Boolean indicating that the current property end line number needs to be updated. Used only when block comments are encountered.
    let updateLastPropertyEndLineNumber = false;
    // Boolean indicating that the beginning line number should be updated. Used only when block comments are encountered. 
    let updateBeginningLineNumber = false;
    while ((token = scanner.scan()) !== 17 /* SyntaxKind.EOF */) {
        // In the case when a block comment has been encountered that starts on the same line as the comma ending a property, update the end line of that
        // property so that it covers the block comment. For example, if we have: 
        // 1. "key" : {}, /* some block
        // 2. comment */
        // Then, the end line of the property "key" should be line 2 not line 1
        if (updateLastPropertyEndLineNumber === true
            && token !== 14 /* SyntaxKind.LineBreakTrivia */
            && token !== 15 /* SyntaxKind.Trivia */
            && token !== 12 /* SyntaxKind.LineCommentTrivia */
            && token !== 13 /* SyntaxKind.BlockCommentTrivia */
            && currentProperty.endLineNumber === undefined) {
            let endLineNumber = scanner.getTokenStartLine();
            // Update the end line number in the case when the last property visited is a container (object or array)
            if (secondToLastNonTriviaNonCommentToken === 2 /* SyntaxKind.CloseBraceToken */
                || secondToLastNonTriviaNonCommentToken === 4 /* SyntaxKind.CloseBracketToken */) {
                lastProperty.endLineNumber = endLineNumber - 1;
            }
            // Update the end line number in the case when the last property visited is a simple property 
            else {
                currentProperty.endLineNumber = endLineNumber - 1;
            }
            beginningLineNumber = endLineNumber;
            updateLastPropertyEndLineNumber = false;
        }
        // When a block comment follows an open brace or an open bracket, that block comment should be associated to that brace or bracket, not the property below it. For example, for:
        // 1. { /*
        // 2. ... */
        // 3. "key" : {}
        // 4. }
        // Instead of associating the block comment to the property on line 3, it is associate to the property on line 1
        if (updateBeginningLineNumber === true
            && token !== 14 /* SyntaxKind.LineBreakTrivia */
            && token !== 15 /* SyntaxKind.Trivia */
            && token !== 12 /* SyntaxKind.LineCommentTrivia */
            && token !== 13 /* SyntaxKind.BlockCommentTrivia */) {
            beginningLineNumber = scanner.getTokenStartLine();
            updateBeginningLineNumber = false;
        }
        // Update the number of characters on all the previous lines each time the new token is on a different line to the previous token
        if (scanner.getTokenStartLine() !== lastTokenLine) {
            for (let i = lastTokenLine; i < scanner.getTokenStartLine(); i++) {
                const lengthOfLine = formattedDocument.getText(Range.create(Position.create(i, 0), Position.create(i + 1, 0))).length;
                numberOfCharactersOnPreviousLines = numberOfCharactersOnPreviousLines + lengthOfLine;
            }
            lastTokenLine = scanner.getTokenStartLine();
        }
        switch (token) {
            // When a string is found, if it follows an open brace or a comma token and it is within an object, then it corresponds to a key name, not a simple string
            case 10 /* SyntaxKind.StringLiteral */: {
                if ((lastNonTriviaNonCommentToken === undefined
                    || lastNonTriviaNonCommentToken === 1 /* SyntaxKind.OpenBraceToken */
                    || (lastNonTriviaNonCommentToken === 5 /* SyntaxKind.CommaToken */
                        && currentContainerStack[currentContainerStack.length - 1] === Container.Object))) {
                    // In that case create the child property which starts at beginningLineNumber, add it to the current tree
                    const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
                    lastProperty = currentProperty;
                    currentProperty = currentTree.addChildProperty(childProperty);
                }
                break;
            }
            // When the token is an open bracket, then we enter into an array
            case 3 /* SyntaxKind.OpenBracketToken */: {
                // If the root tree beginning line number is not defined, then this open bracket is the first open bracket in the document
                if (rootTree.beginningLineNumber === undefined) {
                    rootTree.beginningLineNumber = scanner.getTokenStartLine();
                }
                // Suppose we are inside of an object, then the current array is associated to a key, and has already been created
                // We have the following configuration: {"a": "val", "array": [...], "b": "val"}
                // In that case navigate down to the child property
                if (currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
                    currentTree = currentProperty;
                }
                // Suppose we are inside of an array, then since the current array is not associated to a key, it has not been created yet
                // We have the following configuration: ["a", [...], "b"]
                // In that case create the property and navigate down
                else if (currentContainerStack[currentContainerStack.length - 1] === Container.Array) {
                    const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
                    childProperty.noKeyName = true;
                    lastProperty = currentProperty;
                    currentProperty = currentTree.addChildProperty(childProperty);
                    currentTree = currentProperty;
                }
                currentContainerStack.push(Container.Array);
                currentProperty.type = Container.Array;
                beginningLineNumber = scanner.getTokenStartLine();
                beginningLineNumber++;
                break;
            }
            // When the token is an open brace, then we enter into an object
            case 1 /* SyntaxKind.OpenBraceToken */: {
                // If the root tree beginning line number is not defined, then this open brace is the first open brace in the document
                if (rootTree.beginningLineNumber === undefined) {
                    rootTree.beginningLineNumber = scanner.getTokenStartLine();
                }
                // 1. If we are inside of an objet, the current object is associated to a key and has already been created
                // We have the following configuration: {"a": "val", "object": {...}, "b": "val"}
                // 2. Otherwise the current object property is inside of an array, not associated to a key name and the property has not yet been created
                // We have the following configuration: ["a", {...}, "b"]
                else if (currentContainerStack[currentContainerStack.length - 1] === Container.Array) {
                    const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
                    childProperty.noKeyName = true;
                    lastProperty = currentProperty;
                    currentProperty = currentTree.addChildProperty(childProperty);
                }
                currentProperty.type = Container.Object;
                currentContainerStack.push(Container.Object);
                currentTree = currentProperty;
                beginningLineNumber = scanner.getTokenStartLine();
                beginningLineNumber++;
                break;
            }
            case 4 /* SyntaxKind.CloseBracketToken */: {
                endLineNumber = scanner.getTokenStartLine();
                currentContainerStack.pop();
                // If the last non-trivial non-comment token is a closing brace or bracket, then the currentProperty end line number has not been set yet so set it
                // The configuration considered is: [..., {}] or [..., []]
                if (currentProperty.endLineNumber === undefined
                    && (lastNonTriviaNonCommentToken === 2 /* SyntaxKind.CloseBraceToken */
                        || lastNonTriviaNonCommentToken === 4 /* SyntaxKind.CloseBracketToken */)) {
                    currentProperty.endLineNumber = endLineNumber - 1;
                    currentProperty.lastProperty = true;
                    currentProperty.lineWhereToAddComma = lineOfLastNonTriviaNonCommentToken;
                    currentProperty.indexWhereToAddComa = endIndexOfLastNonTriviaNonCommentToken;
                    lastProperty = currentProperty;
                    currentProperty = currentProperty ? currentProperty.parent : undefined;
                    currentTree = currentProperty;
                }
                rootTree.endLineNumber = endLineNumber;
                beginningLineNumber = endLineNumber + 1;
                break;
            }
            case 2 /* SyntaxKind.CloseBraceToken */: {
                endLineNumber = scanner.getTokenStartLine();
                currentContainerStack.pop();
                // If we are not inside of an empty object
                if (lastNonTriviaNonCommentToken !== 1 /* SyntaxKind.OpenBraceToken */) {
                    // If current property end line number has not yet been defined, define it
                    if (currentProperty.endLineNumber === undefined) {
                        currentProperty.endLineNumber = endLineNumber - 1;
                        // The current property is also the last property
                        currentProperty.lastProperty = true;
                        // The last property of an object is associated with the line and index of where to add the comma, in case after sorting, it is no longer the last property
                        currentProperty.lineWhereToAddComma = lineOfLastNonTriviaNonCommentToken;
                        currentProperty.indexWhereToAddComa = endIndexOfLastNonTriviaNonCommentToken;
                    }
                    lastProperty = currentProperty;
                    currentProperty = currentProperty ? currentProperty.parent : undefined;
                    currentTree = currentProperty;
                }
                rootTree.endLineNumber = scanner.getTokenStartLine();
                beginningLineNumber = endLineNumber + 1;
                break;
            }
            case 5 /* SyntaxKind.CommaToken */: {
                endLineNumber = scanner.getTokenStartLine();
                // If the current container is an object or the current container is an array and the last non-trivia non-comment token is a closing brace or a closing bracket
                // Then update the end line number of the current property
                if (currentProperty.endLineNumber === undefined
                    && (currentContainerStack[currentContainerStack.length - 1] === Container.Object
                        || (currentContainerStack[currentContainerStack.length - 1] === Container.Array
                            && (lastNonTriviaNonCommentToken === 2 /* SyntaxKind.CloseBraceToken */
                                || lastNonTriviaNonCommentToken === 4 /* SyntaxKind.CloseBracketToken */)))) {
                    currentProperty.endLineNumber = endLineNumber;
                    // Store the line and the index of the comma in case it needs to be removed during the sorting
                    currentProperty.commaIndex = scanner.getTokenOffset() - numberOfCharactersOnPreviousLines;
                    currentProperty.commaLine = endLineNumber;
                }
                if (lastNonTriviaNonCommentToken === 2 /* SyntaxKind.CloseBraceToken */
                    || lastNonTriviaNonCommentToken === 4 /* SyntaxKind.CloseBracketToken */) {
                    lastProperty = currentProperty;
                    currentProperty = currentProperty ? currentProperty.parent : undefined;
                    currentTree = currentProperty;
                }
                beginningLineNumber = endLineNumber + 1;
                break;
            }
            case 13 /* SyntaxKind.BlockCommentTrivia */: {
                // If the last non trivia non-comment token is a comma and the block comment starts on the same line as the comma, then update the end line number of the current property. For example if:
                // 1. {}, /* ...
                // 2. ..*/
                // The the property on line 1 shoud end on line 2, not line 1
                // In the case we are in an array we update the end line number only if the second to last non-trivia non-comment token is a closing brace or bracket
                if (lastNonTriviaNonCommentToken === 5 /* SyntaxKind.CommaToken */
                    && lineOfLastNonTriviaNonCommentToken === scanner.getTokenStartLine()
                    && (currentContainerStack[currentContainerStack.length - 1] === Container.Array
                        && (secondToLastNonTriviaNonCommentToken === 2 /* SyntaxKind.CloseBraceToken */
                            || secondToLastNonTriviaNonCommentToken === 4 /* SyntaxKind.CloseBracketToken */)
                        || currentContainerStack[currentContainerStack.length - 1] === Container.Object)) {
                    if (currentContainerStack[currentContainerStack.length - 1] === Container.Array && (secondToLastNonTriviaNonCommentToken === 2 /* SyntaxKind.CloseBraceToken */ || secondToLastNonTriviaNonCommentToken === 4 /* SyntaxKind.CloseBracketToken */) || currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
                        currentProperty.endLineNumber = undefined;
                        updateLastPropertyEndLineNumber = true;
                    }
                }
                // When the block comment follows an open brace or an open token, we have the following scenario:
                // { /**
                // ../
                // }
                // The block comment should be assigned to the open brace not the first property below it
                if ((lastNonTriviaNonCommentToken === 1 /* SyntaxKind.OpenBraceToken */
                    || lastNonTriviaNonCommentToken === 3 /* SyntaxKind.OpenBracketToken */)
                    && lineOfLastNonTriviaNonCommentToken === scanner.getTokenStartLine()) {
                    updateBeginningLineNumber = true;
                }
                break;
            }
        }
        // Update the last and second to last non-trivia non-comment tokens
        if (token !== 14 /* SyntaxKind.LineBreakTrivia */
            && token !== 13 /* SyntaxKind.BlockCommentTrivia */
            && token !== 12 /* SyntaxKind.LineCommentTrivia */
            && token !== 15 /* SyntaxKind.Trivia */) {
            secondToLastNonTriviaNonCommentToken = lastNonTriviaNonCommentToken;
            lastNonTriviaNonCommentToken = token;
            lineOfLastNonTriviaNonCommentToken = scanner.getTokenStartLine();
            endIndexOfLastNonTriviaNonCommentToken = scanner.getTokenOffset() + scanner.getTokenLength() - numberOfCharactersOnPreviousLines;
        }
    }
    return rootTree;
}
function sortJsoncDocument(jsonDocument, propertyTree) {
    if (propertyTree.childrenProperties.length === 0) {
        return jsonDocument;
    }
    const sortedJsonDocument = TextDocument.create('test://test.json', 'json', 0, jsonDocument.getText());
    const queueToSort = [];
    updateSortingQueue(queueToSort, propertyTree, propertyTree.beginningLineNumber);
    while (queueToSort.length > 0) {
        const dataToSort = queueToSort.shift();
        const propertyTreeArray = dataToSort.propertyTreeArray;
        let beginningLineNumber = dataToSort.beginningLineNumber;
        for (let i = 0; i < propertyTreeArray.length; i++) {
            const propertyTree = propertyTreeArray[i];
            const range = Range.create(Position.create(propertyTree.beginningLineNumber, 0), Position.create(propertyTree.endLineNumber + 1, 0));
            const jsonContentToReplace = jsonDocument.getText(range);
            const jsonDocumentToReplace = TextDocument.create('test://test.json', 'json', 0, jsonContentToReplace);
            if (propertyTree.lastProperty === true && i !== propertyTreeArray.length - 1) {
                const lineWhereToAddComma = propertyTree.lineWhereToAddComma - propertyTree.beginningLineNumber;
                const indexWhereToAddComma = propertyTree.indexWhereToAddComa;
                const edit = {
                    range: Range.create(Position.create(lineWhereToAddComma, indexWhereToAddComma), Position.create(lineWhereToAddComma, indexWhereToAddComma)),
                    text: ','
                };
                TextDocument.update(jsonDocumentToReplace, [edit], 1);
            }
            else if (propertyTree.lastProperty === false && i === propertyTreeArray.length - 1) {
                const commaIndex = propertyTree.commaIndex;
                const commaLine = propertyTree.commaLine;
                const lineWhereToRemoveComma = commaLine - propertyTree.beginningLineNumber;
                const edit = {
                    range: Range.create(Position.create(lineWhereToRemoveComma, commaIndex), Position.create(lineWhereToRemoveComma, commaIndex + 1)),
                    text: ''
                };
                TextDocument.update(jsonDocumentToReplace, [edit], 1);
            }
            const length = propertyTree.endLineNumber - propertyTree.beginningLineNumber + 1;
            const edit = {
                range: Range.create(Position.create(beginningLineNumber, 0), Position.create(beginningLineNumber + length, 0)),
                text: jsonDocumentToReplace.getText()
            };
            TextDocument.update(sortedJsonDocument, [edit], 1);
            updateSortingQueue(queueToSort, propertyTree, beginningLineNumber);
            beginningLineNumber = beginningLineNumber + length;
        }
    }
    return sortedJsonDocument;
}
function updateSortingQueue(queue, propertyTree, beginningLineNumber) {
    if (propertyTree.childrenProperties.length === 0) {
        return;
    }
    if (propertyTree.type === Container.Object) {
        let minimumBeginningLineNumber = Infinity;
        for (const childProperty of propertyTree.childrenProperties) {
            if (childProperty.beginningLineNumber < minimumBeginningLineNumber) {
                minimumBeginningLineNumber = childProperty.beginningLineNumber;
            }
        }
        const diff = minimumBeginningLineNumber - propertyTree.beginningLineNumber;
        beginningLineNumber = beginningLineNumber + diff;
        queue.push(new SortingRange(beginningLineNumber, propertyTree.childrenProperties));
    }
    else if (propertyTree.type === Container.Array) {
        updateSortingQueueForArrayProperties(queue, propertyTree, beginningLineNumber);
    }
}
function updateSortingQueueForArrayProperties(queue, propertyTree, beginningLineNumber) {
    for (const subObject of propertyTree.childrenProperties) {
        // If the child property of the array is an object, then you can sort the properties within this object
        if (subObject.type === Container.Object) {
            let minimumBeginningLineNumber = Infinity;
            for (const childProperty of subObject.childrenProperties) {
                if (childProperty.beginningLineNumber < minimumBeginningLineNumber) {
                    minimumBeginningLineNumber = childProperty.beginningLineNumber;
                }
            }
            const diff = minimumBeginningLineNumber - subObject.beginningLineNumber;
            queue.push(new SortingRange(beginningLineNumber + subObject.beginningLineNumber - propertyTree.beginningLineNumber + diff, subObject.childrenProperties));
        }
        // If the child property of the array is an array, then you need to recurse on the children properties, until you find an object to sort
        if (subObject.type === Container.Array) {
            updateSortingQueueForArrayProperties(queue, subObject, beginningLineNumber + subObject.beginningLineNumber - propertyTree.beginningLineNumber);
        }
    }
}
class SortingRange {
    constructor(beginningLineNumber, propertyTreeArray) {
        this.beginningLineNumber = beginningLineNumber;
        this.propertyTreeArray = propertyTreeArray;
    }
}

export { sort };
