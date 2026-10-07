import { expect } from "chai";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";
import { ToneAudioBuffers } from "./ToneAudioBuffers.js";

const testFile = "./test/audio/sine.wav";
const testFile2 = "./test/audio/hh.wav";

describe("ToneAudioBuffers", () => {
	it("can be created and disposed", () => {
		const buff = new ToneAudioBuffers();
		buff.dispose();
	});

	it("loads a file from an object string", (done) => {
		const buffer = new ToneAudioBuffers(
			{
				sine: testFile,
			},
			() => {
				expect(buffer).to.be.instanceof(ToneAudioBuffers);
				buffer.dispose();
				done();
			}
		);
	});

	it("can get a buffer loaded from an object", (done) => {
		const buffer = new ToneAudioBuffers(
			{
				kick: testFile2,
				sine: testFile,
			},
			() => {
				expect(buffer.get("kick")).to.be.instanceof(ToneAudioBuffer);
				buffer.dispose();
				done();
			}
		);
	});

	it("throws an error when it tries to get an object that doesnt exist", (done) => {
		const buffer = new ToneAudioBuffers(
			{
				sine: testFile,
			},
			() => {
				expect(() => {
					buffer.get("nope");
				}).throws(Error);
				buffer.dispose();
				done();
			}
		);
	});

	it("tests if it has a buffer", (done) => {
		const buffer = new ToneAudioBuffers(
			{
				kick: testFile2,
				sine: testFile,
			},
			() => {
				expect(buffer.has("kick")).to.be.true;
				expect(buffer.has("sine")).to.be.true;
				expect(buffer.has("nope")).to.be.false;
				buffer.dispose();
				done();
			}
		);
	});

	it("can pass in buffers as object and options object in second arg", (done) => {
		const buffer = new ToneAudioBuffers({
			baseUrl: "./test/audio/",
			onload(): void {
				expect(buffer.has("sine")).to.be.true;
				buffer.dispose();
				done();
			},
			urls: {
				sine: "sine.wav",
			},
		});
	});

	it("invokes onerror if it cant load the url", (done) => {
		const buffer = new ToneAudioBuffers({
			onerror(): void {
				buffer.dispose();
				done();
			},
			urls: {
				test: "nosuchfile.wav",
			},
		});
	});

	it("reports itself as loaded", (done) => {
		const buffer = new ToneAudioBuffers(
			{
				kick: testFile2,
				sine: testFile,
			},
			() => {
				expect(buffer.loaded).to.be.true;
				buffer.dispose();
				done();
			}
		);
		expect(buffer.loaded).to.be.false;
	});

	it("can load from a base url", (done) => {
		const buffer = new ToneAudioBuffers(
			{
				hat: "hh.wav",
			},
			() => {
				expect(buffer.get("hat")).to.be.instanceof(ToneAudioBuffer);
				buffer.dispose();
				done();
			},
			"./test/audio/"
		);
	});

	it("can add a buffer", (done) => {
		const buffer = new ToneAudioBuffers();
		buffer.add("name", testFile, () => {
			expect(buffer.get("name")).to.be.instanceof(ToneAudioBuffer);
			buffer.dispose();
			done();
		});
	});

	it("can add a buffer url", (done) => {
		const buffer = new ToneAudioBuffers();
		buffer.add("name", testFile, () => {
			expect(buffer.get("name")).to.be.instanceof(ToneAudioBuffer);
			buffer.dispose();
			done();
		});
	});

	it("throws an error if no buffer exists with that name or index", () => {
		const buffer = new ToneAudioBuffers();
		expect(() => {
			buffer.get("nope");
		}).to.throw(Error);
		buffer.dispose();
	});

	it("can add a ToneAudioBuffer", () => {
		const buff = new ToneAudioBuffer();
		const buffer = new ToneAudioBuffers();
		buffer.add("name", buff);
		expect(buffer.get("name").get()).to.equal(buff.get());
	});

	it("can add an AudioBuffer", (done) => {
		ToneAudioBuffer.load(testFile).then((buff) => {
			const buffer = new ToneAudioBuffers();
			buffer.add("name", buff);
			expect(buffer.get("name").get()).to.equal(buff);
			done();
		});
	});

	it("can be constructed with ToneAudioBuffers", () => {
		const buff = new ToneAudioBuffer();
		const buffer = new ToneAudioBuffers({
			buff,
		});
		expect(buffer.get("buff").get()).to.equal(buff.get());
	});
});
