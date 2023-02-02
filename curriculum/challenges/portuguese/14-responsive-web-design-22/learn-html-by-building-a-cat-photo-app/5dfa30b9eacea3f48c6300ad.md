---
id: 5dfa30b9eacea3f48c6300ad
title: Passo 15
challengeType: 0
dashedName: step-15
---

# --description--

Nos passos anteriores, você usou um elemento de âncora para transformar texto em um link. Outros tipos de conteúdo também podem ser transformados em link, colocando-os dentro de tags de elementos de âncora.

Transforme a imagem em um link, envolvendo-a com as tags dos elementos necessários. Use `https://freecatphotoapp.com` como valor do atributo `href` do elemento de âncora.

# --hints--

O valor do atributo `src` do elemento `img` deve estar definido como `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Você pode tê-lo excluído acidentalmente.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

O elemento de âncora (`a`) deve ter uma tag de abertura. As tags de abertura têm essa sintaxe: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Você deve adicionar apenas uma tag de abertura para o elemento de âncora (`a`). Remova as tags adicionais.

```js
assert(document.querySelectorAll('a').length === 2);
```

O elemento de âncora (`a`) deve ter uma tag de fechamento. As tags de fechamento têm um caractere `/` logo após o caractere `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Você deve adicionar apenas uma tag de fechamento para o elemento de âncora (`a`). Remova as tags adicionais.

```js
assert(code.match(/<\/a>/g).length === 2);
```

O elemento de âncora (`a`) não tem um atributo `href`. Verifique se há um espaço depois do nome da tag de abertura e/ou se há espaços antes de todos os nomes dos atributos.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

O elemento de âncora (`a`) deve fazer um link para `https://freecatphotoapp.com`. Você omitiu o URL ou tem um erro de digitação.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

O elemento `img` deve estar dentro do elemento de âncora (`a`). Todo o elemento `img` deve estar dentro das tags de abertura e fechamento do elemento de âncora (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

