---
title: Styling
localeTitle: Стилизация
---
## React Native - Стилизация

React Native предоставляет API для создания стилей и стилизации ваших компонентов: [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet) .

```jsx
import React, { Component } from 'react'; 
 import { StyleSheet, View, Text } from 'react-native'; 
 
 export default class App extends Component { 
  render () { 
    return ( 
      <View> 
        <Text style={styles.header}>I am a header!</Text> 
        <Text style={styles.text}>I am some blue text.</Text> 
      </View> 
    ); 
  } 
 } 
 
 const styles = StyleSheet.create({ 
  header: { 
    fontSize: 20 
  }, 
  text: { 
    color: 'blue' 
  } 
 }); 
```

В то время как обычные каскадные таблицы стилей невалидны, надмножество CSS в React Native очень похоже на традиционный CSS. Многие свойства CSS (например, `color` , `height` , `top` , `right` , `bottom` , `left` ) одинаковы в StyleSheet. Любые свойства CSS, имеющие дефисы (например, `font-size` , `background-color` ), должны быть изменены на camelCase (например, `fontSize` , `backgroundColor` ).

Не все свойства CSS существуют в StyleSheet. Так как нет действительной концепции наведения мыши на мобильных устройствах, свойство CSS `hover` не существуют в React Native. Вместо этого, React Native предоставляет сенсорные [компоненты](https://facebook.github.io/react-native/docs/handling-touches#touchables), которые реагируют на события касания.

Стили также не наследуются, как в традиционном CSS. В большинстве случаев вы должны объявить стиль каждого компонента.

### Flexbox вёрстка

React Native использует реализацию [flexbox](https://facebook.github.io/react-native/docs/flexbox), аналогичную веб-стандарту. По умолчанию элементы в view будут иметь значение `display: flex` .

> Если вы не хотите использовать flexbox, вы также можете располагать компоненты React Native посредством `relative` или `absolute` позиционирования.

Настройки по умолчанию у флексбокс в React Native - `flexDirection: column` , а не `flex-direction: row` (веб-стандарт). Значение `column` отображает flex элементы по вертикали, что подходит для мобильных устройств в портретной ориентации.

Чтобы узнать больше о flexbox, посетите [это подробное руководство по CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) и игрофицированный подход к обучению с помощью [Flexbox Froggy](http://flexboxfroggy.com/) .

### Стилизованные компоненты

Включение большого количества стилей в файл с компонентом не всегда легко поддерживать. Стилизованные компоненты могут решить эту проблему.

Например, компонент Button может использоваться в нескольких местах приложения. Копирование и вставка объекта стиля с каждым экземпляром Button будет неэффективным. Вместо этого создайте переиспользуемый и стилизованный Button компонент:

```jsx
import React from 'react'; 
 import { Text, TouchableOpacity } from 'react-native'; 
 
 const Button = ({ onPress, children }) => { 
  const { buttonStyle, textStyle } = styles; 
  return ( 
    <TouchableOpacity onPress={onPress} style={buttonStyle}> 
      <Text style={textStyle}> 
        {children} 
      </Text> 
    </TouchableOpacity> 
  ); 
 }; 
 
 export default Button; 
 
 const styles = { 
  textStyle: { 
    alignSelf: 'center', 
    color: '#336633', 
    fontSize: 16, 
    fontWeight: '600', 
    paddingTop: 10, 
    paddingBottom: 10 
  }, 
  buttonStyle: { 
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#336633', 
    paddingTop: 4, 
    paddingBottom: 4, 
    paddingRight: 25, 
    paddingLeft: 25, 
    marginTop: 10, 
    width: 300 
  } 
 }; 
```

Стилизованный компонент Button может быть легко импортирован и использован в приложении без повторного объявления объекта стиля:

```jsx
import React, { Component } from 'react'; 
 import { TextInput, View } from 'react-native'; 
 import Button from './styling/Button'; 
 
 export default class Login extends Component { 
  render() { 
    return ( 
        <View> 
          <TextInput placeholder='Username or Email' /> 
          <TextInput placeholder='Password' /> 
          <Button>Log In</Button> 
        </View> 
    ); 
  } 
 } 
```

### Библиотеки для стилизации

Существует несколько популярных библиотек для стилизации React Native. Некоторые из них предоставляют функции, подобные [Bootstrap](../../bootstrap/index.md), включая формы по умолчанию, стили кнопок и разные варианты вёрстки. Одна из самых популярных библиотек - это [styled-components](https://github.com/styled-components/styled-components). Есть и много других библиотек, которые вы можете найти для себя на npm и GitHub.
