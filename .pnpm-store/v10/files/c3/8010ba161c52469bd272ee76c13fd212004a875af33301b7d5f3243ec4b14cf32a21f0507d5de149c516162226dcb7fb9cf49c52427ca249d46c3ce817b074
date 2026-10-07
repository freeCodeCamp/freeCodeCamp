import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { atTime, Offline } from "../../../test/helper/Offline.js";
import { getContext } from "../Global.js";
import { Frequency } from "./Frequency.js";
import { Ticks, TicksClass } from "./Ticks.js";
import { Time } from "./Time.js";
import { TransportTime } from "./TransportTime.js";

describe("TicksClass", () => {
	BasicTests(Ticks);

	context("Constructor", () => {
		it("can be made with or without 'new'", () => {
			const t0 = Ticks();
			expect(t0).to.be.instanceOf(TicksClass);
			t0.dispose();
			const t1 = new TicksClass(getContext());
			expect(t1).to.be.instanceOf(TicksClass);
			t1.dispose();
		});

		it("can pass in a number in the constructor", () => {
			return Offline(({ transport }) => {
				const time = Ticks(1);
				expect(time).to.be.instanceOf(TicksClass);
				expect(time.valueOf()).to.equal(1);
				time.dispose();
			});
		});

		it("can pass in a string in the constructor", () => {
			return Offline(({ transport }) => {
				const time = Ticks("1");
				expect(time).to.be.instanceOf(TicksClass);
				expect(time.valueOf()).to.equal(1);
				time.dispose();
			});
		});

		it("can pass in a value and a type", () => {
			return Offline(({ transport }) => {
				expect(Ticks(4, "m").valueOf()).to.equal(transport.PPQ * 16);
			});
		});

		it("with no arguments evaluates to 0 when the transport is stopped", () => {
			return Offline(() => {
				expect(Ticks().valueOf()).to.equal(0);
			});
		});

		it("with no arguments evaluates to the current ticks when the transport is started", () => {
			return Offline((context) => {
				context.transport.start();
				return atTime(0.29, () => {
					expect(new TicksClass(context).valueOf()).to.equal(
						context.transport.ticks
					);
					context.transport.stop();
				});
			}, 0.3);
		});

		it("is evaluated in equations and comparisons using valueOf", () => {
			// @ts-ignore
			expect(Ticks("1i") + 1).to.equal(2);
			// @ts-ignore
			expect(Ticks("1i") + Ticks("1i")).to.equal(2);
			expect(Ticks("1i") > Ticks(0)).to.be.true;
			expect(+Ticks("1i")).to.equal(1);
		});

		it("can convert from Time", () => {
			return Offline(({ transport }) => {
				expect(Ticks(Time(2)).valueOf()).to.equal(transport.PPQ * 4);
				expect(Ticks(Time("4n")).valueOf()).to.equal(transport.PPQ);
				expect(Ticks(Time(4, "n")).valueOf()).to.equal(transport.PPQ);
			});
		});

		it("can convert from Frequency", () => {
			return Offline(({ transport }) => {
				expect(Ticks(Frequency(2)).valueOf()).to.equal(transport.PPQ);
				expect(Ticks(Frequency("4n")).valueOf()).to.equal(
					transport.PPQ
				);
				expect(Ticks(Frequency(4, "n")).valueOf()).to.equal(
					transport.PPQ
				);
			});
		});

		it("can convert from TransportTime", () => {
			return Offline(({ transport }) => {
				expect(Ticks(TransportTime(2)).valueOf()).to.equal(
					transport.PPQ * 4
				);
				expect(Ticks(TransportTime("4n")).valueOf()).to.equal(
					transport.PPQ
				);
			});
		});

		it("can convert from Ticks", () => {
			return Offline(({ transport }) => {
				expect(Ticks(Ticks(transport.PPQ)).valueOf()).to.equal(
					transport.PPQ
				);
				expect(Ticks(Ticks("4n")).valueOf()).to.equal(transport.PPQ);
			});
		});

		it("can convert from an Object", () => {
			return Offline(({ transport }) => {
				expect(Ticks({ "4n": 2 }).valueOf()).to.equal(
					transport.PPQ * 2
				);
				expect(Ticks({ "1n": 1, "8t": 2 }).valueOf()).to.equal(
					transport.PPQ * 4 + transport.PPQ * (2 / 3)
				);
			});
		});
	});

	context("Quantizes values", () => {
		it("can quantize values", () => {
			return Offline(({ transport }) => {
				expect(Ticks("4t").quantize("4n").valueOf()).to.be.closeTo(
					transport.PPQ,
					0.01
				);
			});
		});

		it("can get the next subdivison when the transport is started", () => {
			return Offline((context) => {
				const transport = context.transport;
				transport.start();
				return atTime(0.59, () => {
					expect(
						new TicksClass(context, "@1m").valueOf()
					).to.be.closeTo(4 * transport.PPQ, 1);
					expect(
						new TicksClass(context, "@4n").valueOf()
					).to.be.closeTo(transport.PPQ * 2, 1);
				});
			}, 0.6);
		});
	});

	context("Operators", () => {
		it("can add the current time", () => {
			return Offline((context) => {
				context.transport.start();
				return atTime(0.59, () => {
					const now = context.transport.ticks;
					expect(
						new TicksClass(context, "+4i").valueOf()
					).to.be.closeTo(4 + now, 0.01);
					expect(
						new TicksClass(context, "+2n").valueOf()
					).to.be.closeTo(context.transport.PPQ * 2 + now, 0.01);
					expect(
						new TicksClass(context, "+2n").valueOf()
					).to.be.closeTo(context.transport.PPQ * 2 + now, 0.01);
					context.transport.stop();
				});
			}, 0.6);
		});
	});

	context("Conversions", () => {
		it("converts time into notation", () => {
			return Offline(({ transport }) => {
				transport.bpm.value = 120;
				transport.timeSignature = 4;
				expect(Ticks("4n").toNotation()).to.equal("4n");
				// expect(Ticks(1.5 * transport.PPQ).toNotation()).to.equal("2n + 4n");
				expect(Ticks(0).toNotation()).to.equal("0");
				// expect(Ticks("1:2:3").toNotation()).to.equal("1m + 2n + 8n + 16n");
			});
		});

		it("converts time into samples", () => {
			return Offline(({ transport }) => {
				expect(Ticks(transport.PPQ).toSamples()).to.equal(
					0.5 * getContext().sampleRate
				);
			});
		});

		it("converts time into frequency", () => {
			return Offline(({ transport }) => {
				expect(Ticks(transport.PPQ * 4).toFrequency()).to.equal(0.5);
				expect(Ticks("2n").toFrequency()).to.equal(1);
			});
		});

		it("converts time into seconds", () => {
			return Offline(() => {
				expect(Ticks("2n").toSeconds()).to.equal(1);
			});
		});

		it("converts time into BarsBeatsSixteenths", () => {
			return Offline(({ transport }) => {
				expect(Ticks("3:1:3").toBarsBeatsSixteenths()).to.equal(
					"3:1:3"
				);
				expect(
					Ticks(4 * transport.PPQ).toBarsBeatsSixteenths()
				).to.equal("1:0:0");
			});
		});
	});
});
