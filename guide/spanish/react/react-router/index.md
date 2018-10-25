---
title: React Router
localeTitle: React Router
---
# React Router para principiantes

# Instalación

React Router se ha dividido en tres paquetes: `react-router` , `react-router-dom` y `react-router-native` .

Casi nunca debería tener que instalar react-router directamente. Ese paquete proporciona los componentes y las funciones de enrutamiento principales para las aplicaciones del enrutador React. Los otros dos proporcionan componentes específicos del entorno (navegador y reactivos nativos), pero ambos también reexportan todas las exportaciones del enrutador de reacción.

Estamos construyendo un sitio web (algo que se ejecutará en los navegadores), por lo que instalaremos reaccion-router-dom.

`npm install --save react-router-dom`

# El enrutador

Al iniciar un nuevo proyecto, debe determinar qué tipo de enrutador usar. Para proyectos basados ​​en navegador, hay y componentes El `<BrowserRouter>` debe usarse cuando tenga un servidor que manejará solicitudes dinámicas (sabe cómo responder a cualquier posible URI), mientras que debe usarse para sitios web estáticos (donde el servidor solo puede responder a solicitudes de archivos que conoce).

Por lo general, es preferible usar un `<BrowserRouter>` , pero si su sitio web estará alojado en un servidor que solo sirve archivos estáticos, entonces el `<HashRouter>` es una buena solución.

Para nuestro proyecto, asumiremos que el sitio web estará respaldado por un servidor dinámico, por lo que nuestro componente de enrutador de elección es el `<BrowserRouter>` .

# Declaración de importación

```javascript
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
```

## IndexRuta y Enlaces

Ahora, vamos a añadir navegación para que nos metamos entre páginas.

Para hacer esto, usaremos el componente `<Link>` . `<Link>` es similar a usar una etiqueta de anclaje html.

De la documentación:

La forma principal de permitir que los usuarios naveguen alrededor de su aplicación.  renderizará una etiqueta de anclaje totalmente accesible con el href adecuado. Para hacer esto, primero vamos a crear un componente Nav. Nuestro componente Nav contendrá componentes `<Link>` , y se verá así:

```javascript
const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
 )

```