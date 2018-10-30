# Contributing to EventSource

If you add or fix something, add tests.

## Release process

Update `HISTORY.md`, Then:

    npm outdated --depth 0 # See if you can upgrade something
    npm run polyfill
    git commit ...
    npm version [major|minor|patch]
    npm publish
