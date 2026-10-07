import { expect } from "chai";
import { Timeline } from "./Timeline.js";

interface StateTimelineEvent {
	state: string;
	time: number;
}

interface TimelineNameEvent {
	name: string;
	time: number;
}

interface TimelineValueEvent {
	time: number;
	value: any;
}

describe("Timeline", () => {
	it("can be created and disposed", () => {
		const sched = new Timeline();
		sched.dispose();
	});

	it("accepts events into the timeline", () => {
		const sched = new Timeline<StateTimelineEvent>();
		sched.add({
			state: "A",
			time: 0,
		});
		sched.add({
			state: "B",
			time: 1,
		});
		sched.add({
			state: "C",
			time: 2,
		});
		sched.dispose();
	});

	it("can insert events in the timeline in the right order", () => {
		const sched = new Timeline();
		sched.add({
			time: 0,
		});
		sched.add({
			time: 2,
		});
		sched.add({
			time: 1,
		});
		let index = 0;
		const eventTimes = [0, 1, 2];
		sched.forEach((event) => {
			expect(event.time).to.equal(eventTimes[index++]);
		});
		sched.dispose();
	});

	it("can get the length of the timeline", () => {
		const sched = new Timeline();
		expect(sched.length).to.equal(0);
		sched.add({
			time: 0,
		});
		expect(sched.length).to.equal(1);
		sched.dispose();
	});

	it("can remove items from the timeline", () => {
		const sched = new Timeline();
		const obj = { time: 0 };
		sched.add(obj);
		sched.add({
			time: 2,
		});
		expect(sched.length).to.equal(2);
		sched.remove(obj);
		expect(sched.length).to.equal(1);
		sched.dispose();
	});

	it("has no effect to remove an object which is not there", () => {
		const sched = new Timeline();
		sched.add({
			time: 2,
		});
		sched.remove({ time: 1 });
		expect(sched.length).to.equal(1);
		sched.forEach((event) => {
			sched.remove({ time: 4 });
		});
		expect(sched.length).to.equal(1);
		sched.dispose();
	});

	it("can search for events in the timeline by time", () => {
		const sched = new Timeline();
		sched.add({
			time: 0,
		});
		sched.add({
			time: 2,
		});
		sched.add({
			time: 1,
		});
		// expect(sched._search(0)).to.equal(0);
		// expect(sched._search(0.01)).to.equal(0);
		// expect(sched._search(1)).to.equal(1);
		// expect(sched._search(1.01)).to.equal(1);
		// expect(sched._search(2)).to.equal(2);
		// expect(sched._search(20000)).to.equal(2);
		// expect(sched._search(-1)).to.equal(-1);
		sched.dispose();
	});

	it("can get a previous event", () => {
		const sched = new Timeline();
		const event0 = {
			time: 0,
		};
		const event1 = {
			time: 1,
		};
		sched.add(event0);
		sched.add(event1);
		expect(sched.previousEvent(event1)).to.equal(event0);
		expect(sched.previousEvent(event0)).to.equal(null);
		sched.dispose();
	});

	it("can get the scheduled event at the given time", () => {
		const sched = new Timeline<StateTimelineEvent>();
		sched.add({
			state: "A",
			time: 2,
		});
		sched.add({
			state: "C",
			time: 9.4,
		});
		sched.add({
			state: "B",
			time: 6,
		});
		expect(sched.get(0)).is.null;
		const e1 = sched.get(2);
		const e2 = sched.get(5.9);
		const e3 = sched.get(6.1);
		const e4 = sched.get(12);
		if (e1 && e2 && e3 && e4) {
			expect(e1.state).is.equal("A");
			expect(e2.state).is.equal("A");
			expect(e3.state).is.equal("B");
			expect(e4.state).is.equal("C");
		} else {
			throw new Error("expected 4 events");
		}
		sched.dispose();
	});

	it("puts the second scheduled event after if two events are scheduled at the same time", () => {
		const sched = new Timeline<TimelineNameEvent>();
		sched.add({
			name: "A",
			time: 0,
		});
		sched.add({
			name: "B",
			time: 0,
		});
		const firstEvent0 = sched.get(0);
		if (firstEvent0) {
			expect(firstEvent0.name).is.equal("B");
		}
		sched.add({
			name: "C",
			time: 0,
		});
		const firstEvent1 = sched.get(0);
		if (firstEvent1) {
			expect(firstEvent1.name).is.equal("C");
		}
		sched.dispose();
	});

	it("can the next event after the given time", () => {
		const sched = new Timeline<StateTimelineEvent>();
		expect(sched.getAfter(0)).is.null;
		sched.add({
			state: "A",
			time: 0.1,
		});
		sched.add({
			state: "B",
			time: 1.1,
		});
		sched.add({
			state: "C",
			time: 2.1,
		});
		const firstEvent = sched.getAfter(0);
		const secondEvent = sched.getAfter(1);
		if (firstEvent && secondEvent) {
			expect(firstEvent.state).is.equal("A");
			expect(secondEvent.state).is.equal("B");
		} else {
			throw new Error("should have 2 events");
		}
		expect(sched.getAfter(3)).is.null;
		sched.dispose();
	});

	it("can the event before the event before the given time", () => {
		const sched = new Timeline<StateTimelineEvent>();
		expect(sched.getBefore(0)).is.null;
		sched.add({
			state: "A",
			time: 0.1,
		});
		sched.add({
			state: "B",
			time: 1.1,
		});
		sched.add({
			state: "C",
			time: 2.1,
		});
		expect(sched.getBefore(0)).is.null;
		const firstEvent = sched.getBefore(1.1);
		const secondEvent = sched.getBefore(2.1);
		const thirdEvent = sched.getBefore(3);
		if (firstEvent && secondEvent && thirdEvent) {
			expect(firstEvent.state).is.equal("A");
			expect(secondEvent.state).is.equal("B");
			expect(thirdEvent.state).is.equal("C");
		} else {
			throw new Error("should have 3 events");
		}
		sched.dispose();
	});

	it("can cancel an item", () => {
		const sched = new Timeline();
		sched.add({ time: 3 });
		sched.add({ time: 5 });
		sched.add({ time: 4 });
		sched.add({ time: 8 });
		sched.add({ time: 5 });
		expect(sched.length).to.equal(5);
		sched.cancel(10);
		expect(sched.length).to.equal(5);
		sched.cancel(5);
		expect(sched.length).to.equal(2);
		sched.cancel(3);
		expect(sched.length).to.equal(0);
		sched.dispose();
	});

	it("can cancel items after the given time", () => {
		const sched = new Timeline();
		for (let i = 0; i < 100; i++) {
			sched.add({ time: 100 - i });
		}
		sched.cancel(10);
		expect(sched.length).to.equal(9);
		sched.cancel(5);
		expect(sched.length).to.equal(4);
		sched.cancel(0);
		expect(sched.length).to.equal(0);
		sched.dispose();
	});

	it("can cancel items before the given time", () => {
		const sched = new Timeline();
		for (let i = 0; i < 100; i++) {
			sched.add({ time: i });
		}
		sched.cancelBefore(9);
		expect(sched.length).to.equal(90);
		sched.cancelBefore(10.1);
		expect(sched.length).to.equal(89);
		sched.cancelBefore(100);
		expect(sched.length).to.equal(0);
		sched.dispose();
	});

	it("has no problem with many items", () => {
		const sched = new Timeline();
		for (let i = 0; i < 10000; i++) {
			sched.add({
				time: i,
			});
		}
		for (let j = 0; j < 1000; j++) {
			const val = sched.get(j);
			if (val) {
				expect(val.time).to.equal(j);
			}
		}
		sched.dispose();
	});

	it("inforces increasing time", () => {
		const sched = new Timeline({
			increasing: true,
		});
		expect(() => {
			sched.add({ time: 1 });
			sched.add({ time: 0 });
		}).to.throw(Error);
		sched.dispose();
	});

	it("the same time value is allowed to be added", () => {
		const sched = new Timeline({
			increasing: true,
		});
		sched.add({ time: 1 });
		sched.add({ time: 1 });
		sched.add({ time: 1 });
		sched.dispose();
	});

	it("can constrain the length of the timeline", () => {
		const sched = new Timeline(4);
		for (let i = 0; i < 10000; i++) {
			sched.add({
				time: i,
			});
		}
		expect(sched.length).to.equal(4);
		sched.dispose();
	});

	it("can peek and shift off the first element", () => {
		const timeline = new Timeline<TimelineValueEvent>();
		timeline.add({
			time: 0,
			value: "a",
		});
		timeline.add({
			time: 1,
			value: "b",
		});
		timeline.add({
			time: 2,
			value: "c",
		});
		expect(timeline.length).to.equal(3);
		const peekValue = timeline.peek();
		if (peekValue) {
			expect(peekValue.value).to.equal("a");
		} else {
			throw new Error("should have value");
		}
		expect(timeline.length).to.equal(3);

		const shiftValue = timeline.shift();
		if (shiftValue) {
			expect(shiftValue.value).to.equal("a");
		} else {
			throw new Error("should have value");
		}
		expect(timeline.length).to.equal(2);
		const peekValue2 = timeline.peek();
		if (peekValue2) {
			expect(peekValue2.value).to.equal("b");
		} else {
			throw new Error("should have value");
		}
		const shiftValue2 = timeline.shift();
		if (shiftValue2) {
			expect(shiftValue2.value).to.equal("b");
		} else {
			throw new Error("should have value");
		}
		expect(timeline.length).to.equal(1);
		timeline.dispose();
	});

	context("Iterators", () => {
		it("iterates over all items and returns and item", () => {
			const sched = new Timeline();
			sched.add({ time: 0 });
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEach((event) => {
				expect(event).to.be.an("object");
				count++;
			});
			expect(count).to.equal(5);
			sched.dispose();
		});

		it("iterates over all items before the given time", () => {
			const sched = new Timeline();
			sched.add({ time: 0 });
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachBefore(0.3, (event) => {
				expect(event).to.be.an("object");
				expect(event.time).to.be.at.most(0.3);
				count++;
			});
			expect(count).to.equal(4);
			sched.dispose();
		});

		it("handles time ranges before the available objects", () => {
			const sched = new Timeline();
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachBefore(0, () => {
				count++;
			});
			expect(count).to.equal(0);
			sched.dispose();
		});

		it("iterates over all items after the given time", () => {
			const sched = new Timeline();
			sched.add({ time: 0 });
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachAfter(0.1, (event) => {
				expect(event).to.be.an("object");
				expect(event.time).to.be.above(0.1);
				count++;
			});
			expect(count).to.equal(3);
			sched.dispose();
		});

		it("handles time ranges after the available objects", () => {
			const sched = new Timeline();
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachAfter(0.5, () => {
				count++;
			});
			expect(count).to.equal(0);
			sched.dispose();
		});

		it("handles time ranges before the first object", () => {
			const sched = new Timeline();
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachAfter(-Infinity, () => {
				count++;
			});
			expect(count).to.equal(4);
			sched.dispose();
		});

		it("can iterate after inclusive of the item at the given time", () => {
			const sched = new Timeline();
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachFrom(0.2, () => {
				count++;
			});
			expect(count).to.equal(4);
			count = 0;
			sched.forEachFrom(0.21, () => {
				count++;
			});
			expect(count).to.equal(2);
			count = 0;
			sched.forEachFrom(0, () => {
				count++;
			});
			expect(count).to.equal(5);
			sched.dispose();
		});

		it("iterates over all items at the given time", () => {
			const sched = new Timeline();
			sched.add({ time: 0 });
			sched.add({ time: 0 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachAtTime(0.1, (event) => {
				count++;
			});
			expect(count).to.equal(0);
			// and with an actual time
			sched.forEachAtTime(0.2, (event) => {
				expect(event.time).to.equal(0.2);
				count++;
			});
			expect(count).to.equal(2);
			sched.dispose();
		});

		it("can remove items during iterations", () => {
			const sched = new Timeline();
			for (let i = 0; i < 1000; i++) {
				sched.add({ time: i });
			}
			sched.forEach((event) => {
				sched.remove(event);
			});
			expect(sched.length).to.equal(0);
			sched.dispose();
		});

		it("can add items during iteration", () => {
			interface AddedInterface {
				time: number;
				added?: boolean;
			}
			const sched = new Timeline<AddedInterface>();
			for (let i = 0; i < 1000; i++) {
				sched.add({ time: i });
			}
			let added = false;
			sched.forEach((event) => {
				if (!added) {
					added = true;
					sched.add({
						added: true,
						time: 10,
					});
				}
			});
			expect(sched.length).to.equal(1001);
			sched.dispose();
		});

		it("can iterate between a time range", () => {
			const sched = new Timeline();
			sched.add({ time: 0.1 });
			sched.add({ time: 0.2 });
			sched.add({ time: 0.3 });
			sched.add({ time: 0.4 });
			let count = 0;
			sched.forEachBetween(0.2, 0.4, (event) => {
				count++;
				expect(event.time).to.be.within(0.2, 0.3);
			});
			expect(count).to.equal(2);
			count = 0;
			sched.forEachBetween(0.21, 0.4, (event) => {
				count++;
				expect(event.time).to.be.within(0.21, 0.3);
			});
			expect(count).to.equal(1);
			count = 0;
			sched.forEachBetween(0.21, 0.39, (event) => {
				count++;
				expect(event.time).to.be.within(0.21, 0.39);
			});
			expect(count).to.equal(1);
			count = 0;
			sched.forEachBetween(0, 0.11, (event) => {
				count++;
				expect(event.time).to.be.within(0, 0.11);
			});
			expect(count).to.equal(1);
			count = 0;
			sched.forEachBetween(0, 0.09, (event) => {
				count++;
				expect(event.time).to.be.within(0, 0.09);
			});
			expect(count).to.equal(0);
			count = 0;
			sched.forEachBetween(0.41, 0.5, (event) => {
				count++;
				expect(event.time).to.be.within(0.41, 0.5);
			});
			expect(count).to.equal(0);
			sched.dispose();
		});
	});
});
