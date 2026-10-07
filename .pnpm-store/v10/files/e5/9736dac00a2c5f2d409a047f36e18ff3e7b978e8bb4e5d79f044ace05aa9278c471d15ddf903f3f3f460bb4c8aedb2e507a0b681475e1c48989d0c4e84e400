import { expect } from "chai";
import {
	dbToGain,
	equalPowerScale,
	gainToDb,
	intervalToFrequencyRatio,
} from "./Conversions.js";

describe("Conversions", () => {
	it("can convert equalPowerScale", () => {
		expect(equalPowerScale(0.5)).to.be.closeTo(0.707, 0.001);
		expect(equalPowerScale(0.75)).to.be.closeTo(0.923, 0.001);
	});

	it("can convert gain to db", () => {
		expect(gainToDb(0)).to.equal(-Infinity);
		expect(gainToDb(1)).is.closeTo(0, 0.1);
		expect(gainToDb(0.5)).is.closeTo(-6, 0.1);
	});

	it("can convert db to gain", () => {
		expect(dbToGain(0)).is.closeTo(1, 0.1);
		expect(dbToGain(-12)).is.closeTo(0.25, 0.1);
		expect(dbToGain(-24)).is.closeTo(0.125, 0.1);
	});

	it("can convert back and forth between db and gain representations", () => {
		expect(dbToGain(gainToDb(0))).is.closeTo(0, 0.01);
		expect(dbToGain(gainToDb(0.5))).is.closeTo(0.5, 0.01);
		expect(gainToDb(dbToGain(1))).is.closeTo(1, 0.01);
	});

	it("can convert semitone intervals to frequency ratios", () => {
		expect(intervalToFrequencyRatio(0)).to.equal(1);
		expect(intervalToFrequencyRatio(12)).to.equal(2);
		expect(intervalToFrequencyRatio(7)).to.be.closeTo(1.5, 0.01);
	});
});
