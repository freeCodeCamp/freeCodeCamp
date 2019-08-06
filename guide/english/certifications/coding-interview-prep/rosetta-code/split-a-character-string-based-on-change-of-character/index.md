---
title: Split a character string based on change of character
---
# Split a character string based on change of character

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function split(str) {
  const concat = xs =>
    xs.length > 0 ? (() => {
      const unit = typeof xs[0] === 'string' ? '' : [];
      return unit.concat.apply(unit, xs);
    })() : [];

  const group = xs => groupBy((a, b) => a === b, xs);

  const groupBy = (f, xs) => {
    const dct = xs.slice(1)
      .reduce((a, x) => {
        const
          h = a.active.length > 0 ? a.active[0] : undefined,
          blnGroup = h !== undefined && f(h, x);
        return {
          active: blnGroup ? a.active.concat([x]) : [x],
          sofar: blnGroup ? a.sofar : a.sofar.concat([a.active])
        };
      }, {
        active: xs.length > 0 ? [xs[0]] : [],
        sofar: []
      });
    return dct.sofar.concat(dct.active.length > 0 ? [dct.active] : []);
  };

  const map = (f, xs) => xs.map(f);

  const stringChars = s => s.split('');

  return map(concat, group(stringChars(str)))
}
```

</details>