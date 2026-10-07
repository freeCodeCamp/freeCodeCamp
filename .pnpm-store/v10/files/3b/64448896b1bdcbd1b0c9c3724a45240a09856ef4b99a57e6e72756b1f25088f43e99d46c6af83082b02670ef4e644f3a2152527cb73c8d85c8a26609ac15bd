import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectTo } from "../../../test/helper/Connect.js";
import { Offline } from "../../../test/helper/Offline.js";
import { Envelope, EnvelopeCurve } from "./Envelope.js";

describe("Envelope", () => {
	BasicTests(Envelope);

	context("Envelope", () => {
		it("has an output connections", () => {
			const env = new Envelope();
			env.connect(connectTo());
			env.dispose();
		});

		it("can get and set values an Objects", () => {
			const env = new Envelope();
			const values = {
				attack: 0,
				decay: 0.5,
				release: "4n",
				sustain: 1,
			};
			env.set(values);
			expect(env.get()).to.contain.keys(Object.keys(values));
			env.dispose();
		});

		it("passes no signal before being triggered", () => {
			return Offline(() => {
				new Envelope().toDestination();
			}).then((buffer) => {
				expect(buffer.isSilent()).to.equal(true);
			});
		});

		it("passes signal once triggered", () => {
			return Offline(() => {
				const env = new Envelope().toDestination();
				env.triggerAttack(0.05);
			}, 0.1).then((buffer) => {
				expect(buffer.getTimeOfFirstSound()).to.be.closeTo(0.05, 0.001);
			});
		});

		it("can take parameters as both an object and as arguments", () => {
			const env0 = new Envelope({
				attack: 0,
				decay: 0.5,
				sustain: 1,
			});
			expect(env0.attack).to.equal(0);
			expect(env0.decay).to.equal(0.5);
			expect(env0.sustain).to.equal(1);
			env0.dispose();
			const env1 = new Envelope(0.1, 0.2, 0.3);
			expect(env1.attack).to.equal(0.1);
			expect(env1.decay).to.equal(0.2);
			expect(env1.sustain).to.equal(0.3);
			env1.dispose();
		});

		it("ensures that none of the values go below 0", () => {
			const env = new Envelope();
			expect(() => {
				env.attack = -1;
			}).to.throw(RangeError);

			expect(() => {
				env.decay = -1;
			}).to.throw(RangeError);

			expect(() => {
				env.sustain = 2;
			}).to.throw(RangeError);

			expect(() => {
				env.release = -1;
			}).to.throw(RangeError);
			env.dispose();
		});

		it("can set attack to exponential or linear", () => {
			const env = new Envelope(0.01, 0.01, 0.5, 0.3);
			env.attackCurve = "exponential";
			expect(env.attackCurve).to.equal("exponential");
			env.triggerAttack();
			env.dispose();
			// and can be linear
			const env2 = new Envelope(0.01, 0.01, 0.5, 0.3);
			env2.attackCurve = "linear";
			expect(env2.attackCurve).to.equal("linear");
			env2.triggerAttack();
			// and test a non-curve
			expect(() => {
				// @ts-ignore
				env2.attackCurve = "other";
			}).to.throw(Error);
			env2.dispose();
		});

		it("can set decay to exponential or linear", () => {
			const env = new Envelope(0.01, 0.01, 0.5, 0.3);
			env.decayCurve = "exponential";
			expect(env.decayCurve).to.equal("exponential");
			env.triggerAttack();
			env.dispose();
			// and can be linear
			const env2 = new Envelope(0.01, 0.01, 0.5, 0.3);
			env2.decayCurve = "linear";
			expect(env2.decayCurve).to.equal("linear");
			env2.triggerAttack();
			// and test a non-curve
			expect(() => {
				// @ts-ignore
				env2.decayCurve = "other";
			}).to.throw(Error);
			env2.dispose();
		});

		it("can set release to exponential or linear", () => {
			const env = new Envelope(0.01, 0.01, 0.5, 0.3);
			env.releaseCurve = "exponential";
			expect(env.releaseCurve).to.equal("exponential");
			env.triggerRelease();
			env.dispose();
			// and can be linear
			const env2 = new Envelope(0.01, 0.01, 0.5, 0.3);
			env2.releaseCurve = "linear";
			expect(env2.releaseCurve).to.equal("linear");
			env2.triggerRelease();
			// and test a non-curve
			expect(() => {
				// @ts-ignore
				env2.releaseCurve = "other";
			}).to.throw(Error);
			env2.dispose();
		});

		it("can set release to exponential or linear", () => {
			return Offline(() => {
				const env = new Envelope({
					release: 0,
				});
				env.toDestination();
				env.triggerAttackRelease(0.4, 0);
			}, 0.7).then((buffer) => {
				expect(buffer.getValueAtTime(0.3)).to.be.above(0);
				expect(buffer.getValueAtTime(0.401)).to.equal(0);
			});
		});

		it("schedule a release at the moment when the attack portion is done", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.5,
					decay: 0.0,
					sustain: 1,
					release: 0.5,
				}).toDestination();
				env.triggerAttackRelease(0.5);
			}, 0.7).then((buffer) => {
				// make sure that it's got the rising edge
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.2, 0.01);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(0.4, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(0.6, 0.01);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(0.8, 0.01);
				expect(buffer.getValueAtTime(0.5)).to.be.be.closeTo(1, 0.001);
			});
		});

		it("correctly schedules an exponential attack", () => {
			const e = {
				attack: 0.01,
				decay: 0.4,
				release: 0.1,
				sustain: 0.5,
			};
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.attackCurve = "exponential";
				env.toDestination();
				env.triggerAttack(0);
			}, 0.7).then((buffer) => {
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.within(0, 1);
					},
					0,
					e.attack
				);
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.within(e.sustain - 0.001, 1);
					},
					e.attack,
					e.attack + e.decay
				);
				buffer.forEachBetween((sample) => {
					expect(sample).to.be.closeTo(e.sustain, 0.01);
				}, e.attack + e.decay);
			});
		});

		it("correctly schedules a linear release", () => {
			const e = {
				attack: 0.01,
				decay: 0.4,
				release: 0.1,
				sustain: 0.5,
			};
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.attackCurve = "exponential";
				env.toDestination();
				env.triggerAttack(0);
			}, 0.7).then((buffer) => {
				buffer.forEachBetween(
					(sample, time) => {
						const target = 1 - (time - 0.2) * 10;
						expect(sample).to.be.closeTo(target, 0.01);
					},
					0.2,
					0.2
				);
			});
		});

		it("correctly schedules a linear decay", () => {
			const e = {
				attack: 0.1,
				decay: 0.5,
				release: 0.1,
				sustain: 0,
			};
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.decayCurve = "linear";
				env.toDestination();
				env.triggerAttack(0);
			}, 0.7).then((buffer) => {
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(0.5, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(0.8, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(0.6, 0.01);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(0.4, 0.01);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.2, 0.01);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(0, 0.01);
			});
		});

		it("correctly schedules an exponential decay", () => {
			const e = {
				attack: 0.1,
				decay: 0.5,
				release: 0.1,
				sustain: 0,
			};
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.decayCurve = "exponential";
				env.toDestination();
				env.triggerAttack(0);
			}, 0.7).then((buffer) => {
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(0.27, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(0.07, 0.01);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(0.02, 0.01);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.005, 0.01);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(0, 0.01);
			});
		});

		it("can schedule a very short attack", () => {
			const e = {
				attack: 0.001,
				decay: 0.01,
				release: 0.1,
				sustain: 0.1,
			};
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.attackCurve = "exponential";
				env.toDestination();
				env.triggerAttack(0);
			}, 0.2).then((buffer) => {
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.within(0, 1);
					},
					0,
					e.attack
				);
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.within(e.sustain - 0.001, 1);
					},
					e.attack,
					e.attack + e.decay
				);
				buffer.forEachBetween((sample) => {
					expect(sample).to.be.closeTo(e.sustain, 0.01);
				}, e.attack + e.decay);
			});
		});

		it("can schedule an attack of time 0", () => {
			return Offline(() => {
				const env = new Envelope(0, 0.1);
				env.toDestination();
				env.triggerAttack(0.1);
			}, 0.2).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.001);
				expect(buffer.getValueAtTime(0.0999)).to.be.closeTo(0, 0.001);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.001);
			});
		});

		it("correctly schedule a release", () => {
			const e = {
				attack: 0.001,
				decay: 0.01,
				release: 0.3,
				sustain: 0.5,
			};
			const releaseTime = 0.2;
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.attackCurve = "exponential";
				env.toDestination();
				env.triggerAttackRelease(releaseTime);
			}, 0.6).then((buffer) => {
				const sustainStart = e.attack + e.decay;
				const sustainEnd = sustainStart + releaseTime;
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.below(e.sustain + 0.01);
					},
					sustainStart,
					sustainEnd
				);
				buffer.forEachBetween((sample) => {
					expect(sample).to.be.closeTo(0, 0.01);
				}, releaseTime + e.release);
			});
		});

		it("can retrigger a short attack at the same time as previous release", () => {
			return Offline(() => {
				const env = new Envelope(0.001, 0.1, 0.5);
				env.attackCurve = "linear";
				env.toDestination();
				env.triggerAttack(0);
				env.triggerRelease(0.4);
				env.triggerAttack(0.4);
			}, 0.6).then((buffer) => {
				expect(buffer.getValueAtTime(0.4)).be.closeTo(0.5, 0.01);
				expect(buffer.getValueAtTime(0.40025)).be.closeTo(0.75, 0.01);
				expect(buffer.getValueAtTime(0.4005)).be.closeTo(1, 0.01);
			});
		});

		it("is silent before and after triggering", () => {
			const e = {
				attack: 0.001,
				decay: 0.01,
				release: 0.3,
				sustain: 0.5,
			};
			const releaseTime = 0.2;
			const attackTime = 0.1;
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.attackCurve = "exponential";
				env.toDestination();
				env.triggerAttack(attackTime);
				env.triggerRelease(releaseTime);
			}, 0.6).then((buffer) => {
				expect(buffer.getValueAtTime(attackTime - 0.001)).to.equal(0);
				expect(
					buffer.getValueAtTime(
						e.attack + e.decay + releaseTime + e.release
					)
				).to.be.below(0.01);
			});
		});

		it("is silent after decay if sustain is 0", () => {
			const e = {
				attack: 0.01,
				decay: 0.04,
				sustain: 0,
			};
			const attackTime = 0.1;
			return Offline(() => {
				const env = new Envelope(e.attack, e.decay, e.sustain);
				env.toDestination();
				env.triggerAttack(attackTime);
			}, 0.4).then((buffer) => {
				buffer.forEach((sample, time) => {
					expect(buffer.getValueAtTime(attackTime - 0.001)).to.equal(
						0
					);
					expect(
						buffer.getValueAtTime(attackTime + e.attack + e.decay)
					).to.be.below(0.01);
				});
			});
		});

		it("correctly schedule an attack release envelope", () => {
			const e = {
				attack: 0.08,
				decay: 0.2,
				release: 0.2,
				sustain: 0.1,
			};
			const releaseTime = 0.4;
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.toDestination();
				env.triggerAttack(0);
				env.triggerRelease(releaseTime);
			}).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < e.attack) {
						expect(sample).to.be.within(0, 1);
					} else if (time < e.attack + e.decay) {
						expect(sample).to.be.within(e.sustain, 1);
					} else if (time < releaseTime) {
						expect(sample).to.be.closeTo(e.sustain, 0.1);
					} else if (time < releaseTime + e.release) {
						expect(sample).to.be.within(0, e.sustain + 0.01);
					} else {
						expect(sample).to.be.below(0.0001);
					}
				});
			});
		});

		it("can schedule a combined AttackRelease", () => {
			const e = {
				attack: 0.1,
				decay: 0.2,
				release: 0.1,
				sustain: 0.35,
			};
			const releaseTime = 0.4;
			const duration = 0.4;
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.toDestination();
				env.triggerAttack(0);
				env.triggerRelease(releaseTime);
			}, 0.7).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < e.attack) {
						expect(sample).to.be.within(0, 1);
					} else if (time < e.attack + e.decay) {
						expect(sample).to.be.within(e.sustain - 0.001, 1);
					} else if (time < duration) {
						expect(sample).to.be.closeTo(e.sustain, 0.1);
					} else if (time < duration + e.release) {
						expect(sample).to.be.within(0, e.sustain + 0.01);
					} else {
						expect(sample).to.be.below(0.0015);
					}
				});
			});
		});

		it("can schedule a combined AttackRelease with velocity", () => {
			const e = {
				attack: 0.1,
				decay: 0.2,
				release: 0.1,
				sustain: 0.35,
			};
			const releaseTime = 0.4;
			const duration = 0.4;
			const velocity = 0.4;
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.toDestination();
				env.triggerAttack(0, velocity);
				env.triggerRelease(releaseTime);
			}, 0.7).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < e.attack) {
						expect(sample).to.be.within(0, velocity + 0.01);
					} else if (time < e.attack + e.decay) {
						expect(sample).to.be.within(
							e.sustain * velocity - 0.01,
							velocity + 0.01
						);
					} else if (time < duration) {
						expect(sample).to.be.closeTo(e.sustain * velocity, 0.1);
					} else if (time < duration + e.release) {
						expect(sample).to.be.within(
							0,
							e.sustain * velocity + 0.01
						);
					} else {
						expect(sample).to.be.below(0.01);
					}
				});
			});
		});

		it("can schedule multiple envelopes", () => {
			const e = {
				attack: 0.1,
				decay: 0.2,
				release: 0.1,
				sustain: 0.0,
			};
			return Offline(() => {
				const env = new Envelope(
					e.attack,
					e.decay,
					e.sustain,
					e.release
				);
				env.toDestination();
				env.triggerAttack(0);
				env.triggerAttack(0.5);
			}, 0.85).then((buffer) => {
				// first trigger
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(0, 0.01);
				// second trigger
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.8)).to.be.closeTo(0, 0.01);
			});
		});

		it("can schedule multiple attack/releases with no discontinuities", () => {
			return Offline(() => {
				const env = new Envelope(0.1, 0.2, 0.2, 0.4).toDestination();
				env.triggerAttackRelease(0, 0.4);
				env.triggerAttackRelease(0.4, 0.11);
				env.triggerAttackRelease(0.45, 0.1);
				env.triggerAttackRelease(1.1, 0.09);
				env.triggerAttackRelease(1.5, 0.3);
				env.triggerAttackRelease(1.8, 0.29);
			}, 2).then((buffer) => {
				// test for discontinuities
				let lastSample = 0;
				buffer.forEach((sample, time) => {
					expect(sample).to.be.at.most(1);
					const diff = Math.abs(lastSample - sample);
					expect(diff).to.be.lessThan(0.001);
					lastSample = sample;
				});
			});
		});

		it("can schedule multiple 'linear' attack/releases with no discontinuities", () => {
			return Offline(() => {
				const env = new Envelope(0.1, 0.2, 0.2, 0.4).toDestination();
				env.attackCurve = "linear";
				env.releaseCurve = "linear";
				env.triggerAttackRelease(0, 0.4);
				env.triggerAttackRelease(0.4, 0.11);
				env.triggerAttackRelease(0.45, 0.1);
				env.triggerAttackRelease(1.1, 0.09);
				env.triggerAttackRelease(1.5, 0.3);
				env.triggerAttackRelease(1.8, 0.29);
			}, 2).then((buffer) => {
				// test for discontinuities
				let lastSample = 0;
				buffer.forEach((sample, time) => {
					expect(sample).to.be.at.most(1);
					const diff = Math.abs(lastSample - sample);
					expect(diff).to.be.lessThan(0.001);
					lastSample = sample;
				});
			});
		});

		it("can schedule multiple 'exponential' attack/releases with no discontinuities", () => {
			return Offline(() => {
				const env = new Envelope(0.1, 0.2, 0.2, 0.4).toDestination();
				env.attackCurve = "exponential";
				env.releaseCurve = "exponential";
				env.triggerAttackRelease(0, 0.4);
				env.triggerAttackRelease(0.4, 0.11);
				env.triggerAttackRelease(0.45, 0.1);
				env.triggerAttackRelease(1.1, 0.09);
				env.triggerAttackRelease(1.5, 0.3);
				env.triggerAttackRelease(1.8, 0.29);
			}, 2).then((buffer) => {
				// test for discontinuities
				let lastSample = 0;
				buffer.forEach((sample, time) => {
					expect(sample).to.be.at.most(1);
					const diff = Math.abs(lastSample - sample);
					expect(diff).to.be.lessThan(0.0035);
					lastSample = sample;
				});
			});
		});

		it("can schedule multiple 'sine' attack/releases with no discontinuities", () => {
			return Offline(() => {
				const env = new Envelope(0.1, 0.2, 0.2, 0.4).toDestination();
				env.attackCurve = "sine";
				env.releaseCurve = "sine";
				env.triggerAttackRelease(0, 0.4);
				env.triggerAttackRelease(0.4, 0.11);
				env.triggerAttackRelease(0.45, 0.1);
				env.triggerAttackRelease(1.1, 0.09);
				env.triggerAttackRelease(1.5, 0.3);
				env.triggerAttackRelease(1.8, 0.29);
			}, 2).then((buffer) => {
				// test for discontinuities
				let lastSample = 0;
				buffer.forEach((sample, time) => {
					expect(sample).to.be.at.most(1);
					const diff = Math.abs(lastSample - sample);
					expect(diff).to.be.lessThan(0.0035);
					lastSample = sample;
				});
			});
		});

		it("can schedule multiple 'cosine' attack/releases with no discontinuities", () => {
			return Offline(() => {
				const env = new Envelope(0.1, 0.2, 0.2, 0.4).toDestination();
				env.attackCurve = "cosine";
				env.releaseCurve = "cosine";
				env.triggerAttackRelease(0, 0.4);
				env.triggerAttackRelease(0.4, 0.11);
				env.triggerAttackRelease(0.45, 0.1);
				env.triggerAttackRelease(1.1, 0.09);
				env.triggerAttackRelease(1.5, 0.3);
				env.triggerAttackRelease(1.8, 0.29);
			}, 2).then((buffer) => {
				// test for discontinuities
				let lastSample = 0;
				buffer.forEach((sample, time) => {
					expect(sample).to.be.at.most(1);
					const diff = Math.abs(lastSample - sample);
					expect(diff).to.be.lessThan(0.002);
					lastSample = sample;
				});
			});
		});

		it("reports its current envelope value (.value)", () => {
			return Offline(() => {
				const env = new Envelope(1, 0.2, 1).toDestination();
				expect(env.value).to.be.closeTo(0, 0.01);
				env.triggerAttack();
				return (time) => {
					expect(env.value).to.be.closeTo(time, 0.01);
				};
			}, 0.5);
		});

		it("can cancel a schedule envelope", () => {
			return Offline(() => {
				const env = new Envelope(0.1, 0.2, 1).toDestination();
				env.triggerAttack(0.2);
				env.cancel(0.2);
			}, 0.3).then((buffer) => {
				expect(buffer.isSilent()).to.be.true;
			});
		});
	});

	context("Attack/Release Curves", () => {
		const envelopeCurves: EnvelopeCurve[] = [
			"linear",
			"exponential",
			"bounce",
			"cosine",
			"ripple",
			"sine",
			"step",
		];

		it("can get set all of the types as the attackCurve", () => {
			const env = new Envelope();
			envelopeCurves.forEach((type) => {
				env.attackCurve = type;
				expect(env.attackCurve).to.equal(type);
			});
			env.dispose();
		});

		it("can get set all of the types as the releaseCurve", () => {
			const env = new Envelope();
			envelopeCurves.forEach((type) => {
				env.releaseCurve = type;
				expect(env.releaseCurve).to.equal(type);
			});
			env.dispose();
		});

		it("outputs a signal when the attack/release curves are set to 'bounce'", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: "bounce",
					decay: 0,
					release: 0.3,
					releaseCurve: "bounce",
					sustain: 1,
				}).toDestination();
				env.triggerAttackRelease(0.3, 0.1);
			}, 0.8).then((buffer) => {
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.above(0);
					},
					0.101,
					0.7
				);
			});
		});

		it("outputs a signal when the attack/release curves are set to 'ripple'", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: "ripple",
					decay: 0,
					release: 0.3,
					releaseCurve: "ripple",
					sustain: 1,
				}).toDestination();
				env.triggerAttackRelease(0.3, 0.1);
			}, 0.8).then((buffer) => {
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.above(0);
					},
					0.101,
					0.7
				);
			});
		});

		it("outputs a signal when the attack/release curves are set to 'sine'", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: "sine",
					decay: 0,
					release: 0.3,
					releaseCurve: "sine",
					sustain: 1,
				}).toDestination();
				env.triggerAttackRelease(0.3, 0.1);
			}, 0.8).then((buffer) => {
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.above(0);
					},
					0.101,
					0.7
				);
			});
		});

		it("outputs a signal when the attack/release curves are set to 'cosine'", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: "cosine",
					decay: 0,
					release: 0.3,
					releaseCurve: "cosine",
					sustain: 1,
				}).toDestination();
				env.triggerAttackRelease(0.3, 0.1);
			}, 0.8).then((buffer) => {
				buffer.forEachBetween(
					(sample) => {
						expect(sample).to.be.above(0);
					},
					0.101,
					0.7
				);
			});
		});

		it("outputs a signal when the attack/release curves are set to 'step'", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: "step",
					decay: 0,
					release: 0.3,
					releaseCurve: "step",
					sustain: 1,
				}).toDestination();
				env.triggerAttackRelease(0.3, 0.1);
			}, 0.8).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time > 0.3 && time < 0.5) {
						expect(sample).to.be.above(0);
					} else if (time < 0.1) {
						expect(sample).to.equal(0);
					}
				});
			});
		});

		it("outputs a signal when the attack/release curves are set to an array", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: [0, 1, 0, 1],
					decay: 0,
					release: 0.3,
					releaseCurve: [1, 0, 1, 0],
					sustain: 1,
				}).toDestination();
				expect(env.attackCurve).to.deep.equal([0, 1, 0, 1]);
				env.triggerAttackRelease(0.3, 0.1);
			}, 0.8).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time > 0.4 && time < 0.5) {
						expect(sample).to.be.above(0);
					} else if (time < 0.1) {
						expect(sample).to.equal(0);
					}
				});
			});
		});

		it("can scale a velocity with a custom curve", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.3,
					attackCurve: [0, 1, 0, 1],
					decay: 0,
					release: 0.3,
					releaseCurve: [1, 0, 1, 0],
					sustain: 1,
				}).toDestination();
				env.triggerAttackRelease(0.4, 0.1, 0.5);
			}, 0.8).then((buffer) => {
				buffer.forEach((sample) => {
					expect(sample).to.be.at.most(0.51);
				});
			});
		});

		it("can render the envelope to a curve", async () => {
			const env = new Envelope();
			const curve = await env.asArray();
			expect(curve.some((v) => v > 0)).to.be.true;
			curve.forEach((v) => expect(v).to.be.within(0, 1));
			env.dispose();
		});

		it("can render the envelope to an array with a given length", async () => {
			const env = new Envelope();
			const curve = await env.asArray(256);
			expect(curve.length).to.equal(256);
			env.dispose();
		});

		it("can retrigger partial envelope with custom type", () => {
			return Offline(() => {
				const env = new Envelope({
					attack: 0.5,
					attackCurve: "cosine",
					decay: 0,
					release: 0.5,
					releaseCurve: "sine",
					sustain: 1,
				}).toDestination();
				env.triggerAttack(0);
				env.triggerRelease(0.2);
				env.triggerAttack(0.5);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.equal(0);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.32, 0.01);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(0.6, 0.01);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(0.53, 0.01);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(0.38, 0.01);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.2, 0.01);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(0.52, 0.01);
				expect(buffer.getValueAtTime(0.7)).to.be.closeTo(0.78, 0.01);
				expect(buffer.getValueAtTime(0.8)).to.be.closeTo(0.95, 0.01);
				expect(buffer.getValueAtTime(0.9)).to.be.closeTo(1, 0.01);
			});
		});
	});
});
