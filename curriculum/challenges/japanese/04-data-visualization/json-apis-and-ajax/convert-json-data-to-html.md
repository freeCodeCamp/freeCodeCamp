---
id: 587d7fae367417b2b2512be5
title: JSON データを HTML に変換する
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

JSON API からデータを取得したので、そのデータを HTML で表示できます。

猫の写真のオブジェクトが配列に格納されているので、`forEach` メソッドを使用してデータをループ処理することができます。 各アイテムに到達すると、HTML 要素を変更することができます。

まず、`let html = "";` で html 変数を宣言します。

次に、JSON をループ処理し、キー名を `strong` タグでラップする変数に HTML を追加し、その後に値を追加します。 ループが終わったら、それをレンダリングします。

これを行うコードを次に示します。

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

**注:** このチャレンジでは、新しい HTML 要素をページに追加する必要があるので、`textContent` に頼ることはできません。 代わりに、`innerHTML` を使用する必要があります。これにより、サイトがクロスサイトスクリプティング攻撃に対して脆弱になる可能性があります。

# --instructions--

`forEach` メソッドを追加して JSON データをループ処理し、それを表示するための HTML 要素を作成してください。

JSON の例を示します。

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

# --hints--

`html` 変数にデータを保存する必要があります。

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

`forEach` メソッドを使用して、API から取得した JSON データをループ処理する必要があります。

```js
assert(code.match(/json\.forEach/g));
```

`strong` タグでキー名をラップする必要があります。

```js
assert(code.match(/<strong>.+<\/strong>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line


        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
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
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
        });
        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
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
