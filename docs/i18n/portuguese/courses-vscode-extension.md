# Extensão do VSCode Courses

Aqui detalharemos as diretrizes de manutenção para o [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) repositório que contém o código-fonte para a extensão [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Publicando a extensão

A GitHub Action automagically publishes the extension to the Visual Studio Marketplace, on the release of a new GitHub Release.

1. Package a new version of the extension:

```bash
npm run pack -- <tag_type>
```

Where `<tag_type>` is one of: `major`, `minor`, `patch`.

2. Push the new version to `main`:

```bash
git commit -am "<tag_type>(<version>): <description>"
git push
```

Optionally, you can push directly to `upstream/main`, but opening a new PR is recommended for a sanity check.

3. Create a new GitHub Release using the GitHub UI:

- Correctly increment the version number, when creating a new tag.
- Upload the `.vsix` file with the release.
- Publish the release, and confirm the action succeeded.

> [!NOTE] Creating a release requires write access to the `freeCodeCamp/courses-vscode-extension` repository.

## Publicando a extensão manualmente

A manual upload to the Visual Studio Marketplace can be achieved, by following these steps:

1. Visit https://marketplace.visualstudio.com/ and sign in
2. Navigate to the [freeCodeCamp Publisher page](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Select the relevant extension, and select `Update`
4. Upload the file from your local files
