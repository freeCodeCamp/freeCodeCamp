---
id: 5a23c84252665b21eecc7ed1
title: ナップサック問題 /0-1
challengeType: 1
forumTopicId: 323649
dashedName: knapsack-problem0-1
---

# --description--

0-1 ナップサック問題は以下のように定義されます。

ナップサックに入れるアイテムを表すオブジェクトの配列が与えられます。 オブジェクトにはアイテム名、重量、価値の 3 つの属性があります。 総重量が最大重量を超えず、価値が最大化されるようにアイテムを選択する必要があります。

# --instructions--

ナップサック問題を解決するための関数を記述してください。 この関数には、オブジェクトの配列と最大重量がパラメータとして与えられます。 価値の合計が最大となる値を返す必要があります。

# --hints--

`knapsack([{ name:'map', weight:9, value:150 }, { name:'compass', weight:13, value:35 }, { name:'water', weight:153, value:200 }, { name:'sandwich', weight:50, value:160 }, { name:'glucose', weight:15, value:60 }, { name:'tin', weight:68, value:45 }, { name:'banana', weight:27, value:60 }, { name:'apple', weight:39, value:40 }], 100)` は `405` を返す必要があります。

```js
assert.equal(
  knapsack(
    [
      { name: 'map', weight: 9, value: 150 },
      { name: 'compass', weight: 13, value: 35 },
      { name: 'water', weight: 153, value: 200 },
      { name: 'sandwich', weight: 50, value: 160 },
      { name: 'glucose', weight: 15, value: 60 },
      { name: 'tin', weight: 68, value: 45 },
      { name: 'banana', weight: 27, value: 60 },
      { name: 'apple', weight: 39, value: 40 }
    ],
    100
  ),
  405
);
```

`knapsack([{ name:'map', weight:9, value:150 }, { name:'compass', weight:13, value:35 }, { name:'water', weight:153, value:200 }, { name:'sandwich', weight:50, value:160 }, { name:'glucose', weight:15, value:60 }, { name:'tin', weight:68, value:45 }, { name:'banana', weight:27, value:60 }, { name:'apple', weight:39, value:40 }], 200)` は `510` を返す必要があります。

```js
assert.equal(
  knapsack(
    [
      { name: 'map', weight: 9, value: 150 },
      { name: 'compass', weight: 13, value: 35 },
      { name: 'water', weight: 153, value: 200 },
      { name: 'sandwich', weight: 50, value: 160 },
      { name: 'glucose', weight: 15, value: 60 },
      { name: 'tin', weight: 68, value: 45 },
      { name: 'banana', weight: 27, value: 60 },
      { name: 'apple', weight: 39, value: 40 }
    ],
    200
  ),
  510
);
```

`knapsack([{ name:'cheese', weight:23, value:30 }, { name:'beer', weight:52, value:10 }, { name:'suntan cream', weight:11, value:70 }, { name:'camera', weight:32, value:30 }, { name:'T-shirt', weight:24, value:15 }, { name:'trousers', weight:48, value:10 }, { name:'umbrella', weight:73, value:40 }], 100)` は `145` を返す必要があります。

```js
assert.equal(
  knapsack(
    [
      { name: 'cheese', weight: 23, value: 30 },
      { name: 'beer', weight: 52, value: 10 },
      { name: 'suntan cream', weight: 11, value: 70 },
      { name: 'camera', weight: 32, value: 30 },
      { name: 'T-shirt', weight: 24, value: 15 },
      { name: 'trousers', weight: 48, value: 10 },
      { name: 'umbrella', weight: 73, value: 40 }
    ],
    100
  ),
  145
);
```

`knapsack([{ name:'cheese', weight:23, value:30 }, { name:'beer', weight:52, value:10 }, { name:'suntan cream', weight:11, value:70 }, { name:'camera', weight:32, value:30 }, { name:'T-shirt', weight:24, value:15 }, { name:'trousers', weight:48, value:10 }, { name:'umbrella', weight:73, value:40 }], 200)` は `185` を返す必要があります。

```js
assert.equal(
  knapsack(
    [
      { name: 'cheese', weight: 23, value: 30 },
      { name: 'beer', weight: 52, value: 10 },
      { name: 'suntan cream', weight: 11, value: 70 },
      { name: 'camera', weight: 32, value: 30 },
      { name: 'T-shirt', weight: 24, value: 15 },
      { name: 'trousers', weight: 48, value: 10 },
      { name: 'umbrella', weight: 73, value: 40 }
    ],
    200
  ),
  185
);
```

`knapsack([{ name:'waterproof trousers', weight:42, value:70 }, { name:'waterproof overclothes', weight:43, value:75 }, { name:'note-case', weight:22, value:80 }, { name:'sunglasses', weight:7, value:20 }, { name:'towel', weight:18, value:12 }, { name:'socks', weight:4, value:50 }, { name:'book', weight:30, value:10 }], 100)` は `237` を返す必要があります。

```js
assert.equal(
  knapsack(
    [
      { name: 'waterproof trousers', weight: 42, value: 70 },
      { name: 'waterproof overclothes', weight: 43, value: 75 },
      { name: 'note-case', weight: 22, value: 80 },
      { name: 'sunglasses', weight: 7, value: 20 },
      { name: 'towel', weight: 18, value: 12 },
      { name: 'socks', weight: 4, value: 50 },
      { name: 'book', weight: 30, value: 10 }
    ],
    100
  ),
  237
);
```

`knapsack([{ name:'waterproof trousers', weight:42, value:70 }, { name:'waterproof overclothes', weight:43, value:75 }, { name:'note-case', weight:22, value:80 }, { name:'sunglasses', weight:7, value:20 }, { name:'towel', weight:18, value:12 }, { name:'socks', weight:4, value:50 }, { name:'book', weight:30, value:10 }], 200)` は `317` を返す必要があります。

```js
assert.equal(
  knapsack(
    [
      { name: 'waterproof trousers', weight: 42, value: 70 },
      { name: 'waterproof overclothes', weight: 43, value: 75 },
      { name: 'note-case', weight: 22, value: 80 },
      { name: 'sunglasses', weight: 7, value: 20 },
      { name: 'towel', weight: 18, value: 12 },
      { name: 'socks', weight: 4, value: 50 },
      { name: 'book', weight: 30, value: 10 }
    ],
    200
  ),
  317
);
```

# --seed--

## --seed-contents--

```js
function knapsack(items, maxweight) {

}
```

# --solutions--

```js
function knapsack(items, maxweight) {
  var _ = {
    max: function(e) {
      var mx = e[0];
      e.forEach(function(f) {
        if (mx < f) mx = f;
      });
      return mx;
    },
    map: function(array, func) {
      return array.map(func);
    },
    isUndefined: function(a) {
      if (a) {
        return false;
      }
      return true;
    },
    range: function(start, end, step) {
      var a = [];
      var f = (f = (i, end) => i < end);
      if (start > end) f = (i, end) => i > end;

      for (var i = start; f(i, end); i += step) a.push(i);
      return a;
    }
  };

  var valuefn = e => e.value;
  var weightfn = e => e.weight;
  var _epsilon = 0.01;
  var _p = _.max(_.map(items, valuefn));
  var _k = (_epsilon * _p) / items.length;

  var _memo = (function() {
    var _mem = {};
    var _key = function(i, w) {
      return i + '::' + w;
    };
    return {
      get: function(i, w) {
        return _mem[_key(i, w)];
      },
      put: function(i, w, r) {
        _mem[_key(i, w)] = r;
        return r;
      }
    };
  })();

  var _m = function(i, w) {
    i = Math.round(i);
    w = Math.round(w);

    if (i < 0 || w === 0) {
      // empty base case
      return { items: [], totalWeight: 0, totalValue: 0 };
    }

    var mm = _memo.get(i, w);
    if (!_.isUndefined(mm)) {
      return mm;
    }

    var item = items[i];
    if (weightfn(item) > w) {
      //item does not fit, try the next item
      return _memo.put(i, w, _m(i - 1, w));
    }
    // this item could fit.
    // are we better off excluding it?
    var excluded = _m(i - 1, w);
    // or including it?
    var included = _m(i - 1, w - weightfn(item));
    if (
      included.totalValue + Math.floor(valuefn(item) / _k) >
      excluded.totalValue
    ) {
      // better off including it
      // make a copy of the list
      var i1 = included.items.slice();
      i1.push(item);
      return _memo.put(i, w, {
        items: i1,
        totalWeight: included.totalWeight + weightfn(item),
        totalValue: included.totalValue + Math.floor(valuefn(item) / _k)
      });
    }
    //better off excluding it
    return _memo.put(i, w, excluded);
  };
  var scaled = _m(items.length - 1, maxweight);

  var val = 0;
  scaled.items.forEach(function(e) {
    val += e.value;
  });
  return val;
}
```
