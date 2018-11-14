---
title: Handling Data with Props in React
localeTitle: Manejo de datos con apoyos en React
---
## Manejo de datos con apoyos en React

Los apoyos proporcionan una forma de pasar y acceder a los datos en los componentes React.

Los datos se pasan a los componentes React como un atributo en JSX.

```javascript
<MyComponent someAttribute={data.value} /> 
```

En JSX, las llaves indican una expresión de JavaScript que debe devolver un valor. Se accede a los datos pasados ​​a través de accesorios en el componente definido.

```javascript
const MyComponent = props => { 
  <p>{props.someAttribute}</p> 
 }; 
```

Ahora veamos un ejemplo en CodePen.

### Empezando

Si aún no lo ha hecho, continúe y regístrese para obtener una [cuenta gratuita de CodePen](https://codepen.io/accounts/signup/user/free) .

Cree una nueva pluma seleccionando 'Crear'> 'Nueva pluma' al lado de su imagen de perfil de CodePen.

A continuación, agregaremos las bibliotecas adecuadas para representar nuestros componentes React.

Abra el panel de configuración de JavaScript seleccionando 'Configuración'> 'JavaScript'. Seleccione 'Babel' en 'Preprocesador de JavaScript'.

A continuación vamos a agregar nuestras bibliotecas React. Debajo de 'JavaScript externo', seleccione el menú desplegable 'Adición rápida' y agregue las bibliotecas 'React' y 'React DOM'.

### Usando apoyos

Primero vamos a definir algunos datos ficticios en nuestro archivo JavaScript.

```javascript
const blogData = { 
  title: 'My blog title', 
  body: 'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.' 
 }; 
```

A continuación vamos a definir los componentes de nuestro blog.

```javascript
const Heading = () => { 
  return ( 
    <h1>My Blog</h1> 
  ); 
 }; 
 
 const Blog = props => { 
  return ( 
    <div> 
      <h2>{props.title}</h2> 
      <p>{props.body}</p> 
    </div> 
  ); 
 }; 
```

Notamos cómo usamos el objeto props para representar los valores de título y cuerpo que se pasarán al componente Blog. Los apoyos son de solo lectura o inmutables, por lo que no tenemos que preocuparnos por cambiar los valores de los apoyos.

Antes de escribir nuestro componente de aplicación, debemos proteger nuestro componente definiendo el tipo de variable que se transmitirá a cada prop. Definiremos esto utilizando React.PropTypes. Agregue lo siguiente a su archivo JavaScript.

```javascript
Blog.propTypes = { 
  title: React.PropTypes.string, 
  body: React.PropTypes.string 
 }; 
```

Aquí estamos definiendo que los datos transmitidos a nuestro componente de Blog serán cadenas tanto para el título como para el cuerpo. Consulte [la documentación de React](https://reactjs.org/docs/typechecking-with-proptypes.html) para obtener una lista de todos los tipos de propiedades.

Ahora pongamos esto juntos en un componente de la aplicación y transmitamos nuestros datos.

```javascript
const App = props => { 
  return ( 
    <div> 
      <Heading /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
    </div> 
  ); 
 }; 
```

Finalmente, representemos nuestra aplicación (asegúrese de agregar una etiqueta raíz `<div>` al archivo HTML):

```javascript
ReactDOM.render( 
  <App />, 
  document.getElementById('root') 
 ); 
```

Ahora debería ver los componentes de nuestro blog renderizados con los datos ficticios transmitidos a través de accesorios.

Puedes ver un ejemplo de CodePen [aquí](https://codepen.io/trey-davis/pen/MvdZGX) .