# Best Practices für die Codebasis

## JavaScript allgemein

In den meisten Fällen warnt unser [Linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) vor jeder Formatierung, die gegen die bevorzugte Vorgehensweise dieser Codebasis verstößt.

Es wird empfohlen, funktionale Komponenten gegenüber klassenbasierten Komponenten zu verwenden.

## Spezifisches TypeScript

### Migration einer JavaScript-Datei zu TypeScript

#### Beibehalten des Git-Dateiverlaufs

Manchmal führt das Ändern der Datei von `<Dateiname>.js` zu `<Dateiname>.ts` (oder `.tsx`) dazu, dass die ursprüngliche Datei gelöscht und eine neue erstellt wird, und manchmal ändert sich nur der Dateiname - im Sinne von Git. Idealerweise möchten wir, dass der Dateiverlauf erhalten bleibt.

Um dies zu erreichen, gehe am besten wie folgt vor:

1. Umbenennen der Datei
2. Commit mit dem Flag `--no-verify`, damit Husky sich nicht über die Lint-Fehler beschwert
3. Refactoring zu TypeScript für die Migration, in einem separaten Commit

> [!NOTE] Editoren wie VSCode zeigen dir wahrscheinlich trotzdem an, dass die Datei gelöscht und eine neue erstellt wurde. Wenn du die CLI für `git add .` verwendest, zeigt VSCode die Datei als umbenannt im Stage an

### Namenskonventionen

#### Schnittstellen und Typen

In den meisten Fällen wird empfohlen, Schnittstellendeklarationen gegenüber Typdeklarationen zu verwenden.

React Component Props - Suffix mit `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

React Stateful Components - Suffix mit `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

Standard - Objektname in PascalCase

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Aktionsdefinitionen

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

### Wie man Reducer verwendet

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

### Wie man Dispatch verwendet

Importiere innerhalb einer Komponente die benötigten Aktionen und Selektoren.

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

## Weitere Literatur

- [TypeScript Dokumentation](https://www.typescriptlang.org/docs/)
- [TypeScript mit React CheatSheet](https://github.com/typescript-cheatsheets/react#readme)
