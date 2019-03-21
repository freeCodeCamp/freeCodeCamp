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

// 1 2 3
```

* For - to loop:
```sass
@for $i from 1 to 3 {
  // some CSS
}

// 1 2
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
Always use `$i` as a variable name to stick to the usual convention and unless you have a really good reason to, never use the `to` keyword: always use `through`. Many developers do not even know Sass offers this variation; using it might lead to confusion.

Also be sure to respect those guidelines to preserve readability:

* Always an empty new line before `@for`;
* Always an empty new line after the closing brace (}) unless the next line is a closing brace (}).

## Solution
```sass
<style type='text/sass'>
  @for $j from 1 through 5 {
    .text-#{$j} { font-size: 10px * $j; }
  }
  
  
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

The solution above will generate the following CSS:

```css
.text-1 {
  font-size: 10px;
}

.text-2 {
  font-size: 20px;
}

.text-3 {
  font-size: 30px;
}

.text-4 {
  font-size: 40px;
}

.text-5 {
  font-size: 50px;
}

```

