---
title: Redux
localeTitle: Redux
---
## Redux

Redux es un contenedor de estado predecible para aplicaciones JavaScript.

Le ayuda a escribir aplicaciones que se comportan de forma coherente, se ejecutan en diferentes entornos (cliente, servidor y nativo) y son fáciles de probar. Además de eso, proporciona una excelente experiencia de desarrollador, como la edición de código en vivo combinada con un depurador que viaja en el tiempo.

Principios básicos de redux:

1.  Redux es un contenedor estatal, almacena todo su estado en un solo lugar
2.  El estado es de solo lectura, la única forma de cambiar el estado es enviar una acción.
3.  El estado solo puede ser cambiado por funciones puras o en otro término: Reductores. Los Redux Reductores toman el estado anterior y un objeto de acción y devuelven el estado siguiente.

En términos prácticos, ¿cómo usamos Redux exactamente?

### REGLA 1

#### ¿Dónde se almacena este estado? Redux le proporciona una función práctica llamada

```js
createStore() 
```

Donde creas la tienda que tendrá todo tu estado.

### REGLA 3 (Voy a mostrar la regla 3 primero, ya que tendrá más sentido)

#### El estado solo se puede cambiar mediante una función pura, también conocida como un reductor, de modo que para crear esta conexión, pasaremos nuestro reductor a createStore () de esta forma

```js
var store = createStore(reducer) 
```

Se vuelve más complicado cuando tiene más reductores, pero en el núcleo, la tienda ahora tiene un reductor adjunto.

### REGLA 2

#### Una vez que tenemos una tienda que se crea con store = createStore (reductor). La nueva tienda que creamos tiene un método llamado despacho. ¡Recuerde que en la regla 2, la única forma en que podemos cambiar el estado es despachando una acción!

Puedes ver a dónde va esto.

```js
store.dispatch(action) 
```

Antes de entrar en lo que es un reductor y una acción, creo que mostrarle una implementación muy básica y limitada de createStore () de Redux será de gran ayuda.

```js
createStore = (reducer) => { 
    let state; 
 //dispatch method 
    dispatch = (action) => { 
        state = reducer(state, action) 
    } 
  return {dispatch} 
 } 
```

Vea cómo pasamos un reductor a createStore y se establece en nuestro método de envío; y cuando llamamos al método de despacho, toma una acción y establece un nuevo estado en función de lo que devolverá el reductor.

## ¿Qué es un reductor? ¿Qué es una acción?

Una acción en el nivel más básico es un objeto que tiene una propiedad llamada tipo. También puede tener otras propiedades, pero por simplicidad solo tendrá tipo.

```js
var someAction = {type:'doSomething'} 
```

Un reductor es solo una función:

```js
var reducer = (state, action) => { 
 
    if (action.type === 'doSomething'){ 
        return changedState; 
    } else if ( action.type === 'doSomethingElse'){ 
        return changedState; 
    } else { 
        return state 
    } 
 } 
```

La acción que pasamos a un reductor determinará cómo se cambiará el estado según el tipo. Redux se vuelve más complicado, pero si comprende estos principios, ¡le será más fácil navegar por los proyectos de reacción-redux!

#### Más información:

##### ¿Realmente necesitas Redux?

[Dan Abramov](https://github.com/gaearon) , creador de Redux, escribió hace un tiempo un gran artículo [que podría no necesitarse de Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) . Deberías comprobarlo primero porque, bueno, puede que no lo necesites.

Para más información diríjase a [http://redux.js.org/](http://redux.js.org/)

### Recursos

*   [Un curso de Dan Abramov, el autor de Redux.](https://egghead.io/courses/getting-started-with-redux)