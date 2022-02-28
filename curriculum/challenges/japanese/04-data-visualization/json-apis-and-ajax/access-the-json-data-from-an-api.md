---
id: 587d7fae367417b2b2512be4
title: API から JSON データにアクセスする
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

前回のチャレンジでは、freeCodeCamp Cat Photo API から JSON データを取得する方法を学びました。

次は、JSON フォーマットをよりよく理解するために、返されたデータを詳しく見ていきしょう。 JavaScript での以下の記法を思い出してください。

<blockquote>[ ] -> 角括弧は配列<br>{ } -> 中括弧はオブジェクト<br>を表し、" " -> 二重引用符は文字列を表します。 これらは JSON 内のキーの名前にも使用されます。</blockquote>

API が返すデータの構造を理解することは重要です。なぜなら、必要な値を取得する方法がそれによって変わるからです。

右側の `Get Message` ボタンをクリックして、freeCodeCamp Cat Photo API JSON を HTML に読み込んでください。

JSON データの最初と最後の文字は角括弧 `[ ]` です。 これは、返されたデータが配列であることを意味します。 JSON データ内の 2 番目の文字は中かっこ `{` で、ここからオブジェクトが開始します。 よく見ると、3 つの別々のオブジェクトがあることが分かります。 この JSON データは 3 つのオブジェクトの配列であり、各オブジェクトには猫の写真に関する情報が含まれています。

既に学んだように、オブジェクトにはカンマで区切られた「キーと値のペア」が含まれています。 猫の写真の例では、最初のオブジェクトに `"id":0` が含まれています。`id` はキー、`0` はそれに対応する値です。 同様に、`imageLink`、`altText`、および `codeNames` のそれぞれにキーがあります。 猫の写真の各オブジェクトはこれらの同じキーを持っていますが、値はそれぞれ異なります。

1 つ目のオブジェクトが持つもう一つの興味深い「キーと値のペア」は、`"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]` です。 ここでは `codeNames` がキーで、値は 3 つの文字列からなる配列です。 キーと、その値である配列とのペア以外に、オブジェクトの配列を持つことも可能です。

配列やオブジェクト内のデータにアクセスする方法を思い出してください。 配列はブラケット記法を使用して、アイテムの特定のインデックスにアクセスします。 オブジェクトはブラケット記法またはドット記法を使用して、与えられたプロパティの値にアクセスします。 最初の猫の写真の `altText` プロパティを出力する例を下に示します。エディタ内の解析された JSON データが、`json` と呼ばれる変数に保存されていることに注意してください。

```js
console.log(json[0].altText);
```

コンソールに、`A white cat wearing a green helmet shaped melon on its head.` という文字列が表示されます。

# --instructions--

`id` 2 の猫について、`codeNames` 配列内の 2 番目の値をコンソールに出力してください。 値にアクセスするには、(変数 `json` に保存されている) オブジェクトにブラケット記法とドット記法を使用する必要があります。

# --hints--

ブラケット記法とドット記法を使用して適切なコード名にアクセスし、コンソールに `Loki` を出力する必要があります。

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line

        // Add your code above this line
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

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
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
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
