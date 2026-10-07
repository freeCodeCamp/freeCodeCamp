"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvPoller = exports.SrvPollingEvent = void 0;
const dns = require("dns");
const timers_1 = require("timers");
const error_1 = require("../error");
const mongo_types_1 = require("../mongo_types");
const utils_1 = require("../utils");
/**
 * @internal
 * @category Event
 */
class SrvPollingEvent {
    constructor(srvRecords) {
        this.srvRecords = srvRecords;
    }
    hostnames() {
        return new Set(this.srvRecords.map(r => utils_1.HostAddress.fromSrvRecord(r).toString()));
    }
}
exports.SrvPollingEvent = SrvPollingEvent;
/** @internal */
class SrvPoller extends mongo_types_1.TypedEventEmitter {
    constructor(options) {
        super();
        this.on('error', utils_1.noop);
        if (!options || !options.srvHost) {
            throw new error_1.MongoRuntimeError('Options for SrvPoller must exist and include srvHost');
        }
        this.srvHost = options.srvHost;
        this.srvMaxHosts = options.srvMaxHosts ?? 0;
        this.srvServiceName = options.srvServiceName ?? 'mongodb';
        this.rescanSrvIntervalMS = 60000;
        this.heartbeatFrequencyMS = options.heartbeatFrequencyMS ?? 10000;
        this.haMode = false;
        this.generation = 0;
        this._timeout = undefined;
    }
    get srvAddress() {
        return `_${this.srvServiceName}._tcp.${this.srvHost}`;
    }
    get intervalMS() {
        return this.haMode ? this.heartbeatFrequencyMS : this.rescanSrvIntervalMS;
    }
    start() {
        if (!this._timeout) {
            this.schedule();
        }
    }
    stop() {
        if (this._timeout) {
            (0, timers_1.clearTimeout)(this._timeout);
            this.generation += 1;
            this._timeout = undefined;
        }
    }
    // TODO(NODE-4994): implement new logging logic for SrvPoller failures
    schedule() {
        if (this._timeout) {
            (0, timers_1.clearTimeout)(this._timeout);
        }
        this._timeout = (0, timers_1.setTimeout)(() => {
            this._poll().then(undefined, utils_1.squashError);
        }, this.intervalMS);
    }
    success(srvRecords) {
        this.haMode = false;
        this.schedule();
        this.emit(SrvPoller.SRV_RECORD_DISCOVERY, new SrvPollingEvent(srvRecords));
    }
    failure() {
        this.haMode = true;
        this.schedule();
    }
    async _poll() {
        const generation = this.generation;
        let srvRecords;
        try {
            srvRecords = await dns.promises.resolveSrv(this.srvAddress);
        }
        catch {
            this.failure();
            return;
        }
        if (generation !== this.generation) {
            return;
        }
        const finalAddresses = [];
        for (const record of srvRecords) {
            try {
                (0, utils_1.checkParentDomainMatch)(record.name, this.srvHost);
                finalAddresses.push(record);
            }
            catch (error) {
                (0, utils_1.squashError)(error);
            }
        }
        if (!finalAddresses.length) {
            this.failure();
            return;
        }
        this.success(finalAddresses);
    }
}
exports.SrvPoller = SrvPoller;
/** @event */
SrvPoller.SRV_RECORD_DISCOVERY = 'srvRecordDiscovery';
//# sourceMappingURL=srv_polling.js.map