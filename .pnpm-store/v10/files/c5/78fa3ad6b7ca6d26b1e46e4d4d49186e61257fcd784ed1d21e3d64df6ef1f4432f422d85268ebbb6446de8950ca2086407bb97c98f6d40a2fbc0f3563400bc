import { describe, it, expect, vitest } from "vitest";
import * as entities from "./decode.js";

describe("Decode test", () => {
    const testcases = [
        { input: "&amp;amp;", output: "&amp;" },
        { input: "&amp;#38;", output: "&#38;" },
        { input: "&amp;#x26;", output: "&#x26;" },
        { input: "&amp;#X26;", output: "&#X26;" },
        { input: "&#38;#38;", output: "&#38;" },
        { input: "&#x26;#38;", output: "&#38;" },
        { input: "&#X26;#38;", output: "&#38;" },
        { input: "&#x3a;", output: ":" },
        { input: "&#x3A;", output: ":" },
        { input: "&#X3a;", output: ":" },
        { input: "&#X3A;", output: ":" },
        { input: "&#", output: "&#" },
        { input: "&>", output: "&>" },
        { input: "id=770&#anchor", output: "id=770&#anchor" },
    ];

    for (const { input, output } of testcases) {
        it(`should XML decode ${input}`, () =>
            expect(entities.decodeXML(input)).toBe(output));
        it(`should HTML decode ${input}`, () =>
            expect(entities.decodeHTML(input)).toBe(output));
    }

    it("should HTML decode partial legacy entity", () => {
        expect(entities.decodeHTMLStrict("&timesbar")).toBe("&timesbar");
        expect(entities.decodeHTML("&timesbar")).toBe("×bar");
    });

    it("should HTML decode legacy entities according to spec", () =>
        expect(entities.decodeHTML("?&image_uri=1&ℑ=2&image=3")).toBe(
            "?&image_uri=1&ℑ=2&image=3",
        ));

    it("should back out of legacy entities", () =>
        expect(entities.decodeHTML("&ampa")).toBe("&a"));

    it("should not parse numeric entities in strict mode", () =>
        expect(entities.decodeHTMLStrict("&#55")).toBe("&#55"));

    it("should parse &nbsp followed by < (#852)", () =>
        expect(entities.decodeHTML("&nbsp<")).toBe("\u00A0<"));

    it("should decode trailing legacy entities", () => {
        expect(entities.decodeHTML("&timesbar;&timesbar")).toBe("⨱×bar");
    });

    it("should decode multi-byte entities", () => {
        expect(entities.decodeHTML("&NotGreaterFullEqual;")).toBe("≧̸");
    });

    it("should not decode legacy entities followed by text in attribute mode", () => {
        expect(
            entities.decodeHTML("&not", entities.DecodingMode.Attribute),
        ).toBe("¬");

        expect(
            entities.decodeHTML("&noti", entities.DecodingMode.Attribute),
        ).toBe("&noti");

        expect(
            entities.decodeHTML("&not=", entities.DecodingMode.Attribute),
        ).toBe("&not=");

        expect(entities.decodeHTMLAttribute("&notp")).toBe("&notp");
        expect(entities.decodeHTMLAttribute("&notP")).toBe("&notP");
        expect(entities.decodeHTMLAttribute("&not3")).toBe("&not3");
    });
});

describe("EntityDecoder", () => {
    it("should decode decimal entities", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        expect(decoder.write("&#5", 1)).toBe(-1);
        expect(decoder.write("8;", 0)).toBe(5);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(":".charCodeAt(0), 5);
    });

    it("should decode hex entities", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        expect(decoder.write("&#x3a;", 1)).toBe(6);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(":".charCodeAt(0), 6);
    });

    it("should decode named entities", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        expect(decoder.write("&amp;", 1)).toBe(5);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith("&".charCodeAt(0), 5);
    });

    it("should decode legacy entities", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );
        decoder.startEntity(entities.DecodingMode.Legacy);

        expect(decoder.write("&amp", 1)).toBe(-1);

        expect(callback).toHaveBeenCalledTimes(0);

        expect(decoder.end()).toBe(4);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith("&".charCodeAt(0), 4);
    });

    it("should decode named entity written character by character", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        for (const c of "amp") {
            expect(decoder.write(c, 0)).toBe(-1);
        }
        expect(decoder.write(";", 0)).toBe(5);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith("&".charCodeAt(0), 5);
    });

    it("should decode numeric entity written character by character", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        for (const c of "#x3a") {
            expect(decoder.write(c, 0)).toBe(-1);
        }
        expect(decoder.write(";", 0)).toBe(6);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(":".charCodeAt(0), 6);
    });

    it("should decode hex entities across several chunks", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        for (const chunk of ["#x", "cf", "ff", "d"]) {
            expect(decoder.write(chunk, 0)).toBe(-1);
        }

        expect(decoder.write(";", 0)).toBe(9);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(0xc_ff_fd, 9);
    });

    it("should not fail if nothing is written", () => {
        const callback = vitest.fn();
        const decoder = new entities.EntityDecoder(
            entities.htmlDecodeTree,
            callback,
        );

        expect(decoder.end()).toBe(0);
        expect(callback).toHaveBeenCalledTimes(0);
    });

    describe("errors", () => {
        it("should produce an error for a named entity without a semicolon", () => {
            const errorHandlers = {
                missingSemicolonAfterCharacterReference: vitest.fn(),
                absenceOfDigitsInNumericCharacterReference: vitest.fn(),
                validateNumericCharacterReference: vitest.fn(),
            };
            const callback = vitest.fn();
            const decoder = new entities.EntityDecoder(
                entities.htmlDecodeTree,
                callback,
                errorHandlers,
            );

            decoder.startEntity(entities.DecodingMode.Legacy);
            expect(decoder.write("&amp;", 1)).toBe(5);
            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith("&".charCodeAt(0), 5);
            expect(
                errorHandlers.missingSemicolonAfterCharacterReference,
            ).toHaveBeenCalledTimes(0);

            decoder.startEntity(entities.DecodingMode.Legacy);
            expect(decoder.write("&amp", 1)).toBe(-1);
            expect(decoder.end()).toBe(4);

            expect(callback).toHaveBeenCalledTimes(2);
            expect(callback).toHaveBeenLastCalledWith("&".charCodeAt(0), 4);
            expect(
                errorHandlers.missingSemicolonAfterCharacterReference,
            ).toHaveBeenCalledTimes(1);
        });

        it("should produce an error for a numeric entity without a semicolon", () => {
            const errorHandlers = {
                missingSemicolonAfterCharacterReference: vitest.fn(),
                absenceOfDigitsInNumericCharacterReference: vitest.fn(),
                validateNumericCharacterReference: vitest.fn(),
            };
            const callback = vitest.fn();
            const decoder = new entities.EntityDecoder(
                entities.htmlDecodeTree,
                callback,
                errorHandlers,
            );

            decoder.startEntity(entities.DecodingMode.Legacy);
            expect(decoder.write("&#x3a", 1)).toBe(-1);
            expect(decoder.end()).toBe(5);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(0x3a, 5);
            expect(
                errorHandlers.missingSemicolonAfterCharacterReference,
            ).toHaveBeenCalledTimes(1);
            expect(
                errorHandlers.absenceOfDigitsInNumericCharacterReference,
            ).toHaveBeenCalledTimes(0);
            expect(
                errorHandlers.validateNumericCharacterReference,
            ).toHaveBeenCalledTimes(1);
            expect(
                errorHandlers.validateNumericCharacterReference,
            ).toHaveBeenCalledWith(0x3a);
        });

        it("should produce an error for numeric entities without digits", () => {
            const errorHandlers = {
                missingSemicolonAfterCharacterReference: vitest.fn(),
                absenceOfDigitsInNumericCharacterReference: vitest.fn(),
                validateNumericCharacterReference: vitest.fn(),
            };
            const callback = vitest.fn();
            const decoder = new entities.EntityDecoder(
                entities.htmlDecodeTree,
                callback,
                errorHandlers,
            );

            decoder.startEntity(entities.DecodingMode.Legacy);
            expect(decoder.write("&#", 1)).toBe(-1);
            expect(decoder.end()).toBe(0);

            expect(callback).toHaveBeenCalledTimes(0);
            expect(
                errorHandlers.missingSemicolonAfterCharacterReference,
            ).toHaveBeenCalledTimes(0);
            expect(
                errorHandlers.absenceOfDigitsInNumericCharacterReference,
            ).toHaveBeenCalledTimes(1);
            expect(
                errorHandlers.absenceOfDigitsInNumericCharacterReference,
            ).toHaveBeenCalledWith(2);
            expect(
                errorHandlers.validateNumericCharacterReference,
            ).toHaveBeenCalledTimes(0);
        });

        it("should produce an error for hex entities without digits", () => {
            const errorHandlers = {
                missingSemicolonAfterCharacterReference: vitest.fn(),
                absenceOfDigitsInNumericCharacterReference: vitest.fn(),
                validateNumericCharacterReference: vitest.fn(),
            };
            const callback = vitest.fn();
            const decoder = new entities.EntityDecoder(
                entities.htmlDecodeTree,
                callback,
                errorHandlers,
            );

            decoder.startEntity(entities.DecodingMode.Legacy);
            expect(decoder.write("&#x", 1)).toBe(-1);
            expect(decoder.end()).toBe(0);

            expect(callback).toHaveBeenCalledTimes(0);
            expect(
                errorHandlers.missingSemicolonAfterCharacterReference,
            ).toHaveBeenCalledTimes(0);
            expect(
                errorHandlers.absenceOfDigitsInNumericCharacterReference,
            ).toHaveBeenCalledTimes(1);
            expect(
                errorHandlers.validateNumericCharacterReference,
            ).toHaveBeenCalledTimes(0);
        });
    });
});
