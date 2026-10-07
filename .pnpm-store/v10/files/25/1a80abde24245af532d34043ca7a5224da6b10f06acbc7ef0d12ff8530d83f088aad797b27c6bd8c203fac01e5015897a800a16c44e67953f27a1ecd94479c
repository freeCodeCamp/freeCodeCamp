import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Panner3D } from "./Panner3D.js";

describe("Panner3D", () => {
	BasicTests(Panner3D);

	it("passes the incoming signal through", () => {
		return PassAudio((input) => {
			const panner = new Panner3D().toDestination();
			input.connect(panner);
		});
	});

	it("can get/set the position individually", () => {
		const panner = new Panner3D();
		panner.positionX.value = 10;
		expect(panner.positionX.value).to.equal(10);
		panner.positionY.value = 20;
		expect(panner.positionY.value).to.equal(20);
		panner.positionZ.value = -1;
		expect(panner.positionZ.value).to.equal(-1);
		panner.dispose();
	});

	it("can get/set the orientation individually", () => {
		const panner = new Panner3D();
		panner.orientationX.value = 2;
		expect(panner.orientationX.value).to.equal(2);
		panner.orientationY.value = 4;
		expect(panner.orientationY.value).to.equal(4);
		panner.orientationZ.value = -3;
		expect(panner.orientationZ.value).to.equal(-3);
		panner.dispose();
	});

	it("can get/set the position through setPosition", () => {
		const panner = new Panner3D();
		panner.setPosition(3, -11, 2);
		expect(panner.positionX.value).to.equal(3);
		expect(panner.positionY.value).to.equal(-11);
		expect(panner.positionZ.value).to.equal(2);
		panner.dispose();
	});

	it("can get/set the orientation through setOrientation", () => {
		const panner = new Panner3D();
		panner.setOrientation(2, -1, 0.5);
		expect(panner.orientationX.value).to.equal(2);
		expect(panner.orientationY.value).to.equal(-1);
		expect(panner.orientationZ.value).to.equal(0.5);
		panner.dispose();
	});

	it("can get/set all of the other attributes", () => {
		const values = {
			coneInnerAngle: 120,
			coneOuterAngle: 280,
			coneOuterGain: 0.3,
			distanceModel: "exponential",
			maxDistance: 10002,
			panningModel: "HRTF",
			refDistance: 0.3,
			rolloffFactor: 3,
		};
		const panner = new Panner3D();
		for (const v in values) {
			if (v in values) {
				panner[v] = values[v];
				expect(panner[v]).to.equal(values[v]);
			}
		}
		panner.dispose();
	});
});
