// TODO(kevinb): implement \\sl and \\sc

import {binrelClass} from "./mclass";
import defineFunction, {normalizeArgument} from "../defineFunction";
import {isCharacterBox} from "../utils";

import * as html from "../buildHTML";
import * as mml from "../buildMathML";

import type Options from "../Options";
import type {ParseNode} from "../parseNode";

const htmlBuilder = (group: ParseNode<"font">, options: Options) => {
    const font = group.font;
    const newOptions = options.withFont(font);
    return html.buildGroup(group.body, newOptions);
};

const mathmlBuilder = (group: ParseNode<"font">, options: Options) => {
    const font = group.font;
    const newOptions = options.withFont(font);
    return mml.buildGroup(group.body, newOptions);
};

const fontAliases: Record<string, string> = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol",
};

defineFunction({
    type: "font",
    names: [
        // styles, except \boldsymbol defined below
        "\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit",

        // families
        "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf",
        "\\mathtt",

        // aliases, except \bm defined below
        "\\Bbb", "\\bold", "\\frak",
    ],
    props: {
        numArgs: 1,
        allowedInArgument: true,
    },
    handler: ({parser, funcName}, args) => {
        const body = normalizeArgument(args[0]);
        let func = funcName;
        if (func in fontAliases) {
            func = fontAliases[func];
        }
        return {
            type: "font",
            mode: parser.mode,
            font: func.slice(1),
            body,
        };
    },
    htmlBuilder,
    mathmlBuilder,
});

defineFunction({
    type: "mclass",
    names: ["\\boldsymbol", "\\bm"],
    props: {
        numArgs: 1,
    },
    handler: ({parser}, args) => {
        const body = args[0];
        // amsbsy.sty's \boldsymbol uses \binrel spacing to inherit the
        // argument's bin|rel|ord status
        return {
            type: "mclass",
            mode: parser.mode,
            mclass: binrelClass(body),
            body: [
                {
                    type: "font",
                    mode: parser.mode,
                    font: "boldsymbol",
                    body,
                },
            ],
            isCharacterBox: isCharacterBox(body),
        };
    },
});

// Old font changing functions
defineFunction({
    type: "font",
    names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
    props: {
        numArgs: 0,
        allowedInText: true,
    },
    handler: ({parser, funcName, breakOnTokenText}, args) => {
        const {mode} = parser;
        const body = parser.parseExpression(true, breakOnTokenText);
        const style = `math${funcName.slice(1)}`;

        return {
            type: "font",
            mode: mode,
            font: style,
            body: {
                type: "ordgroup",
                mode: parser.mode,
                body,
            },
        };
    },
    htmlBuilder,
    mathmlBuilder,
});
