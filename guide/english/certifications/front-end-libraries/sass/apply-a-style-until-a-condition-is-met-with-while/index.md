---
title: Apply a Style Until a Condition is Met with @while
---

# Apply a Style Until a Condition is Met with @while

---
## Problem Explanation

This program is very simple, the trick is to remember how while looping works.


---
## Hints

### Hint 1

*   **Make sure your zoom settings are at `100%` or `default` otherwise tests sometimes fail. **

### Hint 2

*   You will initialise the loop first with x as: `$x: 1`


### Hint 3

*   See the example for `@while` syntax, `@while $x < 11`


### Hint 4

*   to set class properties inside a loop we reference them enclosed by #{}, hence ere it will become: `.text-#{$x}`


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```scss
$x: 1;
@while $x < 11 {
  .text-#{$x} { 
    font-size: 5px * $x;
  }
  $x: $x + 1;
}
```

#### Relevant Links

*   <a href='https://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_' target='_blank' rel='nofollow'>Interpolation</a>
*   <a href='https://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_' target='_blank' rel='nofollow'>Variables</a>
*   <a href='https://sass-lang.com/documentation/file.SASS_REFERENCE.html#while' target='_blank' rel='nofollow'>while loops</a>

</details>
