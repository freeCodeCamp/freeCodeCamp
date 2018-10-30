var unique = require("../uniq.js")

require("tape")("unique", function(t) {

  t.equals(unique([1,1,2,3,5,5,7]).join(), [1,2,3,5,7].join())
  t.equals(unique([]).join(), [].join())
  t.equals(unique([1,1,1]).join(), [1].join())
  t.equals(unique([1,1,1,2,2,2], function(a,b) { return (a^b)&1 }).join(), [2,1].join())

  t.end()
})