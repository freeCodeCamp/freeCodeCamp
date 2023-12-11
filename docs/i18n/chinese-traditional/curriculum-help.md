# Using the Curriculum Helpers

The test runner has access to a few helpers that can assist with testing campers' code.

## CSS Helper

To instantiate the helper within a test block, use this:

```js
const helper = new __helpers.CSSHelp(document);
```

In that example, the `document` variable refers to the document object of the test runner's iframe.

### Methods

There are a few methods available for parsing and testing CSS.

#### `.getStyle()`

The `.getStyle()` method takes a CSS selector and returns a CSS style declaration object.

For example, if the camper has written the following CSS:

```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
```

You would get an object that looks like this:

```js
{
    0: "background-image",
    1: "background-position-x",
    2: "background-position-y",
    3: "background-size",
    4: "background-repeat-x",
    5: "background-repeat-y",
    6: "background-attachment",
    7: "background-origin",
    8: "background-clip",
    9: "background-color",
    10: "margin-top",
    11: "margin-right",
    12: "margin-bottom",
    13: "margin-left",
    14: "padding-top",
    15: "padding-right",
    16: "padding-bottom",
    17: "padding-left",
    18: "width",
    19: "height",
    20: "overflow-x",
    21: "overflow-y",
    "accentColor": "",
    "additiveSymbols": "",
    "alignContent": "",
    "alignItems": "",
    ...
}
```

This method allows you to test that specific properties have been set:

```js
assert.strictEqual(helper.getStyle('body')?.width, '100%');
```

The helper attaches a `.getPropVal()` method to the style declaration object that allows you to get the value of a specific property:

```js
assert.strictEqual(helper.getStyle('body').getPropVal('width'), '100%');
```

#### `.getCSSRules()`

The `.getCSSRules()` takes an at-rule type from the union `media | fontface | import | keyframes`, and returns an array of CSS rules matching that at-rule.

For example, if the camper has written the following code:

```css
@media (max-width: 100px) {
  body {
    background-color: green;
  }
}
```

Then the returned value of `helper.getCSSRules('media')` would be this array:

```js
[
    {
        conditionText: "(max-width: 100px)",
        cssRules: [
            selectorText: 'body',
            style: CSSStyleDeclaration,
            styleMap: StylePropertyMap,
            cssRules: CSSRuleList,
            type: 1,
            ...
        ],
        cssText: "@media (max-width: 100px) {\n  body { background-color: green; }\n}",
        ...
    }
]
```

You can then test that the camper has written the correct media query:

```js
const hasCorrectHeight = helper.getCSSRules('media').some(x => x.style.height === '3px');;
assert.isTrue(hasCorrectHeight);
```

#### `.getRuleListsWithinMedia()`

The `.getRuleListsWithinMedia()` method takes a media text (e.g. `("max-width: 200")`) and returns the CSS rules within that media query.

The return result is the equivalent of that media rule's `cssRules` property from the return value of `.getCSSRules("media")`.

### Less Frequent Methods

These methods are not as commonly used, but are available if needed.

#### `.getStyleDeclarations()`

The `.getStyleDeclarations()` method takes a CSS selector and returns an array of CSS style declaration objects (from the `.getStyle()` method).

#### `.isPropertyUsed()`

The `.isPropertyUsed()` method takes a CSS **property** and checks if it has been set/used anywhere in the camper's CSS.

#### `.getStyleRule()`

The `.getStyleRule()` method takes a CSS selector and returns the CSS Style Declaration, much like `.getStyle()`. However, the declaration returned from this method includes an additional `.isDeclaredAfter()` method which takes a selector and returns whether this rule is declared after the selector passed in.

#### `.getStyleSheet()`

The `.getStyleSheet()` method returns the camper's CSS, parsed into a CSS Style Sheet object.

## Strip Content

There are a few methods on the `__helpers` object to remove content from the camper's code.

These do NOT need to be instantiated they are static methods.

### Removing Comments

Using `__helpers.removeCssComments()`, `__helpers.removeHTMLComments()`, or `__helpers.removeJSComments()` allows you to pass the camper's code (through the `code` variable) to remove comments matching the language's comment syntax.

### Removing Whitespace

Using `__helpers.removeWhitespace()` allows you to pass the camper's code (through the `code` variable) to remove all whitespace.
