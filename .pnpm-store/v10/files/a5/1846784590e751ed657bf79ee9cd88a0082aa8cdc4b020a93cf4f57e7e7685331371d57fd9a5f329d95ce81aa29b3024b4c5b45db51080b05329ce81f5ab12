import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Noise } from "../../source/Noise.js";
import { Waveform } from "./Waveform.js";

describe("Waveform", () => {
	BasicTests(Waveform);

	it("can get and set properties", () => {
		const anl = new Waveform();
		anl.set({
			size: 128,
		});
		const values = anl.get();
		expect(values.size).to.equal(128);
		anl.dispose();
	});

	it("can correctly set the size", () => {
		const anl = new Waveform(512);
		expect(anl.size).to.equal(512);
		anl.size = 1024;
		expect(anl.size).to.equal(1024);
		anl.dispose();
	});

	it("can run waveform analysis", (done) => {
		const noise = new Noise();
		const anl = new Waveform(256);
		noise.connect(anl);
		noise.start();

		setTimeout(() => {
			const analysis = anl.getValue();
			expect(analysis.length).to.equal(256);
			analysis.forEach((value) => {
				expect(value).is.within(-1, 1);
			});
			anl.dispose();
			noise.dispose();
			done();
		}, 300);
	});
});
