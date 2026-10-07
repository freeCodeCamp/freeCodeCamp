
<h1 align="center">
  HTM (Hyperscript Tagged Markup)
  <a href="https://www.npmjs.org/package/htm"><img src="https://img.shields.io/npm/v/htm.svg?style=flat" alt="npm"></a>
</h1>
<p align="center">
  <img src="https://i.imgur.com/0ph8dbS.png" width="572" alt="hyperscript tagged markup demo">
</p>

`htm` is **JSX-like syntax in plain JavaScript** - no transpiler necessary.

Develop with React/Preact directly in the browser, then compile `htm` away for production.

It uses standard JavaScript [Tagged Templates] and works in [all modern browsers].

## `htm` by the numbers:

🐣 **< 600 bytes** when used directly in the browser

⚛️ **< 500 bytes** when used with Preact _(thanks gzip 🌈)_

🥚 **< 450 byte** `htm/mini` version

🏅 **0 bytes** if compiled using [babel-plugin-htm]


## Syntax: like JSX but also lit

The syntax you write when using HTM is as close as possible to JSX:

- Spread props: `<div ...${props}>` instead of `<div {...props}>`
- Self-closing tags: `<div />`
- Components: `<${Foo}>` instead of `<Foo>` _(where `Foo` is a component reference)_
- Boolean attributes: `<div draggable />`


## Improvements over JSX

`htm` actually takes the JSX-style syntax a couple steps further!

Here's some ergonomic features you get for free that aren't present in JSX:

- **No transpiler necessary**
- HTML's optional quotes: `<div class=foo>`
- Component end-tags: `<${Footer}>footer content<//>`
- Syntax highlighting and language support via the [lit-html VSCode extension] and [vim-jsx-pretty plugin].
- Multiple root element (fragments): `<div /><div />`
- Support for HTML-style comments: `<div><!-- comment --></div>`

## Installation

`htm` is published to npm, and accessible via the unpkg.com CDN:

**via npm:**

```js
npm i htm
```

**hotlinking from unpkg:** _(no build tool needed!)_

```js
import htm from 'https://unpkg.com/htm?module'
const html = htm.bind(React.createElement);
```

```js
// just want htm + preact in a single file? there's a highly-optimized version of that:
import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
```

## Usage

If you're using Preact or React, we've included off-the-shelf bindings to make your life easier.
They also have the added benefit of sharing a template cache across all modules.

```js
import { render } from 'preact';
import { html } from 'htm/preact';
render(html`<a href="/">Hello!</a>`, document.body);
```

Similarly, for React:

```js
import ReactDOM from 'react-dom';
import { html } from 'htm/react';
ReactDOM.render(html`<a href="/">Hello!</a>`, document.body);
```

### Advanced Usage

Since `htm` is a generic library, we need to tell it what to "compile" our templates to.
You can bind `htm` to any function of the form `h(type, props, ...children)` _([hyperscript])_.
This function can return anything - `htm` never looks at the return value.

Here's an example `h()` function that returns tree nodes:

```js
function h(type, props, ...children) {
  return { type, props, children };
}
```

To use our custom `h()` function, we need to create our own `html` tag function by binding `htm` to our `h()` function:

```js
import htm from 'htm';

const html = htm.bind(h);
```

Now we have an `html()` template tag that can be used to produce objects in the format we created above.

Here's the whole thing for clarity:

```js
import htm from 'htm';

function h(type, props, ...children) {
  return { type, props, children };
}

const html = htm.bind(h);

console.log( html`<h1 id=hello>Hello world!</h1>` );
// {
//   type: 'h1',
//   props: { id: 'hello' },
//   children: ['Hello world!']
// }
```

If the template has multiple element at the root level
the output is an array of `h` results:

```js
console.log(html`
  <h1 id=hello>Hello</h1>
  <div class=world>World!</div>
`);
// [
//   {
//     type: 'h1',
//     props: { id: 'hello' },
//     children: ['Hello']
//   },
//   {
//     type: 'div',
//     props: { class: 'world' },
//     children: ['world!']
//   }
// ]
```

### Caching

The default build of `htm` caches template strings, which means that it can return the same Javascript object at multiple points in the tree. If you don't want this behaviour, you have three options:

* Change your `h` function to copy nodes when needed.
* Add the code `this[0] = 3;` at the beginning of your `h` function, which disables caching of created elements.
* Use `htm/mini`, which disables caching by default.

## Example

Curious to see what it all looks like? Here's a working app!

It's a single HTML file, and there's no build or tooling. You can edit it with nano.

```html
<!DOCTYPE html>
<html lang="en">
  <title>htm Demo</title>
  <script type="module">
    import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.module.js';

    class App extends Component {
      addTodo() {
        const { todos = [] } = this.state;
        this.setState({ todos: todos.concat(`Item ${todos.length}`) });
      }
      render({ page }, { todos = [] }) {
        return html`
          <div class="app">
            <${Header} name="ToDo's (${page})" />
            <ul>
              ${todos.map(todo => html`
                <li key=${todo}>${todo}</li>
              `)}
            </ul>
            <button onClick=${() => this.addTodo()}>Add Todo</button>
            <${Footer}>footer content here<//>
          </div>
        `;
      }
    }

    const Header = ({ name }) => html`<h1>${name} List</h1>`

    const Footer = props => html`<footer ...${props} />`

    render(html`<${App} page="All" />`, document.body);
  </script>
</html>
```

[⚡️ **See live version** ▶](https://htm-demo-preact.glitch.me/)

[⚡️ **Try this on CodeSandbox** ▶](https://codesandbox.io/s/x7pmq32j6q)

How nifty is that?

Notice there's only one import - here we're using the prebuilt Preact integration since it's easier to import and a bit smaller.

The same example works fine without the prebuilt version, just using two imports:

```js
import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

render(html`<${App} page="All" />`, document.body);
```

## Other Uses

Since `htm` is designed to meet the same need as JSX, you can use it anywhere you'd use JSX.

**Generate HTML using [vhtml]:**

```js
import htm from 'htm';
import vhtml from 'vhtml';

const html = htm.bind(vhtml);

console.log( html`<h1 id=hello>Hello world!</h1>` );
// '<h1 id="hello">Hello world!</h1>'
```

**Webpack configuration via [jsxobj]:** ([details here](https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx)) _(never do this)_

```js
import htm from 'htm';
import jsxobj from 'jsxobj';

const html = htm.bind(jsxobj);

console.log(html`
  <webpack watch mode=production>
    <entry path="src/index.js" />
  </webpack>
`);
// {
//   watch: true,
//   mode: 'production',
//   entry: {
//     path: 'src/index.js'
//   }
// }
```

## Demos & Examples

- [Canadian Holidays](https://github.com/pcraig3/hols): A full app using HTM and Server-Side Rendering
- [HTM SSR Example](https://github.com/timarney/htm-ssr-demo): Shows how to do SSR with HTM
- [HTM + Preact SSR Demo](https://gist.github.com/developit/699c8d8f180a1e4eed58167f9c6711be)
- [HTM + vhtml SSR Demo](https://gist.github.com/developit/ff925c3995b4a129b6b977bf7cd12ebd)

## Project Status

The original goal for `htm` was to create a wrapper around Preact that felt natural for use untranspiled in the browser. I wanted to use Virtual DOM, but I wanted to eschew build tooling and use ES Modules directly.

 This meant giving up JSX, and the closest alternative was [Tagged Templates]. So, I wrote this library to patch up the differences between the two as much as possible. The technique turns out to be framework-agnostic, so it should work great with any library or renderer that works with JSX.

`htm` is stable, fast, well-tested and ready for production use.

[Tagged Templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
[lit-html]: https://github.com/Polymer/lit-html
[babel-plugin-htm]: https://github.com/developit/htm/tree/master/packages/babel-plugin-htm
[lit-html VSCode extension]: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
[vim-jsx-pretty plugin]: https://github.com/MaxMEllon/vim-jsx-pretty
[vhtml]: https://github.com/developit/vhtml
[jsxobj]: https://github.com/developit/jsxobj
[hyperscript]: https://github.com/hyperhype/hyperscript
[all modern browsers]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Browser_compatibility
