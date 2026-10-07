# mhchem extension

This extension adds to KaTeX the `\ce` and `\pu` functions from the [mhchem](https://mhchem.github.io/MathJax-mhchem/) package.

### Usage

This extension isn't part of core KaTeX, so the script should be separately included. Write the following line into the HTML page's `<head>`. Place it *after* the line that calls `katex.js`, and if you make use of the [auto-render](https://katex.org/docs/autorender.html) extension, place it *before* the line that calls `auto-render.js`.

```html
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/contrib/mhchem.min.js" integrity="sha384-fB8BH//9nBzROkMUsu/Dr35jWHIbnKesUo9rW0hfEgw8mZGnkAyBAjKX9F98OVuo"  crossorigin="anonymous"></script>
```

If you remove the `defer` attribute from this tag, then you must also remove the `defer` attribute from the `<script src="https://../katex.min.js">` tag.

### Syntax

See the [mhchem Manual](https://mhchem.github.io/MathJax-mhchem/) for a full explanation of the input syntax, with working examples. The manual also includes a demonstration box.

Note that old versions of `mhchem.sty` used `\cf` for chemical formula and `\ce` for chemical equations, but `\cf` has been deprecated in place of `\ce`. This extension supports only `\ce`. You can define a macro mapping `\cf` to `\ce` if needed.

### Browser Support

This extension has been tested on Chrome, Firefox, Opera, and Edge.
