---
title: Dot product
---
# Dot product

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function dotProduct(ary1, ary2) {
    var dotprod = 0;
    for (var i = 0; i < ary1.length; i++)
        dotprod += ary1[i] * ary2[i];
    return dotprod;
}
```

</details>