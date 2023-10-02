---
id: 587d7fae367417b2b2512be4
title: 訪問來自 API 的 JSON 數據
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

在前面的挑戰中，你瞭解瞭如何從 freeCodeCamp Cat Photo API 獲取 JSON 數據。

現在，你將進一步觀察返回的數據，以更好地瞭解 JSON 格式。 回憶一下 JavaScript 中的一些符號：

<blockquote>[ ] -> 方括號表示數組<br>{ } -> 大括號表示對象<br>" " -> 雙引號表示字符串。 它們還用於表示 JSON 中的鍵名。</blockquote>

理解 API 返回數據的結構是必需的，它將影響你如何獲取你所需的值。

在右側，單擊 `Get Message` 按鈕，將 freeCodeCamp Cat Photo API JSON 加載到 HTML 中。

在 JSON 數據中的第一個和最後一個字符是中括號`[ ]`， 這意味着返回的數據是一個數組。 JSON 數據中的第二個符號是一個大括號`{`，這意味着是一個對象。 再仔細看，你會發現有三個獨立的對象。 這個 JSON 數據是一個包含三個對象的數組，它們各自都包含了 cat photo 的信息。

你之前瞭解了對象包含了用逗號分隔的 "鍵值對"。 在 Cat Photo 示例中，第一個對象的 `"id":0`，`id` 是鍵，`0` 是對應的值。 類似地，`imageLink`、`altText` 和 `codeNames` 也有鍵。 每個 cat photo 對象具有相同的鍵，但具有不同的值。

在第一個對象中有一個有趣的 "鍵值對" 它是`"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`。 `codeNames` 是鍵，它的值是一個包含三個字符串的數組。 對象數組以及數組作爲鍵可以作爲值

記住如何訪問數組和對象中的數據。 數組使用括號表示法來訪問項目的特定索引， 對象使用括號或點表示法來訪問給定屬性的值。 這個例子打印第一張 cat photo 的 `altText` 屬性——請注意，編輯器中解析的 JSON 數據被保存在名爲 `json` 的變量中：

```js
console.log(json[0].altText);
```

控制檯將顯示字符串 `A white cat wearing a green helmet shaped melon on its head.`。

# --instructions--

對於 `id` 爲 2 的 cat，在控制檯打印 `codeNames` 數組中的第二個值。 你應該在對象（保存在變量 `json` 中）上使用括號或者點表示法來訪問該值。

# --hints--

應該使用括號和點表示法來讀取正確的代碼名稱，並將 `Loki` 打印到控制檯。

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
