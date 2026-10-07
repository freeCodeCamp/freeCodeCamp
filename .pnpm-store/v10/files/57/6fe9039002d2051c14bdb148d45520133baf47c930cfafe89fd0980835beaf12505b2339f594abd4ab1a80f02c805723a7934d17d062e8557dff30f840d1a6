import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Compressor } from "./Compressor.js";

describe("Compressor", () => {
	BasicTests(Compressor);

	context("Compression", () => {
		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const comp = new Compressor().toDestination();
				input.connect(comp);
			});
		});

		it("can be get and set through object", () => {
			const comp = new Compressor();
			const values = {
				attack: 0.03,
				knee: 20,
				ratio: 12,
				release: 0.5,
				threshold: -30,
			};
			comp.set(values);
			expect(comp.get()).to.have.keys([
				"ratio",
				"threshold",
				"release",
				"attack",
				"ratio",
			]);
			comp.dispose();
		});

		it("can be get and constructed with an object", () => {
			const comp = new Compressor({
				attack: 0.03,
				knee: 20,
				ratio: 12,
				release: 0.5,
				threshold: -30,
			});
			expect(comp.threshold.value).to.have.be.closeTo(-30, 1);
			comp.dispose();
		});

		it("can be constructed with args", () => {
			const comp = new Compressor(-10, 4);
			expect(comp.threshold.value).to.have.be.closeTo(-10, 0.1);
			expect(comp.ratio.value).to.have.be.closeTo(4, 0.1);
			comp.dispose();
		});

		it("params have correct min and max values", () => {
			const comp = new Compressor(-10, 4);
			expect(comp.threshold.minValue).to.equal(-100);
			expect(comp.threshold.maxValue).to.equal(0);
			expect(comp.attack.minValue).to.equal(0);
			expect(comp.attack.maxValue).to.equal(1);
			expect(comp.release.minValue).to.equal(0);
			expect(comp.release.maxValue).to.equal(1);
			comp.dispose();
		});

		it("can get/set all interfaces", () => {
			const comp = new Compressor();
			const values = {
				attack: 0.03,
				knee: 18,
				ratio: 12,
				release: 0.5,
				threshold: -30,
			};
			comp.ratio.value = values.ratio;
			comp.threshold.value = values.threshold;
			comp.release.value = values.release;
			comp.attack.value = values.attack;
			comp.knee.value = values.knee;
			expect(comp.ratio.value).to.equal(values.ratio);
			expect(comp.threshold.value).to.equal(values.threshold);
			expect(comp.release.value).to.equal(values.release);
			expect(comp.attack.value).to.be.closeTo(values.attack, 0.01);
			expect(comp.knee.value).to.equal(values.knee);
			comp.dispose();
		});
	});
});
