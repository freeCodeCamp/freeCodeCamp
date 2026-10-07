import { expect } from "chai";
import { TimelineValue } from "./TimelineValue.js";

describe("TimelineValue", () => {
	it("can be created and disposed", () => {
		const sched = new TimelineValue(0);
		sched.dispose();
	});

	it("can add events to the timeline", () => {
		const sched = new TimelineValue(10);
		sched.set(11, 1);
		sched.set(1, 12);
		sched.set(3, 4);
		expect(sched.get(0)).to.equal(10);
		expect(sched.get(1)).to.equal(11);
		expect(sched.get(2)).to.equal(11);
		expect(sched.get(4)).to.equal(3);
		expect(sched.get(12)).to.equal(1);
		sched.dispose();
	});

	it("returns the initial value if there is nothing scheduled", () => {
		const sched = new TimelineValue(10);
		expect(sched.get(0)).to.equal(10);
		sched.dispose();
	});
});
