---
id: bad87fee1348bd9aec908857
title: Використовуйте Примітки для уточнення коду
challengeType: 0
forumTopicId: 18347
dashedName: use-comments-to-clarify-code
---

# --description--

Під час роботи із jQuerzy ми видозмінимо елементи HTML таким чином, щоб нам не довелося змінювати їх у самому HTML.

Давайте впевнимося, що кожен знає, що не варто змінювати жоден з цих кодів напряму.

Потрібно пам'ятати, що розпочати примітку можна за допомогою`<!--`. А завершити`-->`

Додайте примітку на початку HTML, у якій вказано, що `Code below this line should not be changed`

# --hints--

Примітку варто розмістити над самим HTML, розпочавши її`<!--`.

```js
assert(code.match(/^\s*<!--/));
```

Примітка неодмінно має містити рядок`Code below this line should not be changed`.

```js
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
```

Завершити примітку слід таким чином: `-->`.

```js
assert(code.match(/-->.*\n+.+/g));
```

Слід стежити, аби кількість символів на початку примітки збігалась із кількістю символів у кінці примітки.

```js
assert(code.match(/<!--/g).length === code.match(/-->/g).length);
```

# --seed--

## --seed-contents--

```html
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
<!-- Code below this line should not be changed -->
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
