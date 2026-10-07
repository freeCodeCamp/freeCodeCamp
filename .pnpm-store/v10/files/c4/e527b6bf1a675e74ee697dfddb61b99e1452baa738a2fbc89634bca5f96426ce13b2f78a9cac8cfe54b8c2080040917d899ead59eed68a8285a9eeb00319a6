import { IncomingMessage, ServerResponse } from "http";
import { mock } from 'node:test'
import { Socket } from "net";
import { expectError, expectType } from 'tsd';
import pino, { LogFn, LoggerOptions } from "../../";
import Logger = pino.Logger;

const log = pino();
const info = log.info;
const error = log.error;

info("hello world");
error("this is at error level");

// primitive types
info('simple string');
info(true)
info(42);
info(3.14);
info(null);
info(undefined);

// object types
info({ a: 1, b: '2' });
info(new Error());
info(new Date());
info([])
info(new Map());
info(new Set());

// placeholder messages
info('Hello %s', 'world');
info('The answer is %d', 42);
info('The object is %o', { a: 1, b: '2' });
info('The json is %j', { a: 1, b: '2' });
info('The object is %O', { a: 1, b: '2' });
info('The answer is %d and the question is %s with %o', 42, 'unknown', { correct: 'order' });
info('Missing placeholder is fine %s');

// %s placeholder supports all primitive types
info('Boolean %s', true);
info('Boolean %s', false);
info('Number %s', 123);
info('Number %s', 3.14);
info('BigInt %s', BigInt(123));
info('Null %s', null);
info('Undefined %s', undefined);
info('Symbol %s', Symbol('test'));
info('String %s', 'hello');

// %s placeholder with multiple primitives
info('Multiple primitives %s %s %s', true, 42, 'world');
info('All primitive types %s %s %s %s %s %s %s', 'string', 123, true, BigInt(123), null, undefined, Symbol('test'));
declare const errorOrString: string | Error;
info(errorOrString)

// placeholder messages type errors
expectError(info('The answer is %d', 'not a number'));
expectError(info('The object is %o', 'not an object'));
expectError(info('The object is %j', 'not a JSON'));
expectError(info('The object is %O', 'not an object'));
expectError(info('The answer is %d and the question is %s with %o', 42, { incorrect: 'order' }, 'unknown'));
expectError(info('Extra message %s', 'after placeholder', 'not allowed'));

// object types with messages
info({ obj: 42 }, "hello world");
info({ obj: 42, b: 2 }, "hello world");
info({ obj: { aa: "bbb" } }, "another");
info({ a: 1, b: '2' }, 'hello world with %s', 'extra data');

// Extra message after placeholder
expectError(info({ a: 1, b: '2' }, 'hello world with %d', 2, 'extra' ));

// metadata with messages type passes, because of custom toString method
// We can't detect if the object has a custom toString method that returns a string
info({ a: 1, b: '2' }, 'hello world with %s', {});

// metadata after message
expectError(info('message', { a: 1, b: '2' }));

// multiple strings without placeholder
expectError(info('string1', 'string2'));
expectError(info('string1', 'string2', 'string3'));

setImmediate(info, "after setImmediate");
error(new Error("an error"));

const writeSym = pino.symbols.writeSym;

const testUniqSymbol = {
    [pino.symbols.needsMetadataGsym]: true,
}[pino.symbols.needsMetadataGsym];

const log2: pino.Logger = pino({
    name: "myapp",
    safe: true,
    serializers: {
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res,
        err: pino.stdSerializers.err,
    },
});

pino({
    write(o) {},
});

pino({
    mixin() {
        return { customName: "unknown", customId: 111 };
    },
});

pino({
    mixin: () => ({ customName: "unknown", customId: 111 }),
});

pino({
    mixin: (context: object) => ({ customName: "unknown", customId: 111 }),
});

pino({
    mixin: (context: object, level: number) => ({ customName: "unknown", customId: 111 }),
});

pino({
    redact: { paths: [], censor: "SECRET" },
});

pino({
    redact: { paths: [], censor: () => "SECRET" },
});

pino({
    redact: { paths: [], censor: (value) => value },
});

pino({
    redact: { paths: [], censor: (value, path) => path.join() },
});

pino({
    depthLimit: 1
});

pino({
    edgeLimit: 1
});

pino({
    browser: {
        write(o) {},
    },
});

pino({
    browser: {
        write: {
            info(o) {},
            error(o) {},
        },
        serialize: true,
        asObject: true,
        transmit: {
            level: "fatal",
            send: (level, logEvent) => {
                level;
                logEvent.bindings;
                logEvent.level;
                logEvent.ts;
                logEvent.messages;
            },
        },
        disabled: false
    },
});

pino({
  browser: {
    asObjectBindingsOnly: true,
  }
});

pino({}, undefined);

pino({ base: null });
if ("pino" in log) console.log(`pino version: ${log.pino}`);

expectType<void>(log.flush());
log.flush((err?: Error) => undefined);
log.child({ a: "property" }).info("hello child!");
log.level = "error";
log.info("nope");
const child = log.child({ foo: "bar" });
child.info("nope again");
child.level = "info";
child.info("hooray");
log.info("nope nope nope");
log.child({ foo: "bar" }, { level: "debug" }).debug("debug!");
child.bindings();
const customSerializers = {
    test() {
        return "this is my serializer";
    },
};
pino().child({}, { serializers: customSerializers }).info({ test: "should not show up" });
const child2 = log.child({ father: true });
const childChild = child2.child({ baby: true });
const childRedacted = pino().child({}, { redact: ["path"] })
childRedacted.info({
  msg: "logged with redacted properties",
  path: "Not shown",
});
const childAnotherRedacted = pino().child({}, {
    redact: {
        paths: ["anotherPath"],
        censor: "Not the log you\re looking for",
    }
})
childAnotherRedacted.info({
    msg: "another logged with redacted properties",
    anotherPath: "Not shown",
});

log.level = "info";
if (log.levelVal === 30) {
    console.log("logger level is `info`");
}

const listener = (lvl: any, val: any, prevLvl: any, prevVal: any) => {
    console.log(lvl, val, prevLvl, prevVal);
};
log.on("level-change", (lvl, val, prevLvl, prevVal, logger) => {
    console.log(lvl, val, prevLvl, prevVal);
});
log.level = "trace";
log.removeListener("level-change", listener);
log.level = "info";

pino.levels.values.error === 50;
pino.levels.labels[50] === "error";

const logstderr: pino.Logger = pino(process.stderr);
logstderr.error("on stderr instead of stdout");

log.useLevelLabels = true;
log.info("lol");
log.level === "info";
const isEnabled: boolean = log.isLevelEnabled("info");

const redacted = pino({
    redact: ["path"],
});

redacted.info({
    msg: "logged with redacted properties",
    path: "Not shown",
});

const anotherRedacted = pino({
    redact: {
        paths: ["anotherPath"],
        censor: "Not the log you\re looking for",
    },
});

anotherRedacted.info({
    msg: "another logged with redacted properties",
    anotherPath: "Not shown",
});

const withTimeFn = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
});

const withRFC3339TimeFn = pino({
    timestamp: pino.stdTimeFunctions.isoTimeNano,
});

const withNestedKey = pino({
    nestedKey: "payload",
});

const withHooks = pino({
    hooks: {
        logMethod(args, method, level) {
            expectType<pino.Logger>(this);
            return method.apply(this, args);
        },
        streamWrite(s) {
            expectType<string>(s);
            return s.replaceAll('secret-key', 'xxx');
        },
    },
});

// Properties/types imported from pino-std-serializers
const wrappedErrSerializer = pino.stdSerializers.wrapErrorSerializer((err: pino.SerializedError) => {
    return { ...err, newProp: "foo" };
});
const wrappedReqSerializer = pino.stdSerializers.wrapRequestSerializer((req: pino.SerializedRequest) => {
    return { ...req, newProp: "foo" };
});
const wrappedResSerializer = pino.stdSerializers.wrapResponseSerializer((res: pino.SerializedResponse) => {
    return { ...res, newProp: "foo" };
});

const socket = new Socket();
const incomingMessage = new IncomingMessage(socket);
const serverResponse = new ServerResponse(incomingMessage);

const mappedHttpRequest: { req: pino.SerializedRequest } = pino.stdSerializers.mapHttpRequest(incomingMessage);
const mappedHttpResponse: { res: pino.SerializedResponse } = pino.stdSerializers.mapHttpResponse(serverResponse);

const serializedErr: pino.SerializedError = pino.stdSerializers.err(new Error());
const serializedReq: pino.SerializedRequest = pino.stdSerializers.req(incomingMessage);
const serializedRes: pino.SerializedResponse = pino.stdSerializers.res(serverResponse);

/**
 * Destination static method
 */
const destinationViaDefaultArgs = pino.destination();
const destinationViaStrFileDescriptor = pino.destination("/log/path");
const destinationViaNumFileDescriptor = pino.destination(2);
const destinationViaStream = pino.destination(process.stdout);
const destinationViaOptionsObject = pino.destination({ dest: "/log/path", sync: false });

pino(destinationViaDefaultArgs);
pino({ name: "my-logger" }, destinationViaDefaultArgs);
pino(destinationViaStrFileDescriptor);
pino({ name: "my-logger" }, destinationViaStrFileDescriptor);
pino(destinationViaNumFileDescriptor);
pino({ name: "my-logger" }, destinationViaNumFileDescriptor);
pino(destinationViaStream);
pino({ name: "my-logger" }, destinationViaStream);
pino(destinationViaOptionsObject);
pino({ name: "my-logger" }, destinationViaOptionsObject);

try {
    throw new Error('Some error')
} catch (err) {
    log.error(err)
}

interface StrictShape {
    activity: string;
    err?: unknown;
}

info<StrictShape>({
    activity: "Required property",
});

const logLine: pino.LogDescriptor = {
    level: 20,
    msg: "A log message",
    time: new Date().getTime(),
    aCustomProperty: true,
};

interface CustomLogger extends pino.Logger {
    customMethod(msg: string, ...args: unknown[]): void;
}

const serializerFunc: pino.SerializerFn = () => {}
const writeFunc: pino.WriteFn = () => {}

interface CustomBaseLogger extends pino.BaseLogger {
  child(): CustomBaseLogger
}

const customBaseLogger: CustomBaseLogger = {
  level: 'info',
  fatal() {},
  error() {},
  warn() {},
  info() {},
  debug() {},
  trace() {},
  silent() {},
  child() { return this },
  msgPrefix: 'prefix',
}

// custom levels
const log3 = pino({ customLevels: { myLevel: 100 } })
expectError(log3.log())
log3.level = 'myLevel'
log3.myLevel('')
log3.child({}).myLevel('')

log3.on('level-change', (lvl, val, prevLvl, prevVal, instance) => {
    instance.myLevel('foo');
});

const clog3 = log3.child({}, { customLevels: { childLevel: 120 } })
// child inherit parent
clog3.myLevel('')
// child itself
clog3.childLevel('')
const cclog3 = clog3.child({}, { customLevels: { childLevel2: 130 } })
// child inherit root
cclog3.myLevel('')
// child inherit parent
cclog3.childLevel('')
// child itself
cclog3.childLevel2('')

const ccclog3 = clog3.child({})
expectError(ccclog3.nonLevel(''))

const withChildCallback = pino({
    onChild: (child: Logger) => {}
})
withChildCallback.onChild = (child: Logger) => {}

pino({
    crlf: true,
});

const customLevels = { foo: 99, bar: 42 }

const customLevelLogger = pino({ customLevels });

type CustomLevelLogger = typeof customLevelLogger
type CustomLevelLoggerLevels = pino.Level | keyof typeof customLevels

const fn = (logger: Pick<CustomLevelLogger, CustomLevelLoggerLevels>) => {}

const customLevelChildLogger = customLevelLogger.child({ name: "child" })

fn(customLevelChildLogger); // missing foo typing

// unknown option
expectError(
  pino({
    hello: 'world'
  })
);

// unknown option
expectError(
  pino({
    hello: 'world',
    customLevels: {
      'log': 30
    }
  })
);

function dangerous () {
  throw Error('foo')
}

try {
  dangerous()
} catch (err) {
  log.error(err)
}

try {
  dangerous()
} catch (err) {
  log.error({ err })
}

const bLogger = pino({
  customLevels: {
    log: 5,
  },
  level: 'log',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

// Test that we can properly extract parameters from the log fn type
type LogParam = Parameters<LogFn>
const [param1, param2, param3, param4]: LogParam = [{ multiple: 'params' }, 'should', 'be', 'accepted']

expectType<unknown>(param1)
expectType<string>(param2)
expectType<unknown>(param3)
expectType<unknown>(param4)

const logger = mock.fn<LogFn>()
logger.mock.calls[0].arguments[1]?.includes('I should be able to get params')

const hooks: LoggerOptions['hooks'] = {
    logMethod(this, parameters, method) {
        if (parameters.length >= 2) {
        const [parameter1, parameter2, ...remainingParameters] = parameters;
        if (typeof parameter1 === 'string') {
            return method.apply(this, [parameter2, parameter1, ...remainingParameters]);
        }
        return method.apply(this, [parameter2]);
        }

        return method.apply(this, parameters);
    }
}

expectType<Logger<'log'>>(pino({
  customLevels: {
    log: 5,
  },
  level: 'log',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
}))

const parentLogger1 = pino({
  customLevels: { myLevel: 90 },
  onChild: (child) => { const a = child.myLevel; }
}, process.stdout)
parentLogger1.onChild = (child) => { child.myLevel(''); }

const childLogger1 = parentLogger1.child({});
childLogger1.myLevel('');
expectError(childLogger1.doesntExist(''));

const parentLogger2 = pino({}, process.stdin);
expectError(parentLogger2.onChild = (child) => { const b = child.doesntExist; });

const childLogger2 = parentLogger2.child({});
expectError(childLogger2.doesntExist);

expectError(pino({
  onChild: (child) => { const a = child.doesntExist; }
}, process.stdout));

const pinoWithoutLevelsSorting = pino({});
const pinoWithDescSortingLevels = pino({ levelComparison: 'DESC' });
const pinoWithAscSortingLevels = pino({ levelComparison: 'ASC' });
const pinoWithCustomSortingLevels = pino({ levelComparison: () => false });
// with wrong level comparison direction
expectError(pino({ levelComparison: 'SOME'}), process.stdout);
// with wrong level comparison type
expectError(pino({ levelComparison: 123}), process.stdout);
// with wrong custom level comparison return type
expectError(pino({ levelComparison: () => null }), process.stdout);
expectError(pino({ levelComparison: () => 1 }), process.stdout);
expectError(pino({ levelComparison: () => 'string' }), process.stdout);

const customLevelsOnlyOpts = {
    useOnlyCustomLevels: true,
    customLevels: {
        customDebug: 10,
        info: 20, // to make sure the default names are also available for override
        customNetwork: 30,
        customError: 40,
    },
    level: 'customDebug',
} satisfies LoggerOptions;

const loggerWithCustomLevelOnly = pino(customLevelsOnlyOpts);
loggerWithCustomLevelOnly.customDebug('test3')
loggerWithCustomLevelOnly.info('test4')
loggerWithCustomLevelOnly.customError('test5')
loggerWithCustomLevelOnly.customNetwork('test6')

expectError(loggerWithCustomLevelOnly.fatal('test'));
expectError(loggerWithCustomLevelOnly.error('test'));
expectError(loggerWithCustomLevelOnly.warn('test'));
expectError(loggerWithCustomLevelOnly.debug('test'));
expectError(loggerWithCustomLevelOnly.trace('test'));

// Module extension
declare module "../../" {
    interface LogFnFields {
        bannedField?: never;
        typeCheckedField?: string
    }
}

info({typeCheckedField: 'bar'})
expectError(info({bannedField: 'bar'}))
expectError(info({typeCheckedField: 123}))
