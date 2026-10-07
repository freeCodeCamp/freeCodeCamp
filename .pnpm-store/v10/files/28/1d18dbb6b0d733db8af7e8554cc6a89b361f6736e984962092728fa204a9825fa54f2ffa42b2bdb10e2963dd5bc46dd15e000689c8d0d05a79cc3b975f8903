Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const http = require('../http.js');
const index$g = require('./amqplib/index.js');
const index$k = require('./anthropic-ai/index.js');
const index = require('./connect/index.js');
const express = require('./express.js');
const index$1 = require('./fastify/index.js');
const firebase = require('./firebase/firebase.js');
const index$f = require('./genericPool/index.js');
const index$l = require('./google-genai/index.js');
const index$c = require('./graphql/index.js');
const index$2 = require('./hapi/index.js');
const index$3 = require('./hono/index.js');
const index$4 = require('./kafka/index.js');
const index$5 = require('./koa/index.js');
const index$h = require('./langchain/index.js');
const index$m = require('./langgraph/index.js');
const index$6 = require('./lrumemoizer/index.js');
const index$7 = require('./mongo/index.js');
const index$8 = require('./mongoose/index.js');
const index$9 = require('./mysql/index.js');
const index$a = require('./mysql2/index.js');
const index$j = require('./openai/index.js');
const index$b = require('./postgres/index.js');
const postgresjs = require('./postgresjs.js');
const index$n = require('./prisma/index.js');
const index$d = require('./redis/index.js');
const index$e = require('./tedious/index.js');
const index$i = require('./vercelai/index.js');

function getAutoPerformanceIntegrations() {
  return [
    express.expressIntegration(),
    index$1.fastifyIntegration(),
    index$c.graphqlIntegration(),
    index$3.honoIntegration(),
    index$7.mongoIntegration(),
    index$8.mongooseIntegration(),
    index$9.mysqlIntegration(),
    index$a.mysql2Integration(),
    index$d.redisIntegration(),
    index$b.postgresIntegration(),
    index$n.prismaIntegration(),
    index$2.hapiIntegration(),
    index$5.koaIntegration(),
    index.connectIntegration(),
    index$e.tediousIntegration(),
    index$f.genericPoolIntegration(),
    index$4.kafkaIntegration(),
    index$g.amqplibIntegration(),
    index$6.lruMemoizerIntegration(),
    // AI providers
    // LangChain must come first to disable AI provider integrations before they instrument
    index$h.langChainIntegration(),
    index$m.langGraphIntegration(),
    index$i.vercelAIIntegration(),
    index$j.openAIIntegration(),
    index$k.anthropicAIIntegration(),
    index$l.googleGenAIIntegration(),
    postgresjs.postgresJsIntegration(),
    firebase.firebaseIntegration()
  ];
}
function getOpenTelemetryInstrumentationToPreload() {
  return [
    http.instrumentSentryHttp,
    express.instrumentExpress,
    index.instrumentConnect,
    index$1.instrumentFastify,
    index$1.instrumentFastifyV3,
    index$2.instrumentHapi,
    index$3.instrumentHono,
    index$4.instrumentKafka,
    index$5.instrumentKoa,
    index$6.instrumentLruMemoizer,
    index$7.instrumentMongo,
    index$8.instrumentMongoose,
    index$9.instrumentMysql,
    index$a.instrumentMysql2,
    index$b.instrumentPostgres,
    index$2.instrumentHapi,
    index$c.instrumentGraphql,
    index$d.instrumentRedis,
    index$e.instrumentTedious,
    index$f.instrumentGenericPool,
    index$g.instrumentAmqplib,
    index$h.instrumentLangChain,
    index$i.instrumentVercelAi,
    index$j.instrumentOpenAi,
    postgresjs.instrumentPostgresJs,
    firebase.instrumentFirebase,
    index$k.instrumentAnthropicAi,
    index$l.instrumentGoogleGenAI,
    index$m.instrumentLangGraph
  ];
}

exports.getAutoPerformanceIntegrations = getAutoPerformanceIntegrations;
exports.getOpenTelemetryInstrumentationToPreload = getOpenTelemetryInstrumentationToPreload;
//# sourceMappingURL=index.js.map
