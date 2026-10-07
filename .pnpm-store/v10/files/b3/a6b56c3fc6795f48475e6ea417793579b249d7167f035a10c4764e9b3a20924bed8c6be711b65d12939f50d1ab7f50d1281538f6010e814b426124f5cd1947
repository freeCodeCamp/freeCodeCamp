import { AutoPanner } from "./AutoPanner.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { Offline } from "../../test/helper/Offline.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";

describe("AutoPanner", () => {
	BasicTests(AutoPanner);
	EffectTests(AutoPanner);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const autoFilter = new AutoPanner({
					type: "sine",
					frequency: 3,
				}).toDestination();
				new Oscillator().connect(autoFilter).start();
				autoFilter.start(0.2);
			},
			"autoPanner.wav",
			0.01
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const autoPanner = new AutoPanner({
				type: "sawtooth",
				depth: 0.2,
			});
			expect(autoPanner.depth.value).to.be.closeTo(0.2, 0.01);
			expect(autoPanner.type).to.equal("sawtooth");
			autoPanner.dispose();
		});

		it("can be started and stopped", () => {
			const autoPanner = new AutoPanner();
			autoPanner.start().stop("+0.2");
			autoPanner.dispose();
		});

		it("can get/set the options", () => {
			const autoPanner = new AutoPanner();
			autoPanner.set({
				frequency: 2.4,
				type: "triangle",
			});
			expect(autoPanner.get().frequency).to.be.closeTo(2.4, 0.01);
			expect(autoPanner.get().type).to.equal("triangle");
			autoPanner.dispose();
		});

		it("can set the frequency and depth", () => {
			const autoPanner = new AutoPanner();
			autoPanner.depth.value = 0.4;
			autoPanner.frequency.value = 0.4;
			expect(autoPanner.depth.value).to.be.closeTo(0.4, 0.01);
			expect(autoPanner.frequency.value).to.be.closeTo(0.4, 0.01);
			autoPanner.dispose();
		});

		it("can sync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const panner = new AutoPanner(2);
				panner.sync();
				panner.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				// transport.start(0)
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(4, 0.1);
			});
		});

		it("can unsync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const panner = new AutoPanner(2);
				panner.sync();
				panner.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				panner.unsync();
				// transport.start(0)
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(2, 0.1);
			});
		});
	});
});
