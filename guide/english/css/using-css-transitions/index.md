---
title: Using CSS Transitions
---
## Using CSS Transitions

**CSS transitions** provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.

CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining a timing function, e.g. linearly or quick at the beginning, slow at the end).

#### Which CSS properties can be transitioned?

[CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

#### Defining transitions

CSS Transitions are controlled using the shorthand `transition` property.
You can control the individual components of the transition with the following sub-properties:

`transition-property`: Name of the property, which transition should be applied.

`transition-duration`: Duration over which transitions should occur.

`transition-timing-function`: Function to define how intermediate values for properties are computed.

`transition-delay`: Defines how long to wait between the time a property is changed and the transition actually begins.

```
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

#### Example

This example performs a four-second font size transition with a two-second delay between the time the user mouses over the element and the beginning of the animation effect:

```
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

#### More Information:
For more deatils on CSS Animations, please visit [Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)


