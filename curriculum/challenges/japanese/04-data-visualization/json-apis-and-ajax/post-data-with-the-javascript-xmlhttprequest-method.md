---
id: 587d7faf367417b2b2512be9
title: JavaScript の XMLHttpRequest メソッドでデータをポストする
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

以前の例では、外部リソースからデータを受け取りました。 そのリソースが AJAX リクエストをサポートし、あなたが URL を知っていれば、外部リソースにデータを送信することもできます。

JavaScriptの `XMLHttpRequest` メソッドは、データをサーバーにポストするためにも使用されます。 次に例を示します。

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

これらのメソッドのいくつかは見覚えがあるでしょう。 このコードでは、`open` メソッドがリクエストを、与えられた外部リソースの URL への `POST` として初期化し、`true` ブール値を使用してそれを非同期にしています。 `setRequestHeader` メソッドは HTTP リクエストヘッダーの値を設定します。これには送信者とリクエストに関する情報が格納されています。 それは `open` メソッドより後、かつ、`send` メソッドより前に呼び出される必要があります。 この 2 つのパラメータは、ヘッダーの名前と、ヘッダーのボディーとして設定する値です。 次に、`onreadystatechange` イベントリスナーがリクエスト状態の変化を処理します。 `readyState` の `4` は操作の完了を意味し、`status` の `201` はリクエストが成功したことを意味します。 ドキュメントの HTML を更新することができます。 最後に、`send` メソッドが `body` 値を持つリクエストを送信し、ユーザーによって `userName` キーが `input` フィールドに与えられます。

# --instructions--

API エンドポイントに `POST` リクエストを行うように、コードを更新してください。 次に、入力フィールドに自分の名前を入力し、`Send Message` をクリックしてください。 AJAX 関数によって、`Reply from Server will be here.` がサーバーからのデータに置き換えられる必要があります。 自分の名前に `loves cats` というテキストが追加されたものが表示されるように、レスポンスをフォーマットしてください。

# --hints--

新しい `XMLHttpRequest` を作成する必要があります。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

`open` メソッドを使用してサーバーへの `POST` リクエストを初期化する必要があります。

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

`setRequestHeader` メソッドを使用する必要があります。

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

`onreadystatechange` イベントハンドラを関数に設定する必要があります。

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

`message` クラスを持つ要素を取得し、`textContent` を `userName loves cats` に変更する必要があります。

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

`send` メソッドを使用する必要があります。

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
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

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```
