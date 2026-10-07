# Using `markdownlint` with Prettier

[`Prettier`](https://prettier.io) is a popular code formatter.
For the most part, Prettier works seamlessly with `markdownlint`.

You can `extend` the [`prettier.json`](../style/prettier.json) style to disable
all `markdownlint` rules that overlap with Prettier.

Other scenarios are documented below.

## List item indentation

The default settings of `markdownlint` and `Prettier` are compatible and don't
result in any linting violations. If `Prettier` is used with `--tab-width` set
to `4` (vs. `2`), the following `markdownlint` configuration can be used:

```json
{
  "list-marker-space": {
    "ul_multi": 3,
    "ul_single": 3
  },
  "ul-indent": {
    "indent": 4
  }
}
```
