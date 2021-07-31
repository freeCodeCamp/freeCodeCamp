# Práticas recomendadas da base de código

## JavaScript em geral

Na maioria dos casos, nosso [linter](how-to-setup-freecodecamp-locally?id=follow-these-steps-to-get-your-development-environment-ready) avisará sobre qualquer formatação que contradiga as práticas recomendadas desta base de código.

Recomendamos o uso de componentes funcionais em vez de componentes baseados em classes.

## TypeScript em específico

### Migração de um arquivo JavaScript para TypeScript

#### Manutenção do histórico de arquivos do Git

Algumas vezes, alterar o arquivo de `<filename>.js` para `<filename>.ts` (ou `.tsx`) faz com que o arquivo original seja excluído e que um novo arquivo seja criado. Em outras situações simplesmente muda – nos termos do Git. O ideal é preservarmos o histórico dos arquivos.

A melhor maneira de conseguir isso é:

1. Renomear o arquivo
2. Fazer o commit com a flag `--no-verify` para evitar que o Husky reclame de erros de lint
3. Refatorar o TypeScript para migração em um commit em separado

> [!NOTE] Editores como o VSCode provavelmente mostrarão a você que o arquivo foi excluído e que um novo arquivo foi criado. Se você utilizar a CLI para `git add .`, o VSCode mostrará o arquivo como renomeado na fase de stage

### Convenções de nomes

#### Interfaces e tipos

Na maioria dos casos, recomendamos usar declarações de interface em vez de declarações de tipo.

Props de componentes do React – sufixo com `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

Componentes stateful do React  – sufixo com `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

Padrão – nome do objeto em PascalCase

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Definições de ações

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

### Como fazer a redução

```typescript
// Ação de redução de base sem payload
type ReducerBase<T> = { type: T };
// Lógica para lidar com os payloads opcionais
type ReducerPayload<T extends AppActionTypes> =
  T extends AppActionTypes.actionFunction
    ? ReducerBase<T> & {
        payload: AppState['property'];
      }
    : ReducerBase<T>;

// Trocar o redutor exportado pelos combineReducers do Redux
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

### Como fazer o dispatch

Em um componente, importe as ações e os seletores necessários.

```tsx
// Adicione a definição de tipo
interface MyComponentProps {
  actionFunction: typeof actionFunction;
}
// Conecte à store do Redux
const mapDispatchToProps = {
  actionFunction
};
// Exemplo de componente do React conectado à store
const MyComponent = ({ actionFunction }: MyComponentProps): JSX.Element => {
  const handleClick = () => {
    // Função de dispatch
    actionFunction();
  };
  return <button onClick={handleClick}>freeCodeCamp is awesome!</button>;
};

export default connect(null, mapDispatchToProps)(MyComponent);
```

<!-- ### Redux Types File -->
<!-- The types associated with the Redux store state are located in `client/src/redux/types.ts`... -->

## Mais informações

- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript com a cheatsheet do React](https://github.com/typescript-cheatsheets/react#readme)
