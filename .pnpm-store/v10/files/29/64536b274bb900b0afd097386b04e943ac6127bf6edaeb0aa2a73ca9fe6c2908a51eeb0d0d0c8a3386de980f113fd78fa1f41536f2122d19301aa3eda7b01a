import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { Offline } from "../../test/helper/Offline.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { Reverb } from "./Reverb.js";

describe("Reverb", () => {
	BasicTests(Reverb);

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const reverb = new Reverb({
				decay: 2,
				preDelay: 0.1,
			});
			expect(reverb.decay).to.be.closeTo(2, 0.001);
			expect(reverb.preDelay).to.be.closeTo(0.1, 0.001);
			reverb.dispose();
		});

		it("can get/set values", () => {
			const reverb = new Reverb();
			reverb.decay = 0.5;
			expect(reverb.decay).to.be.closeTo(0.5, 0.001);
			reverb.preDelay = 0.05;
			expect(reverb.preDelay).to.be.closeTo(0.05, 0.001);
			reverb.dispose();
		});

		it("can get/set the options", () => {
			const reverb = new Reverb();
			reverb.set({
				decay: 0.4,
			});
			expect(reverb.get().decay).to.be.closeTo(0.4, 0.001);
			reverb.dispose();
		});

		it("can generate an IR", () => {
			const reverb = new Reverb();
			const promise = reverb.generate();
			expect(promise).to.have.property("then");
			return promise.then(() => {
				reverb.dispose();
			});
		});

		it.skip("is silent before the reverb is generated", () => {
			return Offline(() => {
				const osc = new Oscillator();
				osc.start(0).stop(0.1);
				const reverb = new Reverb(0.2).toDestination();
				osc.connect(reverb);
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.true;
			});
		});

		it("passes audio from input to output", () => {
			return Offline(async () => {
				const osc = new Oscillator();
				osc.start(0).stop(0.1);
				const reverb = new Reverb(0.2).toDestination();
				osc.connect(reverb);
				await reverb.ready;
			}, 0.3).then((buffer) => {
				expect(buffer.getRmsAtTime(0.05)).to.be.greaterThan(0);
				expect(buffer.getRmsAtTime(0.1)).to.be.greaterThan(0);
				expect(buffer.getRmsAtTime(0.2)).to.be.greaterThan(0);
			});
		});

		it("parses number from string in input", () => {
			// @ts-ignore
			const reverb = new Reverb("1");
			expect(reverb.decay).to.equal(1);
			reverb.dispose();
		});

		it("throws an error with invalid input", () => {
			expect(
				() =>
					new Reverb({
						decay: 0,
						preDelay: -1,
					})
			).to.throw(Error);
		});
	});
});
