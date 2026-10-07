import {makeSpan, makeVList} from "../../buildCommon";
import * as html from "../../buildHTML";
import {isCharacterBox} from "../../utils";
import type {StyleInterface} from "../../Style";
import type Options from "../../Options";
import type {DomSpan, SymbolNode} from "../../domTree";
import type {AnyParseNode} from "../../parseNode";
import {makeEm} from "../../units";

// For an operator with limits, assemble the base, sup, and sub into a span.

export const assembleSupSub = (
    base: DomSpan | SymbolNode,
    supGroup: AnyParseNode | null | undefined,
    subGroup: AnyParseNode | null | undefined,
    options: Options,
    style: StyleInterface,
    slant: number,
    baseShift: number,
): DomSpan => {
    base = makeSpan([], [base]);
    const subIsSingleCharacter = subGroup &&  isCharacterBox(subGroup);
    let sub;
    let sup;
    // We manually have to handle the superscripts and subscripts. This,
    // aside from the kern calculations, is copied from supsub.
    if (supGroup) {
        const elem = html.buildGroup(
            supGroup, options.havingStyle(style.sup()), options);

        sup = {
            elem,
            kern: Math.max(
                options.fontMetrics().bigOpSpacing1,
                options.fontMetrics().bigOpSpacing3 - elem.depth),
        };
    }

    if (subGroup) {
        const elem = html.buildGroup(
            subGroup, options.havingStyle(style.sub()), options);

        sub = {
            elem,
            kern: Math.max(
                options.fontMetrics().bigOpSpacing2,
                options.fontMetrics().bigOpSpacing4 - elem.height),
        };
    }

    // Build the final group as a vlist of the possible subscript, base,
    // and possible superscript.
    let finalGroup;
    if (sup && sub) {
        const bottom = options.fontMetrics().bigOpSpacing5 +
            sub.elem.height + sub.elem.depth +
            sub.kern +
            base.depth + baseShift;

        finalGroup = makeVList({
            positionType: "bottom",
            positionData: bottom,
            children: [
                {type: "kern", size: options.fontMetrics().bigOpSpacing5},
                {type: "elem", elem: sub.elem, marginLeft: makeEm(-slant)},
                {type: "kern", size: sub.kern},
                {type: "elem", elem: base},
                {type: "kern", size: sup.kern},
                {type: "elem", elem: sup.elem, marginLeft: makeEm(slant)},
                {type: "kern", size: options.fontMetrics().bigOpSpacing5},
            ],
        }, options);
    } else if (sub) {
        const top = base.height - baseShift;

        // Shift the limits by the slant of the symbol. Note
        // that we are supposed to shift the limits by 1/2 of the slant,
        // but since we are centering the limits adding a full slant of
        // margin will shift by 1/2 that.
        finalGroup = makeVList({
            positionType: "top",
            positionData: top,
            children: [
                {type: "kern", size: options.fontMetrics().bigOpSpacing5},
                {type: "elem", elem: sub.elem, marginLeft: makeEm(-slant)},
                {type: "kern", size: sub.kern},
                {type: "elem", elem: base},
            ],
        }, options);
    } else if (sup) {
        const bottom = base.depth + baseShift;

        finalGroup = makeVList({
            positionType: "bottom",
            positionData: bottom,
            children: [
                {type: "elem", elem: base},
                {type: "kern", size: sup.kern},
                {type: "elem", elem: sup.elem, marginLeft: makeEm(slant)},
                {type: "kern", size: options.fontMetrics().bigOpSpacing5},
            ],
        }, options);
    } else {
        // This case probably shouldn't occur (this would mean the
        // supsub was sending us a group with no superscript or
        // subscript) but be safe.
        return base;
    }

    const parts = [finalGroup];
    if (sub && slant !== 0 && !subIsSingleCharacter) {
        // A negative margin-left was applied to the lower limit.
        // Avoid an overlap by placing a spacer on the left on the group.
        const spacer = makeSpan(["mspace"], [], options);
        spacer.style.marginRight = makeEm(slant);
        parts.unshift(spacer);
    }
    return makeSpan(["mop", "op-limits"], parts, options);
};
