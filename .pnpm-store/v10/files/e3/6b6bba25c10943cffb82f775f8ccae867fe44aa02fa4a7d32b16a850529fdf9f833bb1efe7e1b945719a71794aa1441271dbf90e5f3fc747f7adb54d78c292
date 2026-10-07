import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { connectTo } from "../../../test/helper/Connect.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { connect } from "../../core/context/ToneAudioNode.js";
import { Subtract } from "../../signal/Subtract.js";
import { PhaseShiftAllpass } from "./PhaseShiftAllpass.js";

describe("PhaseShiftAllpass", () => {
	BasicTests(PhaseShiftAllpass);

	context("PhaseShiftAllpass", () => {
		it("handles output connections", () => {
			const phaseShifter = new PhaseShiftAllpass();
			phaseShifter.connect(connectTo());
			phaseShifter.offset90.connect(connectTo());
			phaseShifter.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const phaseShifter = new PhaseShiftAllpass().toDestination();
				input.connect(phaseShifter);
			});
		});

		it("generates correct values with the phase shifted channel", () => {
			return CompareToFile(
				(context) => {
					// create impulse with 5 samples offset
					const constantNode = context.createConstantSource();
					constantNode.start(0);
					const oneSampleDelay = context.createIIRFilter(
						[0.0, 1.0],
						[1.0, 0.0]
					);
					const fiveSampleDelay = context.createIIRFilter(
						[0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
						[1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
					);
					const sub = new Subtract();

					connect(constantNode, oneSampleDelay);
					connect(constantNode, sub);
					connect(oneSampleDelay, sub.subtrahend);
					connect(sub, fiveSampleDelay);

					const phaseShifter = new PhaseShiftAllpass();
					connect(fiveSampleDelay, phaseShifter);
					phaseShifter.toDestination();
				},
				"phaseShiftAllpass.wav",
				0.001
			);
		});

		it("generates correct values with the offset90 channel", () => {
			return CompareToFile(
				(context) => {
					// create impulse with 5 samples offset
					const constantNode = context.createConstantSource();
					constantNode.start(0);
					const oneSampleDelay = context.createIIRFilter(
						[0.0, 1.0],
						[1.0, 0.0]
					);
					const fiveSampleDelay = context.createIIRFilter(
						[0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
						[1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
					);
					const sub = new Subtract();

					connect(constantNode, oneSampleDelay);
					connect(constantNode, sub);
					connect(oneSampleDelay, sub.subtrahend);
					connect(sub, fiveSampleDelay);

					const phaseShifter = new PhaseShiftAllpass();
					connect(fiveSampleDelay, phaseShifter);
					phaseShifter.offset90.toDestination();
				},
				"phaseShiftAllpass1.wav",
				0.001
			);
		});
	});
});
