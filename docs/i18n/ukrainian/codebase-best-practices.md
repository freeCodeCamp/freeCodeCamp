# Рекомендації щодо кодової бази

## Стилізація компоненту

Ми рекомендуємо стилізувати компоненти, використовуючи наш [посібник зі стилю](https://design-style-guide.freecodecamp.org/).

Кольори визначені у [`variable.css`](/client/src/components/layouts/variables.css), а шрифти визначені у [`fonts.css`](/client/src/components/layouts/fonts.css).

Ми категоричні щодо додавання нових змінних/токенів до кольорів. Після ретельного аналізу ми обрали кольори, які відповідають ідентичності бренду freeCodeCamp, досвіду розробників і доступності.

Ключове слово `!important` може бути використане для заміни значень у деяких випадках (наприклад, проблеми доступності). Ви повинні додати коментар з описом проблеми, щоб її не видалили у майбутньому рефакторингу.

### Підтримка RTL

Ми прагнемо підтримувати макети справа наліво (RTL) у кодовій базі для мов, які використовують письмо в такому напрямку. Для цього потрібно бути уважними щодо стилізації компонентів. Ось деякі правила, яких потрібно дотримуватись:

- Не використовуйте властивості `float`
  - Натомість використовуйте макети Flexbox та Grid, оскільки вони мають вбудовану підтримку RTL, і їх буде простіше підтримувати та переглядати.
- Не визначайте напрямок, використовуючи `margin` та `padding`: використання `padding-right` та `margin-left` може здаватись безобідним, але ці напрямки не відображаються, коли макет змінюється на RTL, а додавання протилежних значень ускладнює утримання кодової бази.
  - Використовуйте логічні властивості: ви можете додати однаковий інтервал, використовуючи `padding-inline-end` та `margin-inline-start`, і вам не доведеться переживати про макет RTL, оскільки вони відповідають тому, де починається на закінчується рядок. Крім того, вам не доведеться турбуватися про додавання додаткових значень до файлів RTL, і, відповідно, не доведеться пам’ятати про зміну однакових значень у двох файлах.
- Не використовуйте `!important` у `font-family`: для макетів RTL та LTR використовуються різні шрифти; додавання `!important` до властивості `font-family` впливає й на макет RTL.

## General JavaScript

In most cases, our [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) will warn of any formatting which goes against this codebase's preferred practice.

It is encouraged to use functional components over class-based components.

## Specific TypeScript

### Migrating a JavaScript File to TypeScript

#### Збереження історії файлів Git

Sometimes changing the file from `<filename>.js` to `<filename>.ts` (or `.tsx`) causes the original file to be deleted, and a new one created, and other times the filename just changes - in terms of Git. Ideally, we want the file history to be preserved.

The best bet at achieving this is to:

1. Перейменувати файл
2. Затвердити прапорцем `--no-verify`, щоб запобігти скаргам Хаскі на помилки lint
3. Провести реорганізацію коду в TypeScript, в окремому коміті

> [!NOTE] Такі редактори, як VSCode, однаково показуватимуть, що файл видалено та створено новий. Якщо ви використовуєте CLI для `git add .`, то VSCode показуватиме файл як перейменований

### Конвенції про іменування

#### Інтерфейси та типи

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

## Додаткова література

- [Документація TypeScript](https://www.typescriptlang.org/docs/)
- [Шпаргалка для TypeScript із React](https://github.com/typescript-cheatsheets/react#readme)
