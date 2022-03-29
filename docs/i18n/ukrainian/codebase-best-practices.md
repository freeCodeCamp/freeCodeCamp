# Найкращі практики кодової бази

## Загальний JavaScript

In most cases, our [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) will warn of any formatting which goes against this codebase's preferred practice.

Рекомендується використовувати функціональні компоненти замість класових компонентів.

## Specific TypeScript

### Migrating a JavaScript File to TypeScript

#### Збереження історії файлів Git

Sometimes changing the file from `<filename>.js` to `<filename>.ts` (or `.tsx`) causes the original file to be deleted, and a new one created, and other times the filename just changes - in terms of Git. Ideally, we want the file theirstory to be preserved.

Найкращі умови для досягнення цього:

1. Перейменувати файл
2. Commit with the flag `--no-verify` to prevent Husky from complaining about the lint errors
3. Refactor to TypeScript for migration, in a separate commit

> [!NOTE] Такі редактори, як VSCode, все одно показуватимуть, що файл видалено та створено новий. Якщо ви використовуєте `git add .`, тоді VSCode покаже файл як перейменований в процесі

### Naming Conventions

#### Інтерфейси та типи

For the most part, it is encouraged to use interface declarations over type declarations.

React Component Props - суфікс `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

React Stateful Components - суфікс `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

За замовчуванням - ім'я об'єкта в PascalCase

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Визначення дій

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

### Як підключити Reduce

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

Усередині компонента імпортуйте необхідні дії та селектори.

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

## Додаткова література

- [Документація по TypeScript](https://www.typescriptlang.org/docs/)
- [Підказки по TypeScript з React](https://github.com/typescript-cheatsheets/react#readme)
