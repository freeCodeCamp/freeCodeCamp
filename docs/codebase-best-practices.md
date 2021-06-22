# Codebase Best Practices

## General JavaScript

In most cases, our [linter](how-to-setup-freecodecamp-locally?id=follow-these-steps-to-get-your-development-environment-ready) will warn of any formatting which goes against this codebase's preferred practice.

## Specific TypeScript

### Migrating a JavaScript File to TypeScript

#### Retaining Git File History

Sometimes changing the file from `<filename>.js` -> `<filename>.tsx?` causes the original file to be deleted, and a new one created, and other times the filename just changes - in terms of Git. Ideally, we want the file history to be preserved.

The best bet at achieving this is to:

1. Rename the file
2. Commit with the flag `--no-verify` to prevent Husky from complaining about the lint errors
3. Refactor to TypeScript for migration, in a separate commit

> [!NOTE]
> Editors like VSCode are still likely to show you the file has been deleted and a new one created. If you use the CLI to `git add .`, then VSCode will show the file as renamed in stage

### Naming Conventions

#### Interfaces and Types

For the most part, it is encouraged to use interface over type declarations.

React Component Props - suffix with `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

React Stateful Components - suffix with `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

Default - object name in PascalCase

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

#### Redux Actions

## Further Literature

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript with React CheatSheet](https://github.com/typescript-cheatsheets/react#readme)
