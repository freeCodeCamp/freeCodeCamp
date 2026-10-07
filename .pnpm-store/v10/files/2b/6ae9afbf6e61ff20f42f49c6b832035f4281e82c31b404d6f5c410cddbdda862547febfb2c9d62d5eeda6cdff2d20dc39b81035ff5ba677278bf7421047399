# Custom Data for CSS Language Service

In VS Code, there are two ways of loading custom CSS datasets:

1. With setting `css.customData`
```json
    "css.customData": [
        "./foo.css-data.json"
    ]
```
2. With an extension that contributes `contributes.css.customData`

Both setting point to a list of JSON files. This document describes the shape of the JSON files.

You can read more about custom data at: https://github.com/microsoft/vscode-custom-data.

## Custom Data Format

### Overview

The JSON have one required property, `version`, and 4 other top level properties:

```jsonc
{
  "version": 1.1,
  "properties": [],
  "atDirectives": [],
  "pseudoClasses": [],
  "pseudoElements": []
}
```

Version denotes the schema version you are using. The latest schema version is `V1.1`.

You can find other properties' shapes at [cssLanguageTypes.ts](../src/cssLanguageTypes.ts) or the [JSON Schema](./customData.schema.json).

You should suffix your custom data file with `.css-data.json`, so VS Code will load the most recent schema for the JSON file to offer auto completion and error checking.

### Format

All top-level properties share two basic properties, `name` and `description`. For example:

```jsonc
{
  "version": 1.1,
  "properties": [
    { "name": "foo", "description": "Foo property" }
  ],
  "atDirectives": [
    { "name": "@foo", "description": "Foo at directive" }
  ],
  "pseudoClasses": [
    { "name": ":foo", "description": "Foo pseudo class" }
  ],
  "pseudoElements": [
    { "name": "::foo", "description": "Foo pseudo elements" }
  ]
}
```

You can also specify 5 additional properties for them:

```jsonc
{
  "properties": [
    {
      "name": "foo",
      "description": "Foo property",
      "browsers": [
        "E12",
        "S10",
        "C50",
        "IE10",
        "O37"
      ],
      "baseline": {
        "status": "high",
        "baseline_low_date": "2015-09-30",
        "baseline_high_date": "2018-03-30"
      },
      "status": "standard",
      "references": [
        {
          "name": "My foo property reference",
          "url": "https://www.foo.com/property/foo"
        }
      ],
      "relevance": 25
    }
  ]
}
```

- `browsers`: A list of supported browsers. The format is `browserName + version`. For example: `['E10', 'C30', 'FF20']`. Here are all browser names:
  ```
  export let browserNames = {
    E: 'Edge',
    FF: 'Firefox',
    FFA: 'Firefox on Android',
    S: 'Safari',
    SM: 'Safari on iOS',
    C: 'Chrome',
    CA: 'Chrome on Android',
    IE: 'IE',
    O: 'Opera'
  };
  ```
  The browser compatibility will be rendered at completion and hover. Items that is supported in only one browser are dropped from completion.

- `baseline`: An object containing [Baseline](https://web-platform-dx.github.io/web-features/) information about the feature's browser compatibility, as defined by the [WebDX Community Group](https://web-platform-dx.github.io/web-features/webdx-cg/).

  - `status`: The Baseline status is either `"false"` (limited availability across major browsers), `"low"` (newly available across major browsers), or `"high"` (widely available across major browsers).

  - `baseline_low_date`: A date in the format `YYYY-MM-DD` representing when the feature became newly available, or undefined if it hasn't yet reached that status.

  - `baseline_high_date`: A date in the format `YYYY-MM-DD` representing when the feature became widely available, or undefined if it hasn't yet reached that status. The widely available date is always 30 months after the newly available date.

- `status`: The status of the item. The format is:
  ```
  export type EntryStatus = 'standard' | 'experimental' | 'nonstandard' | 'obsolete';
  ```
  The status will be rendered at the top of completion and hover. For example, `nonstandard` items are prefixed with the message `🚨️ Property is nonstandard. Avoid using it.`.

- `references`: A list of references. They will be displayed in Markdown form in completion and hover as `[Ref1 Name](Ref1 URL) | [Ref2 Name](Ref2 URL) | ...`.

- `relevance`: A number in the range [0, 100] used for sorting. Bigger number means more relevant and will be sorted first. Entries that do not specify a relevance will get 50 as default value.
