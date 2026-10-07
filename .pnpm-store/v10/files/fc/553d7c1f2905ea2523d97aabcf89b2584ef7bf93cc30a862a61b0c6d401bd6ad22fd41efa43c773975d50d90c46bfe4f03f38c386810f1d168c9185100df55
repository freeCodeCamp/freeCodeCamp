import { expect } from "chai";
import { FeedbackCombFilter } from "./FeedbackCombFilter.js";
import { BitCrusher } from "../../effect/BitCrusher.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Offline } from "../../../test/helper/Offline.js";
import { Signal } from "../../signal/index.js";

describe("FeedbackCombFilter", () => {
	BasicTests(FeedbackCombFilter);

	context("Comb Filtering", () => {
		it("can be constructed with an object", () => {
			const fbcf = new FeedbackCombFilter({
				delayTime: 0.2,
				resonance: 0.3,
			});
			expect(fbcf.delayTime.value).to.be.closeTo(0.2, 0.001);
			expect(fbcf.resonance.value).to.be.closeTo(0.3, 0.001);
			fbcf.dispose();
		});

		it("can be get and set through object", () => {
			const fbcf = new FeedbackCombFilter();
			fbcf.set({
				delayTime: 0.2,
				resonance: 0.3,
			});
			const values = fbcf.get();
			expect(values.delayTime).to.be.closeTo(0.2, 0.001);
			expect(values.resonance).to.be.closeTo(0.3, 0.001);
			fbcf.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const fbcf = new FeedbackCombFilter({
					delayTime: 0.0,
					resonance: 0,
				}).toDestination();
				input.connect(fbcf);
			});
		});

		it("can delay by the delayTime", () => {
			return Offline(() => {
				const fbcf = new FeedbackCombFilter({
					delayTime: 0.1,
					resonance: 0,
				}).toDestination();
				const sig = new Signal(0).connect(fbcf);
				sig.setValueAtTime(1, 0);
			}, 0.2).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.equal(0);
				expect(buffer.getValueAtTime(0.999)).to.equal(0);
				expect(buffer.getValueAtTime(0.101)).to.equal(1);
				expect(buffer.getValueAtTime(0.15)).to.equal(1);
			});
		});

		it("can delay with feedback", () => {
			return Offline(() => {
				const fbcf = new FeedbackCombFilter({
					delayTime: 0.1,
					resonance: 0.5,
				}).toDestination();
				const sig = new Signal(0).connect(fbcf);
				sig.setValueAtTime(1, 0);
				sig.setValueAtTime(0, 0.1);
			}, 0.4).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.equal(0);
				expect(buffer.getValueAtTime(0.101)).to.equal(1);
				expect(buffer.getValueAtTime(0.201)).to.equal(0.5);
				expect(buffer.getValueAtTime(0.301)).to.equal(0.25);
			});
		});
	});

	it("should be usable with the BitCrusher", (done) => {
		new FeedbackCombFilter();
		new BitCrusher(4);

		const handle = setTimeout(() => {
			window.onunhandledrejection = null;
			done();
		}, 100);

		window.onunhandledrejection = (event) => {
			done(event.reason);
			clearTimeout(handle);
		};
	});
});
