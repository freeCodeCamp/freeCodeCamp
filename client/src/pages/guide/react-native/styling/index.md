---
title: Styling
---
## React Native - Styling

React Native provides an API to use to create stylesheets for adding styles to your components - `StyleSheet`. 

```js
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View>
        <Text style={styles.header}>I am a header!</Text>
        <Text style={styles.text}>I am some regular text.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  text: {
    color: blue
  }
});
```

While regular CSS stylesheets aren't valid, the superset of CSS used in React Native is very similar to what you would see on the web. Many properties from css can be used as they are on the web: color, bottom/top/right/left, flex, height, margin. Any properties in CSS that would normall have hypens, like `align-items` can be camel-cased and used as normal, `alignItems`.

There are some exceptions of course. There is no concept of hovering really on mobile devices so the CSS hover properties don't exist in React Native. Instead of this, feedback is used for touch events and React Native provides [APIs for these](https://facebook.github.io/react-native/docs/touchablehighlight.html#content).

Styles are also not inherited as they are on the web. You specifically have to style every component - View, Text, TextInput, etc. - or they will remain unstyled.

### Flexbox Layouts

React Native uses an implementation of Flexbox similar to the web standard for layouts. So by default items in the view will be set to `display: flex`. The flexbox standard was created to simplify web layouts and gives a pretty straightforward way to layout mobile applications as well. In addition to flexbox, you are also able to style React Native by using absolute positioning which is helpful in some cases.

One difference between the web standard the mobile one is that by default React Native will use `flexDirection: column` instead of `flex-direction: row`. This is to account for the screen size and layout needs while developing on mobile devices.

To learn more about flexbox, checkout [this detailed guide on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and a gamified learning approach [with Flexbox Froggies](http://flexboxfroggy.com/).

### Styled Components

Including lots of styles in the file with a component isn't always the best for maintainability. It can be a good idea to create separate components specifically for styling. Take a button for example. Someone is probably going to be using buttons in at least a few different places inside the same mobile applications so it doesn't make sense to copy and paste the style object into each separate component. A better option would be to create a styled custom button component and then import it whenever there is need for a button.

```js
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
```

This button component can be imported and used like this:

```js
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Button from './styling/Button';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TextInput placeholder='username or email' />
          <TextInput placeholder='password' />
          <Button>Log In</Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
```

### Libraries for Styling

There are a few popular libraries for styling React Native. Some of them provide features similar to Bootstrap for the Web - they give you default form and button styles and some page layout options. One of the most popular ones is [`styled-components`](https://github.com/styled-components/styled-components) but there are many others you can find on npm or Github and try out for yourself.

