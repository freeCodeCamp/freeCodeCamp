import { expect } from "chai";
import { OfflineContext } from "./core/context/OfflineContext.js";
import { fromContext } from "./fromContext.js";

describe("fromContext", () => {
	let context: OfflineContext;

	before(() => {
		context = new OfflineContext(1, 1, 44100);
	});

	after(() => {
		context.dispose();
	});

	it("creates an object from a context", () => {
		const tone = fromContext(context);
		const osc = new tone.Oscillator();
		expect(osc.context).to.equal(context);
		osc.dispose();
	});

	it("units are relative to the passed in context's timing", () => {
		const tone = fromContext(context);
		expect(tone.Time("+0.5").valueOf()).to.equal(0.5);
	});
});
