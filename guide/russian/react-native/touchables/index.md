---
title: Touchables
localeTitle: осязаемый
---
## Реагировать на природу - Touchables

Некоторые из основных функций мобильных устройств вращаются вокруг пользовательских взаимодействий. Как мобильное приложение обрабатывает и реагирует на эти взаимодействия, может сделать или нарушить работу пользователя.

Реагировать Native кораблей с `Button` компонента , который работает для многих стандартных `onPress` взаимодействий. По умолчанию он даст пользователю обратную связь, изменив непрозрачность, чтобы показать кнопку нажата. Применение:

```js
<Button onPress={handlePress} title="Submit" /> 
```

Для более сложных вариантов использования React Native использует API для обработки взаимодействий с прессой под названием `Touchables` .
```
TouchableHighlight 
 TouchableNativeFeedback 
 TouchableOpacity 
 TouchableWithoutFeedback 
```

Каждый из этих Touchable компонентов можно стилизовать и использовать с библиотекой, например, с помощью встроенной `Animated` , позволяющей создавать собственные типы пользовательской обратной связи.

Некоторые примеры использования этих компонентов:

```js
// with images 
 <TouchableHighlight onPress={this.handlePress}> 
  <Image 
    style={styles.button} 
    source={require('./logo.png')} 
  /> 
 </TouchableHighlight> 
 
 // with text 
 <TouchableHighlight onPress={this.handlePress}> 
  <Text>Hello</Text> 
 </TouchableHighlight> 
```

Вы также можете обрабатывать различные типы кнопок. По умолчанию кнопки и сенсорные элементы настроены для обработки обычных кранов, но вы также можете обозначить функцию вызова для взаимодействия нажатием и удержанием, например.

```js
<TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}> 
```

Чтобы увидеть все доступные реквизиты и как эти компоненты работают, вы можете посмотреть [исходный код JavaScript для Touchables](https://github.com/facebook/react-native/tree/master/Libraries/Components/Touchable) .