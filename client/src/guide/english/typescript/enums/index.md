---
title: Enums
---

## Enums

Developers can use `Enums` to define a set of named constants.

There are two types of `Enums`

1. numeric
1. string-based

```typescript
// numeric enum
enum NumericEnum {
    numeric1 = 1,
    numeric2,
    numeric3,
    numeric4,
}

// string based enum
enum StringBasedEnum {
    Programming = "is fun",
    Pizza = "is good"
}

// Heterogeneous based enum
enum HeterogeneousBasedEnum {
    Day = 2,
    Pizza = "is good"
}


```

Like Constants Enums are ready only. its imperative to understand that the benefit of using an Enum vs a Constant is it allow developers to organize collections of related values.
