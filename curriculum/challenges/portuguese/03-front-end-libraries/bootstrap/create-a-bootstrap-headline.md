---
id: bad87fee1348bd9aec908846
title: Crie um Título Bootstrap
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

Agora vamos construir algo do zero para praticar nossa habilidade em HTML, CSS e Bootstrap.

Iremos construir um playground JQuery, o qual iremos em breve colocar em uso nos nos desafios JQuery.

Para começar, crie um elemento `h3`, com o texto `JQuery Playground`.

Colore seu elemento `h3` com a classe Bootstrap `text-primary`, e centralize-o com a classe Bootstrap `text-center`.

# --hints--

Você deve adicionar um elemento `h3` para sua página.

```js
assert($('h3') && $('h3').length > 0);
```

Seu elemento `h3` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

Seu elemento `h3` deve ser colorido ao aplicar a classe `text-primary`

```js
assert($('h3').hasClass('text-primary'));
```

Seu elemento `h3` deve ser centralizado ao aplicar a classe `text-center`

```js
assert($('h3').hasClass('text-center'));
```

Seu elemento `h3` deve ter o texto `JQuery Playground`.

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
