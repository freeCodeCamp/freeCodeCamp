---
id: 671a90c1cf517678b130419e
title: CSS Colors Review
challengeType: 31
dashedName: review-css-colors
---

# --interactive--

## Color Theory

- **Color Theory Definition**: This is the study of how colors interact with each other and how they affect our perception. It covers color relationships, color harmony, and the psychological impact of color.
- **Primary Colors**: These colors which are yellow, blue, and red, are the fundamental hues from which all other colors are derived.
- **Secondary Colors**: These colors result from mixing equal amounts of two primary colors. Green, orange, and purple are examples of secondary colors.
- **Tertiary Colors**: These colors result from combining a primary color with a neighboring secondary color. Yellow-Green, Blue-Green, and Blue-Violet are examples of tertiary colors.
- **Warm Colors**: These colors which include reds, oranges, and yellows, evoke feelings of comfort, warmth, and coziness.
- **Cool Colors**: These colors which include blues, green, and purples, evoke feelings of calmness, serenity, and professionalism.
- **Color Wheel**: The color wheel is a circular diagram that shows how colors relate to each other. It's an essential tool for designers because it helps them to select color combinations.
- **Analogous Color Schemes**: These color schemes create cohesive and soothing experiences. They have analogous colors, which are adjacent to each other in the color wheel.
- **Complementary Color Schemes**: These color schemes create high contrast and visual impact. Their colors are located on the opposite ends of the color wheel, relative to each other.
- **Triadic Color Scheme**: This color scheme has vibrant colors. They are made from colors that are approximately equidistant from each other. If they are connected, they form an equilateral triangle on the color wheel.
- **Monochromatic Color Scheme**: For this color scheme, all the colors are derived from the same base color by adjusting its lightness, darkness, and saturation. This evokes a feeling of unity and harmony while still creating contrast.

## Different Ways to Work with Colors in CSS

- **Named Colors**: These colors are predefined color names recognized by browsers. Examples include `blue`, `darkred`, `lightgreen`.
- **`rgb()` Function**: RGB stands for Red, Green, and Blue — the primary colors of light. These three colors are combined in different intensities to create a wide range of colors. the `rgb()` function allows you to define colors using the RGB color model.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p>RGB Color</p>
```

```css
p {
  color: rgb(255, 0, 0);
}
```

:::

- **`rgba()` Function**: This function adds a fourth value, alpha, that controls the transparency of the color. If not provided, the alpha value defaults to `1`.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div>RGBA Background</div>
```

```css
div {
  background-color: rgba(0, 0, 255, 0.5);
}
```

:::

- **`hsl()` Function**: HSL stands for Hue, Saturation, and Lightness — three key components that define a color. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<p>HSL Color</p>
```

```css
p {
  color: hsl(120, 100%, 50%);
}
```

:::

- **`hsla()` Function**: This function adds a fourth value, alpha, that controls the opacity of the color.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div>HSLA Background</div>
```


```css
div {
  background-color: hsla(0, 100%, 50%, 0.5);
}
```

:::

- **Hexadecimal**: A hex code (short for hexadecimal code) is a six-character string used to represent colors in the RGB color model. The "hex" refers to the base-16 numbering system, which uses digits 0 to 9 and letters A to F. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<h1 class="hex-text">Hex Text</h1>
<p class="hex-bg">Hex Background</p>
```

```css
h1 {
  color: #FF5733; /* A reddish-orange color */
}

p {
  background-color: #4CAF50; /* A shade of green */
}
```

:::

## The `box-shadow` Property

- **Definition**: The `box-shadow` property applies one or more shadows around an element.
- **Offset Values**: You must specify horizontal (`offset-x`) and vertical (`offset-y`) values. Positive `offset-x` moves the shadow to the right, while negative values move it to the left. Positive `offset-y` moves the shadow down, while negative values move it up. If a value is `0`, you do not need to include a unit.
- **Blur Radius**: This optional value controls how blurry the shadow appears. If not included, it defaults to `0`, which creates sharp edges. The higher the value, the softer the shadow.
- **Spread Radius**: This optional value controls how much the shadow expands or shrinks. If not included, it defaults to `0`.
- **Shadow Color**: You can specify the color using named colors, hex values, `rgb()`, `rgba()`, `hsl()`, or `hsla()` functions.
- **`inset` Keyword**: Adding the `inset` keyword places the shadow inside the element instead of outside.
- **Applying Multiple Box Shadows**: You can apply multiple shadows by separating them with commas. Shadows are layered from front to back.

### Syntax

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="shadow-box">Shadow Color Example</div>
```

```css
.shadow-box {
  width: 200px;
  padding: 20px;
  background-color: lightblue;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

:::

## Linear and Radial Gradients 

- **Linear Gradients**: These gradients create a gradual blend between colors along a straight line. You can control the direction of this line using keywords like `to top`, `to right`, `to bottom right`, or angles like `45deg`. You can use any valid CSS color and as many color stops as you would like.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="linear-gradient">Linear Gradient</div>
```

```css
.linear-gradient {
  background: linear-gradient(45deg, red, #33FF11, rgba(100, 100, 255, 0.5));
  height: 40vh;
}
```

:::

- **Radial Gradients**: These gradients create circular or elliptical gradients that radiate from a central point.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="radial-gradient">Radial Gradient</div>
```

```css
.radial-gradient {
  background: radial-gradient(circle, red, blue);
  height: 40vh;
}
```

:::

# --assignment--

Review the CSS Colors topics and concepts.
