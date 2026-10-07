# @vitest/ui

This package is for UI interface of Vitest.

## Development Setup

At project root, create terminals with each of the following commands:

```bash
nr ui:dev
```

```bash
nr test --api
```

As the last command, you can use any of the available tests suites instead. Make sure that they run at 51204 port or specify a custom port with `VITE_PORT` environmental variable when running the first command. For example,

```bash
VITE_PORT=3200 nr ui:dev
```

```bash
nr test --api=3200
```

Open the browser at the URL printed by the first command. For example, `http://localhost:5173/`. If you see a connection error, it means the port is specified incorrectly.

To preview the browser tab, uncomment the "browser-dev-preview" plugin in `vite.config.ts`. To configure the browser state, update the `__vitest_browser_runner__` object in `browser.dev.js`.
