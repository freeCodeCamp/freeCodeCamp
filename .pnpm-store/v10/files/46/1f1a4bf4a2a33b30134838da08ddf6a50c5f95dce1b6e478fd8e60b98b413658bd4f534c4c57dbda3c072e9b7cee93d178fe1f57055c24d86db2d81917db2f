import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Noise } from "../../source/Noise.js";
import { FFT } from "./FFT.js";

describe("FFT", () => {
	BasicTests(FFT);

	it("can get and set properties", () => {
		const fft = new FFT();
		fft.set({
			size: 128,
			smoothing: 0.4,
		});
		const values = fft.get();
		expect(values.size).to.equal(128);
		expect(values.smoothing).to.equal(0.4);
		fft.dispose();
	});

	it("can correctly set the size", () => {
		const fft = new FFT(512);
		expect(fft.size).to.equal(512);
		fft.size = 1024;
		expect(fft.size).to.equal(1024);
		fft.dispose();
	});

	it("can set the smoothing", () => {
		const fft = new FFT(512);
		fft.smoothing = 0.2;
		expect(fft.smoothing).to.equal(0.2);
		fft.dispose();
	});

	it("can get the frequency values of each index of the return array", () => {
		const fft = new FFT(32);
		expect(fft.getFrequencyOfIndex(0)).to.be.closeTo(0, 1);
		expect(fft.getFrequencyOfIndex(16)).to.be.closeTo(
			fft.context.sampleRate / 4,
			1
		);
		fft.dispose();
	});

	it("can run waveform analysis", (done) => {
		const noise = new Noise();
		const fft = new FFT(256);
		noise.connect(fft);
		noise.start();

		setTimeout(() => {
			const analysis = fft.getValue();
			expect(analysis.length).to.equal(256);
			analysis.forEach((value) => {
				expect(value).is.within(-Infinity, 0);
			});
			fft.dispose();
			noise.dispose();
			done();
		}, 300);
	});

	it("outputs a normal range", (done) => {
		const noise = new Noise();
		const fft = new FFT({
			normalRange: true,
		});
		noise.connect(fft);
		noise.start();

		setTimeout(() => {
			const analysis = fft.getValue();
			analysis.forEach((value) => {
				expect(value).is.within(0, 1);
			});
			fft.dispose();
			noise.dispose();
			done();
		}, 300);
	});
});
