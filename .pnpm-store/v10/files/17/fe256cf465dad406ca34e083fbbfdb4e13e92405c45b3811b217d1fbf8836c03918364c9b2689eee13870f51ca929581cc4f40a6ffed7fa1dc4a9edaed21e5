import { expect } from "chai";
import { Emitter } from "./Emitter.js";

describe("Emitter", () => {
	it("can be created and disposed", () => {
		const emitter = new Emitter();
		emitter.dispose();
	});

	it("can bind events", (done) => {
		const emitter = new Emitter();
		emitter.on("something", () => {
			done();
			emitter.dispose();
		});
		emitter.emit("something");
		emitter.dispose();
	});

	it("can unbind events", () => {
		const emitter = new Emitter();
		const callback = () => {
			throw new Error("should call this");
		};
		emitter.on("something", callback);
		emitter.off("something", callback);
		emitter.emit("something");
		emitter.dispose();
	});

	it("can unbind duplicate events", () => {
		const emitter = new Emitter();
		const callback = () => {
			throw new Error("should call this");
		};
		emitter.on("something", callback);
		emitter.on("something", callback);
		emitter.on("something", callback);
		emitter.off("something", callback);
		emitter.emit("something");
		emitter.dispose();
	});

	it("'off' does nothing if there is no event scheduled", () => {
		const emitter = new Emitter();
		const callback = () => {
			throw new Error("should call this");
		};
		emitter.off("something", callback);
		emitter.emit("something");
		emitter.dispose();
	});

	it("removes all events when no callback is given", () => {
		const emitter = new Emitter();
		emitter.on("something", () => {
			throw new Error("should call this");
		});
		emitter.on("something", () => {
			throw new Error("should call this");
		});
		emitter.off("something");
		emitter.emit("something");
		emitter.off("something-else");
		emitter.dispose();
	});

	it("can remove an event while emitting", (done) => {
		const emitter = new Emitter();
		emitter.on("something", () => {
			emitter.off("something");
		});
		emitter.on("something-else", () => {
			emitter.dispose();
			done();
		});
		emitter.emit("something");
		emitter.emit("something-else");
	});

	it("can invoke an event once", () => {
		const emitter = new Emitter();
		emitter.once("something", (val) => {
			expect(val).to.equal(1);
		});
		emitter.emit("something", 1);
		emitter.emit("something", 2);
		emitter.dispose();
	});

	it("can pass arguments to the callback", (done) => {
		const emitter = new Emitter();
		emitter.on("something", (arg0, arg1) => {
			expect(arg0).to.equal("A");
			expect(arg1).to.equal("B");
			emitter.dispose();
			done();
		});
		emitter.emit("something", "A", "B");
	});

	// it("can mixin its methods to another object", done => {
	// 	const emitter = {};
	// 	Emitter.mixin(emitter);
	// 	emitter.on("test", done);
	// 	emitter.emit("test");
	// });
});
