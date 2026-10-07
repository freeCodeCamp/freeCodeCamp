## 📏 React Measure

[![npm version](https://badge.fury.io/js/react-measure.svg)](https://badge.fury.io/js/react-measure)
[![Dependency Status](https://david-dm.org/souporserious/react-measure.svg)](https://david-dm.org/souporserious/react-measure)

Compute measurements of React components. Uses a
[`ResizeObserver`](https://developers.google.com/web/updates/2016/10/resizeobserver)
to detect when an element's dimensions have changed.

Includes a
[polyfill for `ResizeObserver`](https://github.com/que-etc/resize-observer-polyfill)
in unsupported browsers.

## Install

`yarn add react-measure`

`npm install react-measure --save`

```html
<script src="https://unpkg.com/react-measure/dist/index.umd.js"></script>
(UMD library exposed as `ReactMeasure`)
```

## Measure Component

Wrap any child component and calculate its client rect.

### Props

#### `client`: PropTypes.bool

Adds the following to `contentRect.client` returned in the child function.

[clientTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop),
[clientLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft),
[clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth),
and
[clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight).

#### `offset`: PropTypes.bool

Adds the following to `contentRect.offset` returned in the child function.

[offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop),
[offsetLeft](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft),
[offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth),
and
[offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight).

#### `scroll`: PropTypes.bool

Adds the following to `contentRect.scroll` returned in the child function.

[scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop),
[scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft),
[scrollWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth),
and
[scrollHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight).

#### `bounds`: PropTypes.bool

Uses
[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
to calculate the element rect and add it to `contentRect.bounds` returned in the
child function.

#### `margin`: PropTypes.bool

Uses
[getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
to calculate margins and add it to `contentRect.margin` returned in the child
function.

#### `innerRef`: PropTypes.func

Use this to access the internal component `ref`.

#### `onResize`: PropTypes.func

Callback invoked when either element width or height have changed. Note that this will be called twice on mount to get the initial values. The first call will come from `componentDidMount` while the second call will come from the `ResizeObserver`.

#### `children`: PropTypes.func

Children must be a function. Will receive the following object shape:

- `measureRef`: must be passed down to your component's ref in order to obtain a
  proper node to measure

- `measure`: use to programmatically measure your component, calls the internal
  `measure` method in `withContentRect`

- `contentRect`: this will contain any of the following allowed rects from
  above: `client`, `offset`, `scroll`, `bounds`, or `margin`. It will also
  include `entry` from the `ResizeObserver` when available.

### Example

```javascript
import Measure from 'react-measure'
import classNames from 'classnames'

class ItemToMeasure extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1,
    },
  }

  render() {
    const { width, height } = this.state.dimensions
    const className = classNames(width < 400 && 'small-width-modifier')

    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className={className}>
            I can do cool things with my dimensions now :D
            {height > 250 && (
              <div>Render responsive content based on the component size!</div>
            )}
          </div>
        )}
      </Measure>
    )
  }
}
```

## withContentRect(types) HoC

A higher-order component that provides dimensions to the wrapped component.
Accepts `types`, which determines what measurements are returned, similar to
above. Then returns a function to pass the component you want measured.

Pass an array or single value of either `client`, `offset`, `scroll`, `bounds`,
or `margin` to calculate and receive those measurements as the prop
`contentRect` in your wrapped component. You can also use the `measure` function
passed down to programmatically measure your component if you need to. And
finally, remember to pass down the `measureRef` to the component you want
measured.

Passes down the same props as the `Measure` child function above, `measureRef`,
`measure`, and `contentRect`.

Fun fact, the `Measure` component is a thin wrapper around `withContentRect`.
Just check
[the source](https://github.com/souporserious/react-measure/blob/master/src/Measure.js).
This means your wrapped component will accept the same props as `Measure` does
😊

### Example

```javascript
import { withContentRect } from 'react-measure'

const ItemToMeasure = withContentRect('bounds')(
  ({ measureRef, measure, contentRect }) => (
    <div ref={measureRef}>
      Some content here
      <pre>{JSON.stringify(contentRect, null, 2)}</pre>
    </div>
  )
)
```

## Run Example

clone repo

`git clone git@github.com:souporserious/react-measure.git`

move into folder

`cd ~/react-measure`

install package dependencies

`yarn`

move into site folder and install local site dependencies

`cd ~/site && yarn`

run development mode

`yarn gatsby develop`
