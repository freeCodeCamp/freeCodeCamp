---
id: 587d7faf367417b2b2512be9
title: 使用 XMLHttpRequest 方法發送數據
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

在前面的示例中，你通過外部資源獲取數據。 此外，你也可以將數據發送到外部資源，只要該資源支持 AJAX 請求並且你知道 URL。

JavaScript 的`XMLHttpRequest`方法也用於將數據發佈到服務器。 這是一個示例：

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

你之前已經見過這些方法。 `open` 方法將對外部資源的給定 URL 的請求初始化爲 `POST`，並使用 `true` 布爾值使其變成異步的。 `setRequestHeader` 方法設置了 HTTP 請求標頭的值，該標頭包含有關發送人和請求的信息。 它必須在 `open` 方法之後、`send` 方法之前調用。 它的兩個參數表示標頭的內容類型和標頭數據將被設置成什麼值。 接下來，`onreadystatechange` 事件監聽器監聽請求狀態的更改。 `readyState` 爲 `4`，表示操作已完成。`status` 爲 `201`，表示請求成功。 文檔的 HTML 可以更新。 最後，`send` 方法發送帶有 `body` 值的請求，其中 `userName` 的值由用戶在 `input` 字段中輸入。

# --instructions--

更新代碼，創建並向 API 發送 `POST` 請求。 然後在輸入框中輸入你的姓名，並點擊 `Send Message`。 你的 AJAX 函數會用服務器返回的數據替換 `Reply from Server will be here.`。 修改返回的請求結果，在你的名字後面添加 `loves cats`。

# --hints--

應該創建一個新的 `XMLHttpRequest`。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

應該使用 `open` 方法初始化一個發送給服務器的 `POST` 請求。

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

應該使用 `setRequestHeader` 方法。

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

應該有一個 `onreadystatechange` 的事件監聽器。

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

應該獲取 class 爲 `message` 的元素，並將它的 `textContent` 更改爲 `userName loves cats`。

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

應該使用 `send` 方法。

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
