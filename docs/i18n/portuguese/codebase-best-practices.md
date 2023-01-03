# Práticas recomendadas da base de código

## Estilizando um componente

Recomendamos estilizar componentes usando nosso [guia de estilo de design](https://design-style-guide.freecodecamp.org/).

As cores são definidas no arquivo [`variable.css`](/client/src/components/layouts/variables.css) e as fontes estão em [`fonts.css`](/client/src/components/layouts/fonts.css).

Temos uma opinião forte sobre a adição de novas variáveis/tokens às cores. Após uma pesquisa cuidadosa, as cores foram escolhidas para respeitar a identidade da marca freeCodeCamp, a experiência do desenvolvedor e a acessibilidade.

The `!important` keyword may be used to override values in some cases (e.g. accessibility concerns). Você deve adicionar um comentário descrevendo a questão para que ela não seja removida em futura refatoração.

### Suporte a RTL

Estamos nos esforçando para apoiar o layout da direita para a esquerda (do inglês, right-to-left, ou RTL) na base de código para os idiomas que são lidos nessa direção. Por isso, você precisa estar atento à maneira como estilizar os componentes. Seguem aqui algumas dicas práticas para isso:

- Don't use `float` properties
  - Use Flexbox and Grid layouts instead, as they have RTL support already built-in, and those will be easier to maintain and review.
- Don't define the direction while using `margin` and `padding`: it may seem harmless to use `padding-right` and `margin-left`, but these directions aren't mirrored when the layout changes to RTL, and adding counter values for them in the RTL file makes maintaining the codebase harder.
  - Use logical properties for them: You can add the same spacing by using `padding-inline-end` and `margin-inline-start`, and you won't need to worry about RTL layout, as they follow where the line starts and ends, and you won't need to add any extra values in the RTL files, so people won't need to remember to change the same values in two files.
- Don't use `!important` in `font-family`: RTL layout uses different fonts compared to the LTR layout, when you add `!important` in the `font-family` property it affects the RTL layout too.

## JavaScript em geral

Na maioria dos casos, nosso [linter](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) avisará sobre qualquer formatação que contradiga as práticas recomendadas desta base de código.

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
- [Ficha informativa de TypeScript com React](https://github.com/typescript-cheatsheets/react#readme)
