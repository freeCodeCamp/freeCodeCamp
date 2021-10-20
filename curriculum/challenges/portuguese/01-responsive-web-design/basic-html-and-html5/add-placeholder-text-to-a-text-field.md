---
id: bad87fee1348bd9aedf08830
title: Adicionar texto placeholder a um campo de texto
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

O texto placeholder é o conteúdo exibido dentro do elemento `input` antes da inserção de texto por parte do usuário.

Você pode criar um texto placeholder da seguinte maneira:

```html
<input type="text" placeholder="this is placeholder text">
```

**Observação:** lembre-se de que os elementos `input` fecham em si mesmos.

# --instructions--

Defina o valor do `placeholder` do elemento `input` de texto para "cat photo URL".

# --hints--

Você deve adicionar um atributo `placeholder` ao elemento `input` de texto que já existe.

```js
assert($('input[placeholder]').length > 0);
```

Você deve definir o valor do atributo `placeholder` para `cat photo URL`.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

O elemento `input` final não deve ter uma tag de fechamento.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

O elemento `input` final deve ter uma sintaxe válida.

```js
assert($('input[type=text]').length > 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>
```
