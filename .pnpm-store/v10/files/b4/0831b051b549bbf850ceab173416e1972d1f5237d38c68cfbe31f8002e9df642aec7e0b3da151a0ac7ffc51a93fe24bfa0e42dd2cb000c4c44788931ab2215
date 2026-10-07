import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { IntervalTimeline, IntervalTimelineEvent } from "./IntervalTimeline.js";

describe("IntervalTimeline", () => {
	BasicTests(IntervalTimeline);

	context("inserting/deleting events", () => {
		it("accepts events into the timeline", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: 0.2,
				state: "A",
				time: 0,
			});
			sched.add({
				duration: 0.4,
				state: "B",
				time: 1,
			});
			sched.add({
				duration: 12,
				state: "C",
				time: 2,
			});
			sched.dispose();
		});

		it("computes the lenght of the timeline correctly after adding events", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: 0.2,
				state: "A",
				time: 0,
			});
			sched.add({
				duration: 0.4,
				state: "B",
				time: 1,
			});
			sched.add({
				duration: 12,
				state: "C",
				time: 2,
			});
			expect(sched.length).to.equal(3);
			sched.dispose();
		});

		it("can remove events from the timeline", () => {
			const sched = new IntervalTimeline();

			const ev0 = {
				duration: 0.2,
				time: 0,
			};
			const ev1 = {
				duration: 0.2,
				time: 0.2,
			};
			const ev2 = {
				duration: 0.2,
				time: 0.1,
			};
			sched.add(ev0);
			sched.add(ev1);
			sched.add(ev2);
			expect(sched.length).to.equal(3);
			sched.remove(ev0);
			sched.remove(ev1);
			expect(sched.length).to.equal(1);
			sched.remove(ev2);
			expect(sched.length).to.equal(0);
			sched.dispose();
		});

		it("removing on a null set does nothing", () => {
			const sched = new IntervalTimeline();
			expect(sched.length).to.equal(0);
			// @ts-ignore
			sched.remove({});
			expect(sched.length).to.equal(0);
			sched.dispose();
		});

		it("can add and remove and add again events from the timeline", () => {
			const sched = new IntervalTimeline();

			const ev0 = {
				duration: 0.2,
				time: 0,
			};
			const ev1 = {
				duration: 0.2,
				time: 0.2,
			};
			const ev2 = {
				duration: 0.2,
				time: 0.1,
			};
			sched.add(ev0);
			sched.add(ev1);
			sched.add(ev2);
			expect(sched.length).to.equal(3);
			sched.remove(ev0);
			sched.remove(ev1);
			expect(sched.length).to.equal(1);
			sched.add(ev0);
			sched.add(ev1);
			expect(sched.length).to.equal(3);
			sched.dispose();
		});

		it("throws an error if events do not have both time and duration attributes", () => {
			const sched = new IntervalTimeline();
			expect(() => {
				// @ts-ignore
				sched.add({
					time: 0,
				});
			}).to.throw(Error);
			expect(() => {
				// @ts-ignore
				sched.add({
					duration: 0,
				});
			}).to.throw(Error);
			sched.dispose();
		});
	});

	context("getting events", () => {
		it("returns null when no events are in the timeline", () => {
			const sched = new IntervalTimeline();
			expect(sched.get(3)).to.equal(null);
			sched.dispose();
		});

		it("returns the event which overlaps the given time", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: Infinity,
				state: "A",
				time: 0,
			});
			sched.add({
				duration: 0.4,
				state: "B",
				time: 1,
			});
			sched.add({
				duration: 12,
				state: "C",
				time: 2,
			});
			expect(sched.get(0.2)?.state).to.equal("A");
			sched.dispose();
		});

		it("returns events exclusive of the end time", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: 1,
				state: "A",
				time: 0,
			});
			expect(sched.get(0.99)?.state).to.equal("A");
			expect(sched.get(1)).to.equal(null);
			sched.dispose();
		});

		it("factors in start position and duration when checking for overlaps", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: 0.4,
				time: 0,
			});
			expect(sched.get(0.5)).to.equal(null);
			expect(sched.get(-1)).to.equal(null);
			expect(sched.get(0)).to.not.equal(null);
			expect(sched.get(0.39)).to.not.equal(null);
			sched.dispose();
		});

		it("returns the event whose start is closest to the given time", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: Infinity,
				state: "A",
				time: 0,
			});
			sched.add({
				duration: 0.4,
				state: "B",
				time: 0.2,
			});
			sched.add({
				duration: 12,
				state: "C",
				time: 2,
			});
			expect(sched.get(0.2)?.state).to.equal("B");
			sched.dispose();
		});

		it("returns the events correctly after some events are removed", () => {
			const sched = new IntervalTimeline();
			const ev0 = {
				duration: 0.2,
				state: "A",
				time: 0.1,
			};
			const ev1 = {
				duration: 0.3,
				state: "B",
				time: 0.2,
			};
			const ev2 = {
				duration: Infinity,
				state: "C",
				time: 0,
			};
			sched.add(ev0);
			sched.add(ev1);
			sched.add(ev2);
			sched.remove(ev0);
			sched.remove(ev1);
			expect(sched.get(0.2)).to.not.equal(null);
			expect(sched.get(0.2)?.state).to.equal("C");
			sched.dispose();
		});

		it("can handle many items", () => {
			const sched = new IntervalTimeline();
			const len = 5000;
			const events: IntervalTimelineEvent[] = [];
			let duration = 1;
			let time = 0;
			for (let i = 0; i < len; i++) {
				const event = {
					duration,
					time,
				};
				time = (time + 3.1) % 109;
				duration = (duration + 5.7) % 19;
				sched.add(event);
				events.push(event);
			}
			for (let j = 0; j < events.length; j++) {
				const event = events[j];
				const eventVal = sched.get(event.time);
				if (eventVal) {
					expect(eventVal.time).to.equal(event.time);
				}
			}

			for (let k = 0; k < events.length; k++) {
				sched.remove(events[k]);
				expect(sched.length).to.equal(events.length - k - 1);
			}
			sched.dispose();
		});
	});

	context("cancelling", () => {
		it("can cancel items after the given time", () => {
			const sched = new IntervalTimeline();
			for (let i = 5; i < 100; i++) {
				sched.add({
					duration: 10,
					time: i,
				});
			}
			sched.cancel(10);
			expect(sched.length).to.equal(5);
			sched.cancel(0);
			expect(sched.length).to.equal(0);
			sched.dispose();
		});

		it("can cancel items at the given time", () => {
			const sched = new IntervalTimeline();
			sched.add({
				duration: 10,
				time: 0,
			});
			sched.cancel(1);
			expect(sched.length).to.equal(1);
			sched.cancel(0);
			expect(sched.length).to.equal(0);
			sched.dispose();
		});
	});

	context("Iterators", () => {
		it("iterates over all items and returns and item", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0, duration: 5 });
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEach((event) => {
				expect(event).to.be.an("object");
				count++;
			});
			expect(count).to.equal(5);
			sched.dispose();
		});

		it("iterate over null set", () => {
			const sched = new IntervalTimeline();
			let count = 0;
			sched.forEach(() => {
				count++;
			});
			expect(count).to.equal(0);
			sched.dispose();
		});

		it("iterates over all items overlapping the given time", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0, duration: 5 });
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEachAtTime(0.3, (event) => {
				expect(event).to.be.an("object");
				expect(event.time).to.be.at.most(0.3);
				count++;
			});
			expect(count).to.equal(4);
			sched.dispose();
		});

		it("handles time ranges before the available objects", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEachAtTime(0, () => {
				count++;
			});
			expect(count).to.equal(0);
			sched.dispose();
		});

		it("handles time ranges after the available objects", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEachAtTime(5.5, () => {
				count++;
			});
			expect(count).to.equal(0);
			sched.dispose();
		});

		it("iterates over all items after the given time", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEachFrom(0.2, (event) => {
				expect(event).to.be.an("object");
				expect(event.time).to.be.gte(0.2);
				count++;
			});
			expect(count).to.equal(3);
			count = 0;
			sched.forEachFrom(0.35, (event) => {
				expect(event.time).to.be.gte(0.35);
				count++;
			});
			expect(count).to.equal(1);
			sched.dispose();
		});

		it("handles time ranges after the available objects", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEachFrom(0.5, () => {
				count++;
			});
			expect(count).to.equal(0);
			sched.dispose();
		});

		it("iterates over all items", () => {
			const sched = new IntervalTimeline();
			sched.add({ time: 0.1, duration: 5 });
			sched.add({ time: 0.2, duration: 5 });
			sched.add({ time: 0.3, duration: 5 });
			sched.add({ time: 0.4, duration: 5 });
			let count = 0;
			sched.forEach(() => {
				count++;
			});
			expect(count).to.equal(4);
			sched.dispose();
		});

		it("can remove items during forEach iterations", () => {
			const sched = new IntervalTimeline();
			for (let i = 0; i < 1000; i++) {
				sched.add({ time: i, duration: 0.01 });
			}
			sched.forEach((event) => {
				sched.cancel(event.time);
			});
			expect(sched.length).to.equal(0);
			sched.dispose();
		});

		it("can remove items during forEachAtTime iterations", () => {
			const sched = new IntervalTimeline();
			for (let i = 0; i < 1000; i++) {
				sched.add({ time: i, duration: Infinity });
			}
			sched.forEachAtTime(1000, (event) => {
				sched.cancel(event.time);
			});
			expect(sched.length).to.equal(0);
			sched.dispose();
		});

		it("can remove items during forEachFrom iterations", () => {
			const sched = new IntervalTimeline();
			for (let i = 0; i < 1000; i++) {
				sched.add({ time: i, duration: Infinity });
			}
			sched.forEachFrom(0, (event) => {
				sched.remove(event);
			});
			expect(sched.length).to.equal(0);
			sched.dispose();
		});
	});
});
