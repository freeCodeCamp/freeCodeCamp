import "../core/worklet/SingleIOProcessor.worklet.js";
import { registerProcessor } from "../core/worklet/WorkletGlobalScope.js";

export const workletName = "bit-crusher";

export const bitCrusherWorklet = /* javascript */ `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;

registerProcessor(workletName, bitCrusherWorklet);
