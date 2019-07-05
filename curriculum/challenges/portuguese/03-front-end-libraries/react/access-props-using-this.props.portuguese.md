---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Adereços de acesso usando this.props
---

## Descrição
<section id="description"> Os últimos vários desafios cobriram as maneiras básicas de passar *props* (adereços) aos componentes filhos. Mas e se o componente filho para o qual você está passando um *prop* for um componente de classe ES6, em vez de um componente funcional sem estado? O componente de classe ES6 usa uma convenção ligeiramente diferente para acessar *props*. Sempre que você se referir a um componente de classe dentro dele mesmo, use a palavra-chave <code>this</code>. Para acessar *props* dentro de um componente de classe, você precede o código que você usa para acessá-lo com <code>this</code> . Por exemplo, se um componente de classe ES6 tiver um *prop* chamado <code>data</code> , você escreverá <code>{this.props.data}</code> no JSX. </section>

## Instruções
<section id="instructions"> Renderizar uma instância do componente <code>ReturnTempPassword</code> no componente pai <code>ResetPassword</code> . Nesse caso, dê a <code>ReturnTempPassword</code> um prop de <code>tempPassword</code> e atribua a ela um valor de uma string com pelo menos 8 caracteres. Dentro do filho, <code>ReturnTempPassword</code> , acesse o *prop* <code>tempPassword</code> dentro das tags <code>strong</code> para garantir que o usuário veja a senha temporária. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: O componente <code>ResetPassword</code> deve retornar um único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === "div"; })(), "The <code>ResetPassword</code> component should return a single <code>div</code> element.");'
  - text: O quarto filho de <code>ResetPassword</code> deve ser o componente <code>ReturnTempPassword</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === "ReturnTempPassword"; })(), "The fourth child of <code>ResetPassword</code> should be the <code>ReturnTempPassword</code> component.");'
  - text: O componente <code>ReturnTempPassword</code> deve ter um prop chamado <code>tempPassword</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "The <code>ReturnTempPassword</code> component should have a prop called <code>tempPassword</code>.");'
  - text: O prop <code>tempPassword</code> de <code>ReturnTempPassword</code> deve ser igual a uma string de pelo menos <code>8</code> caracteres.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find("ReturnTempPassword").props().tempPassword; return typeof temp === "string" && temp.length >= 8; })(), "The <code>tempPassword</code> prop of <code>ReturnTempPassword</code> should be equal to a string of at least <code>8</code> characters.");'
  - text: O componente <code>ReturnTempPassword</code> deve exibir a senha criada como o <code>tempPassword</code> dentro de tags <code>strong</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("strong").text() === mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "The <code>ReturnTempPassword</code> component should display the password you create as the <code>tempPassword</code> prop within <code>strong</code> tags.");'

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
            { /* change code below this line */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* change code above this line */ }
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
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
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

## Solução
<section id='solution'>

```js
// solution required
```
</section>
