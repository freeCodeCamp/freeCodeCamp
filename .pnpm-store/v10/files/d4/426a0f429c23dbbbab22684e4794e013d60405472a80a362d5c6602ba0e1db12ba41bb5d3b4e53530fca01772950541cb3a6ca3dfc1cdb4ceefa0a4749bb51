import { MidSideCompressor } from "./MidSideCompressor.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { expect } from "chai";

describe("MidSideCompressor", () => {
	BasicTests(MidSideCompressor);

	context("Compression", () => {
		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const comp = new MidSideCompressor().toDestination();
				input.connect(comp);
			});
		});

		it("can be get and set through object", () => {
			const comp = new MidSideCompressor();
			const values = {
				mid: {
					ratio: 16,
					threshold: -30,
				},
				side: {
					release: 0.5,
					attack: 0.03,
					knee: 20,
				},
			};
			comp.set(values);
			expect(comp.get()).to.have.keys(["mid", "side"]);
			expect(comp.get().mid.ratio).be.closeTo(16, 0.01);
			expect(comp.get().side.release).be.closeTo(0.5, 0.01);
			comp.dispose();
		});

		it("can be constructed with an options object", () => {
			const comp = new MidSideCompressor({
				mid: {
					ratio: 16,
					threshold: -30,
				},
				side: {
					release: 0.5,
					attack: 0.03,
					knee: 20,
				},
			});
			expect(comp.mid.ratio.value).be.closeTo(16, 0.01);
			expect(comp.mid.threshold.value).be.closeTo(-30, 0.01);
			expect(comp.side.release.value).be.closeTo(0.5, 0.01);
			expect(comp.side.attack.value).be.closeTo(0.03, 0.01);
			comp.dispose();
		});
	});
});
