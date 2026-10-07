import pino from '../../pino'
import { expectType } from "tsd";

// Single
const transport = pino.transport({
    target: '#pino/pretty',
    options: { some: 'options for', the: 'transport' }
})
pino(transport)

expectType<pino.Logger>(pino({
    transport: {
        target: 'pino-pretty'
    },
}))

// Multiple
const transports = pino.transport({targets: [
    {
        level: 'info',
        target: '#pino/pretty',
        options: { some: 'options for', the: 'transport' }
    },
    {
        level: 'trace',
        target: '#pino/file',
        options: { destination: './test.log' }
    }
]})
pino(transports)

expectType<pino.Logger>(pino({
    transport: {targets: [
            {
                level: 'info',
                target: '#pino/pretty',
                options: { some: 'options for', the: 'transport' }
            },
            {
                level: 'trace',
                target: '#pino/file',
                options: { destination: './test.log' }
            }
        ]},
}))

const transportsWithCustomLevels = pino.transport({targets: [
    {
        level: 'info',
        target: '#pino/pretty',
        options: { some: 'options for', the: 'transport' }
    },
    {
        level: 'foo',
        target: '#pino/file',
        options: { destination: './test.log' }
    }
], levels: { foo: 35 }})
pino(transports)

expectType<pino.Logger>(pino({
    transport: {targets: [
            {
                level: 'info',
                target: '#pino/pretty',
                options: { some: 'options for', the: 'transport' }
            },
            {
                level: 'trace',
                target: '#pino/file',
                options: { destination: './test.log' }
            }
        ], levels: { foo: 35 }
    },
}))

const transportsWithoutOptions = pino.transport({
    targets: [
        { target: '#pino/pretty' },
        { target: '#pino/file' }
    ], levels: { foo: 35 }
})
pino(transports)

expectType<pino.Logger>(pino({
    transport: {
        targets: [
            { target: '#pino/pretty' },
            { target: '#pino/file' }
        ], levels: { foo: 35 }
    },
}))

const pipelineTransport = pino.transport({
    pipeline: [{
        target: './my-transform.js'
    }, {
        // Use target: 'pino/file' to write to stdout
        // without any change.
        target: 'pino-pretty'
    }]
})
pino(pipelineTransport)

expectType<pino.Logger>(pino({
    transport: {
        pipeline: [{
            target: './my-transform.js'
        }, {
            // Use target: 'pino/file' to write to stdout
            // without any change.
            target: 'pino-pretty'
        }]
    }
}))

type TransportConfig = {
    id: string
}

// Custom transport params
const customTransport = pino.transport<TransportConfig>({
    target: 'custom',
    options: { id: 'abc' }
})
pino(customTransport)

// Worker
pino.transport({
    target: 'custom',
    worker: {
        argv: ['a', 'b'],
        stdin: false,
        stderr: true,
        stdout: false,
        autoEnd: true,
    },
    options: { id: 'abc' }
})

// Dedupe
pino.transport({
    targets: [],
    dedupe: true,
})
