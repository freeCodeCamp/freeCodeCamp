import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { connectFrom } from "../../../test/helper/Connect.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { FMOscillator } from "./FMOscillator.js";

describe("FMOscillator", () => {
	// run the common tests
	BasicTests(FMOscillator);
	SourceTests(FMOscillator);
	OscillatorTests(FMOscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new FMOscillator().toDestination();
				osc.start(0);
			},
			"fmOscillator.wav",
			0.01
		);
	});

	context("Frequency Modulation", () => {
		it("can pass in parameters in the constructor", () => {
			const fmOsc = new FMOscillator({
				harmonicity: 3,
				modulationType: "square3",
				type: "triangle2",
			});
			expect(fmOsc.type).to.equal("triangle2");
			expect(fmOsc.harmonicity.value).to.be.closeTo(3, 0.001);
			expect(fmOsc.modulationType).to.equal("square3");
			fmOsc.dispose();
		});

		it("can set the harmonicity", () => {
			const fmOsc = new FMOscillator();
			fmOsc.harmonicity.value = 0.2;
			expect(fmOsc.harmonicity.value).to.be.closeTo(0.2, 0.001);
			fmOsc.dispose();
		});

		it("can set the modulationIndex", () => {
			const fmOsc = new FMOscillator({
				modulationIndex: 3,
			});
			expect(fmOsc.modulationIndex.value).to.be.closeTo(3, 0.001);
			fmOsc.modulationIndex.value = 0.2;
			expect(fmOsc.modulationIndex.value).to.be.closeTo(0.2, 0.001);
			fmOsc.dispose();
		});

		it("can connect a signal to the harmonicity", () => {
			const fmOsc = new FMOscillator();
			connectFrom().connect(fmOsc.harmonicity);
			fmOsc.dispose();
		});

		it("can set the modulationType", () => {
			const fmOsc = new FMOscillator();
			fmOsc.modulationType = "triangle5";
			expect(fmOsc.modulationType).to.equal("triangle5");
			fmOsc.dispose();
		});

		it("can get/set the baseType", () => {
			const osc = new FMOscillator();
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
			osc.baseType = "square";
			expect(osc.type).to.equal("square");
			osc.dispose();
		});
	});
});
