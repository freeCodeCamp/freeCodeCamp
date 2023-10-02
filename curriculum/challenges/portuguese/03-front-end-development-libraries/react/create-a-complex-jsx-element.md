---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Criar um elemento JSX complexo
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

O último desafio foi um exemplo simples de JSX, mas JSX também pode representar HTML mais complexo.

Uma coisa importante a saber sobre JSX aninhado é que ele deve retornar um único elemento.

Este único elemento pai envolveria todos os outros níveis de elementos aninhados.

Por exemplo, vários elementos JSX escritos como irmãos sem elemento encapsulador pai não vão transpilar.

Exemplo:

**JSX válido:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**JSX inválido:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

Defina uma nova constante `JSX` que renderiza uma `div` a qual contém os elementos a seguir em ordem:

Um `h1`, um `p`, e uma lista não ordenada que contém três itens `li`. Você pode incluir qualquer texto que você quiser dentro de cada elemento.

**Observação:** ao renderizar vários elementos como este, você pode envolver todos entre parênteses, mas não é estritamente necessário. Note também que este desafio usa uma tag `div` para encapsular todos os elementos filhos dentro de um único elemento pai. Se você remover a `div`, o JSX não será mais transpilável. Tenha isso em mente, uma vez que ele também será aplicado quando você retornar elementos JSX em componentes React.

# --hints--

A constante `JSX` deve retornar um elemento `div`.

```js
assert(JSX.type === 'div');
```

A `div` deve conter uma tag `h1` como o primeiro elemento.

```js
assert(JSX.props.children[0].type === 'h1');
```

A `div` deve conter uma tag `p` como o segundo elemento.

```js
assert(JSX.props.children[1].type === 'p');
```

A `div` deve conter uma tag `ul` como o terceiro elemento.

```js
assert(JSX.props.children[2].type === 'ul');
```

O `ul` deve conter três elementos `li`.

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
