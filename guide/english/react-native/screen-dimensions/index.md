---
title: Screen Dimensions
---
## React Native - Screen Dimensions

React Native uses Dots Per Inch (DPI) to measure the sizing of the User Interface (UI) and anything displayed on the UI. This type of measurement allows an application to look uniform across various screen sizes and pixel densities.

For standard use cases, applications can be developed without having to know the specifics of the user's device (e.g. pixel density) since the UI elements will scale automatically. When it is required, there are APIs available such as `PixelRatio` for finding out the pixel density of the user's device.

React Native provides an API called `Dimensions` that can be used to get the width and height of the window or screen of a user's device. 

```js
import { Dimensions } from 'react-native';
```

These are are the methods that this API currently offers:
 
```
set
get
addEventListener
removeEventListener
```

For the purposes of this guide, we'll focus on the `get` method, but feel free to check out the React Native official documentation for details on the other methods.

https://facebook.github.io/react-native/docs/dimensions#docsNav

The width and height of the window object can be easily retrieved, like so:

```js
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

// if you're feeling fancy, you could also use object destructuring to get those values out of the object that `Dimensions.get("window")` returns
const { width, height } = Dimensions.get("window")
```

Pretty simple, huh? Let's take a look at an example.

Let's say you want to cover the whole screen with a background image. We'll use the `ImageBackground` component that React Native provides. You can read more about it in the link below.

https://facebook.github.io/react-native/docs/images#background-image-via-nesting.

We need to set the width and height for this component to work. One way to do that is by using the width and height we got with the `Dimensions` API.

```js
import React, { Component } from "react"
import { Dimensions, ImageBackground } from "react-native"

const { width, height } = Dimensions.get("window")

export default HomePage = () => {
  return(
    <ImageBackground source={...} style={{ width, height }}> 
    </ImageBackground>
  )
}
```

What makes React Native so attractive is the ability to write code once and have it run on multiple devices (iPhone, iPad, Pixel, etc), and the `Dimensions` API makes that really easy.

For example, if you wanted a screen to look a certain way on an iPad vs a phone simple math can be done to apply the proper styling.

```js
const { width, height } = Dimensions.get('window');
const TABLET_RATIO = 1.6;
const ASPECT_RATIO = height/width;
 
 // later on in the view this can be applied with a ternary 
  <FancyView
    style={(ASPECT_RATIO > TABLET_RATIO) ? styles.phone : styles.ipad }
  ></FancyView>
 
```

**Note: There have been some known issues in the past with the Dimensions API such as not returning the correct information when a user rotates their device. It's best to make sure you test this on actual devices before deploying an application.**
