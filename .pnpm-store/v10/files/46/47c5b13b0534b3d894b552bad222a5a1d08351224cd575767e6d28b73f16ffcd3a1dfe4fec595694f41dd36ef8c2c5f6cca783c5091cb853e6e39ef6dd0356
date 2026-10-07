import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Noise } from "../../source/Noise.js";
import { Analyser } from "./Analyser.js";

describe("Analyser", () => {
	BasicTests(Analyser);

	it("can get and set properties", () => {
		const anl = new Analyser();
		anl.set({
			size: 32,
			smoothing: 0.2,
		});
		const values = anl.get();
		expect(values.size).to.equal(32);
		expect(values.smoothing).to.equal(0.2);
		anl.dispose();
	});

	it("can correctly set the size", () => {
		const anl = new Analyser("fft", 512);
		expect(anl.size).to.equal(512);
		anl.size = 1024;
		expect(anl.size).to.equal(1024);
		anl.dispose();
	});

	it("can run fft analysis", () => {
		const anl = new Analyser("fft", 512);
		const analysis = anl.getValue();
		expect(analysis.length).to.equal(512);
		analysis.forEach((val) => {
			expect(val).is.lessThan(0);
		});
		anl.dispose();
	});

	it("can run waveform analysis", (done) => {
		const noise = new Noise();
		const anl = new Analyser("waveform", 256);
		noise.connect(anl);
		noise.start();

		setTimeout(() => {
			const analysis = anl.getValue();
			expect(analysis.length).to.equal(256);
			analysis.forEach((val) => {
				expect(val).is.within(-1, 1);
			});
			anl.dispose();
			noise.dispose();
			done();
		}, 300);
	});

	it("throws an error if an invalid type is set", () => {
		const anl = new Analyser("fft", 512);
		expect(() => {
			// @ts-ignore
			anl.type = "invalid";
		}).to.throw(Error);
		anl.dispose();
	});

	it("can do multichannel analysis", () => {
		const anl = new Analyser({
			type: "waveform",
			channels: 2,
			size: 512,
		});
		expect(anl.getValue().length).to.equal(2);
		expect((anl.getValue()[0] as Float32Array).length).to.equal(512);
		anl.dispose();
	});
});
