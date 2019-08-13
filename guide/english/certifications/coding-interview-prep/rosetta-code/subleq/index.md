---
title: Subleq
---
# Subleq

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Subleq(mem) {
  var out = "";
  var instructionPointer = 0;
  do {
    var a = mem[instructionPointer];
    var b = mem[instructionPointer + 1];
    if (a === -1) {} else if (b === -1) {
      out += String.fromCharCode(mem[a]);
    } else {
      mem[b] -= mem[a];
      if (mem[b] < 1) {
        instructionPointer = mem[instructionPointer + 2];
        continue;
      }
    }
    instructionPointer += 3;
  } while ((instructionPointer >= 0));

  return out;
}
```

</details>