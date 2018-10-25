---
title: Add Different Margins to Each Side of an Element
---
## Add Different Margins to Each Side of an Element

To adjust the margins of an element use:

```css
.example {
  margin: 10px;
}
```

To specify margins sizes on an element by individual sides we can use 'margin-top', 'margin-right', 'margin-bottom', and 'margin left'. We can use any of these in combination and in any order. For example:

```css
.example {
  margin-top: 5px;
  margin-bottom: 0px;
}
```

Or:

```css
.example {
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 5px;
}
```

## Margin - Shorthand property

It is generally preferred to write code in a concise manner using the margin shorthand property. It utilizes the individual margin top, right, bottom and left values in a single line instead of multiple lines of code.

Note: The shorthand property takes values in the clock-wise order, meaning top -> right -> bottom -> left

Example #1 : If the margin property has 4 values:

```css
.example {
  margin-top: 20px;
  margin-right: 5px;
  margin-bottom: 15px;
  margin-left: 25px;
}
```

It can be re-written using shorthand margin property as:

```css
.example {
  margin: 20px 5px 15px 25px;
}
```

Example #2 : If the margin property has 3 values:

```css
.example {
  margin-top: 20px;
  margin-right: 25px;
  margin-bottom: 15px;
}
```

It can be re-written using shorthand margin property as:

```css
.example {
  margin: 20px 25px 15px;
}
```

Example #3 : If the margin property has 2 values:

```css
.example {
  margin-top: 20px;
  margin-right: 15px;
}
```

It can be re-written using shorthand margin property as:

```css
.example {
  margin: 20px 15px;
}
```

Example #4 : If the margin property has 1 value:

```css
.example {
  margin-top: 20px;
}
```

It can be re-written using shorthand margin property as:

```css
.example {
  margin: 20px;
}
```
