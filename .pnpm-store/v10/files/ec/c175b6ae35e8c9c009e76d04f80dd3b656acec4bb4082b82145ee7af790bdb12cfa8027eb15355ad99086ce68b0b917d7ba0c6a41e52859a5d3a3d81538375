import { join } from 'node:path'
import { tmpdir } from 'node:os'
import pinoPretty from 'pino-pretty'
// Test both default ("Pino") and named ("pino") imports.
import Pino, { LoggerOptions, StreamEntry, pino, multistream, transport } from '../../pino'

const destination = join(
    tmpdir(),
    '_' + Math.random().toString(36).substr(2, 9)
)

// Single
const transport1 = transport({
    target: 'pino-pretty',
    options: { some: 'options for', the: 'transport' }
})
const logger = pino(transport1)
logger.setBindings({ some: 'bindings' })
logger.info('test2')
logger.flush()
const loggerDefault = Pino(transport1)
loggerDefault.setBindings({ some: 'bindings' })
loggerDefault.info('test2')
loggerDefault.flush()

const transport2 = transport({
    target: 'pino-pretty',
})
const logger2 = pino(transport2)
logger2.info('test2')
const logger2Default = Pino(transport2)
logger2Default.info('test2')


// Multiple

const transports = transport({targets: [
    {
        level: 'info',
        target: 'pino-pretty',
        options: { some: 'options for', the: 'transport' }
    },
    {
        level: 'trace',
        target: 'pino/file',
        options: { destination }
    }
]})
const loggerMulti = pino(transports)
loggerMulti.info('test2')

// custom levels

const customLevels = {
    customDebug   : 1,
    info    : 2,
    customNetwork : 3,
    customError   : 4,
};

type CustomLevels = keyof typeof customLevels;

const pinoOpts = {
    useOnlyCustomLevels: true,
    customLevels: customLevels,
    level: 'customDebug',
} satisfies LoggerOptions;

const multistreamOpts = {
    dedupe: true,
    levels: customLevels
};

const streams: StreamEntry<CustomLevels>[] = [
    { level : 'customDebug',   stream : pinoPretty() },
    { level : 'info',    stream : pinoPretty() },
    { level : 'customNetwork', stream : pinoPretty() },
    { level : 'customError',   stream : pinoPretty() },
];

const loggerCustomLevel = pino(pinoOpts, multistream(streams, multistreamOpts));
loggerCustomLevel.customDebug('test3')
loggerCustomLevel.info('test4')
loggerCustomLevel.customError('test5')
loggerCustomLevel.customNetwork('test6')
const loggerCustomLevelDefault = Pino(pinoOpts, multistream(streams, multistreamOpts));
loggerCustomLevelDefault.customDebug('test3')
loggerCustomLevelDefault.info('test4')
loggerCustomLevelDefault.customError('test5')
loggerCustomLevelDefault.customNetwork('test6')
