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

