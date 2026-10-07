# `@inquirer/search`

Interactive search prompt component for command line interfaces.

![search prompt](https://raw.githubusercontent.com/SBoudrias/Inquirer.js/f459199e679aec7676cecc0fc12ef8a4cd3dda0b/assets/screenshots/search.png)

# Installation

<table>
<tr>
  <th>npm</th>
  <th>yarn</th>
</tr>
<tr>
<td>

```sh
npm install @inquirer/prompts
```

</td>
<td>

```sh
yarn add @inquirer/prompts
```

</td>
</tr>
<tr>
<td>

```sh
npm install @inquirer/search
```

</td>
<td>

```sh
yarn add @inquirer/search
```

</td>
</tr>
</table>

# Usage

```js
import { search, Separator } from '@inquirer/prompts';
// Or
// import search, { Separator } from '@inquirer/search';

const answer = await search({
  message: 'Select an npm package',
  source: async (input, { signal }) => {
    if (!input) {
      return [];
    }

    const response = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(input)}&size=20`,
      { signal },
    );
    const data = await response.json();

    return data.objects.map((pkg) => ({
      name: pkg.package.name,
      value: pkg.package.name,
      description: pkg.package.description,
    }));
  },
});
```

## Options

| Property | Type                                                       | Required | Description                                                                                                                                                                                          |
| -------- | ---------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message  | `string`                                                   | yes      | The question to ask                                                                                                                                                                                  |
| source   | `(term: string \| void) => Promise<Choice[]>`              | yes      | This function returns the choices relevant to the search term.                                                                                                                                       |
| pageSize | `number`                                                   | no       | By default, lists of choice longer than 7 will be paginated. Use this option to control how many choices will appear on the screen at once.                                                          |
| validate | `Value => boolean \| string \| Promise<boolean \| string>` | no       | On submit, validate the answer. When returning a string, it'll be used as the error message displayed to the user. Note: returning a rejected promise, we'll assume a code error happened and crash. |
| theme    | [See Theming](#Theming)                                    | no       | Customize look of the prompt.                                                                                                                                                                        |

### `source` function

The full signature type of `source` is as follow:

```ts
function(
  term: string | void,
  opt: { signal: AbortSignal },
): Promise<ReadonlyArray<Choice<Value> | Separator>>;
```

When `term` is `undefined`, it means the search term input is empty. You can use this to return default choices, or return an empty array.

Aside from returning the choices:

1. An `AbortSignal` is passed in to cancel ongoing network calls when the search term change.
2. `Separator`s can be used to organize the list.

### `Choice` object

The `Choice` object is typed as

```ts
type Choice<Value> = {
  value: Value;
  name?: string;
  description?: string;
  short?: string;
  disabled?: boolean | string;
};
```

Here's each property:

- `value`: The value is what will be returned by `await search()`.
- `name`: This is the string displayed in the choice list.
- `description`: Option for a longer description string that'll appear under the list when the cursor highlight a given choice.
- `short`: Once the prompt is done (press enter), we'll use `short` if defined to render next to the question. By default we'll use `name`.
- `disabled`: Disallow the option from being selected. If `disabled` is a string, it'll be used as a help tip explaining why the choice isn't available.

Choices can also be an array of string, in which case the string will be used both as the `value` and the `name`.

### Validation & autocomplete interaction

The validation within the search prompt acts as a signal for the autocomplete feature.

When a list value is submitted and fail validation, the prompt will compare it to the search term. If they're the same, the prompt display the error. If they're not the same, we'll autocomplete the search term to match the value. Doing this will trigger a new search.

You can rely on this behavior to implement progressive autocomplete searches. Where you want the user to narrow the search in a progressive manner.

Pressing `tab` also triggers the term autocomplete.

You can see this behavior in action in [our search demo](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/demo/demos/search.mjs).

## Theming

You can theme a prompt by passing a `theme` object option. The theme object only need to includes the keys you wish to modify, we'll fallback on the defaults for the rest.

```ts
type Theme = {
  prefix: string | { idle: string; done: string };
  spinner: {
    interval: number;
    frames: string[];
  };
  style: {
    answer: (text: string) => string;
    message: (text: string, status: 'idle' | 'done' | 'loading') => string;
    error: (text: string) => string;
    help: (text: string) => string;
    highlight: (text: string) => string;
    description: (text: string) => string;
    disabled: (text: string) => string;
    searchTerm: (text: string) => string;
    keysHelpTip: (keys: [key: string, action: string][]) => string | undefined;
  };
  icon: {
    cursor: string;
  };
};
```

### `theme.style.keysHelpTip`

This function allows you to customize the keyboard shortcuts help tip displayed below the prompt. It receives an array of key-action pairs and should return a formatted string. You can also hook here to localize the labels to different languages.

It can also returns `undefined` to hide the help tip entirely. This is the replacement for the deprecated theme option `helpMode: 'never'`.

```js
theme: {
  style: {
    keysHelpTip: (keys) => {
      // Return undefined to hide the help tip completely.
      return undefined;

      // Or customize the formatting. Or localize the labels.
      return keys.map(([key, action]) => `${key}: ${action}`).join(' | ');
    };
  }
}
```

## Recipes

### Debounce search

```js
import { setTimeout } from 'node:timers/promises';
import { search } from '@inquirer/prompts';

const answer = await search({
  message: 'Select an npm package',
  source: async (input, { signal }) => {
    await setTimeout(300);
    if (signal.aborted) return [];

    // Do the search
    fetch(...)
  },
});
```

# License

Copyright (c) 2024 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
