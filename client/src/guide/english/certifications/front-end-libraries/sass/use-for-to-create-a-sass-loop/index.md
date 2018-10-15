---
title: Use @for to Create a Sass Loop
---
## Use @for to Create a Sass Loop

1. The basic syntax of `@for` loop in SASS:

* For - through loop:
```sass
@for $i from <start number> through <end number> {
  // some CSS
}
```
* For - to loop:
```sass
@for $i from <start number> to <end number> {
  // some CSS
}
```

Notice that the main difference is that "start to end" **excludes** the end number, and "start through end" **includes** the end number.
2. For example:

* For - through loop:
```sass
@for $i from 1 through 3 {
  // some CSS
}

// 1 2
```

* For - to loop:
```sass
@for $i from 1 to 3 {
  // some CSS
}

// 1 2 3
```

3. Guideline from [SASS Guideline](https://sass-guidelin.es/#loops)

The `@for` loop might be useful when combined with CSS’ `:nth-*` pseudo-classes. Except for these scenarios, prefer an `@each` loop if you have to iterate over something.

```sass
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
```
Always use `$i` as a variable name to stick to the usual convention and unless you have a really good reason to, never use the to keyword: always use through. Many developers do not even know Sass offers this variation; using it might lead to confusion.

Also be sure to respect those guidelines to preserve readability:

* Always an empty new line before `@for`;
* Always an empty new line after the closing brace (}) unless the next line is a closing brace (}).
