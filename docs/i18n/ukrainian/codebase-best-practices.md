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
  - Використовуйте логічні властивості: ви можете додати однаковий інтервал, використовуючи `padding-inline-end` та `margin-inline-start`, і вам не доведеться переживати про макет RTL, оскільки вони відповідають тому, де починається та закінчується рядок. Крім того, вам не доведеться турбуватися про додавання додаткових значень до файлів RTL, і, відповідно, не доведеться пам’ятати про зміну однакових значень у двох файлах.
- Не використовуйте `!important` у `font-family`: для макетів RTL та LTR використовуються різні шрифти; додавання `!important` до властивості `font-family` також впливає на макет RTL.

## Загальний JavaScript

У більшості випадків наш [лінтер](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) попереджатиме про будь-яке форматування, яке суперечить вподобанням нашої кодової бази.

Рекомендовано використовувати функціональні компоненти, а не класові.

## Особливий TypeScript

### Перенесення файлу JavaScript до TypeScript

#### Збереження історії файлів Git

Іноді зміна файлу з `<filename>.js` на `<filename>.ts` (або `.tsx`) призводить до видалення вихідного файлу та створення нового, а в іншому випадку просто змінюється назва файлу, згідно з Git. В ідеалі ми хочемо, щоб історія файлів була збережена.

Для цього потрібно:

1. Перейменувати файл
2. Позначити прапорцем `--no-verify`, щоб Хаскі не скаржився на помилки лінтера
3. Провести рефакторинг для перенесення у TypeScript в окремому коміті

> [!NOTE] Редактори типу VSCode однаково показуватимуть, що файл видалено та створено новий. Якщо ви використаєте CLI для `git add .`, то VSCode показуватиме файл як перейменований

### Конвенції про іменування

#### Інтерфейси та типи

У більшості випадків рекомендовано використовувати оголошення інтерфейсу, а не оголошення типу.

Пропси компоненту React — суфікс `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

Stateful-компоненти React — суфікс `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

За замовчуванням — ім’я об’єкта ВерблюдячимРегістром

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

### Як використовувати reduce

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

### Як використовувати dispatch

Імпортуйте необхідні дії та селектори всередині компонента.

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
