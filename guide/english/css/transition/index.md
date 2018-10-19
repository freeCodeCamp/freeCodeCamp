---
title: Transition
---
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
## Transition

The `transition` property allows you to change property values smoothly (from one value to another), over a given duration. 
```css 
  transition: all 300ms;
```

### Transition on Several Property Values

You can change multiples property values with transition property.
```css 
  transition: width 300ms, height 2s;
```
## Sub-Property

To create a CSS transition, we have different sub-properties for the transition property in CSS :

• `transition-delay`<br>
• `transition-duration`<br>
• `transition-property`<br>
• `transition-timing-function`

### Delay

The `transition-delay` property defines the delay (in seconds) before the transition is played.

```css
/* 2 seconds delay */

div {
  transition-delay: 2s;
}
```

### Duration

The `transition-duration` property defines the duration (in seconds) of the transition.

```css
/* 2 seconds duration */

div {
  transition-duration: 2s;
}
```
### Property

The `transition-property` property defines the CSS property that will be affected in the transition.

```css
/* The transition will be on the width property */

div {
  transition-property: width;
}
```

### Timing-function

The `transition-timing-function` property defines the speed of the transition.

```css
/* The transition speed */

div {
  transition-timing-function: linear;
}
```
#### Different values of `transition-timing-function`

• `ease` - specifies a transition effect with a slow start, then fast, then end slowly (this is default)<br>
• `linear` - specifies a transition effect with the same speed from start to end<br>
• `ease-in` - specifies a transition effect with a slow start<br>
• `ease-out` - specifies a transition effect with a slow end<br>
• `ease-in-out` - specifies a transition effect with a slow start and end<br>
• `cubic-bezier(n,n,n,n)` - lets you define your own values in a cubic-bezier function

## Syntax

```css
transition: property name / duration / timing function / delay ;
```
#### Example
```css
transition: width 2s linear 2s;
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/transition' target='_blank' rel='nofollow'>MDN</a>
* Easings reference: <a href='http://easings.net/en' target='_blank' rel='nofollow'>Easings</a>




