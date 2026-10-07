import { expect } from "chai";
import { BasicTests, warns } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Signal } from "../../signal/Signal.js";
import { Oscillator } from "../../source/oscillator/Oscillator.js";
import { Meter } from "./Meter.js";
import { Panner } from "../channel/Panner.js";
import { Merge } from "../channel/Merge.js";

describe("Meter", () => {
	BasicTests(Meter);

	context("Metering", () => {
		it("handles getter/setter as Object", () => {
			const meter = new Meter();
			const values = {
				smoothing: 0.2,
			};
			meter.set(values);
			expect(meter.get().smoothing).to.equal(0.2);
			meter.dispose();
		});

		it("can be constructed with the smoothing", () => {
			const meter = new Meter(0.5);
			expect(meter.smoothing).to.equal(0.5);
			meter.dispose();
		});

		it("returns an array of channels if channels > 1", () => {
			const meter = new Meter({
				channelCount: 4,
			});
			expect((meter.getValue() as number[]).length).to.equal(4);
			meter.dispose();
		});

		it("can be constructed with an object", () => {
			const meter = new Meter({
				smoothing: 0.3,
			});
			expect(meter.smoothing).to.equal(0.3);
			meter.dispose();
		});

		it("passes the audio through", () => {
			return PassAudio((input) => {
				const meter = new Meter().toDestination();
				input.connect(meter);
			});
		});

		it("warns of deprecated method", () => {
			warns(() => {
				const meter = new Meter().toDestination();
				meter.getLevel();
				meter.dispose();
			});
		});

		it("can get the rms level of the incoming signal", (done) => {
			const meter = new Meter();
			const osc = new Oscillator().connect(meter).start();
			osc.volume.value = -6;
			setTimeout(() => {
				expect(meter.getValue()).to.be.closeTo(-9, 1);
				meter.dispose();
				osc.dispose();
				done();
			}, 400);
		});

		it("can get the values in normal range", (done) => {
			const meter = new Meter({
				normalRange: true,
			});
			const osc = new Oscillator().connect(meter).start();
			osc.volume.value = -6;
			setTimeout(() => {
				expect(meter.getValue()).to.be.closeTo(0.35, 0.15);
				meter.dispose();
				osc.dispose();
				done();
			}, 400);
		});

		it("can get the rms levels for multiple channels", (done) => {
			const meter = new Meter({
				channelCount: 2,
				smoothing: 0.5,
			});
			const merge = new Merge().connect(meter);
			const osc0 = new Oscillator().connect(merge, 0, 0).start();
			const osc1 = new Oscillator().connect(merge, 0, 1).start();
			osc0.volume.value = -6;
			osc1.volume.value = -18;
			setTimeout(() => {
				const values = meter.getValue();
				expect(values).to.have.lengthOf(2);
				expect(values[0]).to.be.closeTo(-9, 1);
				expect(values[1]).to.be.closeTo(-21, 1);
				meter.dispose();
				merge.dispose();
				osc0.dispose();
				osc1.dispose();
				done();
			}, 400);
		});
	});
});
