---
id: 587d7fa7367417b2b2512bc8
title: D3 でクラスを追加する
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

HTML 要素に多くのインラインスタイルを使用すると、小さなアプリでも管理が難しくなります。 CSS ルールを使用して、要素にクラスを追加しそのクラスのスタイルを指定するという作業を一度だけ行う方が簡単です。 D3 には、任意の HTML 属性 (クラス名など) を要素に追加する `attr()` メソッドがあります。

`attr()` メソッドは `style()` と同じように動作します。 このメソッドはカンマ区切りの値を取得します。また、コールバック関数を使用できます。 次のコードは、`container` のクラスを選択範囲に追加する例です。

```js
selection.attr("class", "container");
```

注意点として、クラスを追加する必要があり `container` パラメータのみが変更される場合は常に、`class` パラメータは同じままです。

# --instructions--

エディタ内のコードに `attr()` メソッドを追加し、`div` 要素に `bar` のクラスを追加してください。

# --hints--

`div` 要素には `bar` のクラスが必要です。

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

`attr()` メソッドを使用する必要があります。

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
