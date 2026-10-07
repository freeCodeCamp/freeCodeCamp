import { expect } from "chai";
import { BasicTests, warns } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Signal } from "../../signal/Signal.js";
import { DCMeter } from "./DCMeter.js";

describe("DCMeter", () => {
	BasicTests(DCMeter);

	context("DCMetering", () => {
		it("passes the audio through", () => {
			return PassAudio((input) => {
				const meter = new DCMeter().toDestination();
				input.connect(meter);
			});
		});

		it("can get the rms level of the incoming signal", (done) => {
			const meter = new DCMeter();
			const osc = new Signal(2).connect(meter);
			setTimeout(() => {
				expect(meter.getValue()).to.be.closeTo(2, 0.1);
				meter.dispose();
				osc.dispose();
				done();
			}, 400);
		});
	});
});
