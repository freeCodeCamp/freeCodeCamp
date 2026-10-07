/**
 * A class which provides a reliable callback using either
 * a Web Worker, or if that isn't supported, falls back to setTimeout.
 */
export class Ticker {
    constructor(callback, type, updateInterval, contextSampleRate) {
        this._callback = callback;
        this._type = type;
        this._minimumUpdateInterval = Math.max(128 / (contextSampleRate || 44100), 0.001);
        this.updateInterval = updateInterval;
        // create the clock source for the first time
        this._createClock();
    }
    /**
     * Generate a web worker
     */
    _createWorker() {
        const blob = new Blob([
            /* javascript */ `
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval * 1000).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`,
        ], { type: "text/javascript" });
        const blobUrl = URL.createObjectURL(blob);
        const worker = new Worker(blobUrl);
        worker.onmessage = this._callback.bind(this);
        this._worker = worker;
    }
    /**
     * Create a timeout loop
     */
    _createTimeout() {
        this._timeout = setTimeout(() => {
            this._createTimeout();
            this._callback();
        }, this._updateInterval * 1000);
    }
    /**
     * Create the clock source.
     */
    _createClock() {
        if (this._type === "worker") {
            try {
                this._createWorker();
            }
            catch (e) {
                // workers not supported, fallback to timeout
                this._type = "timeout";
                this._createClock();
            }
        }
        else if (this._type === "timeout") {
            this._createTimeout();
        }
    }
    /**
     * Clean up the current clock source
     */
    _disposeClock() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        if (this._worker) {
            this._worker.terminate();
            this._worker.onmessage = null;
        }
    }
    /**
     * The rate in seconds the ticker will update
     */
    get updateInterval() {
        return this._updateInterval;
    }
    set updateInterval(interval) {
        var _a;
        this._updateInterval = Math.max(interval, this._minimumUpdateInterval);
        if (this._type === "worker") {
            (_a = this._worker) === null || _a === void 0 ? void 0 : _a.postMessage(this._updateInterval * 1000);
        }
    }
    /**
     * The type of the ticker, either a worker or a timeout
     */
    get type() {
        return this._type;
    }
    set type(type) {
        this._disposeClock();
        this._type = type;
        this._createClock();
    }
    /**
     * Clean up
     */
    dispose() {
        this._disposeClock();
    }
}
//# sourceMappingURL=Ticker.js.map