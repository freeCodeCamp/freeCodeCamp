# fb-watchman

`fb-watchman` is a filesystem watcher that uses the
[Watchman](https://facebook.github.io/watchman/) file watching service from
Facebook.

Watchman provides file change notification services using very
efficient recursive watches and also allows more advanced change matching and
filesystem tree querying operations using
[a powerful expression syntax](https://facebook.github.io/watchman/docs/file-query.html#expressions).

## Install

You should [install Watchman](
https://facebook.github.io/watchman/docs/install.html) to make the most of this
module.

Then simply:

```
$ npm install fb-watchman
```

## Key Concepts

- Watchman recursively watches directories.
- Each watched directory is called a `root`.
- You must initiate a `watch` on a `root` using the `watch-project` command prior to subscribing to changes
- Rather than separately watching many sibling directories, `watch-project` consolidates and re-uses existing watches relative to a project root (the location of your `.watchmanconfig` or source control repository root)
- change notifications are relative to the project root

## How do I use it?

[Read the NodeJS watchman documentation](https://facebook.github.io/watchman/docs/nodejs.html)
