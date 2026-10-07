import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { FeedbackDelay } from "./FeedbackDelay.js";
import { FeedbackEffect } from "./FeedbackEffect.js";

describe("FeedbackDelay", () => {
	BasicTests(FeedbackDelay);
	EffectTests(FeedbackDelay, 0.01);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const delay = new FeedbackDelay(0.1, 0.6).toDestination();
				const osc = new Oscillator().connect(delay);
				osc.type = "square";
				osc.start(0).stop(0.01);
			},
			"feedbackDelay.wav",
			0.05
		);
	});

	context("API", () => {
		it("extends FeedbackEffect", () => {
			const feedbackDelay = new FeedbackDelay(0.2, 0.3);
			expect(feedbackDelay).to.be.instanceOf(FeedbackEffect);
			feedbackDelay.dispose();
		});

		it("parses constructor arguments correctly", () => {
			const feedbackDelay = new FeedbackDelay(0.1, 0.4);
			expect(feedbackDelay.delayTime.value).to.be.closeTo(0.1, 0.01);
			expect(feedbackDelay.feedback.value).to.be.closeTo(0.4, 0.01);
			feedbackDelay.dispose();
		});

		it("can pass in options in the constructor", () => {
			const feedbackDelay = new FeedbackDelay({
				delayTime: 0.2,
				feedback: 0.3,
			});
			expect(feedbackDelay.delayTime.value).to.be.closeTo(0.2, 0.01);
			expect(feedbackDelay.feedback.value).to.be.closeTo(0.3, 0.01);
			feedbackDelay.dispose();
		});

		it("can get/set the options", () => {
			const feedbackDelay = new FeedbackDelay();
			feedbackDelay.set({
				feedback: 0.4,
			});
			expect(feedbackDelay.get().feedback).to.be.closeTo(0.4, 0.01);
			feedbackDelay.dispose();
		});

		it("can set the delayTime", () => {
			const feedbackDelay = new FeedbackDelay();
			feedbackDelay.delayTime.value = "4n";
			expect(feedbackDelay.delayTime.value).to.be.closeTo(0.5, 0.001);
			feedbackDelay.delayTime.value = 0.22;
			expect(feedbackDelay.delayTime.value).to.be.closeTo(0.22, 0.001);
			feedbackDelay.dispose();
		});

		it("can set the feedback amount", () => {
			const feedbackDelay = new FeedbackDelay();
			feedbackDelay.feedback.value = 1;
			expect(feedbackDelay.feedback.value).to.be.closeTo(1, 0.001);
			feedbackDelay.feedback.value = 0.22;
			expect(feedbackDelay.feedback.value).to.be.closeTo(0.22, 0.001);
			feedbackDelay.dispose();
		});
	});
});
