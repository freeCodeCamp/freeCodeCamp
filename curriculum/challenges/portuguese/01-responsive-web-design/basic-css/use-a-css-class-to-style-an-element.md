---
id: bad87fee1348bd9aecf08806
title: Usar uma classe para definir o estilo de um elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

As classes são declarações de estilos que podem ser reutilizadas em elementos HTML.

Aqui está um exemplo de como criar uma classe CSS:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Você pode ver que criamos uma classe CSS chamada `blue-text` dentro da tag `<style>`. Você pode aplicar uma classe a um elemento HTML da seguinte forma: `<h2 class="blue-text">CatPhotoApp</h2>`. Observe que no elemento `style` o nome da classe começa com um ponto. Já no atributo de classe do elemento HTML, o nome da classe não inclui o ponto.

# --instructions--

Dentro do elemento `style`, altere o seletor `h2` para `.red-text` e atualize o valor da cor de `blue` para `red`.

Dê ao elemento `h2` o atributo `class` com o valor de `red-text`.

# --hints--

O elemento `h2` deve ser vermelho.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

O elemento `h2` deve ter a classe `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

No código CSS, declare uma classe `red-text` e defina a cor como `red`.

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

Você não deve usar declarações de estilo inline como, por exemplo, `style="color: red"` no elemento `h2`.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
