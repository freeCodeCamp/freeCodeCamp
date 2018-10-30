var EventSource = require('..')
var es = new EventSource('http://localhost:8080/sse')
es.addEventListener('server-time', function (e) {
  console.log(e.data)
})
