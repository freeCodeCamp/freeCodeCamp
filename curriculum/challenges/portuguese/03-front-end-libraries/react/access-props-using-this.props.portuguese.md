---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Adereços de acesso usando this.props
---

## Description
<section id="description"> Os últimos vários desafios cobriram as maneiras básicas de passar adereços aos componentes filhos. Mas e se o componente filho para o qual você está passando um prop for um componente de classe ES6, em vez de um componente funcional sem estado? O componente de classe ES6 usa uma convenção ligeiramente diferente para acessar adereços. Sempre que você se referir a um componente de classe em si, use a palavra <code>this</code> chave <code>this</code> . Para acessar adereços dentro de um componente de classe, você prefácio o código que você usa para acessá-lo com <code>this</code> . Por exemplo, se um componente de classe ES6 tiver um prop chamado <code>data</code> , você escreverá <code>{this.props.data}</code> no JSX. </section>

## Instructions
<section id="instructions"> Renderizar uma instância do componente <code>ReturnTempPassword</code> no componente pai <code>ResetPassword</code> . Aqui, dê a <code>ReturnTempPassword</code> um prop de <code>tempPassword</code> e atribua a ela um valor de uma string com pelo menos 8 caracteres. Dentro do filho, <code>ReturnTempPassword</code> , acesse o prop <code>tempPassword</code> dentro das tags <code>strong</code> para garantir que o usuário veja a senha temporária. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>ResetPassword</code> deve retornar um único elemento <code>div</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === "div"; })(), "O componente <code>ResetPassword</code> deve retornar um único elemento <code>div</code>.");
  - text: O quarto filho de <code>ResetPassword</code> deve ser o componente <code>ReturnTempPassword</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === "ReturnTempPassword"; })(), "O quarto filho de <code>ResetPassword</code> deve ser o componente <code>ReturnTempPassword</code>.");
  - text: O componente <code>ReturnTempPassword</code> deve ter um prop chamado <code>tempPassword</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "O componente <code>ReturnTempPassword</code> deve ter um prop chamado <code>tempPassword</code>.");
  - text: O prop <code>tempPassword</code> de <code>ReturnTempPassword</code> deve ser igual a uma string de pelo menos <code>8</code> caracteres.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find("ReturnTempPassword").props().tempPassword; return typeof temp === "string" && temp.length >= 8; })(), "O prop <code>tempPassword</code> de <code>ReturnTempPassword</code> deve ser igual a uma string de pelo menos <code>8</code> caracteres.");
  - text: O componente <code>ReturnTempPassword</code> deve exibir a senha criada como o <code>tempPassword</code> dentro de tags <code>strong</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("strong").text() === mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "O componente <code>ReturnTempPassword</code> deve exibir a senha criada como o <code>tempPassword</code> dentro de tags <code>strong</code>.");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* altere o código abaixo desta linha */ }
            <p>Sua senha temporária: <strong></strong></p>
            { /* altere o código acima desta linha */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Redefinir Senha</h2>
          <h3>Nós geramos um senha temporária para você.</h3>
          <h3>Favor redefina sua senha nas configurações o quanto antes.</h3>
          { /* altere o código abaixo desta linha */ }

          { /* altere o código acima desta linha */ }
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
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Sua senha temporária: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Redefinir Senha</h2>
          <h3>Nós geramos um senha temporária para você.</h3>
          <h3>Favor redefina sua senha nas configurações o quanto antes.</h3>
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
        </div>
    );
  }
};
```

</section>
