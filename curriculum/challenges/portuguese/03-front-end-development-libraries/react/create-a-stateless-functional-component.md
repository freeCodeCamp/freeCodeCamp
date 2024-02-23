---
id: 5a24c314108439a4d4036162
title: Criar um componente funcional sem estado
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--

Componentes são o núcleo do React. Tudo em React é um componente e aqui você vai aprender como criar um.

Existem duas maneiras de criar um componente React. A primeira maneira é usar uma função JavaScript. Definir um componente dessa forma cria um *componente funcional sem estado*. O conceito de estado numa aplicação será abordado em desafios posteriores. Por enquanto, pense em um componente sem estado como um que pode receber dados e renderizá-lo, mas não gerencia ou rastreia as alterações desses dados. (Vamos cobrir a segunda maneira de criar um componente React no próximo desafio.)

Para criar um componente com uma função, você simplesmente escreve uma função JavaScript que retorne JSX ou `null`. Uma coisa importante a notar é que React requer que o nome da sua função comece com uma letra maiúscula. Aqui está um exemplo de um componente funcional sem estado que atribui uma classe HTML em JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

Depois de ser transpilado, o `<div>` terá uma classe CSS de `customClass`.

Como um componente JSX representa HTML, você pode juntar vários componentes para criar uma página HTML mais complexa. Esta é uma das principais vantagens da arquitetura do componente que React provê. Isso permite que você componha sua interface de usuário de vários componentes isolados e separados. Isso torna mais fácil construir e manter interfaces de usuário complexas.

# --instructions--

O editor de código tem uma função chamada `MyComponent`. Complete essa função para que ela retorne um único elemento `div`, que contém alguma string de texto.

**Observação:** o texto é considerado filho do elemento `div`, portanto você não poderá usar uma tag de fechamento automático.

# --hints--

`MyComponent` deve retornar JSX.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` deve retornar um elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

O elemento `div` deve conter uma string de texto.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').text() !== '';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```
