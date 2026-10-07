# `@gatsbyjs/parcel-namer-relative-to-cwd`

This [namer plugin](https://parceljs.org/plugin-system/namer/) is used by [Gatsby](https://www.gatsbyjs.com/) internally. You can reuse it inside your app if you want.

If you're just using Gatsby, you don't need to care about this package/plugin.

## Usage

```shell
npm install --save-dev @gatsbyjs/parcel-namer-relative-to-cwd
```

And inside your `.parcelrc`:

```
{
  "extends": "@parcel/config-default",
  "namers": ["@gatsbyjs/parcel-namer-relative-to-cwd", "..."]
}
```

## Why & How

By default, Parcel is trying to find common/shared directories between entries and output paths that are impacted by it. See [this issue comment](https://github.com/parcel-bundler/parcel/issues/5476#issuecomment-769058504) for more information.

With these inputs files:

```
a.html
sub/b.html
```

You get:

- `parcel build a.html` => `dist/a.html`
- `parcel build sub/b.html` => `dist/b.html`
- `parcel build a.html sub/b.html` => `dist/a.html`, `dist/sub/b.html`

You can see that `sub/b.html` entry might result in either `dist/b.html` or `dist/sub/b.html` (depending wether `a.html` is entry or not). This makes builds not deterministic, which is very problematic where entries are "optional".

This namer plugin stabilizes the output, so inside `distDir` the hierarchy is the same as entry file in relation to current working directory (CWD):

- `parcel build a.html` => `dist/a.html`
- `parcel build sub/b.html` => `dist/sub/b.html`
- `parcel build a.html sub/b.html` => `dist/a.html`, `dist/sub/b.html`
