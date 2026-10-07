import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { OutputAudio } from "../../../test/helper/OutputAudio.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { FMOscillator } from "./FMOscillator.js";
import { OmniOscillator } from "./OmniOscillator.js";
import { OmniOscillatorType } from "./OscillatorInterface.js";
import { PulseOscillator } from "./PulseOscillator.js";
import { PWMOscillator } from "./PWMOscillator.js";

describe("OmniOscillator", () => {
	// run the common tests
	BasicTests(OmniOscillator);
	SourceTests(OmniOscillator);
	OscillatorTests(OmniOscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new OmniOscillator(220, "fmsquare").toDestination();
				osc.start(0.1).stop(0.2);
			},
			"omniOscillator.wav",
			1.6
		);
	});

	context("Sound", () => {
		it("makes a sound", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator();
				osc.toDestination();
				osc.start(0);
			});
		});

		it("makes a sound when set to square", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "square");
				osc.toDestination();
				osc.start();
			});
		});

		it("makes a sound when set to pulse", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "pulse");
				osc.toDestination();
				osc.start();
			});
		});

		it("makes a sound when set to pwm", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "pwm");
				osc.toDestination();
				osc.start();
			});
		});

		it("makes a sound when set to fm", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "fmsquare");
				osc.toDestination();
				osc.start();
			});
		});

		it("makes a sound when set to am", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "amsine");
				osc.toDestination();
				osc.start();
			});
		});

		it("makes a sound when set to fat", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "fatsawtooth");
				osc.toDestination();
				osc.start();
			});
		});

		it("can switch type after playing", () => {
			return OutputAudio(() => {
				const osc = new OmniOscillator(440, "amsine");
				osc.toDestination();
				osc.start();
				osc.type = "fmsine";
			});
		});
	});

	context("Type", () => {
		it("can get and set the type", () => {
			const osc = new OmniOscillator({
				type: "sawtooth",
			});
			expect(osc.type).to.equal("sawtooth");
			osc.dispose();
		});

		it("handles various types", () => {
			const osc = new OmniOscillator();
			const types: OmniOscillatorType[] = [
				"triangle3",
				"sine",
				"pulse",
				"pwm",
				"amsine4",
				"fatsquare2",
				"fmsawtooth",
			];
			types.forEach((type) => {
				osc.type = type;
				expect(osc.type).to.equal(type);
			});
			osc.dispose();
		});

		it("throws an error if invalid type is set", () => {
			const osc = new OmniOscillator();
			expect(() => {
				// @ts-ignore
				osc.type = "invalid";
			}).to.throw(Error);
			osc.dispose();
		});

		it("can set extended types", () => {
			const osc = new OmniOscillator();
			osc.type = "sine5";
			expect(osc.type).to.equal("sine5");
			osc.type = "triangle2";
			expect(osc.type).to.equal("triangle2");
			osc.dispose();
		});

		it("can set the modulation frequency only when type is pwm", () => {
			const omni = new OmniOscillator<PWMOscillator>();
			omni.type = "pwm";
			expect(() => {
				omni.modulationFrequency.value = 0.2;
			}).to.not.throw(Error);
			omni.type = "pulse";
			expect(() => {
				omni.modulationFrequency.value = 0.2;
			}).to.throw(Error);
			omni.dispose();
		});

		it("can set the modulation width only when type is pulse", () => {
			const omni = new OmniOscillator<PulseOscillator>();
			omni.type = "pulse";
			expect(() => {
				omni.width.value = 0.2;
			}).to.not.throw(Error);
			omni.type = "sine";
			expect(() => {
				omni.width.value = 0.2;
			}).to.throw(Error);
			omni.dispose();
		});

		it("can be set to an FM oscillator", () => {
			const omni = new OmniOscillator<FMOscillator>();
			omni.set({
				modulationIndex: 2,
				type: "fmsquare2",
			});
			expect(omni.type).to.equal("fmsquare2");
			expect(omni.modulationIndex.value).to.equal(2);
			omni.dispose();
		});

		it("can be set to an AM oscillator", () => {
			const omni = new OmniOscillator();
			omni.set({
				type: "amsquare",
			});
			omni.modulationType = "sawtooth2";
			expect(omni.type).to.equal("amsquare");
			expect(omni.modulationType).to.equal("sawtooth2");
			omni.dispose();
		});

		it("can be set to an FatOscillator", () => {
			const omni = new OmniOscillator({
				count: 4,
				spread: 25,
				type: "fatsquare2",
			});
			expect(omni.type).to.equal("fatsquare2");
			expect(omni.count).to.equal(4);
			expect(omni.spread).to.equal(25);
			omni.dispose();
		});

		it("can get/set the partialCount", () => {
			const omni = new OmniOscillator({
				type: "square2",
			});
			expect(omni.partialCount).to.equal(2);
			omni.partialCount = 3;
			expect(omni.partialCount).to.equal(3);
			expect(omni.type).to.equal("square3");
			omni.dispose();
		});

		it("can get/set the basic parameters", () => {
			const omni = new OmniOscillator({
				type: "square",
				detune: 20,
				volume: -20,
				frequency: 200,
			});
			expect(omni.get().detune).to.be.closeTo(20, 0.1);
			expect(omni.get().volume).to.be.closeTo(-20, 0.1);
			expect(omni.get().type).to.equal("square");
			expect(omni.get().frequency).to.be.closeTo(200, 1);
			omni.dispose();
		});

		it("can get/set the sourceType", () => {
			const omni = new OmniOscillator({
				type: "fatsquare3",
			});
			expect(omni.type).to.equal("fatsquare3");
			expect(omni.sourceType).to.equal("fat");
			omni.sourceType = "oscillator";
			expect(omni.sourceType).to.equal("oscillator");
			expect(omni.type).to.equal("square3");
			omni.sourceType = "pulse";
			expect(omni.sourceType).to.equal("pulse");
			expect(omni.type).to.equal("pulse");
			omni.sourceType = "fm";
			expect(omni.sourceType).to.equal("fm");
			expect(omni.type).to.equal("fmsine");
			omni.sourceType = "pwm";
			expect(omni.sourceType).to.equal("pwm");
			expect(omni.type).to.equal("pwm");
			omni.sourceType = "am";
			expect(omni.sourceType).to.equal("am");
			expect(omni.type).to.equal("amsine");
			omni.sourceType = "fat";
			expect(omni.type).to.equal("fatsine");
			omni.dispose();
		});

		it("can get/set the baseType", () => {
			const omni = new OmniOscillator({
				type: "fatsquare3",
			});
			expect(omni.type).to.equal("fatsquare3");
			expect(omni.sourceType).to.equal("fat");
			expect(omni.baseType).to.equal("square");
			expect(omni.partialCount).to.equal(3);
			omni.partialCount = 2;
			expect(omni.type).to.equal("fatsquare2");
			omni.type = "amsine";
			expect(omni.baseType).to.equal("sine");
			omni.baseType = "square";
			expect(omni.type).to.equal("amsquare");
			omni.type = "pwm";
			expect(omni.baseType).to.equal("pwm");
			omni.type = "triangle4";
			expect(omni.baseType).to.equal("triangle");
			omni.baseType = "square";
			expect(omni.type).to.equal("square4");
			omni.dispose();
		});

		it("can set a FM oscillator with partials", () => {
			const omni = new OmniOscillator<FMOscillator>({
				detune: 4,
				harmonicity: 2,
				partials: [2, 1, 2, 2],
				phase: 120,
				type: "fmcustom",
				volume: -2,
			});
			expect(omni.volume.value).to.be.closeTo(-2, 0.01);
			expect(omni.detune.value).to.be.closeTo(4, 0.01);
			expect(omni.phase).to.be.closeTo(120, 0.01);
			expect(omni.type).to.be.equal("fmcustom");
			expect(omni.partials).to.deep.equal([2, 1, 2, 2]);
			expect(omni.harmonicity.value).be.closeTo(2, 0.01);
			omni.dispose();
		});

		it("setting/getting values when the wrong type is set has no effect", () => {
			const omni = new OmniOscillator(440, "sine");
			omni.set({
				harmonicity: 3,
				modulationIndex: 4,
			});
			omni.spread = 40;
			expect(omni.spread).to.be.undefined;
			omni.count = 5;
			expect(omni.count).to.be.undefined;
			omni.modulationType = "sine";
			expect(omni.modulationType).to.be.undefined;
			expect(omni.modulationIndex).to.be.undefined;
			expect(omni.harmonicity).to.be.undefined;
			omni.dispose();
		});
	});
});
