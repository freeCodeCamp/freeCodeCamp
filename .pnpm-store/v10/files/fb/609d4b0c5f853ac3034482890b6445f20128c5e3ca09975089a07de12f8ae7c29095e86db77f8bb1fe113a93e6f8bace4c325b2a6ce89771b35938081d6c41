import { BasicTests } from "../../test/helper/Basic.js";
import { UserMedia } from "./UserMedia.js";
import { expect } from "chai";
import { OfflineContext } from "../core/index.js";

describe("UserMedia", () => {
	// run the common tests
	BasicTests(UserMedia);

	context("Source Tests", () => {
		it("can be constructed with the input number", () => {
			const extIn = new UserMedia();
			extIn.dispose();
		});

		it("can be constructed with an options object", () => {
			const extIn = new UserMedia({
				volume: -10,
				mute: false,
			});
			expect(extIn.volume.value).to.be.closeTo(-10, 0.1);
			expect(extIn.mute).to.be.false;
			extIn.dispose();
		});

		it("properties return undefined before open", () => {
			const extIn = new UserMedia();
			expect(extIn.deviceId).to.be.undefined;
			expect(extIn.groupId).to.be.undefined;
			expect(extIn.label).to.be.undefined;
			extIn.dispose();
		});

		it("indicates if the browser has UserMedia support", () => {
			expect(UserMedia.supported).to.be.a("boolean");
		});
	});

	context("Opening and closing", function () {
		// long timeout to give testers time to allow the microphone
		this.timeout(100000);

		let HAS_USER_MEDIA_INPUTS = false;

		before(() => {
			return UserMedia.enumerateDevices().then((devices) => {
				HAS_USER_MEDIA_INPUTS = devices.length > 0;
			});
		});

		it("open returns a promise", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				const promise = extIn.open();
				expect(promise).to.have.property("then");
				return promise.then(() => {
					extIn.dispose();
				});
			}
		});

		it("can open an input", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				return extIn.open().then(() => {
					extIn.dispose();
				});
			}
		});

		it("can open an input by name", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				let name: string;
				return UserMedia.enumerateDevices()
					.then((devices) => {
						name = devices[0].deviceId;
						return extIn.open(name);
					})
					.then(() => {
						expect(extIn.deviceId).to.equal(name);
						extIn.dispose();
					});
			}
		});

		it("can open an input by index", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				return extIn.open(0).then(() => {
					extIn.dispose();
				});
			}
		});

		it("throws an error if it cant find the device name", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				return extIn
					.open("doesn't exist")
					.then(() => {
						// shouldn't call 'then'
						throw new Error("shouldnt call 'then'");
					})
					.catch(() => {
						extIn.dispose();
					});
			}
		});

		it("is 'started' after media is open and 'stopped' otherwise", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				expect(extIn.state).to.equal("stopped");
				return extIn.open().then(() => {
					expect(extIn.state).to.equal("started");
					extIn.dispose();
				});
			}
		});

		it("has a label, group and device id when open", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				return extIn.open().then(() => {
					expect(extIn.deviceId).to.be.a("string");
					expect(extIn.groupId).to.be.a("string");
					expect(extIn.label).to.be.a("string");
					extIn.dispose();
				});
			}
		});

		it("can reopen an input", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				return extIn
					.open()
					.then(() => {
						return extIn.open();
					})
					.then(() => {
						extIn.dispose();
					});
			}
		});

		it("can close an input", () => {
			if (HAS_USER_MEDIA_INPUTS) {
				const extIn = new UserMedia();
				return extIn.open().then(() => {
					extIn.close();
					extIn.dispose();
				});
			}
		});

		it("can enumerate devices", () => {
			return UserMedia.enumerateDevices().then((devices) => {
				expect(devices).to.be.instanceOf(Array);
			});
		});

		it("doesn't work in OfflineContext", (done) => {
			if (HAS_USER_MEDIA_INPUTS) {
				const context = new OfflineContext(2, 2, 44100);
				const extIn = new UserMedia({ context });
				extIn.open().catch(() => {
					done();
				});
			} else {
				done();
			}
		});
	});
});
