---
id: 587d7fae367417b2b2512be3
title: JavaScript XMLHttpRequest メソッドで JSON を取得する
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

外部ソースにデータをリクエストすることもできます。 ここで API の出番です。

API (アプリケーション・プログラミング・インターフェイス) はコンピュータが相互通信に使用する道具であるということを思い起こしましょう。 このチャレンジでは、AJAX と呼ばれる技術で API からデータを取得し、そのデータを使用して HTML を更新する方法を学びます。

ほとんどのウェブ API は、JSON と呼ばれるフォーマットでデータを転送します。 JSON は JavaScript Object Notation の略です。

JSON 構文は JavaScript オブジェクトのリテラル表記と非常によく似ています。 JSON にはオブジェクトのプロパティとその現在値があり、それらは「`{`」と「`}`」の間に挟まれています。

これらのプロパティとその値は、しばしば「キーと値のペア」(key-value pairs) と呼ばれます。

ただし、API によって送信された JSON は `bytes` (バイト列) として送信され、アプリケーションはそれを `string` (文字列) として受信します。 これらは JavaScript オブジェクトに変換できますが、デフォルトでは JavaScript オブジェクトではありません。 `JSON.parse` メソッドは文字列を解析し、その文字列によって記述された JavaScript オブジェクトを構築します。

freeCodeCamp の Cat Photo API に JSON をリクエストできます。 これを行うには、次のコードをクリックイベントに追加します。

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

このコードが何をしているのか、一つずつ見ていきましょう。 JavaScript `XMLHttpRequest` オブジェクトには、データ転送に使用される数多くのプロパティとメソッドがあります。 最初に、`XMLHttpRequest` オブジェクトのインスタンスが作成され、`req` 変数に保存されます。 次に、`open` メソッドがリクエストを初期化します。この例では API にデータを要求するので、`GET` リクエストです。 `open` の 2 番目の引数は、データ要求先の API の URL です。 3 番目の引数はブール値で、`true` であれば非同期リクエストになります。 `send` メソッドがリクエストを送信します。 最後に `onload` イベントハンドラが、返されたデータを解析し、`JSON.stringify` メソッドを適用して JavaScript オブジェクトを文字列に変換します。 次に、この文字列がメッセージテキストとして挿入されます。

# --instructions--

`GET` リクエストを作成して freeCodeCamp Cat Photo API に送信するために、コードを更新してください。 次に、`Get Message` ボタンをクリックしてください。 AJAX 関数により、テキスト `The message will go here` が、API からの生の JSON 出力に置き換えられます。

# --hints--

新しい `XMLHttpRequest` を作成する必要があります。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

`open` メソッドを使用して、freeCodeCamp Cat Photo API への `GET` リクエストを初期化する必要があります。

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

`send` メソッドを使用してリクエストを送信する必要があります。

```js
assert(code.match(/\.send\(\s*\)/g));
```

`onload` イベントハンドラを関数に設定する必要があります。

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

`JSON.parse` メソッドを使用して `responseText` を解析する必要があります 。

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

`message` クラスを持つ要素を取得し、内部の HTML を JSON データの文字列に変更する必要があります。

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line


      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
      };
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
