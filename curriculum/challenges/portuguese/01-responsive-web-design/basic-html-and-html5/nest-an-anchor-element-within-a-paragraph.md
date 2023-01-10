---
id: bad87fee1348bd9aede08817
title: Inserir um elemento de âncora em um parágrafo
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

Você pode incluir links dentro de outros elementos de texto.

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

Vamos dividir o exemplo em partes. O texto normal está dentro do elemento `p`:

```html
<p> Here's a ... for you to follow. </p>
```

Em seguida, temos o elemento de *âncora* `<a>` (que exige uma tag de fechamento `</a>`):

```html
<a> ... </a>
```

`target` é um atributo da tag de âncora que especifica onde abrir o link. O valor `_blank` especifica que o link deve ser aberto em uma nova aba. O atributo `href` da tag de âncora contém o endereço URL do link:

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

O texto, `link to www.freecodecamp.org`, dentro do elemento `a`, é chamado de <dfn>texto âncora</dfn> e exibirá o link que pode ser clicado:

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

O resultado final do exemplo ficará assim:

Aqui temos o <a href="https://www.freecodecamp.org" target="_blank">link para www.freecodecamp.org</a> para você seguir.

# --instructions--

Insira o elemento `a` dentro de um novo elemento `p`. Não crie uma nova tag de âncora. O novo parágrafo deve ter um texto que diz `View more cat photos`, onde `cat photos` é um link, enquanto o restante é texto sem formatação.

# --hints--

Você deve ter apenas um elemento `a`.

```js
assert(
  $('a').length  === 1 
);
```

O elemento `a` deve direcionar para "`https://www.freecatphotoapp.com`".

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

O texto âncora do elemento `a` deve ser `cat photos`

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

Você deve criar um novo elemento `p`. Deve haver pelo menos 3 tags `p` no seu código HTML.

```js
assert($('p') && $('p').length > 2);
```

O elemento `a` deve ser incluído em seu novo elemento `p`.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

O elemento `p` deve ter o texto `View more` (com um espaço depois dele).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

O elemento `a` <em>não</em> deve conter o texto `View more`.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

Todos os elementos `p` devem ter uma tag de fechamento.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Todos os elementos `a` devem ter uma tag de fechamento.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
