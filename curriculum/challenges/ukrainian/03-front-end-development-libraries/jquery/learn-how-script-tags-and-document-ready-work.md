---
id: bad87fee1348bd9acdd08826
title: Дізнайтесь, як працюють теги script та document ready
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

Тепер ми готові вивчити jQuery — найпопулярніший інструмент JavaScript усіх часів.

Перш ніж ми зможемо почати використовувати jQuery, нам потрібно додати декілька елементів до HTML.

Спочатку додайте елемент `script` зверху своєї сторінки. Не забудьте закрити його в наступному рядку.

Ваш браузер запустить будь-який JavaScript всередині елемента `script`, включно з jQuery.

Всередині елемента `script` додайте цей код: `$(document).ready(function() {` до `script`. Потім закрийте його в наступному рядку (досі всередині елемента `script`), використавши `});`

Згодом ви дізнаєтесь більше про функції. Важливо знати, що код всередині функції запуститься, як тільки браузер завантажить сторінку.

Це важливо, оскільки без `document ready function` код може запуститись до того, як виконається HTML, що може спричинити помилки.

# --hints--

Створіть елемент `script` та переконайтесь, що він дійсний і має кінцевий тег.

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

Додайте `$(document).ready(function() {` на початку елемента `script`.

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

Закрийте функцію `$(document).ready(function() {` за допомогою `});`

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --seed--

## --seed-contents--

```html
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
