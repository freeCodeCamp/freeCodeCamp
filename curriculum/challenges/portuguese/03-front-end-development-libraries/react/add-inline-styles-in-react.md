---
id: 5a24c314108439a4d4036182
title: Adicionar estilos em linha no React
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--

Você pode ter percebido no último desafio que existem diversas outras diferenças de sintaxe de estilos HTML em linha em adição ao atributo `style` definido para um objeto JavaScript. Primeiro, os nomes de certas propriedades de estilo CSS usam camel case. Por exemplo, o último desafio definiu o tamanho da fonte com `fontSize` ao invés de `font-size`. Palavras com hifens como `font-size` são sintaxes inválidas para propriedades de objeto JavaScript, então React usa camel case. Como regra, qualquer propriedades de estilos com hífen são escritas usando camel case em JSX.

Todas as unidades de valor de comprimento das propriedades (como `height`,`width`, e `fontSize`) são assumidos para estar em `px` a não ser que seja especificado outra forma. Se você quiser usar `em`, por exemplo, você envolve o valor e as unidades em aspas, como `{fontSize: "4em"}`. Além dos valores de comprimento que tem como padrão `px`, todas os outros valores de propriedade devem estar entre aspas.

# --instructions--

Se você tem um grande conjunto de estilos, você pode atribuir um `object` de estilo para uma constante para te ajudar a manter o código organizado. Declare suas constantes de estilo como variáveis globais no topo do arquivo. Inicialize a constante `styles` e atribua um `object` com três propriedades de estilo e os seus valores à constante. Dê a `div` a color (cor) `purple`, um font-size (tamanho de fonte) de `40` e um border (borda) de `2px solid purple`. Em seguida, defina o atributo `style` para ser igual a constante `styles`.

# --hints--

A variável `styles` deve ser um `object` com três propriedades.

```js
assert(Object.keys(styles).length === 3);
```

A variável `styles` devem ter a propriedade `color` definida com o valor `purple`.

```js
assert(styles.color === 'purple');
```

A variável `styles` deve ter a propriedade `fontSize` definida com o valor `40`.

```js
assert(styles.fontSize == 40);
```

A variável `styles` deve ter a propriedade `border` definida com o valor `2px solid purple`.

```js
assert(styles.border === '2px solid purple');
```

O componente deve renderizar um elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

O elemento `div` deve ter seu estilo definido pelo objeto `styles`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return (
      mockedComponent.props().style.color === 'purple' &&
      mockedComponent.props().style.fontSize == 40 &&
      mockedComponent.props().style.border === '2px solid purple'
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // Change code above this line
  }
};
```

# --solutions--

```jsx
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
```
