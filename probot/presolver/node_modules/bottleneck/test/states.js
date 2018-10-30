var States = require('../lib/States')
var assert = require('assert')
var c = require('./context')({datastore: 'local'})
var Bottleneck = require('../lib/index.js')

describe('States', function () {

  it('Should be created and be empty', function () {
    var states = new States(["A", "B", "C"])
    c.mustEqual(states.statusCounts(), { A: 0, B: 0, C: 0 })
  })

  it('Should start new series', function () {
    var states = new States(["A", "B", "C"])

    states.start('x')
    states.start('y')

    c.mustEqual(states.statusCounts(), { A: 2, B: 0, C: 0 })
  })

  it('Should increment', function () {
    var states = new States(["A", "B", "C"])

    states.start('x')
    states.start('y')
    states.next('x')
    states.next('y')
    states.next('x')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 1 })

    states.next('z')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 1 })

    states.next('x')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 0 })

    states.next('x')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 0 })

    states.next('y')
    states.next('y')
    c.mustEqual(states.statusCounts(), { A: 0, B: 0, C: 0 })
  })

  it('Should remove', function () {
    var states = new States(["A", "B", "C"])

    states.start('x')
    states.start('y')
    states.next('x')
    states.next('y')
    states.next('x')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 1 })

    states.remove('x')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 0 })

    states.remove('y')
    c.mustEqual(states.statusCounts(), { A: 0, B: 0, C: 0 })
  })

  it('Should return current status', function () {
    var states = new States(["A", "B", "C"])

    states.start('x')
    states.start('y')
    states.next('x')
    states.next('y')
    states.next('x')
    c.mustEqual(states.statusCounts(), { A: 0, B: 1, C: 1 })

    c.mustEqual(states.jobStatus('x'), 'C')
    c.mustEqual(states.jobStatus('y'), 'B')
    c.mustEqual(states.jobStatus('z'), null)
  })

  it('Should return job ids for a status', function (done) {
    var states = new States(["A", "B", "C"])

    states.start('x')
    states.start('y')
    states.start('z')
    states.next('x')
    states.next('y')
    states.next('x')
    states.next('z')
    c.mustEqual(states.statusCounts(), { A: 0, B: 2, C: 1 })

    c.mustEqual(states.statusJobs().sort(), ['x', 'y', 'z'])
    c.mustEqual(states.statusJobs('A'), [])
    c.mustEqual(states.statusJobs('B').sort(), ['y', 'z'])
    c.mustEqual(states.statusJobs('C'), ['x'])
    try {
      states.statusJobs('Z')
    } catch (err) {
      assert(err instanceof Bottleneck.BottleneckError)
      done()
    }
  })
})
