# `@inquirer/core`

The `@inquirer/core` package is the library enabling the creation of Inquirer prompts.

It aims to implements a lightweight API similar to React hooks - but without JSX.

# Installation

<table>
<tr>
  <th>npm</th>
  <th>yarn</th>
</tr>
<tr>
<td>

```sh
npm install @inquirer/core
```

</td>
<td>

```sh
yarn add @inquirer/core
```

</td>
</tr>
</table>

# Usage

## Basic concept

Visual terminal apps are at their core strings rendered onto the terminal.

The most basic prompt is a function returning a string that'll be rendered in the terminal. This function will run every time the prompt state change, and the new returned string will replace the previously rendered one. The prompt cursor appears after the string.

Wrapping the rendering function with `createPrompt()` will setup the rendering layer, inject the state management utilities, and wait until the `done` callback is called.

```ts
import { createPrompt } from '@inquirer/core';

const input = createPrompt((config, done) => {
  // Implement logic

  return '? My question';
});

// And it is then called as
const answer = await input({
  /* config */
});
```

## Hooks

State management and user interactions are handled through hooks. Hooks are common [within the React ecosystem](https://react.dev/reference/react/hooks), and Inquirer reimplement the common ones.

### State hook

State lets a component “remember” information like user input. For example, an input prompt can use state to store the input value, while a list prompt can use state to track the cursor index.

`useState` declares a state variable that you can update directly.

```ts
import { createPrompt, useState } from '@inquirer/core';

const input = createPrompt((config, done) => {
  const [index, setIndex] = useState(0);

  // ...
```

### Keypress hook

Almost all prompts need to react to user actions. In a terminal, this is done through typing.

`useKeypress` allows you to react to keypress events, and access the prompt line.

```ts
const input = createPrompt((config, done) => {
  useKeypress((key) => {
    if (key.name === 'enter') {
      done(answer);
    }
  });

  // ...
```

Behind the scenes, Inquirer prompts are wrappers around [readlines](https://nodejs.org/api/readline.html). Aside the keypress event object, the hook also pass the active readline instance to the event handler.

```ts
const input = createPrompt((config, done) => {
  useKeypress((key, readline) => {
    setValue(readline.line);
  });

  // ...
```

### Ref hook

Refs let a prompt hold some information that isn’t used for rendering, like a class instance or a timeout ID. Unlike with state, updating a ref does not re-render your prompt. Refs are an “escape hatch” from the rendering paradigm.

`useRef` declares a ref. You can hold any value in it, but most often it’s used to hold a timeout ID.

```ts
const input = createPrompt((config, done) => {
  const timeout = useRef(null);

  // ...
```

### Effect Hook

Effects let a prompt connect to and synchronize with external systems. This includes dealing with network or animations.

`useEffect` connects a component to an external system.

```ts
const chat = createPrompt((config, done) => {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  // ...
```

### Performance hook

A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell Inquirer to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

`useMemo` lets you cache the result of an expensive calculation.

```ts
const todoSelect = createPrompt((config, done) => {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  // ...
```

### Rendering hooks

#### Prefix / loading

All default prompts, and most custom ones, uses a prefix at the beginning of the prompt line. This helps visually delineate different questions, and provides a convenient area to render a loading spinner.

`usePrefix` is a built-in hook to do this.

```ts
const input = createPrompt((config, done) => {
  const prefix = usePrefix({ status });

  return `${prefix} My question`;
});
```

#### Pagination

When looping through a long list of options (like in the `select` prompt), paginating the results appearing on the screen at once can be necessary. The `usePagination` hook is the utility used within the `select` and `checkbox` prompts to cycle through the list of options.

Pagination works by taking in the list of options and returning a subset of the rendered items that fit within the page. The hook takes in a few options. It needs a list of options (`items`), and a `pageSize` which is the number of lines to be rendered. The `active` index is the index of the currently selected/selectable item. The `loop` option is a boolean that indicates if the list should loop around when reaching the end: this is the default behavior. The pagination hook renders items only as necessary, so it takes a function that can render an item at an index, including an `active` state, called `renderItem`.

```js
export default createPrompt((config, done) => {
  const [active, setActive] = useState(0);

  const allChoices = config.choices.map((choice) => choice.name);

  const page = usePagination({
    items: allChoices,
    active: active,
    renderItem: ({ item, index, isActive }) => `${isActive ? ">" : " "}${index}. ${item.toString()}`
    pageSize: config.pageSize,
    loop: config.loop,
  });

  return `... ${page}`;
});
```

## `createPrompt()` API

As we saw earlier, the rendering function should return a string, and eventually call `done` to close the prompt and return the answer.

```ts
const input = createPrompt((config, done) => {
  const [value, setValue] = useState();

  useKeypress((key, readline) => {
    if (key.name === 'enter') {
      done(answer);
    } else {
      setValue(readline.line);
    }
  });

  return `? ${config.message} ${value}`;
});
```

The rendering function can also return a tuple of 2 string (`[string, string]`.) The first string represents the prompt. The second one is content to render under the prompt, like an error message. The text input cursor will appear after the first string.

```ts
const number = createPrompt((config, done) => {
  // Add some logic here

  return [`? My question ${input}`, `! The input must be a number`];
});
```

### Typescript

If using typescript, `createPrompt` takes 2 generic arguments.

```ts
// createPrompt<Value, Config>
const input = createPrompt<string, { message: string }>(// ...
```

The first one is the type of the resolved value

```ts
const answer: string = await input();
```

The second one is the type of the prompt config; in other words the interface the created prompt will provide to users.

```ts
const answer = await input({
  message: 'My question',
});
```

## Key utilities

Listening for keypress events inside an inquirer prompt is a very common pattern. To ease this, we export a few utility functions taking in the keypress event object and return a boolean:

- `isEnterKey()`
- `isBackspaceKey()`
- `isSpaceKey()`
- `isUpKey()` - Note: this utility will handle vim and emacs keybindings (up, `k`, and `ctrl+p`)
- `isDownKey()` - Note: this utility will handle vim and emacs keybindings (down, `j`, and `ctrl+n`)
- `isNumberKey()` one of 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

## Theming

Theming utilities will allow you to expose customization of the prompt style. Inquirer also has a few standard theme values shared across all the official prompts.

To allow standard customization:

```ts
import { createPrompt, usePrefix, makeTheme, type Theme } from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';

type PromptConfig = {
  theme?: PartialDeep<Theme>;
};

export default createPrompt<string, PromptConfig>((config, done) => {
  const theme = makeTheme(config.theme);

  const prefix = usePrefix({ status, theme });

  return `${prefix} ${theme.style.highlight('hello')}`;
});
```

To setup a custom theme:

```ts
import { createPrompt, makeTheme, type Theme } from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';

type PromptTheme = {};

const promptTheme: PromptTheme = {
  icon: '!',
};

type PromptConfig = {
  theme?: PartialDeep<Theme<PromptTheme>>;
};

export default createPrompt<string, PromptConfig>((config, done) => {
  const theme = makeTheme(promptTheme, config.theme);

  const prefix = usePrefix({ status, theme });

  return `${prefix} ${theme.icon}`;
});
```

The [default theme keys cover](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/core/src/lib/theme.ts):

```ts
type DefaultTheme = {
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
  };
};
```

# Examples

You can refer to any `@inquirer/prompts` prompts for real examples:

- [Confirm Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/confirm/src/index.ts)
- [Input Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/input/src/index.ts)
- [Password Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/password/src/index.ts)
- [Editor Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/editor/src/index.ts)
- [Select Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/select/src/index.ts)
- [Checkbox Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/checkbox/src/index.ts)
- [Rawlist Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/rawlist/src/index.ts)
- [Expand Prompt](https://github.com/SBoudrias/Inquirer.js/blob/main/packages/expand/src/index.ts)

```ts
import colors from 'yoctocolors';
import {
  createPrompt,
  useState,
  useKeypress,
  isEnterKey,
  usePrefix,
  type Status,
} from '@inquirer/core';

const confirm = createPrompt<boolean, { message: string; default?: boolean }>(
  (config, done) => {
    const [status, setStatus] = useState<Status>('idle');
    const [value, setValue] = useState('');
    const prefix = usePrefix({});

    useKeypress((key, rl) => {
      if (isEnterKey(key)) {
        const answer = value ? /^y(es)?/i.test(value) : config.default !== false;
        setValue(answer ? 'yes' : 'no');
        setStatus('done');
        done(answer);
      } else {
        setValue(rl.line);
      }
    });

    let formattedValue = value;
    let defaultValue = '';
    if (status === 'done') {
      formattedValue = colors.cyan(value);
    } else {
      defaultValue = colors.dim(config.default === false ? ' (y/N)' : ' (Y/n)');
    }

    const message = colors.bold(config.message);
    return `${prefix} ${message}${defaultValue} ${formattedValue}`;
  },
);

/**
 *  Which then can be used like this:
 */
const answer = await confirm({ message: 'Do you want to continue?' });
```

# License

Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
