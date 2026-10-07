import { instrumentSentryHttp } from '../http.js';
import { instrumentAmqplib, amqplibIntegration } from './amqplib/index.js';
import { instrumentAnthropicAi, anthropicAIIntegration } from './anthropic-ai/index.js';
import { instrumentConnect, connectIntegration } from './connect/index.js';
import { instrumentExpress, expressIntegration } from './express.js';
import { instrumentFastify, instrumentFastifyV3, fastifyIntegration } from './fastify/index.js';
import { instrumentFirebase, firebaseIntegration } from './firebase/firebase.js';
import { instrumentGenericPool, genericPoolIntegration } from './genericPool/index.js';
import { instrumentGoogleGenAI, googleGenAIIntegration } from './google-genai/index.js';
import { instrumentGraphql, graphqlIntegration } from './graphql/index.js';
import { instrumentHapi, hapiIntegration } from './hapi/index.js';
import { instrumentHono, honoIntegration } from './hono/index.js';
import { instrumentKafka, kafkaIntegration } from './kafka/index.js';
import { instrumentKoa, koaIntegration } from './koa/index.js';
import { instrumentLangChain, langChainIntegration } from './langchain/index.js';
import { instrumentLangGraph, langGraphIntegration } from './langgraph/index.js';
import { instrumentLruMemoizer, lruMemoizerIntegration } from './lrumemoizer/index.js';
import { instrumentMongo, mongoIntegration } from './mongo/index.js';
import { instrumentMongoose, mongooseIntegration } from './mongoose/index.js';
import { instrumentMysql, mysqlIntegration } from './mysql/index.js';
import { instrumentMysql2, mysql2Integration } from './mysql2/index.js';
import { instrumentOpenAi, openAIIntegration } from './openai/index.js';
import { instrumentPostgres, postgresIntegration } from './postgres/index.js';
import { instrumentPostgresJs, postgresJsIntegration } from './postgresjs.js';
import { prismaIntegration } from './prisma/index.js';
import { instrumentRedis, redisIntegration } from './redis/index.js';
import { instrumentTedious, tediousIntegration } from './tedious/index.js';
import { instrumentVercelAi, vercelAIIntegration } from './vercelai/index.js';

function getAutoPerformanceIntegrations() {
  return [
    expressIntegration(),
    fastifyIntegration(),
    graphqlIntegration(),
    honoIntegration(),
    mongoIntegration(),
    mongooseIntegration(),
    mysqlIntegration(),
    mysql2Integration(),
    redisIntegration(),
    postgresIntegration(),
    prismaIntegration(),
    hapiIntegration(),
    koaIntegration(),
    connectIntegration(),
    tediousIntegration(),
    genericPoolIntegration(),
    kafkaIntegration(),
    amqplibIntegration(),
    lruMemoizerIntegration(),
    // AI providers
    // LangChain must come first to disable AI provider integrations before they instrument
    langChainIntegration(),
    langGraphIntegration(),
    vercelAIIntegration(),
    openAIIntegration(),
    anthropicAIIntegration(),
    googleGenAIIntegration(),
    postgresJsIntegration(),
    firebaseIntegration()
  ];
}
function getOpenTelemetryInstrumentationToPreload() {
  return [
    instrumentSentryHttp,
    instrumentExpress,
    instrumentConnect,
    instrumentFastify,
    instrumentFastifyV3,
    instrumentHapi,
    instrumentHono,
    instrumentKafka,
    instrumentKoa,
    instrumentLruMemoizer,
    instrumentMongo,
    instrumentMongoose,
    instrumentMysql,
    instrumentMysql2,
    instrumentPostgres,
    instrumentHapi,
    instrumentGraphql,
    instrumentRedis,
    instrumentTedious,
    instrumentGenericPool,
    instrumentAmqplib,
    instrumentLangChain,
    instrumentVercelAi,
    instrumentOpenAi,
    instrumentPostgresJs,
    instrumentFirebase,
    instrumentAnthropicAi,
    instrumentGoogleGenAI,
    instrumentLangGraph
  ];
}

export { getAutoPerformanceIntegrations, getOpenTelemetryInstrumentationToPreload };
//# sourceMappingURL=index.js.map
