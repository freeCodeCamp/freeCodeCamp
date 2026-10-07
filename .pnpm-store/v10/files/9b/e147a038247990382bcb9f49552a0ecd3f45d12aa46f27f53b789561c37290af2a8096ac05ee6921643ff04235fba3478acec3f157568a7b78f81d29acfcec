import { Chorus } from "./Chorus.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Oscillator } from "../source/index.js";
import { Offline } from "../../test/helper/Offline.js";

describe("Chorus", () => {
	BasicTests(Chorus);
	EffectTests(Chorus);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const chorus = new Chorus().toDestination().start();
				const osc = new Oscillator(220, "sawtooth")
					.connect(chorus)
					.start();
			},
			"chorus.wav",
			0.25
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const chorus = new Chorus({
				frequency: 2,
				delayTime: 1,
				depth: 0.4,
				spread: 90,
			});
			expect(chorus.frequency.value).to.be.closeTo(2, 0.01);
			expect(chorus.delayTime).to.be.closeTo(1, 0.01);
			expect(chorus.depth).to.be.closeTo(0.4, 0.01);
			expect(chorus.spread).to.be.equal(90);
			chorus.dispose();
		});

		it("can get/set the options", () => {
			const chorus = new Chorus();
			chorus.set({
				type: "square",
			});
			expect(chorus.get().type).to.equal("square");
			chorus.dispose();
		});

		it("can get/set the delayTime", () => {
			const chorus = new Chorus();
			chorus.delayTime = 3;
			expect(chorus.delayTime).to.equal(3);
			chorus.dispose();
		});

		it("can be started and stopped", () => {
			const chorus = new Chorus();
			chorus.start().stop("+0.2");
			chorus.dispose();
		});

		it("can sync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const chorus = new Chorus(2);
				chorus.sync();
				chorus.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				// transport.start(0)
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(4, 0.1);
			});
		});

		it("can unsync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const chorus = new Chorus(2);
				chorus.sync();
				chorus.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				chorus.unsync();
				// transport.start(0)
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(2, 0.1);
			});
		});
	});
});
