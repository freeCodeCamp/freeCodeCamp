import { expect } from "chai";
import { connectFrom } from "../../../test/helper/Connect.js";
import { Recorder } from "./Recorder.js";
import { Context } from "../../core/context/Context.js";
import { ToneWithContext } from "../../core/context/ToneWithContext.js";
import { Synth } from "../../instrument/Synth.js";

describe("Recorder", () => {
	context("basic", () => {
		it("can be created and disposed", () => {
			const rec = new Recorder();
			rec.dispose();
		});

		it("handles input connections", () => {
			const rec = new Recorder();
			connectFrom().connect(rec);
			rec.dispose();
		});

		it("reports if it is supported or not", () => {
			expect(Recorder.supported).to.be.a("boolean");
		});

		it("can get the mime type", () => {
			const rec = new Recorder();
			expect(rec.mimeType).to.be.a("string");
			rec.dispose();
		});

		it("can set a different context", () => {
			const testContext = new Context();
			const rec = new Recorder({
				context: testContext,
			});
			for (const member in rec) {
				if (rec[member] instanceof ToneWithContext) {
					expect(rec[member].context, `member: ${member}`).to.equal(
						testContext
					);
				}
			}
			testContext.dispose();
			rec.dispose();
			return testContext.close();
		});
	});

	function wait(time) {
		return new Promise((done) => setTimeout(done, time));
	}

	context("start/stop/pause", () => {
		it("can be started", () => {
			const rec = new Recorder();
			rec.start();
			expect(rec.state).to.equal("started");
			rec.dispose();
		});

		it("can be paused after starting", async () => {
			const rec = new Recorder();
			rec.start();
			expect(rec.state).to.equal("started");
			await wait(100);
			rec.pause();
			expect(rec.state).to.equal("paused");
			rec.dispose();
		});

		it("can be resumed after pausing", async () => {
			const rec = new Recorder();
			rec.start();
			expect(rec.state).to.equal("started");
			await wait(100);
			rec.pause();
			expect(rec.state).to.equal("paused");
			await wait(100);
			rec.start();
			expect(rec.state).to.equal("started");
			rec.dispose();
		});

		it("can be stopped after starting", async () => {
			const rec = new Recorder();
			rec.start();
			expect(rec.state).to.equal("started");
			await wait(100);
			rec.stop();
			expect(rec.state).to.equal("stopped");
			rec.dispose();
		});

		it("throws an error if stopped or paused before starting", async () => {
			const rec = new Recorder();
			let didThrow = false;
			try {
				await rec.stop();
			} catch (e) {
				didThrow = true;
			}
			expect(didThrow).to.be.true;
			expect(() => {
				rec.pause();
			}).to.throw(Error);
			rec.dispose();
		});

		it("stop returns a blob", async () => {
			const rec = new Recorder();
			rec.start();
			await wait(100);
			const recording = await rec.stop();
			expect(recording).to.be.instanceOf(Blob);
			rec.dispose();
		});

		it("can record some sound", async () => {
			const rec = new Recorder();
			const synth = new Synth().connect(rec);
			rec.start();
			synth.triggerAttack("C3");
			await wait(200);
			const recording = await rec.stop();
			expect(recording.size).to.be.greaterThan(0);
			rec.dispose();
			synth.dispose();
		});
	});
});
