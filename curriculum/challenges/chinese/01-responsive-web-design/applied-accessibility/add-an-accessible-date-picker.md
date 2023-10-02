---
id: 587d778b367417b2b2512aa8
title: 添加可访问的日期选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

表单中经常出现 `input` 标签，它可以用来创建多种表单控件。 它的 `type` 属性指定了所要创建的 `input` 标签类型。

在以前的挑战中，我们已经见过 `text` 与 `submit` 类型的 input 标签。 HTML5 规范添加了 `date` 类型来创建日期选择器。 如果浏览器支持，在点击 `input` 标签时，日期选择器会显示出来，这让用户填写表单变得更加容易。

对于较老的浏览器，类型将默认为 `text`， 这样它可以通过 `label` 或 `placeholder` 文本向用户显示预期的日期格式。

举个例子：

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat 想举办一场比武大会，他想收集参赛者的最佳参赛时间。 请为 Camper Cat 的页面添加一个`input` 标签，起 `type` 属性值为 `date`，`id` 属性为 `pickdate`，`name` 属性为 `date`。

# --hints--

日期选择器应有一个 `input` 标签。

```js
assert($('input').length == 2);
```

`input` 标签应有一个值为 `date` 的 `type` 属性。

```js
assert($('input').attr('type') == 'date');
```

`input` 标签应有一个值为 `pickdate` 的 `id` 属性。

```js
assert($('input').attr('id') == 'pickdate');
```

`input` 标签应有一个值为 `date` 的 `name` 属性。

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
