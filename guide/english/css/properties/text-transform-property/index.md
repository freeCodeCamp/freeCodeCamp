---
title: Text Transform Property
---
## Text Transform Property

The `text-transform` property in CSS controls text case and capitalization and allows such control without being dependent of the original text that is written.

The most commonly used values for this property are `lowercase`, `uppercase` and `capitalize`. 

```
<style>
.lowercased {
  text-transform: lowercase;
}

.uppercased {
  text-transform: uppercase;
}

.capitalized {
  text-transform: capitalize;
}
</style>

<p class="uppercased">this text was lowercase.</p> <!-- = THIS TEXT WAS LOWERCASE. -->
<p class="lowercased">THIS TEXT WAS UPPERCASE.</p> <!-- = this text was uppercase. -->
<p class="capitalized">this text wasn't capitalized.</p> <!-- = This Text Wasn't Capitalized. -->
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

[CSS-tricks](https://css-tricks.com/almanac/properties/t/text-transform/)


