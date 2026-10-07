import { BasicTests } from "../../../test/helper/Basic.js";
import { GrainPlayer } from "./GrainPlayer.js";
import { Offline, whenBetween } from "../../../test/helper/Offline.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { expect } from "chai";

describe("GrainPlayer", () => {
	const buffer = new ToneAudioBuffer();

	beforeEach(() => {
		return buffer.load("./test/audio/sine.wav");
	});

	// run the common tests
	BasicTests(GrainPlayer, buffer);
	SourceTests(GrainPlayer, buffer);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const player = new GrainPlayer(buffer).toDestination();
				player.start(0.1).stop(0.2);
				(player.detune = -100), (player.playbackRate = 2);
			},
			"grainPlayer.wav",
			0.16
		);
	});

	it("matches another file", () => {
		return CompareToFile(
			() => {
				const player = new GrainPlayer(buffer).toDestination();
				player.start(0.1, 0.2);
				player.loop = true;
				player.overlap = 0.005;
				player.grainSize = 0.05;
				(player.detune = 1200), (player.playbackRate = 0.5);
			},
			"grainPlayer2.wav",
			0.2
		);
	});

	context("Constructor", () => {
		it("can be constructed with a Tone.Buffer", (done) => {
			const player = new GrainPlayer(buffer);
			expect(player.buffer.get()).to.equal(buffer.get());
			player.dispose();
			done();
		});

		it("can be constructed with an AudioBuffer", (done) => {
			const player = new GrainPlayer(buffer.get());
			expect(player.buffer.get()).to.equal(buffer.get());
			player.dispose();
			done();
		});

		it("makes a sound", () => {
			return Offline(() => {
				const player = new GrainPlayer(buffer).toDestination();
				player.start();
			}).then((output) => {
				expect(output.isSilent()).to.be.false;
			});
		});
	});

	context("Loading", () => {
		it("loads a url which was passed in", (done) => {
			const player = new GrainPlayer("./test/audio/sine.wav", () => {
				expect(player.loaded).to.be.true;
				player.dispose();
				done();
			});
		});

		it("can be created with an options object", (done) => {
			const player = new GrainPlayer({
				url: "./test/audio/sine.wav",
				loop: true,
				onload: function () {
					expect(player.loop).to.be.true;
					player.dispose();
					done();
				},
			});
		});

		it("invokes onerror if no url", (done) => {
			const source = new GrainPlayer({
				url: "./nosuchfile.wav",
				onerror() {
					source.dispose();
					done();
				},
			});
		});
	});

	context("Looping", () => {
		beforeEach(() => {
			buffer.load("./test/audio/short_sine.wav");
		});

		it("can be set to loop", () => {
			const player = new GrainPlayer();
			player.loop = true;
			expect(player.loop).to.be.true;
			player.dispose();
		});
	});

	context("start/stop", () => {
		beforeEach(() => {
			buffer.load("./test/audio/short_sine.wav");
		});

		it("can be play for a specific duration", () => {
			return Offline(() => {
				const player = new GrainPlayer(buffer);
				player.toDestination();
				player.start(0).stop(0.1);
				return function (time) {
					whenBetween(time, 0.1, Infinity, () => {
						expect(player.state).to.equal("stopped");
					});
					whenBetween(time, 0, 0.1, () => {
						expect(player.state).to.equal("started");
					});
				};
			}, 0.3).then((output) => {
				expect(output.getTimeOfLastSound()).to.be.closeTo(0.1, 0.02);
			});
		});

		it("can be play for a specific duration passed in the 'start' method", () => {
			return Offline(() => {
				const player = new GrainPlayer(buffer);
				player.toDestination();
				player.start(0, 0, 0.1);
				return function (time) {
					whenBetween(time, 0.1, Infinity, () => {
						expect(player.state).to.equal("stopped");
					});
					whenBetween(time, 0, 0.1, () => {
						expect(player.state).to.equal("started");
					});
				};
			}, 0.3).then((output) => {
				expect(output.getTimeOfLastSound()).to.be.closeTo(0.1, 0.02);
			});
		});

		it("invokes the onstop method on restart", () => {
			let wasInvoked = 0;
			return Offline(() => {
				const player = new GrainPlayer(buffer);
				player.start(0).restart(0.1).stop(0.2);
				player.onstop = () => {
					wasInvoked++;
				};
			}, 0.3).then(() => {
				expect(wasInvoked).to.equal(2);
			});
		});

		it("can play to the end of the file", () => {
			const bufferDuration = buffer.duration;
			return Offline(() => {
				const player = new GrainPlayer(buffer).toDestination();
				player.grainSize = 0.1;
				player.start(0);
			}, bufferDuration * 1.2).then((output) => {
				expect(output.getTimeOfLastSound()).to.be.closeTo(
					bufferDuration,
					0.1
				);
			});
		});

		it("plays for the right time when playbackRate = 2", () => {
			const bufferDuration = buffer.duration;
			return Offline(() => {
				const player = new GrainPlayer(buffer).toDestination();
				player.playbackRate = 2;
				player.start(0);
			}, bufferDuration).then((output) => {
				expect(output.getTimeOfLastSound()).to.be.closeTo(
					bufferDuration * 0.5,
					0.1
				);
			});
		});
	});

	context("Get/Set", () => {
		it("can be set with an options object", () => {
			const player = new GrainPlayer();
			expect(player.loop).to.be.false;
			player.set({
				loop: true,
				loopStart: 0.4,
			});
			expect(player.loop).to.be.true;
			expect(player.loopStart).to.equal(0.4);
			player.dispose();
		});

		it("can get an options object", () => {
			const player = new GrainPlayer({
				url: "./test/audio/sine.wav",
				loopStart: 0.2,
				loopEnd: 0.3,
				loop: true,
				reverse: true,
			});
			expect(player.get().loopStart).to.equal(0.2);
			expect(player.get().loopEnd).to.equal(0.3);
			expect(player.get().loop).to.be.true;
			expect(player.get().reverse).to.be.true;
			player.dispose();
		});

		it("can get/set the playbackRate", () => {
			const player = new GrainPlayer();
			player.playbackRate = 0.5;
			expect(player.playbackRate).to.equal(0.5);
			player.dispose();
		});
	});
});
