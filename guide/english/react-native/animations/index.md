---
title: Animations in React Native
---

## Animations in React Native
In React Native, moving objects on screen is not as hard as you thought. There is a API named `Animated`.  The API has several functions to animate things as decay, spring and timing. Timing function is the most used one and we will create a demo with`Animated.timing()`.
 
Let's start with importing our API and View component that will be moving.
```javascript
 import  React  from  'react';
 import { Animated, View, Easing } from  'react-native';
```
 There are 3 fundamental steps of applying Animated API
 
1.  Assign a value that the animation will progress with
2.  Determine what type of animation will be applied
3.  Wrap the component to be animated

 For first step we  need to declare a animated value in constructor method.
 
 
 ```javascript
 constructor() {
  super();
  this.spinValue  =  new  Animated.Value(0);
}
 ```
 
     
 Initially, we set the value to 0.
 
 Timing function will help us change that `spinValue` in a specific duration.  As second step, we need to determine the animation type with animated functions. 
     
```javascript
spin() {
 Animated.timing(this.spinValue, {
     toValue:  1,
     duration:  4000,
     easing: Easing.linear 
 }).start(() => {
     this.spinValue.setValue(0);
     this.spin();
 });
}
```
    
 
 The function takes our animated value as first parameter. Basically, timing function will move the given animated value to a number that is given in `toValue: 1`.   The good thing timing function provides us is the duration. Since we set duration to 4000ms , it will take 4 seconds for the value to be 1  from 0.  After 4 seconds, timing function will stop and the call given callback in `start()`.  We set our value to 0 and call `spin` again  in callback function. Therefore, spin function becomes recursive and we have the infinite animation.
 
 
 > The `Easing` module implements common easing functions. This module is used by [Animated.timing()](https://facebook.github.io/react-native/docs/animated#timing) to convey physically believable motion in animations.
 
 
 Linear function is chosen above because we want our animation to be nonstop. You can simply experience the difference by removing `Easing.linear` line.
 
`componentDidMount` life-cycle method is great place to call `spin` method because it's called once the components are mounted on screen. 

```javascript
componentDidMount() {
  this.spin();
}
```
 Everything looks great, we have a value that is changing 0 to 1 in 4 seconds. Why don't we use this changing value to interpolate our style objects ? 
```javascript
getMovement() {
  const  rotate  =  this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  return  rotate;
}
```
 > The `interpolate` function allows animated values to be derived from other animated values.

 While timing function changing animated value to 1, `interpolate` function creates values with the given ratio in `inputRange` and `outputRange`.  
 
 - If input is 0 then give '0deg'
 - If input is 1 then give '360deg'
 
There is only one step left to complete.  The third one '  Wrap the component to be animated'. We can either wrap a component as
```javascript
<Animated.View>
  <View />
</Animated.View>
```
 or we can directly move the Animated.View itself. I will go with the second option.
 
```js     
render() {
  return (
    <View  style={{ flex:  1, justifyContent:  'center', alignItems:  'center'}}>
      <Animated.View
        style={{
          transform: [{ rotate:  this.getMovement() }],
          width:  100,
          height:  100,
          backgroundColor:  'pink'
        }}
      />
    </View>
  );
}
```
`getMovement` returns our interpolated value and we set it to transform property of our style object. Eventually, we have the spining pink square in the middle of screen.  As a challange you can try to create a ball jumping on screen.
 
 Happy Hacktoberfest !
 
 ### Sources
 - [AnimationBook](https://animationbook.codedaily.io/introduction/)
 - [React Native Documents](https://facebook.github.io/react-native/docs/animated)
 
 
