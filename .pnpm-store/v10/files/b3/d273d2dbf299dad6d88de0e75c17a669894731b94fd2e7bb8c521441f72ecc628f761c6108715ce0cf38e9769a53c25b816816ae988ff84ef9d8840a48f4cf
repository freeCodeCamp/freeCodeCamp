import {defineFunctionBuilders} from "../defineFunction";
import {makeSpan, makeVList} from "../buildCommon";
import {SymbolNode} from "../domTree";
import {isCharacterBox} from "../utils";
import {MathNode} from "../mathMLTree";
import {makeEm} from "../units";
import Style from "../Style";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";
import * as accent from "./accent";
import * as horizBrace from "./horizBrace";
import * as op from "./op";
import * as operatorname from "./operatorname";

import type Options from "../Options";
import type {ParseNode} from "../parseNode";
import type {HtmlBuilder} from "../defineFunction";
import type {MathNodeType} from "../mathMLTree";

/**
 * Sometimes, groups perform special rules when they have superscripts or
 * subscripts attached to them. This function lets the `supsub` group know that
 * Sometimes, groups perform special rules when they have superscripts or
 * its inner element should handle the superscripts and subscripts instead of
 * handling them itself.
 */
const htmlBuilderDelegate = function(
    group: ParseNode<"supsub">,
    options: Options,
): HtmlBuilder<any> | null | undefined {
    const base = group.base;
    if (!base) {
        return null;
    } else if (base.type === "op") {
        // Operators handle supsubs differently when they have limits
        // (e.g. `\displaystyle\sum_2^3`)
        const delegate = base.limits &&
            (options.style.size === Style.DISPLAY.size ||
            base.alwaysHandleSupSub);
        return delegate ? op.htmlBuilder : null;
    } else if (base.type === "operatorname") {
        const delegate = base.alwaysHandleSupSub &&
            (options.style.size === Style.DISPLAY.size || base.limits);
        return delegate ? operatorname.htmlBuilder : null;
    } else if (base.type === "accent") {
        return isCharacterBox(base.base) ? accent.htmlBuilder : null;
    } else if (base.type === "horizBrace") {
        const isSup = !group.sub;
        return isSup === base.isOver ? horizBrace.htmlBuilder : null;
    } else {
        return null;
    }
};

// Super scripts and subscripts, whose precise placement can depend on other
// functions that precede them.
defineFunctionBuilders({
    type: "supsub",
    htmlBuilder(group, options) {
        // Superscript and subscripts are handled in the TeXbook on page
        // 445-446, rules 18(a-f).

        // Here is where we defer to the inner group if it should handle
        // superscripts and subscripts itself.
        const builderDelegate = htmlBuilderDelegate(group, options);
        if (builderDelegate) {
            return builderDelegate(group, options);
        }

        const {base: valueBase, sup: valueSup, sub: valueSub} = group;
        const base = html.buildGroup(valueBase, options);
        let supm;
        let subm;

        const metrics = options.fontMetrics();

        // Rule 18a
        let supShift = 0;
        let subShift = 0;

        const isCharBox = valueBase && isCharacterBox(valueBase);
        if (valueSup) {
            const newOptions = options.havingStyle(options.style.sup());
            supm = html.buildGroup(valueSup, newOptions, options);
            if (!isCharBox) {
                supShift = base.height - newOptions.fontMetrics().supDrop
                    * newOptions.sizeMultiplier / options.sizeMultiplier;
            }
        }

        if (valueSub) {
            const newOptions = options.havingStyle(options.style.sub());
            subm = html.buildGroup(valueSub, newOptions, options);
            if (!isCharBox) {
                subShift = base.depth + newOptions.fontMetrics().subDrop
                    * newOptions.sizeMultiplier / options.sizeMultiplier;
            }
        }

        // Rule 18c
        let minSupShift;
        if (options.style === Style.DISPLAY) {
            minSupShift = metrics.sup1;
        } else if (options.style.cramped) {
            minSupShift = metrics.sup3;
        } else {
            minSupShift = metrics.sup2;
        }

        // scriptspace is a font-size-independent size, so scale it
        // appropriately for use as the marginRight.
        const multiplier = options.sizeMultiplier;
        const marginRight = makeEm((0.5 / metrics.ptPerEm) / multiplier);

        let marginLeft = null;
        if (subm) {
            // Subscripts shouldn't be shifted by the base's italic correction.
            // Account for that by shifting the subscript back the appropriate
            // amount. Note we only do this when the base is a single symbol.
            const isOiint =
                group.base && group.base.type === "op" && group.base.name &&
                (group.base.name === "\\oiint" || group.base.name === "\\oiiint");
            if (base instanceof SymbolNode || isOiint) {
                // @ts-ignore
                marginLeft = makeEm(-base.italic);
            }
        }

        let supsub;
        if (supm && subm) {
            supShift = Math.max(
                supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
            subShift = Math.max(subShift, metrics.sub2);

            const ruleWidth = metrics.defaultRuleThickness;

            // Rule 18e
            const maxWidth = 4 * ruleWidth;
            if ((supShift - supm.depth) - (subm.height - subShift) < maxWidth) {
                subShift = maxWidth - (supShift - supm.depth) + subm.height;
                const psi = 0.8 * metrics.xHeight - (supShift - supm.depth);
                if (psi > 0) {
                    supShift += psi;
                    subShift -= psi;
                }
            }

            const vlistElem = [
                {type: "elem" as const, elem: subm, shift: subShift, marginRight,
                    marginLeft},
                {type: "elem" as const, elem: supm, shift: -supShift, marginRight},
            ];

            supsub = makeVList({
                positionType: "individualShift",
                children: vlistElem,
            }, options);
        } else if (subm) {
            // Rule 18b
            subShift = Math.max(
                subShift, metrics.sub1,
                subm.height - 0.8 * metrics.xHeight);

            const vlistElem =
                [{type: "elem" as const, elem: subm, marginLeft, marginRight}];

            supsub = makeVList({
                positionType: "shift",
                positionData: subShift,
                children: vlistElem,
            }, options);
        } else if (supm) {
            // Rule 18c, d
            supShift = Math.max(supShift, minSupShift,
                supm.depth + 0.25 * metrics.xHeight);

            supsub = makeVList({
                positionType: "shift",
                positionData: -supShift,
                children: [{type: "elem" as const, elem: supm, marginRight}],
            }, options);
        } else {
            throw new Error("supsub must have either sup or sub.");
        }

        // Wrap the supsub vlist in a span.msupsub to reset text-align.
        const mclass = html.getTypeOfDomTree(base, "right") || "mord";
        return makeSpan([mclass],
            [base, makeSpan(["msupsub"], [supsub])],
            options);
    },
    mathmlBuilder(group, options) {
        // Is the inner group a relevant horizontal brace?
        let isBrace = false;
        let isOver;
        let isSup;

        if (group.base && group.base.type === "horizBrace") {
            isSup = !!group.sup;
            if (isSup === group.base.isOver) {
                isBrace = true;
                isOver = group.base.isOver;
            }
        }

        if (group.base &&
            (group.base.type === "op" || group.base.type === "operatorname")) {
            group.base.parentIsSupSub = true;
        }

        const children = [mml.buildGroup(group.base, options)];

        if (group.sub) {
            children.push(mml.buildGroup(group.sub, options));
        }

        if (group.sup) {
            children.push(mml.buildGroup(group.sup, options));
        }

        let nodeType: MathNodeType;
        if (isBrace) {
            nodeType = (isOver ? "mover" : "munder");
        } else if (!group.sub) {
            const base = group.base;
            if (base && base.type === "op" && base.limits &&
                (options.style === Style.DISPLAY || base.alwaysHandleSupSub)) {
                nodeType = "mover";
            } else if (base && base.type === "operatorname" &&
                base.alwaysHandleSupSub &&
                (base.limits || options.style === Style.DISPLAY)) {
                nodeType = "mover";
            } else {
                nodeType = "msup";
            }
        } else if (!group.sup) {
            const base = group.base;
            if (base && base.type === "op" && base.limits &&
                (options.style === Style.DISPLAY || base.alwaysHandleSupSub)) {
                nodeType = "munder";
            } else if (base && base.type === "operatorname" &&
                base.alwaysHandleSupSub &&
                (base.limits || options.style === Style.DISPLAY)) {
                nodeType = "munder";
            } else {
                nodeType = "msub";
            }
        } else {
            const base = group.base;
            if (base && base.type === "op" && base.limits &&
                options.style === Style.DISPLAY) {
                nodeType = "munderover";
            } else if (base && base.type === "operatorname" &&
                base.alwaysHandleSupSub &&
                (options.style === Style.DISPLAY || base.limits)) {
                nodeType = "munderover";
            } else {
                nodeType = "msubsup";
            }
        }

        return new MathNode(nodeType, children);
    },
});
