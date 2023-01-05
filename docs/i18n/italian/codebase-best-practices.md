# Buone pratiche per il codebase

## Definire lo stile di un componente

Consigliamo di definire lo stile dei componenti seguendo la nostra [guida di stile](https://design-style-guide.freecodecamp.org/).

I colori sono definiti in [`variable.css`](/client/src/components/layouts/variables.css) e i font in [`fonts.css`](/client/src/components/layouts/fonts.css).

Siamo estremamente categorici circa l'aggiunta di nuove variabili/token ai colori. Dopo un'attenta ricerca, i colori sono stati scelti per rispettare l'identità del marchio freeCodeCamp, l'esperienza dello sviluppatore e l'accessibilità.

The `!important` keyword may be used to override values in some cases (e.g. accessibility concerns). È necessario aggiungere un commento che descriva il problema, in modo che non venga rimosso in un futuro refactoring.

### Supporto RTL

Stiamo cercando di supportare il layout da destra a sinistra (right-to-left, RTL) nel codebase per le lingue che sono lette in questa direzione. Per questo è necessario essere consapevoli di come definire lo stile dei componenti. Ecco alcune rapide regole pratiche da seguire:

- Don't use `float` properties
  - Use Flexbox and Grid layouts instead, as they have RTL support already built-in, and those will be easier to maintain and review.
- Don't define the direction while using `margin` and `padding`: it may seem harmless to use `padding-right` and `margin-left`, but these directions aren't mirrored when the layout changes to RTL, and adding counter values for them in the RTL file makes maintaining the codebase harder.
  - Use logical properties for them: You can add the same spacing by using `padding-inline-end` and `margin-inline-start`, and you won't need to worry about RTL layout, as they follow where the line starts and ends, and you won't need to add any extra values in the RTL files, so people won't need to remember to change the same values in two files.
- Don't use `!important` in `font-family`: RTL layout uses different fonts compared to the LTR layout, when you add `!important` in the `font-family` property it affects the RTL layout too.

## JavaScript generale

Nella maggior parte dei casi, il nostro [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) darà un avvertimento nel caso di un format che va contro le preferenze del nostro codebase.

Si incoraggia l'utilizzo di componenti funzionali invece di componenti basati su classi.

## TypeScript specifico

### Migrare un file da JavaScript a TypeScript

#### Mantenere la cronologia del file con Git

A volte cambiare il file da `<filename>.js` a `<filename>.ts` (o `.tsx`) fa sì che il file originale venga cancellato e  ne venga creato uno nuovo, altre volte è solo il nome del file a cambiare - per quanto riguarda Git. Idealmente, vogliamo che la cronologia dei file sia conservata.

Il modo migliore per assicurarsene è:

1. Rinominare il file
2. Fare un commit con il flag `--no-verify` per prevenire gli avvertimenti di Husky per errori di lint
3. Fare il refactoring per la migrazione a TypeScript in un commit separato

> [!NOTE] Un editor come VSCode ha buona probabilità di mostrare comunque che un file è stato eliminato e uno nuovo è stato creato. Se usi la CLI (Command Line Interface) per eseguire `git add .`, allora VSCode mostrerà che il file è stato rinominato

### Convenzioni per i nomi

#### Interfacce e Tipi

Per la maggior parte, incoraggiamo l'uso di dichiarazioni di interfaccia piuttosto che di tipo.

Props di componenti React - suffissi con `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

Componenti React stateful - suffissi con `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

Default - nomi di oggetti in PascalCase

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Definizione di azioni

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

### Come usare Reducer

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

### Come fare il dispatch

Dentro un componente, importa le azioni e i selettori necessari.

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

## Letture aggiuntive

- [Documentazione di TypeScript](https://www.typescriptlang.org/docs/)
- [CheatSheet di TypeScript con React](https://github.com/typescript-cheatsheets/react#readme)
