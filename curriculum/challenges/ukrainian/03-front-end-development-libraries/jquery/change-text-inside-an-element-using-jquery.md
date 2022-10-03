---
id: 564944c91be2204b269d51e3
title: Змінюйте текст всередині елемента за допомогою jQuery
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

Використовуючи jQuery, ви можете змінювати текст між початковими і кінцевими тегами елемента. Можна навіть змінити розмітку HTML.

У jQuery є функція `.html()`, що дозволяє додавати HTML-теги та текст в елемент. Будь-який попередній вміст елемента буде повністю замінений на той, що заданий цією функцією.

Ось як можна заново переписати та виділити текст заголовка:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery також має схожу функцію, що називається `.text()`, яка змінює лише текст без додавання тегів. Іншими словами, жодні передані HTML-теги не будуть враховуватися, лише сприйматися як текст, яким би ви хотіли замінити даний вміст.

Змініть кнопку з ідентифікатором `target4`, виділивши її текст.

<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank" rel="noopener noreferrer nofollow">Перегляньте нашу статтю про &lt;em&gt;</a>, щоб дізнатися різницю між `<i>` та `<em>` та їх використанням.

Зверніть увагу, що хоча `<i>` колись використовувався для виділення тексту, тепер його прийнято використовувати як тег для іконок. Зараз тег `<em>` широко розповсюджений як тег для виділення. У даному випадку підійде будь-який з цих двох.

# --hints--

Текст у кнопці `target4` слід виділити, додавши HTML-теги.

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

В іншому випадку текст залишиться незмінним.

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

Не змінюйте будь-який інший текст.

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

Використовуйте `.html()`, а не `.text()`.

```js
assert(code.match(/\.html\(/g));
```

Вибирайте `button id="target4"` за допомогою jQuery.

```js
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
