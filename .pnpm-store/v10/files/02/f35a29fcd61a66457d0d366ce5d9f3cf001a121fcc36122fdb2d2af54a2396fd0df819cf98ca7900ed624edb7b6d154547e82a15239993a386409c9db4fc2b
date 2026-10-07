import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Signal } from "../../signal/Signal.js";
import { PanVol } from "./PanVol.js";

describe("PanVol", () => {
	BasicTests(PanVol);

	context("Pan and Volume", () => {
		it("can be constructed with the panning and volume value", () => {
			const panVol = new PanVol(0.3, -12);
			expect(panVol.pan.value).to.be.closeTo(0.3, 0.001);
			expect(panVol.volume.value).to.be.closeTo(-12, 0.1);
			panVol.dispose();
		});

		it("can be constructed with an options object", () => {
			const panVol = new PanVol({
				mute: true,
				pan: 0.2,
			});
			expect(panVol.pan.value).to.be.closeTo(0.2, 0.001);
			expect(panVol.mute).to.be.true;
			panVol.dispose();
		});

		it("can set/get with an object", () => {
			const panVol = new PanVol();
			panVol.set({
				volume: -10,
			});
			expect(panVol.get().volume).to.be.closeTo(-10, 0.1);
			panVol.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const panVol = new PanVol().toDestination();
				input.connect(panVol);
			});
		});

		it("can mute the volume", () => {
			return Offline(() => {
				const vol = new PanVol(0).toDestination();
				new Signal(1).connect(vol);
				vol.mute = true;
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.true;
			});
		});
	});
});
