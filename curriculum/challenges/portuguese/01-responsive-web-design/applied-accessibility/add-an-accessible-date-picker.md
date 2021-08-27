---
id: 587d778b367417b2b2512aa8
title: Adicionar um seletor de data acessível
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

Formulários frequentemente incluem o campo `input`, que pode ser usado para criar diferentes tipos de inputs no formulário. O atributo `type` nesse elemento indica qual tipo de elemento `input` deve ser criado.

Você deve ter notado os tipos de input `text` e `submit` em desafios anteriores. O HTML5 introduziu uma opção para especificar um campo `date`. Dependendo do suporte do navegador, o seletor de data aparece dentro do `input` quando este está em foco, o que deixa o preenchimento do formulário mais fácil para todos os usuários.

Em navegadores antigos, o tipo será convertido para o padrão `text`, o que ajuda a mostrar aos usuários o formato da data esperado no texto da `label` ou do `placeholder`.

Exemplo:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

O Camper Cat está organizando um campeonato de Mortal Kombat e quer perguntar para os competidores qual a melhor data. Adicione uma tag `input` com um atributo `type` com o valor `date`, um atributo `id` com o valor `pickdate` e um atributo `name` com o valor `date`.

# --hints--

O código deve adicionar uma tag `input` para o campo seletor de data.

```js
assert($('input').length == 2);
```

A tag `input` deve ter um atributo `type` com o valor `date`.

```js
assert($('input').attr('type') == 'date');
```

A tag `input` deve ter um atributo `id` com o valor `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

A tag `input` deve ter um atributo `name` com o valor `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
