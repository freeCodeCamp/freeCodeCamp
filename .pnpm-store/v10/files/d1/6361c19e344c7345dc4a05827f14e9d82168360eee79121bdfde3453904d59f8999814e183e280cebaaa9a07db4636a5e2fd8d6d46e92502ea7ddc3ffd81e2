# css-what

[![Build Status](https://img.shields.io/github/workflow/status/fb55/css-what/Node.js%20CI/master)](https://github.com/fb55/css-what/actions/workflows/nodejs-test.yml)
[![Coverage](https://img.shields.io/coveralls/github/fb55/css-what/master)](https://coveralls.io/github/fb55/css-what?branch=master)

A CSS selector parser.

## Example

```js
import * as CSSwhat from "css-what";

CSSwhat.parse("foo[bar]:baz")

~> [
    [
        { type: "tag", name: "foo" },
        {
            type: "attribute",
            name: "bar",
            action: "exists",
            value: "",
            ignoreCase: null
        },
        { type: "pseudo", name: "baz", data: null }
    ]
]
```

## API

**`CSSwhat.parse(selector)` - Parses `selector`.**

The function returns a two-dimensional array. The first array represents selectors separated by commas (eg. `sub1, sub2`), the second contains the relevant tokens for that selector. Possible token types are:

| name                | properties                              | example       | output                                                                                   |
| ------------------- | --------------------------------------- | ------------- | ---------------------------------------------------------------------------------------- |
| `tag`               | `name`                                  | `div`         | `{ type: 'tag', name: 'div' }`                                                           |
| `universal`         | -                                       | `*`           | `{ type: 'universal' }`                                                                  |
| `pseudo`            | `name`, `data`                          | `:name(data)` | `{ type: 'pseudo', name: 'name', data: 'data' }`                                         |
| `pseudo`            | `name`, `data`                          | `:name`       | `{ type: 'pseudo', name: 'name', data: null }`                                           |
| `pseudo-element`    | `name`                                  | `::name`      | `{ type: 'pseudo-element', name: 'name' }`                                               |
| `attribute`         | `name`, `action`, `value`, `ignoreCase` | `[attr]`      | `{ type: 'attribute', name: 'attr', action: 'exists', value: '', ignoreCase: false }`    |
| `attribute`         | `name`, `action`, `value`, `ignoreCase` | `[attr=val]`  | `{ type: 'attribute', name: 'attr', action: 'equals', value: 'val', ignoreCase: false }` |
| `attribute`         | `name`, `action`, `value`, `ignoreCase` | `[attr^=val]` | `{ type: 'attribute', name: 'attr', action: 'start', value: 'val', ignoreCase: false }`  |
| `attribute`         | `name`, `action`, `value`, `ignoreCase` | `[attr$=val]` | `{ type: 'attribute', name: 'attr', action: 'end', value: 'val', ignoreCase: false }`    |
| `child`             | -                                       | `>`           | `{ type: 'child' }`                                                                      |
| `parent`            | -                                       | `<`           | `{ type: 'parent' }`                                                                     |
| `sibling`           | -                                       | `~`           | `{ type: 'sibling' }`                                                                    |
| `adjacent`          | -                                       | `+`           | `{ type: 'adjacent' }`                                                                   |
| `descendant`        | -                                       |               | `{ type: 'descendant' }`                                                                 |
| `column-combinator` | -                                       | `\|\|`        | `{ type: 'column-combinator' }`                                                          |

**`CSSwhat.stringify(selector)` - Turns `selector` back into a string.**

---

License: BSD-2-Clause

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

## `css-what` for enterprise

Available as part of the Tidelift Subscription

The maintainers of `css-what` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-css-what?utm_source=npm-css-what&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
