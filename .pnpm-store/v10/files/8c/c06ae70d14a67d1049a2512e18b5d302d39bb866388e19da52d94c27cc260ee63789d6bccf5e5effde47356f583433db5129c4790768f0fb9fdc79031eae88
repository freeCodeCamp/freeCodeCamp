// Imported in both index.test.js & esm.test.mjs
async function plugin (fastify, opts) {
  fastify.decorate('foo', opts.foo)
}

plugin[Symbol.for('skip-override')] = true

export default plugin
