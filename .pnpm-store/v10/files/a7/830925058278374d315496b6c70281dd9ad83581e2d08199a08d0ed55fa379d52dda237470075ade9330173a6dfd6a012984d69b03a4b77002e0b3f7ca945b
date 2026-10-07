# @jridgewell/resolve-uri

> Resolve a URI relative to an optional base URI

Resolve any combination of absolute URIs, protocol-realtive URIs, absolute paths, or relative paths.

## Installation

```sh
npm install @jridgewell/resolve-uri
```

## Usage

```typescript
function resolve(input: string, base?: string): string;
```

```js
import resolve from '@jridgewell/resolve-uri';

resolve('foo', 'https://example.com'); // => 'https://example.com/foo'
```

| Input                 | Base                    | Resolution                     | Explanation                                                  |
|-----------------------|-------------------------|--------------------------------|--------------------------------------------------------------|
| `https://example.com` | _any_                   | `https://example.com/`         | Input is normalized only                                     |
| `//example.com`       | `https://base.com/`     | `https://example.com/`         | Input inherits the base's protocol                           |
| `//example.com`       | _rest_                  | `//example.com/`               | Input is normalized only                                     |
| `/example`            | `https://base.com/`     | `https://base.com/example`     | Input inherits the base's origin                             |
| `/example`            | `//base.com/`           | `//base.com/example`           | Input inherits the base's host and remains protocol relative |
| `/example`            | _rest_                  | `/example`                     | Input is normalized only                                     |
| `example`             | `https://base.com/dir/` | `https://base.com/dir/example` | Input is joined with the base                                |
| `example`             | `https://base.com/file` | `https://base.com/example`     | Input is joined with the base without its file               |
| `example`             | `//base.com/dir/`       | `//base.com/dir/example`       | Input is joined with the base's last directory               |
| `example`             | `//base.com/file`       | `//base.com/example`           | Input is joined with the base without its file               |
| `example`             | `/base/dir/`            | `/base/dir/example`            | Input is joined with the base's last directory               |
| `example`             | `/base/file`            | `/base/example`                | Input is joined with the base without its file               |
| `example`             | `base/dir/`             | `base/dir/example`             | Input is joined with the base's last directory               |
| `example`             | `base/file`             | `base/example`                 | Input is joined with the base without its file               |
