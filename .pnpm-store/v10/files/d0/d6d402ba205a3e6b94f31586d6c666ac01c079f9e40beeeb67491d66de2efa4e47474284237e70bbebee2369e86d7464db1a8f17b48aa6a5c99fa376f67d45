import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { MonophonicTest } from "../../test/helper/MonophonicTests.js";
import { Offline } from "../../test/helper/Offline.js";
import { Frequency } from "../core/type/Frequency.js";
import { Synth } from "./Synth.js";

describe("Synth", () => {
	BasicTests(Synth);
	InstrumentTest(Synth, "C4");
	MonophonicTest(Synth, "C4");

	it("matches a file basic", () => {
		return CompareToFile(
			() => {
				const synth = new Synth().toDestination();
				synth.triggerAttackRelease("C4", 0.1, 0.05);
			},
			"synth_basic.wav",
			0.3
		);
	});

	it("matches a file melody", () => {
		return CompareToFile(
			() => {
				const synth = new Synth().toDestination();
				synth.triggerAttack("C4", 0);
				synth.triggerAttack("E4", 0.1, 0.5);
				synth.triggerAttackRelease("G4", 0.5, 0.3);
				synth.triggerAttackRelease("B4", 0.5, 0.5, 0.2);
			},
			"synth_melody.wav",
			0.3
		);
	});

	context("API", () => {
		it("can get and set oscillator attributes", () => {
			const simple = new Synth();
			simple.oscillator.type = "triangle";
			expect(simple.oscillator.type).to.equal("triangle");
			simple.dispose();
		});

		it("can get and set envelope attributes", () => {
			const simple = new Synth();
			simple.envelope.attack = 0.24;
			expect(simple.envelope.attack).to.equal(0.24);
			simple.dispose();
		});

		it("can be constructed with an options object", () => {
			const simple = new Synth({
				envelope: {
					sustain: 0.3,
				},
				oscillator: {
					type: "sine",
				},
				volume: -5,
			});
			expect(simple.envelope.sustain).to.equal(0.3);
			expect(simple.oscillator.type).to.equal("sine");
			expect(simple.volume.value).to.be.closeTo(-5, 0.1);
			simple.dispose();
		});

		it("can get/set attributes", () => {
			const simple = new Synth();
			simple.set({
				envelope: {
					decay: 0.24,
				},
			});
			expect(simple.get().envelope.decay).to.equal(0.24);
			simple.dispose();
		});

		it("can get does not include omited oscillator attributes", () => {
			const simple = new Synth();
			expect(simple.get().oscillator).to.not.have.key("frequency");
			expect(simple.get().oscillator).to.not.have.key("detune");
			expect(Object.keys(simple.get().oscillator)).to.include("type");
			simple.dispose();
		});

		it("can be trigged with a Tone.Frequency", () => {
			return Offline(() => {
				const synth = new Synth().toDestination();
				synth.triggerAttack(Frequency("C4"), 0);
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.false;
			});
		});

		it("is silent after triggerAttack if sustain is 0", () => {
			return Offline(() => {
				const synth = new Synth({
					envelope: {
						attack: 0.1,
						decay: 0.1,
						sustain: 0,
					},
				}).toDestination();
				synth.triggerAttack("C4", 0);
			}, 0.5).then((buffer) => {
				expect(buffer.getTimeOfLastSound()).to.be.closeTo(0.2, 0.01);
			});
		});
	});

	context("Transport sync", () => {
		it("is silent until the transport is started", () => {
			return Offline(({ transport }) => {
				const synth = new Synth().sync().toDestination();
				synth.triggerAttackRelease("C4", 0.5);
				transport.start(0.5);
			}, 1).then((buffer) => {
				expect(buffer.getTimeOfFirstSound()).is.closeTo(0.5, 0.1);
			});
		});

		it("stops when the transport is stopped", () => {
			return Offline(({ transport }) => {
				const synth = new Synth({
					envelope: {
						release: 0,
					},
				})
					.sync()
					.toDestination();
				synth.triggerAttackRelease("C4", 0.5);
				transport.start(0.5).stop(1);
			}, 1.5).then((buffer) => {
				expect(buffer.getTimeOfLastSound()).is.closeTo(1, 0.1);
			});
		});

		it("goes silent at the loop boundary", () => {
			return Offline(({ transport }) => {
				const synth = new Synth({
					envelope: {
						release: 0,
					},
				})
					.sync()
					.toDestination();
				synth.triggerAttackRelease("C4", 0.8, 0.5);
				transport.loopEnd = 1;
				transport.loop = true;
				transport.start();
			}, 2).then((buffer) => {
				expect(buffer.getRmsAtTime(0)).to.be.closeTo(0, 0.05);
				expect(buffer.getRmsAtTime(0.6)).to.be.closeTo(0.2, 0.05);
				expect(buffer.getRmsAtTime(1.1)).to.be.closeTo(0, 0.05);
				expect(buffer.getRmsAtTime(1.6)).to.be.closeTo(0.2, 0.05);
			});
		});

		it("can unsync", () => {
			return Offline(({ transport }) => {
				const synth = new Synth({
					envelope: {
						sustain: 1,
						release: 0,
					},
				})
					.sync()
					.toDestination()
					.unsync();
				synth.triggerAttackRelease("C4", 1, 0.5);
				transport.start().stop(1);
			}, 2).then((buffer) => {
				expect(buffer.getRmsAtTime(0)).to.be.closeTo(0, 0.05);
				expect(buffer.getRmsAtTime(0.6)).to.be.closeTo(0.6, 0.05);
				expect(buffer.getRmsAtTime(1.4)).to.be.closeTo(0.6, 0.05);
				expect(buffer.getRmsAtTime(1.6)).to.be.closeTo(0, 0.05);
			});
		});
	});

	context("Portamento", () => {
		it("can play notes with a portamento", () => {
			return Offline(() => {
				const synth = new Synth({
					portamento: 0.1,
				});
				expect(synth.portamento).to.equal(0.1);
				synth.frequency.toDestination();
				synth.triggerAttack(440, 0);
				synth.triggerAttack(880, 0.1);
			}, 0.2).then((buffer) => {
				buffer.forEach((val, time) => {
					if (time < 0.1) {
						expect(val).to.be.closeTo(440, 1);
					} else if (time < 0.2) {
						expect(val).to.within(440, 880);
					} else {
						expect(val).to.be.closeTo(880, 1);
					}
				});
			});
		});
	});
});
