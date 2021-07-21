---
id: 587d7790367417b2b2512ab0
title: Usar tabindex para adicionar foco a um elemento usando o teclado
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

O atributo HTML `tabindex` tem três funções distintas relacionadas ao foco de um elemento utilizando o teclado. Quando ele está em uma tag, indica que o elemento pode receber foco. O valor (um número inteiro positivo, negativo ou zero) determina o comportamento.

Certos elementos, como links e inputs de formulário, recebem foco automaticamente quando um usuário aperta a tecla tab em uma página. O foco acompanha a ordem em que os elementos aparecem na tela. Essa mesma funcionalidade pode ser dada a outros elementos, como `div`, `span` e `p`, colocando um atributo `tabindex="0"` neles. Exemplo:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Observação:** um elemento `tabindex` com valor negativo (normalmente -1) indica que um elemento está focado, mas não será acessado pelo teclado. Este método é geralmente usado para trazer o foco para o conteúdo programaticamente (como quando um `div` usado para uma janela pop-up é ativado) e está além do escopo desses desafios.

# --instructions--

Camper Cat criou uma nova pesquisa para coletar informações sobre os usuários. Ele sabe que os campos de entrada obtêm o foco do teclado automaticamente, mas ele quer ter certeza de que os usuários do teclado façam uma pausa nas instruções enquanto percorrem os itens. Adicione um atributo `tabindex` à tag `p` e defina o valor como `0`. Bônus - usar `tabindex` também permite que a pseudoclasse CSS `:focus` funcione na tag `p`.

# --hints--

O código deve adicionar um atributo `tabindex` à tag `p` que contém as instruções do formulário.

```js
assert($('p').attr('tabindex'));
```

O código deve definir o atributo `tabindex` na tag `p` com um valor de 0.

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
