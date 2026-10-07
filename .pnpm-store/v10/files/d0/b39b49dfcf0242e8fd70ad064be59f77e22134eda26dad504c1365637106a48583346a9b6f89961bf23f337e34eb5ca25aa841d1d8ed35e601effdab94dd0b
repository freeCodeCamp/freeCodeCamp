import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { Frequency } from "./Frequency.js";
import { Midi, MidiClass } from "./Midi.js";
import { Ticks } from "./Ticks.js";
import { Time } from "./Time.js";
import { TransportTime } from "./TransportTime.js";
import { Midi as TonalMidi } from "tonal";

describe("MidiClass", () => {
	BasicTests(MidiClass);

	context("Constructor", () => {
		it("can pass in a number in the constructor", () => {
			const midi = Midi(1);
			expect(midi).to.be.instanceOf(MidiClass);
			midi.dispose();
		});

		it("can pass in a string in the constructor", () => {
			const midi = Midi("1");
			expect(midi).to.be.instanceOf(MidiClass);
			midi.dispose();
		});

		it("can pass in a value and a type", () => {
			expect(Midi(128, "n").valueOf()).to.equal(36);
		});

		it("with no arguments evaluates to 0", () => {
			expect(Midi().valueOf()).to.equal(0);
		});

		it("is evaluated in equations and comparisons using valueOf", () => {
			// @ts-ignore
			expect(Midi(1) + 1).to.equal(2);
			// @ts-ignore
			expect(Midi(1) + Midi(1)).to.equal(2);
			// @ts-ignore
			expect(Midi(1) > Midi(0)).to.be.true;
			// @ts-ignore
			expect(+Midi(1)).to.equal(1);
		});

		it("can convert from seconds", () => {
			expect(Midi("0.1s").valueOf()).to.equal(3);
			expect(Midi("0.05s").valueOf()).to.equal(15);
			expect(Midi(0.05, "s").valueOf()).to.equal(15);
		});

		it("can convert from hertz", () => {
			expect(Midi("440hz").valueOf()).to.equal(69);
			expect(Midi(220, "hz").valueOf()).to.equal(57);
		});

		it("can convert from ticks", () => {
			expect(Midi("1i").valueOf()).to.equal(67);
			expect(Midi(2, "i").valueOf()).to.equal(55);
		});

		it("can convert from Time", () => {
			expect(Midi(Time(0.01)).valueOf()).to.equal(43);
			expect(Midi(Time("128n")).valueOf()).to.equal(36);
			expect(Midi(Time(128, "n")).valueOf()).to.equal(36);
		});

		it("can convert from Midi", () => {
			expect(Midi(Midi(2)).valueOf()).to.equal(2);
			expect(Midi(Midi("64n")).valueOf()).to.equal(24);
			expect(Midi(Midi(64, "n")).valueOf()).to.equal(24);
		});

		it("can convert from Frequency", () => {
			expect(Midi(Frequency("C4")).valueOf()).to.equal(60);
			expect(Midi(Frequency("64n")).valueOf()).to.equal(24);
			expect(Midi(Frequency(64, "n")).valueOf()).to.equal(24);
		});

		it("can convert from TransportTime", () => {
			expect(Midi(TransportTime(0.01)).valueOf()).to.equal(43);
			expect(Midi(TransportTime("256n")).valueOf()).to.equal(48);
		});

		it("can convert from Ticks", () => {
			return Offline(({ transport }) => {
				expect(Midi(Ticks(transport.PPQ)).valueOf()).to.equal(-24);
				expect(Midi(Ticks("4n")).valueOf()).to.equal(-24);
			});
		});
	});

	context("Conversions", () => {
		it("can convert frequencies into notes", () => {
			expect(Midi(48).toNote()).to.equal(TonalMidi.midiToNoteName(48));
			expect(Midi(90).toNote()).to.equal(
				TonalMidi.midiToNoteName(90, { sharps: true })
			);
			expect(Midi("C#4").toNote()).to.equal("C#4");
		});

		it("can convert note to midi values", () => {
			expect(Midi("C4").toMidi()).to.equal(TonalMidi.toMidi("C4"));
			expect(Midi("C#0").toMidi()).to.equal(TonalMidi.toMidi("C#0"));
			expect(Midi("A-1").toMidi()).to.equal(TonalMidi.toMidi("A-1"));
		});

		it("can convert midi to frequency", () => {
			expect(Midi(60).toFrequency()).to.equal(TonalMidi.midiToFreq(60));
			expect(Midi(25).toFrequency()).to.equal(TonalMidi.midiToFreq(25));
			expect(Midi(108).toFrequency()).to.equal(TonalMidi.midiToFreq(108));
		});
	});

	context("transpose/harmonize", () => {
		it("can transpose a value", () => {
			expect(Midi("A4").transpose(3).toMidi()).to.equal(72);
			expect(Midi("A4").transpose(-3).toMidi()).to.equal(66);
			expect(Midi(69).transpose(-12).valueOf()).to.equal(57);
		});

		it("can harmonize a value", () => {
			expect(Midi("A4").harmonize([0, 3])).to.be.an("array");
			expect(Midi("A4").harmonize([0, 3]).length).to.equal(2);
			expect(Midi("A4").harmonize([0, 3])[0].toNote()).to.equal("A4");
			expect(Midi("A4").harmonize([0, 3])[1].toNote()).to.equal("C5");

			expect(Midi("A4").harmonize([-12, 0, 12])).to.be.an("array");
			expect(Midi("A4").harmonize([-12, 0, 12]).length).to.equal(3);
			expect(Midi("A4").harmonize([-12, 0, 12])[0].toNote()).to.equal(
				"A3"
			);
			expect(Midi("A4").harmonize([-12, 0, 12])[1].toNote()).to.equal(
				"A4"
			);
			expect(Midi("A4").harmonize([-12, 0, 12])[2].toNote()).to.equal(
				"A5"
			);
		});
	});
});
