import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { Offline } from "../../../test/helper/Offline.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Signal } from "../../signal/Signal.js";
import { Volume } from "./Volume.js";

describe("Volume", () => {
	BasicTests(Volume);

	context("Volume", () => {
		it("handles input and output connections", () => {
			const vol = new Volume();
			vol.connect(connectTo());
			connectFrom().connect(vol);
			connectFrom().connect(vol.volume);
			vol.dispose();
		});

		it("can be constructed with volume value", () => {
			const vol = new Volume(-12);
			expect(vol.volume.value).to.be.closeTo(-12, 0.1);
			vol.dispose();
		});

		it("can be constructed with an options object", () => {
			const vol = new Volume({
				volume: 2,
			});
			expect(vol.volume.value).to.be.closeTo(2, 0.1);
			vol.dispose();
		});

		it("can be constructed with an options object and muted", () => {
			const vol = new Volume({
				mute: true,
			});
			expect(vol.mute).to.equal(true);
			vol.dispose();
		});

		it("can set/get with an object", () => {
			const vol = new Volume();
			vol.set({
				volume: -10,
			});
			expect(vol.get().volume).to.be.closeTo(-10, 0.1);
			vol.dispose();
		});

		it("unmuting returns to previous volume", () => {
			const vol = new Volume(-10);
			vol.mute = true;
			expect(vol.mute).to.equal(true);
			expect(vol.volume.value).to.equal(-Infinity);
			vol.mute = false;
			// returns the volume to what it was
			expect(vol.volume.value).to.be.closeTo(-10, 0.1);
			vol.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const vol = new Volume().toDestination();
				input.connect(vol);
			});
		});

		it.skip("passes the incoming stereo signal through", () => {
			// return PassAudioStereo(function(input) {
			// 	const vol = new Volume().toDestination();
			// 	input.connect(vol);
			// });
		});

		it("can lower the volume", () => {
			return Offline(() => {
				const vol = new Volume(-10).toDestination();
				new Signal(1).connect(vol);
			}).then((buffer) => {
				expect(buffer.value()).to.be.closeTo(0.315, 0.01);
			});
		});

		it("can mute the volume", () => {
			return Offline(() => {
				const vol = new Volume(0).toDestination();
				new Signal(1).connect(vol);
				vol.mute = true;
			}).then((buffer) => {
				expect(buffer.isSilent()).to.equal(true);
			});
		});

		it("muted when volume is set to -Infinity", () => {
			return Offline(() => {
				const vol = new Volume(-Infinity).toDestination();
				new Signal(1).connect(vol);
				expect(vol.mute).to.equal(true);
			}).then((buffer) => {
				expect(buffer.isSilent()).to.equal(true);
			});
		});

		it("setting the volume unmutes it and reports itself as unmuted", () => {
			const vol = new Volume(0).toDestination();
			vol.mute = true;
			expect(vol.mute).to.equal(true);
			vol.volume.value = 0;
			expect(vol.mute).is.equal(false);
			vol.dispose();
		});

		it("multiple calls to mute still return the vol to the original", () => {
			const vol = new Volume(-20);
			vol.mute = true;
			vol.mute = true;
			expect(vol.mute).to.equal(true);
			expect(vol.volume.value).to.equal(-Infinity);
			vol.mute = false;
			vol.mute = false;
			expect(vol.volume.value).to.be.closeTo(-20, 0.5);
			vol.dispose();
		});
	});
});
