# @vscode/l10n

Library used for loading the translations into subprocesses of your extension. These usages also get picked up by [l10n-dev](https://github.com/microsoft/vscode-l10n/tree/main/l10n-dev) string extraction tooling.

> **Note**
>
> You should _NOT_ use this library in your extension's main process. The translations are loaded into the main process by VS Code itself.

## Usage

```typescript
import * as l10n from '@vscode/l10n';

// Load the translations for the current locale
l10n.config({
    contents: JSON.parse(process.env.BUNDLE_FROM_EXTENSION)
});
// or
l10n.config({
    fsPath: process.env.FSPATH_TO_BUNDLE_FROM_EXTENSION
});
// or (warning, this is async)
await l10n.config({
    uri: JSON.parse(process.env.BUNDLE_URI_FROM_EXTENSION)
});

// returns the translated string or the original string if no translation is available
l10n.t('Hello World');

// supports arguments just like the vscode API
l10n.t('Hello {0}', 'John');

// supports comments for translators
l10n.t({
    message: 'Hello {0}',
    args: ['John'],
    comment: ['This is a comment']
});
```

The input for `l10n.config` pairs nicely with the `bundle` and `uri` properties on the `l10n` namespace that are provided by the [VS Code API](https://code.visualstudio.com/api/references/vscode-api#l10n).
You should send the value of one of these properties from your extension to your subprocess that is consuming `@vscode/l10n`.
