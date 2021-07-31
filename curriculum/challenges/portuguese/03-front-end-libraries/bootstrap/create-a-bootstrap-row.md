---
id: bad87fee1348bd9bec908846
title: Criar uma linha do Bootstrap
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

Agora vamos criar uma linha do Bootstrap para nossos elementos em linha.

Crie um elemento `div` abaixo da tag `h3`, com a classe `row`.

# --hints--

Você deve adicionar o elemento `div` abaixo do elemento `h3`.

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

O elemento `div` deve ter a classe `row`

```js
assert($('div').hasClass('row'));
```

O `row div` deve estar aninhado dentro de `container-fluid div`

```js
assert($('div.container-fluid div.row').length > 0);
```

O elemento `div` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>

</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```
