import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { OutputAudio } from "../../../test/helper/OutputAudio.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { getContext } from "../../core/Global.js";
import { Player } from "./Player.js";
import { Players } from "./Players.js";

describe("Players", () => {
	const buffer = new ToneAudioBuffer();

	beforeEach(() => {
		return buffer.load("./test/audio/sine.wav");
	});

	BasicTests(Players, { test: buffer });

	context("Constructor", () => {
		it("can be constructed with an object containing a ToneAudioBuffer", () => {
			const players = new Players({
				test: buffer,
			});
			expect(players.player("test").buffer.get()).to.equal(buffer.get());
			players.dispose();
		});

		it("can be constructed with an AudioBuffer", () => {
			const players = new Players({
				test: buffer.get() as AudioBuffer,
			});
			expect(players.player("test").buffer.get()).to.equal(buffer.get());
			players.dispose();
		});

		it("can be constructed with a url", (done) => {
			const players = new Players(
				{
					test0: "./test/audio/sine.wav",
					test1: "./test/audio/sine.wav",
				},
				() => {
					expect(players.player("test0")).to.be.instanceOf(Player);
					expect(players.player("test0").buffer.loaded).to.be.true;
					expect(players.player("test1")).to.be.instanceOf(Player);
					expect(players.player("test1").buffer.loaded).to.be.true;
					expect(players.loaded).to.be.true;
					players.dispose();
					done();
				}
			);
		});

		it("can pass in additional args in the second parameters", (done) => {
			const players = new Players(
				{
					test: "./test/audio/sine.wav",
				},
				{
					onload: () => {
						expect(players.player("test").buffer.loaded).to.be.true;
						expect(players.volume.value).to.be.closeTo(-12, 0.1);
						players.dispose();
						done();
					},
					volume: -12,
				}
			);
		});

		it("invokes onerror if no url", (done) => {
			const source = new Players({
				urls: {
					test: "./nosuchfile.wav",
				},
				onerror() {
					source.dispose();
					done();
				},
			});
		});

		it("can get and set fadeIn/Out", () => {
			const players = new Players(
				{
					test: "./test/audio/sine.wav",
				},
				{
					fadeIn: 0.1,
					fadeOut: 0.2,
				}
			);
			expect(players.fadeIn).to.equal(0.1);
			expect(players.fadeOut).to.equal(0.2);
			expect(players.player("test").fadeIn).to.equal(0.1);
			players.fadeIn = 0.2;
			players.fadeOut = 0.3;
			expect(players.fadeIn).to.equal(0.2);
			expect(players.fadeOut).to.equal(0.3);
			expect(players.player("test").fadeOut).to.equal(0.3);
			players.dispose();
		});
	});

	context("get/has/add buffers", () => {
		it("says it 'has' a sample", () => {
			const players = new Players({
				test: buffer,
			});
			expect(players.has("test")).to.be.true;
			expect(players.has("nope")).to.be.false;
			players.dispose();
		});

		it("can get a sample", () => {
			const players = new Players({
				test: buffer,
			});
			expect(players.player("test")).to.be.instanceOf(Player);
			players.dispose();
		});

		it("throws an error if it tries to get a sample which is not there", () => {
			const players = new Players({
				test: buffer,
			});
			expect(() => {
				players.player("nope");
			}).to.throw(Error);
			players.dispose();
		});

		it("can add a player with a buffer", () => {
			const players = new Players();
			expect(players.has("test")).to.be.false;
			players.add("test", buffer);
			expect(players.has("test")).to.be.true;
			players.dispose();
		});

		it("can add a player with a url", (done) => {
			const players = new Players();
			expect(players.has("test")).to.be.false;
			players.add("test", "./test/audio/sine.wav", () => {
				expect(players.has("test")).to.be.true;
				players.dispose();
				done();
			});
		});

		it("can add a player with an unloaded ToneAudioBuffer", (done) => {
			const players = new Players();
			const buffer2 = new ToneAudioBuffer("./test/audio/sine.wav");
			players.add("test", buffer2, () => {
				expect(players.has("test")).to.be.true;
				expect(players.player("test").loaded).to.be.true;
				players.dispose();
				done();
			});
		});
	});

	context("start/stop players", () => {
		it("makes a sound", () => {
			return OutputAudio(() => {
				const players = new Players({
					test: buffer,
				}).toDestination();
				players.player("test").start(0);
			});
		});

		it("can be muted", () => {
			return Offline(() => {
				const players = new Players({
					test: buffer,
				}).toDestination();
				players.player("test").start(0);
				players.mute = true;
				expect(players.mute).to.be.true;
			}, 0.3).then((buffer2) => {
				expect(buffer2.isSilent()).to.be.true;
			});
		});

		it("be scheduled to start in the future", () => {
			return Offline(() => {
				const players = new Players({
					test: buffer,
				}).toDestination();
				players.player("test").start(0.1);
			}, 0.3).then((buffer2) => {
				buffer2.forEach((sample, time) => {
					if (sample > 0) {
						expect(time).to.be.at.least(0.099);
					}
				});
			});
		});

		it("be scheduled to stop in the future", () => {
			return Offline(() => {
				const players = new Players({
					test: buffer,
				}).toDestination();
				players.player("test").start(0).stop(0.2);
			}, 0.3).then((buffer2) => {
				buffer2.forEach((sample, time) => {
					if (time > 0.2) {
						expect(sample).to.equal(0);
					}
				});
			});
		});

		it("if any of the players are playing, reports state as 'started'", () => {
			return Offline(() => {
				const players = new Players({
					test0: buffer,
					test1: buffer,
				}).toDestination();
				players.player("test0").start(0).stop(0.05);
				players.player("test1").start(0).stop(0.1);
				return (time) => {
					if (time <= 0.1) {
						expect(players.state).to.equal("started");
					} else {
						expect(players.state).to.equal("stopped");
					}
				};
			}, 0.2);
		});

		it("can start multiple samples", () => {
			return OutputAudio(() => {
				const players = new Players({
					test0: buffer,
					test1: buffer,
				}).toDestination();
				players.player("test0").start(0).stop(0.01);
				players.player("test1").start(0);
			});
		});

		it("can stop all of the samples in the future", () => {
			return Offline(() => {
				const players = new Players({
					test0: buffer,
					test1: buffer,
				}).toDestination();
				players.player("test0").start(0);
				players.player("test1").start(0);
				players.stopAll(0.2);
			}, 0.3).then((buffer2) => {
				buffer2.forEach((sample, time) => {
					if (time > 0.2) {
						expect(sample).to.equal(0);
					}
				});
			});
		});

		it("fades in and out correctly", () => {
			return Offline(() => {
				const onesArray = new Float32Array(
					getContext().sampleRate * 0.5
				);
				onesArray.forEach((sample, index) => {
					onesArray[index] = 1;
				});
				const onesBuffer = ToneAudioBuffer.fromArray(onesArray);
				const players = new Players(
					{
						test: onesBuffer,
					},
					{
						fadeIn: 0.1,
						fadeOut: 0.1,
					}
				).toDestination();
				players.player("test").start(0);
			}, 0.6).then((buffer2) => {
				buffer2.forEach((sample, time) => {
					if (time < 0.1) {
						expect(sample).to.be.within(0, 1);
					} else if (time < 0.4) {
						expect(sample).to.equal(1);
					} else if (time < 0.5) {
						expect(sample).to.be.within(0, 1);
					} else {
						expect(sample).to.equal(0);
					}
				});
			});
		});
	});
});
