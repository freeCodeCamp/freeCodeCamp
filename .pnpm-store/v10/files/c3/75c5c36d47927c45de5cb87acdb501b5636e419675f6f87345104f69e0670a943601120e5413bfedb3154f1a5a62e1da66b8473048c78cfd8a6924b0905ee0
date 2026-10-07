## [Unreleased]

<details>
  <summary>
    Changes that have landed in master but are not yet released.
    Click to see more.
  </summary>
</details>

## 3.0.4 (May 11, 2018)

Fixed shallow renderer regression (introduced in 3.0.3) that caused `setState` updater to fail due to incorrect `this`. ([#26](https://github.com/reactjs/react-lifecycles-compat/pull/26))

## 3.0.3 (May 9, 2018)

Fixed an edge case bug where a batched update containing both a `setState` updater and a parent re-render could result in dropped `state` updates. ([#24](https://github.com/reactjs/react-lifecycles-compat/pull/24))

## 3.0.2 (April 11, 2018)

Replaced an unintentional template literal to ensure broader browser compatibility. ([ce42fe4](https://github.com/reactjs/react-lifecycles-compat/commit/ce42fe426e6348fd221bb4fd1905e392ceb823a9))

## 3.0.1 (April 10, 2018)

Replaced a few unintentional `let` keywords with `var` to ensure broader browser compatibility. ([#17](https://github.com/reactjs/react-lifecycles-compat/pull/17))

## 3.0.0 (April 9, 2018)

Throw an error for any polyfilled component that mixes old lifecycles (`componentWillMount`, `componentWillReceiveProps`, or `componentWillUpdate`) and new lifecycles (`getDerivedStateFromProps` or `getSnapshotBeforeUpdate`) as React 16.3+ does not support this case and will not invoke the old lifecycles. This error ensures consistent behavior between React 16.3+ and older versions. ([#14](https://github.com/reactjs/react-lifecycles-compat/pull/14))

## 2.0.1 (April 9, 2018)

Add a DEV mode warning for any polyfilled component that mixes old lifecycles (`componentWillMount`, `componentWillReceiveProps`, or `componentWillUpdate`) and new lifecycles (`getDerivedStateFromProps` or `getSnapshotBeforeUpdate`) as React 16.3+ does not support this case and will not invoke the old lifecycles. This warning ensures consistent behavior between React 16.3+ and older versions. ([#15](https://github.com/reactjs/react-lifecycles-compat/pull/15))

## 2.0.0 (April 4, 2018)

Package uses a named export and includes an ES6 module build. ([#11](https://github.com/reactjs/react-lifecycles-compat/pull/11))

```js
// 1.x (before)
import polyfill from 'react-lifecycles-compat';

// 2.x (after)
import {polyfill} from 'react-lifecycles-compat';
```

## 1.1.4 (April 3, 2018)

Improved handling of falsy return values from polyfilled `getSnapshotBeforeUpdate()` lifecycle. [#12](https://github.com/reactjs/react-lifecycles-compat/pull/12)
