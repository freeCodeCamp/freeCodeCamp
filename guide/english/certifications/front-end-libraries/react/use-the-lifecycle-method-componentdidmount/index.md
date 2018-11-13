---
title: Use the Lifecycle Method componentDidMount
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Use the Lifecycle Method componentDidMount

This challenges introduces the ``` componentDidMount ``` Lifecycle method. This is used to set state after a giventime period.

The syntax for the method is:
```javascript
componentDidMount() {
    setTimeout( () => {
      this.setState({
        one: 1,
        two: false
      });
    }, interval);
  }
```
where ``` one ``` and ``` two ``` are states you want to set after ``` interval ```ms.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint

Use
```javascript
this.state.stateName
```
and change ``` stateName ``` as required.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

Change
```javascript
render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
      </div>
    );
  }
```

to 

```javascript
render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers }</h1>
      </div>
    );
  }
```
