import defineFunction from "../defineFunction";
import type {Measurement} from "../units";
import {calculateSize, validUnit, makeEm} from "../units";
import ParseError from "../ParseError";
import {Img} from "../domTree";
import {MathNode} from "../mathMLTree";
import {assertNodeType} from "../parseNode";
import type {CssStyle} from "../domTree";

const sizeData = function(str: string): Measurement {
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) {
        // str is a number with no unit specified.
        // default unit is bp, per graphix package.
        return {number: +str, unit: "bp"};
    } else {
        const match = (/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/).exec(str);
        if (!match) {
            throw new ParseError("Invalid size: '" + str
                + "' in \\includegraphics");
        }
        const data = {
            number: +(match[1] + match[2]), // sign + magnitude, cast to number
            unit: match[3],
        };
        if (!validUnit(data)) {
            throw new ParseError("Invalid unit: '" + data.unit
             + "' in \\includegraphics.");
        }
        return data;
    }
};

defineFunction({
    type: "includegraphics",
    names: ["\\includegraphics"],
    props: {
        numArgs: 1,
        numOptionalArgs: 1,
        argTypes: ["raw", "url"],
        allowedInText: false,
    },
    handler: ({parser}, args, optArgs) => {
        let width = {number: 0, unit: "em"};
        let height = {number: 0.9, unit: "em"};    // sorta character sized.
        let totalheight = {number: 0, unit: "em"};
        let alt = "";

        if (optArgs[0]) {
            const attributeStr = assertNodeType(optArgs[0], "raw").string;

            // Parser.js does not parse key/value pairs. We get a string.
            const attributes = attributeStr.split(",");
            for (let i = 0; i < attributes.length; i++) {
                const keyVal = attributes[i].split("=");
                if (keyVal.length === 2) {
                    const str = keyVal[1].trim();
                    switch (keyVal[0].trim()) {
                        case "alt":
                            alt = str;
                            break;
                        case "width":
                            width = sizeData(str);
                            break;
                        case "height":
                            height = sizeData(str);
                            break;
                        case "totalheight":
                            totalheight = sizeData(str);
                            break;
                        default:
                            throw new ParseError("Invalid key: '" + keyVal[0] +
                                "' in \\includegraphics.");
                    }
                }
            }
        }

        const src = assertNodeType(args[0], "url").url;

        if (alt === "") {
            // No alt given. Use the file name. Strip away the path.
            alt = src;
            alt = alt.replace(/^.*[\\/]/, '');
            alt = alt.substring(0, alt.lastIndexOf('.'));
        }

        if (!parser.settings.isTrusted({
            command: "\\includegraphics",
            url: src,
        })) {
            return parser.formatUnsupportedCmd("\\includegraphics");
        }

        return {
            type: "includegraphics",
            mode: parser.mode,
            alt: alt,
            width: width,
            height: height,
            totalheight: totalheight,
            src: src,
        };
    },
    htmlBuilder: (group, options) => {
        const height = calculateSize(group.height, options);
        let depth = 0;

        if (group.totalheight.number > 0) {
            depth = calculateSize(group.totalheight, options) - height;
        }

        let width = 0;
        if (group.width.number > 0) {
            width = calculateSize(group.width, options);
        }

        const style: CssStyle = {height: makeEm(height + depth)};
        if (width > 0) {
            style.width = makeEm(width);
        }
        if (depth > 0) {
            style.verticalAlign = makeEm(-depth);
        }

        const node = new Img(group.src, group.alt, style);
        node.height = height;
        node.depth = depth;

        return node;
    },
    mathmlBuilder: (group, options) => {
        const node = new MathNode("mglyph", []);
        node.setAttribute("alt", group.alt);

        const height = calculateSize(group.height, options);
        let depth = 0;
        if (group.totalheight.number > 0) {
            depth = calculateSize(group.totalheight, options) - height;
            node.setAttribute("valign", makeEm(-depth));
        }
        node.setAttribute("height", makeEm(height + depth));

        if (group.width.number > 0) {
            const width = calculateSize(group.width, options);
            node.setAttribute("width", makeEm(width));
        }
        node.setAttribute("src", group.src);
        return node;
    },
});
