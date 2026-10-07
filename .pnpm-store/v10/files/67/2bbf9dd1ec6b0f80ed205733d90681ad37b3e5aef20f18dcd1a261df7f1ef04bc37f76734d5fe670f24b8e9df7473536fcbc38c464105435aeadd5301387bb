/* eslint-disable max-len */
import renderA11yString from "../render-a11y-string";

describe("renderA11yString", () => {
    describe("basic expressions", () => {
        test("simple addition", () => {
            const result = renderA11yString("1 + 2");
            expect(result).toMatchInlineSnapshot(`"1, plus, 2"`);
        });
    });

    describe("accent", () => {
        test("\\vec", () => {
            const result = renderA11yString("\\vec{a}");
            expect(result).toMatchInlineSnapshot(`"a, with, vector, on top"`);
        });

        test("\\acute{a}", () => {
            const result = renderA11yString("\\acute{a}");
            expect(result).toMatchInlineSnapshot(`"a, with, acute, on top"`);
        });

        test("\\hat{a}", () => {
            const result = renderA11yString("\\hat{a}");
            expect(result).toMatchInlineSnapshot(`"a, with, hat, on top"`);
        });
    });

    describe("accentUnder", () => {
        test("\\underleftarrow", () => {
            const result = renderA11yString("\\underleftarrow{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"1, plus, 2, with, left arrow, underneath"`,
            );
        });

        test("\\underlinesegment", () => {
            const result = renderA11yString("\\underlinesegment{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"1, plus, 2, with, line segment, underneath"`,
            );
        });
    });

    describe("atom", () => {
        test("punct", () => {
            const result = renderA11yString("1, 2, 3");
            expect(result).toMatchInlineSnapshot(`"1, comma, 2, comma, 3"`);
        });
    });

    describe("color", () => {
        test("\\color{red}", () => {
            const result = renderA11yString("\\color{red}1+2");
            expect(result).toMatchInlineSnapshot(
                `"start color red, 1, plus, 2, end color red"`,
            );
        });

        test("\\color{FF0000}", () => {
            const result = renderA11yString("\\color{FF0000}1+2");
            expect(result).toMatchInlineSnapshot(
                `"start color #FF0000, 1, plus, 2, end color #FF0000"`,
            );
        });

        // colorIsTextColor is an option added in KaTeX 0.9.0 for backward
        // compatibility. It makes \color parse like \textcolor. We use it
        // in the KA webapp, and need it here because the tests are written
        // assuming it is set.
        test("\\color{red} with {colorIsTextColor: true}", () => {
            const result = renderA11yString("\\color{red}1+2", {
                colorIsTextColor: true,
            });
            expect(result).toMatchInlineSnapshot(
                `"start color red, 1, end color red, plus, 2"`,
            );
        });

        test("\\textcolor{red}", () => {
            const result = renderA11yString("\\textcolor{red}1+2");
            expect(result).toMatchInlineSnapshot(
                `"start color red, 1, end color red, plus, 2"`,
            );
        });
    });

    describe("delimiters", () => {
        test("simple parens", () => {
            const result = renderA11yString("(1 + 3)");
            expect(result).toMatchInlineSnapshot(
                `"left parenthesis, 1, plus, 3, right parenthesis"`,
            );
        });

        test("simple brackets", () => {
            const result = renderA11yString("[1 + 3]");
            expect(result).toMatchInlineSnapshot(
                `"open bracket, 1, plus, 3, close bracket"`,
            );
        });

        test("nested parens", () => {
            const result = renderA11yString("(a + (b + c))");
            expect(result).toMatchInlineSnapshot(
                `"left parenthesis, a, plus, left parenthesis, b, plus, c, right parenthesis, right parenthesis"`,
            );
        });

        test("stretchy parens around fractions", () => {
            const result = renderA11yString("\\left(\\frac{1}{x}\\right)");
            expect(result).toMatchInlineSnapshot(
                `"left parenthesis, start fraction, 1, divided by, x, end fraction, right parenthesis"`,
            );
        });
    });

    describe("delimsizing", () => {
        test("\\bigl(1+2\\bigr)", () => {
            const result = renderA11yString("\\bigl(1+2\\bigr)");
            expect(result).toMatchInlineSnapshot(
                `"left parenthesis, 1, plus, 2, right parenthesis"`,
            );
        });
    });

    describe("enclose", () => {
        test("\\cancel", () => {
            const result = renderA11yString("\\cancel{a}");
            expect(result).toMatchInlineSnapshot(
                `"start cancel, a, end cancel"`,
            );
        });

        test("\\fbox", () => {
            const result = renderA11yString("\\fbox{a}");
            expect(result).toMatchInlineSnapshot(`"start box, a, end box"`);
        });

        test("\\boxed", () => {
            const result = renderA11yString("\\boxed{a}");
            expect(result).toMatchInlineSnapshot(`"start box, a, end box"`);
        });

        test("\\sout", () => {
            const result = renderA11yString("\\text{\\sout{a}}");
            expect(result).toMatchInlineSnapshot(
                `"start text, start strikeout, a, end strikeout, end text"`,
            );
        });
    });

    describe("phase", () => {
        test("\\phase", () => {
            const result = renderA11yString("\\phase{a}");
            expect(result).toMatchInlineSnapshot(
                `"start phase angle, a, end phase angle"`,
            );
        });
    });

    describe("exponents", () => {
        test("simple exponent", () => {
            const result = renderA11yString("e^x");
            expect(result).toMatchInlineSnapshot(
                `"e, start superscript, x, end superscript"`,
            );
        });

        test("^{\\circ} => degrees", () => {
            const result = renderA11yString("90^{\\circ}");
            expect(result).toMatchInlineSnapshot(`"90, degrees"`);
        });

        test("^{\\degree} => degrees", () => {
            const result = renderA11yString("90^{\\degree}");
            expect(result).toMatchInlineSnapshot(`"90, degrees"`);
        });

        test("^{\\prime} => prime", () => {
            const result = renderA11yString("f^{\\prime}");
            expect(result).toMatchInlineSnapshot(`"f, prime"`);
        });

        test("^2 => squared", () => {
            const result = renderA11yString("x^2");
            expect(result).toMatchInlineSnapshot(`"x, squared"`);
        });

        test("^3 => cubed", () => {
            const result = renderA11yString("x^3");
            expect(result).toMatchInlineSnapshot(`"x, cubed"`);
        });

        test("log_2", () => {
            const result = renderA11yString("\\log_2{x+1}");
            expect(result).toMatchInlineSnapshot(
                `"log, start base, 2, end base, x, plus, 1"`,
            );
        });

        test("a_{n+1}", () => {
            const result = renderA11yString("a_{n+1}");
            expect(result).toMatchInlineSnapshot(
                `"a, start subscript, n, plus, 1, end subscript"`,
            );
        });
    });

    describe("genfrac", () => {
        test("simple fractions", () => {
            const result = renderA11yString("\\frac{2}{3}");
            expect(result).toMatchInlineSnapshot(
                `"start fraction, 2, divided by, 3, end fraction"`,
            );
        });

        test("nested fractions", () => {
            const result = renderA11yString("\\frac{1}{1+\\frac{1}{x}}");
            // TODO: this result is ambiguous, we need to fix this
            expect(result).toMatchInlineSnapshot(
                `"start fraction, 1, divided by, 1, plus, start fraction, 1, divided by, x, end fraction, end fraction"`,
            );
        });

        test("binomials", () => {
            const result = renderA11yString("\\binom{n}{k}");
            // TODO: drop the parenthesis as they're not normally read
            expect(result).toMatchInlineSnapshot(
                `"start binomial, left parenthesis, n, over, k, right parenthesis, end binomial"`,
            );
        });
    });

    describe("horizBrace", () => {
        test("\\overbrace", () => {
            const result = renderA11yString("\\overbrace{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"start overbrace, 1, plus, 2, end overbrace"`,
            );
        });

        test("\\underbrace", () => {
            const result = renderA11yString("\\underbrace{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"start underbrace, 1, plus, 2, end underbrace"`,
            );
        });

        test("\\overbracket", () => {
            const result = renderA11yString("\\overbracket{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"start overbracket, 1, plus, 2, end overbracket"`,
            );
        });

        test("\\underbracket", () => {
            const result = renderA11yString("\\underbracket{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"start underbracket, 1, plus, 2, end underbracket"`,
            );
        });
    });

    describe("infix", () => {
        test("\\over", () => {
            const result = renderA11yString("a \\over b");
            expect(result).toMatchInlineSnapshot(
                `"start fraction, a, divided by, b, end fraction"`,
            );
        });

        test("\\choose", () => {
            const result = renderA11yString("a \\choose b");
            expect(result).toMatchInlineSnapshot(
                `"start binomial, left parenthesis, a, over, b, right parenthesis, end binomial"`,
            );
        });

        test("\\above", () => {
            const result = renderA11yString("a \\above{2pt} b");
            expect(result).toMatchInlineSnapshot(
                `"start fraction, a, divided by, b, end fraction"`,
            );
        });
    });

    describe("hbox", () => {
        test("\\hbox", () => {
            const result = renderA11yString("x+\\hbox{y}");
            expect(result).toMatchInlineSnapshot(`"x, plus, y"`);
        });
    });

    describe("inner", () => {
        test("\\ldots", () => {
            const result = renderA11yString("\\ldots");
            expect(result).toMatchInlineSnapshot(`"dots"`);
        });
    });

    describe("lap", () => {
        test("\\llap", () => {
            const result = renderA11yString("a\\llap{b}");
            expect(result).toMatchInlineSnapshot(
                `"a, start text, b, end text"`,
            );
        });

        test("\\rlap", () => {
            const result = renderA11yString("a\\rlap{b}");
            expect(result).toMatchInlineSnapshot(
                `"a, start text, b, end text"`,
            );
        });
    });

    describe("middle", () => {
        test("\\middle", () => {
            const result = renderA11yString("\\left(a\\middle|b\\right)");
            expect(result).toMatchInlineSnapshot(
                `"left parenthesis, a, vertical bar, b, right parenthesis"`,
            );
        });
    });

    describe("mod", () => {
        test("\\mod", () => {
            const result = renderA11yString("\\mod{23}");
            // TODO: drop the "space"
            // TODO: collate m, o, d... we should fix this inside of KaTeX since
            // this affects the HTML and MathML output as well
            expect(result).toMatchInlineSnapshot(`"space, m, o, d, 23"`);
        });
    });

    describe("op", () => {
        test("\\lim", () => {
            const result = renderA11yString("\\lim{x+1}");
            // TODO: add begin/end to track argument of operators
            expect(result).toMatchInlineSnapshot(`"limit, x, plus, 1"`);
        });

        test("\\sin 2\\pi", () => {
            const result = renderA11yString("\\sin{2\\pi}");
            // TODO: add begin/end to track argument of operators
            expect(result).toMatchInlineSnapshot(`"sine, 2, pi"`);
        });

        test("\\sum_{i=0}", () => {
            const result = renderA11yString("\\sum_{i=0}");
            expect(result).toMatchInlineSnapshot(
                `"sum, start subscript, i, equals, 0, end subscript"`,
            );
        });

        test("\u2211_{i=0}", () => {
            const result = renderA11yString("\u2211_{i=0}");
            expect(result).toMatchInlineSnapshot(
                `"sum, start subscript, i, equals, 0, end subscript"`,
            );
        });
    });

    describe("operatorname", () => {
        test("\\limsup", () => {
            const result = renderA11yString("\\limsup");
            // TODO: collate strings so that this is "lim, sup"
            // NOTE: this also affect HTML and MathML output
            expect(result).toMatchInlineSnapshot(`"l, i, m, s, u, p"`);
        });

        test("\\liminf", () => {
            const result = renderA11yString("\\liminf");
            expect(result).toMatchInlineSnapshot(`"l, i, m, i, n, f"`);
        });

        test("\\argmin", () => {
            const result = renderA11yString("\\argmin");
            expect(result).toMatchInlineSnapshot(`"a, r, g, m, i, n"`);
        });
    });

    describe("overline", () => {
        test("\\overline", () => {
            const result = renderA11yString("\\overline{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"start overline, 1, plus, 2, end overline"`,
            );
        });
    });

    describe("phantom", () => {
        test("\\phantom", () => {
            const result = renderA11yString("1+\\phantom{2}");
            expect(result).toMatchInlineSnapshot(`"1, plus, empty space"`);
        });
    });

    describe("raisebox", () => {
        test("\\raisebox", () => {
            const result = renderA11yString("x+\\raisebox{1em}{y}");
            expect(result).toMatchInlineSnapshot(`"x, plus, y"`);
        });
    });

    describe("relations", () => {
        test("1 \\neq 2", () => {
            const result = renderA11yString("1 \\neq 2");
            expect(result).toMatchInlineSnapshot(`"1, does not equal, 2"`);
        });

        test("1 \\ne 2", () => {
            const result = renderA11yString("1 \\ne 2");
            expect(result).toMatchInlineSnapshot(`"1, does not equal, 2"`);
        });

        test("1 \\geq 2", () => {
            const result = renderA11yString("1 \\geq 2");
            expect(result).toMatchInlineSnapshot(
                `"1, is greater than or equal to, 2"`,
            );
        });

        test("1 \\ge 2", () => {
            const result = renderA11yString("1 \\ge 2");
            expect(result).toMatchInlineSnapshot(
                `"1, is greater than or equal to, 2"`,
            );
        });

        test("1 \\leq 2", () => {
            const result = renderA11yString("1 \\leq 3");
            expect(result).toMatchInlineSnapshot(
                `"1, is less than or equal to, 3"`,
            );
        });

        test("1 \\le 2", () => {
            const result = renderA11yString("1 \\le 3");
            expect(result).toMatchInlineSnapshot(
                `"1, is less than or equal to, 3"`,
            );
        });
    });

    describe("rule", () => {
        test("\\rule", () => {
            const result = renderA11yString("\\rule{1em}{1em}");
            expect(result).toMatchInlineSnapshot(`"rectangle"`);
        });
    });

    describe("smash", () => {
        test("1 + \\smash{2}", () => {
            const result = renderA11yString("1 + \\smash{2}");
            expect(result).toMatchInlineSnapshot(`"1, plus, 2"`);
        });
    });

    describe("sqrt", () => {
        test("square root", () => {
            const result = renderA11yString("\\sqrt{x + 1}");
            expect(result).toMatchInlineSnapshot(
                `"square root of, x, plus, 1, end square root"`,
            );
        });

        test("nest square root", () => {
            const result = renderA11yString("\\sqrt{x + \\sqrt{y}}");
            // TODO: this sounds ambiguous as well... we should probably say "start square root"
            expect(result).toMatchInlineSnapshot(
                `"square root of, x, plus, square root of, y, end square root, end square root"`,
            );
        });

        test("cube root", () => {
            const result = renderA11yString("\\sqrt[3]{x + 1}");
            expect(result).toMatchInlineSnapshot(
                `"cube root of, x, plus, 1, end cube root"`,
            );
        });

        test("nth root", () => {
            const result = renderA11yString("\\sqrt[n]{x + 1}");
            expect(result).toMatchInlineSnapshot(
                `"root, start index, n, end index"`,
            );
        });
    });

    describe("sizing", () => {
        test("\\Huge is ignored", () => {
            const result = renderA11yString("\\Huge{a+b}");
            expect(result).toMatchInlineSnapshot(`"a, plus, b"`);
        });

        test("\\small is ignored", () => {
            const result = renderA11yString("\\small{a+b}");
            expect(result).toMatchInlineSnapshot(`"a, plus, b"`);
        });

        // We don't need to test all sizing commands since all style
        // nodes are treated in the same way.
    });

    describe("styling", () => {
        test("\\displaystyle is ignored", () => {
            const result = renderA11yString("\\displaystyle{a+b}");
            expect(result).toMatchInlineSnapshot(`"a, plus, b"`);
        });

        test("\\textstyle is ignored", () => {
            const result = renderA11yString("\\textstyle{a+b}");
            expect(result).toMatchInlineSnapshot(`"a, plus, b"`);
        });

        // We don't need to test all styling commands since all style
        // nodes are treated in the same way.
    });

    describe("text", () => {
        test("\\text", () => {
            const result = renderA11yString("\\text{hello}");
            expect(result).toMatchInlineSnapshot(
                `"start text, h, e, l, l, o, end text"`,
            );
        });

        test("\\textbf", () => {
            const result = renderA11yString("\\textbf{hello}");
            expect(result).toMatchInlineSnapshot(
                `"start bold text, h, e, l, l, o, end bold text"`,
            );
        });
    });

    describe("underline", () => {
        test("\\underline", () => {
            const result = renderA11yString("\\underline{1+2}");
            expect(result).toMatchInlineSnapshot(
                `"start underline, 1, plus, 2, end underline"`,
            );
        });
    });

    describe("vcenter", () => {
        test("\\vcenter", () => {
            const result = renderA11yString("x+\\vcenter{y}");
            expect(result).toMatchInlineSnapshot(`"x, plus, y"`);
        });
    });

    describe("verb", () => {
        test("\\verb", () => {
            const result = renderA11yString("\\verb|hello|");
            expect(result).toMatchInlineSnapshot(
                `"start verbatim, hello, end verbatim"`,
            );
        });
    });
});
