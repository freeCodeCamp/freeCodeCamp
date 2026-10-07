# `@inquirer/checkbox`

Simple interactive command line prompt to display a list of checkboxes (multi select).

![Checkbox prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/checkbox.svg)

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
<td colSpan="2" align="center">Or</td>
</tr>
<tr>
<td>

```sh
npm install @inquirer/checkbox
```

</td>
<td>

```sh
yarn add @inquirer/checkbox
```

</td>
</tr>
</table>

# Usage

```js
import { checkbox, Separator } from '@inquirer/prompts';
// Or
// import checkbox, { Separator } from '@inquirer/checkbox';

const answer = await checkbox({
  message: 'Select a package manager',
  choices: [
    { name: 'npm', value: 'npm' },
    { name: 'yarn', value: 'yarn' },
    new Separator(),
    { name: 'pnpm', value: 'pnpm', disabled: true },
    {
      name: 'pnpm',
      value: 'pnpm',
      disabled: '(pnpm is not available)',
    },
  ],
});
```

## Options

| Property  | Type                                    | Required | Description                                                                                                                                                                                           |
| --------- | --------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message   | `string`                                | yes      | The question to ask                                                                                                                                                                                   |
| choices   | `Choice[]`                              | yes      | List of the available choices.                                                                                                                                                                        |
| pageSize  | `number`                                | no       | By default, lists of choice longer than 7 will be paginated. Use this option to control how many choices will appear on the screen at once.                                                           |
| loop      | `boolean`                               | no       | Defaults to `true`. When set to `false`, the cursor will be constrained to the top and bottom of the choice list without looping.                                                                     |
| required  | `boolean`                               | no       | When set to `true`, ensures at least one choice must be selected.                                                                                                                                     |
| validate  | `async (Choice[]) => boolean \| string` | no       | On submit, validate the choices. When returning a string, it'll be used as the error message displayed to the user. Note: returning a rejected promise, we'll assume a code error happened and crash. |
| shortcuts | [See Shortcuts](#Shortcuts)             | no       | Customize shortcut keys for `all` and `invert`.                                                                                                                                                       |
| theme     | [See Theming](#Theming)                 | no       | Customize look of the prompt.                                                                                                                                                                         |

`Separator` objects can be used in the `choices` array to render non-selectable lines in the choice list. By default it'll render a line, but you can provide the text as argument (`new Separator('-- Dependencies --')`). This option is often used to add labels to groups within long list of options.

### `Choice` object

The `Choice` object is typed as

```ts
type Choice<Value> = {
  value: Value;
  name?: string;
  checkedName?: string;
  description?: string;
  short?: string;
  checked?: boolean;
  disabled?: boolean | string;
};
```

Here's each property:

- `value`: The value is what will be returned by `await checkbox()`.
- `name`: This is the string displayed in the choice list.
- `checkedName`: Alternative `name` (or format) displayed when the choice is checked.
- `description`: Option for a longer description string that'll appear under the list when the cursor highlight a given choice.
- `short`: Once the prompt is done (press enter), we'll use `short` if defined to render next to the question. By default we'll use `name`.
- `checked`: If `true`, the option will be checked by default.
- `disabled`: Disallow the option from being selected. If `disabled` is a string, it'll be used as a help tip explaining why the choice isn't available.

Also note the `choices` array can contain `Separator`s to help organize long lists.

`choices` can also be an array of string, in which case the string will be used both as the `value` and the `name`.

## Shortcuts

You can customize the shortcut keys for `all` and `invert` or disable them by setting them to `null`.

```ts
type Shortcuts = {
  all?: string | null; // default: 'a'
  invert?: string | null; // default: 'i'
};
```

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
    defaultAnswer: (text: string) => string;
    help: (text: string) => string;
    highlight: (text: string) => string;
    key: (text: string) => string;
    disabledChoice: (text: string) => string;
    description: (text: string) => string;
    renderSelectedChoices: <T>(
      selectedChoices: ReadonlyArray<Choice<T>>,
      allChoices: ReadonlyArray<Choice<T> | Separator>,
    ) => string;
    keysHelpTip: (keys: [key: string, action: string][]) => string | undefined;
  };
  icon: {
    checked: string;
    unchecked: string;
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
      // Return undefined to hide the help tip completely
      return undefined;

      // Or customize the formatting. Or localize the labels.
      return keys.map(([key, action]) => `${key}: ${action}`).join(' | ');
    };
  }
}
```

# License

Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
