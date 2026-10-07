import { expect } from "chai";
import { Ticker } from "./Ticker.js";

describe("Ticker", () => {
	function empty(): void {
		// do nothing
	}

	it("can be created and disposed", () => {
		const ticker = new Ticker(empty, "offline", 1);
		ticker.dispose();
	});

	it("can adjust the type", () => {
		const ticker = new Ticker(empty, "worker", 0.1);
		expect(ticker.type).to.equal("worker");
		ticker.type = "timeout";
		expect(ticker.type).to.equal("timeout");
		ticker.type = "offline";
		expect(ticker.type).to.equal("offline");
		ticker.dispose();
	});

	it("can get/set the updateInterval", () => {
		const ticker = new Ticker(empty, "worker", 0.1);
		expect(ticker.updateInterval).to.equal(0.1);
		ticker.updateInterval = 0.5;
		expect(ticker.updateInterval).to.equal(0.5);
		ticker.dispose();
	});

	context("timeout", () => {
		it("provides a callback when set to timeout", (done) => {
			const ticker = new Ticker(
				() => {
					ticker.dispose();
					done();
				},
				"timeout",
				0.01
			);
		});

		it("can adjust the interval when set to timeout", (done) => {
			const ticker = new Ticker(
				() => {
					ticker.dispose();
					done();
				},
				"timeout",
				0.01
			);
			ticker.updateInterval = 0.1;
		});
	});

	context("worker", () => {
		it("provides a callback when set to worker", (done) => {
			const ticker = new Ticker(
				() => {
					ticker.dispose();
					done();
				},
				"worker",
				0.01
			);
		});

		it("falls back to timeout if the constructor throws an error", (done) => {
			const URL = window.URL;
			// @ts-ignore
			window.URL = null;
			const ticker = new Ticker(
				() => {
					expect(ticker.type).to.equal("timeout");
					ticker.dispose();
					window.URL = URL;
					done();
				},
				"worker",
				0.01
			);
		});

		it("can adjust the interval when set to worker", (done) => {
			const ticker = new Ticker(
				() => {
					ticker.dispose();
					done();
				},
				"worker",
				0.01
			);
			ticker.updateInterval = 0.1;
		});
	});
});
