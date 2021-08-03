---
id: 5a24c314108439a4d403618d
title: Renderizar React no servidor com renderToString
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

Até agora, você tem renderizado componentes React no client. Normalmente, é isso o que você sempre fará. No entanto, há alguns casos de uso em que faz sentido renderizar um componente React no servidor. Uma vez que React é uma biblioteca de visualização do JavaScript e você pode executar JavaScript no servidor com Node, isso é possível. De fato, React fornece um método `renderToString()` que você pode usar para este propósito.

Existem duas principais razões pelas quais a renderização no servidor pode ser usada em um aplicativo do mundo real. Primeiro, sem fazer isso, seus aplicativos React consistiriam em um arquivo HTML relativamente vazio e um grande pacote de JavaScript quando inicialmente é carregado ao navegador. Isso pode não ser ideal para motores de busca que estão tentando indexar o conteúdo das suas páginas para que as pessoas possam te encontrar. Se você renderizar a marcação HTML inicial no servidor e enviar para o client, a carga inicial da página contém todas as marcações da página que podem ser rastreadas por motores de busca. Em segundo lugar, isso cria uma experiência de carregamento de página inicial mais rápida, porque o HTML renderizado é menor do que o código JavaScript de todo o aplicativo. React ainda será capaz de reconhecer seu aplicativo e gerenciá-lo após a carga inicial.

# --instructions--

O método `renderToString()` é fornecido em `ReactDOMServer`, que está disponível aqui como um objeto global. O método recebe um argumento que é um elemento React. Use isso para renderizar `App` em uma string.

# --hints--

O componente `App` deve renderizar em uma string usando `ReactDOMServer.renderToString`.

```js
(getUserInput) =>
  assert(
    getUserInput('index')
      .replace(/ /g, '')
      .includes('ReactDOMServer.renderToString(<App/>)') &&
      Enzyme.mount(React.createElement(App)).children().name() === 'div'
  );
```

# --seed--

## --before-user-code--

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
```

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
```

# --solutions--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App/>);
```
