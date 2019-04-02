---
title: Touchables
---
## React Native - Touchables

Some of the main features of mobile devices revolve around user touch interactions. How a mobile app handles and responds to these interactions can make or break the user's experience.

React Native ships with a `Button` component which works for many standard `onPress` interactions. By default, it will give the user feedback by changing the opacity to show the button was pressed. Usage:

```js
<Button onPress={handlePress} title="Submit" />
```

For more complex use cases, React Native has APIs build in to handle press interactions called `Touchables`.

```
TouchableHighlight
TouchableNativeFeedback
TouchableOpacity
TouchableWithoutFeedback
```

Each of these Touchable components can be styled and used with a library, like the built-in `Animated`, allowing you to make your own types of custom user feedback.

Some examples of using these components:

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

You can handle different types of button presses as well. By default, buttons and touchables are configured to handle regular taps, but you can also denote a function to call for press and hold interactions for example.

```js
<TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}>
```

To see all of the available props and how these components work, you can look at [the JavaScript source code for Touchables here](https://github.com/facebook/react-native/tree/master/Libraries/Components/Touchable).

