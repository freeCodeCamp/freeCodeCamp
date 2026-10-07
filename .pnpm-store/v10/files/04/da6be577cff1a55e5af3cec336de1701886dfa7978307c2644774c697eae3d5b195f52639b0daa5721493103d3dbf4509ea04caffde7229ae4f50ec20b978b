**markdown-to-jsx**

The most lightweight, customizable React markdown component.

[![npm version](https://badge.fury.io/js/markdown-to-jsx.svg)](https://badge.fury.io/js/markdown-to-jsx) [![downloads](https://badgen.net/npm/dy/markdown-to-jsx)](https://npm-stat.com/charts.html?package=markdown-to-jsx)

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)
  - [Parsing Options](#parsing-options)
    - [options.forceBlock](#optionsforceblock)
    - [options.forceInline](#optionsforceinline)
    - [options.wrapper](#optionswrapper)
      - [Other useful recipes](#other-useful-recipes)
    - [options.forceWrapper](#optionsforcewrapper)
    - [options.overrides - Void particular banned tags](#optionsoverrides---void-particular-banned-tags)
    - [options.overrides - Override Any HTML Tag's Representation](#optionsoverrides---override-any-html-tags-representation)
    - [options.overrides - Rendering Arbitrary React Components](#optionsoverrides---rendering-arbitrary-react-components)
    - [options.createElement - Custom React.createElement behavior](#optionscreateelement---custom-reactcreateelement-behavior)
    - [options.enforceAtxHeadings](#optionsenforceatxheadings)
    - [options.renderRule](#optionsrenderrule)
    - [options.sanitizer](#optionssanitizer)
    - [options.slugify](#optionsslugify)
    - [options.namedCodesToUnicode](#optionsnamedcodestounicode)
    - [options.disableAutoLink](#optionsdisableautolink)
    - [options.disableParsingRawHTML](#optionsdisableparsingrawhtml)
  - [Syntax highlighting](#syntax-highlighting)
  - [Handling shortcodes](#handling-shortcodes)
  - [Getting the smallest possible bundle size](#getting-the-smallest-possible-bundle-size)
  - [Usage with Preact](#usage-with-preact)
- [Gotchas](#gotchas)
  - [Passing props to stringified React components](#passing-props-to-stringified-react-components)
  - [Significant indentation inside arbitrary HTML](#significant-indentation-inside-arbitrary-html)
    - [Code blocks](#code-blocks)
- [Using The Compiler Directly](#using-the-compiler-directly)
- [Changelog](#changelog)
- [Donate](#donate)

<!-- /TOC -->

---

`markdown-to-jsx` offers the following additional benefits over simple markdown parsing:

- Arbitrary HTML is supported and parsed into the appropriate JSX representation
  without `dangerouslySetInnerHTML`

- Any HTML tags rendered by the compiler and/or `<Markdown>` component can be overridden to include additional
  props or even a different HTML representation entirely.

- GFM task list support.

- Fenced code blocks with [highlight.js](https://highlightjs.org/) support; see [Syntax highlighting](#syntax-highlighting) for instructions on setting up highlight.js.

All this clocks in at around 6 kB gzipped, which is a fraction of the size of most other React markdown components.

Requires React >= 0.14.

## Installation

Install `markdown-to-jsx` with your favorite package manager.

```shell
npm i markdown-to-jsx
```

## Usage

`markdown-to-jsx` exports a React component by default for easy JSX composition:

ES6-style usage\*:

```jsx
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

render(<Markdown># Hello world!</Markdown>, document.body)

/*
    renders:

    <h1>Hello world!</h1>
 */
```

\* **NOTE: JSX does not natively preserve newlines in multiline text. In general, writing markdown directly in JSX is discouraged and it's a better idea to keep your content in separate .md files and require them, perhaps using webpack's [raw-loader](https://github.com/webpack-contrib/raw-loader).**

### Parsing Options

#### options.forceBlock

By default, the compiler will try to make an intelligent guess about the content passed and wrap it in a `<div>`, `<p>`, or `<span>` as needed to satisfy the "inline"-ness of the markdown. For instance, this string would be considered "inline":

```md
Hello. _Beautiful_ day isn't it?
```

But this string would be considered "block" due to the existence of a header tag, which is a block-level HTML element:

```md
# Whaddup?
```

However, if you really want all input strings to be treated as "block" layout, simply pass `options.forceBlock = true` like this:

```jsx
;<Markdown options={{ forceBlock: true }}>Hello there old chap!</Markdown>

// or

compiler('Hello there old chap!', { forceBlock: true })

// renders
;<p>Hello there old chap!</p>
```

#### options.forceInline

The inverse is also available by passing `options.forceInline = true`:

```jsx
;<Markdown options={{ forceInline: true }}># You got it babe!</Markdown>

// or

compiler('# You got it babe!', { forceInline: true })

// renders
;<span># You got it babe!</span>
```

#### options.wrapper

When there are multiple children to be rendered, the compiler will wrap the output in a `div` by default. You can override this default by setting the `wrapper` option to either a string (React Element) or a component.

```jsx
const str = '# Heck Yes\n\nThis is great!'

<Markdown options={{ wrapper: 'article' }}>
  {str}
</Markdown>;

// or

compiler(str, { wrapper: 'article' });

// renders

<article>
  <h1>Heck Yes</h1>
  <p>This is great!</p>
</article>
```

##### Other useful recipes

To get an array of children back without a wrapper, set `wrapper` to `null`. This is particularly useful when using `compiler(…)` directly.

```jsx
compiler('One\n\nTwo\n\nThree', { wrapper: null })

// returns
;[<p>One</p>, <p>Two</p>, <p>Three</p>]
```

To render children at the same DOM level as `<Markdown>` with no HTML wrapper, set `wrapper` to `React.Fragment`. This will still wrap your children in a React node for the purposes of rendering, but the wrapper element won't show up in the DOM.

#### options.forceWrapper

By default, the compiler does not wrap the rendered contents if there is only a single child. You can change this by setting `forceWrapper` to `true`. If the child is inline, it will not necessarily be wrapped in a `span`.

```jsx
// Using `forceWrapper` with a single, inline child…
<Markdown options={{ wrapper: 'aside', forceWrapper: true }}>
  Mumble, mumble…
</Markdown>

// renders

<aside>Mumble, mumble…</aside>
```

#### options.overrides - Void particular banned tags

Pass the `options.overrides` prop to the compiler or `<Markdown>` component with an implementation that return `null` for tags you wish to exclude from the rendered output. It is recommended to void `script`, `iframe`, `object`, and `style` tags to avoid XSS attacks when working with user-generated content. For example, to void the `iframe` tag:

```tsx
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

render(
  <Markdown options={{ overrides: { iframe: () => null } }}>
    <iframe src="https://potentially-malicious-web-page.com/"></iframe>
  </Markdown>,
  document.body
)

// renders: ""
```

The library does not void any tags by default to avoid surprising behavior for personal use cases.

#### options.overrides - Override Any HTML Tag's Representation

Pass the `options.overrides` prop to the compiler or `<Markdown>` component to seamlessly revise the rendered representation of any HTML tag. You can choose to change the component itself, add/change props, or both.

```jsx
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

// surprise, it's a div instead!
const MyParagraph = ({ children, ...props }) => <div {...props}>{children}</div>

render(
  <Markdown
    options={{
      overrides: {
        h1: {
          component: MyParagraph,
          props: {
            className: 'foo',
          },
        },
      },
    }}
  >
    # Hello world!
  </Markdown>,
  document.body
)

/*
    renders:

    <div class="foo">
        Hello World
    </div>
 */
```

If you only wish to provide a component override, a simplified syntax is available:

```js
{
    overrides: {
        h1: MyParagraph,
    },
}
```

Depending on the type of element, there are some props that must be preserved to ensure the markdown is converted as intended. They are:

- `a`: `title`, `href`
- `img`: `title`, `alt`, `src`
- `input[type="checkbox"]`: `checked`, `readonly` (specifically, the one rendered by a GFM task list)
- `ol`: `start`
- `td`: `style`
- `th`: `style`

Any conflicts between passed `props` and the specific properties above will be resolved in favor of `markdown-to-jsx`'s code.

Some element mappings are a bit different from other libraries, in particular:

- `span`: Used for inline text.
- `code`: Used for inline code.
- `pre > code`: Code blocks are a `code` element with a `pre` as its direct ancestor.

#### options.overrides - Rendering Arbitrary React Components

One of the most interesting use cases enabled by the HTML syntax processing in `markdown-to-jsx` is the ability to use any kind of element, even ones that aren't real HTML tags like React component classes.

By adding an override for the components you plan to use in markdown documents, it's possible to dynamically render almost anything. One possible scenario could be writing documentation:

```jsx
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

import DatePicker from './date-picker'

const md = `
# DatePicker

The DatePicker works by supplying a date to bias towards,
as well as a default timezone.

<DatePicker biasTowardDateTime="2017-12-05T07:39:36.091Z" timezone="UTC+5" />
`

render(
  <Markdown
    children={md}
    options={{
      overrides: {
        DatePicker: {
          component: DatePicker,
        },
      },
    }}
  />,
  document.body
)
```

`markdown-to-jsx` also handles JSX interpolation syntax, but in a minimal way to not introduce a potential attack vector. Interpolations are sent to the component as their raw string, which the consumer can then `eval()` or process as desired to their security needs.

In the following case, `DatePicker` could simply run `parseInt()` on the passed `startTime` for example:

```jsx
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

import DatePicker from './date-picker'

const md = `
# DatePicker

The DatePicker works by supplying a date to bias towards,
as well as a default timezone.

<DatePicker
  biasTowardDateTime="2017-12-05T07:39:36.091Z"
  timezone="UTC+5"
  startTime={1514579720511}
/>
`

render(
  <Markdown
    children={md}
    options={{
      overrides: {
        DatePicker: {
          component: DatePicker,
        },
      },
    }}
  />,
  document.body
)
```

Another possibility is to use something like [recompose's `withProps()` HOC](https://github.com/acdlite/recompose/blob/main/docs/API.md#withprops) to create various pregenerated scenarios and then reference them by name in the markdown:

```jsx
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'
import withProps from 'recompose/withProps'

import DatePicker from './date-picker'

const DecemberDatePicker = withProps({
  range: {
    start: new Date('2017-12-01'),
    end: new Date('2017-12-31'),
  },
  timezone: 'UTC+5',
})(DatePicker)

const md = `
# DatePicker

The DatePicker works by supplying a date to bias towards,
as well as a default timezone.

<DatePicker
  biasTowardDateTime="2017-12-05T07:39:36.091Z"
  timezone="UTC+5"
  startTime={1514579720511}
/>

Here's an example of a DatePicker pre-set to only the month of December:

<DecemberDatePicker />
`

render(
  <Markdown
    children={md}
    options={{
      overrides: {
        DatePicker,
        DecemberDatePicker,
      },
    }}
  />,
  document.body
)
```

#### options.createElement - Custom React.createElement behavior

Sometimes, you might want to override the `React.createElement` default behavior to hook into the rendering process before the JSX gets rendered. This might be useful to add extra children or modify some props based on runtime conditions. The function mirrors the `React.createElement` function, so the params are [`type, [props], [...children]`](https://reactjs.org/docs/react-api.html#createelement):

```javascript
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

const md = `
# Hello world
`

render(
  <Markdown
    children={md}
    options={{
      createElement(type, props, children) {
        return (
          <div className="parent">
            {React.createElement(type, props, children)}
          </div>
        )
      },
    }}
  />,
  document.body
)
```

#### options.enforceAtxHeadings

Forces the compiler to have space between hash sign `#` and the header text which is explicitly stated in the most of the [markdown specs](https://github.github.com/gfm/#atx-heading).

> The opening sequence of `#` characters must be followed by a space or by the end of line.

#### options.renderRule

Supply your own rendering function that can selectively override how _rules_ are rendered (note, this is different than _`options.overrides`_ which operates at the HTML tag level and is more general). You can use this functionality to do pretty much anything with an established AST node; here's an example of selectively overriding the "codeBlock" rule to process LaTeX syntax using the `@matejmazur/react-katex` library:

````tsx
import Markdown, { RuleType } from 'markdown-to-jsx'
import TeX from '@matejmazur/react-katex'

const exampleContent =
  'Some important formula:\n\n```latex\nmathbb{N} = { a in mathbb{Z} : a > 0 }\n```\n'

function App() {
  return (
    <Markdown
      children={exampleContent}
      options={{
        renderRule(next, node, renderChildren, state) {
          if (node.type === RuleType.codeBlock && node.lang === 'latex') {
            return (
              <TeX as="div" key={state.key}>{String.raw`${node.text}`}</TeX>
            )
          }

          return next()
        },
      }}
    />
  )
}
````

#### options.sanitizer

By default a lightweight URL sanitizer function is provided to avoid common attack vectors that might be placed into the `href` of an anchor tag, for example. The sanitizer receives the input, the HTML tag being targeted, and the attribute name. The original function is available as a library export called `sanitizer`.

This can be overridden and replaced with a custom sanitizer if desired via `options.sanitizer`:

```jsx
// sanitizer in this situation would receive:
// ('javascript:alert("foo")', 'a', 'href')

;<Markdown options={{ sanitizer: (value, tag, attribute) => value }}>
  {`[foo](javascript:alert("foo"))`}
</Markdown>

// or

compiler('[foo](javascript:alert("foo"))', {
  sanitizer: (value, tag, attribute) => value,
})
```

#### options.slugify

By default, a [lightweight deburring function](https://github.com/probablyup/markdown-to-jsx/blob/bc2f57412332dc670f066320c0f38d0252e0f057/index.js#L261-L275) is used to generate an HTML id from headings. You can override this by passing a function to `options.slugify`. This is helpful when you are using non-alphanumeric characters (e.g. Chinese or Japanese characters) in headings. For example:

```jsx
<Markdown options={{ slugify: str => str }}># 中文</Markdown>

// or

compiler('# 中文', { slugify: str => str })

// renders:
<h1 id="中文">中文</h1>
```

The original function is available as a library export called `slugify`.

#### options.namedCodesToUnicode

By default only a couple of named html codes are converted to unicode characters:

- `&` (`&amp;`)
- `'` (`&apos;`)
- `>` (`&gt;`)
- `<` (`&lt;`)
- ` ` (`&nbsp;`)
- `"` (`&quot;`)

Some projects require to extend this map of named codes and unicode characters. To customize this list with additional html codes pass the option namedCodesToUnicode as object with the code names needed as in the example below:

```jsx
<Markdown options={{ namedCodesToUnicode: {
    le: '\u2264',
    ge: '\u2265',
    '#39': '\u0027',
} }}>This text is &le; than this text.</Markdown>;

// or

compiler('This text is &le; than this text.', namedCodesToUnicode: {
    le: '\u2264',
    ge: '\u2265',
    '#39': '\u0027',
});

// renders:

<p>This text is ≤ than this text.</p>
```

#### options.disableAutoLink

By default, bare URLs in the markdown document will be converted into an anchor tag. This behavior can be disabled if desired.

```jsx
<Markdown options={{ disableAutoLink: true }}>
  The URL https://quantizor.dev will not be rendered as an anchor tag.
</Markdown>

// or

compiler(
  'The URL https://quantizor.dev will not be rendered as an anchor tag.',
  { disableAutoLink: true }
)

// renders:

<span>
  The URL https://quantizor.dev will not be rendered as an anchor tag.
</span>
```

#### options.disableParsingRawHTML

By default, raw HTML is parsed to JSX. This behavior can be disabled if desired.

```jsx
<Markdown options={{ disableParsingRawHTML: true }}>
    This text has <span>html</span> in it but it won't be rendered
</Markdown>;

// or

compiler('This text has <span>html</span> in it but it won't be rendered', { disableParsingRawHTML: true });

// renders:

<span>This text has &lt;span&gt;html&lt;/span&gt; in it but it won't be rendered</span>
```

### Syntax highlighting

When using [fenced code blocks](https://www.markdownguide.org/extended-syntax/#syntax-highlighting) with language annotation, that language will be added to the `<code>` element as `class="lang-${language}"`. For best results, you can use `options.overrides` to provide an appropriate syntax highlighting integration like this one using `highlight.js`:

````jsx
import { Markdown, RuleType } from 'markdown-to-jsx'

const mdContainingFencedCodeBlock = '```js\nconsole.log("Hello world!");\n```\n'

function App() {
  return (
    <Markdown
      children={mdContainingFencedCodeBlock}
      options={{
        overrides: {
          code: SyntaxHighlightedCode,
        },
      }}
    />
  )
}

/**
 * Add the following tags to your page <head> to automatically load hljs and styles:

  <link
    rel="stylesheet"
    href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/nord.min.css"
  />

  * NOTE: for best performance, load individual languages you need instead of all
          of them. See their docs for more info: https://highlightjs.org/

  <script
    crossorigin
    src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
  ></script>
 */

function SyntaxHighlightedCode(props) {
  const ref = (React.useRef < HTMLElement) | (null > null)

  React.useEffect(() => {
    if (ref.current && props.className?.includes('lang-') && window.hljs) {
      window.hljs.highlightElement(ref.current)

      // hljs won't reprocess the element unless this attribute is removed
      ref.current.removeAttribute('data-highlighted')
    }
  }, [props.className, props.children])

  return <code {...props} ref={ref} />
}
````

### Handling shortcodes

For Slack-style messaging with arbitrary shortcodes like `:smile:`, you can use `options.renderRule` to hook into the plain text rendering and adjust things to your liking, for example:

```tsx
import Markdown, { RuleType } from 'markdown-to-jsx'

const shortcodeMap = {
  smile: '🙂',
}

const detector = /(:[^:]+:)/g

const replaceEmoji = (text: string): React.ReactNode => {
  return text.split(detector).map((part, index) => {
    if (part.startsWith(':') && part.endsWith(':')) {
      const shortcode = part.slice(1, -1)

      return <span key={index}>{shortcodeMap[shortcode] || part}</span>
    }

    return part
  })
}

function Example() {
  return (
    <Markdown
      options={{
        renderRule(next, node) {
          if (node.type === RuleType.text && detector.test(node.text)) {
            return replaceEmoji(node.text)
          }

          return next()
        },
      }}
    >
      {`On a beautiful summer day, all I want to do is :smile:.`}
    </Markdown>
  )
}

// renders
// <span>On a beautiful summer day, all I want to do is <span>🙂</span>.</span>
```

When you use `options.renderRule`, any React-renderable JSX may be returned including images and GIFs. Ensure you benchmark your solution as the `text` rule is one of the hottest paths in the system!

### Getting the smallest possible bundle size

Many development conveniences are placed behind `process.env.NODE_ENV !== "production"` conditionals. When bundling your app, it's a good idea to replace these code snippets such that a minifier (like uglify) can sweep them away and leave a smaller overall bundle.

Here are instructions for some of the popular bundlers:

- [webpack](https://webpack.js.org/guides/production/#specify-the-environment)
- [browserify plugin](https://github.com/hughsk/envify)
- [parcel](https://parceljs.org/production.html)
- [fuse-box](http://fuse-box.org/plugins/replace-plugin#notes)

### Usage with Preact

Everything will work just fine! Simply [Alias `react` to `preact/compat`](https://preactjs.com/guide/v10/switching-to-preact#setting-up-compat) like you probably already are doing.

## Gotchas

### Passing props to stringified React components

Using the [`options.overrides`](#optionsoverrides---rendering-arbitrary-react-components) functionality to render React components, props are passed into the component in stringifed form. It is up to you to parse the string to make use of the data.

```tsx
const Table: React.FC<
  JSX.IntrinsicElements['table'] & {
    columns: string
    dataSource: string
  }
> = ({ columns, dataSource, ...props }) => {
  const parsedColumns = JSON.parse(columns)
  const parsedData = JSON.parse(dataSource)

  return (
    <div {...props}>
      <h1>Columns</h1>
      {parsedColumns.map(column => (
        <span key={column.key}>{column.title}</span>
      ))}

      <h2>Data</h2>
      {parsedData.map(datum => (
        <span key={datum.key}>{datum.Month}</span>
      ))}
    </div>
  )
}

/**
 * Example HTML in markdown:
 *
 * <Table
 *    columns={[{ title: 'Month', dataIndex: 'Month', key: 'Month' }]}
 *    dataSource={[
 *      {
 *        Month: '2024-09-01',
 *        'Forecasted Revenue': '$3,137,678.85',
 *        'Forecasted Expenses': '$2,036,660.28',
 *        key: 0,
 *      },
 *    ]}
 *  />
 */
```

### Significant indentation inside arbitrary HTML

People usually write HTML like this:

```html
<div>Hey, how are you?</div>
```

Note the leading spaces before the inner content. This sort of thing unfortunately clashes with existing markdown syntaxes since 4 spaces === a code block and other similar collisions.

To get around this, `markdown-to-jsx` left-trims approximately as much whitespace as the first line inside the HTML block. So for example:

```html
<div># Hello How are you?</div>
```

The two leading spaces in front of "# Hello" would be left-trimmed from all lines inside the HTML block. In the event that there are varying amounts of indentation, only the amount of the first line is trimmed.

> NOTE! These syntaxes work just fine when you aren't writing arbitrary HTML wrappers inside your markdown. This is very much an edge case of an edge case. 🙃

#### Code blocks

⛔️

```md
<div>
    var some = code();
</div>
```

✅

````md
<div>
```js
var some = code();
``\`
</div>
````

## Using The Compiler Directly

If desired, the compiler function is a "named" export on the `markdown-to-jsx` module:

```jsx
import { compiler } from 'markdown-to-jsx'
import React from 'react'
import { render } from 'react-dom'

render(compiler('# Hello world!'), document.body)

/*
    renders:

    <h1>Hello world!</h1>
 */
```

It accepts the following arguments:

```js
compiler(markdown: string, options: object?)
```

## Changelog

See [Github Releases](https://github.com/probablyup/markdown-to-jsx/releases).

## Donate

Like this library? It's developed entirely on a volunteer basis; chip in a few bucks if you can via the Sponsor link!

MIT
