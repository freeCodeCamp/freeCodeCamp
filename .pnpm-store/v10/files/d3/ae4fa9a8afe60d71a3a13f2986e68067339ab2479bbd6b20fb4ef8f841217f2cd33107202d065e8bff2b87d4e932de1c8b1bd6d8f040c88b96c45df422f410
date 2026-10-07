# react-responsive [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Information

<table>
<tr>
<td>Package</td><td>react-responsive</td>
</tr>
<tr>
<td>Description</td>
<td>Media queries in react for responsive design</td>
</tr>
<tr>
<td>Browser Version</td>
<td>>= IE6*</td>
</tr>
</tr>
<tr>
<td colspan='2'><a href='http://contra.io/react-responsive/'>Demo</a></td>
</tr>
</table>

The best supported, easiest to use react media query module.

## Install

```console
$ npm install react-responsive --save
```

## Example Usage

### With Hooks

Hooks is a new feature available in 8.0.0!

```jsx
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return <div>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
    {isBigScreen && <p>You  have a huge screen</p>}
    {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    {isRetina && <p>You are retina</p>}
  </div>
}
```

### With Components

```jsx
import MediaQuery from 'react-responsive'

const Example = () => (
  <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {/* You can also use a function (render prop) as a child */}
      {(matches) =>
        matches
          ? <p>You are retina</p>
          : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
)
```

## API

### Using Properties

To make things more idiomatic to react, you can use camel-cased shorthands to construct media queries.

For a list of all possible shorthands and value types see https://github.com/contra/react-responsive/blob/master/src/mediaQuery.ts#L9.

Any numbers given as shorthand will be expanded to px (`1234` will become `'1234px'`).

The CSS media queries in the example above could be constructed like this:

```jsx
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <div>
      ...
    </div>
  )
}
```

### Forcing a device with the `device` prop

At times you may need to render components with different device settings than what gets automatically detected. This is especially useful in a Node environment where these settings can't be detected (SSR) or for testing.

#### Possible Keys

`orientation`, `scan`, `aspectRatio`, `deviceAspectRatio`,
`height`, `deviceHeight`, `width`, `deviceWidth`, `color`, `colorIndex`, `monochrome`,
`resolution` and `type`

##### Possible Types

`type` can be one of: `all`, `grid`, `aural`, `braille`, `handheld`, `print`, `projection`,
`screen`, `tty`, `tv` or `embossed`

Note: The `device` property always applies, even when it can be detected (where window.matchMedia exists).

```jsx
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery(
     { minDeviceWidth: 1224 },
     { deviceWidth: 1600 } // `device` prop
  )

  return (
    <div>
      {isDesktopOrLaptop &&
        <p>
          this will always get rendered even if device is shorter than 1224px,
          that's because we overrode device settings with 'deviceWidth: 1600'.
        </p>
      }
    </div>
  )
}
```

#### Supplying through Context

You can also pass `device` to every `useMediaQuery` hook in the components tree through a React [Context](https://reactjs.org/docs/context.html).
This should ease up server-side-rendering and testing in a Node environment, e.g:

##### Server-Side Rendering

```jsx
import { Context as ResponsiveContext } from 'react-responsive'
import { renderToString } from 'react-dom/server'
import App from './App'

...
  // Context is just a regular React Context component, it accepts a `value` prop to be passed to consuming components
  const mobileApp = renderToString(
    <ResponsiveContext.Provider value={{ width: 500 }}>
      <App />
    </ResponsiveContext.Provider>
  )
...
```

##### Testing

```jsx
import { Context as ResponsiveContext } from 'react-responsive'
import { render } from '@testing-library/react'
import ProductsListing from './ProductsListing'

describe('ProductsListing', () => {
  test('matches the snapshot', () => {
    const { container: mobile } = render(
      <ResponsiveContext.Provider value={{ width: 300 }}>
        <ProductsListing />
      </ResponsiveContext.Provider>
    )
    expect(mobile).toMatchSnapshot()

    const { container: desktop } = render(
      <ResponsiveContext.Provider value={{ width: 1000 }}>
        <ProductsListing />
      </ResponsiveContext.Provider>
    )
    expect(desktop).toMatchSnapshot()
  })
})
```

Note that if anything has a `device` prop passed in it will take precedence over the one from context.

### `onChange`

You can use the `onChange` callback to specify a change handler that will be called when the media query's value changes.

```jsx
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
  }
  const isDesktopOrLaptop = useMediaQuery(
    { minWidth: 1224 }, undefined,  handleMediaQueryChange
  );

  return (
    <div>
      ...
    </div>
  )
}
```

```jsx
import React from 'react'
import MediaQuery from 'react-responsive'

const Example = () => {

  const handleMediaQueryChange = (matches) => {
    // matches will be true or false based on the value for the media query
  }

  return (
    <MediaQuery minWidth={1224} onChange={handleMediaQueryChange}>
      ...
    </MediaQuery>
  )
}
```

## Easy Mode

That's it! Now you can create your application specific breakpoints and reuse them easily. Here is an example:

```jsx
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Example = () => (
  <div>
    <Desktop>Desktop or laptop</Desktop>
    <Tablet>Tablet</Tablet>
    <Mobile>Mobile</Mobile>
    <Default>Not mobile (desktop or laptop or tablet)</Default>
  </div>
)

export default Example
```

And if you want a combo (the DRY way):

```js
import { useMediaQuery } from "react-responsive"

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1280px)" })

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1279px)" })

const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery()

  return isDesktop ? children : null
}

const TabletAndBelow = ({ children }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return isTabletAndBelow ? children : null
}
```


## Browser Support

### Out of the box

<table>
<tr>
<td>Chrome</td>
<td>9</td>
</tr>
<tr>
<td>Firefox (Gecko)</td>
<td>6</td>
</tr>
<tr>
<td>MS Edge</td>
<td>All</td>
</tr>
<tr>
<td>Internet Explorer</td>
<td>10</td>
</tr>
<tr>
<td>Opera</td>
<td>12.1</td>
</tr>
<tr>
<td>Safari</td>
<td>5.1</td>
</tr>
</table>

### With Polyfills

Pretty much everything. Check out these polyfills:

- [matchMedia.js by Paul Irish](https://github.com/paulirish/matchMedia.js/)
- [media-match (faster, but larger and lacking some features)](https://github.com/weblinc/media-match)

[downloads-image]: http://img.shields.io/npm/dm/react-responsive.svg
[npm-url]: https://npmjs.org/package/react-responsive
[npm-image]: http://img.shields.io/npm/v/react-responsive.svg
