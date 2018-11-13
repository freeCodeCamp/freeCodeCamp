---
title: Use the Lifecycle Method componentWillMount
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Use the Lifecycle Method componentWillMount

The challenge is a basic introduction to React's LifeCycle components.
These methods are also called Lifecycle Hooks.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Log something to the console in the ```react componentWillMount ``` method.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

The `` console.log(); `` statement is used to log to the browser console.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

Since you can log anything, use the ``` console.log(); ``` and pass in a string. The ``` componentWillMount ``` method should look like:

```javascript
componentWillMount() {
  console.log('Component being mounted');
}
```

##### Note: The ``` componentWillMount ``` Lifecycle method has been deprecated as of version 17, and does not work on later versions. [(Source)](https://reactjs.org/docs/react-component.html)
