---
id: 5eb3e4af7d0e7b760b46cedc
title: セットの結合
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

2 つの項目セットが与えられ、ある項目がいずれかのセットで共通である場合、これらのセットに*結合*を適用した結果は、次の内容のセットのセットになります。

<ul>
  <li>2つの入力セット間に共通項目が存在しない場合、2つの入力セット。</li>
  <li>共通項目がある場合は、2つの入力セットを結合した単一のセット。</li>
</ul>

N (N > 2) 個の項目セットが与えられている場合は、セット間の結合が不可能になるまで、2 つのセットのすべての組み合わせの結合を繰り返すのと同じ結果になります。 N &lt; 2 の場合は、結合には厳密に意味がなく、その入力を返すことになります。

いくつかの例を次に示します。

**例1:**

2つのセット `{A,B}` と `{C,D}` が与えられると、セット間に共通の要素はなく、結果は入力と同じです。

**例2:**

2つのセット `{A,B}` と `{B,D}` が与えられると、セット間に共通の要素 `B`があり、結果は単一のセット `{B,D,A}`になります。 (セット内の項目の順序は重要ではないことに注意してください。たとえば、`{A,B,D}` は `{B,D,A}` や `{D,A,B}` と同じです)。

**例3:**

`{A,B}`、`{C,D}`、`{D,B}`の3つのセットが与えられている場合、セット `{A,B}` と `{C,D}` の間に共通の要素はありません。しかし、セット`{A,B}` と `{D,B}` には共通の要素があり、結合の結果 `{B,D,A}` を生成します。 この結果を残りのセット `{C,D}` と比べると、共通の要素があるため結合して、最終的に単一のセット `{A,B,C,D}` が出力されます。

**例4:**

5つのセットの結合の例は以下のとおりです。

`{H,I,K}`、`{A,B}`、`{C,D}`、`{D,B}`、`{F,G,H}` の場合

以下の 2 つのセットになります。

`{A, C, B, D}` と `{G, F, I, H, K}`

# --instructions--

パラメータとして文字列の配列を取る関数を記述してください。 各文字列は、セットの要素である文字列のセットを表します。 この関数は、結合セットを含む 2 次元配列を返します。 注: 各セットはソートする必要があります。

# --hints--

`setConsolidation` は関数とします。

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` は配列を返す必要があります。

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` は `[["C", "D"], ["A", "B"]]` を返す必要があります。

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` は `[["A", "B", "D"]]` を返す必要があります。

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` は `[["A", "B", "C", "D"]]` を返す必要があります。

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` は `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]` を返す必要があります。

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
