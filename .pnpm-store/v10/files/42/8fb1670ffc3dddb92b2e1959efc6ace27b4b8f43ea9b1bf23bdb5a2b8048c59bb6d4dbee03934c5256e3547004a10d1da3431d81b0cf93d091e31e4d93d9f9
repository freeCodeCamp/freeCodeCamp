import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { Offline } from "../../../test/helper/Offline.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { PulseOscillator } from "./PulseOscillator.js";

describe("PulseOscillator", () => {
	// run the common tests
	BasicTests(PulseOscillator);
	SourceTests(PulseOscillator);
	OscillatorTests(PulseOscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new PulseOscillator({
					width: 0.2,
				}).toDestination();
				osc.start(0);
			},
			"pulseOscillator.wav",
			0.03
		);
	});

	context("Phase Rotation", () => {
		it("can change the phase to 90", () => {
			return Offline(() => {
				const osc = new PulseOscillator({
					frequency: 1,
					phase: 90,
					width: 0,
				});
				osc.toDestination();
				osc.start(0);
			}, 1).then(async (buffer) => {
				buffer.forEach((sample, time) => {
					if (time < 0.25) {
						expect(sample).to.be.within(-1, 0);
					} else if (time > 0.25 && time < 0.5) {
						expect(sample).to.be.within(0, 1);
					}
				});
			});
		});

		it("can change the phase to -90", () => {
			return Offline(() => {
				const osc = new PulseOscillator({
					frequency: 1,
					phase: 270,
					width: 0,
				});
				osc.toDestination();
				osc.start(0);
			}, 1).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < 0.25) {
						expect(sample).to.be.within(0, 1);
					} else if (time > 0.25 && time < 0.5) {
						expect(sample).to.be.within(-1, 0);
					}
				});
			});
		});
	});

	context("Width", () => {
		it("can set the width", () => {
			const osc = new PulseOscillator({
				width: 0.2,
			});
			expect(osc.width.value).to.be.closeTo(0.2, 0.001);
			osc.dispose();
		});

		it("outputs correctly with a width of 0", () => {
			return Offline(() => {
				const osc = new PulseOscillator({
					frequency: 1,
					width: 0,
				});
				osc.toDestination();
				osc.start(0);
			}, 0.9).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time > 0.51) {
						expect(sample).to.be.within(-1, 0);
					}
				});
			});
		});

		it("outputs correctly with a width of 0.5", () => {
			return Offline(() => {
				const osc = new PulseOscillator({
					frequency: 1,
					width: 0.5,
				});
				osc.toDestination();
				osc.start(0);
			}, 1).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time <= 0.6) {
						expect(sample).to.be.within(0, 1);
					} else if (time >= 0.63 && time <= 0.87) {
						expect(sample).to.be.within(-1, 0);
					} else if (time > 0.9) {
						expect(sample).to.be.within(0, 1);
					}
				});
			});
		});
	});

	context("Types", () => {
		it("reports it's type", () => {
			const osc = new PulseOscillator();
			expect(osc.type).to.equal("pulse");
			expect(osc.baseType).to.equal("pulse");
			expect(osc.partials).to.deep.equal([]);
			osc.dispose();
		});
	});
});
