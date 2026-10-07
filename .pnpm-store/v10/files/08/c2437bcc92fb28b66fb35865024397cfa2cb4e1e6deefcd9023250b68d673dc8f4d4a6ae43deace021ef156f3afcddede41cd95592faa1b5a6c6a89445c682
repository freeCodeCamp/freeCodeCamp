import { Compare, Plot } from "../../../test/helper/compare/index.js";
import { expect } from "chai";
import { BasicTests, testAudioContext } from "../../../test/helper/Basic.js";
import { atTime, Offline } from "../../../test/helper/Offline.js";
import {
	BPM,
	Decibels,
	Frequency,
	Positive,
	Seconds,
	Time,
	Unit,
	UnitName,
} from "../type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { getContext } from "../Global.js";
import { Param } from "./Param.js";
import { connect } from "./ToneAudioNode.js";

const audioContext = getContext();

describe("Param", () => {
	BasicTests(Param, {
		context: testAudioContext,
		param: testAudioContext.createOscillator().frequency,
	});

	context("constructor", () => {
		it("can be created and disposed", async () => {
			await Offline((context) => {
				const param = new Param<"time">({
					context,
					param: context.createConstantSource().offset,
					units: "time",
				});
				expect(param.getValueAtTime(0)).to.equal(1);
				param.dispose();
			});
		});

		it("can pass in a value", async () => {
			await Offline((context) => {
				const param = new Param({
					context,
					param: context.createConstantSource().offset,
					value: 1.1,
				});
				expect(param.getValueAtTime(0)).to.equal(1.1);
				param.dispose();
			});
		});

		it("requires a param in the constructor", () => {
			expect(() => {
				const param = new Param({
					value: 1.1,
				});
			}).throws(Error);
		});
	});

	context("Scheduling Curves", () => {
		const sampleRate = 11025;
		function matchesOutputCurve(param, outBuffer): void {
			outBuffer.toArray()[0].forEach((sample, index) => {
				try {
					expect(
						param.getValueAtTime(index / sampleRate)
					).to.be.closeTo(sample, 0.1);
				} catch (e) {
					throw e;
				}
			});
		}

		it("correctly handles setTargetAtTime followed by a ramp", async () => {
			let param;
			// this fails on FF
			const testBuffer = await Offline(
				(context) => {
					const source = context.createConstantSource();
					source.connect(context.rawContext.destination);
					source.start(0);
					param = new Param({
						context,
						param: source.offset,
					});
					param.setTargetAtTime(2, 0.5, 0.1);
					expect(param.getValueAtTime(0.6)).to.be.closeTo(1.6, 0.1);
					param.linearRampToValueAtTime(0.5, 0.7);
					expect(param.getValueAtTime(0.6)).to.be.closeTo(0.75, 0.1);
				},
				1.5,
				1,
				sampleRate
			);
			document.body.appendChild(await Plot.signal(testBuffer));
			matchesOutputCurve(param, testBuffer);
		});

		it("schedules a value curve", async () => {
			let param;
			const testBuffer = await Offline(
				(context) => {
					const source = context.createConstantSource();
					source.connect(context.rawContext.destination);
					source.start(0);
					param = new Param({
						context,
						param: source.offset,
						units: "number",
						value: 0,
					});
					param.setValueCurveAtTime(
						[0, 0.5, 0, 1, 1.5],
						0.1,
						0.8,
						0.5
					);
					expect(param.getValueAtTime(0.91)).to.be.closeTo(
						0.75,
						0.01
					);
				},
				1,
				1,
				sampleRate
			);
			// document.body.appendChild(await Plot.signal(testBuffer));
			matchesOutputCurve(param, testBuffer);
		});

		it("a mixture of scheduling curves", async () => {
			let param;
			const testBuffer = await Offline(
				(context) => {
					const source = context.createConstantSource();
					source.connect(context.rawContext.destination);
					source.start(0);
					param = new Param({
						context,
						param: source.offset,
						value: 0.1,
					});
					param.setValueAtTime(0, 0);
					param.setValueAtTime(1, 0.1);
					param.linearRampToValueAtTime(3, 0.2);
					param.exponentialRampToValueAtTime(0.01, 0.3);
					param.setTargetAtTime(-1, 0.35, 0.2);
					param.cancelAndHoldAtTime(0.6);
					param.rampTo(1.1, 0.2, 0.7);
					param.exponentialRampTo(0, 0.1, 0.85);
					param.setValueAtTime(0, 1);
					param.linearRampTo(1, 0.2, 1);
					param.targetRampTo(0, 0.1, 1.1);
					param.setValueAtTime(4, 1.2);
					param.cancelScheduledValues(1.2);
					param.linearRampToValueAtTime(1, 1.3);
				},
				1.5,
				1,
				sampleRate
			);
			// document.body.appendChild(await Plot.signal(testBuffer));
			matchesOutputCurve(param, testBuffer);
		});

		it.skip("can cancel and hold", async () => {
			let param;
			const testBuffer = await Offline(
				(context) => {
					const source = context.createConstantSource();
					source.connect(context.rawContext.destination);
					source.start(0);
					param = new Param({
						context,
						param: source.offset,
						value: 0.1,
					});
					param.setValueAtTime(0, 0);
					param.setValueAtTime(1, 0.2);
					param.cancelAndHoldAtTime(0.1);
					param.linearRampToValueAtTime(1, 0.3);
					param.cancelAndHoldAtTime(0.2);
					expect(param.getValueAtTime(0.2)).to.be.closeTo(0.5, 0.001);
					param.exponentialRampToValueAtTime(0, 0.4);
					param.cancelAndHoldAtTime(0.25);
					expect(param.getValueAtTime(0.25)).to.be.closeTo(
						0.033,
						0.001
					);
					param.setTargetAtTime(1, 0.3, 0.1);
					param.cancelAndHoldAtTime(0.4);
					expect(param.getValueAtTime(0.4)).to.be.closeTo(
						0.644,
						0.001
					);
					param.setValueAtTime(0, 0.45);
					param.setValueAtTime(1, 0.48);
					param.cancelAndHoldAtTime(0.45);
					expect(param.getValueAtTime(0.45)).to.be.closeTo(0, 0.001);
				},
				0.5,
				1,
				sampleRate
			);
			matchesOutputCurve(param, testBuffer);
			// document.body.appendChild(await Plot.signal(testBuffer));
		});

		// 	it ("matches known values", async () => {
		// 		await Compare.toFile(context => {
		// 			const source = context.createConstantSource();
		// 			source.connect(context.rawContext.destination);
		// 			source.start(0);
		// 			const param = new Param({
		// 				context,
		// 				param: source.offset,
		// 				value: 0.1,
		// 			});
		// 			param.setValueAtTime(0, 0);
		// 			param.setValueAtTime(1, 0.2);
		// 			param.cancelAndHoldAtTime(0.1);
		// 			param.linearRampToValueAtTime(1, 0.3);
		// 			param.cancelAndHoldAtTime(0.2);
		// 			param.exponentialRampToValueAtTime(0, 0.4);
		// 			param.cancelAndHoldAtTime(0.25);
		// 			param.setTargetAtTime(1, 0.3, 0.1);
		// 			param.cancelAndHoldAtTime(0.4);
		// 		}, "/base/test/audio/param/curve_0.wav", 0.01, 0.5, 1, 11025);
		// 	});
	});

	context("Units", () => {
		it("throws an error with invalid values", () => {
			const osc = audioContext.createOscillator();
			const param = new Param<"frequency">({
				context: audioContext,
				param: osc.frequency,
				units: "frequency",
			});
			expect(() => {
				// @ts-ignore
				expect(param.setValueAtTime("bad", "bad"));
			}).to.throw(Error);
			expect(() => {
				// @ts-ignore
				expect(param.linearRampToValueAtTime("bad", "bad"));
			}).to.throw(Error);
			expect(() => {
				// @ts-ignore
				expect(param.exponentialRampToValueAtTime("bad", "bad"));
			}).to.throw(Error);
			expect(() => {
				// @ts-ignore
				expect(param.setTargetAtTime("bad", "bad", 0.1));
			}).to.throw(Error);
			expect(() => {
				// @ts-ignore
				expect(param.cancelScheduledValues("bad"));
			}).to.throw(Error);
			param.dispose();
		});

		it("can be created with specific units", () => {
			const gain = audioContext.createGain();
			const param = new Param<"bpm">({
				context: audioContext,
				param: gain.gain,
				units: "bpm",
			});
			expect(param.units).to.equal("bpm");
			param.dispose();
		});

		it("can evaluate the given units", () => {
			const gain = audioContext.createGain();
			const param = new Param<"decibels">({
				context: audioContext,
				param: gain.gain,
				units: "decibels",
			});
			param.value = 0.5;
			expect(param.value).to.be.closeTo(0.5, 0.001);
			param.dispose();
		});

		it("can be forced to not convert", async () => {
			const testBuffer = await Offline(
				(context) => {
					const source = context.createConstantSource();
					source.connect(context.rawContext.destination);
					source.start(0);
					const param = new Param({
						context,
						convert: false,
						param: source.offset,
						units: "decibels",
					});
					param.value = -10;
					expect(param.value).to.be.closeTo(-10, 0.01);
				},
				0.001,
				1
			);
			expect(testBuffer.getValueAtTime(0)).to.be.closeTo(-10, 0.01);
		});
	});

	context("apply", () => {
		it("can apply a scheduled curve", () => {
			let sig;
			return Offline((context) => {
				const signal = new Signal();
				sig = signal;
				signal.setValueAtTime(0, 0);
				signal.linearRampToValueAtTime(0.5, 0.1);
				signal.exponentialRampToValueAtTime(0.2, 0.5);
				signal.linearRampToValueAtTime(4, 2);
				signal.cancelScheduledValues(1);
				signal.setTargetAtTime(4, 1, 0.1);
				const source = context.createConstantSource();
				source.start(0);
				connect(source, context.destination);
				return atTime(0.4, () => {
					signal.apply(source.offset);
				});
			}, 2).then(async (buffer) => {
				for (let time = 0.41; time < 2; time += 0.1) {
					expect(buffer.getValueAtTime(time)).to.be.closeTo(
						sig.getValueAtTime(time),
						0.01
					);
				}
				document.body.appendChild(await Plot.signal(buffer));
			});
		});

		it("can apply a scheduled curve that starts with a setTargetAtTime", () => {
			let sig;
			return Offline((context) => {
				const signal = new Signal();
				sig = signal;
				signal.setTargetAtTime(2, 0, 0.2);
				const source = context.createConstantSource();
				source.start(0);
				connect(source, context.destination);
				return atTime(0.4, () => {
					signal.apply(source.offset);
				});
			}, 2).then(async (buffer) => {
				for (let time = 0.41; time < 2; time += 0.1) {
					expect(buffer.getValueAtTime(time)).to.be.closeTo(
						sig.getValueAtTime(time),
						0.05
					);
				}
				// document.body.appendChild(await Plot.signal(buffer));
			});
		});

		it("can apply a scheduled curve that starts with a setTargetAtTime and then schedules other things", () => {
			let sig;
			return Offline((context) => {
				const signal = new Signal();
				sig = signal;
				signal.setTargetAtTime(2, 0, 0.2);
				signal.setValueAtTime(1, 0.8);
				signal.linearRampToValueAtTime(0, 2);
				const source = context.createConstantSource();
				source.start(0);
				connect(source, context.destination);
				return atTime(0.4, () => {
					signal.apply(source.offset);
				});
			}, 2).then(async (buffer) => {
				for (let time = 0.41; time < 2; time += 0.1) {
					expect(buffer.getValueAtTime(time)).to.be.closeTo(
						sig.getValueAtTime(time),
						0.05
					);
				}
				// document.body.appendChild(await Plot.signal(buffer));
			});
		});

		it("can set the param if the Param is marked as swappable", () => {
			return Offline((context) => {
				const constSource = context.createConstantSource();
				const param = new Param({
					swappable: true,
					param: constSource.offset,
				});
				param.setValueAtTime(0.1, 0.1);
				param.setValueAtTime(0.2, 0.2);
				param.setValueAtTime(0.3, 0.3);
				const constSource2 = context.createConstantSource();
				constSource2.start(0);
				param.setParam(constSource2.offset);
				connect(constSource2, context.destination);
			}, 0.5).then((buffer) => {
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.1, 0.001);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(0.2, 0.001);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(0.3, 0.001);
			});
		});

		it("throws an error if the param is not set to swappable", () => {
			return Offline((context) => {
				const constSource = context.createConstantSource();
				const param = new Param({
					param: constSource.offset,
				});
				const constSource2 = context.createConstantSource();
				expect(() => {
					param.setParam(constSource2.offset);
				}).to.throw(Error);
			}, 0.5);
		});
	});

	context("Unit Conversions", () => {
		function testUnitConversion(
			units: UnitName,
			inputValue: any,
			inputVerification: number,
			outputValue: number
		): void {
			it(`converts to ${units}`, async () => {
				const testBuffer = await Offline(
					(context) => {
						const source = context.createConstantSource();
						source.connect(context.rawContext.destination);
						source.start(0);
						const param = new Param({
							context,
							param: source.offset,
							units,
						});
						param.value = inputValue;
						expect(param.value).to.be.closeTo(
							inputVerification,
							0.01
						);
					},
					0.001,
					1
				);
				expect(testBuffer.getValueAtTime(0)).to.be.closeTo(
					outputValue,
					0.01
				);
			});
		}

		testUnitConversion("number", 3, 3, 3);
		testUnitConversion("decibels", -10, -10, 0.31);
		testUnitConversion("decibels", -20, -20, 0.1);
		testUnitConversion("decibels", -100, -100, 0);
		testUnitConversion("gain", 1.2, 1.2, 1.2);
		testUnitConversion("positive", 1.5, 1.5, 1.5);
		testUnitConversion("positive", 0, 0, 0);
		testUnitConversion("time", 2, 2, 2);
		testUnitConversion("time", 0, 0, 0);
		testUnitConversion("frequency", 20, 20, 20);
		testUnitConversion("frequency", 0.1, 0.1, 0.1);
		testUnitConversion("normalRange", 0, 0, 0);
		testUnitConversion("normalRange", 0.5, 0.5, 0.5);
		testUnitConversion("normalRange", 1.5, 1, 1);
		testUnitConversion("audioRange", -1, -1, -1);
		testUnitConversion("audioRange", 0.5, 0.5, 0.5);
		testUnitConversion("audioRange", 1, 1, 1);
	});

	context("min/maxValue", () => {
		function testMinMaxValue(units: UnitName, min, max): void {
			it(`has proper min/max for ${units}`, () => {
				const source = audioContext.createConstantSource();
				source.connect(audioContext.rawContext.destination);
				const param = new Param({
					context: audioContext,
					param: source.offset,
					units,
				});
				expect(param.minValue).to.be.equal(min);
				expect(param.maxValue).to.be.equal(max);
			});
		}
		// number, decibels, normalRange, audioRange, gain
		// positive, time, frequency, transportTime, ticks, bpm, degrees, samples, hertz
		const rangeMax = 3.4028234663852886e38;
		testMinMaxValue("number", -rangeMax, rangeMax);
		testMinMaxValue("decibels", -Infinity, rangeMax);
		testMinMaxValue("normalRange", 0, 1);
		testMinMaxValue("audioRange", -1, 1);
		testMinMaxValue("gain", -rangeMax, rangeMax);
		testMinMaxValue("positive", 0, rangeMax);
		testMinMaxValue("time", 0, rangeMax);
		testMinMaxValue("frequency", 0, rangeMax);
		testMinMaxValue("transportTime", 0, rangeMax);
		testMinMaxValue("ticks", 0, rangeMax);
		testMinMaxValue("bpm", 0, rangeMax);
		testMinMaxValue("degrees", -rangeMax, rangeMax);
		testMinMaxValue("samples", 0, rangeMax);
		testMinMaxValue("hertz", 0, rangeMax);

		it("can pass in a min and max value", () => {
			const source = audioContext.createConstantSource();
			source.connect(audioContext.rawContext.destination);
			const param = new Param({
				context: audioContext,
				param: source.offset,
				minValue: 0.3,
				maxValue: 0.5,
			});
			expect(param.minValue).to.be.equal(0.3);
			expect(param.maxValue).to.be.equal(0.5);
		});
	});

	context("defaultValue", () => {
		it("has the right default value for default units", () => {
			const source = audioContext.createConstantSource();
			source.connect(audioContext.rawContext.destination);
			const param = new Param({
				context: audioContext,
				param: source.offset,
			});
			expect(param.defaultValue).to.be.equal(1);
		});

		it("has the right default value for default decibels", () => {
			const source = audioContext.createConstantSource();
			source.connect(audioContext.rawContext.destination);
			const param = new Param({
				context: audioContext,
				param: source.offset,
				units: "decibels",
			});
			expect(param.defaultValue).to.be.equal(0);
		});
	});

	// const allSchedulingMethods = ['setValueAtTime', 'linearRampToValueAtTime', 'exponentialRampToValueAtTime']

	context("setValueAtTime", () => {
		function testSetValueAtTime(
			units: UnitName,
			value0,
			value1,
			value2
		): void {
			it(`can schedule value with units ${units}`, async () => {
				const testBuffer = await Offline(
					(context) => {
						const source = context.createConstantSource();
						source.connect(context.rawContext.destination);
						source.start(0);
						const param = new Param({
							context,
							param: source.offset,
							units,
						});
						param.setValueAtTime(value0, 0);
						param.setValueAtTime(value1, 0.01);
						param.setValueAtTime(value2, 0.02);

						expect(param.getValueAtTime(0)).to.be.closeTo(
							value0,
							0.01
						);
						expect(param.getValueAtTime(0.01)).to.be.closeTo(
							value1,
							0.01
						);
						expect(param.getValueAtTime(0.02)).to.be.closeTo(
							value2,
							0.01
						);
					},
					0.022,
					1
				);
				expect(testBuffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(testBuffer.getValueAtTime(0.011)).to.be.closeTo(1, 0.01);
				expect(testBuffer.getValueAtTime(0.021)).to.be.closeTo(
					0.5,
					0.01
				);
			});
		}

		const allUnits: UnitName[] = [
			"number",
			"decibels",
			"normalRange",
			"audioRange",
			"gain",
			"positive",
			"time",
			"frequency",
			"transportTime",
			"ticks",
			"bpm",
			"degrees",
			"samples",
			"hertz",
		];

		allUnits.forEach((unit) => {
			if (unit === "decibels") {
				testSetValueAtTime(unit, -100, 0, -6);
			} else {
				testSetValueAtTime(unit, 0, 1, 0.5);
			}
		});
	});

	["linearRampToValueAtTime", "exponentialRampToValueAtTime"].forEach(
		(method) => {
			context(method, () => {
				function testRampToValueAtTime(
					units: UnitName,
					value0,
					value1,
					value2
				): void {
					it(`can schedule value with units ${units}`, async () => {
						const testBuffer = await Offline(
							(context) => {
								const source = context.createConstantSource();
								source.connect(context.rawContext.destination);
								source.start(0);
								const param = new Param({
									context,
									param: source.offset,
									units,
								});
								param.setValueAtTime(value0, 0);
								param[method](value1, 0.01);
								param[method](value2, 0.02);

								expect(param.getValueAtTime(0)).to.be.closeTo(
									value0,
									0.01
								);
								expect(
									param.getValueAtTime(0.01)
								).to.be.closeTo(value1, 0.01);
								expect(
									param.getValueAtTime(0.02)
								).to.be.closeTo(value2, 0.01);
							},
							0.022,
							1
						);
						expect(testBuffer.getValueAtTime(0)).to.be.closeTo(
							1,
							0.01
						);
						expect(testBuffer.getValueAtTime(0.01)).to.be.closeTo(
							0.7,
							0.01
						);
						expect(testBuffer.getValueAtTime(0.02)).to.be.closeTo(
							0,
							0.01
						);
					});
				}

				const allUnits: UnitName[] = [
					"number",
					"decibels",
					"normalRange",
					"audioRange",
					"gain",
					"positive",
					"time",
					"frequency",
					"transportTime",
					"ticks",
					"bpm",
					"degrees",
					"samples",
					"hertz",
				];

				allUnits.forEach((unit) => {
					if (unit === "decibels") {
						testRampToValueAtTime(unit, 0, -3, -100);
					} else {
						testRampToValueAtTime(unit, 1, 0.7, 0);
					}
				});
			});
		}
	);

	["linearRampTo", "exponentialRampTo", "rampTo", "targetRampTo"].forEach(
		(method) => {
			context(method, () => {
				function testRampToValueAtTime(
					units: UnitName,
					value0,
					value1,
					value2
				): void {
					it(`can schedule value with units ${units}`, async () => {
						const testBuffer = await Offline(
							(context) => {
								const source = context.createConstantSource();
								source.connect(context.rawContext.destination);
								source.start(0);
								const param = new Param({
									context,
									param: source.offset,
									units,
									value: value0,
								});
								param[method](value1, 0.009, 0);
								param[method](value2, 0.01, 0.01);

								expect(param.getValueAtTime(0)).to.be.closeTo(
									value0,
									0.02
								);
								expect(
									param.getValueAtTime(0.01)
								).to.be.closeTo(value1, 0.02);
								if (units !== "decibels") {
									expect(
										param.getValueAtTime(0.025)
									).to.be.closeTo(value2, 0.01);
								}
							},
							0.021,
							1
						);
						// document.body.appendChild(await Plot.signal(testBuffer));
						expect(testBuffer.getValueAtTime(0)).to.be.closeTo(
							1,
							0.01
						);
						expect(testBuffer.getValueAtTime(0.01)).to.be.closeTo(
							0.7,
							0.01
						);
						expect(testBuffer.getValueAtTime(0.02)).to.be.closeTo(
							0,
							0.01
						);
					});
				}

				const allUnits: UnitName[] = [
					"number",
					"decibels",
					"normalRange",
					"audioRange",
					"gain",
					"positive",
					"time",
					"frequency",
					"transportTime",
					"ticks",
					"bpm",
					"degrees",
					"samples",
					"hertz",
				];

				allUnits.forEach((unit) => {
					if (unit === "decibels") {
						testRampToValueAtTime(unit, 0, -3, -100);
					} else {
						testRampToValueAtTime(unit, 1, 0.7, 0);
					}
				});
			});
		}
	);
});
