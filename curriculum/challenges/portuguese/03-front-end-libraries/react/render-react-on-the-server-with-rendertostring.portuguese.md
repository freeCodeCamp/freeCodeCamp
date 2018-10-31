---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Renderizar Reagir no Servidor com renderToString
---

## Description
<section id="description"> Até agora, você está processando componentes React no cliente. Normalmente, isso é o que você sempre fará. No entanto, existem alguns casos de uso em que faz sentido processar um componente React no servidor. Como o React é uma biblioteca de visualização do JavaScript e você pode executar o JavaScript no servidor com o Node, isso é possível. Na verdade, o React fornece um método <code>renderToString()</code> que você pode usar para essa finalidade. Existem dois motivos principais pelos quais a renderização no servidor pode ser usada em um aplicativo do mundo real. Primeiro, sem fazer isso, seus aplicativos React consistiriam em um arquivo HTML relativamente vazio e um grande pacote de JavaScript quando inicialmente carregado no navegador. Isso pode não ser ideal para mecanismos de pesquisa que tentam indexar o conteúdo de suas páginas para que as pessoas possam localizá-lo. Se você renderizar a marcação HTML inicial no servidor e enviá-la ao cliente, o carregamento inicial da página conterá toda a marcação da página, que pode ser rastreada pelos mecanismos de pesquisa. Segundo, isso cria uma experiência de carregamento de página inicial mais rápida porque o HTML renderizado é menor que o código JavaScript de todo o aplicativo. O React ainda poderá reconhecer seu aplicativo e gerenciá-lo após o carregamento inicial. </section>

## Instructions
<section id="instructions"> O método <code>ReactDOMServer</code> <code>renderToString()</code> é fornecido no <code>ReactDOMServer</code> , que está disponível aqui como um objeto global. O método usa um argumento que é um elemento React. Use isso para renderizar o <code>App</code> em uma string. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>App</code> deve renderizar uma string usando <code>ReactDOMServer.renderToString</code> .
    testString: 'getUserInput => assert(getUserInput("index").replace(/ /g,"").includes("ReactDOMServer.renderToString(<App/>)") && Enzyme.mount(React.createElement(App)).children().name() === "div", "The <code>App</code> component should render to a string using <code>ReactDOMServer.renderToString</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };

```

</div>

### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
