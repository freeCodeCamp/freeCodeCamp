import { Follower } from "./Follower.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { Signal } from "../../signal/Signal.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { expect } from "chai";

describe("Follower", () => {
	BasicTests(Follower);

	context("Envelope Following", () => {
		it("handles getter/setter as Object", () => {
			const foll = new Follower();
			const values = {
				smoothing: 0.2,
			};
			foll.set(values);
			expect(foll.get()).to.have.keys(["smoothing"]);
			expect(foll.get().smoothing).to.be.closeTo(0.2, 0.001);
			foll.dispose();
		});

		it("can be constructed with an object", () => {
			const follower = new Follower({
				smoothing: 0.5,
			});
			expect(follower.smoothing).to.be.closeTo(0.5, 0.001);
			follower.dispose();
		});

		it("smooths the incoming signal at 0.1", () => {
			return Offline(() => {
				const foll = new Follower(0.1).toDestination();
				const sig = new Signal(0);
				sig.connect(foll);
				sig.setValueAtTime(1, 0.1);
				sig.setValueAtTime(0, 0.3);
			}, 0.41).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.0, 0.01);
				expect(buffer.getValueAtTime(0.15)).to.be.closeTo(0.95, 0.05);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.35)).to.be.closeTo(0.05, 0.05);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(0, 0.01);
			});
		});

		it("smooths the incoming signal at 0.05", () => {
			return Offline(() => {
				const foll = new Follower(0.05).toDestination();
				const sig = new Signal(0);
				sig.connect(foll);
				sig.setValueAtTime(1, 0.1);
				sig.setValueAtTime(0, 0.3);
			}, 0.41).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.0, 0.01);
				expect(buffer.getValueAtTime(0.125)).to.be.closeTo(0.95, 0.05);
				expect(buffer.getValueAtTime(0.15)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.325)).to.be.closeTo(0.05, 0.05);
				expect(buffer.getValueAtTime(0.35)).to.be.closeTo(0, 0.01);
			});
		});

		it("smooths the incoming signal at 0.2", () => {
			return Offline(() => {
				const foll = new Follower(0.2).toDestination();
				const sig = new Signal(0);
				sig.connect(foll);
				sig.setValueAtTime(1, 0.1);
				sig.setValueAtTime(0, 0.3);
			}, 0.51).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.0, 0.01);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(0.95, 0.05);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(0.05, 0.05);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0, 0.01);
			});
		});

		it("smooths the incoming signal at 0.5", () => {
			return Offline(() => {
				const foll = new Follower(0.5).toDestination();
				const sig = new Signal(0);
				sig.connect(foll);
				sig.setValueAtTime(1, 0.1);
				sig.setValueAtTime(0, 0.6);
			}, 1.11).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.0, 0.01);
				expect(buffer.getValueAtTime(0.35)).to.be.closeTo(0.95, 0.05);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.85)).to.be.closeTo(0.05, 0.05);
				expect(buffer.getValueAtTime(1.1)).to.be.closeTo(0, 0.01);
			});
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const follower = new Follower().toDestination();
				input.connect(follower);
			});
		});
	});
});
