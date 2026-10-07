<img style="width:100%" src="https://user-images.githubusercontent.com/4838076/143581035-ebee5ba2-9cb1-4fe8-a05b-2f44bd69bb4b.gif" alt="Component toolkit for live running code editing experiences" />

# Sandpack client 

This is a small foundation package that sits on top of the bundler. It is
framework agnostic and facilitates the handshake between your context and the bundler iframe.

```js
import { loadSandpackClient } from "@codesandbox/sandpack-client";

const main = async () => {
  const client = await loadSandpackClient("#preview", {
    files: {
      "/index.js": {
        code: `console.log(require('uuid'))`,
      },
    },
    entry: "/index.js",
    dependencies: {
      uuid: "latest",
    },
  });
}
```

[Read more](https://sandpack.codesandbox.io/docs/advanced-usage/client)
