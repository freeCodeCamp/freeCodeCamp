---
id: 587d7fac367417b2b2512bdb
title: ドメインとレンジをスケールに設定する
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

デフォルトでは、スケールは同一関係を使用します。 これは、入力値が出力値にマッピングされることを意味します。 しかし、スケールはそれよりはるかに柔軟で面白いことができます。

データセットの値の範囲を 50 ～ 480 とします。 これはスケールの入力情報であり、<dfn>ドメイン</dfn> とも呼ばれます。

You want to map those points along the `x` axis on the SVG, between 10 units and 500 units. これは出力情報であり、<dfn>レンジ</dfn> とも呼ばれます。

`domain()` メソッドと `range()` メソッドは、これらの値をスケールに設定します。 両方のメソッドは少なくとも 2 つの要素の配列を引数として取ります。 以下がその例です。

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

値 `10`、`500`、 `323.37`、および `807.67` がこの順序でコンソールに表示されます。

注意点として、スケールは、ドメイン値とレンジ値の間に線形関係があるという前提で、与えられた数値に対する出力内容を決定します。 ドメイン (50) の最小値は、レンジの最小値 (10) にマッピングされます。

# --instructions--

スケールを作成し、そのドメインを `[250, 500]`、レンジを `[10, 150]` に設定してください。

**注:** `domain()` メソッドと `range()` メソッドを `scale` 変数にチェーンすることができます。

# --hints--

`domain()` メソッドを使用する必要があります。

```js
assert(code.match(/\.domain/g));
```

`scale` の `domain()` は `[250, 500]` に設定する必要があります。

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

`range()` メソッドを使用する必要があります。

```js
assert(code.match(/\.range/g));
```

`scale` の `range()` は `[10, 150]` に設定する必要があります。

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

`h2` 内のテキストを `-102` にする必要があります。

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const scale = d3.scaleLinear();
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
