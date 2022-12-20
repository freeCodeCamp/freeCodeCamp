# Codebase Best Practices

## Styling a component

Be mindful of adding new colors to the codebase, as you will have to account for contrast and color blindness. Because of this, we always use already determined variables in [variable.css](/client/src/components/layouts/variables.css).

We are against adding new variables to [variable.css](/client/src/components/layouts/variables.css), because we have to account for contrast, color blindness 🙂, and cluttering the devtools which affects negatively the devtools experiences and add concerns for accessibility.

Use `!important` for accessibility concerns only after leaving a comment describing the issue, so it won't be removed by mistake in future refactoring.

### RTL support

We are striving to support RTL layout in the codebase, for this you need be mindful of how to style the component in your PR. Here are a quick role of thumbs to follow:

- Don't use float properties: Although it may seem best to have the component in the "perfect position", you will be climbing mountains to reach that perfect positioning in responsive layout, and you will need to reach higher heights to have it supported in RTL. 
- - Use flexbox and Grid layouts instead, as they have RTL support already built in them, and it will be easier to maintain and review
- Don't define the direction while using `margin` and `padding`: it may seem harmless to use `padding-right` and `margin-left`, but these directions aren't mirrored when the layout change to RTL, and adding counter values for them in the RTL file makes maintaining the codebase harder.
- - Use logical properties for them: You can add the same spacing by using `padding-inline-end` and `margin-inline-start`, and you won't need to worry about RTL layout, as they follow where the line start and ends, and you won't need to add any extra values in the RTL files, so people won't need to remember to change the same values in two files.
- Don't use `!important` in `font-family`: RTL layout is using different font from the LTR layout, when you add `!important` in the `font-family` property it affects the RTL layout too, which causes a UI bug.

## General JavaScript

In most cases, our [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) will warn of any formatting which goes against this codebase's preferred practice.

It is encouraged to use functional components over class-based components.

## Specific TypeScript

### Migrating a JavaScript File to TypeScript

#### Retaining Git File History

Sometimes changing the file from `<filename>.js` to `<filename>.ts` (or `.tsx`) causes the original file to be deleted, and a new one created, and other times the filename just changes - in terms of Git. Ideally, we want the file history to be preserved.

The best bet at achieving this is to:

1. Rename the file
2. Commit with the flag `--no-verify` to prevent Husky from complaining about the lint errors
3. Refactor to TypeScript for migration, in a separate commit

> [!NOTE]
> Editors like VSCode are still likely to show you the file has been deleted and a new one created. If you use the CLI to `git add .`, then VSCode will show the file as renamed in stage

### Naming Conventions

#### Interfaces and Types

For the most part, it is encouraged to use interface declarations over type declarations.

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

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Action Definitions

```typescript
enum AppActionTypes = {
  actionFunction = 'actionFunction'
}

export const actionFunction = (
  arg: Arg
): ReducerPayload<AppActionTypes.actionFunction> => ({
  type: AppActionTypes.actionFunction,
  payload: arg
});
```

### How to Reduce

```typescript
// Base reducer action without payload
type ReducerBase<T> = { type: T };
// Logic for handling optional payloads
type ReducerPayload<T extends AppActionTypes> =
  T extends AppActionTypes.actionFunction
    ? ReducerBase<T> & {
        payload: AppState['property'];
      }
    : ReducerBase<T>;

// Switch reducer exported to Redux combineReducers
export const reducer = (
  state: AppState = initialState,
  action: ReducerPayload<AppActionTypes>
): AppState => {
  switch (action.type) {
    case AppActionTypes.actionFunction:
      return { ...state, property: action.payload };
    default:
      return state;
  }
};
```

### How to Dispatch

Within a component, import the actions and selectors needed.

```tsx
// Add type definition
interface MyComponentProps {
  actionFunction: typeof actionFunction;
}
// Connect to Redux store
const mapDispatchToProps = {
  actionFunction
};
// Example React Component connected to store
const MyComponent = ({ actionFunction }: MyComponentProps): JSX.Element => {
  const handleClick = () => {
    // Dispatch function
    actionFunction();
  };
  return <button onClick={handleClick}>freeCodeCamp is awesome!</button>;
};

export default connect(null, mapDispatchToProps)(MyComponent);
```

<!-- ### Redux Types File -->
<!-- The types associated with the Redux store state are located in `client/src/redux/types.ts`... -->

## Further Literature

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript with React CheatSheet](https://github.com/typescript-cheatsheets/react#readme)
