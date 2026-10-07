# `react-devtools-inline`

React DevTools implementation for embedding within a browser-based IDE (e.g. [CodeSandbox](https://codesandbox.io/), [StackBlitz](https://stackblitz.com/)).

This is a low-level package. If you're looking for the standalone DevTools app, **use the `react-devtools` package instead.**

## Usage

This package exports two entry points: a frontend (to be run in the main `window`) and a backend (to be installed and run within an `iframe`<sup>1</sup>).

The frontend and backend can be initialized in any order, but **the backend must not be activated until after the frontend has been initialized**. Because of this, the simplest sequence is:

1. Frontend (DevTools interface) initialized in the main `window`.
1. Backend initialized in an `iframe`.
1. Backend activated.

<sup>1</sup> Sandboxed iframes are supported.

## API

### `react-devtools-inline/backend`

* **`initialize(contentWindow)`** -
Installs the global hook on the window. This hook is how React and DevTools communicate. **This method must be called before React is loaded.**<sup>2</sup>
* **`activate(contentWindow)`** -
Lets the backend know when the frontend is ready. It should not be called until after the frontend has been initialized, else the frontend might miss important tree-initialization events.

```js
import { activate, initialize } from 'react-devtools-inline/backend';

// This should be the iframe the React application is running in.
const iframe = document.getElementById(frameID);
const contentWindow = iframe.contentWindow;

// Call this before importing React (or any other packages that might import React).
initialize(contentWindow);

// Initialize the frontend...

// Call this only once the frontend has been initialized.
activate(contentWindow);
```

<sup>2</sup> The backend must be initialized before React is loaded. (This means before any `import` or `require` statements or `<script>` tags that include React.)

### `react-devtools-inline/frontend`

* **`initialize(contentWindow)`** -
Configures the DevTools interface to listen to the `window` the backend was injected into. This method returns a React component that can be rendered directly<sup>3</sup>.

```js
import { initialize } from 'react-devtools-inline/frontend';

// This should be the iframe the backend hook has been installed in.
const iframe = document.getElementById(frameID);
const contentWindow = iframe.contentWindow;

// This returns a React component that can be rendered into your app.
// <DevTools {...props} />
const DevTools = initialize(contentWindow);
```

<sup>3</sup> Because the DevTools interface makes use of several new React APIs (e.g. suspense, concurrent mode) it should be rendered using either `ReactDOM.createRoot` or `ReactDOM.createSyncRoot`. **It should not be rendered with `ReactDOM.render`.**

## Examples

### Configuring a same-origin `iframe`

The simplest way to use this package is to install the hook from the parent `window`. This is possible if the `iframe` is not sandboxed and there are no cross-origin restrictions.

```js
import {
  activate as activateBackend,
  initialize as initializeBackend
} from 'react-devtools-inline/backend';
import { initialize as initializeFrontend } from 'react-devtools-inline/frontend';

// The React app you want to inspect with DevTools is running within this iframe:
const iframe = document.getElementById('target');
const { contentWindow } = iframe;

// Installs the global hook into the iframe.
// This must be called before React is loaded into that frame.
initializeBackend(contentWindow);

// React application can be injected into <iframe> at any time now...
// Note that this would need to be done via <script> tag injection,
// as setting the src of the <iframe> would load a new page (withou the injected backend).

// Initialize DevTools UI to listen to the hook we just installed.
// This returns a React component we can render anywhere in the parent window.
const DevTools = initializeFrontend(contentWindow);

// <DevTools /> interface can be rendered in the parent window at any time now...
// Be sure to use either ReactDOM.createRoot()
// or ReactDOM.createSyncRoot() to render this component.

// Let the backend know the frontend is ready and listening.
activateBackend(contentWindow);
```

### Configuring a sandboxed `iframe`

Sandboxed `iframe`s are also supported but require more complex initialization.

**`iframe.html`**
```js
import { activate, initialize } from "react-devtools-inline/backend";

// The DevTooks hook needs to be installed before React is even required!
// The safest way to do this is probably to install it in a separate script tag.
initialize(window);

// Wait for the frontend to let us know that it's ready.
function onMessage({ data }) {
  switch (data.type) {
    case "activate-backend":
      window.removeEventListener("message", onMessage);

      activate(window);
      break;
    default:
      break;
  }
}

window.addEventListener("message", onMessage);
```

**`main-window.html`**
```js
import { initialize } from "react-devtools-inline/frontend";

const iframe = document.getElementById("target");
const { contentWindow } = iframe;

// Initialize DevTools UI to listen to the iframe.
// This returns a React component we can render anywhere in the main window.
// Be sure to use either ReactDOM.createRoot()
// or ReactDOM.createSyncRoot() to render this component.
const DevTools = initialize(contentWindow);

// Let the backend know to initialize itself.
// We can't do this directly because the iframe is sandboxed.
// Only initialize the backend once the DevTools frontend has been initialized.
iframe.onload = () => {
  contentWindow.postMessage(
    {
      type: "activate-backend"
    },
    "*"
  );
};
```

## Local development
You can also build and test this package from source.

### Prerequisite steps
DevTools depends on local versions of several NPM packages<sup>1</sup> also in this workspace. You'll need to either build or download those packages first.

<sup>1</sup> Note that at this time, an _experimental_ build is required because DevTools depends on the `createRoot` API.

#### Build from source
To build dependencies from source, run the following command from the root of the repository:
```sh
yarn build-for-devtools
```
#### Download from CI
To use the latest build from CI, run the following command from the root of the repository:
```sh
./scripts/release/download-experimental-build.js
```
### Build steps
Once the above packages have been built or downloaded, you can watch for changes made to the source code and automatically rebuild by running:
```sh
yarn start
```

To test package changes, refer to the [`react-devtools-shell` README](https://github.com/facebook/react/blob/master/packages/react-devtools-shell/README.md).