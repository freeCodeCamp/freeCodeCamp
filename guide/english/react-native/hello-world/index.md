---
title: Hello World
---
## Hello World

In a traditional webpage, you could easily render `Hello World!` to the screen by writing some HTML like this:

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

In React Native, there is no DOM or browser, so you have to render things to the screen from a mobile API that React Native provides. For example, instead of using a `<p>` tag as a wrapper for text like you would on the web, you would use `<Text>`; instead of `<div>` container tags, you would use `<View>`.

```js
import React, { Component } from ‘react’;
import { AppRegistry, View, Text } from ‘react-native’;

class App extends Component {
  render () {
    return (
      <View>
        <Text> Hello World! </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(‘AwesomeProject’, () => App);
```

To render the code to the screen, instead of opening the page in a browser, you use a special `AppRegistry.registerComponent()` method provided by React Native to render the app to a mobile device.
