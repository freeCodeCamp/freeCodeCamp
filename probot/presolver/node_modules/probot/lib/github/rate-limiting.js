"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bottleneck_1 = __importDefault(require("bottleneck"));
function addRateLimiting(octokit, limiter) {
    if (!limiter) {
        limiter = new bottleneck_1.default({
            maxConcurrent: 1,
            minTime: 1000
        });
    }
    var noop = function () { return Promise.resolve(); };
    octokit.hook.before('request', limiter.schedule.bind(limiter, noop));
}
exports.addRateLimiting = addRateLimiting;
//# sourceMappingURL=rate-limiting.js.map