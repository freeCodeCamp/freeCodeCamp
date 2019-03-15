---
title: Using CSS Transitions
---
## Using CSS Transitions

**CSS transitions** provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.

CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining a timing function, e.g. linearly or quick at the beginning, slow at the end).


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

![Without CSS Transition](https://imgur.com/Yl0Bxwn)

Without a transition, this element will double in width as soon as the user hovers over it. But we might want a smoother movement. We can add a transition like so:

```css
.transition-me {
  width: 150px;
  height: 50px;
  background: blue;
  transition: 0 0.3s all ease;
}
```

![With CSS Transition](https://imgur.com/wgscRNa)

The `transition` CSS property is short-hand for several possible properties:

```css
transition: transition-delay transition-duration transition-property transition-timing-function
```

### `transition-delay`
This is the time before the transition begins in seconds,
```css
div {
  transition-delay: 3s;
}
```

### `transition-duration`
The duration of the transition.
```css
div {
  transition-duration: 3s;
}
```

### `transition-property`
This describes the CSS property which is transitioning, the default value `all` will mean that all properties that change will be transitioned. For multiple transition properties, use a comma-separated list.
```css
div {
  transition-property: width, height;
  transition-property: all
}
```

### `transition-timing-function`
The timing function lets us control the speed of the transition. Several keywords can be used with generic timing functions, or you can specify a [cubic bezier](https://www.w3schools.com/cssref/func_cubic-bezier.asp).
```css
div {
  transition-timing-function: linear;
  transition-timing-function: cubic-bezier(0,0,1,1);
}
```
For more options available in this property, check out the [W3Schools page on transition-timing-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp). Also there's a handy [online cubic-bezier tool](http://cubic-bezier.com).


#### More about Using CSS Transitions

* [W3 Schools CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
* [MDN CSS Transitions Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
* [All you need to know about CSS Transitions by Alex MacCaw](https://blog.alexmaccaw.com/css-transitions)
* [CSS Transitions - Explained](https://zellwk.com/blog/css-transitions/)
* [CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
