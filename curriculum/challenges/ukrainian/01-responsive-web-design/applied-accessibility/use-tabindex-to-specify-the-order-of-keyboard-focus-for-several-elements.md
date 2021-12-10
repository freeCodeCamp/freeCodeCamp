---
id: 587d7790367417b2b2512ab1
title: Використовуйте tabindex, щоб точно визначити фокус клавіатури для декількох елементів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

Значення `tabindex` також вказує на точний порядок вкладки елементів. Це досягається тоді, коли при встановленні значення символ дорівнює додатньому числу 1 або вище.

Налаштування `tabindex="1"` дозволить для початку сфокусувати елемент для клавіатури. Тоді він переходить через послідовність вказаних значень `tabindex` (2,3, і так далі.), перед переходом до елементів за замовчуванням `tabindex="0"`.

Важливо зазначити, що коли порядок вкладок встановлюється таким чином, він замінює стандартний порядок (який використовує джерело HTML). Це може викликати труднощі у користувачів, які хочуть почати навігацію з верхньої частини сторінки. Цей спосіб може стати необхідним в деяких випадках, але з точки зору доступності - будьте обережні перед його застосуванням.

Наприклад:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat має поле для пошуку на сторінці з цитатами, що надихають, які він хоче розмістити в правому верхньому куті з CSS. Він хоче, щоб форми контролю пошук `input` і введення `input` були першими елементами у порядку вкладок. Додайте значення `tabindex` до `1` до `search``input`, і значення `tabindex` до `2` і до `submit` `input`.

Cлід також зауважити, що деякі браузери можуть розмістити вас всередині вашого порядку вкладок, при натисканні на елемент. Елемент був доданий до сторінки, а це гарантує вам те, що ви завжди будете починати з початку вашого порядку вкладок.

# --hints--

Ваш код повинен додати значення `tabindex` до тегу `search` `input`.

```js
assert($('#search').attr('tabindex'));
```

Ваш код повинен додати значення `tabindex` до тегу `submit` `input`.

```js
assert($('#submit').attr('tabindex'));
```

Ваш код повинен встановити значення `tabindex` до тегу `search` `input` зі значенням 1.

```js
assert($('#search').attr('tabindex') == '1');
```

Ваш код повинен встановити значення `tabindex` до тегу `submit` `input` зі значенням 2.

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
