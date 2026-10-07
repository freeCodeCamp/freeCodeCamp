import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { connectFrom } from "../../../test/helper/Connect.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { PWMOscillator } from "./PWMOscillator.js";

describe("PWMOscillator", () => {
	// run the common tests
	BasicTests(PWMOscillator);
	SourceTests(PWMOscillator);
	OscillatorTests(PWMOscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new PWMOscillator().toDestination();
				osc.start(0.1);
			},
			"pwmOscillator.wav",
			0.01
		);
	});

	context("Modulation Frequency", () => {
		it("can set the modulation frequency", () => {
			const pwm = new PWMOscillator();
			pwm.modulationFrequency.value = 0.2;
			expect(pwm.modulationFrequency.value).to.be.closeTo(0.2, 0.001);
			pwm.dispose();
		});

		it("can connect a signal to the modulationFrequency", () => {
			const pwm = new PWMOscillator();
			connectFrom().connect(pwm.modulationFrequency);
			pwm.dispose();
		});
	});

	context("Types", () => {
		it("reports it's type", () => {
			const osc = new PWMOscillator();
			expect(osc.type).to.equal("pwm");
			expect(osc.baseType).to.equal("pwm");
			expect(osc.partials).to.deep.equal([]);
			osc.dispose();
		});
	});
});
