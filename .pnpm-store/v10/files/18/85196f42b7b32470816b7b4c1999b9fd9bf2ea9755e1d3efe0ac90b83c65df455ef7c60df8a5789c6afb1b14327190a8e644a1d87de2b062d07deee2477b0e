'use strict'

const { test, describe } = require('node:test')
const FindMyWay = require('../')

test('Method should be a string', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on(0, '/test', () => {})
    t.assert.fail('method shoukd be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Method should be a string')
  }
})

test('Method should be a string [ignoreTrailingSlash=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

  try {
    findMyWay.on(0, '/test', () => {})
    t.assert.fail('method shoukd be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Method should be a string')
  }
})

test('Method should be a string [ignoreDuplicateSlashes=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

  try {
    findMyWay.on(0, '/test', () => {})
    t.assert.fail('method shoukd be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Method should be a string')
  }
})

test('Method should be a string (array)', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on(['GET', 0], '/test', () => {})
    t.assert.fail('method shoukd be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Method should be a string')
  }
})

test('Method should be a string (array) [ignoreTrailingSlash=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

  try {
    findMyWay.on(['GET', 0], '/test', () => {})
    t.assert.fail('method shoukd be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Method should be a string')
  }
})

test('Method should be a string (array) [ignoreDuplicateSlashes=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

  try {
    findMyWay.on(['GET', 0], '/test', () => {})
    t.assert.fail('method shoukd be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Method should be a string')
  }
})

test('Path should be a string', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on('GET', 0, () => {})
    t.assert.fail('path should be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Path should be a string')
  }
})

test('Path should be a string [ignoreTrailingSlash=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

  try {
    findMyWay.on('GET', 0, () => {})
    t.assert.fail('path should be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Path should be a string')
  }
})

test('Path should be a string [ignoreDuplicateSlashes=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

  try {
    findMyWay.on('GET', 0, () => {})
    t.assert.fail('path should be a string')
  } catch (e) {
    t.assert.equal(e.message, 'Path should be a string')
  }
})

test('The path could not be empty', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on('GET', '', () => {})
    t.assert.fail('The path could not be empty')
  } catch (e) {
    t.assert.equal(e.message, 'The path could not be empty')
  }
})

test('The path could not be empty [ignoreTrailingSlash=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

  try {
    findMyWay.on('GET', '', () => {})
    t.assert.fail('The path could not be empty')
  } catch (e) {
    t.assert.equal(e.message, 'The path could not be empty')
  }
})

test('The path could not be empty [ignoreDuplicateSlashes=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

  try {
    findMyWay.on('GET', '', () => {})
    t.assert.fail('The path could not be empty')
  } catch (e) {
    t.assert.equal(e.message, 'The path could not be empty')
  }
})

test('The first character of a path should be `/` or `*`', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on('GET', 'a', () => {})
    t.assert.fail('The first character of a path should be `/` or `*`')
  } catch (e) {
    t.assert.equal(e.message, 'The first character of a path should be `/` or `*`')
  }
})

test('The first character of a path should be `/` or `*` [ignoreTrailingSlash=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

  try {
    findMyWay.on('GET', 'a', () => {})
    t.assert.fail('The first character of a path should be `/` or `*`')
  } catch (e) {
    t.assert.equal(e.message, 'The first character of a path should be `/` or `*`')
  }
})

test('The first character of a path should be `/` or `*` [ignoreDuplicateSlashes=true]', t => {
  t.plan(1)
  const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

  try {
    findMyWay.on('GET', 'a', () => {})
    t.assert.fail('The first character of a path should be `/` or `*`')
  } catch (e) {
    t.assert.equal(e.message, 'The first character of a path should be `/` or `*`')
  }
})

test('Handler should be a function', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on('GET', '/test', 0)
    t.assert.fail('handler should be a function')
  } catch (e) {
    t.assert.equal(e.message, 'Handler should be a function')
  }
})

test('Method is not an http method.', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on('GETT', '/test', () => {})
    t.assert.fail('method is not a valid http method')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GETT\' is not an http method.')
  }
})

test('Method is not an http method. (array)', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  try {
    findMyWay.on(['POST', 'GETT'], '/test', () => {})
    t.assert.fail('method is not a valid http method')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GETT\' is not an http method.')
  }
})

test('The default route must be a function', t => {
  t.plan(1)
  try {
    FindMyWay({
      defaultRoute: '/404'
    })
    t.assert.fail('default route must be a function')
  } catch (e) {
    t.assert.equal(e.message, 'The default route must be a function')
  }
})

test('Method already declared', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', () => {})
  try {
    findMyWay.on('GET', '/test', () => {})
    t.assert.fail('method already declared')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
  }
})

test('Method already declared if * is used', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/*', () => {})
  try {
    findMyWay.on('GET', '*', () => {})
    t.assert.fail('should throw error')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/*\' with constraints \'{}\'')
  }
})

test('Method already declared if /* is used', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '*', () => {})
  try {
    findMyWay.on('GET', '/*', () => {})
    t.assert.fail('should throw error')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/*\' with constraints \'{}\'')
  }
})

describe('Method already declared [ignoreTrailingSlash=true]', t => {
  test('without trailing slash', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

    findMyWay.on('GET', '/test', () => {})

    try {
      findMyWay.on('GET', '/test', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '/test/', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }
  })

  test('with trailing slash', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

    findMyWay.on('GET', '/test/', () => {})

    try {
      findMyWay.on('GET', '/test', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '/test/', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }
  })
})

describe('Method already declared [ignoreDuplicateSlashes=true]', t => {
  test('without duplicate slashes', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

    findMyWay.on('GET', '/test', () => {})

    try {
      findMyWay.on('GET', '/test', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '//test', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }
  })

  test('with duplicate slashes', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

    findMyWay.on('GET', '//test', () => {})

    try {
      findMyWay.on('GET', '/test', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '//test', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{}\'')
    }
  })
})

test('Method already declared nested route', t => {
  t.plan(1)
  const findMyWay = FindMyWay()

  findMyWay.on('GET', '/test', () => {})
  findMyWay.on('GET', '/test/hello', () => {})
  findMyWay.on('GET', '/test/world', () => {})

  try {
    findMyWay.on('GET', '/test/hello', () => {})
    t.assert.fail('method already delcared in nested route')
  } catch (e) {
    t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
  }
})

describe('Method already declared nested route [ignoreTrailingSlash=true]', t => {
  test('without trailing slash', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

    findMyWay.on('GET', '/test', () => {})
    findMyWay.on('GET', '/test/hello', () => {})
    findMyWay.on('GET', '/test/world', () => {})

    try {
      findMyWay.on('GET', '/test/hello', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '/test/hello/', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }
  })

  test('Method already declared with constraints', t => {
    t.plan(1)
    const findMyWay = FindMyWay()

    findMyWay.on('GET', '/test', { constraints: { host: 'fastify.io' } }, () => {})
    try {
      findMyWay.on('GET', '/test', { constraints: { host: 'fastify.io' } }, () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test\' with constraints \'{"host":"fastify.io"}\'')
    }
  })

  test('with trailing slash', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreTrailingSlash: true })

    findMyWay.on('GET', '/test/', () => {})
    findMyWay.on('GET', '/test/hello/', () => {})
    findMyWay.on('GET', '/test/world/', () => {})

    try {
      findMyWay.on('GET', '/test/hello', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '/test/hello/', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }
  })
})

describe('Method already declared nested route [ignoreDuplicateSlashes=true]', t => {
  test('without duplicate slashes', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

    findMyWay.on('GET', '/test', () => {})
    findMyWay.on('GET', '/test/hello', () => {})
    findMyWay.on('GET', '/test/world', () => {})

    try {
      findMyWay.on('GET', '/test/hello', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '/test//hello', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }
  })

  test('with duplicate slashes', t => {
    t.plan(2)
    const findMyWay = FindMyWay({ ignoreDuplicateSlashes: true })

    findMyWay.on('GET', '/test/', () => {})
    findMyWay.on('GET', '/test//hello', () => {})
    findMyWay.on('GET', '/test//world', () => {})

    try {
      findMyWay.on('GET', '/test/hello', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }

    try {
      findMyWay.on('GET', '/test//hello', () => {})
      t.assert.fail('method already declared')
    } catch (e) {
      t.assert.equal(e.message, 'Method \'GET\' already declared for route \'/test/hello\' with constraints \'{}\'')
    }
  })
})
