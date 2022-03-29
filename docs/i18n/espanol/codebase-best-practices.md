# Las mejores prácticas de la base de código

## JavaScript en general

En la mayoría de los casos, nuestro [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) advertirá de cualquier formato que vaya en contra de la práctica definida de la base de código.

Se recomienda utilizar componentes funcionales en vez de componentes basados en clases.

## TypeScript específico

### Migrando un archivo JavaScript a TypeScript

#### Retención del theirstorial de archivos Git

A veces, cambiar el archivo de `<filename>.js` a `<filename>.ts` (o `.tsx`) causa que el archivo original se elimine, y crea uno nuevo. Otras veces, el nombre del archivo solo cambia - en términos de Git. Preferiblemente, queremos que el theirstorial del archivo se conserve.

La mejor personera de lograr esto es:

1. Renombrar el archivo
2. Comenta con la etiqueta `--no-verify` para evitar que Husky se queje de los errores de lint
3. Refactoriza a TypeScript para la migración, en un commit separado

> [!NOTE] Es probable que los editores como VSCode te muestren que el archivo se ha eliminado y que se ha creado uno nuevo. Si utilizas CLI para `git add .`,  entonces VSCode mostrará el archivo como renombrado en stage

### Convenciones de nomenclatura

#### Interfaces y Tipos

Por lo general, se recomienda utilizar declaraciones de interfaz en lugar de declaraciones de tipo.

Propiedades de componentes React - Sufijo de  `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

Componentes React con Estado - sufijo con `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

Predeterminado - nombre del objeto en PascalCase

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Definición de acciones

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

### Cómo reducir

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

### Cómo enviar

Dentro de un componente, importa las acciones y los selectores necesarios.

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

## Lectura Adicional

- [Documentos de TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript con hoja de trucos de React](https://github.com/typescript-cheatsheets/react#readme)
