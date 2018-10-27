---
title: Hello World
localeTitle: Hello World
---
## Hello World

На обычной веб-странице вы можете легко отобразить `Hello World!` на экран, написав немного HTML:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Test Page</title> 
  </head> 
  <body> 
    <p>Hello World!</p> 
  </body> 
 </html> 
```

В React Native нет DOM или браузера, поэтому вам нужно отображать элементы на экране из мобильного API, который предоставляет React Native. Например, вместо использования `<p>` в качестве обертки для текста, как вы сделали бы в вебе, вы должны использовать `<Text>` ; вместо тегов-контейнеров `<div>` вы должны использовать `<View>` .

```js
import React, { Component } from 'react'; 
 import { AppRegistry, View, Text } from 'react-native'; 
 
 class App extends Component { 
  render () { 
    return ( 
      <View> 
        <Text> Hello World! </Text> 
      </View> 
    ); 
  } 
 } 
 
 AppRegistry.registerComponent('AwesomeProject', () => App); 
```

Чтобы отобразить код на экране, вместо открытия страницы в браузере вы используете специальный `AppRegistry.registerComponent()` метод, предоставляемый React Native для рендеринга приложения на мобильное устройство.
