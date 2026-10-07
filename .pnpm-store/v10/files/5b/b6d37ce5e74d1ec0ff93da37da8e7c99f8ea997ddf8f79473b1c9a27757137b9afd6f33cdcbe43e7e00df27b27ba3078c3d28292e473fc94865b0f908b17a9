# fbjs-css-vars

This package exports a few of the CSS variables that we use in Facebook projects. This is not the full list we have internally but focused on making available the minimum set needed by our open source projects.

## Usage

There are almost no use cases where a product will use this module. It will primarily be consumed by one of the following:

### `cssVar`

This is a module that will read from the list we have here and return the corresponding value. Internally we transform this statically but we don't currently do that in our open source projects.

```js
React.render(
  <div style={{backgroundColor: cssVar('fbui-white')}} />,
  containerNode
);
```

### CSS

In order to directly sync out our internal CSS and have it parsed by browser, we need to apply some transforms like we do internally. One of those transforms will insert the variables we have available here. In the future we may make use of [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

```css
.class {
  background-color: var(fbui-white);
}
```

### Direct Usage

We're just exporting a JS Object so usage is straightforward.

```js
var fbCSSVars = require('fbjs-css-vars')

console.log(fbCSSVars['fbui-white']);
```
