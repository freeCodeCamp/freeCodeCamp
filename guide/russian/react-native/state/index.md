---
title: Component State
localeTitle: Состояние компонента
---
## Состояние компонента

В компонентах `Class` существует способ хранения и управления состоянием, встроенным в React Native.

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

Состояние похоже на реквизит, но оно является частным и полностью контролируется компонентом. Здесь метод `constructor()` вызывает конструктор родительского класса с `super();` - **`Component`** является родительским классом `App` потому что мы используем ключевое слово `extends` . Метод `constructor()` также инициализирует объект состояния компонента:
```
this.state = { 
  counter: 0 
 }; 
```

Состояние может отображаться внутри компонента:

```js
{this.state.counter} 
```

Или обновляется по телефону:

```js
this.setState({}); 
```

**Примечание.** Помимо своего первоначального создания в методе `constructor()` вашего компонента, вы никогда не должны напрямую изменять состояние компонента с помощью `this.state =` . Вы должны использовать `this.setState` как видно из приведенных выше функций `incrementCount` и `decrementCount` .

`onPress` увеличивается и уменьшается, вызывая функции, переданные обработчикам `onPress` точно так же, как если бы вы вызвали обработчик кликов из JavaScript в Интернете.

_ASIDE: В первом примере `<Button>` - это настраиваемый компонент; это комбинация `<TouchableOpacity>` и `<Text>` от React Native API:_

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