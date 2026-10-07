import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { StereoSignal } from "../../../test/helper/StereoSignal.js";
import { Signal } from "../../signal/Signal.js";
import { Mono } from "./Mono.js";

describe("Mono", () => {
	BasicTests(Mono);

	context("Mono", () => {
		it("Makes a mono signal in both channels", () => {
			return Offline(
				() => {
					const mono = new Mono().toDestination();
					const signal = new Signal(2).connect(mono);
				},
				0.1,
				2
			).then((buffer) => {
				expect(buffer.toArray()[0][0]).to.equal(2);
				expect(buffer.toArray()[1][0]).to.equal(2);
				expect(buffer.toArray()[0][100]).to.equal(2);
				expect(buffer.toArray()[1][100]).to.equal(2);
				expect(buffer.toArray()[0][1000]).to.equal(2);
				expect(buffer.toArray()[1][1000]).to.equal(2);
			});
		});

		it("Sums a stereo signal into a mono signal", () => {
			return Offline(
				() => {
					const mono = new Mono().toDestination();
					const signal = StereoSignal(2, 2).connect(mono);
				},
				0.1,
				2
			).then((buffer) => {
				expect(buffer.toArray()[0][0]).to.equal(2);
				expect(buffer.toArray()[1][0]).to.equal(2);
				expect(buffer.toArray()[0][100]).to.equal(2);
				expect(buffer.toArray()[1][100]).to.equal(2);
				expect(buffer.toArray()[0][1000]).to.equal(2);
				expect(buffer.toArray()[1][1000]).to.equal(2);
			});
		});
	});
});
