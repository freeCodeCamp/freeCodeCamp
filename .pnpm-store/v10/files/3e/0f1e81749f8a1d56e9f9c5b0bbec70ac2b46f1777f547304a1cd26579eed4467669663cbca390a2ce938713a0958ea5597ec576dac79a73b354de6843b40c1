import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { atTime, Offline } from "../../test/helper/Offline.js";
import { ToneAudioBuffer } from "../core/context/ToneAudioBuffer.js";
import { Sampler } from "./Sampler.js";

describe("Sampler", () => {
	const A4_buffer = new ToneAudioBuffer();

	beforeEach(() => {
		return A4_buffer.load("./test/audio/sine.wav");
	});

	BasicTests(Sampler);

	InstrumentTest(
		Sampler,
		"A4",
		{
			69: A4_buffer,
		},
		1
	);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const sampler = new Sampler(
					{
						69: A4_buffer,
					},
					{
						release: 0.4,
					}
				).toDestination();
				sampler.triggerAttackRelease("C4", 0.1, 0, 0.2);
				sampler.triggerAttackRelease("E4", 0.1, 0.2, 0.4);
				sampler.triggerAttackRelease("G4", 0.1, 0.4, 0.6);
				sampler.triggerAttackRelease("B4", 0.1, 0.6, 0.8);
				sampler.triggerAttackRelease("C4", 0.1, 0.8);
			},
			"sampler.wav",
			0.01
		);
	});

	context("Constructor", () => {
		it("can be constructed with an options object", () => {
			const sampler = new Sampler(
				{
					69: A4_buffer,
				},
				{
					attack: 0.2,
					release: 0.3,
				}
			);
			expect(sampler.attack).to.equal(0.2);
			expect(sampler.release).to.equal(0.3);
			sampler.dispose();
		});

		it("can be constructed with an options object with urls object", () => {
			const sampler = new Sampler({
				attack: 0.4,
				release: 0.5,
				urls: {
					69: A4_buffer,
				},
			});
			expect(sampler.attack).to.equal(0.4);
			expect(sampler.release).to.equal(0.5);
			sampler.dispose();
		});

		it("urls can be described as either midi or notes", () => {
			return Offline(() => {
				const sampler = new Sampler({
					A4: A4_buffer,
				}).toDestination();
				sampler.triggerAttack("A4");
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.false;
			});
		});

		it("throws an error if there are no available notes to play", () => {
			expect(() => {
				const sampler = new Sampler();
				sampler.triggerAttack("C4");
			}).throws(Error);
		});

		it("throws an error if the url key is not midi or pitch notation", () => {
			expect(() => {
				const sampler = new Sampler({
					urls: {
						note: A4_buffer,
					},
				});
			}).throws(Error);
		});

		it("invokes onerror if the ", (done) => {
			const sampler = new Sampler({
				urls: {
					40: "./nosuchfile.wav",
				},
				onerror(e) {
					expect(e).to.be.instanceOf(Error);
					sampler.dispose();
					done();
				},
			});
		});

		it("can get and set envelope attributes", () => {
			const sampler = new Sampler();
			sampler.attack = 0.1;
			sampler.release = 0.1;
			expect(sampler.attack).to.equal(0.1);
			expect(sampler.release).to.equal(0.1);
			sampler.dispose();
		});

		it("invokes the callback when loaded", (done) => {
			const sampler = new Sampler(
				{
					A4: "./test/audio/sine.wav",
				},
				() => {
					expect(sampler.loaded).to.be.true;
					done();
				}
			);
		});

		it("can pass in a callback and baseUrl", (done) => {
			const sampler = new Sampler(
				{
					A4: A4_buffer,
				},
				() => {
					expect(sampler.loaded).to.be.true;
					done();
				},
				"./baseUrl"
			);
		});

		it("can dispose while playing sounds", () => {
			return Offline(() => {
				const sampler = new Sampler(
					{
						A4: A4_buffer,
					},
					{
						release: 0,
					}
				).toDestination();
				sampler.triggerAttack("A4", 0);
				sampler.triggerRelease("A4", 0.2);
				sampler.dispose();
			}, 0.3);
		});
	});

	context("Makes sound", () => {
		it("repitches the note", () => {
			return Offline(() => {
				const sampler = new Sampler({
					A4: A4_buffer,
				}).toDestination();
				sampler.triggerAttack("G4");
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.false;
			});
		});

		it("is silent after the release", () => {
			return Offline(() => {
				const sampler = new Sampler(
					{
						A4: A4_buffer,
					},
					{
						release: 0,
					}
				).toDestination();
				sampler.triggerAttack("A4", 0);
				sampler.triggerRelease("A4", 0.2);
			}, 0.3).then((buffer) => {
				expect(buffer.getTimeOfLastSound()).to.be.closeTo(0.2, 0.01);
			});
		});

		it("can triggerRelease after the buffer has already stopped", () => {
			return Offline(() => {
				const sampler = new Sampler(
					{
						A4: A4_buffer,
					},
					{
						release: 0,
					}
				).toDestination();
				sampler.triggerAttack("A4", 0);
				return atTime(A4_buffer.duration + 0.01, () => {
					sampler.triggerRelease("A4");
				});
			}, A4_buffer.duration + 0.1).then((buffer) => {
				expect(buffer.getTimeOfLastSound()).to.be.closeTo(
					A4_buffer.duration,
					0.01
				);
			});
		});

		it("can release multiple notes", () => {
			return Offline(() => {
				const sampler = new Sampler(
					{
						A4: A4_buffer,
					},
					{
						release: 0,
					}
				).toDestination();
				sampler.triggerAttack("A4", 0);
				sampler.triggerAttack("C4", 0);
				sampler.triggerAttack("A4", 0.1);
				sampler.triggerAttack("G4", 0.1);
				sampler.releaseAll(0.2);
			}, 0.3).then((buffer) => {
				expect(buffer.getTimeOfLastSound()).to.be.closeTo(0.2, 0.01);
			});
		});

		it("can trigger the attack and release", () => {
			return Offline(() => {
				const sampler = new Sampler(
					{
						A4: A4_buffer,
					},
					{
						release: 0,
					}
				).toDestination();
				sampler.triggerAttackRelease("A4", 0.2, 0.1);
			}, 0.4).then((buffer) => {
				expect(buffer.getTimeOfFirstSound()).to.be.closeTo(0.1, 0.01);
				expect(buffer.getTimeOfLastSound()).to.be.closeTo(0.3, 0.01);
			});
		});

		it("can trigger polyphonic attack release", () => {
			return Offline(() => {
				const sampler = new Sampler(
					{
						A4: A4_buffer,
					},
					{
						release: 0,
					}
				).toDestination();
				sampler.triggerAttackRelease(["A4", "C4"], [0.2, 0.3], 0.1);
			}, 0.5).then((buffer) => {
				expect(buffer.getTimeOfFirstSound()).to.be.closeTo(0.1, 0.01);
				expect(buffer.getTimeOfLastSound()).to.be.closeTo(0.4, 0.01);
			});
		});
	});

	context("add samples", () => {
		it("can add a note with it's midi value", () => {
			return Offline(() => {
				const sampler = new Sampler().toDestination();
				sampler.add(69, A4_buffer);
				sampler.triggerAttack("B4");
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.false;
			});
		});

		it("can add a note with it's note name", () => {
			return Offline(() => {
				const sampler = new Sampler().toDestination();
				sampler.add("A4", A4_buffer);
				sampler.triggerAttack("G4");
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.false;
			});
		});

		it("can pass in a url and invokes the callback", (done) => {
			const sampler = new Sampler();
			sampler.add("A4", "./test/audio/sine.wav", () => {
				done();
			});
		});

		it("throws an error if added note key is not midi or note name", () => {
			expect(() => {
				const sampler = new Sampler().toDestination();
				// @ts-ignore
				sampler.add("nope", A4_buffer);
			}).throws(Error);
		});
	});
});
