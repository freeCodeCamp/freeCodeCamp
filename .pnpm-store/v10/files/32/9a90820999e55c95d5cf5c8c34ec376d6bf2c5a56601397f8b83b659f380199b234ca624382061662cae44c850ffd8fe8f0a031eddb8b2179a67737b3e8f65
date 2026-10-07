import { expect } from "chai";
import { ConstantOutput } from "../../../test/helper/ConstantOutput.js";
import { Offline } from "../../../test/helper/Offline.js";
import { TransportClass } from "../clock/Transport.js";
import { getContext } from "../Global.js";
import { createAudioContext } from "./AudioContext.js";
import { Context } from "./Context.js";
import { DestinationClass } from "./Destination.js";
import { ListenerClass } from "./Listener.js";
import { DrawClass } from "../util/Draw.js";
import { connect } from "./ToneAudioNode.js";

describe("Context", () => {
	it("creates and disposes the classes attached to the context", async () => {
		const ac = createAudioContext();
		const context = new Context(ac);
		const ctxDest = context.destination;
		const ctxDraw = context.draw;
		const ctxTransport = context.transport;
		const ctxListener = context.listener;
		expect(context.destination).is.instanceOf(DestinationClass);
		expect(context.draw).is.instanceOf(DrawClass);
		expect(context.listener).is.instanceOf(ListenerClass);
		await context.close();
		expect(ctxDest.disposed).to.be.true;
		expect(ctxDraw.disposed).to.be.true;
		expect(ctxTransport.disposed).to.be.true;
		expect(ctxListener.disposed).to.be.true;
		context.dispose();
	});

	context("AudioContext", () => {
		it("extends the AudioContext methods", () => {
			const ctx = new Context(createAudioContext());
			expect(ctx).to.have.property("createGain");
			expect(ctx.createGain()).to.have.property("gain");
			expect(ctx).to.have.property("createOscillator");
			expect(ctx.createOscillator()).to.be.have.property("frequency");
			expect(ctx).to.have.property("createDelay");
			expect(ctx.createDelay()).to.be.have.property("delayTime");
			expect(ctx).to.have.property("createConstantSource");
			ctx.dispose();
			return ctx.close();
		});

		it("can be stringified", () => {
			const ctx = new Context(createAudioContext());
			expect(JSON.stringify(ctx)).to.equal("{}");
			ctx.dispose();
			return ctx.close();
		});

		it("clock is running", (done) => {
			const interval = setInterval(() => {
				if (getContext().currentTime > 0.5) {
					clearInterval(interval);
					done();
				}
			}, 20);
		});

		it("has a rawContext", () => {
			const ctx = new Context(createAudioContext());
			expect(ctx.rawContext).has.property("destination");
			expect(ctx.rawContext).has.property("sampleRate");
			ctx.dispose();
			return ctx.close();
		});

		it("can be constructed with an options object", () => {
			const ctx = new Context({
				clockSource: "timeout",
				latencyHint: "playback",
				lookAhead: 0.2,
				updateInterval: 0.1,
			});
			expect(ctx.lookAhead).to.equal(0.2);
			expect(ctx.updateInterval).to.equal(0.1);
			expect(ctx.latencyHint).to.equal("playback");
			expect(ctx.clockSource).to.equal("timeout");
			ctx.dispose();
			return ctx.close();
		});

		it("returns 'now' and 'immediate' time", () => {
			const ctx = new Context();
			expect(ctx.now()).to.be.a("number");
			expect(ctx.immediate()).to.be.a("number");
			ctx.dispose();
			return ctx.close();
		});
	});

	context("state", () => {
		it("can suspend and resume the state", async () => {
			const ac = createAudioContext();
			const context = new Context(ac);
			expect(context.rawContext).to.equal(ac);
			await ac.suspend();
			expect(context.state).to.equal("suspended");
			await context.resume();
			expect(context.state).to.equal("running");
			context.dispose();
			return context.close();
		});

		it("invokes the statechange event", async () => {
			const ac = createAudioContext();
			const context = new Context(ac);
			let triggerChange = false;
			context.on("statechange", (state) => {
				if (!triggerChange) {
					triggerChange = true;
					expect(state).to.equal("running");
				}
			});
			await context.resume();
			await new Promise<void>((done) => setTimeout(() => done(), 10));
			expect(triggerChange).to.equal(true);
			return context.dispose();
		});
	});

	context("clockSource", () => {
		let ctx;
		beforeEach(() => {
			ctx = new Context();
			return ctx.resume();
		});

		afterEach(() => {
			ctx.dispose();
			return ctx.close();
		});

		it("defaults to 'worker'", () => {
			expect(ctx.clockSource).to.equal("worker");
		});

		it("provides callback", (done) => {
			expect(ctx.clockSource).to.equal("worker");
			ctx.setTimeout(() => {
				done();
			}, 0.1);
		});

		it("can be set to 'timeout'", (done) => {
			ctx.clockSource = "timeout";
			expect(ctx.clockSource).to.equal("timeout");
			ctx.setTimeout(() => {
				done();
			}, 0.1);
		});

		it("can be set to 'offline'", (done) => {
			ctx.clockSource = "offline";
			expect(ctx.clockSource).to.equal("offline");
			// provides no callback
			ctx.setTimeout(() => {
				throw new Error("shouldn't be called");
			}, 0.1);
			setTimeout(() => {
				done();
			}, 200);
		});
	});
	context("setTimeout", () => {
		let ctx;
		beforeEach(() => {
			ctx = new Context();
			return ctx.resume();
		});

		afterEach(() => {
			ctx.dispose();
			return ctx.close();
		});

		it("can set a timeout", (done) => {
			ctx.setTimeout(() => {
				done();
			}, 0.1);
		});

		it("returns an id", () => {
			expect(ctx.setTimeout(() => {}, 0.1)).to.be.a("number");
			// try clearing a random ID, shouldn't cause any errors
			ctx.clearTimeout(-2);
		});

		it("timeout is not invoked when cancelled", (done) => {
			const id = ctx.setTimeout(() => {
				throw new Error("shouldn't be invoked");
			}, 0.01);
			ctx.clearTimeout(id);
			ctx.setTimeout(() => {
				done();
			}, 0.02);
		});

		it("order is maintained", (done) => {
			let wasInvoked = false;
			ctx.setTimeout(() => {
				expect(wasInvoked).to.equal(true);
				done();
			}, 0.02);
			ctx.setTimeout(() => {
				wasInvoked = true;
			}, 0.01);
		});

		it("is invoked in the offline context", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.context.setTimeout(() => {
					expect(transport.now()).to.be.closeTo(0.01, 0.005);
				}, 0.01);
			}, 0.05);
		});

		it("is robust against altering the timeline within the callback fn", (done) => {
			let invokeCount = 0;
			function checkDone(id: number) {
				// clearing the current event alters the timeline and should not cause an issue
				ctx.clearTimeout(id);
				invokeCount++;
				if (invokeCount === 3) {
					done();
				}
			}
			const id0 = ctx.setTimeout(() => checkDone(id0), 0.01);
			const id1 = ctx.setTimeout(() => checkDone(id1), 0.01);
			const id2 = ctx.setTimeout(() => checkDone(id2), 0.01);
		});
	});

	context("setInterval", () => {
		let ctx;
		beforeEach(() => {
			ctx = new Context();
			return ctx.resume();
		});

		afterEach(() => {
			ctx.dispose();
			return ctx.close();
		});

		it("can set an interval", (done) => {
			ctx.setInterval(() => {
				done();
			}, 0.1);
		});

		it("returns an id", () => {
			expect(ctx.setInterval(() => {}, 0.1)).to.be.a("number");
			// try clearing a random ID, shouldn't cause any errors
			ctx.clearInterval(-2);
		});

		it("timeout is not invoked when cancelled", (done) => {
			const id = ctx.setInterval(() => {
				throw new Error("shouldn't be invoked");
			}, 0.01);
			ctx.clearInterval(id);
			ctx.setInterval(() => {
				done();
			}, 0.02);
		});

		it("order is maintained", (done) => {
			let wasInvoked = false;
			ctx.setInterval(() => {
				expect(wasInvoked).to.equal(true);
				done();
			}, 0.02);
			ctx.setInterval(() => {
				wasInvoked = true;
			}, 0.01);
		});

		it("is invoked in the offline context", () => {
			let invocationCount = 0;
			return Offline((context) => {
				context.setInterval(() => {
					invocationCount++;
				}, 0.01);
			}, 0.051).then(() => {
				expect(invocationCount).to.equal(4);
			});
		});

		it("is invoked in with the right interval", () => {
			let numberOfInvocations = 0;
			return Offline((context) => {
				let intervalTime = context.now();
				context.setInterval(() => {
					expect(context.now() - intervalTime).to.be.closeTo(
						0.01,
						0.005
					);
					intervalTime = context.now();
					numberOfInvocations++;
				}, 0.01);
			}, 0.051).then(() => {
				expect(numberOfInvocations).to.equal(4);
			});
		});
	});

	context("get/set", () => {
		let ctx;
		beforeEach(() => {
			ctx = new Context();
			return ctx.resume();
		});

		afterEach(() => {
			ctx.dispose();
			return ctx.close();
		});

		it("can set the lookAhead", () => {
			ctx.lookAhead = 0.05;
			expect(ctx.lookAhead).to.equal(0.05);
		});

		it("can set the updateInterval", () => {
			ctx.updateInterval = 0.05;
			expect(ctx.updateInterval).to.equal(0.05);
		});

		it("gets a constant signal", () => {
			return ConstantOutput((context) => {
				const bufferSrc = context.getConstant(1);
				connect(bufferSrc, context.destination);
			}, 1);
		});

		it("multiple calls return the same buffer source", () => {
			const bufferA = ctx.getConstant(2);
			const bufferB = ctx.getConstant(2);
			expect(bufferA).to.equal(bufferB);
		});
	});

	context("Methods", () => {
		let ctx;
		beforeEach(() => {
			ctx = new Context();
			return ctx.resume();
		});

		afterEach(() => {
			ctx.dispose();
			return ctx.close();
		});

		it("can create a MediaElementAudioSourceNode", () => {
			const audioNode = document.createElement("audio");
			const node = ctx.createMediaElementSource(audioNode);
			expect(node).is.not.undefined;
		});
	});
});
