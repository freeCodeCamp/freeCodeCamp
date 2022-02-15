# コードベースのベストプラクティス

## 一般的な JavaScript

ほとんどの場合、[リンター](how-to-setup-freecodecamp-locally.md#follow-these-steps-to-get-your-development-environment-ready) は、コードベースの好ましいプラクティスに反するフォーマットを警告します。

クラスベースのコンポーネントよりも関数コンポーネントの使用を推奨します。

## 特定の TypeScript

### JavaScript ファイルを TypeScript に移行する

#### Git のファイル履歴を保持する

ファイル形式を `<filename>.js` から `<filename>.ts` (もしくは `.tsx`) へ変更すると、元のファイルが削除され新しいファイルが作成される場合があります。それ以外の場合は、Git においてファイル名が変更されます。 ファイルの履歴を保存できるのが理想です。

そのための最善策は次のとおりです。

1. ファイル名を変更する
2. フラグ `--no-verify` でコミットして、Husky がリントエラーについて不平を言うことを防ぐ
3. 別のコミットで、移行のために TypeScript にリファクタリングする

> [!NOTE] VScode 等のエディターは、ファイルが削除され新しいファイルが作成されたことを表示する可能性があります。 `git add .` に CLI を使用すると、VSCode はファイル名が変更されたものとしてステージに表示します。

### 命名規則

#### インターフェースと型

ほとんどの場合、型宣言にインターフェース宣言を使用することを推奨します。

React コンポーネントプロパティ -  サフィックスは `Props`

```typescript
interface MyComponentProps {}
// type MyComponentProps = {};
const MyComponent = (props: MyComponentProps) => {};
```

React ステートフルコンポーネント - サフィックスは `State`

```typescript
interface MyComponentState {}
// type MyComponentState = {};
class MyComponent extends Component<MyComponentProps, MyComponentState> {}
```

デフォルト - PascalCase 内のオブジェクト名

```typescript
interface MyObject {}
// type MyObject = {};
const myObject: MyObject = {};
```

<!-- #### Redux Actions -->

<!-- TODO: Once refactored to TS, showcase naming convention for Reducers/Actions and how to type dispatch funcs -->

## Redux

### Action 定義

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

### Reduce の方法

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

### Dispatch の方法

コンポーネント内で、必要なアクションとセレクターをインポートします。

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

## その他資料

- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
- [React CheatSheet 付き TypeScript](https://github.com/typescript-cheatsheets/react#readme)
