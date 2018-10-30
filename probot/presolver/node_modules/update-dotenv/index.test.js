const fs = require('fs')
const os = require('os')
const path = require('path')
const updateDotenv = require('.')

const originalCwd = process.cwd()
// Make a copy of current env
const originalEnv = Object.assign({}, process.env)

describe('update-dotenv', () => {
  beforeEach(async () => {
    process.chdir(fs.mkdtempSync(path.join(os.tmpdir(), 'update-dotenv')))
  })

  afterEach(() => {
    process.env = originalEnv
    process.chdir(originalCwd)
  })

  test('creates .env, writes new values, sets process.env', async () => {
    await updateDotenv({ FOO: 'bar' })
    expect(fs.readFileSync('.env', 'UTF-8')).toEqual('FOO=bar')
    expect(process.env.FOO).toEqual('bar')
  })

  test('properly writes multi-line strings', async () => {
    await updateDotenv({ FOO: 'bar\nbaz' })
    expect(fs.readFileSync('.env', 'UTF-8')).toEqual('FOO=bar\\nbaz')
  })

  test('appends new variables to existing variables', async () => {
    await updateDotenv({ FIRST: 'foo' })
    await updateDotenv({ SECOND: 'bar' })
    expect(fs.readFileSync('.env', 'UTF-8')).toEqual('FIRST=foo\nSECOND=bar')
  })
})
