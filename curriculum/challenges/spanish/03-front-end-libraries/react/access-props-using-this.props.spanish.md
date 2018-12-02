---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Acceder a los props usando this.props
---

## Description
<section id="description"> Los últimos desafíos cubrieron las formas básicas de pasar propiedades (props) a los componentes secundarios. Pero, ¿qué sucede si el componente secundario al que le está pasando una propiedad (prop) es un componente de clase ES6, en lugar de un componente funcional sin estado? El componente de clase ES6 utiliza una convención ligeramente diferente para acceder a las propiedades (props). Cada vez que se refiera a un componente de clase dentro de sí mismo, use la palabra clave <code>this</code>. Para acceder a las propiedades (props) dentro de un componente de clase, precede el código que se utiliza para acceder a ella con <code>this</code>. Por ejemplo, si un componente de clase ES6 tiene una propiedad llamada <code>data</code> , escribe <code>{this.props.data}</code> en JSX. </section>

## Instructions
<section id="instructions"> Renderiza una instancia del componente <code>ReturnTempPassword</code> en el componente principal <code>ResetPassword</code> . Aquí, añade una propiedad (prop) <code>tempPassword</code> al componente <code>ReturnTempPassword</code> y asígnele un valor de una cadena que tenga al menos 8 caracteres de longitud. Dentro del componente hijo, <code>ReturnTempPassword</code> , acceda a la propiedad <code>tempPassword</code> dentro de las etiquetas <code>strong</code> para asegurarse de que el usuario vea la contraseña temporal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>ResetPassword</code> debe devolver un único elemento <code>div</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === "div"; })(), "El componente <code>ResetPassword</code> debe devolver un único elemento <code>div</code>.");'
  - text: El cuarto hijo de <code>ResetPassword</code> debe ser el componente <code>ReturnTempPassword</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === "ReturnTempPassword"; })(), "El cuarto hijo de <code>ResetPassword</code> debe ser el componente <code>ReturnTempPassword</code>.");'
  - text: El componente <code>ReturnTempPassword</code> debe tener un prop llamado <code>tempPassword</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "El componente <code>ReturnTempPassword</code> debe tener un prop llamado <code>tempPassword</code>.");'
  - text: El prop <code>tempPassword</code> de <code>ReturnTempPassword</code> debe ser igual a una cadena de al menos <code>8</code> caracteres.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find("ReturnTempPassword").props().tempPassword; return typeof temp === "string" && temp.length >= 8; })(), "El prop <code>tempPassword</code> de <code>ReturnTempPassword</code> debe ser igual a una cadena de al menos <code>8</code> caracteres.");'
  - text: El componente <code>ReturnTempPassword</code> debe mostrar la contraseña que crea como el prop <code>tempPassword</code> dentro de <code>strong</code> etiquetas <code>strong</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("strong").text() === mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "El componente <code>ReturnTempPassword</code> debe mostrar la contraseña que crea como el prop <code>tempPassword</code> dentro de <code>strong</code> etiquetas <code>strong</code>.");'

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
console.info('después de la prueba');
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
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
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
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* change code above this line */ }
        </div>
    );
  }
};
```
</section>