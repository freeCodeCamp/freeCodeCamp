---
id: bad87fee1348bd9aec908846
title: Criar um título com Bootstrap
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

Agora vamos construir algo do zero para praticar nossa habilidade em HTML, CSS e Bootstrap.

Vamos construir um playground jQuery, o qual vamos colocar em uso em breve nos desafios de jQuery.

Para começar, crie um elemento `h3`, com o texto `jQuery Playground`.

Dê ao elemento `h3` uma cor com a classe `text-primary`, e centralize-o com a classe `text-center` do Bootstrap.

# --hints--

Você deve adicionar um elemento `h3` à página.

```js
assert($('h3') && $('h3').length > 0);
```

O elemento `h3` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

O elemento `h3` deve ser colorido ao aplicar a classe `text-primary`

```js
assert($('h3').hasClass('text-primary'));
```

O elemento `h3` deve ser centralizado ao aplicar a classe `text-center`

```js
assert($('h3').hasClass('text-center'));
```

O elemento `h3` deve ter o texto `jQuery Playground`.

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```
