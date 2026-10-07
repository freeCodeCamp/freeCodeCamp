import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { atTime, Offline } from "../../../test/helper/Offline.js";
import { getContext } from "../Global.js";
import { Frequency } from "./Frequency.js";
import { Ticks } from "./Ticks.js";
import { Time, TimeClass } from "./Time.js";
import { TransportTime } from "./TransportTime.js";

describe("TimeClass", () => {
	BasicTests(TimeClass);

	context("Constructor", () => {
		it("can be used as a function or instantiated", () => {
			const t0 = Time();
			expect(t0).to.be.instanceOf(TimeClass);
			t0.dispose();
			const t1 = new TimeClass(getContext());
			expect(t1).to.be.instanceOf(TimeClass);
			t1.dispose();
		});

		it("can pass in a number in the constructor", () => {
			const time = Time(1);
			expect(time.valueOf()).to.equal(1);
			expect(time).to.be.instanceOf(TimeClass);
			time.dispose();
		});

		it("can pass in a string in the constructor", () => {
			const time = Time("1");
			expect(time.valueOf()).to.equal(1);
			expect(time).to.be.instanceOf(TimeClass);
			time.dispose();
		});

		it("can pass in a value and a type", () => {
			expect(Time(4, "m").valueOf()).to.equal(8);
		});

		it("with no arguments evaluates to 'now'", () => {
			const now = getContext().now();
			expect(Time().valueOf()).to.be.closeTo(now, 0.01);
		});

		it("is evaluated in equations and comparisons using valueOf", () => {
			expect(Time(1).valueOf() + 1).to.equal(2);
			expect(Time(1).valueOf() + Time(1).valueOf()).to.equal(2);
			expect(Time(1) > Time(0)).to.equal(true);
			expect(+Time(1)).to.equal(1);
		});

		it("can convert from Time", () => {
			expect(Time(Time(2)).valueOf()).to.equal(2);
			expect(Time("4n").valueOf()).to.equal(0.5);
		});

		it("can convert from Frequency", () => {
			expect(Time(Frequency(2)).valueOf()).to.equal(0.5);
			expect(Time(Frequency("4n")).valueOf()).to.equal(0.5);
		});

		it("can convert from TransportTime", () => {
			expect(Time(TransportTime(2)).valueOf()).to.equal(2);
			expect(Time(TransportTime("4n")).valueOf()).to.equal(0.5);
		});

		it("can convert from Ticks", () => {
			return Offline(({ transport }) => {
				expect(Time(Ticks(transport.PPQ)).valueOf()).to.equal(0.5);
				expect(Time(Ticks("4n")).valueOf()).to.equal(0.5);
			});
		});

		it("evalutes objects", () => {
			return Offline(() => {
				expect(Time({ "4n": 3 }).valueOf()).to.equal(1.5);
				expect(Time({ "8t": 2, "1m": 3 }).valueOf()).to.be.closeTo(
					6.33,
					0.01
				);
				expect(Time({ "2n": 1, "8n": 1.5 }).valueOf()).to.equal(1.375);
				expect(Time({ "2n": 1, "8n": -1 }).valueOf()).to.equal(0.75);
			});
		});
	});

	context("Quantizes values", () => {
		it("returns the time quantized to the a subdivision", () => {
			expect(Time(1.1).quantize(0.5).valueOf()).to.be.closeTo(1, 0.01);
			expect(Time(2.3).quantize(0.5).valueOf()).to.be.closeTo(2.5, 0.01);
			expect(Time(0).quantize(4).valueOf()).to.be.closeTo(0, 0.01);
		});

		it("can quantize with a percentage", () => {
			expect(Time(4).quantize(8, 0.5).valueOf()).to.equal(6);
			expect(Time(10).quantize(8, 0.5).valueOf()).to.equal(9);
			expect(Time(2).quantize(8, 0.75).valueOf()).to.equal(0.5);
		});

		it("can get the next subdivison when the transport is started", () => {
			return Offline((context) => {
				const transport = context.transport;
				transport.start(0.1);
				return atTime(0.69, () => {
					expect(
						new TimeClass(context, "@1m").valueOf()
					).to.be.closeTo(2.1, 0.01);
					expect(
						new TimeClass(context, "@4n").valueOf()
					).to.be.closeTo(1.1, 0.01);
					expect(
						new TimeClass(context, "@8n").valueOf()
					).to.be.closeTo(0.85, 0.01);
				});
			}, 0.7);
		});
	});

	context("Operators", () => {
		it("can add the current time", () => {
			const now = getContext().now();
			expect(Time("+4").valueOf()).to.be.closeTo(4 + now, 0.02);
			expect(Time("+2n").valueOf()).to.be.closeTo(1 + now, 0.02);
		});

		it("can quantize the value", () => {
			expect(Time(4).quantize(3)).to.equal(3);
			expect(Time(5).quantize(3)).to.equal(6);
		});
	});

	context("Conversions", () => {
		it("converts time into notation", () => {
			return Offline(() => {
				expect(Time("4n").toNotation()).to.equal("4n");
				expect(Time(1.5).toNotation()).to.equal("2n.");
				expect(Time(0).toNotation()).to.equal("0");
				expect(Time("1:2:3").toNotation()).to.equal("1m");
				expect(
					Time(
						Time("2n").valueOf() + Time("4n").valueOf()
					).toNotation()
				).to.equal("2n.");
			});
		});

		it("converts time into milliseconds", () => {
			expect(Time(2).toMilliseconds()).to.equal(2000);
			expect(Time("4n").toMilliseconds()).to.equal(500);
		});

		it("converts time into samples", () => {
			expect(Time(2).toSamples()).to.equal(2 * getContext().sampleRate);
		});

		it("converts time into frequency", () => {
			expect(Time(2).toFrequency()).to.equal(0.5);
		});

		it("converts time into ticks", () => {
			return Offline(({ transport }) => {
				expect(Time("2n").toTicks()).to.equal(2 * transport.PPQ);
				// floating point checks
				const bpmOrig = transport.bpm.value;
				transport.bpm.value = 100;
				expect(Time("0:1:3").toTicks()).to.equal(1.75 * transport.PPQ);
				transport.bpm.value = bpmOrig;
			});
		});

		it("converts time into BarsBeatsSixteenths", () => {
			return Offline(({ transport }) => {
				expect(Time("3:1:3").toBarsBeatsSixteenths()).to.equal("3:1:3");
				expect(Time(2).toBarsBeatsSixteenths()).to.equal("1:0:0");
				// trailing zero removal test
				transport.bpm.value = 100;
				expect(Time("0:1:3").toBarsBeatsSixteenths()).to.equal("0:1:3");
				expect(Time("14:0:0").toBarsBeatsSixteenths()).to.equal(
					"14:0:0"
				);
				expect(Time("15:0:0").toBarsBeatsSixteenths()).to.equal(
					"15:0:0"
				);
				transport.bpm.value = 90;
				expect(Time("100:0:0").toBarsBeatsSixteenths()).to.equal(
					"100:0:0"
				);
			});
		});
	});
});
