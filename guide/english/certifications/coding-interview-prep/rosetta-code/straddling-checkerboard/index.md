---
title: Straddling checkerboard
---
# Straddling checkerboard

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function straddle(message, alphabet) {
  var prefixes = new Array("", alphabet[0].indexOf(" "), alphabet[0].lastIndexOf(" "))

  var out = ""
  message = message.toUpperCase()
  message = message.replace(/([0-9])/g, "/$1") // dumb way to escape numbers
  for (var i = 0; i < message.length; i++) {
    var chr = message[i]
    if (chr == " ") continue
    for (var j = 0; j < 3; j++) {
      var k = alphabet[j].indexOf(chr)
      if (k < 0) continue
      out += prefixes[j].toString() + k
    }
    if (chr == "/") out += message[++i]
  }
  return out
}
function unstraddle(message, alphabet) {
  var prefixes = new Array("", alphabet[0].indexOf(" "), alphabet[0].lastIndexOf(" "))
  var out = ""
  var n, o
  for (var i = 0; i < message.length; i++) {
    n = message[i] * 1
    switch (n) {
      case prefixes[1]:
        o = alphabet[1][message[++i]];
        break
      case prefixes[2]:
        o = alphabet[2][message[++i]];
        break
      default:
        o = alphabet[0][n]
    }
    o == "/" ? out += message[++i] : out += o
  }
  return out
}
```

</details>