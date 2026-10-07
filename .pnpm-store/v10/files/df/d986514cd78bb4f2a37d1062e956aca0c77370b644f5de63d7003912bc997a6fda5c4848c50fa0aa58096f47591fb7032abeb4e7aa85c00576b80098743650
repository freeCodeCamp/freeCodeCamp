import { __awaiter } from "tslib";
import { OfflineContext } from "../../core/context/OfflineContext.js";
/**
 * Render a segment of the oscillator to an offline context and return the results as an array
 */
export function generateWaveform(instance, length) {
    return __awaiter(this, void 0, void 0, function* () {
        const duration = length / instance.context.sampleRate;
        const context = new OfflineContext(1, duration, instance.context.sampleRate);
        const clone = new instance.constructor(Object.assign(instance.get(), {
            // should do 2 iterations
            frequency: 2 / duration,
            // zero out the detune
            detune: 0,
            context,
        })).toDestination();
        clone.start(0);
        const buffer = yield context.render();
        return buffer.getChannelData(0);
    });
}
//# sourceMappingURL=OscillatorInterface.js.map