import { NodeType, RuleSet, SimpleSelector } from '../parser/cssNodes.js';
import { Scanner } from '../parser/cssScanner.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { Parser } from '../parser/cssParser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Element {
    constructor() {
        this.parent = null;
        this.children = null;
        this.attributes = null;
    }
    findAttribute(name) {
        if (this.attributes) {
            for (const attribute of this.attributes) {
                if (attribute.name === name) {
                    return attribute.value;
                }
            }
        }
        return null;
    }
    addChild(child) {
        if (child instanceof Element) {
            child.parent = this;
        }
        if (!this.children) {
            this.children = [];
        }
        this.children.push(child);
    }
    append(text) {
        if (this.attributes) {
            const last = this.attributes[this.attributes.length - 1];
            last.value = last.value + text;
        }
    }
    prepend(text) {
        if (this.attributes) {
            const first = this.attributes[0];
            first.value = text + first.value;
        }
    }
    findRoot() {
        let curr = this;
        while (curr.parent && !(curr.parent instanceof RootElement)) {
            curr = curr.parent;
        }
        return curr;
    }
    removeChild(child) {
        if (this.children) {
            const index = this.children.indexOf(child);
            if (index !== -1) {
                this.children.splice(index, 1);
                return true;
            }
        }
        return false;
    }
    addAttr(name, value) {
        if (!this.attributes) {
            this.attributes = [];
        }
        for (const attribute of this.attributes) {
            if (attribute.name === name) {
                attribute.value += ' ' + value;
                return;
            }
        }
        this.attributes.push({ name, value });
    }
    clone(cloneChildren = true) {
        const elem = new Element();
        if (this.attributes) {
            elem.attributes = [];
            for (const attribute of this.attributes) {
                elem.addAttr(attribute.name, attribute.value);
            }
        }
        if (cloneChildren && this.children) {
            elem.children = [];
            for (let index = 0; index < this.children.length; index++) {
                elem.addChild(this.children[index].clone());
            }
        }
        return elem;
    }
    cloneWithParent() {
        const clone = this.clone(false);
        if (this.parent && !(this.parent instanceof RootElement)) {
            const parentClone = this.parent.cloneWithParent();
            parentClone.addChild(clone);
        }
        return clone;
    }
}
class RootElement extends Element {
}
class LabelElement extends Element {
    constructor(label) {
        super();
        this.addAttr('name', label);
    }
}
class MarkedStringPrinter {
    constructor(quote) {
        this.quote = quote;
        this.result = [];
        // empty
    }
    print(element, flagOpts) {
        this.result = [];
        if (element instanceof RootElement) {
            if (element.children) {
                this.doPrint(element.children, 0);
            }
        }
        else {
            this.doPrint([element], 0);
        }
        let value;
        if (flagOpts) {
            value = `${flagOpts.text}\n … ` + this.result.join('\n');
        }
        else {
            value = this.result.join('\n');
        }
        return [{ language: 'html', value }];
    }
    doPrint(elements, indent) {
        for (const element of elements) {
            this.doPrintElement(element, indent);
            if (element.children) {
                this.doPrint(element.children, indent + 1);
            }
        }
    }
    writeLine(level, content) {
        const indent = new Array(level + 1).join('  ');
        this.result.push(indent + content);
    }
    doPrintElement(element, indent) {
        const name = element.findAttribute('name');
        // special case: a simple label
        if (element instanceof LabelElement || name === '\u2026') {
            this.writeLine(indent, name);
            return;
        }
        // the real deal
        const content = ['<'];
        // element name
        if (name) {
            content.push(name);
        }
        else {
            content.push('element');
        }
        // attributes
        if (element.attributes) {
            for (const attr of element.attributes) {
                if (attr.name !== 'name') {
                    content.push(' ');
                    content.push(attr.name);
                    const value = attr.value;
                    if (value) {
                        content.push('=');
                        content.push(quotes.ensure(value, this.quote));
                    }
                }
            }
        }
        content.push('>');
        this.writeLine(indent, content.join(''));
    }
}
var quotes;
(function (quotes) {
    function ensure(value, which) {
        return which + remove(value) + which;
    }
    quotes.ensure = ensure;
    function remove(value) {
        const match = value.match(/^['"](.*)["']$/);
        if (match) {
            return match[1];
        }
        return value;
    }
    quotes.remove = remove;
})(quotes || (quotes = {}));
class Specificity {
    constructor() {
        /** Count of identifiers (e.g., `#app`) */
        this.id = 0;
        /** Count of attributes (`[type="number"]`), classes (`.container-fluid`), and pseudo-classes (`:hover`) */
        this.attr = 0;
        /** Count of tag names (`div`), and pseudo-elements (`::before`) */
        this.tag = 0;
    }
}
function toElement(node, parentElement) {
    let result = new Element();
    for (const child of node.getChildren()) {
        switch (child.type) {
            case NodeType.SelectorCombinator:
                if (parentElement) {
                    const segments = child.getText().split('&');
                    if (segments.length === 1) {
                        // should not happen
                        result.addAttr('name', segments[0]);
                        break;
                    }
                    result = parentElement.cloneWithParent();
                    if (segments[0]) {
                        const root = result.findRoot();
                        root.prepend(segments[0]);
                    }
                    for (let i = 1; i < segments.length; i++) {
                        if (i > 1) {
                            const clone = parentElement.cloneWithParent();
                            result.addChild(clone.findRoot());
                            result = clone;
                        }
                        result.append(segments[i]);
                    }
                }
                break;
            case NodeType.SelectorPlaceholder:
                if (child.matches('@at-root')) {
                    return result;
                }
            // fall through
            case NodeType.ElementNameSelector:
                const text = child.getText();
                result.addAttr('name', text === '*' ? 'element' : unescape(text));
                break;
            case NodeType.ClassSelector:
                result.addAttr('class', unescape(child.getText().substring(1)));
                break;
            case NodeType.IdentifierSelector:
                result.addAttr('id', unescape(child.getText().substring(1)));
                break;
            case NodeType.MixinDeclaration:
                result.addAttr('class', child.getName());
                break;
            case NodeType.PseudoSelector:
                result.addAttr(unescape(child.getText()), '');
                break;
            case NodeType.AttributeSelector:
                const selector = child;
                const identifier = selector.getIdentifier();
                if (identifier) {
                    const expression = selector.getValue();
                    const operator = selector.getOperator();
                    let value;
                    if (expression && operator) {
                        switch (unescape(operator.getText())) {
                            case '|=':
                                // excatly or followed by -words
                                value = `${quotes.remove(unescape(expression.getText()))}-\u2026`;
                                break;
                            case '^=':
                                // prefix
                                value = `${quotes.remove(unescape(expression.getText()))}\u2026`;
                                break;
                            case '$=':
                                // suffix
                                value = `\u2026${quotes.remove(unescape(expression.getText()))}`;
                                break;
                            case '~=':
                                // one of a list of words
                                value = ` \u2026 ${quotes.remove(unescape(expression.getText()))} \u2026 `;
                                break;
                            case '*=':
                                // substring
                                value = `\u2026${quotes.remove(unescape(expression.getText()))}\u2026`;
                                break;
                            default:
                                value = quotes.remove(unescape(expression.getText()));
                                break;
                        }
                    }
                    result.addAttr(unescape(identifier.getText()), value);
                }
                break;
        }
    }
    return result;
}
function unescape(content) {
    const scanner = new Scanner();
    scanner.setSource(content);
    const token = scanner.scanUnquotedString();
    if (token) {
        return token.text;
    }
    return content;
}
class SelectorPrinting {
    constructor(cssDataManager) {
        this.cssDataManager = cssDataManager;
    }
    selectorToMarkedString(node, flagOpts) {
        const root = selectorToElement(node);
        if (root) {
            const markedStrings = new MarkedStringPrinter('"').print(root, flagOpts);
            markedStrings.push(this.selectorToSpecificityMarkedString(node));
            return markedStrings;
        }
        else {
            return [];
        }
    }
    simpleSelectorToMarkedString(node) {
        const element = toElement(node);
        const markedStrings = new MarkedStringPrinter('"').print(element);
        markedStrings.push(this.selectorToSpecificityMarkedString(node));
        return markedStrings;
    }
    isPseudoElementIdentifier(text) {
        const match = text.match(/^::?([\w-]+)/);
        if (!match) {
            return false;
        }
        return !!this.cssDataManager.getPseudoElement('::' + match[1]);
    }
    selectorToSpecificityMarkedString(node) {
        const calculateMostSpecificListItem = (childElements) => {
            const specificity = new Specificity();
            let mostSpecificListItem = new Specificity();
            for (const containerElement of childElements) {
                for (const childElement of containerElement.getChildren()) {
                    const itemSpecificity = calculateScore(childElement);
                    if (itemSpecificity.id > mostSpecificListItem.id) {
                        mostSpecificListItem = itemSpecificity;
                        continue;
                    }
                    else if (itemSpecificity.id < mostSpecificListItem.id) {
                        continue;
                    }
                    if (itemSpecificity.attr > mostSpecificListItem.attr) {
                        mostSpecificListItem = itemSpecificity;
                        continue;
                    }
                    else if (itemSpecificity.attr < mostSpecificListItem.attr) {
                        continue;
                    }
                    if (itemSpecificity.tag > mostSpecificListItem.tag) {
                        mostSpecificListItem = itemSpecificity;
                        continue;
                    }
                }
            }
            specificity.id += mostSpecificListItem.id;
            specificity.attr += mostSpecificListItem.attr;
            specificity.tag += mostSpecificListItem.tag;
            return specificity;
        };
        //https://www.w3.org/TR/selectors-3/#specificity
        const calculateScore = (node) => {
            const specificity = new Specificity();
            elementLoop: for (const element of node.getChildren()) {
                switch (element.type) {
                    case NodeType.IdentifierSelector:
                        specificity.id++;
                        break;
                    case NodeType.ClassSelector:
                    case NodeType.AttributeSelector:
                        specificity.attr++;
                        break;
                    case NodeType.ElementNameSelector:
                        //ignore universal selector
                        if (element.matches('*')) {
                            break;
                        }
                        specificity.tag++;
                        break;
                    case NodeType.PseudoSelector:
                        const text = element.getText();
                        const childElements = element.getChildren();
                        if (this.isPseudoElementIdentifier(text)) {
                            if (text.match(/^::slotted/i) && childElements.length > 0) {
                                // The specificity of ::slotted() is that of a pseudo-element, plus the specificity of its argument.
                                // ::slotted() does not allow a selector list as its argument, but this isn't the right place to give feedback on validity.
                                // Reporting the most specific child will be correct for correct CSS and will be forgiving in case of mistakes.
                                specificity.tag++;
                                let mostSpecificListItem = calculateMostSpecificListItem(childElements);
                                specificity.id += mostSpecificListItem.id;
                                specificity.attr += mostSpecificListItem.attr;
                                specificity.tag += mostSpecificListItem.tag;
                                continue elementLoop;
                            }
                            specificity.tag++; // pseudo element
                            continue elementLoop;
                        }
                        // where and child selectors have zero specificity
                        if (text.match(/^:where/i)) {
                            continue elementLoop;
                        }
                        // the most specific child selector
                        if (text.match(/^:(?:not|has|is)/i) && childElements.length > 0) {
                            let mostSpecificListItem = calculateMostSpecificListItem(childElements);
                            specificity.id += mostSpecificListItem.id;
                            specificity.attr += mostSpecificListItem.attr;
                            specificity.tag += mostSpecificListItem.tag;
                            continue elementLoop;
                        }
                        if (text.match(/^:(?:host|host-context)/i) && childElements.length > 0) {
                            // The specificity of :host() is that of a pseudo-class, plus the specificity of its argument.
                            // The specificity of :host-context() is that of a pseudo-class, plus the specificity of its argument.
                            specificity.attr++;
                            let mostSpecificListItem = calculateMostSpecificListItem(childElements);
                            specificity.id += mostSpecificListItem.id;
                            specificity.attr += mostSpecificListItem.attr;
                            specificity.tag += mostSpecificListItem.tag;
                            continue elementLoop;
                        }
                        if (text.match(/^:(?:nth-child|nth-last-child)/i) && childElements.length > 0) {
                            /* The specificity of the :nth-child(An+B [of S]?) pseudo-class is the specificity of a single pseudo-class plus, if S is specified, the specificity of the most specific complex selector in S */
                            // https://www.w3.org/TR/selectors-4/#the-nth-child-pseudo
                            specificity.attr++;
                            // 23 = Binary Expression.
                            if (childElements.length === 3 && childElements[1].type === 23) {
                                let mostSpecificListItem = calculateMostSpecificListItem(childElements[2].getChildren());
                                specificity.id += mostSpecificListItem.id;
                                specificity.attr += mostSpecificListItem.attr;
                                specificity.tag += mostSpecificListItem.tag;
                                continue elementLoop;
                            }
                            // Edge case: 'n' without integer prefix A, with B integer non-existent, is not regarded as a binary expression token.
                            const parser = new Parser();
                            const pseudoSelectorText = childElements[1].getText();
                            parser.scanner.setSource(pseudoSelectorText);
                            const firstToken = parser.scanner.scan();
                            const secondToken = parser.scanner.scan();
                            if (firstToken.text === 'n' || (firstToken.text === '-n' && secondToken.text === 'of')) {
                                const complexSelectorListNodes = [];
                                const complexSelectorText = pseudoSelectorText.slice(secondToken.offset + 2);
                                const complexSelectorArray = complexSelectorText.split(',');
                                for (const selector of complexSelectorArray) {
                                    const node = parser.internalParse(selector, parser._parseSelector);
                                    if (node) {
                                        complexSelectorListNodes.push(node);
                                    }
                                }
                                let mostSpecificListItem = calculateMostSpecificListItem(complexSelectorListNodes);
                                specificity.id += mostSpecificListItem.id;
                                specificity.attr += mostSpecificListItem.attr;
                                specificity.tag += mostSpecificListItem.tag;
                                continue elementLoop;
                            }
                            continue elementLoop;
                        }
                        specificity.attr++; //pseudo class
                        continue elementLoop;
                }
                if (element.getChildren().length > 0) {
                    const itemSpecificity = calculateScore(element);
                    specificity.id += itemSpecificity.id;
                    specificity.attr += itemSpecificity.attr;
                    specificity.tag += itemSpecificity.tag;
                }
            }
            return specificity;
        };
        const specificity = calculateScore(node);
        return `[${t('Selector Specificity')}](https://developer.mozilla.org/docs/Web/CSS/Specificity): (${specificity.id}, ${specificity.attr}, ${specificity.tag})`;
    }
}
class SelectorElementBuilder {
    constructor(element) {
        this.prev = null;
        this.element = element;
    }
    processSelector(selector) {
        let parentElement = null;
        if (!(this.element instanceof RootElement)) {
            if (selector.getChildren().some((c) => c.hasChildren() && c.getChild(0).type === NodeType.SelectorCombinator)) {
                const curr = this.element.findRoot();
                if (curr.parent instanceof RootElement) {
                    parentElement = this.element;
                    this.element = curr.parent;
                    this.element.removeChild(curr);
                    this.prev = null;
                }
            }
        }
        for (const selectorChild of selector.getChildren()) {
            if (selectorChild instanceof SimpleSelector) {
                if (this.prev instanceof SimpleSelector) {
                    const labelElement = new LabelElement('\u2026');
                    this.element.addChild(labelElement);
                    this.element = labelElement;
                }
                else if (this.prev && (this.prev.matches('+') || this.prev.matches('~')) && this.element.parent) {
                    this.element = this.element.parent;
                }
                if (this.prev && this.prev.matches('~')) {
                    this.element.addChild(new LabelElement('\u22EE'));
                }
                const thisElement = toElement(selectorChild, parentElement);
                const root = thisElement.findRoot();
                this.element.addChild(root);
                this.element = thisElement;
            }
            if (selectorChild instanceof SimpleSelector ||
                selectorChild.type === NodeType.SelectorCombinatorParent ||
                selectorChild.type === NodeType.SelectorCombinatorShadowPiercingDescendant ||
                selectorChild.type === NodeType.SelectorCombinatorSibling ||
                selectorChild.type === NodeType.SelectorCombinatorAllSiblings) {
                this.prev = selectorChild;
            }
        }
    }
}
function isNewSelectorContext(node) {
    switch (node.type) {
        case NodeType.MixinDeclaration:
        case NodeType.Stylesheet:
            return true;
    }
    return false;
}
function selectorToElement(node) {
    if (node.matches('@at-root')) {
        return null;
    }
    const root = new RootElement();
    const parentRuleSets = [];
    const ruleSet = node.getParent();
    if (ruleSet instanceof RuleSet) {
        let parent = ruleSet.getParent(); // parent of the selector's ruleset
        while (parent && !isNewSelectorContext(parent)) {
            if (parent instanceof RuleSet) {
                if (parent.getSelectors().matches('@at-root')) {
                    break;
                }
                parentRuleSets.push(parent);
            }
            parent = parent.getParent();
        }
    }
    const builder = new SelectorElementBuilder(root);
    for (let i = parentRuleSets.length - 1; i >= 0; i--) {
        const selector = parentRuleSets[i].getSelectors().getChild(0);
        if (selector) {
            builder.processSelector(selector);
        }
    }
    builder.processSelector(node);
    return root;
}

export { Element, LabelElement, RootElement, SelectorPrinting, selectorToElement, toElement };
