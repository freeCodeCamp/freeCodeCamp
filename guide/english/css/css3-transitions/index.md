---
title: CSS3 Transitions
---
## CSS3 Transitions

Using CSS3 **Transitions** can be useful if you want your app or your web page to be more dynamic and good looking.

Indeed, transitions allow you to change property (`width`, `color`, ...) values in a **smooth** way.

The `transition` property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`, the syntax is the following :

```css
transition: transition-property transition-duration transition-timing-function transition-delay
```

For example : 

```
transition: width 2s ease-in-out 1s;
```

### Description of the properties

#### `transition-property`

Specify the **name** of property to which you should apply a transition : 

* `background-color`
* `color`
* `width`
* `height`
* `margin`
* `border-radius`
* And so on !

For example : 

```
transition-property: width; /* means the transition applies on the width */
```

#### `transition-duration`

Specify the **number of seconds or milliseconds** the transition should **take** : 

For example :

```
transition-duration: 2s /* means the transition effect last 2s */
```

#### `transition-timing-function`

Specify the **speed curve** of the transition effect. Thus, you can change your **transition's speed over its duration**. 

Here are the most used values :

* `linear`
* `ease`
* `ease-in`
* `ease-out`
* `ease-in-out`
* `cubic-bezier(n, n, n, n)`

For example :

```css
transition-timing-function: linear
```

N.B : All the values above are in fact specifics `cubic-bezier`. `linear`, for instance, is equivalent to `cubic-bezier(0.25,0.1,0.25,1)`

You can experiment and learn more about *Cubic Bezier* [here](http://cubic-bezier.com/)

#### `transition-delay`

Specify in **seconds or milliseconds** when the transition will **start**.

For example :

```
transition-delay: 1s /* means wait 1s before the transition effect start */
```

### How to use transitions ?

You can write a transition in two ways :

#### Using the shorthand property (`transition`)

```css
div {
  width: 200px;
  transition: all 1s ease-in-out;
}

div:hover {
  width: 300px;
}
```

#### Giving all transition properties a value

```css
div {
  width: 200px;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
```

N.B : Both examples are **equivalent**

### Examples

Here are some simple pens containing simple transitions :

* [Basic transitions](https://codepen.io/thomlom/pen/gGqzNp)
* [Transitions + JavaScript](https://codepen.io/thomlom/pen/JrxZKz?editors=1111)

#### More Information:

* [w3schools : CSS3 Transitions](https://www.w3schools.com/css/css3_transitions.asp) 
* [MDN web docs : Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
* [DevTips : CSS Transition](https://www.youtube.com/watch?v=8kK-cA99SA0)
