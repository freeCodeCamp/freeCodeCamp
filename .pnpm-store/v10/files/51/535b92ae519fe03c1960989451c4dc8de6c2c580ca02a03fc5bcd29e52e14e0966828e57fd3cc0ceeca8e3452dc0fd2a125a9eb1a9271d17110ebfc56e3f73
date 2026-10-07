# Copy-tex extension

This extension modifies the copy/paste behavior in any browser supporting the
[Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent)
so that, when selecting and copying KaTeX-rendered elements, the text
content of the resulting clipboard renders KaTeX elements as their LaTeX source
surrounded by specified delimiters.  (The HTML content of the resulting
clipboard remains the selected HTML content, as it normally would.)
The default delimiters are `$...$` for inline math and `$$...$$` for display
math, but you can easy switch them to e.g. `\(...\)` and `\[...\]` by
modifying `copyDelimiters` in [the source code](copy-tex.js).
Note that a selection containing part of a KaTeX formula gets extended to
include the entire KaTeX formula.

## Usage

This extension isn't part of KaTeX proper, so the script should be separately
included in the page.

```html
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/contrib/copy-tex.min.js" integrity="sha384-Pe2JWbaShhSRT0SESJ9XLPeAsi4yrNi7r/CiH0Coq7giBjK5a6Ae7XcybE8rNlQP" crossorigin="anonymous"></script>
```

(Note that, as of KaTeX 0.16.0, there is no longer a corresponding CSS file.)

See [index.html](index.html) for an example.
(To run this example from a clone of the repository, run `yarn start`
in the root KaTeX directory, and then visit
http://localhost:7936/contrib/copy-tex/index.html
with your web browser.)

If you want to build your own custom copy handler based on this one,
copy the `copy-tex.js` into your codebase and replace the `require`
statement with `require('katex/contrib/copy-tex/katex2tex.js')`.

ECMAScript module is also available:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/contrib/copy-tex.mjs" integrity="sha384-PTy3nbMSATx5Ifo/k1ErbnbMVEp3koLGaqTD+zBo5H0fPFue/mKr1M3//74Fu6Tf" crossorigin="anonymous"></script>
```
