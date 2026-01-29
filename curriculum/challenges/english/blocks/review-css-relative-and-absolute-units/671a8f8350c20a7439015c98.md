---
id: 671a8f8350c20a7439015c98
title: CSS Relative and Absolute Units Review
challengeType: 31
dashedName: review-css-relative-and-absolute-units
---

# --interactive--

## Absolute Units

- **`px` (Pixels)**: This absolute unit is a fixed-size unit of measurement in CSS. It is the most common absolute unit and provides precise control over dimensions. `1px` is always equal to 1/96th of an inch.
- **`in` (Inch)**: This absolute unit is equal to 96px.
- **`cm` (Centimeters)**: This absolute unit is equal to 25.2/64 of an inch.
- **`mm` (Millimeters)**: This absolute unit is equal to 1/10th of a centimeter.
- **`q` (Quarter-Millimeters)**: This absolute unit is equal to 1/40th of a centimeter.
- **`pc` (Picas)**: This absolute unit is equal to 1/6th of an inch.
- **`pt` (Points)**: This absolute unit is equal to 1/72th of an inch.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="units">
  <div class="unit px">px</div>
  <div class="unit inch">in</div>
  <div class="unit cm">cm</div>
  <div class="unit mm">mm</div>
  <div class="unit q">q</div>
  <div class="unit pc">pc</div>
  <div class="unit pt">pt</div>
</div>
```

```css
.units {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-end;
}

.unit {
  background: steelblue;
  color: white;
  text-align: center;
  padding: 4px;
}

.px {
  width: 40px;
  height: 40px;
}

.inch {
  width: 0.5in;
  height: 0.5in;
}

.cm {
  width: 1cm;
  height: 1cm;
}

.mm {
  width: 10mm;
  height: 10mm;
}

.q {
  width: 40q;
  height: 40q;
}

.pc {
  width: 6pc;
  height: 6pc;
}

.pt {
  width: 36pt;
  height: 36pt;
}
```

:::

## Relative Units

- **Percentages**: These relative units allow you to define sizes, dimensions, and other properties as a proportion of their parent element. For example, if you set `width: 50%;` on an element, it will occupy half the width of its parent container. 
- **`em` Unit**: These units are relative to the font size of the element. If you are using `ems` for the `font-size` property, the size of the text will be relative to the font size of the parent element.
- **`rem` Unit**: These units are relative to the font size of the root element, which is the `html` element. 
- **`vh` Unit**: `vh` stands for `"viewport height"` and `1vh` is equal to 1% of the viewport's height.
- **`vw` Unit**: `vw` stands for `"viewport width"` and `1vw` is equal to 1% of the viewport's width.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="parent">
  <div class="box percent">50%</div>
  <div class="box em">2em</div>
  <div class="box rem">2rem</div>
  <div class="box vh">10vh</div>
  <div class="box vw">10vw</div>
</div>
```

```css
html {
  font-size: 16px;
}

.parent {
  width: 200px;
  font-size: 20px;
  border: 2px dashed #555;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.box {
  background: seagreen;
  color: white;
  text-align: center;
  padding: 6px;
}

.percent {
  width: 50%;
}

.em {
  font-size: 2em;
}

.rem {
  font-size: 2rem;
}

.vh {
  height: 10vh;
}

.vw {
  width: 10vw;
}
```

:::

## `calc` Function

- **`calc()` Function**: With the `calc()` function, you can perform calculations directly within your stylesheets to determine property values dynamically. This means that you can create flexible and responsive user interfaces by calculating dimensions based on the viewport size or other elements.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="calc-box">calc()</div>
```

```css
.calc-box {
  width: calc(100% - 40px);
  padding: 10px;
  background: steelblue;
  color: white;
  text-align: center;
  border: 2px solid black;
}
```

:::

# --assignment--

Review the CSS Relative and Absolute Units topics and concepts.
