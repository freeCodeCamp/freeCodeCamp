import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { atTime, Offline, whenBetween } from "../../../test/helper/Offline.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { getContext } from "../../core/Global.js";
import { Player } from "./Player.js";

describe("Player", () => {
	const buffer = new ToneAudioBuffer();

	beforeEach(() => {
		return buffer.load("./test/audio/sine.wav");
	});

	// run the common tests
	BasicTests(Player, buffer);
	SourceTests(Player, buffer);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const player = new Player(buffer).toDestination();
				player.start(0.1).stop(0.2);
				player.playbackRate = 2;
			},
			"player.wav",
			0.005
		);
	});

	context("Constructor", () => {
		it("can be constructed with a Tone.Buffer", () => {
			const player = new Player(buffer);
			expect(player.buffer.get()).to.equal(buffer.get());
			player.dispose();
		});

		it("can be constructed with an AudioBuffer", () => {
			const player = new Player(buffer.get());
			expect(player.buffer.get()).to.equal(buffer.get());
			player.dispose();
		});

		it("can be constructed with an unloaded Tone.Buffer", (done) => {
			const playerBuffer = new ToneAudioBuffer("./test/audio/sine.wav");
			const player = new Player(playerBuffer, () => {
				expect(player.buffer.get()).to.equal(playerBuffer.get());
				player.dispose();
				done();
			});
		});

		it("can be constructed with no arguments", () => {
			const player = new Player();
			// set the buffer
			player.buffer = buffer;
			expect(player.buffer.get()).to.equal(buffer.get());
			player.dispose();
		});
	});

	context("onstop", () => {
		it("invokes the onstop method when the player is explicitly stopped", () => {
			let wasInvoked = false;
			return Offline(() => {
				const player = new Player({
					onstop: () => {
						wasInvoked = true;
					},
					url: buffer,
				});
				player.start(0).stop(0.1);
			}, 0.2).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});

		it("invokes the onstop method when the file is naturally over", () => {
			let wasInvoked = false;
			return Offline(() => {
				const player = new Player(buffer);
				player.start(0);
				player.onstop = () => {
					wasInvoked = true;
					expect(player.state).to.equal("stopped");
				};
			}, buffer.duration * 1.1).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});

		it("invokes the onstop method on restart", () => {
			let wasInvoked = 0;
			return Offline(() => {
				const player = new Player(buffer);
				player.start(0).restart(0.1).stop(0.2);
				player.onstop = () => {
					wasInvoked++;
				};
			}, 0.3).then(() => {
				expect(wasInvoked).to.equal(2);
			});
		});
	});

	context("Loading", () => {
		it("loads a url which was passed in", (done) => {
			const player = new Player("./test/audio/sine.wav", () => {
				expect(player.loaded).to.be.true;
				player.dispose();
				done();
			});
		});

		it("loads a url using the load method", () => {
			const player = new Player();
			return player.load("./test/audio/sine.wav").then(() => {
				expect(player.buffer).to.be.instanceof(ToneAudioBuffer);
			});
		});

		it("can be created with an options object", () => {
			const player = new Player({
				loop: true,
				url: "./test/audio/sine.wav",
			});
			player.dispose();
		});

		it("invokes onerror if no url", (done) => {
			const source = new Player({
				url: "./nosuchfile.wav",
				onerror(e) {
					expect(e).to.be.instanceOf(Error);
					source.dispose();
					done();
				},
			});
		});

		it("can autostart after loading", (done) => {
			const player = new Player({
				autostart: true,
				onload(): void {
					setTimeout(() => {
						expect(player.state).to.be.equal("started");
						done();
					}, 10);
				},
				url: "./test/audio/sine.wav",
			});
		});
	});

	context("Reverse", () => {
		it("can get/set reverse", () => {
			const player = new Player();
			player.reverse = true;
			expect(player.reverse).to.equal(true);
			player.dispose();
		});

		it("can be played in reverse", () => {
			const shorterBuffer = buffer.slice(0, buffer.duration / 2);
			const audioBuffer = (
				shorterBuffer.get() as AudioBuffer
			).getChannelData(0);
			const lastSample = audioBuffer[audioBuffer.length - 1];
			expect(lastSample).to.not.equal(0);
			return Offline(() => {
				const player = new Player({
					reverse: true,
					url: shorterBuffer.get(),
				}).toDestination();
				player.start(0);
			}).then((buff) => {
				const firstSample = buff.toArray()[0][0];
				expect(firstSample).to.equal(lastSample);
			});
		});
	});

	context("Looping", () => {
		beforeEach(() => {
			return buffer.load("./test/audio/short_sine.wav");
		});

		it("can be set to loop", () => {
			const player = new Player();
			player.loop = true;
			expect(player.loop).to.be.true;
			player.dispose();
		});

		it("can set the loop points", () => {
			const player = new Player();
			player.loopStart = 0.4;
			expect(player.loopStart).to.equal(0.4);
			player.loopEnd = 0.5;
			expect(player.loopEnd).to.equal(0.5);
			player.setLoopPoints(0, 0.2);
			expect(player.loopStart).to.equal(0);
			expect(player.loopEnd).to.equal(0.2);
			player.dispose();
		});

		it("loops the audio", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.loop = true;
				player.toDestination();
				player.start(0);
			}, buffer.duration * 1.5).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 0.5)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 1.2)).to.be.above(0);
			});
		});

		it("setting the loop multiple times has no affect", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.loop = true;
				player.loop = true;
				player.toDestination();
				player.start(0);
			}, buffer.duration * 1.5).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 0.5)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 1.2)).to.be.above(0);
			});
		});

		it("loops the audio when loop is set after start", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.toDestination();
				player.start(0);
				player.loop = true;
			}, buffer.duration * 1.5).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 0.5)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 1.2)).to.be.above(0);
			});
		});

		it("offset is the loopStart when set to loop", () => {
			const testSample =
				buffer.toArray(0)[Math.floor(0.1 * getContext().sampleRate)];
			return Offline(() => {
				const player = new Player(buffer);
				player.loopStart = 0.1;
				player.loop = true;
				player.toDestination();
				player.start(0);
			}, 0.05).then((buff) => {
				expect(buff.toArray()[0][0]).to.equal(testSample);
			});
		});

		it("loops the audio for the specific duration", () => {
			const playDur = buffer.duration * 1.5;
			return Offline(() => {
				const player = new Player(buffer);
				player.loop = true;
				player.toDestination();
				player.start(0, 0, playDur);
			}, buffer.duration * 2).then((buff) => {
				for (let time = 0; time < buffer.duration * 2; time += 0.1) {
					const val = buff.getRmsAtTime(time);
					if (time < playDur - 0.01) {
						expect(val).to.be.greaterThan(0);
					} else if (time > playDur) {
						expect(val).to.equal(0);
					}
				}
			});
		});

		it("correctly compensates if the offset is greater than the loopEnd", () => {
			return Offline(() => {
				// make a ramp between 0-1
				const ramp = new Float32Array(
					Math.floor(getContext().sampleRate * 0.3)
				);
				for (let i = 0; i < ramp.length; i++) {
					ramp[i] = (i / ramp.length) * 0.3;
				}
				const buff = ToneAudioBuffer.fromArray(ramp);
				const player = new Player(buff).toDestination();
				player.loopStart = 0.1;
				player.loopEnd = 0.2;
				player.loop = true;
				player.start(0, 0.35);
			}, 0.05).then((buff) => {
				buff.forEach((sample, time) => {
					if (time < 0.04) {
						expect(sample).to.be.within(0.15, 0.2);
					} else if (time > 0.05 && time < 0.09) {
						expect(sample).to.be.within(0.1, 0.15);
					}
				});
			});
		});
	});

	context("PlaybackRate", () => {
		it("reports itself as completed after the stop time when playbackRate = 1", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.start(0);
				return atTime(buffer.duration + 0.1, () => {
					expect(player.state).to.equal("stopped");
				});
			}, buffer.duration * 1.1);
		});

		it("no longer reports itself as stopped when playback rate is changed to < 1", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.start(0);
				player.playbackRate = 0.5;
				return atTime(buffer.duration + 0.1, () => {
					expect(player.state).to.equal("started");
				});
			}, buffer.duration * 1.1);
		});

		it("when end is explicitly scheduled, it does not matter if playbackRate is changed", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.start(0).stop(0.1);
				player.playbackRate = 0.5;
				return atTime(0.11, () => {
					expect(player.state).to.equal("stopped");
				});
			}, buffer.duration);
		});
	});

	context("Get/Set", () => {
		it("can be set with an options object", () => {
			const player = new Player();
			expect(player.loop).to.be.false;
			player.set({
				fadeIn: 0.1,
				fadeOut: 0.2,
				loop: true,
				loopStart: 0.4,
			});
			expect(player.loop).to.be.true;
			expect(player.loopStart).to.equal(0.4);
			expect(player.fadeIn).to.equal(0.1);
			expect(player.fadeOut).to.equal(0.2);
			player.dispose();
		});

		it("can set attributes after player is started", () => {
			const player = new Player(buffer);
			expect(player.loop).to.be.false;
			player.start();
			player.set({
				loop: true,
				loopEnd: 0.3,
				loopStart: 0.2,
				playbackRate: 0.9,
			});
			expect(player.loop).to.be.true;
			expect(player.loopStart).to.equal(0.2);
			expect(player.loopEnd).to.equal(0.3);
			expect(player.playbackRate).to.equal(0.9);
			player.dispose();
		});

		it("can get an options object", () => {
			const player = new Player({
				loop: true,
				loopEnd: 0.3,
				loopStart: 0.2,
				reverse: true,
				url: "./test/audio/sine.wav",
			});
			expect(player.get().loopStart).to.equal(0.2);
			expect(player.get().loopEnd).to.equal(0.3);
			expect(player.get().loop).to.be.true;
			expect(player.get().reverse).to.be.true;
			player.dispose();
		});

		it("can get/set the playbackRate", () => {
			const player = new Player();
			player.playbackRate = 0.5;
			expect(player.playbackRate).to.equal(0.5);
			player.dispose();
		});
	});

	context("Start Scheduling", () => {
		it("can be start with an offset", () => {
			const testSample =
				buffer.toArray(0)[Math.floor(0.1 * getContext().sampleRate)];
			return Offline(() => {
				const player = new Player(buffer.get());
				player.toDestination();
				player.start(0, 0.1);
			}).then((buff) => {
				expect(buff.toArray()[0][0]).to.equal(testSample);
			});
		});

		it("is stopped and restarted when start is called twice", () => {
			return Offline(() => {
				// make a ramp between 0-1
				const ramp = new Float32Array(
					Math.floor(getContext().sampleRate * 0.3)
				);
				for (let i = 0; i < ramp.length; i++) {
					ramp[i] = i / (ramp.length - 1);
				}
				const buff = new ToneAudioBuffer().fromArray(ramp);
				const player = new Player(buff).toDestination();
				player.start(0);
				player.start(0.1);
			}, 0.31).then((buff) => {
				expect(buff.max()).to.be.lessThan(1);
			});
		});

		it("only seeks if player is started", () => {
			return Offline(() => {
				const player = new Player(buffer).toDestination();
				player.seek(0.2, 0.01);
			}, 0.05).then((buff) => {
				expect(buff.isSilent()).to.be.true;
			});
		});

		it("can seek to a position at the given time", () => {
			return Offline(() => {
				const ramp = new Float32Array(
					Math.floor(getContext().sampleRate * 0.3)
				);
				for (let i = 0; i < ramp.length; i++) {
					ramp[i] = (i / ramp.length) * 0.3;
				}
				const buff = new ToneAudioBuffer().fromArray(ramp);
				const player = new Player(buff).toDestination();
				player.start(0);
				player.seek(0.2, 0.1);
			}, 0.3).then((buff) => {
				buff.forEach((sample, time) => {
					if (time < 0.09) {
						expect(sample).to.be.within(0, 0.1);
					} else if (time > 0.1 && time < 0.19) {
						expect(sample).to.be.within(0.2, 0.3);
					}
				});
			});
		});

		it("can be play for a specific duration", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.toDestination();
				player.start(0).stop(0.1);
				return (time) => {
					whenBetween(time, 0.1, Infinity, () => {
						expect(player.state).to.equal("stopped");
					});
					whenBetween(time, 0, 0.1, () => {
						expect(player.state).to.equal("started");
					});
				};
			}, 0.3).then((buff) => {
				buff.forEachBetween(
					(sample) => {
						expect(sample).to.equal(0);
					},
					0.11,
					0.15
				);
			});
		});

		it("stops playing if invoked with 'stop' at a sooner time", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.toDestination();
				player.start(0).stop(0.1).stop(0.05);
			}, 0.3).then((buff) => {
				expect(buff.getTimeOfLastSound()).to.be.closeTo(0.05, 0.02);
			});
		});

		it("stops playing if at the last scheduled 'stop' time", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.toDestination();
				player
					.start(0, 0, 0.05)
					.start(0.1, 0, 0.05)
					.start(0.2, 0, 0.05);
				player.stop(0.1);
			}, 0.3).then((buff) => {
				expect(buff.getTimeOfLastSound()).to.be.closeTo(0.1, 0.02);
			});
		});

		it("can retrigger multiple sources which all stop at the stop time", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.toDestination();
				player.loop = true;
				player.start(0).start(0.1).start(0.2).stop(0.25);
			}, 0.4).then((buff) => {
				expect(buff.getTimeOfLastSound()).to.be.closeTo(0.25, 0.02);
			});
		});

		it("can be play for a specific duration passed in the 'start' method", () => {
			return Offline(() => {
				const player = new Player(buffer);
				player.toDestination();
				player.start(0, 0, 0.1);
				return (time) => {
					whenBetween(time, 0.1, Infinity, () => {
						expect(player.state).to.equal("stopped");
					});
					whenBetween(time, 0, 0.1, () => {
						expect(player.state).to.equal("started");
					});
				};
			}, 0.3).then((buff) => {
				expect(buff.getTimeOfLastSound()).to.be.closeTo(0.1, 0.02);
			});
		});

		it("reports itself as stopped after a single iterations of the buffer", () => {
			return Offline(() => {
				const player = new Player(buffer).toDestination();
				player.start();

				return (time) => {
					whenBetween(time, buffer.duration, Infinity, () => {
						expect(player.state).to.equal("stopped");
					});
					whenBetween(time, 0, buffer.duration, () => {
						expect(player.state).to.equal("started");
					});
				};
			}, buffer.duration * 1.1);
		});

		it("plays synced to the Transport", () => {
			return Offline(({ transport }) => {
				const player = new Player(buffer)
					.sync()
					.start(0)
					.toDestination();
				transport.start(0);
			}, 0.05).then((buff) => {
				expect(buff.isSilent()).to.be.false;
			});
		});

		it("does not play twice when the offset is very small", () => {
			// addresses #999 and #944
			return CompareToFile(
				() => {
					const player = new Player(buffer).toDestination();
					player.sync().start(0);
					getContext().transport.bpm.value = 125;
					getContext().transport.setLoopPoints(0, "1:0:0");
					getContext().transport.loop = true;
					getContext().transport.start(0);
				},
				"playerSyncLoop.wav",
				0.01
			);
		});

		it("offsets correctly when started by the Transport", () => {
			const testSample =
				buffer.toArray(0)[
					Math.floor(0.13125 * getContext().sampleRate)
				];
			return Offline(({ transport }) => {
				const player = new Player(buffer)
					.sync()
					.start(0, 0.1)
					.toDestination();
				transport.start(0, 0.03125);
			}, 0.05).then((buff) => {
				expect(buff.toArray()[0][0]).to.equal(testSample);
			});
		});

		it("starts at the correct position when Transport is offset and playbackRate is not 1", () => {
			return Offline(({ transport }) => {
				// make a ramp between 0-1
				const ramp = new Float32Array(
					Math.floor(getContext().sampleRate * 0.3)
				);
				for (let i = 0; i < ramp.length; i++) {
					ramp[i] = i / ramp.length;
				}
				const buff = ToneAudioBuffer.fromArray(ramp);
				const player = new Player(buff).toDestination();
				player.playbackRate = 0.5;
				player.sync().start(0);
				// start halfway through
				transport.start(0, 0.15);
			}, 0.05).then((buff) => {
				expect(buff.getValueAtTime(0)).to.be.closeTo(0.5, 0.05);
			});
		});

		it("starts with an offset when synced and started after Transport is running", () => {
			return Offline(({ transport }) => {
				const ramp = new Float32Array(
					Math.floor(getContext().sampleRate * 0.3)
				);
				for (let i = 0; i < ramp.length; i++) {
					ramp[i] = (i / ramp.length) * 0.3;
				}
				const buff = new ToneAudioBuffer().fromArray(ramp);
				const player = new Player(buff).toDestination();
				transport.start(0);
				return atTime(0.1, () => {
					player.sync().start(0);
				});
			}, 0.3).then((buff) => {
				expect(buff.getValueAtTime(0)).to.equal(0);
				expect(buff.getValueAtTime(0.05)).to.equal(0);
				expect(buff.getValueAtTime(0.11)).to.be.closeTo(0.11, 0.01);
				expect(buff.getValueAtTime(0.2)).to.be.closeTo(0.2, 0.01);
			});
		});

		it("can pass in an offset when synced and started after Transport is running", () => {
			return Offline(({ transport }) => {
				const ramp = new Float32Array(
					Math.floor(getContext().sampleRate * 0.3)
				);
				for (let i = 0; i < ramp.length; i++) {
					ramp[i] = (i / ramp.length) * 0.3;
				}
				const buff = new ToneAudioBuffer().fromArray(ramp);
				const player = new Player(buff).toDestination();
				player.loop = true;
				transport.start(0);
				return atTime(0.1, () => {
					player.sync().start(0, 0.1);
				});
			}, 0.3).then((buff) => {
				expect(buff.getValueAtTime(0)).to.equal(0);
				expect(buff.getValueAtTime(0.05)).to.equal(0);
				expect(buff.getValueAtTime(0.11)).to.be.closeTo(0.21, 0.01);
				expect(buff.getValueAtTime(0.15)).to.be.closeTo(0.25, 0.01);
				expect(buff.getValueAtTime(0.2)).to.be.closeTo(0.0, 0.01);
				expect(buff.getValueAtTime(0.25)).to.be.closeTo(0.05, 0.01);
			});
		});

		it("fades in and out correctly", () => {
			let duration = 0.5;
			return Offline(() => {
				const onesArray = new Float32Array(
					getContext().sampleRate * duration
				);
				onesArray.forEach((sample, index) => {
					onesArray[index] = 1;
				});
				const onesBuffer = ToneAudioBuffer.fromArray(onesArray);
				const player = new Player({
					url: onesBuffer,
					fadeOut: 0.1,
					fadeIn: 0.1,
				}).toDestination();
				player.start(0);
			}, 0.6).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.closeTo(0, 0.1);
				expect(buff.getRmsAtTime(0.05)).to.be.closeTo(0.5, 0.1);
				expect(buff.getRmsAtTime(0.1)).to.be.closeTo(1, 0.1);
				duration -= 0.1;
				expect(buff.getRmsAtTime(duration)).to.be.closeTo(1, 0.1);
				expect(buff.getRmsAtTime(duration + 0.05)).to.be.closeTo(
					0.5,
					0.1
				);
				expect(buff.getRmsAtTime(duration + 0.1)).to.be.closeTo(0, 0.1);
			});
		});

		it("stops only last activeSource when restarting at intervals < latencyHint", (done) => {
			const originalLookAhead = getContext().lookAhead;
			getContext().lookAhead = 0.3;
			const player = new Player({
				onload(): void {
					player.start(undefined, undefined, 1);
					setTimeout(
						() => player.restart(undefined, undefined, 1),
						50
					);
					setTimeout(
						() => player.restart(undefined, undefined, 1),
						100
					);
					setTimeout(
						() => player.restart(undefined, undefined, 1),
						150
					);
					setTimeout(() => {
						player.restart(undefined, undefined, 1);
						const checkStopTimes = new Set();
						// @ts-ignore
						player._activeSources.forEach((source) => {
							// @ts-ignore
							checkStopTimes.add(source._stopTime);
						});
						getContext().lookAhead = originalLookAhead;
						// ensure each source has a different stopTime
						expect(checkStopTimes.size).to.equal(
							// @ts-ignore
							player._activeSources.size
						);
						done();
					}, 250);
				},
				url: "./test/audio/sine.wav",
			});
		});
	});
});
