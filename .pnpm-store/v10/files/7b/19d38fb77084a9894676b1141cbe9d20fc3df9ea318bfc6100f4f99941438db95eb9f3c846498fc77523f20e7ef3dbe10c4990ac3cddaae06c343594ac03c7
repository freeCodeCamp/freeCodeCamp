import { expect } from "chai";
import { getContext } from "../Global.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";

const testFile = "./test/audio/sine.wav";

describe("ToneAudioBuffer", () => {
	context("basic", () => {
		it("can be created and disposed", () => {
			const buff = new ToneAudioBuffer(testFile);
			buff.dispose();
		});

		it("loads a file from a url string", (done) => {
			const buffer = new ToneAudioBuffer(testFile, (buff) => {
				expect(buff).to.be.instanceof(ToneAudioBuffer);
				buffer.dispose();
				done();
			});
		});

		it("has a duration", (done) => {
			const buffer = new ToneAudioBuffer(testFile, () => {
				expect(buffer.duration).to.be.closeTo(3, 0.01);
				buffer.dispose();
				done();
			});
		});

		it("can be constructed with no arguments", () => {
			const buffer = new ToneAudioBuffer();
			expect(buffer.length).to.equal(0);
			expect(buffer.duration).to.equal(0);
			expect(buffer.numberOfChannels).to.equal(0);
			buffer.dispose();
		});

		it("can get the number of channels", (done) => {
			const buffer = new ToneAudioBuffer(testFile, () => {
				expect(buffer.numberOfChannels).to.be.equal(1);
				buffer.dispose();
				done();
			});
		});

		it("can get the length of the buffer", (done) => {
			const buffer = new ToneAudioBuffer(testFile, () => {
				expect(buffer.length).to.be.a("number");
				expect(buffer.length).to.be.above(130000);
				buffer.dispose();
				done();
			});
		});

		it("can be constructed with an options object", (done) => {
			const buffer = new ToneAudioBuffer({
				onload: () => {
					buffer.dispose();
					done();
				},
				reverse: true,
				url: testFile,
			});
			expect(buffer.reverse).to.equal(true);
		});

		it("takes an AudioBuffer in the constructor method", async () => {
			const audioBuffer = await ToneAudioBuffer.load(testFile);
			const buffer = new ToneAudioBuffer({
				url: audioBuffer,
			});
			const testOne = new ToneAudioBuffer(buffer.get());
			expect(testOne.get()).to.equal(buffer.get());
			testOne.dispose();
			buffer.dispose();
		});

		it("takes a loaded ToneAudioBuffer in the constructor method", async () => {
			const audioBuffer = await ToneAudioBuffer.fromUrl(testFile);
			const buffer = new ToneAudioBuffer({
				url: audioBuffer,
			});
			const testOne = new ToneAudioBuffer(buffer);
			expect(testOne.get()).to.equal(buffer.get());
			testOne.dispose();
			buffer.dispose();
		});

		it("takes an unloaded Tone.ToneAudioBuffer in the constructor method", (done) => {
			const unloadedToneAudioBuffer = new ToneAudioBuffer(testFile);
			const buffer = new ToneAudioBuffer({
				onload(): void {
					const testOne = new ToneAudioBuffer(buffer);
					expect(unloadedToneAudioBuffer.get()).to.equal(
						buffer.get()
					);
					unloadedToneAudioBuffer.dispose();
					buffer.dispose();
					done();
				},
				url: unloadedToneAudioBuffer,
			});
		});

		it("takes Tone.ToneAudioBuffer in the set method", (done) => {
			const buffer = new ToneAudioBuffer({
				url: testFile,
				onload(): void {
					const testOne = new ToneAudioBuffer(testFile);
					testOne.set(buffer);
					expect(testOne.get()).to.equal(buffer.get());
					testOne.dispose();
					buffer.dispose();
					done();
				},
			});
		});

		it("can load an audio file with a space in the name", async () => {
			const buffer = new ToneAudioBuffer(
				"./test/audio/name with space.wav"
			);
			expect(buffer.loaded).to.be.false;
			await ToneAudioBuffer.loaded();
			expect(buffer.loaded).to.be.true;
		});

		it("can load an encoded audio file with a space in the name", async () => {
			const buffer = new ToneAudioBuffer(
				"./test/audio/" + encodeURIComponent("name with space.wav")
			);
			expect(buffer.loaded).to.be.false;
			await ToneAudioBuffer.loaded();
			expect(buffer.loaded).to.be.true;
		});
	});

	context("baseUrl", () => {
		afterEach(() => {
			// reset baseUrl
			ToneAudioBuffer.baseUrl = "";
		});

		it("can resolve a url without a baseUrl", async () => {
			const buffer = new ToneAudioBuffer("./test/audio/sine.wav");
			expect(buffer.loaded).to.be.false;
			await ToneAudioBuffer.loaded();
			expect(buffer.loaded).to.be.true;
			expect(buffer.duration).to.be.closeTo(3, 0.01);
		});

		it("can resolve a url with a baseUrl", async () => {
			ToneAudioBuffer.baseUrl = "./test/audio";
			const buffer = new ToneAudioBuffer("sine.wav");
			expect(buffer.loaded).to.be.false;
			await ToneAudioBuffer.loaded();
			expect(buffer.loaded).to.be.true;
			expect(buffer.duration).to.be.closeTo(3, 0.01);
		});

		it("can resolve a url with a baseUrl that has a trailing slash", async () => {
			ToneAudioBuffer.baseUrl = "./test/audio/";
			const buffer = new ToneAudioBuffer("sine.wav");
			expect(buffer.loaded).to.be.false;
			await ToneAudioBuffer.loaded();
			expect(buffer.loaded).to.be.true;
			expect(buffer.duration).to.be.closeTo(3, 0.01);
		});
	});

	context("loading", () => {
		it("invokes the error callback if there is a problem with the file", (done) => {
			const buffer = new ToneAudioBuffer(
				"nosuchfile.wav",
				() => {
					throw new Error("shouldn't invoke this function");
				},
				(e) => {
					buffer.dispose();
					done();
				}
			);
		});

		it("invokes the error callback on static .load method", async () => {
			let hadError = false;
			try {
				await ToneAudioBuffer.load("nosuchfile.wav");
			} catch (e) {
				hadError = true;
			}
			expect(hadError).to.equal(true);
		});

		it("instance .load method returns Promise", (done) => {
			const promise = new ToneAudioBuffer().load(testFile);
			expect(promise).to.have.property("then");
			promise.then((buff) => {
				expect(buff).to.be.instanceOf(ToneAudioBuffer);
				done();
			});
			promise.catch(() => {
				throw new Error("shouldn't invoke this function");
			});
		});

		it("invokes the error callback if the file is corrupt", (done) => {
			const buffer = new ToneAudioBuffer(
				"./test/audio/corrupt.wav",
				() => {
					throw new Error("shouldn't invoke this function");
				},
				(e) => {
					buffer.dispose();
					done();
				}
			);
		});
	});

	context("buffer manipulation", () => {
		it("returns an empty array if there is no channel data", () => {
			const buffer = new ToneAudioBuffer();
			expect(buffer.getChannelData(0).length).to.equal(0);
			buffer.dispose();
		});

		it("can get the channel data as an array", (done) => {
			const buffer = new ToneAudioBuffer(testFile, () => {
				expect(buffer.getChannelData(0)).to.be.an.instanceOf(
					Float32Array
				);
				expect(buffer.getChannelData(0).length).to.be.above(130000);
				buffer.dispose();
				done();
			});
		});

		it("can reverse a buffer", (done) => {
			const buffer = new ToneAudioBuffer(testFile, () => {
				const buffArray = buffer.get() as AudioBuffer;
				const lastSample = buffArray[buffArray.length - 1];
				buffer.reverse = true;
				expect((buffer.get() as AudioBuffer)[0]).to.equal(lastSample);
				// setting reverse again has no effect
				buffer.reverse = true;
				expect((buffer.get() as AudioBuffer)[0]).to.equal(lastSample);
				buffer.dispose();
				done();
			});
		});

		it("can convert from an array", () => {
			const buffer = new ToneAudioBuffer();
			const arr = new Float32Array(0.5 * buffer.sampleRate);
			arr[0] = 0.5;
			buffer.fromArray(arr);
			expect(buffer.duration).to.equal(0.5);
			expect(buffer.numberOfChannels).to.equal(1);
			// test the first sample of the first channel to see if it's the same
			expect(buffer.toArray(0)[0]).to.equal(0.5);
			buffer.dispose();
		});

		it("can create a buffer from an array using the static method", () => {
			const arr = new Float32Array(0.5 * getContext().sampleRate);
			arr[0] = 0.5;
			const buffer = ToneAudioBuffer.fromArray(arr);
			expect(buffer.duration).to.equal(0.5);
			expect(buffer.numberOfChannels).to.equal(1);
			// test the first sample of the first channel to see if it's the same
			expect(buffer.toArray(0)[0]).to.equal(0.5);
			// should return the same thing without the channel argument as well
			expect(buffer.toArray()[0]).to.equal(0.5);
			buffer.dispose();
		});

		it("can convert from a multidimentional array", () => {
			const buffer = new ToneAudioBuffer();
			const arr = [
				new Float32Array(0.5 * buffer.sampleRate),
				new Float32Array(0.5 * buffer.sampleRate),
			];
			arr[0][0] = 0.5;
			buffer.fromArray(arr);
			expect(buffer.duration).to.equal(0.5);
			expect(buffer.numberOfChannels).to.equal(2);
			expect(buffer.toArray(0)[0]).to.equal(0.5);
			buffer.dispose();
		});

		it("can convert to and from an array", () => {
			const buffer = new ToneAudioBuffer();
			const arr = [
				new Float32Array(0.5 * buffer.sampleRate),
				new Float32Array(0.5 * buffer.sampleRate),
			];
			arr[0][0] = 0.5;
			buffer.fromArray(arr);
			expect(buffer.toArray(0)[0]).to.equal(0.5);
			expect(buffer.toArray()[0][0]).to.equal(0.5);
			// with a selected channel
			expect(buffer.toArray(0)[0]).to.equal(0.5);
			buffer.dispose();
		});

		it("can slice a portion of the array", async () => {
			const buffer = await ToneAudioBuffer.fromUrl(testFile);
			// original duration
			expect(buffer.duration).to.be.closeTo(3, 0.01);
			const sliced1 = buffer.slice(0, 1);
			// confirm they have the same values
			const offset = Math.floor(buffer.sampleRate * 0.9);
			// does not modify the original
			expect(buffer.duration).to.be.closeTo(3, 0.01);
			expect(sliced1.duration).to.be.closeTo(1, 0.01);
			const sliced2 = sliced1.slice(0.5);
			expect(sliced2.duration).to.be.closeTo(0.5, 0.01);
			const sliced3 = buffer.slice(2);
			expect(
				sliced3.toArray(0)[Math.floor(0.5 * buffer.sampleRate) + 1]
			).to.equal(
				buffer.toArray(0)[Math.floor(2.5 * buffer.sampleRate) + 1]
			);
			buffer.dispose();
			sliced1.dispose();
			sliced2.dispose();
			sliced3.dispose();
		});

		it("slice can extend the buffer also", async () => {
			const buffer = await ToneAudioBuffer.fromUrl(testFile);
			// original duration
			expect(buffer.duration).to.be.closeTo(3, 0.01);
			const sliced = buffer.slice(0, 4);
			expect(sliced.duration).to.be.closeTo(4, 0.01);
			buffer.dispose();
			sliced.dispose();
		});

		it("can convert a buffer to mono", () => {
			const buffer = new ToneAudioBuffer();
			const arr = [
				new Float32Array(0.5 * buffer.sampleRate),
				new Float32Array(0.5 * buffer.sampleRate),
			];
			arr[0][0] = 0.5;
			buffer.fromArray(arr);
			expect(buffer.duration).to.equal(0.5);
			expect(buffer.numberOfChannels).to.equal(2);
			buffer.toMono();
			expect(buffer.numberOfChannels).to.equal(1);
			// should have averaged the two first samples
			expect(buffer.toArray()[0]).to.equal(0.25);
			buffer.dispose();
		});

		it("can use just the second channel of a buffer when making mono", () => {
			const buffer = new ToneAudioBuffer();
			const arr = [
				new Float32Array(0.5 * buffer.sampleRate),
				new Float32Array(0.5 * buffer.sampleRate),
			];
			arr[0][0] = 0.5;
			buffer.fromArray(arr);
			expect(buffer.duration).to.equal(0.5);
			expect(buffer.numberOfChannels).to.equal(2);
			buffer.toMono(1);
			expect(buffer.numberOfChannels).to.equal(1);
			// should have averaged the two first samples
			expect(buffer.toArray()[0]).to.equal(0);
			buffer.dispose();
		});
	});

	context("static methods", () => {
		it("Test if the browser supports the given type", () => {
			expect(ToneAudioBuffer.supportsType("test.wav")).to.equal(true);
			expect(ToneAudioBuffer.supportsType("wav")).to.equal(true);
			expect(ToneAudioBuffer.supportsType("path/to/test.wav")).to.equal(
				true
			);
			expect(ToneAudioBuffer.supportsType("path/to/test.nope")).to.equal(
				false
			);
		});

		it("can be constructed with ToneAudioBuffer.fromUrl", (done) => {
			ToneAudioBuffer.fromUrl("nosuchfile.wav")
				.then(() => {
					throw new Error("shouldn't invoke this function");
				})
				.catch(() => {
					done();
				});
		});
	});

	context("ToneAudioBuffer.loaded()", () => {
		it("returns a promise", () => {
			expect(ToneAudioBuffer.loaded()).to.have.property("then");
		});

		it("is invoked when all the buffers are loaded", async () => {
			const buff0 = new ToneAudioBuffer(testFile);
			const buff1 = new ToneAudioBuffer(testFile);
			await ToneAudioBuffer.loaded();
			expect(buff0.loaded).to.equal(true);
			expect(buff1.loaded).to.equal(true);
		});

		it("can be setup before the urls", async () => {
			const loadedPromise = ToneAudioBuffer.loaded();
			const buff0 = new ToneAudioBuffer(testFile);
			const buff1 = new ToneAudioBuffer(testFile);
			await loadedPromise;
			expect(buff0.loaded).to.equal(true);
			expect(buff1.loaded).to.equal(true);
		});

		it("invokes loaded even if there is an error", () => {
			ToneAudioBuffer.fromUrl(testFile);
			ToneAudioBuffer.fromUrl("nosuchfile.wav");
			return ToneAudioBuffer.loaded();
		});
	});
});
