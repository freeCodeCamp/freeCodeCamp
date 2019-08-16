---
title: Vector dot product
---
# Vector dot product

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function dotProduct(...vectors) {
  if (!vectors || !vectors.length) {
    return null;
  }
  if (!vectors[0] || !vectors[0].length) {
    return null;
  }
  const vectorLen = vectors[0].length;
  const numVectors = vectors.length;

  // If all vectors not same length, return null
  for (let i = 0; i < numVectors; i++) {
    if (vectors[i].length !== vectorLen) {
      return null;  // return undefined
    }
  }

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = numVectors;
  // Sum terms
  while (j--) {
    i = numVectors;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```

</details>
