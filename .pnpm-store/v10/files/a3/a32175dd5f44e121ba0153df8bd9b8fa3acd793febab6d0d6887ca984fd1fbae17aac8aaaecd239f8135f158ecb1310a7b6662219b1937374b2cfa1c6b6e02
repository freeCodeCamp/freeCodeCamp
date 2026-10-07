# `@inquirer/editor`

Prompt that'll open the user preferred editor with default content and allow for a convenient multi-line input controlled through the command line.

The editor launched is the one [defined by the user's `EDITOR` environment variable](https://dev.to/jonasbn/til-integrate-visual-studio-code-with-shell--cli-2l1l).

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
npm install @inquirer/editor
```

</td>
<td>

```sh
yarn add @inquirer/editor
```

</td>
</tr>
</table>

# Usage

```js
import { editor } from '@inquirer/prompts';
// Or
// import editor from '@inquirer/editor';

const answer = await editor({
  message: 'Enter a description',
});
```

## Options

| Property         | Type                                                                           | Required               | Description                                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message          | `string`                                                                       | yes                    | The question to ask                                                                                                                                                                                                                    |
| default          | `string`                                                                       | no                     | Default value which will automatically be present in the editor                                                                                                                                                                        |
| validate         | `string => boolean \| string \| Promise<boolean \| string>`                    | no                     | On submit, validate the content. When returning a string, it'll be used as the error message displayed to the user. Note: returning a rejected promise, we'll assume a code error happened and crash.                                  |
| postfix          | `string`                                                                       | no (default to `.txt`) | The postfix of the file being edited. Adding this will add color highlighting to the file content in most editors.                                                                                                                     |
| file             | [`IFileOptions`](https://github.com/mrkmg/node-external-editor#config-options) | no                     | Exposes the [`external-editor` package options](https://github.com/mrkmg/node-external-editor#config-options) to configure the temporary file.                                                                                         |
| waitForUserInput | `boolean`                                                                      | no (default to `true`) | Open the editor automatically without waiting for the user to press enter. Note that this mean the user will not see the question! So make sure you have a default value that provide guidance if it's unclear what input is expected. |
| theme            | [See Theming](#Theming)                                                        | no                     | Customize look of the prompt.                                                                                                                                                                                                          |

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
    message: (text: string, status: 'idle' | 'done' | 'loading') => string;
    error: (text: string) => string;
    help: (text: string) => string;
    key: (text: string) => string;
  };
  validationFailureMode: 'keep' | 'clear';
};
```

`validationFailureMode` defines the behavior of the prompt when the value submitted is invalid. By default, we'll keep the value allowing the user to edit it. When the theme option is set to `clear`, we'll remove and reset to the default value or empty string.

# License

Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
