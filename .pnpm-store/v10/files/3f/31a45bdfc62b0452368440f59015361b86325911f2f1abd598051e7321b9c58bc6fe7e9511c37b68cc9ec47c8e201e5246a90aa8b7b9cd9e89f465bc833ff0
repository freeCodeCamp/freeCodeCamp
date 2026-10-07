import remark = require('remark')
import definitions = require('mdast-util-definitions')

const ast = remark().parse('[example]: https://example.com "Example"')

const definition = definitions(ast)

definition('example')

definition('foo')
