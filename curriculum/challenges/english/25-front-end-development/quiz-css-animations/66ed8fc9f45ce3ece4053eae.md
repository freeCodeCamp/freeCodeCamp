---
id: 66ed8fc9f45ce3ece4053eae
title: CSS Animations Quiz
challengeType: 8
dashedName: quiz-css-animations
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the purpose of the `transform` property in CSS?

#### --distractors--

To change the visibility of an element.

---

To apply a visual effect to text.

---

To set the dimensions of an element.

#### --answer--

To modify the position, size, and shape of an element.

### --question--

#### --text--

How does the CSS `animation-direction` property affect an animation?

#### --distractors--

It specifies if an animation should be repeated.

---

It sets the duration of the animation.

---

It defines the speed of the animation.

#### --answer--

It defines how an animation should play.

### --question--

#### --text--

Which CSS property makes an animation run 3 times?

#### --distractors--

`animation-repeat: 3`

---

`animation-loop: 3`

---

`animation-delay: 3`

#### --answer--

`animation-iteration-count: 3`

### --question--

#### --text--

Which CSS timing function makes an animation run at a consistent speed from start to end?

#### --distractors--

`ease`

---

`ease-in`

---

`ease-in-out`

#### --answer--

`linear`

### --question--

#### --text--

What does the `@keyframes` at-rule define in CSS?

#### --distractors--

The colors of a CSS gradient.

---

The angles of a CSS rotation.

---

The dimensions of an element.

#### --answer--

The stages of a CSS animation.

### --question--

#### --text--

What is the purpose of the `translateX()` function in CSS?

#### --distractors--

It changes the opacity of the element.

---

It rotates the element.

---

It repositions the element vertically.

#### --answer--

It repositions the element horizontally.

### --question--

#### --text--

Which of the following is NOT a potential concern with CSS animations?

#### --distractors--

They may cause discomfort or physical harm to certain users.

---

Users may find them distracting.

---

Overuse can lead to poor performance.

#### --answer--

They can enhance user experience.

### --question--

#### --text--

Where is the `@keyframes` at-rule defined?

#### --distractors--

Within the `body` element of an HTML file.

---

Within the `head` element of an HTML file.

---

Within a CSS class definition.

#### --answer--

At the top level, outside of any CSS selectors.

### --question--

#### --text--

Which CSS property allows you to pause and resume an animation?

#### --distractors--

`animation-timing-function`

---

`animation-delay`

---

`animation-direction`

#### --answer--

`animation-play-state`

### --question--

#### --text--

What value should be assigned to the `animation-name` property in CSS?

#### --distractors--

The duration of the animation in seconds.

---

The timing function used for the animation.

---

The delay before the animation starts in seconds.

#### --answer--

The name of the animation defined by the `@keyframes`.

### --question--

#### --text--

What does this `@keyframe` at-rule do to the animated element?

```css
@keyframes animation {
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(100px);
  }
}
```

#### --distractors--

It rotates the element 90 degrees clockwise.

---

It changes the color of the element to blue.

---

It scales the element to 50% of its initial size and then to 100% of its initial size.

#### --answer--

It moves the element horizontally from -50px to 100px, relative to its starting point.

### --question--

#### --text--

Which CSS property defines how an animation progresses over time?

#### --distractors--

`animation-delay`

---

`animation-fill-mode`

---

`animation-iteration-count`

#### --answer--

`animation-timing-function`

### --question--

#### --text--

Which CSS property is used to specify that an animation should take 5 seconds to complete?

#### --distractors--

```css
animation-name: 5s;
```

---

```css
animation-delay: 5s;
```

---

```css
animation-timing-function: 5s;
```

#### --answer--

```css
animation-duration: 5s;
```

### --question--

#### --text--

What does `50%` represent in the following CSS `@keyframe` at-rule?

```css
@keyframes animation {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(100px);
  }
}
```

#### --distractors--

The starting point of the animation.

---

The ending point of the animation.

---

The speed of the animation.

#### --answer--

The halfway point of the animation.

### --question--

#### --text--

What will happen when the property `transform: translateX(200px);` is applied?

#### --distractors--

The element will move 200px to the left.

---

The element will move 200px to the bottom.

---

The element will rotate 200 degrees clockwise.

#### --answer--

The element will move 200px to the right.

### --question--

#### --text--

How will the animation behave if `animation-iteration-count` is set to `infinite`?

#### --distractors--

It will run once and stop.

---

It will pause after the first iteration.

---

It will stop after three iterations.

#### --answer--

It will repeat indefinitely.

### --question--

#### --text--

Which `@keyframes` selector specifies the starting point of an animation?

#### --distractors--

`50%`

---

`25%`

---

`100%`

#### --answer--

`0%`

### --question--

#### --text--

What properties can be specified using the `animation` shorthand CSS property?

#### --distractors--

Only the name of the animation.

---

The name and duration of the animation.

---

The name, duration, and delay of the animation.

#### --answer--

All animation properties.

### --question--

#### --text--

Which CSS property is used to apply an animation defined by an `@keyframes` at-rule?

#### --distractors--

`animation-duration`

---

`apply`

---

`translate`

#### --answer--

`animation`

### --question--

#### --text--

Which CSS property allows you to set a time before the animation begins?

#### --distractors--

`animation-fill-mode`

---

`animation-timing-function`

---

`animation-iteration-count`

#### --answer--

`animation-delay`

## --quiz--

### --question--

#### --text--

What does the CSS `animation-delay` property do?

#### --distractors--

Sets how long the animation lasts

---

Specifies the timing function

---

Defines animation direction

#### --answer--

Delays the start of the animation

### --question--

#### --text--

Which animation property specifies how the element should be styled before and after the animation?

#### --distractors--

`animation-delay`

---

`animation-direction`

---

`animation-iteration-count`

#### --answer--

`animation-fill-mode`

### --question--

#### --text--

Why should CSS animations be used in moderation?

#### --distractors--

They automatically improve browser compatibility

---

They increase the site’s SEO ranking

---

They optimize server response times

#### --answer--

They can lead to poor performance and may be distracting or problematic for users with certain accessibility needs

### --question--

#### --text--

Which animation property determines whether the animation should play forwards, backwards, or alternate?

#### --distractors--

animation-fill-mode

---

animation-delay

---

animation-timing-function

#### --answer--

animation-direction

### --question--

#### --text--

What CSS media query detects if the user has requested minimal animations or motion effects?

#### --distractors--

@media (reduce-motion: true)

---

@media (min-motion-preference: low)

---

@media (motion-preferences: reduced)

#### --answer--

@media (prefers-reduced-motion: reduce)

### --question--

#### --text--

Which property sets how many times an `animation` repeats?

#### --distractors--

`animation-duration`

---

`animation-count`

---

`animation-delay`

#### --answer--

`animation-iteration-count`

### --question--

#### --text--

Which media query detects users who prefer reduced motion?

#### --distractors--

`@media (motion-preference: low)`

---

`@media (reduced-motion: true)`

---

`@media (no-motion: yes)`

#### --answer--

`@media (prefers-reduced-motion: reduce)`

### --question--

#### --text--

Inside the `reduced‑motion` media query, which declaration disables transitions?

#### --distractors--

`animation: none;`

---

`transition: remove;`

---

`animation-play-state: paused;`

#### --answer--

`transition: none;`

### --question--

#### --text--

What does the `animation-play-state` property allow you to do?

#### --distractors--

Set how many times the animation repeats

---

Specify how long the animation takes to complete

---

Determine the direction in which the animation plays

#### --answer--

Pause and resume the animation

### --question--

#### --text--

As a general rule, what content should be avoided to reduce seizure risk?

#### --distractors--

Any content that changes color

---

Any movement of elements

---

Any use of the transform property

#### --answer--

Content that flashes more than three times per second

### --question--

#### --text--

Why is the `!important` declaration used in the CSS rules?

#### --distractors--

To prevent other media queries from loading

---

To limit styles to the first child element

---

To debug CSS more easily

#### --answer--

To ensure these rules take precedence over other styles

### --question--

#### --text--

What does `animation-iteration-count: 1 !important;` ensure in CSS?

#### --distractors--

That animations are paused

---

That animations run infinitely

---

That animations reverse direction each cycle

#### --answer--

That any looping animations only play once

### --question--

#### --text--

What type of animation content can trigger seizures in people with photosensitive epilepsy?

#### --distractors--

Slow fading transitions

---

Background-color changes

---

Single-direction transforms

#### --answer--

Rapid flashing or strobing effects that flash more than three times per second

### --question--

#### --text--

Which property is NOT part of the `animation` shorthand?

#### --distractors--

animation-delay

---

animation-timing-function

---

animation-direction

#### --answer--

animation-transform

### --question--

#### --text--

What does the `@keyframes` rule define?

#### --distractors--

The timing function of an animation

---

The default state of an element

---

The media queries for animations

#### --answer--

The sequence of styles at different points in an animation

### --question--

#### --text--

What is the goal of using the `prefers-reduced-motion` media query in animations?

#### --distractors--

To completely remove all motion from the website

---

To force animations to run at double speed

---

To disable all CSS styles globally

#### --answer--

Use a low-motion approach that respects user settings for comfortable accessibility.

### --question--

#### --text--

In a keyframes rule, what does `100%` represent?

#### --distractors--

The start of the animation

---

The halfway point

---

The easing function

#### --answer--

The end of the animation

### --question--

#### --text--

Which property controls the pace of an `animation` over its duration?

#### --distractors--

`animation-duration`

---

`animation-delay`

---

`animation-iteration-count`

#### --answer--

`animation-timing-function`

### --question--

#### --text--

What should developers consider when implementing animations to maintain accessibility?

#### --distractors--

Using only JavaScript for all animations

---

Adding as many animations as possible for engagement

---

Using only large, unexpected movements

#### --answer--

Use purposeful animation, avoid sudden large motions, provide controls, and implement `prefers-reduced-motion`

### --question--

#### --text--

Which of the following is the correct syntax to slide an element in from the left?

#### --distractors--

```js
@keyframes slide-in {
  0    { transform: translate(-100%); }
  100  { transform: translate(0); }
}
```

---

```js
@keyframes slide-in {
  from { translateX(-100%); }
  to   { translateX(0); }
}
```

---

```js
@keyframes slide-in {
  start { transform: moveX(-100%); }
  end   { transform: moveX(0); }
}
```

#### --answer--

```js
@keyframes slide-in {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
```
