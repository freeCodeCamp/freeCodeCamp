---
id: 5c6c06847491271903d37cfd
title: Usar o atributo value nos inputs do tipo radio e checkbox
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

Quando um formulário é enviado, os dados vão para um servidor, e este, por sua vez, vai identificar os valores de cada input. Os inputs do tipo `radio` e `checkbox` têm seus valores identificados a partir do atributo `value`.

Por exemplo:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

Aqui, temos dois inputs do tipo `radio`. Quando o usuário envia o formulário com a opção `indoor` selecionada, os dados do formulário incluirão a linha: `indoor-outdoor=indoor`. Essas informações vêm dos atributos `name` e `value` do input "indoor".

Se você omitir o atributo `value`, o formulário enviado usa o valor padrão, que é `on`. Neste cenário, mesmo que o usuário clicasse na opção "indoor" e enviasse o formulário, os dados resultantes do formulário seriam `indoor-outdoor=on`, o que não é útil. Por isso, o atributo `value` precisa ser definido com algo que identifique a opção.

# --instructions--

Dê a cada um dos inputs do tipo `radio` e do tipo `checkbox` existentes o atributo `value`. Não crie elementos novos do tipo botão de opção ou do tipo caixa de seleção. Use o texto do label do input, em letras minúsculas, como o valor do atributo.

# --hints--

Um dos botões de seleção (radio) deve ter o atributo `value` definido com o valor de `indoor`.

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

Um dos botões de seleção (radio) deve ter o atributo `value` definido com o valor de `outdoor`.

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

Uma das caixas de seleção (checkbox) deve ter o atributo `value` definido com o valor de `loving`.

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

Uma das caixas de seleção (checkbox) deve ter o atributo `value` definido com o valor de `lazy`.

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

Uma das caixas de seleção (checkbox) deve ter o atributo `value` definido com o valor de `energetic`.

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);
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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
