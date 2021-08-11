---
id: bad87fee1348bd9aedf0887a
title: Criar títulos com o elemento h2
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

Durante as próximas lições, construiremos aos poucos um aplicativo para fotos de gatos em HTML5.

O elemento `h2` que você vai adicionar nesta etapa dará um título de nível dois à página da web.

Este elemento informa ao navegador sobre a estrutura do seu site. Elementos `h1` geralmente são usados para os títulos principais, enquanto os elementos `h2` geralmente são usados para subtítulos. Também existem elementos `h3`, `h4`, `h5` e `h6` para indicar níveis diferentes de subtítulos.

# --instructions--

Adicione a tag `h2` com o texto "CatPhotoApp" para criar um segundo elemento HTML abaixo do elemento `h1` que contém o texto "Hello World".

# --hints--

Você deve criar um elemento `h2`.

```js
assert($('h2').length > 0);
```

O elemento `h2` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

O elemento `h2` deve conter o texto `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

O elemento `h1` deve conter o texto `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

O elemento `h1` deve estar antes do elemento `h2`.

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
