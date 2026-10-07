import { expect } from "chai";
import { PatternGenerator } from "./PatternGenerator.js";

describe("PatternGenerator", () => {
	function getArrayValues(gen: Iterator<any>, length: number): any[] {
		const ret: any[] = [];
		for (let i = 0; i < length; i++) {
			ret.push(gen.next().value);
		}
		return ret;
	}

	context("API", () => {
		it("can be constructed with an number and type", () => {
			const pattern = PatternGenerator(4, "down");
			expect(getArrayValues(pattern, 10)).to.deep.equal([
				3, 2, 1, 0, 3, 2, 1, 0, 3, 2,
			]);
		});

		it("throws an error with a number less than 1", () => {
			expect(() => {
				const pattern = PatternGenerator(0);
				pattern.next();
			}).to.throw(Error);
		});
	});

	context("Patterns", () => {
		it("does the up pattern", () => {
			const pattern = PatternGenerator(4, "up");
			expect(getArrayValues(pattern, 6)).to.deep.equal([
				0, 1, 2, 3, 0, 1,
			]);
		});

		it("does the down pattern", () => {
			const pattern = PatternGenerator(4, "down");
			expect(getArrayValues(pattern, 6)).to.deep.equal([
				3, 2, 1, 0, 3, 2,
			]);
		});

		it("does the upDown pattern", () => {
			const pattern = PatternGenerator(4, "upDown");
			expect(getArrayValues(pattern, 10)).to.deep.equal([
				0, 1, 2, 3, 2, 1, 0, 1, 2, 3,
			]);
		});

		it("does the downUp pattern", () => {
			const pattern = PatternGenerator(4, "downUp");
			expect(getArrayValues(pattern, 10)).to.deep.equal([
				3, 2, 1, 0, 1, 2, 3, 2, 1, 0,
			]);
		});

		it("does the alternateUp pattern", () => {
			const pattern = PatternGenerator(5, "alternateUp");
			expect(getArrayValues(pattern, 10)).to.deep.equal([
				0, 2, 1, 3, 2, 4, 3, 0, 2, 1,
			]);
		});

		it("does the alternateDown pattern", () => {
			const pattern = PatternGenerator(5, "alternateDown");
			expect(getArrayValues(pattern, 10)).to.deep.equal([
				4, 2, 3, 1, 2, 0, 1, 4, 2, 3,
			]);
		});

		it("outputs random elements from the values", () => {
			const numValues = 5;
			const pattern = PatternGenerator(numValues, "random");
			for (let i = 0; i < 10; i++) {
				expect(pattern.next().value)
					.to.be.at.least(0)
					.and.at.most(numValues - 1);
			}
		});

		it("does randomOnce pattern", () => {
			const pattern = PatternGenerator(5, "randomOnce");
			expect(getArrayValues(pattern, 10).sort()).to.deep.equal([
				0, 0, 1, 1, 2, 2, 3, 3, 4, 4,
			]);
		});

		it("randomly walks up or down 1 step without repeating", () => {
			const values = [0, 1, 2, 3, 4];
			const pattern = PatternGenerator(5, "randomWalk");
			let currentIndex = pattern.next().value;
			for (let i = 0; i < 10; i++) {
				const nextIndex = pattern.next().value;
				expect(currentIndex).to.not.equal(nextIndex);
				// change always equals 1
				expect(Math.abs(currentIndex - nextIndex)).to.equal(1);
				currentIndex = nextIndex;
			}
		});
	});
});
