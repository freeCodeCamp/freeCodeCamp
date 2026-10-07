'use strict'

const { describe, it, beforeEach, afterEach } = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const { MockAgent, setGlobalDispatcher, getGlobalDispatcher } = require('undici')

function loadValidateEcosystemLinksModule () {
  const modulePath = require.resolve('../../scripts/validate-ecosystem-links')
  delete require.cache[modulePath]
  return require(modulePath)
}

describe('extractGitHubLinks', () => {
  const { extractGitHubLinks } = loadValidateEcosystemLinksModule()

  it('extracts simple GitHub repository links', () => {
    const content = `
# Ecosystem

- [fastify-helmet](https://github.com/fastify/fastify-helmet) - Important security headers for Fastify
- [fastify-cors](https://github.com/fastify/fastify-cors) - CORS support
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 2)
    assert.deepStrictEqual(links[0], {
      name: 'fastify-helmet',
      url: 'https://github.com/fastify/fastify-helmet',
      owner: 'fastify',
      repo: 'fastify-helmet'
    })
    assert.deepStrictEqual(links[1], {
      name: 'fastify-cors',
      url: 'https://github.com/fastify/fastify-cors',
      owner: 'fastify',
      repo: 'fastify-cors'
    })
  })

  it('extracts links with different owner/repo combinations', () => {
    const content = `
- [some-plugin](https://github.com/user123/awesome-plugin)
- [another-lib](https://github.com/org-name/lib-name)
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 2)
    assert.strictEqual(links[0].owner, 'user123')
    assert.strictEqual(links[0].repo, 'awesome-plugin')
    assert.strictEqual(links[1].owner, 'org-name')
    assert.strictEqual(links[1].repo, 'lib-name')
  })

  it('handles links with hash fragments', () => {
    const content = `
- [project](https://github.com/owner/repo#readme)
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 1)
    assert.strictEqual(links[0].repo, 'repo')
    assert.strictEqual(links[0].url, 'https://github.com/owner/repo#readme')
  })

  it('handles links with query parameters', () => {
    const content = `
- [project](https://github.com/owner/repo?tab=readme)
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 1)
    assert.strictEqual(links[0].repo, 'repo')
  })

  it('handles links with subpaths', () => {
    const content = `
- [docs](https://github.com/owner/repo/tree/main/docs)
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 1)
    assert.strictEqual(links[0].owner, 'owner')
    assert.strictEqual(links[0].repo, 'repo')
  })

  it('returns empty array for content with no GitHub links', () => {
    const content = `
# No GitHub links here

Just some regular text and [a link](https://example.com).
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 0)
  })

  it('ignores non-GitHub links', () => {
    const content = `
- [gitlab](https://gitlab.com/owner/repo)
- [github](https://github.com/owner/repo)
- [bitbucket](https://bitbucket.org/owner/repo)
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 1)
    assert.strictEqual(links[0].owner, 'owner')
  })

  it('extracts multiple links from complex markdown', () => {
    const content = `
## Category 1

Some description [inline link](https://github.com/a/b).

| Plugin | Description |
|--------|-------------|
| [plugin1](https://github.com/x/y) | Desc 1 |
| [plugin2](https://github.com/z/w) | Desc 2 |
`
    const links = extractGitHubLinks(content)

    assert.strictEqual(links.length, 3)
  })
})

describe('checkGitHubRepo', () => {
  let originalDispatcher
  let mockAgent
  let originalFetch
  let originalSetTimeout

  beforeEach(() => {
    delete process.env.GITHUB_TOKEN
    originalDispatcher = getGlobalDispatcher()
    mockAgent = new MockAgent()
    mockAgent.disableNetConnect()
    setGlobalDispatcher(mockAgent)
    originalFetch = global.fetch
    originalSetTimeout = global.setTimeout
  })

  afterEach(async () => {
    global.fetch = originalFetch
    global.setTimeout = originalSetTimeout
    setGlobalDispatcher(originalDispatcher)
    await mockAgent.close()
    delete process.env.GITHUB_TOKEN
  })

  it('returns exists: true for status 200', async () => {
    const { checkGitHubRepo } = loadValidateEcosystemLinksModule()
    const mockPool = mockAgent.get('https://api.github.com')
    mockPool.intercept({
      path: '/repos/fastify/fastify',
      method: 'HEAD'
    }).reply(200)

    const result = await checkGitHubRepo('fastify', 'fastify')

    assert.strictEqual(result.exists, true)
    assert.strictEqual(result.status, 200)
    assert.strictEqual(result.owner, 'fastify')
    assert.strictEqual(result.repo, 'fastify')
  })

  it('returns exists: false for status 404', async () => {
    const { checkGitHubRepo } = loadValidateEcosystemLinksModule()
    const mockPool = mockAgent.get('https://api.github.com')
    mockPool.intercept({
      path: '/repos/nonexistent/repo',
      method: 'HEAD'
    }).reply(404)

    const result = await checkGitHubRepo('nonexistent', 'repo')

    assert.strictEqual(result.exists, false)
    assert.strictEqual(result.status, 404)
  })

  it('returns invalid status for malformed owner or repository names', async () => {
    const { checkGitHubRepo } = loadValidateEcosystemLinksModule()
    let called = false

    global.fetch = async () => {
      called = true
      return { status: 200 }
    }

    const result = await checkGitHubRepo('owner/evil', 'repo', 1)

    assert.strictEqual(called, false)
    assert.strictEqual(result.exists, false)
    assert.strictEqual(result.status, 'invalid')
    assert.strictEqual(result.error, 'Invalid GitHub repository identifier')
  })

  it('retries on rate limit responses', async () => {
    const { checkGitHubRepo } = loadValidateEcosystemLinksModule()
    let attempts = 0

    global.setTimeout = (fn) => {
      fn()
      return 0
    }

    global.fetch = async () => {
      attempts++
      return {
        status: attempts === 1 ? 403 : 200
      }
    }

    const result = await checkGitHubRepo('owner', 'repo', 1)

    assert.strictEqual(attempts, 2)
    assert.strictEqual(result.exists, true)
    assert.strictEqual(result.status, 200)
  })

  it('adds authorization header when GITHUB_TOKEN is set', async () => {
    process.env.GITHUB_TOKEN = 'my-token'
    const { checkGitHubRepo } = loadValidateEcosystemLinksModule()
    let authorization

    global.fetch = async (url, options) => {
      authorization = options.headers.Authorization
      return {
        status: 200
      }
    }

    const result = await checkGitHubRepo('owner', 'repo')

    assert.strictEqual(authorization, 'token my-token')
    assert.strictEqual(result.exists, true)
  })

  it('handles network errors', async () => {
    const { checkGitHubRepo } = loadValidateEcosystemLinksModule()
    const mockPool = mockAgent.get('https://api.github.com')
    mockPool.intercept({
      path: '/repos/owner/repo',
      method: 'HEAD'
    }).replyWithError(new Error('Network error'))

    const result = await checkGitHubRepo('owner', 'repo')

    assert.strictEqual(result.exists, false)
    assert.strictEqual(result.status, 'error')
    assert.ok(result.error.length > 0)
  })
})

describe('validateAllLinks', () => {
  let originalReadFileSync
  let originalFetch
  let originalSetTimeout
  let originalConsoleLog
  let originalStdoutWrite

  beforeEach(() => {
    originalReadFileSync = fs.readFileSync
    originalFetch = global.fetch
    originalSetTimeout = global.setTimeout
    originalConsoleLog = console.log
    originalStdoutWrite = process.stdout.write

    console.log = () => {}
    process.stdout.write = () => true

    global.setTimeout = (fn) => {
      fn()
      return 0
    }
  })

  afterEach(() => {
    fs.readFileSync = originalReadFileSync
    global.fetch = originalFetch
    global.setTimeout = originalSetTimeout
    console.log = originalConsoleLog
    process.stdout.write = originalStdoutWrite
  })

  it('validates links, deduplicates repositories and groups inaccessible links', async () => {
    const { validateAllLinks } = loadValidateEcosystemLinksModule()

    fs.readFileSync = () => `
- [repo one](https://github.com/owner/repo)
- [repo one duplicate](https://github.com/owner/repo)
- [repo two](https://github.com/another/project)
`

    let requests = 0
    global.fetch = async (url) => {
      requests++
      const pathname = new URL(url).pathname

      if (pathname === '/repos/owner/repo') {
        return { status: 404 }
      }

      if (pathname === '/repos/another/project') {
        return { status: 200 }
      }

      throw new Error(`Unexpected url: ${url}`)
    }

    const result = await validateAllLinks()

    assert.strictEqual(requests, 2)
    assert.strictEqual(result.notFound.length, 1)
    assert.strictEqual(result.found.length, 1)
    assert.strictEqual(result.notFound[0].owner, 'owner')
    assert.strictEqual(result.notFound[0].repo, 'repo')
    assert.strictEqual(result.found[0].owner, 'another')
    assert.strictEqual(result.found[0].repo, 'project')
  })

  it('returns empty result when no GitHub links are present', async () => {
    const { validateAllLinks } = loadValidateEcosystemLinksModule()

    fs.readFileSync = () => '# Ecosystem\nNo links here.'

    let requests = 0
    global.fetch = async () => {
      requests++
      return { status: 200 }
    }

    const result = await validateAllLinks()

    assert.strictEqual(requests, 0)
    assert.strictEqual(result.notFound.length, 0)
    assert.strictEqual(result.found.length, 0)
  })
})
