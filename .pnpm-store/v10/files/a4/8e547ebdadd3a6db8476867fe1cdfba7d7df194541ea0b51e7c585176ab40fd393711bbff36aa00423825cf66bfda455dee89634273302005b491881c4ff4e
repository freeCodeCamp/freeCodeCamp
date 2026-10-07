import { ToneAudioNode, } from "../context/ToneAudioNode.js";
import { noOp } from "../util/Interface.js";
import { getWorkletGlobalScope } from "./WorkletGlobalScope.js";
export class ToneAudioWorklet extends ToneAudioNode {
    constructor(options) {
        super(options);
        this.name = "ToneAudioWorklet";
        /**
         * The constructor options for the node
         */
        this.workletOptions = {};
        /**
         * Callback which is invoked when there is an error in the processing
         */
        this.onprocessorerror = noOp;
        const blobUrl = URL.createObjectURL(new Blob([getWorkletGlobalScope()], { type: "text/javascript" }));
        const name = this._audioWorkletName();
        this._dummyGain = this.context.createGain();
        this._dummyParam = this._dummyGain.gain;
        // Register the processor
        this.context.addAudioWorkletModule(blobUrl).then(() => {
            // create the worklet when it's read
            if (!this.disposed) {
                this._worklet = this.context.createAudioWorkletNode(name, this.workletOptions);
                this._worklet.onprocessorerror =
                    this.onprocessorerror.bind(this);
                this.onReady(this._worklet);
            }
        });
    }
    dispose() {
        super.dispose();
        this._dummyGain.disconnect();
        if (this._worklet) {
            this._worklet.port.postMessage("dispose");
            this._worklet.disconnect();
        }
        return this;
    }
}
//# sourceMappingURL=ToneAudioWorklet.js.map