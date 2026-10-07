import { expect } from "chai";
import { Offline } from "../../../test/helper/Offline.js";
import { TransportClass } from "./Transport.js";
import { TransportEvent } from "./TransportEvent.js";

describe("TransportEvent", () => {
	it("can be created and disposed", () => {
		return Offline((context) => {
			const transport = new TransportClass({ context });
			const event = new TransportEvent(transport, {
				time: 0,
			});
			event.dispose();
		});
	});

	it("has a unique id", () => {
		return Offline((context) => {
			const transport = new TransportClass({ context });
			const event = new TransportEvent(transport, {
				time: 0,
			});
			expect(event.id).to.be.a("number");
			event.dispose();
		});
	});

	it("can invoke the callback", () => {
		let wasInvoked = false;
		return Offline((context) => {
			const transport = new TransportClass({ context });
			const event = new TransportEvent(transport, {
				callback: (time) => {
					expect(time).to.equal(100);
					wasInvoked = true;
				},
				time: 0,
			});
			event.invoke(100);
		}).then(() => {
			expect(wasInvoked).to.equal(true);
		});
	});
});
