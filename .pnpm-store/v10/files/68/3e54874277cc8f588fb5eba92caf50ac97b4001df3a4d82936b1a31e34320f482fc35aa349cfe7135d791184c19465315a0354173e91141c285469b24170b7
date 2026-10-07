# `@inquirer/password`

Interactive password input component for command line interfaces. Supports input validation and masked or transparent modes.

![Password prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/password.svg)

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
npm install @inquirer/password
```

</td>
<td>

```sh
yarn add @inquirer/password
```

</td>
</tr>
</table>

# Usage

```js
import { password } from '@inquirer/prompts';
// Or
// import password from '@inquirer/password';

const answer = await password({ message: 'Enter your name' });
```

## Options

| Property | Type                                                        | Required | Description                                                                                                                                                                                                             |
| -------- | ----------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message  | `string`                                                    | yes      | The question to ask                                                                                                                                                                                                     |
| mask     | `boolean`                                                   | no       | Show a `*` mask over the input or keep it transparent                                                                                                                                                                   |
| validate | `string => boolean \| string \| Promise<boolean \| string>` | no       | On submit, validate the filtered answered content. When returning a string, it'll be used as the error message displayed to the user. Note: returning a rejected promise, we'll assume a code error happened and crash. |
| theme    | [See Theming](#Theming)                                     | no       | Customize look of the prompt.                                                                                                                                                                                           |

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
  };
};
```

# License

Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
