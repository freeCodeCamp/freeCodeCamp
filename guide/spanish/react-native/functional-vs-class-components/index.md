---
title: Functional vs Class Components
localeTitle: Componentes funcionales vs clase
---
## Reaccionar nativo - funcional vs componentes de clase

En React Native, hay dos tipos principales de componentes que conforman una aplicación: _componentes funcionales_ y _componentes de clase_ . Estos están estructurados de la misma manera que lo serían en una aplicación React regular para la web.

### Componentes de clase

Los componentes de la clase son clases de ES2015 de JavaScript que extienden una clase base de React llamada `Component` .

```js
class App extends Component { 
    render () { 
        return ( 
            <Text>Hello World!</Text> 
        ) 
    } 
 } 
```

Esto le da a la `App` la clase acceso a los métodos de ciclo de vida de React como `render` y la funcionalidad de estado / props del padre.

### Componentes funcionales

Los componentes funcionales son más simples. No administran su propio estado ni tienen acceso a los métodos de ciclo de vida proporcionados por React Native. Son literalmente antiguas funciones de JavaScript. También son conocidos como componentes sin estado.

```js
const PageOne = () => { 
    return ( 
        <h1>Page One</h1> 
    ); 
 } 
```

### Resumen

Los componentes de clase se utilizan como componentes de contenedor para manejar la administración de estado y envolver componentes secundarios. Los componentes funcionales generalmente solo se usan para fines de visualización: estos componentes llaman a las funciones de los componentes principales para manejar las interacciones del usuario o las actualizaciones de estado.