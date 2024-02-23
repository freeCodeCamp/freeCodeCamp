---
id: 587d7fae367417b2b2512be3
title: 使用 XMLHttpRequest 方法獲取 JSON
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

你還可以從外部來源請求數據。 這就是 API 發揮作用的地方。

請記住，API（或叫應用程序編程接口）是計算機用來互相通信的工具。 你將學習如何通過 AJAX技術 從 API 獲得的數據來更新 HTML。

大部分 web APIs 以 JSON 格式傳輸數據。 JSON 是 JavaScript Object Notation 的簡寫。

JSON 語法與 JavaScript 對象字面符號非常相似。 JSON 具有對象屬性以及其當前值，夾在 `{` 和 `}`之間。

這些屬性及其值通常稱爲 "鍵值對"。

但是，JSON 是由 API 以`bytes` 形式傳輸的，你的程序以`string`接受它。 它們能轉換成爲 JavaScript 對象，但默認情況下它們不是 JavaScript 對象。 `JSON.parse`方法解析字符串並構造它描述的 JavaScript 對象。

你可以從 freeCodeCamp 的 Cat Photo API 請求 JSON。 以下是你可以在點擊事件中添加的代碼：

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

這裏介紹每行代碼的作用。 JavaScript `XMLHttpRequest` 對象具有許多用於傳輸數據的屬性和方法。 首先，創建一個`XMLHttpRequest`對象實例，並保存在`req`變量裏 。 然後，`open` 方法初始化一個請求——這個例子是從 API 請求數據，因此它是一個 `GET` 請求。 第二個參數 `open` 是你要從中請求數據的 API 的 URL。 第三個參數是一個布爾值， `true` 使其成爲異步請求。 `send` 方法發送請求。 最後，`onload` 事件處理程序解析返回的數據並應用該 `JSON.stringify` 方法將JavaScript對象轉換爲字符串， 然後將此字符串作爲消息文本插入。

# --instructions--

更新代碼，創建並向 freeCodeCamp Cat Photo API 發送 `GET` 請求。 然後單擊 `Get Message` 按鈕。 AJAX 函數將使用 API​​ 的原始 JSON 輸出替換文本 `The message will go here`。

# --hints--

應該創建一個新的 `XMLHttpRequest`。

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

應該使用該 `open` 方法初始化對 freeCodeCamp Cat Photo API 的 `GET` 請求。

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

應使用該 `send` 方法發送請求。

```js
assert(code.match(/\.send\(\s*\)/g));
```

應該有一個 `onload` 設置爲函數的事件處理程序。

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

應該使用該 `JSON.parse` 方法來解析 `responseText`。

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

應該使用 `message` 獲取元素，並將其內部 HTML 轉換爲 JSON 數據字符串。

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
