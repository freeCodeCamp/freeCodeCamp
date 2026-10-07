"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _chromeTraceEvent() {
  const data = require("chrome-trace-event");

  _chromeTraceEvent = function () {
    return data;
  };

  return data;
}

class Trace {
  constructor() {
    this.tracer = new (_chromeTraceEvent().Tracer)();
    this.tid = 0;
    this.eventId = 0;
  }

  getEventId() {
    return this.eventId++;
  }

  init(ts) {
    this.tracer.instantEvent({
      name: 'TracingStartedInPage',
      id: this.getEventId(),
      ts,
      cat: ['disabled-by-default-devtools.timeline'],
      args: {
        data: {
          sessionId: '-1',
          page: '0xfff',
          frames: [{
            frame: '0xfff',
            url: 'parcel',
            name: ''
          }]
        }
      }
    });
    this.tracer.instantEvent({
      name: 'TracingStartedInBrowser',
      id: this.getEventId(),
      ts,
      cat: ['disabled-by-default-devtools.timeline'],
      args: {
        data: {
          sessionId: '-1'
        }
      }
    });
  }

  addCPUProfile(name, profile) {
    if (this.eventId === 0) {
      this.init(profile.startTime);
    }

    const trace = this.tracer;
    const tid = this.tid;
    this.tid++;
    const cpuStartTime = profile.startTime;
    const cpuEndTime = profile.endTime;
    trace.instantEvent({
      tid,
      id: this.getEventId(),
      cat: ['toplevel'],
      name: 'TaskQueueManager::ProcessTaskFromWorkQueue',
      args: {
        src_file: '../../ipc/ipc_moji_bootstrap.cc',
        src_func: 'Accept'
      },
      ts: cpuStartTime
    });
    trace.completeEvent({
      tid,
      name: 'EvaluateScript',
      id: this.getEventId(),
      cat: ['devtools.timeline'],
      ts: cpuStartTime,
      dur: cpuEndTime - cpuStartTime,
      args: {
        data: {
          url: 'parcel',
          lineNumber: 1,
          columnNumber: 1,
          frame: '0xFFF'
        }
      }
    });
    trace.instantEvent({
      tid,
      ts: 0,
      ph: 'M',
      cat: ['__metadata'],
      name: 'thread_name',
      args: {
        name
      }
    });
    trace.instantEvent({
      tid,
      name: 'CpuProfile',
      id: this.getEventId(),
      cat: ['disabled-by-default-devtools.timeline'],
      ts: cpuEndTime,
      args: {
        data: {
          cpuProfile: profile
        }
      }
    });
  }

  pipe(writable) {
    return this.tracer.pipe(writable);
  }

  flush() {
    this.tracer.push(null);
  }

}

exports.default = Trace;