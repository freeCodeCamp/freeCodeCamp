import { Dirent } from 'node:fs'
import { resolve } from 'node:path'
import { Readable } from 'node:stream'
import { expectType } from 'tsd'
import send, { DirectorySendResult, ErrorSendResult, FileSendResult, SendResult } from '..'

send.mime.define({
  'application/x-my-type': ['x-mt', 'x-mtt']
})

expectType<(value: string) => boolean>(send.isUtf8MimeType)
expectType<boolean>(send.isUtf8MimeType('application/json'))

const req: any = {}

{
  const result = await send(req, '/test.html', {
    acceptRanges: true,
    maxContentRangeChunkSize: 10,
    immutable: true,
    maxAge: 0,
    root: resolve(__dirname, '/wwwroot')
  })

  expectType<SendResult>(result)
  expectType<number>(result.statusCode)
  expectType<Record<string, string>>(result.headers)
  expectType<Readable>(result.stream)
}

{
  const result = await send(req, '/test.html', { contentType: true, maxAge: 0, root: resolve(__dirname, '/wwwroot') })

  expectType<SendResult>(result)
  expectType<number>(result.statusCode)
  expectType<Record<string, string>>(result.headers)
  expectType<Readable>(result.stream)
}

{
  const result = await send(req, '/test.html', { contentType: false, root: resolve(__dirname, '/wwwroot') })

  expectType<SendResult>(result)
  expectType<number>(result.statusCode)
  expectType<Record<string, string>>(result.headers)
  expectType<Readable>(result.stream)
}

const result = await send(req, '/test.html')
switch (result.type) {
  case 'file': {
    expectType<FileSendResult>(result)
    expectType<string>(result.metadata.path)
    expectType<Dirent>(result.metadata.stat)
    break
  }
  case 'directory': {
    expectType<DirectorySendResult>(result)
    expectType<string>(result.metadata.path)
    expectType<string>(result.metadata.requestPath)
    break
  }
  case 'error': {
    expectType<ErrorSendResult>(result)
    expectType<Error>(result.metadata.error)
  }
}
