/**
 * @jest-environment jsdom
 */
import splitAtDelimiters from "../splitAtDelimiters";
import renderMathInElement from "../auto-render";
import type {
    DelimiterSpec,
    SplitAtDelimiterData,
} from "../splitAtDelimiters";

beforeEach(function() {
    expect.extend({
        toSplitInto: function(
            actual: string,
            result: SplitAtDelimiterData[],
            delimiters: DelimiterSpec[],
        ) {
            const message = {
                pass: true,
                message: () => "'" + actual + "' split correctly",
            };

            const split =
                  splitAtDelimiters(actual, delimiters);

            if (split.length !== result.length) {
                message.pass = false;
                message.message = () => "Different number of splits: " +
                    split.length + " vs. " + result.length + " (" +
                    JSON.stringify(split) + " vs. " +
                    JSON.stringify(result) + ")";
                return message;
            }

            for (let i = 0; i < split.length; i++) {
                const real = split[i];
                const correct = result[i];

                let good = true;
                let diff = "";

                if (real.type !== correct.type) {
                    good = false;
                    diff = "type";
                } else if (real.data !== correct.data) {
                    good = false;
                    diff = "data";
                } else if (real.display !== correct.display) {
                    good = false;
                    diff = "display";
                }

                if (!good) {
                    message.pass = false;
                    message.message = () => "Difference at split " +
                        (i + 1) + ": " + JSON.stringify(real) +
                        " vs. " + JSON.stringify(correct) +
                        " (" + diff + " differs)";
                    break;
                }
            }

            return message;
        },
    });
});

describe("A delimiter splitter", function() {
    it("doesn't split when there are no delimiters", function() {
        expect("hello").toSplitInto(
            [
                {type: "text", data: "hello"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("doesn't create a math node with only one left delimiter", function() {
        expect("hello ( world").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "text", data: "( world"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("doesn't split when there's only a right delimiter", function() {
        expect("hello ) world").toSplitInto(
            [
                {type: "text", data: "hello ) world"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("splits when there are both delimiters", function() {
        expect("hello ( world ) boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world ",
                    rawData: "( world )", display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("splits on multi-character delimiters", function() {
        expect("hello [[ world ]] boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world ",
                    rawData: "[[ world ]]", display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "[[", right: "]]", display: false},
            ]);
        expect("hello \\begin{equation} world \\end{equation} boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: "\\begin{equation} world \\end{equation}",
                    rawData: "\\begin{equation} world \\end{equation}",
                    display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "\\begin{equation}", right: "\\end{equation}",
                    display: false},
            ]);
    });

    it("splits multiple times", function() {
        expect("hello ( world ) boo ( more ) stuff").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world ",
                    rawData: "( world )", display: false},
                {type: "text", data: " boo "},
                {type: "math", data: " more ",
                    rawData: "( more )", display: false},
                {type: "text", data: " stuff"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("leaves the ending when there's only a left delimiter", function() {
        expect("hello ( world ) boo ( left").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world ",
                    rawData: "( world )", display: false},
                {type: "text", data: " boo "},
                {type: "text", data: "( left"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("doesn't split when close delimiters are in {}s", function() {
        expect("hello ( world { ) } ) boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world { ) } ",
                    rawData: "( world { ) } )", display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);

        expect("hello ( world { { } ) } ) boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world { { } ) } ",
                    rawData: "( world { { } ) } )", display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);
    });

    it("correctly processes sequences of $..$", function() {
        expect("$hello$$world$$boo$").toSplitInto(
            [
                {type: "math", data: "hello",
                    rawData: "$hello$", display: false},
                {type: "math", data: "world",
                    rawData: "$world$", display: false},
                {type: "math", data: "boo",
                    rawData: "$boo$", display: false},
            ],
            [
                {left: "$", right: "$", display: false},
            ]);
    });

    it("doesn't split at escaped delimiters", function() {
        expect("hello ( world \\) ) boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world \\) ",
                    rawData: "( world \\) )", display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "(", right: ")", display: false},
            ]);

        /* TODO(emily): make this work maybe?
           expect("hello \\( ( world ) boo").toSplitInto(
           "(", ")",
           [
           {type: "text", data: "hello \\( "},
           {type: "math", data: " world ",
           rawData: "( world )", display: false},
           {type: "text", data: " boo"},
           ]);
        */
    });

    it("splits when the right and left delimiters are the same", function() {
        expect("hello $ world $ boo").toSplitInto(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world ",
                    rawData: "$ world $", display: false},
                {type: "text", data: " boo"},
            ],
            [
                {left: "$", right: "$", display: false},
            ]);
    });

    it("ignores \\$", function() {
        expect("$x = \\$5$").toSplitInto(
            [
                {type: "math", data: "x = \\$5",
                    rawData: "$x = \\$5$", display: false},
            ],
            [
                {left: "$", right: "$", display: false},
            ]);
    });

    it("remembers which delimiters are display-mode", function() {
        const startData = "hello ( world ) boo";

        expect(splitAtDelimiters(startData,
                                 [{left:"(", right:")", display:true}])).toEqual(
            [
                {type: "text", data: "hello "},
                {type: "math", data: " world ",
                    rawData: "( world )", display: true},
                {type: "text", data: " boo"},
            ]);
    });

    it("handles nested delimiters irrespective of order", function() {
        expect(splitAtDelimiters("$\\fbox{\\(hi\\)}$",
            [
                                     {left:"\\(", right:"\\)", display:false},
                                     {left:"$", right:"$", display:false},
            ])).toEqual(
            [
                {type: "math", data: "\\fbox{\\(hi\\)}",
                    rawData: "$\\fbox{\\(hi\\)}$", display: false},
            ]);
        expect(splitAtDelimiters("\\(\\fbox{$hi$}\\)",
            [
                {left:"\\(", right:"\\)", display:false},
                {left:"$", right:"$", display:false},
            ])).toEqual(
            [
                {type: "math", data: "\\fbox{$hi$}",
                    rawData: "\\(\\fbox{$hi$}\\)", display: false},
            ]);
    });

    it("handles a mix of $ and $$", function() {
        expect(splitAtDelimiters("$hello$world$$boo$$",
            [
                {left:"$$", right:"$$", display:true},
                {left:"$", right:"$", display:false},
            ])).toEqual(
            [
                {type: "math", data: "hello",
                    rawData: "$hello$", display: false},
                                         {type: "text", data: "world"},
                {type: "math", data: "boo",
                    rawData: "$$boo$$", display: true},
            ]);
        expect(splitAtDelimiters("$hello$$world$$$boo$$",
            [
                {left:"$$", right:"$$", display:true},
                {left:"$", right:"$", display:false},
            ])).toEqual(
            [
                {type: "math", data: "hello",
                    rawData: "$hello$", display: false},
                {type: "math", data: "world",
                    rawData: "$world$", display: false},
                {type: "math", data: "boo",
                    rawData: "$$boo$$", display: true},
            ]);
    });
});

describe("Pre-process callback", function() {
    it("replace `-squared` with `^2 `", function() {
        const el1 = document.createElement('div');
        el1.textContent = 'Circle equation: $x-squared + y-squared = r-squared$.';
        const el2 = document.createElement('div');
        el2.textContent = 'Circle equation: $x^2 + y^2 = r^2$.';
        const delimiters = [{left: "$", right: "$", display: false}];
        renderMathInElement(el1, {
            delimiters,
            preProcess: math => math.replace(/-squared/g, '^2'),
        });
        renderMathInElement(el2, {delimiters});
        expect(el1.innerHTML).toEqual(el2.innerHTML);
    });
});

describe("Parse adjacent text nodes", function() {
    it("parse adjacent text nodes with math", function() {
        const textNodes = ['\\[',
            'x^2 + y^2 = r^2',
            '\\]'];
        const el = document.createElement('div');
        for (let i = 0; i < textNodes.length; i++) {
            const txt = document.createTextNode(textNodes[i]);
            el.appendChild(txt);
        }
        const el2 = document.createElement('div');
        const txt = document.createTextNode(textNodes.join(''));
        el2.appendChild(txt);
        const delimiters = [{left: "\\[", right: "\\]", display: true}];
        renderMathInElement(el, {delimiters});
        renderMathInElement(el2, {delimiters});
        expect(el).toStrictEqual(el2);
    });

    it("parse adjacent text nodes without math", function() {
        const textNodes = ['Lorem ipsum dolor',
            'sit amet',
            'consectetur adipiscing elit'];
        const el = document.createElement('div');
        for (let i = 0; i < textNodes.length; i++) {
            const txt = document.createTextNode(textNodes[i]);
            el.appendChild(txt);
        }
        const el2 = document.createElement('div');
        for (let i = 0; i < textNodes.length; i++) {
            const txt = document.createTextNode(textNodes[i]);
            el2.appendChild(txt);
        }
        const delimiters = [{left: "\\[", right: "\\]", display: true}];
        renderMathInElement(el, {delimiters});
        expect(el).toStrictEqual(el2);
    });
});
