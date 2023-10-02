---
id: 587d7dab367417b2b2512b6d
title: Usar programação funcional para converter strings em slugs de URL
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Os últimos desafios cobriram uma série de métodos úteis de strings e arrays que usam princípios de programação funcional. Também aprendemos o poderoso método `reduce`, que é usado para reduzir arrays a um único valor. Seja para calcular médias ou para ordenação, qualquer operação de array pode ser feita ao usá-lo. Lembre-se de que `map` e `filter` são casos especiais de `reduce`.

Vamos combinar o que aprendemos para resolver um problema prático.

Muitos sites de gerenciamento de conteúdo (*content management sites*, CMS) usam o título das publicações como parte da URL para maior legibilidade. Por exemplo, se você publicar um artigo no Medium chamado `Stop Using Reduce`, é provável que o URL use o título em sua composição: `.../stop-using-reduce`. Talvez você já tenha percebido que acontece o mesmo no freeCodeCamp.

# --instructions--

Complete a função `urlSlug` para que ela converta a string `title` e a retorne sem maiúsculas e com hifens no lugar dos espaços. Você pode usar qualquer método coberto nesta seção, mas não use `replace`. Estes são os requisitos:

A entrada é uma string com espaços e letras maiúsculas

A saída é uma string cujos espaços foram substituídos por hifens (`-`)

A saída não deve conter letras maiúsculas

A saída não deve conter espaços

# --hints--

Você não pode usar o método `replace` neste desafio.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` deve retornar a string `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` deve retornar a string `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` deve retornar a string `a-mind-needs-books-like-a-sword-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` deve retornar a string `hold-the-door`.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
