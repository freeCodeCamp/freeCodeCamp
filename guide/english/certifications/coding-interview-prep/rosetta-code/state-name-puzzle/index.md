---
title: State name puzzle
---
# State name puzzle

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function solve(input) {
  var orig = {};
  input.forEach(function(e) {
    orig[e.replace(/\s/g, "").toLowerCase()] = e;
  })

  input = Object.keys(orig)
  var map = {};
  for (var i = 0; i < input.length - 1; i++) {
    var pair0 = input[i];
    for (var j = i + 1; j < input.length; j++) {

      var pair = [pair0, input[j]];
      var s = pair0 + pair[1];
      var key = s.split("").sort();

      var val = map[key] ? map[key] : [];
      val.push(pair);
      map[key] = val;
    }
  }

  var result = [];
  Object.keys(map).forEach((key) => {

    for (var i = 0; i < map[key].length - 1; i++) {
      var a = map[key][i];
      for (var j = i + 1; j < map[key].length; j++) {
        var b = map[key][j];

        if ((new Set([a[0], b[0], a[1], b[1]])).size < 4)
          continue;
        var from = [orig[a[0]], orig[a[1]]].sort()
        var to = [orig[b[0]], orig[b[1]]].sort()
        result.push({
          from,
          to
        })
      }
    }
  });

  return result;
}
```

</details>