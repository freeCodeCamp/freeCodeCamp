import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { Offline } from "../../../test/helper/Offline.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { getContext } from "../../core/Global.js";
import { ToneBufferSource } from "./ToneBufferSource.js";

const sampleRate = getContext().sampleRate;

describe("ToneBufferSource", () => {
	const buffer = new ToneAudioBuffer();

	const ones = new Float32Array(sampleRate * 0.5);
	ones.forEach((sample, index) => (ones[index] = 1));
	const onesBuffer = ToneAudioBuffer.fromArray(ones);

	beforeEach(() => {
		return buffer.load("./test/audio/sine.wav");
	});

	// run the common tests
	BasicTests(ToneBufferSource, buffer);

	it("matches a file", () => {
		return CompareToFile(() => {
			const source = new ToneBufferSource(buffer).toDestination();
			source.start(0).stop(0.2);
		}, "bufferSource.wav");
	});

	context("Constructor", () => {
		it("can be constructed with a Tone.Buffer", () => {
			const source = new ToneBufferSource(buffer);
			expect(source.buffer.get()).to.equal(buffer.get());
			source.dispose();
		});

		it("can be constructed with an AudioBuffer", () => {
			const source = new ToneBufferSource(buffer.get());
			expect(source.buffer.get()).to.equal(buffer.get());
			source.dispose();
		});

		it("can be created with an options object", () => {
			const source = new ToneBufferSource({
				url: buffer,
				loop: true,
				loopEnd: 0.2,
				loopStart: 0.1,
				playbackRate: 0.5,
			});
			expect(source.loop).to.equal(true);
			expect(source.loopEnd).to.equal(0.2);
			expect(source.loopStart).to.equal(0.1);
			expect(source.playbackRate.value).to.equal(0.5);
			source.dispose();
		});

		it("can be constructed with no arguments", () => {
			const source = new ToneBufferSource();
			source.dispose();
		});

		it("can set the buffer after construction", () => {
			const source = new ToneBufferSource();
			expect(source.buffer.loaded).is.equal(false);
			source.buffer = buffer;
			expect(source.buffer.loaded).is.equal(true);
			source.dispose();
		});

		it("can be constructed with a url and onload", (done) => {
			const source = new ToneBufferSource(
				"./test/audio/short_sine.wav",
				() => {
					expect(source.buffer.loaded).is.equal(true);
					source.dispose();
					done();
				}
			);
		});

		it("invokes onerror if no url", (done) => {
			const source = new ToneBufferSource({
				url: "./nosuchfile.wav",
				onerror() {
					source.dispose();
					done();
				},
			});
		});

		it("won't start or stop if there is no buffer", () => {
			const source = new ToneBufferSource();
			expect(() => {
				source.start();
			}).to.throw(Error);
			expect(() => {
				source.stop();
			}).to.throw(Error);
			source.dispose();
		});
	});

	context("Looping", () => {
		beforeEach(() => {
			return buffer.load("./test/audio/short_sine.wav");
		});

		it("can be set to loop", () => {
			const player = new ToneBufferSource();
			player.loop = true;
			expect(player.loop).is.equal(true);
			player.dispose();
		});

		it("loops the audio", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.loop = true;
				player.toDestination();
				player.start(0);
			}, buffer.duration * 2).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 0.5)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 1.5)).to.be.above(0);
			});
		});

		it("loops the audio when loop is set after 'start'", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.start(0);
				player.loop = true;
				player.toDestination();
			}, buffer.duration * 2).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 0.5)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 1.5)).to.be.above(0);
			});
		});

		it("unloops the audio when loop is set after 'start'", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.loop = true;
				player.start(0);
				player.loop = false;
				player.toDestination();
			}, buffer.duration * 2).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration * 0.5)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.closeTo(
					0,
					0.001
				);
				expect(buff.getRmsAtTime(buffer.duration * 1.5)).to.be.closeTo(
					0,
					0.001
				);
			});
		});

		it("loops the audio for the specific duration", () => {
			const playDur = buffer.duration * 1.5;
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.loop = true;
				player.toDestination();
				player.start(0, 0, playDur);
			}, buffer.duration * 2).then((buff) => {
				expect(buff.getRmsAtTime(0)).to.be.above(0);
				expect(buff.getRmsAtTime(buffer.duration)).to.be.above(0);
				expect(buff.getRmsAtTime(playDur - 0.01)).to.be.above(0);
				expect(buff.getRmsAtTime(playDur + 0.01)).to.equal(0);
			});
		});

		it("starts at the loop start offset if looping", () => {
			const offsetTime = 0.05;
			const offsetSample =
				buffer.toArray()[Math.floor(offsetTime * sampleRate)];
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.loop = true;
				player.loopStart = offsetTime;
				player.start(0);
			}, 0.1).then((buff) => {
				expect(buff.getValueAtTime(0)).to.equal(offsetSample);
			});
		});

		it("the offset is modulo the loopDuration", () => {
			const testSample = buffer.toArray()[
				Math.floor(0.051 * sampleRate)
			] as number;
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.loop = true;
				player.loopStart = 0;
				player.loopEnd = 0.1;
				player.start(0, 0.351);
			}, 0.1).then((buff) => {
				expect(buff.getValueAtTime(0)).to.be.closeTo(testSample, 1e-4);
			});
		});
	});

	context("Get/Set", () => {
		it("can be set with an options object", () => {
			const player = new ToneBufferSource();
			expect(player.loop).is.equal(false);
			player.set({
				loop: true,
				loopEnd: 0.5,
				loopStart: 0.4,
			});
			expect(player.loop).is.equal(true);
			expect(player.loopStart).to.equal(0.4);
			expect(player.loopEnd).to.equal(0.5);
			player.dispose();
		});

		it("can get/set the playbackRate", () => {
			const player = new ToneBufferSource();
			player.playbackRate.value = 0.5;
			expect(player.playbackRate.value).to.equal(0.5);
			player.dispose();
		});
	});

	context("onended", () => {
		beforeEach(() => {
			return buffer.load("./test/audio/sine.wav");
		});

		it.skip("schedules the onended callback in online context", (done) => {
			const player = new ToneBufferSource(buffer);
			player.start().stop("+0.1");
			player.onended = () => {
				expect(player.state).to.equal("stopped");
				player.dispose();
				done();
			};
		});

		it("schedules the onended callback when offline", () => {
			let wasInvoked = false;
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0.2).stop(0.4);
				player.onended = () => (wasInvoked = true);
			}, 0.5).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});

		it("invokes the onended callback when a looped buffer is scheduled to stop", () => {
			let wasInvoked = false;
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.loop = true;
				player.start().stop(0.4);
				player.onended = () => {
					wasInvoked = true;
				};
			}, 0.5).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});

		it("schedules the onended callback when the buffer is done without scheduling stop", () => {
			let wasInvoked = false;
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0);
				player.onended = () => {
					wasInvoked = true;
				};
			}, buffer.duration * 1.1).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});
	});

	context("state", () => {
		beforeEach(() => {
			return buffer.load("./test/audio/sine.wav");
		});

		it("reports the right state when scheduled to stop", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0.2).stop(0.4);

				return (time) => {
					if (time >= 0.2 && time < 0.4) {
						expect(player.state).to.equal("started");
					} else {
						expect(player.state).to.equal("stopped");
					}
				};
			}, 0.5);
		});

		it("reports the right state when duration is passed into start method", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0, 0, 0.1);

				return (time) => {
					if (time >= 0 && time < 0.1) {
						expect(player.state).to.equal("started");
					} else {
						expect(player.state).to.equal("stopped");
					}
				};
			}, 0.2);
		});
	});

	context("Start/Stop Scheduling", () => {
		beforeEach(() => {
			return buffer.load("./test/audio/sine.wav");
		});

		it("can play for a specific duration", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0).stop(0.1);

				return (time) => {
					if (time > 0.1) {
						expect(player.state).to.equal("stopped");
					}
				};
			}, 0.4).then((rms) => {
				expect(rms.getRmsAtTime(0)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.09)).to.be.gt(0);
				// after stop is scheduled
				expect(rms.getRmsAtTime(0.11)).to.equal(0);
				expect(rms.getRmsAtTime(0.3)).to.equal(0);
			});
		});

		it("can be scheduled to stop", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0).stop(0.1);
			}, 0.6).then((rms) => {
				expect(rms.getRmsAtTime(0.01)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.08)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.11)).to.equal(0);
			});
		});

		it("plays correctly when playbackRate is < 1", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0);
				player.playbackRate.value = 0.75;
			}, buffer.duration * 1.3).then((rms) => {
				expect(rms.getRmsAtTime(0.01)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.1)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.2)).to.be.gt(0);
				expect(rms.getRmsAtTime(buffer.duration)).to.be.gt(0);
			});
		});

		it("plays correctly when playbackRate is > 1", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0);
				player.playbackRate.value = 2;
			}, buffer.duration).then((rms) => {
				expect(rms.getRmsAtTime(0.03)).to.be.gt(0);
				expect(rms.getRmsAtTime(buffer.duration * 0.45)).to.be.gt(0);
				expect(rms.getRmsAtTime(buffer.duration * 0.5)).to.closeTo(
					0,
					0.01
				);
				expect(rms.getRmsAtTime(buffer.duration * 0.7)).to.closeTo(
					0,
					0.01
				);
			});
		});

		it("can play for a specific duration passed in the 'start' method", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0, 0, 0.1);

				return (time) => {
					if (time > 0.1) {
						expect(player.state).to.equal("stopped");
					}
				};
			}, 0.4).then((rms) => {
				expect(rms.getRmsAtTime(0)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.09)).to.be.gt(0);
				// after stop is scheduled
				expect(rms.getRmsAtTime(0.11)).to.equal(0);
				expect(rms.getRmsAtTime(0.3)).to.equal(0);
			});
		});

		it("can start at an offset", () => {
			const offsetTime = 0.1;
			const offsetSample =
				buffer.toArray()[Math.floor(offsetTime * sampleRate)];
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0, offsetTime);
			}, 0.05).then((buff) => {
				expect(buff.getValueAtTime(0)).to.equal(offsetSample);
			});
		});

		it("can end start ramp early", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.fadeIn = 0.2;
				player.toDestination();
				player.start(0).stop(0.1);
			}, 0.2).then((rms) => {
				expect(rms.getRmsAtTime(0.0)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.05)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.09)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.1)).to.equal(0);
				expect(rms.getRmsAtTime(0.15)).to.equal(0);
			});
		});

		it("can end start ramp with a ramp", () => {
			return Offline(() => {
				const player = new ToneBufferSource(onesBuffer);
				player.fadeIn = 0.2;
				player.fadeOut = 0.1;
				player.loop = true;
				player.toDestination();
				player.start(0).stop(0.1);
			}, 0.3).then((buff) => {
				// fade in
				expect(buff.getRmsAtTime(0.01)).to.be.gt(0);
				expect(buff.getRmsAtTime(0.05)).to.be.gt(0);
				// fade out
				expect(buff.getRmsAtTime(0.1)).to.be.gt(0);
				expect(buff.getRmsAtTime(0.15)).to.be.gt(0);
				expect(buff.getRmsAtTime(0.19)).to.be.gt(0);
				// end of ramp
				expect(buff.getRmsAtTime(0.21)).to.equal(0);
			});
		});

		it("can be scheduled to stop with a ramp", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.fadeOut = 0.05;
				player.start(0).stop(0.1);
			}, 0.6).then((rms) => {
				expect(rms.getRmsAtTime(0.01)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.05)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.08)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.1)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.14)).to.be.gt(0);
				expect(rms.getRmsAtTime(0.16)).to.equal(0);
				expect(rms.getRmsAtTime(0.2)).to.equal(0);
				expect(rms.getRmsAtTime(0.3)).to.equal(0);
				expect(rms.getRmsAtTime(0.4)).to.equal(0);
				expect(rms.getRmsAtTime(0.5)).to.equal(0);
			});
		});

		it("fade is applied after the stop time", () => {
			return Offline(() => {
				const player = new ToneBufferSource(onesBuffer).toDestination();
				player.fadeOut = 0.1;
				player.start(0).stop(0.2);
			}, 0.32).then((buff) => {
				expect(buff.getValueAtTime(0)).to.equal(1);
				expect(buff.getValueAtTime(0.1)).to.equal(1);
				expect(buff.getValueAtTime(0.2)).to.equal(1);
				expect(buff.getValueAtTime(0.25)).to.be.closeTo(0.5, 0.01);
				expect(buff.getValueAtTime(0.29)).to.be.closeTo(0.1, 0.01);
				expect(buff.getValueAtTime(0.3)).to.be.closeTo(0, 0.01);
				expect(buff.getValueAtTime(0.31)).to.equal(0);
			});
		});

		it("can fade with an exponential curve", () => {
			const player = new ToneBufferSource(onesBuffer).toDestination();
			player.curve = "exponential";
			expect(player.curve).to.equal("exponential");
			player.dispose();
		});

		it("fades in and out exponentially", () => {
			return Offline(() => {
				const player = new ToneBufferSource(onesBuffer).toDestination();
				player.curve = "exponential";
				player.fadeIn = 0.1;
				player.fadeOut = 0.1;
				player.start(0).stop(0.4);
			}, 0.51).then((buff) => {
				expect(buff.getValueAtTime(0)).to.equal(0);
				expect(buff.getValueAtTime(0.05)).to.be.closeTo(0.93, 0.01);
				expect(buff.getValueAtTime(0.1)).to.be.closeTo(1, 0.01);
				expect(buff.getValueAtTime(0.4)).to.be.closeTo(1, 0.01);
				expect(buff.getValueAtTime(0.45)).to.be.closeTo(0.06, 0.01);
				expect(buff.getValueAtTime(0.5)).to.closeTo(0, 0.01);
			});
		});

		it("can be scheduled to start at a lower gain", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer).toDestination();
				player.start(0, 0, undefined, 0.5);
			}, 0.5).then((buff) => {
				expect(buff.getValueAtTime(0)).to.be.lte(0.5);
				expect(buff.getValueAtTime(0.1)).to.be.lte(0.5);
				expect(buff.getValueAtTime(0.2)).to.be.lte(0.5);
				expect(buff.getValueAtTime(0.3)).to.be.lte(0.5);
				expect(buff.getValueAtTime(0.4)).to.be.lte(0.5);
			});
		});

		it("cannot be started more than once", () => {
			const player = new ToneBufferSource(buffer);
			player.start();
			expect(() => {
				player.start();
			}).to.throw(Error);
			player.dispose();
		});

		it("stops playing if invoked with 'stop' at a sooner time", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.toDestination();
				player.start(0).stop(0.1).stop(0.05);
			}, 0.3).then((buff) => {
				expect(buff.getTimeOfLastSound()).to.be.closeTo(0.05, 0.02);
			});
		});

		it("does not play if the stop time is at the start time", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.toDestination();
				player.start(0).stop(0);
			}, 0.3).then((buff) => {
				expect(buff.isSilent()).is.equal(true);
			});
		});

		it("does not play if the stop time is at before start time", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.toDestination();
				player.start(0.1).stop(0);
			}, 0.3).then((buff) => {
				expect(buff.isSilent()).is.equal(true);
			});
		});

		it("stops playing at the last scheduled stop time", () => {
			return Offline(() => {
				const player = new ToneBufferSource(buffer);
				player.toDestination();
				player.start(0).stop(0.1).stop(0.2);
			}, 0.3).then((buff) => {
				expect(buff.getTimeOfLastSound()).to.be.closeTo(0.2, 0.02);
			});
		});
	});
});
