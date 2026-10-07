import { FrequencyEnvelope } from "./FrequencyEnvelope.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { Envelope } from "./Envelope.js";
import { expect } from "chai";

describe("FrequencyEnvelope", () => {
	BasicTests(FrequencyEnvelope);

	context("FrequencyEnvelope", () => {
		it("has an output connections", () => {
			const freqEnv = new FrequencyEnvelope();
			freqEnv.connect(connectTo());
			connectFrom().connect(freqEnv);
			freqEnv.dispose();
		});

		it("extends Envelope", () => {
			const freqEnv = new FrequencyEnvelope();
			expect(freqEnv).to.be.instanceOf(Envelope);
			freqEnv.dispose();
		});

		it("can get and set values an Objects", () => {
			const freqEnv = new FrequencyEnvelope();
			const values = {
				attack: 0,
				release: "4n",
				baseFrequency: 20,
				octaves: 4,
			};
			freqEnv.set(values);
			expect(freqEnv.get()).to.contain.keys(Object.keys(values));
			expect(freqEnv.baseFrequency).to.equal(20);
			expect(freqEnv.octaves).to.equal(4);
			freqEnv.dispose();
		});

		it("can take parameters as both an object and as arguments", () => {
			const env0 = new FrequencyEnvelope({
				attack: 0,
				decay: 0.5,
				sustain: 1,
				exponent: 3,
			});
			expect(env0.attack).to.equal(0);
			expect(env0.decay).to.equal(0.5);
			expect(env0.sustain).to.equal(1);
			expect(env0.exponent).to.equal(3);
			env0.dispose();
			const env1 = new FrequencyEnvelope(0.1, 0.2, 0.3);
			expect(env1.attack).to.equal(0.1);
			expect(env1.decay).to.equal(0.2);
			expect(env1.sustain).to.equal(0.3);
			env1.exponent = 2;
			expect(env1.exponent).to.equal(2);
			env1.dispose();
		});

		it("can set a negative octave", () => {
			const freqEnv = new FrequencyEnvelope();
			freqEnv.octaves = -2;
			freqEnv.dispose();
		});

		it("goes to the scaled range", async () => {
			const e = {
				attack: 0.01,
				decay: 0.4,
				sustain: 1,
			};
			const buffer = await Offline(() => {
				const freqEnv = new FrequencyEnvelope(
					e.attack,
					e.decay,
					e.sustain
				);
				freqEnv.baseFrequency = 200;
				freqEnv.octaves = 3;
				freqEnv.attackCurve = "exponential";
				freqEnv.toDestination();
				freqEnv.triggerAttack(0);
			}, 0.3);
			buffer.forEach((sample, time) => {
				if (time < e.attack) {
					expect(sample).to.be.within(200, 1600);
				} else if (time < e.attack + e.decay) {
					expect(sample).to.be.closeTo(1600, 10);
				}
			});
		});
	});
});
