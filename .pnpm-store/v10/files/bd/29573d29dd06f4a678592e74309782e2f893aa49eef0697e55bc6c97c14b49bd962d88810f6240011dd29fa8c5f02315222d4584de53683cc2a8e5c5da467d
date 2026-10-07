import { MultibandCompressor } from "./MultibandCompressor.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { expect } from "chai";

describe("MultibandCompressor", () => {
	BasicTests(MultibandCompressor);

	context("Compression", () => {
		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const comp = new MultibandCompressor().toDestination();
				input.connect(comp);
			});
		});

		it("can be get and set through object", () => {
			const comp = new MultibandCompressor();
			const values = {
				mid: {
					ratio: 16,
					threshold: -30,
				},
				high: {
					release: 0.5,
					attack: 0.03,
					knee: 20,
				},
			};
			comp.set(values);
			expect(comp.get()).to.have.keys([
				"low",
				"mid",
				"high",
				"lowFrequency",
				"highFrequency",
			]);
			expect(comp.get().mid.ratio).be.closeTo(16, 0.01);
			expect(comp.get().high.release).be.closeTo(0.5, 0.01);
			comp.dispose();
		});

		it("can be constructed with an options object", () => {
			const comp = new MultibandCompressor({
				mid: {
					ratio: 16,
					threshold: -30,
				},
				lowFrequency: 100,
			});
			expect(comp.mid.ratio.value).be.closeTo(16, 0.01);
			expect(comp.mid.threshold.value).be.closeTo(-30, 0.01);
			expect(comp.lowFrequency.value).be.closeTo(100, 0.01);
			comp.dispose();
		});
	});
});
