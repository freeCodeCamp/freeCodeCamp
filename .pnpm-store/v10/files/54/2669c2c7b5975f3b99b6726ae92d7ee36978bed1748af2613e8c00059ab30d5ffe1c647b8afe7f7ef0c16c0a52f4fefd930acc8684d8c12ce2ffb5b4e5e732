# Redux DevTools Extension's helper

[![Join the chat at https://gitter.im/zalmoxisus/redux-devtools-extension](https://badges.gitter.im/zalmoxisus/redux-devtools-extension.svg)](https://gitter.im/zalmoxisus/redux-devtools-extension?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Usage

Install:

```
yarn add @redux-devtools/extension
```

and use like that:

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ),
);
```

or if needed to apply [extension’s options](https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md):

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ),
);
```

There are just a [few lines of code](https://github.com/reduxjs/redux-devtools/blob/main/packages/redux-devtools-extension/src/index.ts). If you don’t want to allow the extension in production, just use `composeWithDevToolsDevelopmentOnly` instead of `composeWithDevTools`.

## License

MIT
