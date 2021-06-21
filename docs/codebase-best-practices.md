# Codebase Best Practices

## General JavaScript

## Specific TypeScript

### Migrating a JavaScript File to TypeScript

#### Retaining Git File History

Sometimes changing the file from `<filename>.js` -> `<filename>.tsx?` causes the original file to be deleted, and a new one created, and other times the filename just changes - in terms of Git. Ideally, we want the file history to be preserved.

The best bet at achieving this is by:

1. Rename the file
2. Commit with the flag `--no-verify` to prevent Husky from complaining about the lint errors
3. Refactor to TypeScript for migration, in a separate commit

> [!NOTE]
> Editors like VSCode are still likely to show you the file has been deleted and a new one created. If you use the CLI to `git add .`, then VSCode will show the file as renamed in stage

## Further Literature

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript with React CheatSheet](https://github.com/typescript-cheatsheets/react#readme)
