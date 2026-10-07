import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { ConstantOutput } from "../../../test/helper/ConstantOutput.js";
import { Signal } from "../../signal/Signal.js";
import { Solo } from "./Solo.js";

describe("Solo", () => {
	BasicTests(Solo);

	context("Soloing", () => {
		it("can be soloed an unsoloed", () => {
			const sol = new Solo();
			sol.solo = true;
			expect(sol.solo).to.be.true;
			sol.solo = false;
			expect(sol.solo).to.be.false;
			sol.dispose();
		});

		it("can be passed into the constructor", () => {
			const sol = new Solo(true);
			expect(sol.solo).to.be.true;
			sol.dispose();
		});

		it("can be passed into the constructor with an object", () => {
			const sol = new Solo({ solo: true });
			expect(sol.solo).to.be.true;
			sol.dispose();
		});

		it("other instances are unsoloed when one is soloed", () => {
			const solA = new Solo();
			const solB = new Solo();
			solA.solo = true;
			solB.solo = false;
			expect(solA.solo).to.be.true;
			expect(solB.solo).to.be.false;
			solB.solo = true;
			expect(solA.solo).to.be.true;
			expect(solB.solo).to.be.true;
			solA.solo = false;
			expect(solA.solo).to.be.false;
			expect(solB.solo).to.be.true;
			solA.dispose();
			solB.dispose();
		});

		it("other instances report themselves as muted", () => {
			const solA = new Solo();
			const solB = new Solo();
			solA.solo = true;
			solB.solo = false;
			expect(solA.muted).to.be.false;
			expect(solB.muted).to.be.true;
			solA.dispose();
			solB.dispose();
		});

		it("all instances are unmuted when there is no solo", () => {
			const solA = new Solo();
			const solB = new Solo();
			solA.solo = true;
			solB.solo = false;
			solA.solo = false;
			expect(solA.muted).to.be.false;
			expect(solB.muted).to.be.false;
			solA.dispose();
			solB.dispose();
		});

		it("a newly created instance will be muted if there is already a soloed instance", () => {
			const solA = new Solo(true);
			const solB = new Solo();
			expect(solA.muted).to.be.false;
			expect(solB.muted).to.be.true;
			solA.dispose();
			solB.dispose();
		});

		it("passes both signals when nothing is soloed", () => {
			return ConstantOutput(
				() => {
					const soloA = new Solo().toDestination();
					const soloB = new Solo().toDestination();
					new Signal(10).connect(soloA);
					new Signal(20).connect(soloB);
				},
				30,
				0.01
			);
		});

		it("passes one signal when it is soloed", () => {
			return ConstantOutput(
				() => {
					const soloA = new Solo().toDestination();
					const soloB = new Solo().toDestination();
					new Signal(10).connect(soloA);
					new Signal(20).connect(soloB);
					soloA.solo = true;
				},
				10,
				0.01
			);
		});

		it("can solo multiple at once", () => {
			return ConstantOutput(
				() => {
					const soloA = new Solo().toDestination();
					const soloB = new Solo().toDestination();
					new Signal(10).connect(soloA);
					new Signal(20).connect(soloB);
					soloA.solo = true;
					soloB.solo = true;
				},
				30,
				0.01
			);
		});

		it("can unsolo all", () => {
			return ConstantOutput(
				() => {
					const soloA = new Solo().toDestination();
					const soloB = new Solo().toDestination();
					new Signal(10).connect(soloA);
					new Signal(20).connect(soloB);
					soloA.solo = true;
					soloB.solo = true;
					soloA.solo = false;
					soloB.solo = false;
				},
				30,
				0.01
			);
		});

		it("can solo and unsolo while keeping previous soloed", () => {
			return ConstantOutput(
				() => {
					const soloA = new Solo().toDestination();
					const soloB = new Solo().toDestination();
					new Signal(10).connect(soloA);
					new Signal(20).connect(soloB);
					soloA.solo = true;
					soloB.solo = true;
					soloB.solo = false;
				},
				10,
				0.01
			);
		});
	});
});
