---
id: 5ccfad82bb2dc6c965a848e5
title: 使用 JavaScript 的 fetch 方法獲取 JSON
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

請求外部數據的另一個方法是使用 JavaScript 的 `fetch()` 方法。 它的作用和 `XMLHttpRequest` 一樣，但是它的語法更容易理解。

下面是使用 GET 請求 `/json/cats.json` 數據的例子。

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

逐行解釋一下代碼。

第一行是發起請求。 `fetch(URL)` 向指定的 URL 發起 `GET` 請求。 這個方法返回一個 Promise。

當 Promise 返回後，如果請求成功，會執行 `then` 方法，該方法把響應轉換爲 JSON 格式。

`then` 方法返回的也是 Promise，會被下一個 `then` 方法捕獲。 第二個 `then` 方法傳入的參數就是最終的 JSON 對象。

接着，使用 `document.getElementById()` 選擇將要接收數據的元素。 然後插入請求返回的 JSON 對象創建的字符串修改元素的 HTML 代碼。

# --instructions--

更新代碼，創建並向 freeCodeCamp Cat Photo API 發送 `GET` 請求。 這次使用 `fetch` 方法而不是 `XMLHttpRequest`。

# --hints--


你的代碼應該使用獲取的數據來替換內部 HTML。

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


你的代碼應該使用 `fetch` 發起 `GET` 請求。

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

你的代碼應該使用 `then` 來轉換對 JSON 的響應。

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

你的代碼應該使用 `then` 來處理由另一個 `then` 轉換爲 JSON 的數據。

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

你的代碼應該選擇 id 爲 `message` 的元素，然後把它的內部 HTML 改成 JSON 數據的字符串。

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
