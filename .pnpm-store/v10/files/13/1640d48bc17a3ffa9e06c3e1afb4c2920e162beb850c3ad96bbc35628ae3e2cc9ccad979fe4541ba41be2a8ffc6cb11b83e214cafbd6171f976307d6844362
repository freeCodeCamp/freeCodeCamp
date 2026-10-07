import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Offline, whenBetween } from "../../test/helper/Offline.js";
import { ToneConstantSource } from "./ToneConstantSource.js";

describe("ToneConstantSource", () => {
	BasicTests(ToneConstantSource);

	context("Constructor", () => {
		it("can be constructed with an offset", () => {
			const source = new ToneConstantSource(330);
			expect(source.offset.value).to.equal(330);
			source.dispose();
		});

		it("can be constructed with no arguments", () => {
			const source = new ToneConstantSource();
			expect(source.offset.value).to.equal(1);
			source.dispose();
		});

		it("can be constructed with an options object", () => {
			const source = new ToneConstantSource({
				offset: 2,
			});
			expect(source.offset.value).to.be.closeTo(2, 0.01);
			source.dispose();
		});
	});

	context("onended", () => {
		it("invokes the onended callback in the online context", (done) => {
			const source = new ToneConstantSource();
			source.start();
			source.stop("+0.3");
			const now = source.now();
			source.onended = () => {
				expect(source.now() - now).to.be.within(0.25, 0.5);
				source.dispose();
				done();
			};
		});

		it("invokes the onended callback only once in the online context", (done) => {
			const source = new ToneConstantSource();
			source.start();
			source.stop("+0.1");
			source.stop("+0.2");
			source.stop("+0.3");
			const now = source.now();
			source.onended = () => {
				expect(source.now() - now).to.be.within(0.25, 0.5);
				source.dispose();
				done();
			};
		});

		it("invokes the onended callback in the offline context", () => {
			let wasInvoked = false;
			return Offline(() => {
				const source = new ToneConstantSource();
				source.start(0);
				source.stop(0.2);
				source.onended = () => {
					expect(source.now() - 0.2).to.be.closeTo(0, 0.05);
					source.dispose();
					wasInvoked = true;
				};
			}, 0.3).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});

		it("invokes the onended callback only once in offline context", () => {
			let wasInvoked = false;
			return Offline(() => {
				const source = new ToneConstantSource();
				source.start(0);
				source.stop(0.1);
				source.stop(0.2);
				source.stop(0.3);
				source.onended = () => {
					expect(source.now() - 0.3).to.be.closeTo(0, 0.05);
					source.dispose();
					expect(wasInvoked).to.equal(false);
					wasInvoked = true;
				};
			}, 0.4).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});
	});

	context("Scheduling", () => {
		it("throw an error if start is called multiple time", () => {
			const source = new ToneConstantSource();
			source.start();
			expect(() => {
				source.start();
			}).to.throw();
			source.dispose();
		});

		it("can play for a specific duration", () => {
			return Offline(() => {
				const source = new ToneConstantSource().toDestination();
				source.start(0).stop(0.1);
			}, 0.4).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.above(0);
				expect(buffer.getValueAtTime(0.09)).to.be.above(0);
				expect(buffer.getValueAtTime(0.1)).to.equal(0);
			});
		});

		it("can call stop multiple times and takes the last value", () => {
			return Offline(() => {
				const source = new ToneConstantSource().toDestination();
				source.start(0).stop(0.1).stop(0.2);
			}, 0.4).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.above(0);
				expect(buffer.getValueAtTime(0.1)).to.be.above(0);
				expect(buffer.getValueAtTime(0.19)).to.be.above(0);
				expect(buffer.getValueAtTime(0.2)).to.equal(0);
			});
		});

		it("clamps start time to the currentTime", () => {
			const source = new ToneConstantSource();
			source.start(0);
			const currentTime = source.context.currentTime;
			expect(source.getStateAtTime(0)).to.equal("stopped");
			expect(source.getStateAtTime(currentTime)).to.equal("started");
			source.dispose();
		});

		it("clamps stop time to the currentTime", (done) => {
			const source = new ToneConstantSource();
			source.start(0);
			let currentTime = source.context.currentTime;
			expect(source.getStateAtTime(0)).to.equal("stopped");
			expect(source.getStateAtTime(currentTime)).to.equal("started");
			setTimeout(() => {
				currentTime = source.now();
				source.stop(0);
				expect(source.getStateAtTime(currentTime + 0.01)).to.equal(
					"stopped"
				);
				source.dispose();
				done();
			}, 100);
		});
	});

	context("State", () => {
		it("reports the right state", () => {
			return Offline(() => {
				const source = new ToneConstantSource();
				source.start(0);
				source.stop(0.05);
				return (time) => {
					whenBetween(time, 0, 0.05, () => {
						expect(source.state).to.equal("started");
					});
					whenBetween(time, 0.05, 0.1, () => {
						expect(source.state).to.equal("stopped");
					});
				};
			}, 0.1);
		});

		it("can call stop multiple times, takes the last value", () => {
			return Offline(() => {
				const source = new ToneConstantSource();
				source.start(0);
				source.stop(0.05);
				source.stop(0.1);
				return (time) => {
					whenBetween(time, 0, 0.1, () => {
						expect(source.state).to.equal("started");
					});
					whenBetween(time, 0.1, 0.2, () => {
						expect(source.state).to.equal("stopped");
					});
				};
			}, 0.2);
		});
	});
});
