---
id: 5eb3e4af7d0e7b760b46cedc
title: 集的合併
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

Given two sets of items then if any item is common to any set then the result of applying *consolidation* to those sets is a set of sets whose contents is:

<ul>
  <li>The two input sets if no common item exists between the two input sets of items.</li>
  <li>如果兩個輸入集共享一個公共項，則它們是兩個輸入集的並集。</li>
</ul>

給定 N 組項目，其中 N > 2，那麼結果與通過合併重複替換兩個集合的所有組合，直到集合對之間不可能進一步合併爲止。 如果 N &lt; 2，則合併沒有嚴格意義，可以返回輸入。

這裏有些例子：

**示例 1：**

給定兩個集合 `{A,B}` 和 `{C,D}` 那麼集合之間沒有公共元素，結果與輸入相同。

**示例 2：**

給定兩個集合 `{A,B}` 和 `{B,D}` 那麼集合之間有一個公共元素 `B` 並且結果是單個集合 `{B,D,A}`。 （請注意，集合中項目的順序無關緊要：`{A,B,D}` 與 `{B,D,A}` 和 `{D,A,B}` 等相同）。

**示例 3：**

給定三個集合 `{A,B}`、`{C,D}` 和 `{D,B}`，那麼 `{A,B}` 和 `{C,D}` 之間沒有公共元素集合，但集合 `{A,B}` 和 `{D,B}` 確實共享一個公共元素，該元素合併以產生結果 `{B,D,A}`。 在用剩餘的集合 `{C,D}` 檢查這個結果時，它們共享一個公共元素，因此合併到最終輸出的單個集合 `{A,B,C,D}`

**示例 4：**

五個集合的合併：

`{H,I,K}`、`{A,B}`、`{C,D}`、`{D,B}` 和 `{F,G,H}`

是兩個集合：

`{A, C, B, D}` 和 `{G, F, I, H, K}`

# --instructions--

編寫一個將字符串數組作爲參數的函數。 每個字符串代表一個集合，字符代表集合元素。 該函數應返回一個包含合併集的二維數組。 注意：每組都應排序。

# --hints--

`setConsolidation` 應該是一個函數。

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` 應該返回一個數組。

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` 應該返回 `[["C", "D"], ["A", "B"]]`。

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` 應該返回 `[["A", "B", "D"]]`。

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` 應該返回 `[["A", "B", "C", "D"]]`。

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` 應該返回 `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`。

```js
assert.deepEqual(setConsolidation(['HIK', 'AB', 'CD', 'DB', 'FGH']), [
  ['F', 'G', 'H', 'I', 'K'],
  ['A', 'B', 'C', 'D']
]);
```

# --seed--

## --seed-contents--

```js
function setConsolidation(sets) {

}
```

# --solutions--

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```
