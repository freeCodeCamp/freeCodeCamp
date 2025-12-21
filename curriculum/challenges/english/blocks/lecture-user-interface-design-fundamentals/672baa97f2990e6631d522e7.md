---
id: 672baa97f2990e6631d522e7
title: How Do You Create Good Background and Foreground Contrast in Your Designs?
challengeType: 19
dashedName: how-do-you-create-good-background-and-foreground-contrast-in-your-designs
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

First, you may need to familiarize yourself with contrast. Contrast is the difference between two colors - or how easy it is to tell them apart.

Colors with a higher contrast will be more visually distinct, whereas colors with a lower contrast will be more visually similar. For example, black and white have a very high contrast ratio. Whereas light blue and light purple have less of a contrast.

:::interactive_editor

```html
<style>
  .example {
    padding: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .high-contrast {
    background-color: black;
    color: white;
  }

  .low-contrast {
    background-color: #add8e6; 
    color: #dda0dd; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>

<div class="example high-contrast">
  <div class="label">High Contrast</div>
  This text has high contrast (black background and white text).
</div>

<div class="example low-contrast">
  <div class="label">Low Contrast</div>
  This text has low contrast (light blue background and light purple text).
</div>
```

:::

Of course, in these examples the distinction might be made clearer because of the layout. But what about applying these colors to text? You can have the high contrast black text on a white background. And the low contrast purple text on a blue background.

:::interactive_editor

```html
<style>
  .text-example {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .text-high-contrast {
    background-color: white;
    color: black;
  }

  .text-low-contrast {
    background-color: #add8e6; 
    color: #dda0dd; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
</style>

<div class="text-example text-high-contrast">
  <span class="label">High Contrast Text</span>
  This is high contrast text: black text on a white background.
</div>

<div class="text-example text-low-contrast">
  <span class="label">Low Contrast Text</span>
  This is low contrast text: purple text on a light blue background.
</div>
```

:::

But how do you determine what is a "good enough" contrast? You can't base it solely on how the text looks to you, as every user will have a different experience. Thankfully, the Web Content Accessibility Guidelines, or WCAG, provide a standard for this. 

Text with a contrast ratio of 4.5:1 is considered the AA standard, which is the bare minimum you should follow to be accessible to most users. Text with a contrast ratio of 7:1 is considered the AAA standard, and ensures the best level of accessibility.

:::interactive_editor

```html
<style>
  .contrast-example {
    padding: 15px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .aa-contrast {
    background-color: #ffffff; 
    color: #4b4b4b; 
  }

  .aaa-contrast {
    background-color: #ffffff; 
    color: #1a1a1a; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
</style>

<div class="contrast-example aa-contrast">
  <span class="label">AA Standard (Contrast Ratio ~4.5:1)</span>
  This text meets the minimum accessibility standard for contrast.
</div>

<div class="contrast-example aaa-contrast">
  <span class="label">AAA Standard (Contrast Ratio ~7:1)</span>
  This text meets the highest accessibility standard for contrast.
</div>
```

:::

There are a number of websites that can check the contrast ratio between two colors, but most browsers will allow you to do this directly in the developer tools on your website.

Let's take a look at a few more examples of contrast ratio to better understand the concept. 

Here is an example of black text on a white background which has a contrast ratio of 21:1.

:::interactive_editor

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This is black text on a white background, which has the highest contrast ratio of 21:1.
</div>
```

:::

This example more than meets the AAA standard. Now, let's take a look at purple text on a blue background.

:::interactive_editor

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .purple-on-blue {
    background-color: #0000cc;
    color: #800080; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="purple-on-blue">
  <span class="label">Purple on Blue (Lower Contrast)</span>
  This doesn't meet the AA standard.
</div>
```

:::

This example has a contrast ratio of 1.48:1 which does not even meet the AA standard.

How can you fix this? Well, there are three aspects that impact the contrast ratio.

The first is the hue, which represents the general color type, like red, blue, orange. Let's shift to a hue that is further away from blue. In this case, let's use red.

:::interactive_editor

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .red-on-blue {
    background-color: #0000cc; 
    color: #ff0000; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="red-on-blue">
  <span class="label">Red on Blue (Higher Contrast Hue Shift)</span>
  This doesn't meet accessibility standards.
</div>
```

:::

Unfortunately, this change only brought the contrast ratio to 1.49:1,  which means you need to change the saturation, or the "amount" of color present. Let's increase the amount of red in the text. That brings us much closer to the goal, with a 3.54:1 contrast ratio.

:::interactive_editor

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .low-sat-red-on-blue {
    background-color: #0000cc; 
    color: #b23333; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .high-sat-red-on-blue {
    background-color: #0000cc; 
    color: #ff4d4d;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="low-sat-red-on-blue">
  <span class="label">Low Saturation Red on Blue (Contrast ~1.49:1)</span>
  This red has low saturation, resulting in a poor contrast ratio.
</div>

<div class="high-sat-red-on-blue">
  <span class="label">Higher Saturation Red on Blue (Contrast ~3.54:1)</span>
  Increasing the saturation of red improves contrast but it’s still below AA standard.
</div>
```

:::

However, you can potentially get even closer by changing the last value, which is lightness. Lightness represents how much white is present in the color.

Let's decrease the lightness of the red. Now there is a much darker red against the light blue background, which brings the contrast ratio to 10.34:1.

:::interactive_editor

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .blue-bg {
    background-color: #add8e6; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .low-sat-red-on-blue {
    background-color: #0000cc; 
    color: #b23333;
    margin-bottom: 20px;
  }

  .high-sat-red-on-blue {
    background-color: #0000cc; 
    color: #ff4d4d; 
    margin-bottom: 20px;
  }
  
  .dark-red-on-light-blue {
    background-color: #add8e6; 
    color: #8b0000;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="low-sat-red-on-blue blue-bg">
  <span class="label">Low Saturation Red on Medium Blue (Contrast ~1.49:1)</span>
  This red has low saturation, resulting in a poor contrast ratio.
</div>

<div class="high-sat-red-on-blue blue-bg">
  <span class="label">Higher Saturation Red on Medium Blue (Contrast ~3.54:1)</span>
  Increasing the saturation of red improves contrast but it’s still below AA standard.
</div>

<div class="dark-red-on-light-blue">
  <span class="label">Darker Red on Light Blue (Contrast ~10.34:1)</span>
  Decreasing the lightness of the red increases the contrast ratio significantly.
</div>
```

:::

You could continue to adjust the colors to find the balance between the visual effect you want and an accessible contrast ratio. But it is important to remember that accessibility should always take precedence.

# --questions--

## --text--

What is contrast in the context of web design?

## --answers--

The brightness of colors on a webpage.

### --feedback--

Think about how the lesson defines contrast in relation to colors.

---

The difference between two colors and how easily they can be distinguished.

---

The number of colors used on a webpage.

### --feedback--

Think about how the lesson defines contrast in relation to colors.

---

The sharpness of images on a webpage.

### --feedback--

Think about how the lesson defines contrast in relation to colors.

## --video-solution--

2

## --text--

According to the Web Content Accessibility Guidelines (WCAG), what is the minimum contrast ratio for text to meet the AA standard? 

## --answers--

3:1

### --feedback--

Recall the specific numbers mentioned for different accessibility standards.

---

4.5:1

---

7:1

### --feedback--

Recall the specific numbers mentioned for different accessibility standards.

---

21:1

### --feedback--

Recall the specific numbers mentioned for different accessibility standards.

## --video-solution--

2

## --text--

Which of the following is NOT mentioned as an aspect that impacts the contrast ratio? 

## --answers--

Hue

### --feedback--

Remember the three aspects discussed in the lesson that can be adjusted to improve contrast.

---

Saturation

### --feedback--

Remember the three aspects discussed in the lesson that can be adjusted to improve contrast.

---

Lightness

### --feedback--

Remember the three aspects discussed in the lesson that can be adjusted to improve contrast.

---

Opacity

## --video-solution--

4
