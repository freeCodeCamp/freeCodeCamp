import { isThrottlingError } from "@smithy/service-error-classification";
export class DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (isThrottlingError(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}
