import { readFileSync } from "node:fs";
import { describe, it, expect } from "vitest";
import * as entities from "./index.js";
import legacy from "../maps/legacy.json" with { type: "json" };

const levels = ["xml", "entities"];

describe("Documents", () => {
    const levelDocuments = levels
        .map((name) => new URL(`../maps/${name}.json`, import.meta.url))
        .map((url) => JSON.parse(readFileSync(url, "utf8")))
        .map((document, index) => [index, document]);

    for (const [level, document] of levelDocuments) {
        describe("Decode", () => {
            it(levels[level], () => {
                for (const entity of Object.keys(document)) {
                    for (let l = level; l < levels.length; l++) {
                        expect(entities.decode(`&${entity};`, l)).toBe(
                            document[entity],
                        );
                        expect(
                            entities.decode(`&${entity};`, { level: l }),
                        ).toBe(document[entity]);
                    }
                }
            });
        });

        describe("Decode strict", () => {
            it(levels[level], () => {
                for (const entity of Object.keys(document)) {
                    for (let l = level; l < levels.length; l++) {
                        expect(entities.decodeStrict(`&${entity};`, l)).toBe(
                            document[entity],
                        );
                        expect(
                            entities.decode(`&${entity};`, {
                                level: l,
                                mode: entities.DecodingMode.Strict,
                            }),
                        ).toBe(document[entity]);
                    }
                }
            });
        });

        describe("Encode", () => {
            it(levels[level], () => {
                for (const entity of Object.keys(document)) {
                    for (let l = level; l < levels.length; l++) {
                        const encoded = entities.encode(document[entity], l);
                        const decoded = entities.decode(encoded, l);
                        expect(decoded).toBe(document[entity]);
                    }
                }
            });

            it("should only encode non-ASCII values if asked", () =>
                expect(
                    entities.encode("Great #'s of 🎁", {
                        level,
                        mode: entities.EncodingMode.ASCII,
                    }),
                ).toBe("Great #&apos;s of &#x1f381;"));
        });
    }

    describe("Legacy", () => {
        const legacyMap: Record<string, string> = legacy;
        it("should decode", () => {
            for (const entity of Object.keys(legacyMap)) {
                expect(entities.decodeHTML(`&${entity}`)).toBe(
                    legacyMap[entity],
                );
                expect(
                    entities.decodeStrict(`&${entity}`, {
                        level: entities.EntityLevel.HTML,
                        mode: entities.DecodingMode.Legacy,
                    }),
                ).toBe(legacyMap[entity]);
            }
        });
    });
});

const astral = [
    ["1d306", "\uD834\uDF06"],
    ["1d11e", "\uD834\uDD1E"],
];

const astralSpecial = [
    ["80", "\u20AC"],
    ["110000", "\uFFFD"],
];

describe("Astral entities", () => {
    for (const [c, value] of astral) {
        it(`should decode ${value}`, () =>
            expect(entities.decode(`&#x${c};`)).toBe(value));

        it(`should encode ${value}`, () =>
            expect(entities.encode(value)).toBe(`&#x${c};`));

        it(`should escape ${value}`, () =>
            expect(entities.escape(value)).toBe(`&#x${c};`));
    }

    for (const [c, value] of astralSpecial) {
        it(`should decode special \\u${c}`, () =>
            expect(entities.decode(`&#x${c};`)).toBe(value));
    }
});

describe("Escape", () => {
    it("should always decode ASCII chars", () => {
        for (let index = 0; index < 0x7f; index++) {
            const c = String.fromCharCode(index);
            expect(entities.decodeXML(entities.escape(c))).toBe(c);
        }
    });

    it("should keep UTF8 characters", () =>
        expect(entities.escapeUTF8('ß < "ü"')).toBe(`ß &lt; &quot;ü&quot;`));
});
