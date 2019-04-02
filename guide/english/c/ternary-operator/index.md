---
title: Ternary Operator
---

## Ternary Operator

The ternary operator in C is a shorthand for simple **if/else** statements. 

It takes three arguments:
1. An condition
2. The result if the condition evaluates to true
3. The result if the condition evaluates to false

### Syntax

`condition ? value_if_true : value_if_false`

`value_if_true` and `value_if_false` must have the same type, and must be simple expressions not full statements.

### Example

Here's an example without the ternary operator:

```c
int a = 10, b = 20, c;

if (a < b) {
    c = a;
}
else {
    c = b;
}

printf("%d", c);
```

Here's the above example re-written to use the **ternary operator**:

```c
int a = 10, b = 20, c;

c = (a < b) ? a : b;

printf("%d", c);
```

Both examples will output:

```c
10
```

`c` is set equal to `a` (10), because the condition `a < b` was true.


### Nested Example

The ternary operator can also be nested.

Consider this nested if-else statement :
```c
int a = 1, b = 2, ans;
if (a == 1) {
    if (b == 2) {
        ans = 3;
    } else {
        ans = 5;
    }
} else {
    ans = 0;
}
printf ("%d\n", ans);
```

Here's the above code re-written using nested ternary operators:

```c
int a = 1, b = 2, ans;
ans = (a == 1 ? (b == 2 ? 3 : 5) : 0);
printf ("%d\n", ans);
```

The output of both of the above code snippets will be:

```c
3
```
