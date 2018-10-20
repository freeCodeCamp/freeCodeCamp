---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Acceder a los props usando this.props
---

## Description
<section id="description"> Los últimos desafíos cubrieron las formas básicas de pasar propiedades (<code>props</code>) a los componentes hijo. Pero, ¿qué sucede si el componente hijo al que se le está pasando una propiedad es un <em>class component</em>, en lugar de un componente funcional sin estado? El <em>class component</em> utiliza una convención ligeramente diferente para acceder a <code>props</code>. Cada vez que refiera a un <em>class component</em> dentro de sí mismo, use la palabra clave <code>this</code>. Para acceder a <code>props</code> dentro de un class component, se precede el código que se utiliza para acceder a ella con <code>this</code> . Por ejemplo, si un <em>class component</em> tiene una propiedad llamada <code>data</code> , escribir <code>{this.props.data}</code> en JSX. </section>

## Instructions
<section id="instructions"> Renderice una instancia del componente <code>ReturnTempPassword</code> en el componente padre <code>ResetPassword</code> . Aquí, mandar a <code>ReturnTempPassword</code> un prop de <code>tempPassword</code> y asígnele un valor de una cadena que tenga al menos 8 caracteres de longitud. Dentro del hijo, <code>ReturnTempPassword</code> , acceda a la propiedad <code>tempPassword</code> dentro de las etiquetas <code>strong</code> para asegurarse de que el usuario vea la contraseña temporal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>ResetPassword</code> debe devolver un único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === "div"; })(), "The <code>ResetPassword</code> component should return a single <code>div</code> element.");'
  - text: El cuarto hijo de <code>ResetPassword</code> debe ser el componente <code>ReturnTempPassword</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === "ReturnTempPassword"; })(), "The fourth child of <code>ResetPassword</code> should be the <code>ReturnTempPassword</code> component.");'
  - text: El componente <code>ReturnTempPassword</code> debe tener un prop llamado <code>tempPassword</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "The <code>ReturnTempPassword</code> component should have a prop called <code>tempPassword</code>.");'
  - text: El prop <code>tempPassword</code> de <code>ReturnTempPassword</code> debe ser igual a una cadena de al menos <code>8</code> caracteres.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find("ReturnTempPassword").props().tempPassword; return typeof temp === "string" && temp.length >= 8; })(), "The <code>tempPassword</code> prop of <code>ReturnTempPassword</code> should be equal to a string of at least <code>8</code> characters.");'
  - text: El componente <code>ReturnTempPassword</code> debe mostrar la contraseña que crea como el prop <code>tempPassword</code> dentro de <code>strong</code> etiquetas <code>strong</code> .
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
            { /* cambia el código debajo de esta línea */ }
            <p>Tu contraseña temporal es: <strong></strong></p>
            { /* cambia el código arriba de esta línea */ }
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
          <h2>Cambiar Contraseña</h2>
          <h3>Te hemos generado una contraseña temporal.</h3>
          <h3>Por favor cambia pronto está contraseña desde las opciones de tu cuenta .</h3>
          { /* cambia el código debajo de esta línea */ }

          { /* cambia el código arriba de esta línea */ }
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
// solución requerida
```
</section>
