import { describe, it, expect } from "vitest";
import * as entities from "./index.js";

describe("escape HTML", () => {
    it("should escape HTML attribute values", () =>
        expect(entities.escapeAttribute('<a " attr > & value \u00A0!')).toBe(
            "<a &quot; attr > &amp; value &nbsp;!",
        ));

    it("should escape HTML text", () =>
        expect(entities.escapeText('<a " text > & value \u00A0!')).toBe(
            '&lt;a " text &gt; &amp; value &nbsp;!',
        ));
});
