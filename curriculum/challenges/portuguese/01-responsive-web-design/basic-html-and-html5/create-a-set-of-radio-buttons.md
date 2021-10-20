---
id: bad87fee1348bd9aedf08834
title: Criar um grupo de botões de seleção
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

Você pode usar <dfn>botões de seleção</dfn> para perguntas onde você queira que o usuário dê apenas uma resposta dentre várias opções.

Os botões de seleção são um tipo de `input`.

Cada um dos botões de seleção deve estar dentro de seu próprio elemento `label`. Ao envolver um elemento `input` em um elemento `label`, este último vai estar automaticamente associado ao input do botão de seleção em questão.

Todos os botões de seleção correspondentes a uma mesma pergunta devem ter o atributo `name` de mesmo valor para criar um grupo de botões de seleção. Ao criar um grupo de botões de seleção, ao selecionar qualquer um dos botões, os outros serão desmarcados automaticamente, garantindo que apenas uma resposta seja fornecida pelo usuário.

Aqui vemos um exemplo de botão de seleção:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

É uma prática recomendada definir o atributo `for` no elemento `label` contendo um valor equivalente ao do atributo `id` do elemento `input`. Isso permite que tecnologias assistivas criem uma relação entre o label e o elemento `input`. Por exemplo:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

Também podemos alocar o elemento `input` dentro das tags `label`:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

Adicione dois botões de seleção ao formulário, cada um associado ao seu próprio elemento `label`. Em um, coloque o texto `indoor`. No outro, coloque o texto `outdoor`. Ambos devem ter o atributo `name` definido como `indoor-outdoor` para que seja criado um grupo de botões de seleção.

# --hints--

A página deve ter dois inputs do tipo `radio`.

```js
assert($('input[type="radio"]').length > 1);
```

Os botões de seleção devem ter o atributo `name` com o valor de `indoor-outdoor`.

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

Cada um dos dois botões de seleção deve estar dentro de seu próprio elemento `label`.

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

O elemento `label` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Um dos botões de seleção deve ter o elemento label com o texto `indoor`.

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

Um dos botões de seleção deve ter o elemento label com o texto `outdoor`.

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

Os botões de seleção dever ser adicionados dentro da tag `form`.

```js
assert($('label').parent().get(0).tagName.match('FORM'));
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
   <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
