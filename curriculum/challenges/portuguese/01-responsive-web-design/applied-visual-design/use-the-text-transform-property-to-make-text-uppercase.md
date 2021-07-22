---
id: 587d781c367417b2b2512ac0
title: Usar a propriedade text-transform para deixar o texto em letras maiúsculas
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

A propriedade `text-transform` no CSS é usada para alterar a aparência do texto. É uma maneira conveniente de garantir que o texto em uma página da web seja exibido de forma consistente, sem precisar alterar o conteúdo do texto dos elementos dentro do HTML.

A tabela a seguir mostra como os diferentes valores de `text-transform` alteram o texto no exemplo "Me transforme".

<table class='table table-striped'><thead><tr><th>Valor</th><th>Resultado</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"me transforme"</td></tr><tr><td><code>uppercase</code></td><td>"ME TRANSFORME"</td></tr><tr><td><code>capitalize</code></td><td>"Me Transforme"</td></tr><tr><td><code>initial</code></td><td>Use o valor padrão</td></tr><tr><td><code>inherit</code></td><td>Use o valor <code>text-transform</code> do elemento pai</td></tr><tr><td><code>none</code></td><td><strong>Padrão:</strong> usa o texto original do HTML</td></tr></tbody></table>

# --instructions--

Transforme o texto de `h4` em letras maiúsculas usando a propriedade `text-transform`.

# --hints--

O texto `h4` deve ter todas as letras maiúsculas (`uppercase`).

```js
assert($('h4').css('text-transform') === 'uppercase');
```

O texto original do h4 não deve ser alterado.

```js
assert($('h4').text() !== $('h4').text().toUpperCase());
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
    text-transform: uppercase;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
