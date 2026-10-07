import { expect } from "chai";
import { StateTimeline } from "./StateTimeline.js";

describe("StateTimeline", () => {
	it("can be created and disposed", () => {
		const sched = new StateTimeline();
		sched.dispose();
	});

	it("can schedule a state at a given time", () => {
		const sched = new StateTimeline();
		sched.setStateAtTime("started", 0);
		sched.setStateAtTime("stopped", 1);
		sched.setStateAtTime("started", 1);
		sched.dispose();
	});

	it("can get a state at a given time", () => {
		const sched = new StateTimeline();
		sched.setStateAtTime("started", 0);
		sched.setStateAtTime("stopped", 1);
		sched.setStateAtTime("started", 2);
		expect(sched.getValueAtTime(1)).to.equal("stopped");
		expect(sched.getValueAtTime(0.999)).to.equal("started");
		sched.dispose();
	});

	it("returns initial state if it's before any scheduled states", () => {
		const sched = new StateTimeline();
		sched.setStateAtTime("started", 0);
		sched.setStateAtTime("stopped", 1);
		sched.setStateAtTime("started", 2);
		expect(sched.getValueAtTime(-11)).to.equal("stopped");
		sched.dispose();
	});

	it("returns the last event inserted if the timing is very close", () => {
		const sched = new StateTimeline();
		sched.setStateAtTime("stopped", 1 + 1e-7);
		sched.setStateAtTime("started", 1 - 1e-7);
		expect(sched.getValueAtTime(1 - 1e-7)).to.equal("started");
		sched.dispose();
	});

	it("returns initial state if defined and query time is before any scheduled states", () => {
		const sched = new StateTimeline("started");
		sched.setStateAtTime("started", 20);
		sched.setStateAtTime("stopped", 21);
		sched.setStateAtTime("started", 22);
		expect(sched.getValueAtTime(0)).is.equal("started");
		sched.dispose();
	});

	it("gets the last occurance of the state at or before the given time", () => {
		const sched = new StateTimeline();
		sched.setStateAtTime("started", 0);
		sched.setStateAtTime("stopped", 1);
		sched.setStateAtTime("started", 2);
		sched.setStateAtTime("stopped", 3);
		expect(sched.getLastState("stopped", 1)).to.exist;
		expect(sched.getLastState("stopped", 1)?.state).is.equal("stopped");
		expect(sched.getLastState("stopped", 2)).to.exist;
		expect(sched.getLastState("stopped", 2)?.state).is.equal("stopped");
		expect(sched.getLastState("stopped", 2)?.time).is.equal(1);
		expect(sched.getLastState("stopped", 0.9)?.time).to.equal(0);
		expect(sched.getLastState("stopped", 4)?.state).is.equal("stopped");
		expect(sched.getLastState("stopped", 4)?.time).is.equal(3);
		sched.dispose();
	});

	it("gets the next occurance of the state at or before the given time", () => {
		const sched = new StateTimeline();
		sched.setStateAtTime("started", 0);
		sched.setStateAtTime("stopped", 1);
		sched.setStateAtTime("started", 2);
		sched.setStateAtTime("stopped", 3);
		expect(sched.getNextState("stopped", 1)).to.exist;
		expect(sched.getNextState("stopped", 1)?.state).is.equal("stopped");
		expect(sched.getNextState("stopped", 2)).to.exist;
		expect(sched.getNextState("stopped", 2)?.state).is.equal("stopped");
		expect(sched.getNextState("stopped", 2)?.time).is.equal(3);
		expect(sched.getNextState("stopped", 0.9)).to.exist;
		expect(sched.getNextState("stopped", 0.9)?.state).is.equal("stopped");
		expect(sched.getNextState("stopped", 0.9)?.time).is.equal(1);
		sched.dispose();
	});
});
