---
title: Styling
---

## React Native - Styling

React Native provides an API for creating stylesheets and styling your components: [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet).

```jsx
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
  render() {
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
    fontSize: 20,
  },
  text: {
    color: 'blue',
  },
});
```

While regular CSS stylesheets aren't valid, React Native's superset of CSS is very similar to traditional CSS. Many CSS properties (e.g. `color`, `height`, `top`, `right`, `bottom`, `left`) are the same in StyleSheet. Any CSS properties that have hyphens (e.g. `font-size`, `background-color`) must be changed to camelCase (e.g. `fontSize`, `backgroundColor`).

Not all CSS properties exist in StyleSheet. Since there is no true concept of hovering on mobile devices, CSS hover properties don't exist in React Native. Instead, React Native provides [Touchable components](https://facebook.github.io/react-native/docs/handling-touches#touchables) that respond to touch events.

Styles are also not inherited as they are in traditional CSS. In most cases, you must declare the style of each component.

### Flexbox Layouts

React Native uses an implementation of [flexbox](https://facebook.github.io/react-native/docs/flexbox) similar to the web standard. By default, items in the view will be set to `display: flex`.

> If you do not want to use flexbox, you can also arrange React Native components via `relative` or `absolute` positioning.

Flexbox in React Native defaults to `flexDirection: column`, instead of `flex-direction: row` (web standard). The `column` value displays flexible items vertically, which accommodates mobile devices in portrait orientation.

To learn more about flexbox, visit [this detailed guide on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and a gamified learning approach with [Flexbox Froggy](http://flexboxfroggy.com/).

### Styled Components

Including lots of styles in a file with a component isn't always easy to maintain. Styled components can solve this issue.

For example, a Button component may be used in multiple places across an application. Copying and pasting the style object with each Button instance would be inefficient. Instead, create a reusable, styled Button component:

```jsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
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
    paddingBottom: 10,
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
    width: 300,
  },
};
```

The styled Button component can be easily imported and used across the application without repeatedly declaring the style object:

```jsx
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Button from './styling/Button';

export default class Login extends Component {
  render() {
    return (
      <View>
        <TextInput placeholder="Username or Email" />
        <TextInput placeholder="Password" />
        <Button>Log In</Button>
      </View>
    );
  }
}
```

### Libraries for Styling

There are a few popular libraries for styling React Native. Some of them provide features similar to [Bootstrap](../../bootstrap), including default forms, button styles, and page layout options. One of the most popular libraries is [styled-components](https://github.com/styled-components/styled-components). There are many others you can find on npm and GitHub to try for yourself.
