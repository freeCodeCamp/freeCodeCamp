import { AutoFilter } from "./AutoFilter.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { Note } from "tonal";
import { Offline } from "../../test/helper/Offline.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Noise } from "../source/index.js";

describe("AutoFilter", () => {
	BasicTests(AutoFilter);
	EffectTests(AutoFilter);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const autoFilter = new AutoFilter({
					baseFrequency: 200,
					octaves: 4,
					frequency: 4,
					type: "sine",
				}).toDestination();
				new Noise().connect(autoFilter).start();
				autoFilter.start(0.2);
			},
			"autoFilter.wav",
			0.1
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const autoFilter = new AutoFilter({
				baseFrequency: 2000,
				octaves: 2,
				type: "sawtooth",
			});
			expect(autoFilter.baseFrequency).to.be.closeTo(2000, 0.1);
			expect(autoFilter.octaves).to.equal(2);
			expect(autoFilter.type).to.equal("sawtooth");
			autoFilter.dispose();
		});

		it("can be started and stopped", () => {
			const autoFilter = new AutoFilter();
			autoFilter.start().stop("+0.2");
			autoFilter.dispose();
		});

		it("can get/set the options", () => {
			const autoFilter = new AutoFilter();
			autoFilter.set({
				baseFrequency: 1200,
				frequency: 2.4,
				type: "triangle",
			});
			expect(autoFilter.get().baseFrequency).to.be.closeTo(1200, 0.01);
			expect(autoFilter.get().frequency).to.be.closeTo(2.4, 0.01);
			expect(autoFilter.get().type).to.equal("triangle");
			autoFilter.dispose();
		});

		it("can set the frequency and depth", () => {
			const autoFilter = new AutoFilter();
			autoFilter.depth.value = 0.4;
			autoFilter.frequency.value = 0.4;
			expect(autoFilter.depth.value).to.be.closeTo(0.4, 0.01);
			expect(autoFilter.frequency.value).to.be.closeTo(0.4, 0.01);
			autoFilter.dispose();
		});

		it("can set the filter options", () => {
			const autoFilter = new AutoFilter();
			autoFilter.filter.Q.value = 2;
			expect(autoFilter.filter.Q.value).to.be.closeTo(2, 0.01);
			autoFilter.dispose();
		});

		it("accepts baseFrequency and octaves as frequency values", () => {
			const autoFilter = new AutoFilter("2n", "C2", 4);
			expect(autoFilter.baseFrequency).to.be.closeTo(
				Note.freq("C2") as number,
				0.01
			);
			expect(autoFilter.octaves).to.equal(4);
			autoFilter.dispose();
		});

		it("can sync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const autoFilter = new AutoFilter(2);
				autoFilter.sync();
				autoFilter.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				// transport.start(0)
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(4, 0.1);
			});
		});

		it("can unsync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const autoFilter = new AutoFilter(2);
				autoFilter.sync();
				autoFilter.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				autoFilter.unsync();
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(2, 0.1);
			});
		});
	});
});
