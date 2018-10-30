// make tests run in both Node & Express
if (!global.cy) {
  const chai = require('chai')
  const sinon = require('sinon')
  const sinonChai = require('sinon-chai')
  chai.use(sinonChai)
  global.expect = chai.expect

  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
    global.cy = {
      stub: function () {
        return sandbox.stub.apply(sandbox, arguments)
      },
      log () {
        console.log.apply(console, arguments)
      }
    }
  })

  afterEach(() => {
    sandbox.restore()
  })
}

const getUserAgent = require('..')

describe('smoke', () => {
  it('works', () => {
    expect(getUserAgent()).to.be.a('string')
    expect(getUserAgent().length).to.be.above(10)
  })
})
