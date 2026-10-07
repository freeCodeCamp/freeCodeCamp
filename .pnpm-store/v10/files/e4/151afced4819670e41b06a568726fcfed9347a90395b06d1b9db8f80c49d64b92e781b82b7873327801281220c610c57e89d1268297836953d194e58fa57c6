import { Tremolo } from "./Tremolo.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { Offline } from "../../test/helper/Offline.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Oscillator } from "../source/index.js";

describe("Tremolo", () => {
	BasicTests(Tremolo);
	EffectTests(Tremolo);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const tremolo = new Tremolo().toDestination().start(0.2);
				const osc = new Oscillator().connect(tremolo).start();
			},
			"tremolo.wav",
			0.05
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const tremolo = new Tremolo({
				depth: 0.2,
				type: "sawtooth",
				spread: 160,
			});
			expect(tremolo.depth.value).to.be.closeTo(0.2, 0.001);
			expect(tremolo.type).to.equal("sawtooth");
			expect(tremolo.spread).to.equal(160);
			tremolo.dispose();
		});

		it("can be started and stopped", () => {
			const tremolo = new Tremolo();
			tremolo.start().stop("+0.2");
			tremolo.dispose();
		});

		it("can get/set the options", () => {
			const tremolo = new Tremolo();
			tremolo.set({
				frequency: 2.4,
				type: "triangle",
			});
			expect(tremolo.get().frequency).to.be.closeTo(2.4, 0.01);
			expect(tremolo.get().type).to.equal("triangle");
			tremolo.dispose();
		});

		it("can set the frequency and depth", () => {
			const tremolo = new Tremolo();
			tremolo.depth.value = 0.4;
			tremolo.frequency.value = 0.4;
			expect(tremolo.depth.value).to.be.closeTo(0.4, 0.01);
			expect(tremolo.frequency.value).to.be.closeTo(0.4, 0.01);
			tremolo.dispose();
		});

		it("can sync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const tremolo = new Tremolo(2);
				tremolo.sync();
				tremolo.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(4, 0.1);
			});
		});

		it("can unsync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const tremolo = new Tremolo(2);
				tremolo.sync();
				tremolo.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				tremolo.unsync();
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(2, 0.1);
			});
		});
	});
});
