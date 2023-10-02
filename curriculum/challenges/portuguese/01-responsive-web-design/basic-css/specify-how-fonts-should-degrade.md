---
id: bad87fee1348bd9aedf08808
title: Especificar soluções para quando uma tipografia não estiver disponível
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

Por padrão, existem várias tipografias disponíveis em todos os navegadores. As tipografias padrão são: `monospace`, `serif` e `sans-serif`.

Quando uma tipografia não estiver disponível, você pode dizer ao navegador para usar outra tipografia.

Por exemplo, se um elemento usa a tipografia `Helvetica`, mas você quer que ele use `sans-serif` quando a `Helvetica` não estiver disponível, você pode fazer assim:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

O nome dessas tipografias não diferenciam maiúsculas de minúsculas. Além disso, eles não precisam de aspas porque são palavras-chave do CSS.

# --instructions--

Para começar, aplique a tipografia `monospace` ao elemento `h2`, fazendo com que o elemento tenha duas tipografias - `Lobster` e `monospace`.

No desafio anterior, você importou a tipografia `Lobster` usando a tag `link`. Comente a importação da tipografia `Lobster` (usando os comentários HTML que você aprendeu antes) do Google Fonts para que ela não esteja mais disponível. Note como o elemento `h2` muda para a tipografia `monospace`.

**Observação:** se você tiver a tipografia `Lobster` instalada em seu computador, não verá a mudança porque seu navegador é capaz de encontrá-la.

# --hints--

O elemento h2 deve usar a tipografia `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

O elemento h2 deve mudar para a tipografia `monospace` quando `Lobster` não estiver disponível.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

Você deve comentar a importação da tipografia `Lobster` usando `<!--`.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

Você deve fechar o comentário usando `-->`.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
