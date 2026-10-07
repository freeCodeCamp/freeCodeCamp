import { expectType } from 'tsd'

import { createWriteStream } from 'node:fs'

import pino, { multistream } from '../../pino'

const streams = [
  { stream: process.stdout },
  { stream: createWriteStream('') },
  { level: 'error' as const, stream: process.stderr },
  { level: 'fatal' as const, stream: process.stderr },
]

expectType<pino.MultiStreamRes>(pino.multistream(process.stdout))
expectType<pino.MultiStreamRes>(pino.multistream([createWriteStream('')]))
expectType<pino.MultiStreamRes<'error'>>(pino.multistream({ level: 'error' as const, stream: process.stderr }))
expectType<pino.MultiStreamRes<'fatal'>>(pino.multistream([{ level: 'fatal' as const, stream: createWriteStream('') }]))

expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams, {}))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams, { levels: { 'info': 30 } }))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams, { dedupe: true }))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams[0]).add(streams[1]))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(multistream(streams))
expectType<pino.MultiStreamRes<'error'>>(multistream(streams).clone('error'))


expectType<pino.MultiStreamRes>(multistream(process.stdout));
