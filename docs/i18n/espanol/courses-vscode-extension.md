# Courses VSCode Extension

This details the maintenance guidelines for the [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) repository which contains the source code for the [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses) extension.

## Publishing the Extension

A GitHub Action automagically publishes the extension to the Visual Studio Marketplace, on pushes to the `prod` branch.

Ensure the `main` branch is checked out.

```bash
git checkout main
```

Update the local repository with `upstream`, and reset `main`.

```bash
git fetch upstream
git reset --hard upstream/main
```

Checkout the `prod` branch.

```bash
git checkout prod
```

Merge the commits wanted for deployment into `prod`.

```bash
git merge main
```

Push the local branch to `upstream`.

```bash
git push upstream
```

> [!NOTE] Pushing to `upstream` requires write access to the `freeCodeCamp/courses-vscode-extension` repository.

## Manually Publishing the Extension

A manual upload to the Visual Studio Marketplace can be achieved, by following these steps:

1. Visit https://marketplace.visualstudio.com/ and sign in
2. Navigate to the [freeCodeCamp Publisher page](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Select the relevant extension, and select `Update`
4. Upload the file from your local files
