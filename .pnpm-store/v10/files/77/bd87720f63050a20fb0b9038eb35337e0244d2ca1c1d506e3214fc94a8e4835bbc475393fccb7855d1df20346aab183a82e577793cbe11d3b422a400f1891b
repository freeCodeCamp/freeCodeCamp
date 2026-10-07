import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { AMOscillator } from "./AMOscillator.js";

describe("AMOscillator", () => {
	// run the common tests
	BasicTests(AMOscillator);
	SourceTests(AMOscillator);
	OscillatorTests(AMOscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new AMOscillator().toDestination();
				osc.start(0.1).stop(0.4);
			},
			"amOscillator.wav",
			0.03
		);
	});

	context("Amplitude Modulation", () => {
		it("can pass in parameters in the constructor", () => {
			const amOsc = new AMOscillator({
				harmonicity: 3,
				modulationType: "square3",
				type: "triangle2",
			});
			expect(amOsc.type).to.equal("triangle2");
			expect(amOsc.harmonicity.value).to.be.closeTo(3, 0.001);
			expect(amOsc.modulationType).to.equal("square3");
			amOsc.dispose();
		});

		it("can set the harmonicity", () => {
			const amOsc = new AMOscillator();
			amOsc.harmonicity.value = 0.2;
			expect(amOsc.harmonicity.value).to.be.closeTo(0.2, 0.001);
			amOsc.dispose();
		});

		it("can set the modulationType", () => {
			const amOsc = new AMOscillator();
			amOsc.modulationType = "triangle5";
			expect(amOsc.modulationType).to.equal("triangle5");
			amOsc.dispose();
		});

		it("can get/set the baseType", () => {
			const osc = new AMOscillator();
			osc.type = "sine5";
			expect(osc.baseType).to.equal("sine");
			osc.baseType = "triangle";
			expect(osc.type).to.equal("triangle5");
			expect(osc.partialCount).to.equal(5);
			osc.partialCount = 2;
			expect(osc.type).to.equal("triangle2");
			osc.baseType = "custom";
			expect(osc.type).to.equal("custom");
			osc.partials = [1, 2, 3];
			expect(osc.baseType).to.equal("custom");
			expect(osc.partials).to.deep.equal([1, 2, 3]);
			osc.baseType = "square";
			expect(osc.type).to.equal("square");
			osc.dispose();
		});
	});
});
