import { Phaser } from "./Phaser.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { ToneAudioBuffer } from "../core/index.js";
import { Player } from "../source/buffer/Player.js";

describe("Phaser", () => {
	BasicTests(Phaser);
	EffectTests(Phaser);

	it("matches a file basic", async () => {
		const buffer = await ToneAudioBuffer.fromUrl("./test/audio/FWDL.wav");
		return CompareToFile(
			() => {
				const phaser = new Phaser(2, 6, 200).toDestination();
				const player = new Player(buffer).connect(phaser).start();
			},
			"phaser.wav",
			0.1
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const phaser = new Phaser({
				frequency: 0.2,
			});
			expect(phaser.frequency.value).to.be.closeTo(0.2, 0.01);
			phaser.dispose();
		});

		it("can get/set the options", () => {
			const phaser = new Phaser();
			phaser.set({
				octaves: 0.21,
				baseFrequency: 300,
			});
			expect(phaser.get().baseFrequency).to.be.closeTo(300, 0.01);
			expect(phaser.get().octaves).to.be.closeTo(0.21, 0.01);
			phaser.dispose();
		});
	});
});
