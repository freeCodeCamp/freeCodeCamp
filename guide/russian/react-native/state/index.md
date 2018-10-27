---
title: Component State
localeTitle: Состояние компонента
---
## Состояние компонента

В компонентах `Class` существует встроенный в React Native способ хранения и управления состоянием.

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

Состояние похоже на props, но оно является приватным и полностью контролируется компонентом. Метод `constructor()` вызывает конструктор родительского класса с `super();` - **`Component`** приходится родительским классу `App` потому что мы используем ключевое слово `extends` . Метод `constructor()` также инициализирует объект состояния компонента:
```
this.state = { 
  counter: 0 
 }; 
```

Состояние может отображаться внутри компонента:

```js
{this.state.counter} 
```

Или обновляться по вызову:

```js
this.setState({}); 
```

**Примечание.** Помимо первоначального создания в методе `constructor()` вашего компонента, вы никогда не должны напрямую изменять состояние компонента с помощью `this.state =` . Вы должны использовать `this.setState` как видно из приведенных выше функций `incrementCount` и `decrementCount` .

Счётчик увеличивается и уменьшается по вызову функции, переданной обработчику `onPress` точно так же, как если бы вы вызвали обработчик кликов из JavaScript в вебе.

_Кроме того: В первом примере `<Button>` - это настраиваемый компонент; это комбинация `<TouchableOpacity>` и `<Text>` из React Native API:_

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
