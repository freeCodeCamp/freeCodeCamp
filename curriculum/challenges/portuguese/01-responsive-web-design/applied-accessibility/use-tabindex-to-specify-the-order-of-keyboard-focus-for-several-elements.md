---
id: 587d7790367417b2b2512ab1
title: Usar tabindex para especificar a ordem do foco em vários elementos usando o teclado
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

O atributo `tabindex` também especifica a ordem em que a tecla tab percorrerá os elementos. Isso é obtido quando o valor do atributo é definido como um número positivo (1 ou acima).

Definir um `tabindex="1"` fará com que o foco seja levado para esse elemento quando o usuário apertar a tecla tab pela primeira vez. Em seguida, o foco passará ao próximo elemento que tem um `tabindex` maior que o anterior. Quando não existirem mais itens para receberem foco, ele volta ao valor inicial - `tabindex="0"`.

É importante observar que quando a ordem da tecla tab é definida dessa forma, ela sobrescreve a ordem padrão (que se baseia no código HTML). Isso pode confundir os usuários que esperam iniciar a navegação do topo da página. Esta técnica pode ser necessária em algumas circunstâncias, mas, em termos de acessibilidade, tome cuidado antes de aplicá-la.

Exemplo:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

O Camper Cat tem um campo de pesquisa em sua página Citações Inspiradoras, o qual ele planeja posicionar no canto superior direito com CSS. Ele deseja que os controles de formulário search `input` e submit `input` sejam os dois primeiros itens na ordem das guias. Adicione um atributo `tabindex` definido como `1` para o `search` `input` e um atributo `tabindex` definido como `2` para o `submit` `input`.

Outra questão a ser observada é o fato de que alguns navegadores podem colocar você no meio da ordem de navegação via tecla "tab" quando um elemento é clicado. Um elemento foi adicionado à página que garante que você sempre iniciará no início de sua ordem ao pressionar a tecla tab.

# --hints--

O código deve adicionar um atributo `tabindex` à tag `input` de id `search`.

```js
assert($('#search').attr('tabindex'));
```

O código deve adicionar um atributo `tabindex` à tag `input` de id `submit`.

```js
assert($('#submit').attr('tabindex'));
```

O código deve definir o atributo `tabindex` na tag `input` de id `search` para um valor de 1.

```js
assert($('#search').attr('tabindex') == '1');
```

O código deve definir o atributo `tabindex` na tag `input` de id `submit` para um valor de 2.

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
