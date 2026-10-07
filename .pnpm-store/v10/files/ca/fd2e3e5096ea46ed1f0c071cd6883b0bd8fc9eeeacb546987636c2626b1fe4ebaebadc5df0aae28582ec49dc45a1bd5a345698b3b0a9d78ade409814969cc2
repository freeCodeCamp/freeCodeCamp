import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { Offline } from "../../../test/helper/Offline.js";
import { Signal } from "../../signal/Signal.js";
import { Oscillator } from "../../source/oscillator/Oscillator.js";
import { AmplitudeEnvelope } from "./AmplitudeEnvelope.js";
import { Envelope } from "./Envelope.js";

describe("AmplitudeEnvelope", () => {
	BasicTests(AmplitudeEnvelope);

	context("Comparisons", () => {
		it("matches a file", () => {
			return CompareToFile(() => {
				const ampEnv = new AmplitudeEnvelope({
					attack: 0.1,
					decay: 0.2,
					release: 0.2,
					sustain: 0.1,
				}).toDestination();
				const osc = new Oscillator().start(0).connect(ampEnv);
				ampEnv.triggerAttack(0);
				ampEnv.triggerRelease(0.3);
			}, "ampEnvelope.wav");
		});

		it("matches a file with multiple retriggers", () => {
			return CompareToFile(
				() => {
					const ampEnv = new AmplitudeEnvelope({
						attack: 0.1,
						decay: 0.2,
						release: 0.2,
						sustain: 0.1,
					}).toDestination();
					const osc = new Oscillator().start(0).connect(ampEnv);
					ampEnv.triggerAttack(0);
					ampEnv.triggerAttack(0.3);
				},
				"ampEnvelope2.wav",
				0.004
			);
		});

		it("matches a file with ripple attack/release", () => {
			return CompareToFile(
				() => {
					const ampEnv = new AmplitudeEnvelope({
						attack: 0.5,
						attackCurve: "ripple",
						decay: 0.2,
						release: 0.3,
						releaseCurve: "ripple",
						sustain: 0.1,
					}).toDestination();
					const osc = new Oscillator().start(0).connect(ampEnv);
					ampEnv.triggerAttack(0);
					ampEnv.triggerRelease(0.7);
					ampEnv.triggerAttack(1);
					ampEnv.triggerRelease(1.6);
				},
				"ampEnvelope3.wav",
				0.002
			);
		});
	});

	context("Envelope", () => {
		it("extends envelope", () => {
			const ampEnv = new AmplitudeEnvelope();
			expect(ampEnv).to.be.instanceOf(Envelope);
			ampEnv.dispose();
		});

		it("passes no signal before being triggered", () => {
			return Offline(() => {
				const ampEnv = new AmplitudeEnvelope().toDestination();
				new Signal(1).connect(ampEnv);
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.true;
			});
		});

		it("passes signal once triggered", () => {
			return Offline(() => {
				const ampEnv = new AmplitudeEnvelope().toDestination();
				new Signal(1).connect(ampEnv);
				ampEnv.triggerAttack(0.1);
			}, 0.2).then((buffer) => {
				expect(buffer.getTimeOfFirstSound()).to.be.closeTo(0.1, 0.001);
			});
		});
	});
});
