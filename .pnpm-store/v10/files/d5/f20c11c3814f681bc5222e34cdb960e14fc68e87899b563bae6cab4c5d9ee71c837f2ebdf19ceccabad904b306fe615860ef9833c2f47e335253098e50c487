var inspector = require('inspector')
//inspector.open(9330, null, true)
var benchmark = require('benchmark')
const { WeakLRUCache } = require('..')
var suite = new benchmark.Suite();

let cache = new WeakLRUCache()
cache.loadValue = function() {
	return {}
}
let strongObject = cache.getValue(1)

function hit() {
	let o = cache.getValue(1)
}
let i = 0
let time = 0
function miss(deferred) {
	i++
	cache.getValue(i)
	if (i % 30000== 0) {
		let lastTime = time
		time = Date.now()
		sizes.push(cache.size, time-lastTime)
		return setImmediate(() => deferred.resolve(), 10)
	}
	if (i % 100 == 0)
		return Promise.resolve().then(() => deferred.resolve())

	deferred.resolve()
}
let sizes = []
//suite.add('hit', hit);
suite.add('miss', {
	defer: true,
	fn: miss,
})
suite.on('cycle', function (event) {
console.log(String(event.target));
});
suite.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log(JSON.stringify(sizes))
});

suite.run({ async: true });
