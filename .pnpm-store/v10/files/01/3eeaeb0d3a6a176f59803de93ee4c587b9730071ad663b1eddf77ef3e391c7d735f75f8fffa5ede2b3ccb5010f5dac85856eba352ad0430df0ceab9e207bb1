import { StereoWidener } from "./StereoWidener.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { ToneAudioBuffer } from "../core/context/ToneAudioBuffer.js";
import { Player } from "../source/buffer/Player.js";

describe("StereoWidener", () => {
	BasicTests(StereoWidener);
	EffectTests(StereoWidener, 0);

	it("matches a file basic", async () => {
		const buffer = await ToneAudioBuffer.fromUrl("./test/audio/FWDL.wav");
		return CompareToFile(
			() => {
				const phaser = new StereoWidener(0.1).toDestination();
				const player = new Player(buffer).connect(phaser).start();
			},
			"stereoWidener.wav",
			0.3
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const widener = new StereoWidener(0.2);
			expect(widener.width.value).to.be.closeTo(0.2, 0.001);
			widener.dispose();
		});

		it("can get/set the options", () => {
			const widener = new StereoWidener();
			widener.set({
				width: 0.4,
			});
			expect(widener.width.value).to.be.closeTo(0.4, 0.001);
			widener.dispose();
		});
	});
});
