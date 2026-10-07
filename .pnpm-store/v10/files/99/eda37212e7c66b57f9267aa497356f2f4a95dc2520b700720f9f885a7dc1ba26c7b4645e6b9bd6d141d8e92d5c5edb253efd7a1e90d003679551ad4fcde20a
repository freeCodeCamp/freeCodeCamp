# `math/tex` Custom Script Type Extension

This is an extension to automatically display code inside `script` tags with `type=math/tex` using KaTeX.
This script type is commonly used by MathJax, so this can be used to support compatibility with MathJax.

### Usage

This extension isn't part of KaTeX proper, so the script should be separately
included in the page, in addition to KaTeX.

Load the extension by adding the following line to your HTML file.

```html
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/contrib/mathtex-script-type.min.js" integrity="sha384-Va76RKpsqLRTaW8meIebMfcIo7cxNDc0uKaZNSuZzckwzNtDa3Xf77LciJ0CAjIC" crossorigin="anonymous"></script>
```
You can download the script and use it locally, or from a local KaTeX installation instead.

For example, in the following simple page, we first load KaTeX as usual.
Then, in the body, we use a `math/tex` script to typeset the equation `x+\sqrt{1-x^2}`.


```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.css" integrity="sha384-UA8juhPf75SzzAMA/4fo3yOU7sBJ0om7SCD2GHq0fZqZco6tr1UCV7nUbk9J90JM" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.js" integrity="sha384-Tt7wBxLKwSzFVRET4O4U9H6v8MNaQ/CjN2FMP4xFm0ErrFu6aNqoonRVW5W40iGI" crossorigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/contrib/mathtex-script-type.min.js" integrity="sha384-Va76RKpsqLRTaW8meIebMfcIo7cxNDc0uKaZNSuZzckwzNtDa3Xf77LciJ0CAjIC" crossorigin="anonymous"></script>
    </head>
    <body>
        <script type="math/tex">x+\sqrt{1-x^2}</script>
    </body>
</html>
```

ECMAScript module is also available:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/contrib/mathtex-script-type.mjs" integrity="sha384-NG25TLm9zCgNw3KKNK+Ks1i5zmDB4v17CYL2TVA06JcpsALdnFs/0TabnkhyjbQb" crossorigin="anonymous"></script>
