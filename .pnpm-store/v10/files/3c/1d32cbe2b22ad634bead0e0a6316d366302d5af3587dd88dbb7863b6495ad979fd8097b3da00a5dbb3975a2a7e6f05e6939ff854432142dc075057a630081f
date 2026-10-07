import { createEnvelope } from './envelope.js';
import { dateTimestampInSeconds } from './time.js';

function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [
    { type: "client_report" },
    {
      timestamp: timestamp || dateTimestampInSeconds(),
      discarded_events
    }
  ];
  return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}

export { createClientReportEnvelope };
//# sourceMappingURL=clientreport.js.map
