---
title: Component State
localeTitle: Estado componente
---
## Estado componente

En `Class` componentes de `Class` , hay una manera de almacenar y administrar el estado integrado para React Native.

```javascript
class App extends Component { 
  constructor () { 
    super(); 
    this.state = { 
      counter: 0 
    }; 
  } 
  incrementCount () { 
    this.setState({ 
      counter: this.state.counter + 1 
    }); 
  } 
  decrementCount () { 
    this.setState({ 
      counter: this.state.counter - 1 
    }); 
  } 
  render () { 
    return ( 
      <View> 
        <Text>Count: {this.state.counter}</Text> 
        <Button onPress={this.decrementCount.bind(this)}>-</Button> 
        <Button onPress={this.incrementCount.bind(this)}>+</Button> 
      </View> 
    ); 
  } 
 } 
```

El estado es similar a los accesorios, pero es privado y totalmente controlado por el componente. Aquí, el método `constructor()` llama al constructor de la clase padre con `super();` - **`Component`** es la clase principal de `App` , ya que estamos utilizando la `extends` palabra clave. El método `constructor()` también inicializa el objeto de estado del componente:
```
this.state = { 
  counter: 0 
 }; 
```

El estado se puede mostrar dentro del componente:

```js
{this.state.counter} 
```

O actualizado llamando

```js
this.setState({}); 
```

**Nota:** Aparte de su creación inicial en el método `constructor()` su componente, nunca debe modificar directamente el estado del componente con `this.state =` . Debe usar `this.setState` como se puede ver en las funciones `incrementCount` y `decrementCount` anteriores.

El recuento se incrementa y disminuye al llamar a las funciones pasadas a los controladores de `onPress` como lo harían si llamara a un controlador de clic desde JavaScript en la web.

_ASIDE: En el primer ejemplo, `<Button>` es un componente personalizado; es una combinación de `<TouchableOpacity>` y `<Text>` de React Native API:_

```js
const Button = ({ onPress, children, buttonProps, textProps }) => { 
  const { buttonStyle, textStyle } = styles; 
  return ( 
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonProps]}> 
      <Text style={[textStyle, textProps]}> 
        {children} 
      </Text> 
    </TouchableOpacity> 
  ); 
 }; 

```