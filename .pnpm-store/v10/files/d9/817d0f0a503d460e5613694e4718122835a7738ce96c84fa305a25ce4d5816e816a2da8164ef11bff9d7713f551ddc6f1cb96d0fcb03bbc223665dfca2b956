const require_fetchUtils = require('./fetchUtils-umV5xXBy.cjs');

//#region src/BatchInterceptor.ts
/**
* A batch interceptor that exposes a single interface
* to apply and operate with multiple interceptors at once.
*/
var BatchInterceptor = class BatchInterceptor extends require_fetchUtils.Interceptor {
	constructor(options) {
		BatchInterceptor.symbol = Symbol(options.name);
		super(BatchInterceptor.symbol);
		this.interceptors = options.interceptors;
	}
	setup() {
		const logger = this.logger.extend("setup");
		logger.info("applying all %d interceptors...", this.interceptors.length);
		for (const interceptor of this.interceptors) {
			logger.info("applying \"%s\" interceptor...", interceptor.constructor.name);
			interceptor.apply();
			logger.info("adding interceptor dispose subscription");
			this.subscriptions.push(() => interceptor.dispose());
		}
	}
	on(event, listener) {
		for (const interceptor of this.interceptors) interceptor.on(event, listener);
		return this;
	}
	once(event, listener) {
		for (const interceptor of this.interceptors) interceptor.once(event, listener);
		return this;
	}
	off(event, listener) {
		for (const interceptor of this.interceptors) interceptor.off(event, listener);
		return this;
	}
	removeAllListeners(event) {
		for (const interceptors of this.interceptors) interceptors.removeAllListeners(event);
		return this;
	}
};

//#endregion
Object.defineProperty(exports, 'BatchInterceptor', {
  enumerable: true,
  get: function () {
    return BatchInterceptor;
  }
});
//# sourceMappingURL=BatchInterceptor-Z1lwK23r.cjs.map