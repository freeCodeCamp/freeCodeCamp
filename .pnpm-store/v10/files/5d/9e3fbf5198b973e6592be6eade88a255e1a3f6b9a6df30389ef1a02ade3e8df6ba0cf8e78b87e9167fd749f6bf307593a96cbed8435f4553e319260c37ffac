import { LowpassCombFilter } from "./LowpassCombFilter.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Oscillator } from "../../source/oscillator/Oscillator.js";
import { expect } from "chai";

describe("LowpassCombFilter", () => {
	BasicTests(LowpassCombFilter);

	context("Comb Filtering", () => {
		it("can be constructed with an object", () => {
			const lpcf = new LowpassCombFilter({
				delayTime: 0.2,
				resonance: 0.3,
				dampening: 2400,
			});
			expect(lpcf.delayTime.value).to.be.closeTo(0.2, 0.001);
			expect(lpcf.resonance.value).to.be.closeTo(0.3, 0.001);
			expect(lpcf.dampening).to.be.closeTo(2400, 0.001);
			lpcf.dispose();
		});

		it("can be get and set through object", () => {
			const lpcf = new LowpassCombFilter();
			lpcf.set({
				delayTime: 0.2,
				resonance: 0.3,
				dampening: 2000,
			});
			expect(lpcf.get().delayTime).to.be.closeTo(0.2, 0.001);
			expect(lpcf.get().resonance).to.be.closeTo(0.3, 0.001);
			expect(lpcf.get().dampening).to.be.closeTo(2000, 0.001);
			lpcf.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const lpcf = new LowpassCombFilter(0).toDestination();
				input.connect(lpcf);
			});
		});

		it("produces a decay signal at high resonance", () => {
			return Offline(() => {
				const lpcf = new LowpassCombFilter(
					0.01,
					0.9,
					5000
				).toDestination();
				const burst = new Oscillator(440).connect(lpcf);
				burst.start(0);
				burst.stop(0.1);
			}, 0.8).then((buffer) => {
				expect(buffer.getRmsAtTime(0.05)).to.be.within(0.2, 0.6);
				expect(buffer.getRmsAtTime(0.1)).to.be.within(0.2, 0.6);
				expect(buffer.getRmsAtTime(0.15)).to.be.within(0.15, 0.4);
				expect(buffer.getRmsAtTime(0.3)).to.be.within(0.01, 0.15);
				expect(buffer.getRmsAtTime(0.7)).to.be.below(0.01);
			});
		});

		it("produces a decay signal at moderate resonance", () => {
			return Offline(() => {
				const lpcf = new LowpassCombFilter(0.05, 0.5).toDestination();
				const burst = new Oscillator(440).connect(lpcf);
				burst.start(0);
				burst.stop(0.1);
			}, 0.6).then((buffer) => {
				expect(buffer.getRmsAtTime(0.05)).to.be.closeTo(0.7, 0.1);
				expect(buffer.getRmsAtTime(0.1)).to.be.within(0.7, 1.1);
				expect(buffer.getRmsAtTime(0.2)).to.be.closeTo(0.25, 0.1);
				expect(buffer.getRmsAtTime(0.4)).to.be.closeTo(0.015, 0.01);
			});
		});
	});
});
