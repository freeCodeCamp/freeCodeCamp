---
title: Component State
localeTitle: Estado Componente
---
## Estado Componente

Nos componentes de `Class` , existe uma maneira de armazenar e gerenciar o estado incorporado ao Reagir Nativo.

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

Estado é semelhante a adereços, mas é privado e totalmente controlado pelo componente. Aqui, o método `constructor()` está chamando o construtor da classe pai com `super();` - **`Component`** é a classe pai do `App` porque estamos usando a palavra-chave `extends` . O método `constructor()` também inicializa o objeto de estado do componente:
```
this.state = { 
  counter: 0 
 }; 
```

O estado pode ser exibido dentro do componente:

```js
{this.state.counter} 
```

Ou atualizado chamando:

```js
this.setState({}); 
```

**Nota:** Além de sua criação inicial no método `constructor()` seu componente, você nunca deve modificar diretamente o estado do componente com `this.state =` . Você deve usar `this.setState` como pode ser visto nas funções `incrementCount` e `decrementCount` acima.

A contagem é incrementada e decrementada chamando as funções passadas aos manipuladores do `onPress` da mesma forma que seriam se você chamasse um manipulador de cliques do JavaScript na web.

_ASIDE: No primeiro exemplo, `<Button>` é um componente personalizado; é uma combinação de `<TouchableOpacity>` e `<Text>` da API React Native:_

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