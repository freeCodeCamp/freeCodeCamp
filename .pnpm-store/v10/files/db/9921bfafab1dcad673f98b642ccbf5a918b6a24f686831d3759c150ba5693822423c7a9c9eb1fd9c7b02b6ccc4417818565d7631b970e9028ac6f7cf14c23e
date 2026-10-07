# `@inquirer/expand`

Compact single select prompt. Every option is assigned a shortcut key, and selecting `h` will expand all the choices and their descriptions.

![Expand prompt closed](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/expand-y.svg)
![Expand prompt expanded](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/expand-d.svg)

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
npm install @inquirer/expand
```

</td>
<td>

```sh
yarn add @inquirer/expand
```

</td>
</tr>
</table>

# Usage

```js
import { expand } from '@inquirer/prompts';
// Or
// import expand from '@inquirer/expand';

const answer = await expand({
  message: 'Conflict on file.js',
  default: 'y',
  choices: [
    {
      key: 'y',
      name: 'Overwrite',
      value: 'overwrite',
    },
    {
      key: 'a',
      name: 'Overwrite this one and all next',
      value: 'overwrite_all',
    },
    {
      key: 'd',
      name: 'Show diff',
      value: 'diff',
    },
    {
      key: 'x',
      name: 'Abort',
      value: 'abort',
    },
  ],
});
```

## Options

| Property | Type                    | Required | Description                                                                               |
| -------- | ----------------------- | -------- | ----------------------------------------------------------------------------------------- |
| message  | `string`                | yes      | The question to ask                                                                       |
| choices  | `Choice[]`              | yes      | Array of the different allowed choices. The `h`/help option is always provided by default |
| default  | `string`                | no       | Default choices to be selected. (value must be one of the choices `key`)                  |
| expanded | `boolean`               | no       | Expand the choices by default                                                             |
| theme    | [See Theming](#Theming) | no       | Customize look of the prompt.                                                             |

`Separator` objects can be used in the `choices` array to render non-selectable lines in the choice list. By default it'll render a line, but you can provide the text as argument (`new Separator('-- Dependencies --')`). This option is often used to add labels to groups within long list of options.

### `Choice` object

The `Choice` object is typed as

```ts
type Choice<Value> = {
  value: Value;
  name?: string;
  key: string;
};
```

Here's each property:

- `value`: The value is what will be returned by `await expand()`.
- `name`: The string displayed in the choice list. It'll default to the stringify `value`.
- `key`: The input the use must provide to select the choice. Must be a lowercase single alpha-numeric character string.

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
    highlight: (text: string) => string;
  };
};
```

# License

Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
