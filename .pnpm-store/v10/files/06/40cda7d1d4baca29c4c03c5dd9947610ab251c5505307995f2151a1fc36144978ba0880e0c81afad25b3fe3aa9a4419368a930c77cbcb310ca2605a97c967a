import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { FatOscillator } from "./FatOscillator.js";

describe("FatOscillator", () => {
	// run the common tests
	BasicTests(FatOscillator);
	SourceTests(FatOscillator);
	OscillatorTests(FatOscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new FatOscillator().toDestination();
				osc.start(0);
			},
			"fatOscillator.wav",
			0.2
		);
	});

	context("Detuned Oscillators", () => {
		it("can pass in parameters in the constructor", () => {
			const fatOsc = new FatOscillator({
				count: 4,
				spread: 25,
			});
			expect(fatOsc.spread).to.be.equal(25);
			expect(fatOsc.count).to.equal(4);
			fatOsc.dispose();
		});

		it("can set the partials and the count", () => {
			const fatOsc = new FatOscillator({
				count: 3,
			});
			fatOsc.partials = [0, 2, 3, 4];
			expect(fatOsc.partials).to.deep.equal([0, 2, 3, 4]);
			expect(fatOsc.partialCount).to.equal(4);
			expect(fatOsc.type).to.equal("custom");
			fatOsc.count = 4;
			expect(fatOsc.partials).to.deep.equal([0, 2, 3, 4]);
			expect(fatOsc.type).to.equal("custom");
			fatOsc.dispose();
		});

		it("can set the count after starting", () => {
			const fatOsc = new FatOscillator({
				count: 3,
			});
			fatOsc.start();
			fatOsc.count = 4;
			expect(fatOsc.count).to.equal(4);
			fatOsc.dispose();
		});

		it("correctly distributes the detune spread", () => {
			const fatOsc = new FatOscillator({
				count: 2,
				spread: 20,
			});
			// @ts-ignore
			expect(fatOsc._oscillators.length).to.equal(2);
			// @ts-ignore
			expect(fatOsc._oscillators[0].detune.value).to.equal(-10);
			// @ts-ignore
			expect(fatOsc._oscillators[1].detune.value).to.equal(10);
			fatOsc.dispose();
		});

		it("can get/set the baseType", () => {
			const osc = new FatOscillator();
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
