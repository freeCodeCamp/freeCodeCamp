# Рекомендації щодо кодової бази

## Загально про JavaScript

У більшості випадків наш [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) попереджатиме про будь-яке форматування, яке суперечить бажаному варіанту кодової бази.

Рекомендовано використовувати функціональні компоненти замість класових компонентів.

## Специфіка TypeScript

### Перенесення файлу JavaScript до TypeScript

#### Збереження історії файлів Git

Іноді зміна файлу з `<filename>.js` на `<filename>.ts` (або `.tsx`) призводить до видалення вихідного файлу та створення нового, а в інших випадках назва файлу просто змінюється, згідно Git. В ідеалі ми хочемо, щоб історія файлів була збережена.

Щоб цього досягти потрібно:

1. Перейменувати файл
2. Затвердити прапорцем `--no-verify`, щоб запобігти скаргам Хаскі на помилки lint
3. Провести реорганізацію коду в TypeScript, в окремому коміті

> [!NOTE] Такі редактори, як VSCode, однаково показуватимуть, що файл видалено та створено новий. Якщо ви використовуєте CLI для `git add .`, то VSCode показуватиме файл як перейменований

### Конвенції про іменування

#### Інтерфейси та типи

Рекомендовано використовувати оголошення інтерфейсу замість оголошення типів.

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

За замовчуванням - ім'я об'єкта ВерблюдячимРегістром

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

### Як використовувати Reduce

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

### Як використовувати Dispatch

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
