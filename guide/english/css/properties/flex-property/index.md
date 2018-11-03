---
title: Flex Property
---
## Flex Property

`flex` property is a shorthand to specify a flexible item's size. `flex-grow`, `flex-shrink` and `flex-basis` can be specified within this shorthand property.

**This property has no effect if the element is not a `flex-item`**. Flex item is an element that is a direct child of a container parent with display property as `flex` or `inline-flex`. 

## Syntax

Possible variations in syntax listed below. `flex-grow` and `flex-shrink` take a whole number as value. `flex-basis` takes regular size units such as px, em, rem...etc.

```css
flex: <flex-grow> <flex-shrink> <flex-basis>;
flex: <flex-basis>;
flex: <flex-grow>;
flex: <flex-grow> <flex-basis>;
flex: <flex-grow> <flex-shrink>;
```

`flex-basis` specifies the size of the element along main axis. Within a container, the main axis is defined by `flex-direction`. The main axis is horizontal when `flex-direction` is `row`. Vertical when the `flex-direction` is `column`.

`flex-basis: 20px` would set initial width of the element to `20px` if the `flex-direction` is `row`. The same `flex-basis` would apply to height if the `fle-direction` is `column`.

`flex: 20px` would automatically mean `flex-basis: 20px`, as the shorthand property has only `flex-basis` as the property that can take a value with unit.

`flex: 2` specifies `flex-grow: 2` and the element would grow twice longer/taller than other elements with `flex-grow: 1`.

`flex: 1 2` specifies `flex-grow: 1` and `flex-shrink: 2`. The element grows to take up empty space in proportion with other elements with `flex-grow: 1` but shrinks twice as smaller when compared other elements with `flex-shrink: 1` when pressed against space.

### More Information

* `flex` property reference on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
