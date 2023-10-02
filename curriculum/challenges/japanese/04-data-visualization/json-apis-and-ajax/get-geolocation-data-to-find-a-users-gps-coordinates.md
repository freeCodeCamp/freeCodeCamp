---
id: 587d7faf367417b2b2512be8
title: ユーザーの GPS 座標を見つけるために位置情報データを取得する
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

もう一つ便利な点は、ユーザーの現在位置にアクセスできることです。 すべてのブラウザには、この情報を提供できるナビゲータが組み込まれています。

ナビゲータはユーザーの現在の経度と緯度を取得します。

このサイトがあなたの現在位置を知ることについて、許可するか、拒否するかを尋ねるメッセージが表示されます。 コードが正しければ、そのいずれでもチャレンジを完了できます。

「許可」を選択すると、出力先の携帯電話に表示されるテキストが緯度と経度に変わります。

これを行うコードを次に示します。

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

まず、`navigator.geolocation` オブジェクトが存在するかどうかを確認します。 存在する場合、そのオブジェクトの `getCurrentPosition` メソッドが呼び出され、ユーザーの位置に対する非同期リクエストが開始されます。 リクエストが成功すると、メソッド内のコールバック関数が実行されます。 この関数は、ドット記法を使用して `position` オブジェクトの緯度と経度の値にアクセスし、HTMLを更新します。

# --instructions--

サンプルコードを `script` タグ内に追加してユーザーの現在位置を確認し、それを HTML に挿入してください。

# --hints--

`navigator.geolocation` を使用してユーザーの現在位置にアクセスする必要があります。

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

`position.coords.latitude` を使用して、ユーザーの緯度位置を表示する必要があります。

```js
assert(code.match(/position\.coords\.latitude/g));
```

`position.coords.longitude` を使用して、ユーザーの経度位置を表示する必要があります。

```js
assert(code.match(/position\.coords\.longitude/g));
```

`id="data"` を持つ `div` 要素内にユーザーの位置を表示する必要があります。

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
