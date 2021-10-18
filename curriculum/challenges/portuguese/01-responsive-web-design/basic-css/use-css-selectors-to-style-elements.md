---
id: bad87fee1348bd9aedf08805
title: Usar seletores CSS para definir o estilo de elementos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

Com CSS, existem centenas de propriedades que você pode usar para alterar a aparência de um elemento na página.

Quando você digitou `<h2 style="color: red;">CatPhotoApp</h2>`, você estava estilizando individualmente esse elemento `h2` de forma inline.

Essa é uma maneira de especificar o estilo de um elemento, mas há uma maneira melhor de aplicar o CSS.

Na parte superior do seu código, crie uma tag `style`:

```html
<style>
</style>
```

Dentro desse bloco de estilo, você pode criar um <dfn>seletor CSS</dfn> para todos os elementos de `h2`. Por exemplo, se quisesse que todos os elementos `h2` fossem vermelhos, você adicionaria uma regra de estilo semelhante a esta:

```html
<style>
  h2 {
    color: red;
  }
</style>
```

Observe que é importante ter abertura e fechamento de chaves (`{` e `}`) em torno das regras de estilo de cada elemento. Você também precisa se certificar de que a definição de estilo do seu elemento está entre a abertura e o fechamento das tags. Finalmente, certifique-se de adicionar um ponto e vírgula ao final das regras de estilo de cada um dos seus elementos.

# --instructions--

Exclua o atributo de estilo `h2` e, em vez disso, crie uma tag `style`. Adicione o CSS necessário para transformar a cor de todos os elementos `h2` em azul.

# --hints--

O atributo `style` deve ser removido do elemento `h2`.

```js
assert(!$('h2').attr('style'));
```

Você deve criar um elemento `style`.

```js
assert($('style') && $('style').length >= 1);
```

O elemento `h2` deve ser azul.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

O código referente ao `h2` deve ter abertura e fechamento com chaves e cada propriedade deve terminar com ponto e vírgula.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

Os elementos `style` devem ser válidos e ter tags de fechamento.

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
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
