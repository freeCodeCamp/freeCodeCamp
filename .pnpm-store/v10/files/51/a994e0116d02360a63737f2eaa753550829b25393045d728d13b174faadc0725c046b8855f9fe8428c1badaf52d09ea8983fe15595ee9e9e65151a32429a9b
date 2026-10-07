import fastify from 'fastify'
import accepts from '..'

const app = fastify()

app.register(accepts)
app.register(accepts, { decorateReply: true })
app.register(accepts, { decorateReply: false })

app.get('/', (request, reply) => {
  const accept = request.accepts()

  // Charsets
  accept.charsets()
  accept.charset()
  accept.charset('json', 'text')
  accept.charset(['json', 'text'])

  // Encoding
  accept.encodings()
  accept.encoding()
  accept.encoding('json', 'text')
  accept.encoding(['json', 'text'])

  // Languages
  accept.languages()
  accept.language()
  accept.language('json', 'text')
  accept.language(['json', 'text'])

  // Types
  accept.types()
  accept.type()
  accept.type('json', 'text')
  accept.type(['json', 'text'])

  request.charset()
  request.charsets()
  request.encoding()
  request.encodings()
  request.language()
  request.languages()
  request.type()
  request.types()

  request.charset(['aa', 'aa'])
  request.charsets(['aa', 'aa'])
  request.encoding(['aa', 'aa'])
  request.encodings(['aa', 'aa'])
  request.language(['aa', 'aa'])
  request.languages(['aa', 'aa'])
  request.type(['aa', 'aa'])
  request.types(['aa', 'aa'])

  request.charset('aa', 'aa')
  request.charsets('aa', 'aa')
  request.encoding('aa', 'aa')
  request.encodings('aa', 'aa')
  request.language('aa', 'aa')
  request.languages('aa', 'aa')
  request.type('aa', 'aa')
  request.types('aa', 'aa')

  reply.requestAccepts()

  reply.requestCharset()
  reply.requestCharsets()
  reply.requestEncoding()
  reply.requestEncodings()
  reply.requestLanguage()
  reply.requestLanguages()
  reply.requestType()
  reply.requestTypes()

  reply.requestCharset(['aa', 'aa'])
  reply.requestCharsets(['aa', 'aa'])
  reply.requestEncoding(['aa', 'aa'])
  reply.requestEncodings(['aa', 'aa'])
  reply.requestLanguage(['aa', 'aa'])
  reply.requestLanguages(['aa', 'aa'])
  reply.requestType(['aa', 'aa'])
  reply.requestTypes(['aa', 'aa'])

  reply.requestCharset('aa', 'aa')
  reply.requestCharsets('aa', 'aa')
  reply.requestEncoding('aa', 'aa')
  reply.requestEncodings('aa', 'aa')
  reply.requestLanguage('aa', 'aa')
  reply.requestLanguages('aa', 'aa')
  reply.requestType('aa', 'aa')
  reply.requestTypes('aa', 'aa')

  reply.send({ hello: 'world' })
})
