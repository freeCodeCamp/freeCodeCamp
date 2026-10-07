import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { atTime, Offline } from "../../../test/helper/Offline.js";
import { getContext } from "../Global.js";
import { Frequency } from "./Frequency.js";
import { Ticks } from "./Ticks.js";
import { Time } from "./Time.js";
import { TransportTime, TransportTimeClass } from "./TransportTime.js";

describe("TransportTimeClass", () => {
	BasicTests(TransportTime);

	context("Constructor", () => {
		it("can be made with or without 'new'", () => {
			const t0 = TransportTime();
			expect(t0).to.be.instanceOf(TransportTimeClass);
			t0.dispose();
			const t1 = new TransportTimeClass(getContext());
			expect(t1).to.be.instanceOf(TransportTimeClass);
			t1.dispose();
		});

		it("can pass in a number in the constructor", () => {
			return Offline(() => {
				const time = TransportTime(1);
				expect(time).to.be.instanceOf(TransportTimeClass);
				expect(time.valueOf()).to.equal(1);
				time.dispose();
			});
		});

		it("can pass in a string in the constructor", () => {
			return Offline((context) => {
				const time = TransportTime("1");
				expect(time).to.be.instanceOf(TransportTimeClass);
				expect(time.valueOf()).to.equal(1);
				time.dispose();
			});
		});

		it("can pass in a value and a type", () => {
			return Offline((context) => {
				expect(TransportTime(4, "m").valueOf()).to.equal(8);
			});
		});

		it("with no arguments evaluates to 0 when the transport is stopped", () => {
			return Offline(() => {
				expect(TransportTime().valueOf()).to.equal(0);
			});
		});

		it("with no arguments evaluates to the current ticks when the transport is started", () => {
			return Offline((context) => {
				const transport = context.transport;
				transport.start();
				return atTime(0.29, () => {
					expect(new TransportTimeClass(context).valueOf()).to.equal(
						transport.seconds
					);
					transport.stop();
				});
			}, 0.3);
		});

		it("is evaluated in equations and comparisons using valueOf", () => {
			// @ts-ignore
			expect(TransportTime("1") + 1).to.equal(2);
			// @ts-ignore
			expect(TransportTime("1") + TransportTime("1")).to.equal(2);
			expect(TransportTime("1") > TransportTime(0)).to.be.true;
			expect(+TransportTime("1")).to.equal(1);
		});

		it("can convert from Time", () => {
			expect(TransportTime(Time(2)).valueOf()).to.equal(2);
			expect(TransportTime(Time("4n")).valueOf()).to.equal(0.5);
		});

		it("can convert from Frequency", () => {
			expect(TransportTime(Frequency(2)).valueOf()).to.equal(0.5);
			expect(TransportTime(Frequency("4n")).valueOf()).to.equal(0.5);
		});

		it("can convert from TransportTime", () => {
			expect(TransportTime(TransportTime(2)).valueOf()).to.equal(2);
			expect(TransportTime(TransportTime("4n")).valueOf()).to.equal(0.5);
		});

		it("can convert from Ticks", () => {
			return Offline((context) => {
				const transport = context.transport;
				expect(TransportTime(Ticks(transport.PPQ)).valueOf()).to.equal(
					0.5
				);
				expect(TransportTime(Ticks("4n")).valueOf()).to.equal(0.5);
			});
		});

		it("can convert from an Object", () => {
			return Offline(() => {
				expect(TransportTime({ "4n": 2 }).valueOf()).to.equal(1);
				expect(
					TransportTime({ "1n": 1, "8t": 2 }).valueOf()
				).to.be.closeTo(2.333, 0.01);
			});
		});
	});

	context("Quantizes values", () => {
		it("can quantize values", () => {
			return Offline((context) => {
				expect(
					TransportTime("4t").quantize("4n").valueOf()
				).to.be.closeTo(0.5, 0.01);
			});
		});

		it("can get the next subdivison when the transport is started", () => {
			return Offline((context) => {
				const transport = context.transport;
				transport.start();
				return atTime(0.59, () => {
					expect(
						new TransportTimeClass(context, "@1m").valueOf()
					).to.be.closeTo(2, 0.01);
					expect(
						new TransportTimeClass(context, "@4n").valueOf()
					).to.be.closeTo(1, 0.01);
				});
			}, 0.6);
		});
	});

	context("Operators", () => {
		it("can add the current time", () => {
			return Offline((context) => {
				const transport = context.transport;
				transport.start();
				return atTime(0.59, () => {
					const now = transport.seconds;
					const quarterNote = 60 / transport.bpm.value;
					expect(
						new TransportTimeClass(context, "+4i").valueOf()
					).to.be.closeTo(4 / transport.PPQ + now, 0.1);
					expect(
						new TransportTimeClass(context, "+2n").valueOf()
					).to.be.closeTo(quarterNote * 2 + now, 0.1);
					transport.stop();
				});
			}, 0.6);
		});
	});

	context("Conversions", () => {
		it("converts time into notation", () => {
			return Offline((context) => {
				const transport = context.transport;
				transport.bpm.value = 120;
				transport.timeSignature = 4;
				expect(TransportTime("4n").toNotation()).to.equal("4n");
				expect(TransportTime(1.5).toNotation()).to.equal("2n.");
				expect(TransportTime(0).toNotation()).to.equal("0");
				expect(TransportTime("1:0:0").toNotation()).to.equal("1m");
			});
		});

		it("converts time into samples", () => {
			return Offline((context) => {
				expect(TransportTime(2).toSamples()).to.equal(
					2 * context.sampleRate
				);
			});
		});

		it("converts time into frequency", () => {
			return Offline(() => {
				expect(TransportTime(2).toFrequency()).to.equal(0.5);
			});
		});

		it("converts time into seconds", () => {
			return Offline(() => {
				expect(TransportTime("2n").toSeconds()).to.equal(1);
			});
		});

		it("converts time into BarsBeatsSixteenths", () => {
			return Offline(() => {
				expect(TransportTime("3:1:3").toBarsBeatsSixteenths()).to.equal(
					"3:1:3"
				);
				expect(TransportTime(2).toBarsBeatsSixteenths()).to.equal(
					"1:0:0"
				);
			});
		});
	});
});
