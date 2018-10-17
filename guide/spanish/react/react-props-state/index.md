---
title: React Props and State
localeTitle: Reaccionar apoyos y estado
---
## Apoyos y estado

Hay dos tipos de datos que controlan un componente: props y estado. El padre establece los apoyos y se fijan durante toda la vida útil de un componente. Para los datos que van a cambiar, tenemos que usar el estado.

### Accesorios

La mayoría de los componentes se pueden personalizar con diferentes parámetros cuando se crean. Estos parámetros de creación se llaman `props` .

Tus propios componentes también pueden usar puntales. Esto le permite crear un único componente que se usa en muchos lugares diferentes en su aplicación, con propiedades ligeramente diferentes en cada lugar. Refiérase a `this.props` en su función de render:
```
class Welcome extends React.Component { 
  render() { 
    return <h1>Hello {this.props.name}</h1>; 
  } 
 } 
 
 const element = <Welcome name="neel" />; 
```

La línea `<Welcome name="neel" />` crea un nombre de propiedad con el valor `"neel"` .

la propiedad se pasa al componente, de manera similar a cómo se pasa un argumento a una función. De hecho, incluso podríamos reescribir el componente para que sea más sencillo:
```
function Welcome(props) { 
  return <h1>Hello {props.name}</h1>; 
 } 
```

Podemos hacer que la propiedad del nombre sea opcional agregando valores predeterminados a la clase de Bienvenida:
```
class Welcome extends React.Component { 
  render() { 
    return <h1>Hello {this.props.name}</h1>; 
  } 
 } 
 
 Welcome.defaultProps = { 
  name: "world", 
 }; 
```

Si se llama a Welcome sin un nombre, simplemente se mostrará `<h1> Hello world</h1>` .

Por lo tanto, los `props` pueden provenir del padre o pueden ser establecidos por el componente en sí.

Solía ​​ser capaz de cambiar accesorios con setProps y replaceProps, pero estos han quedado en **desuso** . Durante el ciclo de vida de un componente, los accesorios no deben cambiar (considérelos inmutables).

Como los accesorios se pasan y no pueden cambiar, puede pensar en cualquier componente React que solo use accesorios (y no en estado) como "puro", es decir, siempre generará la misma salida con la misma entrada. Esto los hace realmente fáciles de probar.

### Estado

Al igual que los `props` , el `state` contiene información sobre el componente. Sin embargo, el tipo de información y cómo se maneja es diferente.

Por defecto, un componente no tiene estado. El componente de `Welcome` de arriba es sin estado:
```
function Welcome(props) { 
  return <h1>Hello {props.name}</h1>; 
 } 
```

Cuando un componente necesita realizar un seguimiento de la información entre las representaciones, el propio componente puede crear, actualizar y utilizar el estado.

Trabajaremos con un componente bastante simple para ver el `state` trabajando en acción. Tenemos un botón que hace un seguimiento de cuántas veces lo has hecho clic.

Aquí está el código:
```
class Button extends React.Component { 
  constructor() { 
    super(); 
    this.state = { 
      count: 0, 
    }; 
  } 
 
  updateCount() { 
    this.setState((prevState, props) => { 
      return { count: prevState.count + 1 } 
    }); 
  } 
 
  render() { 
    return (<button 
              onClick={() => this.updateCount()} 
            > 
              Clicked {this.state.count} times 
            </button>); 
  } 
 } 
```

### estado se crea en el componente

Veamos el método `constructor` :
```
constructor() { 
  super(); 
  this.state = { 
    count: 0, 
  }; 
 } 
```

Aquí es donde el estado obtiene sus datos iniciales. Los datos iniciales pueden estar codificados (como antes), pero también pueden provenir de `props` .

### `state` es cambiable

Aquí está el método `updateCount` :
```
updateCount() { 
  this.setState((prevState, props) => { 
    return { count: prevState.count + 1 } 
  }); 
 } 
```

Cambiamos el estado para realizar un seguimiento del número total de clics. El bit importante es setState. En primer lugar, observe que setState toma una función, eso es porque setState puede ejecutarse de forma asíncrona. Necesita tomar una función de devolución de llamada en lugar de actualizar el estado directamente. Puede ver que tenemos acceso a prevState dentro de la devolución de llamada, esto contendrá el estado anterior, incluso si el estado ya se ha actualizado en otro lugar.

React va un paso mejor, setState actualiza el objeto de `state` **y** vuelve a renderizar el componente de forma automática.

### advertencias `state`

> Es tentador escribir `this.state.count = this.state.count + 1` .

**No hagas esto** React no puede escuchar el estado que se actualiza de esta manera, por lo que tu componente no se volverá a generar. Siempre use `setState` .

También podría ser tentador escribir algo como esto:
```
// DO NOT USE 
 this.setState({ 
  count: this.state.count + 1 
 }); 
```

Si bien esto puede parecer razonable, no produce errores y puede encontrar ejemplos que usan esta sintaxis en línea, es incorrecto. Esto no tiene en cuenta la naturaleza asíncrona que puede usar `setState` y puede causar errores con datos de estado no sincronizados.

### Programa Continuar !!!

Y finalmente, `render`
```
render() { 
  return (<button 
            onClick={() => this.updateCount()} 
          > 
            Clicked {this.state.count} times 
          </button>); 
 } 
```

`onClick={() => this.updateCount()}` significa que cuando se hace clic en el botón, se llamará al método updateCount. Necesitamos usar **la función de flecha de ES6** para que updateCount tenga acceso al estado de esta instancia.

El texto representado en el botón hace clic en `Clicked {this.state.count} times` , lo que usará lo que sea this.state.count en el momento de la representación.

Más información sobre: [**React props y estado**](https://facebook.github.io/react-vr/docs/components-props-and-state.html)