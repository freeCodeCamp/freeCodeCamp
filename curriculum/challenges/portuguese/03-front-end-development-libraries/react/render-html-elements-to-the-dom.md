---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Renderizar elementos HTML para o DOM
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

Até agora, você aprendeu que JSX é uma ferramenta conveniente para escrever HTML legível dentro de JavaScript. Com React, podemos renderizar esse JSX diretamente para o DOM HTML usando a API de renderização do React conhecida como ReactDOM.

ReactDOM oferece um método simples para renderizar elementos React para o DOM que se parece com isso: `ReactDOM.render(componentToRender, targetNode)`, onde o primeiro argumento é o elemento ou componente que você deseja renderizar, e o segundo argumento é o nó do DOM onde você deseja renderizar o componente.

Como você esperaria, `ReactDOM.render()` deve ser chamado após as declarações dos elementos JSX, assim como você deve declarar variáveis antes de usá-las.

# --instructions--

O editor de código tem um componente JSX simples. Use o método `ReactDOM.render()` para renderizar este componente na página. Você pode passar elementos JSX definidos diretamente como o primeiro argumento e usar `document.getElementById()` para selecionar o nó do DOM onde renderizá-los. Há um `div` com `id='challenge-node'` disponível para você usar. Certifique-se de não alterar a constante `JSX`.

# --hints--

A constante `JSX` deve retornar um elemento `div`.

```js
assert(JSX.type === 'div');
```

A `div` deve conter uma tag `h1` como o primeiro elemento.

```js
assert(JSX.props.children[0].type === 'h1');
```

A `div` deve conter uma tag `p` como segundo elemento.

```js
assert(JSX.props.children[1].type === 'p');
```

O elemento JSX fornecido deve renderizar ao nó do DOM com id `challenge-node`.

```js
assert(
  document.getElementById('challenge-node').childNodes[0].innerHTML ===
    '<h1>Hello World</h1><p>Lets render this to the DOM</p>'
);
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
