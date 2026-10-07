/**
 * These objects store data about MathML nodes. This is the MathML equivalent
 * of the types in domTree.js. Since MathML handles its own rendering, and
 * since we're mainly using MathML to improve accessibility, we don't manage
 * any of the styling state that the plain DOM nodes do.
 *
 * The `toNode` and `toMarkup` functions work similarly to how they do in
 * domTree.js, creating namespaced DOM nodes and HTML text markup respectively.
 */

import {escape} from "./utils";
import {DocumentFragment} from "./tree";
import {createClass} from "./domTree";
import {makeEm} from "./units";

import type {VirtualNode} from "./tree";

/**
 * MathML node types used in KaTeX. For a complete list of MathML nodes, see
 * https://developer.mozilla.org/en-US/docs/Web/MathML/Element.
 */
export type MathNodeType =
    "math" | "annotation" | "semantics" |
    "mtext" | "mn" | "mo" | "mi" | "mspace" |
    "mover" | "munder" | "munderover" | "msup" | "msub" | "msubsup" |
    "mfrac" | "mroot" | "msqrt" |
    "mtable" | "mtr" | "mtd" | "mlabeledtr" |
    "mrow" | "menclose" |
    "mstyle" | "mpadded" | "mphantom" | "mglyph";

export interface MathDomNode extends VirtualNode {
    toText(): string;
}

export type documentFragment = DocumentFragment<MathDomNode>;
export function newDocumentFragment(
    children: ReadonlyArray<MathDomNode>
): documentFragment {
    return new DocumentFragment(children);
}

/**
 * This node represents a general purpose MathML node of any type. The
 * constructor requires the type of node to create (for example, `"mo"` or
 * `"mspace"`, corresponding to `<mo>` and `<mspace>` tags).
 */
export class MathNode implements MathDomNode {
    type: MathNodeType;
    attributes: Record<string, string>;
    children: MathDomNode[];
    classes: string[];

    constructor(
        type: MathNodeType,
        children?: MathDomNode[],
        classes?: string[]
    ) {
        this.type = type;
        this.attributes = {};
        this.children = children || [];
        this.classes = classes || [];
    }

    /**
     * Sets an attribute on a MathML node. MathML depends on attributes to convey a
     * semantic content, so this is used heavily.
     */
    setAttribute(name: string, value: string) {
        this.attributes[name] = value;
    }

    /**
     * Gets an attribute on a MathML node.
     */
    getAttribute(name: string): string {
        return this.attributes[name];
    }

    /**
     * Converts the math node into a MathML-namespaced DOM element.
     */
    toNode(): Node {
        const node = document.createElementNS(
            "http://www.w3.org/1998/Math/MathML", this.type);

        for (const attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                node.setAttribute(attr, this.attributes[attr]);
            }
        }

        if (this.classes.length > 0) {
            node.className = createClass(this.classes);
        }

        for (let i = 0; i < this.children.length; i++) {
            // Combine multiple TextNodes into one TextNode, to prevent
            // screen readers from reading each as a separate word [#3995]
            if (this.children[i] instanceof TextNode &&
                this.children[i + 1] instanceof TextNode) {
                let text = this.children[i].toText() + this.children[++i].toText();
                while (this.children[i + 1] instanceof TextNode) {
                    text += this.children[++i].toText();
                }
                node.appendChild(new TextNode(text).toNode());
            } else {
                node.appendChild(this.children[i].toNode());
            }
        }

        return node;
    }

    /**
     * Converts the math node into an HTML markup string.
     */
    toMarkup(): string {
        let markup = "<" + this.type;

        // Add the attributes
        for (const attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                markup += " " + attr + "=\"";
                markup += escape(this.attributes[attr]);
                markup += "\"";
            }
        }

        if (this.classes.length > 0) {
            markup += ` class ="${escape(createClass(this.classes))}"`;
        }

        markup += ">";

        for (let i = 0; i < this.children.length; i++) {
            markup += this.children[i].toMarkup();
        }

        markup += "</" + this.type + ">";

        return markup;
    }

    /**
     * Converts the math node into a string, similar to innerText, but escaped.
     */
    toText(): string {
        return this.children.map(child => child.toText()).join("");
    }
}

/**
 * This node represents a piece of text.
 */
export class TextNode implements MathDomNode {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    /**
     * Converts the text node into a DOM text node.
     */
    toNode(): Node {
        return document.createTextNode(this.text);
    }

    /**
     * Converts the text node into escaped HTML markup
     * (representing the text itself).
     */
    toMarkup(): string {
        return escape(this.toText());
    }

    /**
     * Converts the text node into a string
     * (representing the text itself).
     */
    toText(): string {
        return this.text;
    }
}

/**
 * This node represents a space, but may render as <mspace.../> or as text,
 * depending on the width.
 */
export class SpaceNode implements MathDomNode {
    width: number;
    character: string | null | undefined;

    /**
     * Create a Space node with width given in CSS ems.
     */
    constructor(width: number) {
        this.width = width;
        // See https://www.w3.org/TR/2000/WD-MathML2-20000328/chapter6.html
        // for a table of space-like characters.  We use Unicode
        // representations instead of &LongNames; as it's not clear how to
        // make the latter via document.createTextNode.
        if (width >= 0.05555 && width <= 0.05556) {
            this.character = "\u200a";           // &VeryThinSpace;
        } else if (width >= 0.1666 && width <= 0.1667) {
            this.character = "\u2009";           // &ThinSpace;
        } else if (width >= 0.2222 && width <= 0.2223) {
            this.character = "\u2005";           // &MediumSpace;
        } else if (width >= 0.2777 && width <= 0.2778) {
            this.character = "\u2005\u200a";     // &ThickSpace;
        } else if (width >= -0.05556 && width <= -0.05555) {
            this.character = "\u200a\u2063";     // &NegativeVeryThinSpace;
        } else if (width >= -0.1667 && width <= -0.1666) {
            this.character = "\u2009\u2063";     // &NegativeThinSpace;
        } else if (width >= -0.2223 && width <= -0.2222) {
            this.character = "\u205f\u2063";     // &NegativeMediumSpace;
        } else if (width >= -0.2778 && width <= -0.2777) {
            this.character = "\u2005\u2063";     // &NegativeThickSpace;
        } else {
            this.character = null;
        }
    }

    /**
     * Converts the math node into a MathML-namespaced DOM element.
     */
    toNode(): Node {
        if (this.character) {
            return document.createTextNode(this.character);
        } else {
            const node = document.createElementNS(
                "http://www.w3.org/1998/Math/MathML", "mspace");
            node.setAttribute("width", makeEm(this.width));
            return node;
        }
    }

    /**
     * Converts the math node into an HTML markup string.
     */
    toMarkup(): string {
        if (this.character) {
            return `<mtext>${this.character}</mtext>`;
        } else {
            return `<mspace width="${makeEm(this.width)}"/>`;
        }
    }

    /**
     * Converts the math node into a string, similar to innerText.
     */
    toText(): string {
        if (this.character) {
            return this.character;
        } else {
            return " ";
        }
    }
}
