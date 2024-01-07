---
id: bad87fee1348bd9aec908746
title: Hospedar nossa página em um div de contêiner fluido do Bootstrap
challengeType: 0
forumTopicId: 18198
dashedName: house-our-page-within-a-bootstrap-container-fluid-div
---

# --description--

Agora, vamos garantir que todo o conteúdo na sua página seja responsivo a dispositivo móveis.

Vamos aninhar nosso elemento `h3` dentro de um elemento `div` com a classe `container-fluid`.

# --hints--

O elemento `div` teve ter a classe `container-fluid`.

```js
assert($('div').hasClass('container-fluid'));
```

Cada um de seus elementos `div` deve ter tags de fechamento.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

O elemento `h3` deve estar aninhando dentro de um elemento `div`.

```js
assert($('div').children('h3').length > 0);
```

# --seed--

## --seed-contents--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

# --solutions--

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```
