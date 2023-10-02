---
id: 587d778b367417b2b2512aa8
title: 添加可訪問的日期選擇器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

表單中經常出現 `input` 標籤，它可以用來創建多種表單控件。 它的 `type` 屬性指定了所要創建的 `input` 標籤類型。

在以前的挑戰中，我們已經見過 `text` 與 `submit` 類型的 input 標籤。 HTML5 規範添加了 `date` 類型來創建日期選擇器。 如果瀏覽器支持，在點擊 `input` 標籤時，日期選擇器會顯示出來，這讓用戶填寫表單變得更加容易。

對於較老的瀏覽器，類型將默認爲 `text`， 這樣它可以通過 `label` 或 `placeholder` 文本向用戶顯示預期的日期格式。

舉個例子：

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat 想舉辦一場比武大會，他想收集參賽者的最佳參賽時間。 請爲 Camper Cat 的頁面添加一個`input` 標籤，起 `type` 屬性值爲 `date`，`id` 屬性爲 `pickdate`，`name` 屬性爲 `date`。

# --hints--

日期選擇器應有一個 `input` 標籤。

```js
assert($('input').length == 2);
```

`input` 標籤應有一個值爲 `date` 的 `type` 屬性。

```js
assert($('input').attr('type') == 'date');
```

`input` 標籤應有一個值爲 `pickdate` 的 `id` 屬性。

```js
assert($('input').attr('id') == 'pickdate');
```

`input` 標籤應有一個值爲 `date` 的 `name` 屬性。

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
