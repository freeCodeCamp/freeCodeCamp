import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Offline } from "../../test/helper/Offline.js";
import { Signal } from "./Signal.js";
import { WaveShaper } from "./WaveShaper.js";

describe("WaveShaper", () => {
	BasicTests(WaveShaper);

	describe("Construction Options", () => {
		it("can be constructed with an array", () => {
			const waveshaper = new WaveShaper([1, 2, 3, 4, 5, 6]);
			expect(waveshaper.curve && waveshaper.curve[0]).to.equal(1);
			expect(waveshaper.curve && waveshaper.curve[2]).to.equal(3);
		});

		it("can be constructed with a mapping function", () => {
			const waveshaper = new WaveShaper(() => {
				return -2;
			});
			expect(waveshaper.curve && waveshaper.curve[0]).to.equal(-2);
			expect(waveshaper.curve && waveshaper.curve[1]).to.equal(-2);
		});

		it("can be constructed with a length and then set with a map", () => {
			const waveshaper = new WaveShaper(() => 10, 2048);
			expect(waveshaper.curve && waveshaper.curve.length).to.equal(2048);
			expect(waveshaper.curve && waveshaper.curve[0]).to.equal(10);
			expect(waveshaper.curve && waveshaper.curve[1]).to.equal(10);
		});

		it("can be set to oversample", () => {
			const waveshaper = new WaveShaper();
			expect(waveshaper.oversample).to.equal("none");
			waveshaper.oversample = "2x";
			expect(waveshaper.oversample).to.equal("2x");
			expect(() => {
				// @ts-ignore
				waveshaper.oversample = "3x";
			}).to.throw(Error);
		});
	});

	describe("Logic", () => {
		it("shapes the output of the incoming signal", () => {
			return ConstantOutput(() => {
				const signal = new Signal(1);
				const waveshaper = new WaveShaper([-10, -10, -10]);
				signal.connect(waveshaper);
				waveshaper.toDestination();
			}, -10);
		});

		it("outputs the last curve value when the input is above 1", () => {
			return ConstantOutput(() => {
				const signal = new Signal(10);
				const waveshaper = new WaveShaper([-20, 20]);
				signal.connect(waveshaper);
				waveshaper.toDestination();
			}, 20);
		});

		it("outputs the first curve value when the input is below -1", () => {
			return ConstantOutput(() => {
				const signal = new Signal(-1);
				const waveshaper = new WaveShaper([-20, 20]);
				signal.connect(waveshaper);
				waveshaper.toDestination();
			}, -20);
		});

		it("maps the input through the waveshaping curve", () => {
			return Offline(() => {
				const signal = new Signal(-1);
				const waveshaper = new WaveShaper((input) => {
					return input * 2;
				});
				signal.connect(waveshaper);
				waveshaper.toDestination();
				signal.setValueAtTime(-1, 0);
				signal.linearRampToValueAtTime(1, 1);
			}, 1).then((buffer) => {
				buffer.forEach((sample, time) => {
					expect(sample).to.be.closeTo(2 * (time * 2 - 1), 0.005);
				});
			});
		});
	});
});
