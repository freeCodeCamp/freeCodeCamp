---
id: 5a24c314108439a4d4036160
title: Definir uma classe HTML em JSX
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

Agora que você está se sentindo confortável escrevendo JSX, você pode estar se perguntando como ele difere do HTML.

Até agora, pode parecer que HTML e JSX são exatamente os mesmos.

Uma diferença importante em JSX é que você não pode mais usar a palavra `class` para definir classes HTML. O motivo disso é porque `class` é uma palavra reservada em JavaScript. Em vez disso, JSX usa `className`.

Na verdade, a convenção de nomeação para todos os atributos HTML e referências de eventos em JSX tornam-se camelCase. Por exemplo, um evento de clique em JSX é `onClick`, ao invés de `onclick`. Da mesma forma, `onchange` se torna `onChange`. Embora essa seja uma diferença sutil, é importante manter em mente no futuro.

# --instructions--

Aplique a classe `myDiv` no `div` fornecido no código JSX.

# --hints--

A constante `JSX` deve retornar um elemento `div`.

```js
assert.strictEqual(JSX.type, 'div');
```

A `div` deve ter a classe `myDiv`.

```js
assert.strictEqual(JSX.props.className, 'myDiv');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```
