---
title: JSX
localeTitle: JSX
---
# JSX

> JSX es la abreviatura de JavaScript XML.

JSX es una expresión que utiliza declaraciones HTML válidas dentro de JavaScript. Puedes asignar esta expresión a una variable y usarla en otra parte. Puede combinar otras expresiones de JavaScript válidas y JSX dentro de estas declaraciones HTML colocándolas entre llaves ( `{}` ). Babel además compila JSX en un objeto de tipo `React.createElement()` .

### Expresiones de línea única y multilínea

La expresión de una sola línea es fácil de usar.

```jsx
const uno = <h1>Hola Mundo!</h1>;
```

Cuando necesite usar varias líneas en una sola expresión JSX, escriba el código dentro de un solo paréntesis.

```jsx
const dos = (
  <ul>
    <li>Una vez</li>
    <li>Dos veces</li>
  </ul>
 );
```

### Usando solo etiquetas HTML

```jsx
const greet = <h1>Hola Mundo!</h1>;
```

### Combinando expresiones de JavaScript con etiquetas HTML

Podemos usar variables de JavaScript entre llaves.

```jsx
const who = "Quincy Larson";
 const greet = <h1>Hola {who}!</h1>;
```

También podemos llamar a otras funciones de JavaScript entre llaves.

```jsx
function who() {
  return "Mundo";
 }
 const greet = <h1>Hola {who()}!</h1>;
```

### Solo se permite una sola etiqueta principal

Una expresión JSX debe tener una sola etiqueta principal. Podemos agregar varias etiquetas anidadas solo en el elemento principal.

```jsx
// This is valid.
 const tags = (
  <ul>
    <li>Una vez</li>
    <li>Dos veces</li>
  </ul>
 );

 // This is not valid.
 const tags = (
  <h1>Hola Mundo!</h1>
  <h3>Esta es mi lista especial:</h3>
  <ul>
    <li>Una vez</li>
    <li>Dos veces</li>
  </ul>
 );
```

### Más información

*   [Introduciendo JSX](https://reactjs.org/docs/introducing-jsx.html)