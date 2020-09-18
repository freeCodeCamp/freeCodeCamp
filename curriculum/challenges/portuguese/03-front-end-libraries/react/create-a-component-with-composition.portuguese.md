---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
videoUrl: ''
localeTitle: Crie um componente com composição
---

## Description
<section id="description"> Agora, veremos como podemos compor vários componentes do React juntos. Imagine que você está criando um aplicativo e criou três componentes, uma <code>Navbar</code> , um <code>Dashboard</code> e um <code>Footer</code> . Para compor esses componentes juntos, você pode criar um componente <i>pai do</i> <code>App</code> que renderize cada um desses três componentes como <i>filhos</i> . Para renderizar um componente como filho em um componente React, inclua o nome do componente gravado como uma tag HTML customizada no JSX. Por exemplo, no método <code>render</code> você poderia escrever: <blockquote> Retorna ( <br> &lt;App&gt; <br> &lt;Navbar /&gt; <br> &lt;Dashboard /&gt; <br> &lt;Rodapé /&gt; <br> &lt;/ App&gt; <br> ) </blockquote> Quando o React encontra uma tag HTML personalizada que faz referência a outro componente (um nome de componente envolto em <code>&lt; /&gt;</code> como neste exemplo), ele renderiza a marcação desse componente no local da tag. Isso deve ilustrar o relacionamento pai / filho entre o componente <code>App</code> e a <code>Navbar</code> , o <code>Dashboard</code> e o <code>Footer</code> . </section>

## Instructions
<section id="instructions"> No editor de código, há um componente funcional simples chamado <code>ChildComponent</code> e um componente React chamado <code>ParentComponent</code> . Compor os dois juntos, renderizando o <code>ChildComponent</code> dentro do <code>ParentComponent</code> . Certifique-se de fechar a tag <code>ChildComponent</code> com uma barra. <strong>Nota:</strong> <code>ChildComponent</code> é definido com uma função de seta ES6 porque esta é uma prática muito comum ao usar o React. No entanto, saiba que isso é apenas uma função. Se você não estiver familiarizado com a sintaxe da função de seta, consulte a seção JavaScript. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente React deve retornar um único elemento <code>div</code> .
    testString: 'assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === "div"; })(), "The React component should return a single <code>div</code> element.");'
  - text: O componente deve retornar dois elementos aninhados.
    testString: 'assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })(), "The component should return two nested elements.");'
  - text: O componente deve retornar o ChildComponent como seu segundo filho.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find("ParentComponent").find("ChildComponent").length === 1; })(), "The component should return the ChildComponent as its second child.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }


        { /* change code above this line */ }
      </div>
    );
  }
};

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
