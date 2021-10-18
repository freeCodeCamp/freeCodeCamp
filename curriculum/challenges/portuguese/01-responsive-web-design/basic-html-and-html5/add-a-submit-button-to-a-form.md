---
id: bad87fee1348bd9aedd08830
title: Adicionar um botão de envio a um formulário
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

Vamos adicionar um botão do tipo `submit` ao seu formulário. Ao clicar neste botão, enviaremos os dados inseridos para o URL que você especificou no atributo `action` de seu formulário.

Aqui está um exemplo de um botão do tipo enviar (submit):

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

Adicione um botão do tipo `submit` e com o texto `Submit` como o último elemento de seu elemento `form`.

# --hints--

O elemento `form` precisa ter um elemento `button` dentro dele.

```js
assert($('form').children('button').length > 0);
```

O botão de envio deve ter o atributo `type` definido como `submit`.

```js
assert($('button').attr('type') === 'submit');
```

O botão de envio deve ter apenas o texto `Submit`.

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

O elemento `button` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
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
    <input type="text" placeholder="cat photo URL">
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
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
