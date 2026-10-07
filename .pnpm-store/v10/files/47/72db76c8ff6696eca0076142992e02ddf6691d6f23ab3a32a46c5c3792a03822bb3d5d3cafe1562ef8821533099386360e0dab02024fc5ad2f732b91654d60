import { Channel } from "./Channel.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Signal } from "../../signal/Signal.js";
import { Offline } from "../../../test/helper/Offline.js";
import { expect } from "chai";

describe("Channel", () => {
	BasicTests(Channel);

	context("Channel", () => {
		it("can pass volume and panning into the constructor", () => {
			const channel = new Channel(-10, -1);
			expect(channel.pan.value).to.be.closeTo(-1, 0.01);
			expect(channel.volume.value).to.be.closeTo(-10, 0.01);
			channel.dispose();
		});

		it("can pass in an object into the constructor", () => {
			const channel = new Channel({
				pan: 1,
				volume: 6,
				mute: false,
				solo: true,
			});
			expect(channel.pan.value).to.be.closeTo(1, 0.01);
			expect(channel.volume.value).to.be.closeTo(6, 0.01);
			expect(channel.mute).to.be.false;
			expect(channel.solo).to.be.true;
			channel.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const channel = new Channel().toDestination();
				input.connect(channel);
			});
		});

		it("can mute the input", () => {
			return Offline(() => {
				const channel = new Channel(0).toDestination();
				new Signal(1).connect(channel);
				channel.mute = true;
			}).then((buffer) => {
				expect(buffer.isSilent()).to.be.true;
			});
		});

		it("reports itself as muted when either muted or another channel is soloed", () => {
			const channelA = new Channel();
			const channelB = new Channel();
			channelB.solo = true;
			expect(channelA.muted).to.be.true;
			expect(channelB.muted).to.be.false;
			channelB.mute = true;
			expect(channelA.muted).to.be.true;
			expect(channelB.muted).to.be.true;
			channelA.dispose();
			channelB.dispose();
		});

		describe("bus", () => {
			it("can connect two channels together by name", () => {
				return PassAudio((input) => {
					const sendChannel = new Channel();
					input.connect(sendChannel);
					sendChannel.send("test");
					const recvChannel = new Channel().toDestination();
					recvChannel.receive("test");
				});
			});
		});
	});
});
