---
title: Add Different Padding to Each Side of an Element
---
## Add Different Padding to Each Side of an Element


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

To adjust the padding of an element use:

```css
.example {
  padding: 10px;
}
```

To specify padding sizes on an element by individual sides we can use ‘padding-top’, ‘padding-right’, ‘padding-bottom’, and ‘padding-left’. We can use any of these in combination and in any order. For example:

```css
.example {
  padding-top: 5px;
  padding-bottom: 0px;
}
```

Or:

```css
.example {
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 5px;
}
```

## Padding - Shorthand property

It is generally preferred to write code in a concise manner using the padding shorthand property. It utilizes the individual padding top, right, bottom and left values in a single line instead of multiple lines of code.

Note: The shorthand property takes values in the clock-wise order, meaning top -> right -> bottom -> left

Example #1 : If the padding property has 4 values:

```css
.example {
  padding-top: 20px;
  padding-right: 5px;
  padding-bottom: 15px;
  padding-left: 25px;
}
```

It can be re-written using shorthand padding property as:

```css
.example {
  padding: 20px 5px 15px 25px;
}
```

Example #2 : If the padding property has 3 values:

```css
.example {
  padding-top: 20px;
  padding-right: 25px;
  padding-bottom: 15px;
  padding-left: 25px;
}
```

It can be re-written using shorthand padding property as:

```css
.example {
  padding: 20px 25px 15px;
}
```

Example #3 : If the padding property has 2 values:

```css
.example {
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
}
```

It can be re-written using shorthand padding property as:

```css
.example {
  padding: 20px 15px;
}
```

Example #4 : If the padding property has 1 value:

```css
.example {
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
```

It can be re-written using shorthand padding property as:

```css
.example {
  padding: 20px;
}
```
