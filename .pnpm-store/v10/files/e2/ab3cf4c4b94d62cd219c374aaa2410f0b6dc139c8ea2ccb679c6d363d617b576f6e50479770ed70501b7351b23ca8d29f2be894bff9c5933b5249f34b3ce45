Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const envelope = require('./envelope.js');
const time = require('./time.js');

function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [
    { type: "client_report" },
    {
      timestamp: timestamp || time.dateTimestampInSeconds(),
      discarded_events
    }
  ];
  return envelope.createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}

exports.createClientReportEnvelope = createClientReportEnvelope;
//# sourceMappingURL=clientreport.js.map
