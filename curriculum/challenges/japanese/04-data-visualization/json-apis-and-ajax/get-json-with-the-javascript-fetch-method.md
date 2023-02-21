---
id: 5ccfad82bb2dc6c965a848e5
title: JavaScript fetch メソッドで JSON を取得する
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

外部データをリクエストするもう一つの方法は、JavaScript `fetch()` メソッドを使用することです。 これは `XMLHttpRequest` と同様のメソッドですが、構文はそれよりも理解しやすいと考えられています。

次のコードは、`/json/cats.json` に対して GET リクエストを行います。

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

コードを細かく見ていきましょう。

最初の行ではリクエストを実行しています。 `fetch(URL)` は、指定された URL に対して `GET` リクエストを行います。 このメソッドはプロミスを返します。

プロミスが返された後、リクエストが成功していれば `then` メソッドが実行されます。このメソッドは、レスポンスを取り JSON フォーマットに変換します。

`then` メソッドもプロミスを返し、それは次の `then` メソッドで処理されます。 2 番目の `then` の中の引数が、あなたが探している JSON オブジェクトです！

ここで、このメソッドは `document.getElementById()` を使用して、データを受け取る要素を選択します。 次に、リクエストから返された JSON オブジェクトで作成された文字列を挿入することにより、要素の HTML コードを変更します。

# --instructions--

`GET` リクエストを作成して freeCodeCamp Cat Photo API に送信するように、コードを更新してください。 ただし今回は、`XMLHttpRequest` の代わりに `fetch` メソッドを使用してください。

# --hints--


要素内の HTML を、fetch で取得したデータで置き換えてください。

```js
const catData = "dummy data";
const ref = fetch;
fetch = () => Promise.resolve({ json: () => catData });
async () => {
  try {
    document.getElementById("getMessage").click();
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  } catch (error) {
    console.log(error);
  } finally {
    fetch = ref;
    assert.equal(
      document.getElementById("message").textContent,
      JSON.stringify(catData)
    );
  }
};
```


`fetch` を使用して `GET` リクエストを行う必要があります。

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

`then` を使用してレスポンスを JSON に変換する必要があります。

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

`then` を使用して、他の `then` によって JSON に変換されたデータを処理する必要があります。

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

`message` という id を持つ要素を取得し、その内部の HTML を JSON データの文字列に変更する必要があります。

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
