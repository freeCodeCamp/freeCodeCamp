---
id: bad87fee1348bd9aec908849
title: Додайте елементи до стіни Bootstrap
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

Зараз у кожному стовпці ряду є декілька елементів `div`. Саме те, що треба для наступної дії. Тепер можемо додати елементи `button`.

Вкладіть три елементи `button` в межах кожного елемента `div` з класом `well`.

# --hints--

Три елементи `button` мають бути вкладеними у кожному елементі `div` з класом `well`.

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

Загалом має бути 6 елементів `button`.

```js
assert($('button') && $('button').length > 5);
```

Усі елементи `button` повинні мати кінцеві теги.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```
