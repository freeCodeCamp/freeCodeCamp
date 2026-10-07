import { OnePoleFilter } from "./OnePoleFilter.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Oscillator } from "../../source/oscillator/Oscillator.js";
import { expect } from "chai";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { atTime, Offline } from "../../../test/helper/Offline.js";

describe("OnePoleFilter", () => {
	BasicTests(OnePoleFilter);

	it("matches a file when set to lowpass", () => {
		return CompareToFile(
			() => {
				const filter = new OnePoleFilter(
					300,
					"lowpass"
				).toDestination();
				const osc = new Oscillator().connect(filter);
				osc.type = "square";
				osc.start(0).stop(0.1);
			},
			"onePoleLowpass.wav",
			0.05
		);
	});

	it("matches a file when set to highpass", () => {
		return CompareToFile(
			() => {
				const filter = new OnePoleFilter(
					700,
					"highpass"
				).toDestination();
				const osc = new Oscillator().connect(filter);
				osc.type = "square";
				osc.start(0).stop(0.1);
			},
			"onePoleHighpass.wav",
			0.05
		);
	});

	context("Filtering", () => {
		it("can set the frequency more than once", () => {
			return Offline(() => {
				const filter = new OnePoleFilter(200);
				filter.frequency = 300;
				return atTime(0.1, () => {
					filter.frequency = 400;
				});
			}, 1);
		});

		it("can be constructed with an object", () => {
			const filter = new OnePoleFilter({
				frequency: 400,
				type: "lowpass",
			});
			expect(filter.frequency).to.be.closeTo(400, 0.1);
			expect(filter.type).to.equal("lowpass");
			filter.dispose();
		});

		it("can be constructed with args", () => {
			const filter = new OnePoleFilter(120, "highpass");
			expect(filter.frequency).to.be.closeTo(120, 0.1);
			expect(filter.type).to.equal("highpass");
			filter.dispose();
		});

		it("can be get and set through object", () => {
			const filter = new OnePoleFilter();
			filter.set({
				frequency: 200,
				type: "highpass",
			});
			expect(filter.get().type).to.equal("highpass");
			expect(filter.get().frequency).to.be.closeTo(200, 0.1);
			filter.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const filter = new OnePoleFilter(5000).toDestination();
				input.connect(filter);
			});
		});
	});

	context("Response Curve", () => {
		it("can get the response curve", () => {
			const filter = new OnePoleFilter();
			const response = filter.getFrequencyResponse(128);
			expect(response.length).to.equal(128);
			response.forEach((v) => expect(v).to.be.within(0, 1));
			filter.dispose();
		});
	});
});
