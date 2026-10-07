import { expect } from "chai";
import { warns } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Oscillator } from "../../source/oscillator/Oscillator.js";
import { getContext } from "../Global.js";
import { DestinationClass } from "./Destination.js";

describe("Destination", () => {
	it("creates itself on the context", () => {
		expect(getContext().destination).instanceOf(DestinationClass);
	});

	it("can be muted and unmuted", () => {
		return Offline((context) => {
			context.destination.mute = false;
			expect(context.destination.mute).to.equal(false);
			context.destination.mute = true;
			expect(context.destination.mute).to.equal(true);
		});
	});

	it("passes audio through", () => {
		return PassAudio((input) => {
			input.toDestination();
		});
	});

	it("passes no audio when muted", () => {
		return Offline((context) => {
			new Oscillator().toDestination().start(0);
			context.destination.mute = true;
		}).then((buffer) => {
			expect(buffer.isSilent()).to.equal(true);
		});
	});

	it("has a master volume control", () => {
		return Offline((context) => {
			context.destination.volume.value = -20;
			expect(context.destination.volume.value).to.be.closeTo(-20, 0.1);
		});
	});

	it("warns when toMaster is called", () => {
		warns(() => {
			const osc = new Oscillator().toMaster();
			osc.dispose();
		});
	});

	it("can get the maxChannelCount", () => {
		return Offline(
			(context) => {
				expect(context.destination.maxChannelCount).to.equal(4);
			},
			0.1,
			4
		);
	});

	it("can set the audio channel configuration", () => {
		return Offline(
			(context) => {
				expect(context.destination.channelCount).to.equal(4);
				context.destination.channelCountMode = "explicit";
				context.destination.channelInterpretation = "discrete";
				expect(context.destination.channelCountMode).to.equal(
					"explicit"
				);
				expect(context.destination.channelInterpretation).to.equal(
					"discrete"
				);
			},
			0.1,
			4
		);
	});

	it("can pass audio through chained nodes", () => {
		return PassAudio((input) => {
			const gain = input.context.createGain();
			input.connect(gain);
			input.context.destination.chain(gain);
		});
	});
});
