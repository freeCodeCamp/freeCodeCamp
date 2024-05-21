---
id: 5dfb5ecbeacea3f48c6300b1
title: Passo 21
challengeType: 0
dashedName: step-21
---

# --description--

O elemento `li` é usado para criar um item em uma lista ordenada ou não ordenada.

Aqui está um exemplo de itens em uma lista não ordenada:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Aninhe no elemento `ul` uma lista de três coisas que gatos adoram:

`cat nip` `laser pointers` `lasagna`

# --hints--

Você deve usar três elementos `li`. Cada elemento `li` deve ter sua própria tag de abertura e de fechamento.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

Use três elementos `li` com os textos `cat nip`, `laser pointers` e `lasagna`, em qualquer ordem. Você esqueceu algum dos textos ou cometeu um erro de digitação.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

Os três elementos `li` devem estar entre as tags de abertura e fechamento do elemento `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

