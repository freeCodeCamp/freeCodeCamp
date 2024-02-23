---
id: 587d7dbc367417b2b2512bb1
title: Criar um elemento JSX simples
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

O React é uma biblioteca de visualização de código aberto criada e mantida pelo Facebook. É uma ótima ferramenta para renderizar a interface do usuário (IU) de aplicações web modernas.

React usa a sintaxe de extensão do JavaScript chamada JSX que o permite escrever HTML diretamente no JavaScript. Isso possui diversos benefícios. Ela permite a você usar todo o poder programático do JavaScript dentro do HTML, e ajuda a manter o seu código legível. Em grande parte, JSX é semelhante ao HTML que você já aprendeu, no entanto existem algumas diferenças chaves que cobriremos durante esses desafios.

Por exemplo, porque o JSX é uma extensão sintática de JavaScript, você realmente pode escrever JavaScript diretamente dentro do JSX. Para isso, você simplesmente inclui o código que você quer que seja tratado como JavaScript dentro de chaves: `{ 'this is treated as JavaScript code' }`. Mantenha isso em mente, já que é utilizado em diversos desafios futuros.

No entanto, porque JSX não é JavaScript válido, código JSX precisa ser compilado em JavaScript. O transpilador Babel é uma ferramenta popular para esse processo. Para sua conveniência, já está adicionado por trás dos panos para esses desafios. Se por acaso você escrever JSX inválido sintaticamente, você verá o primeiro teste nesses desafios falhar.

Vale a pena notar que por trás dos panos os desafios estão chamando `ReactDOM.render(JSX, document.getElementById('root'))`. Essa chamada de função é o que coloca seu JSX na representação leve do DOM própria do React. React então usa snapshots de seu próprio DOM para otimizar a atualização apenas de partes específicas do DOM.

# --instructions--

O código atual usa JSX para atribuir um elemento `div` à constante `JSX`. Substitua o elemento `div` por um `h1` e adicione o texto `Hello JSX!` dentro dele.

# --hints--

A constante `JSX` deve retornar um elemento `h1`.

```js
assert(JSX.type === 'h1');
```

A tag `h1` deve incluir o texto `Hello JSX!`

```js
assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = <div></div>;
```

# --solutions--

```jsx
const JSX = <h1>Hello JSX!</h1>;
```
