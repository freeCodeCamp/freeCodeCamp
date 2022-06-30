# Estensione di VSCode per i corsi

Questo dettaglia le linee guida della manutenzione del repo [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) che contiene il codice sorgente per l'estensione [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Pubblicazione dell'estensione

Una GitHub Action pubblica automagicamente l'estensione nel Visual Studio Marketplace, al rilascio di un nuovo GitHub Release.

1. Impacchetta una nuova versione dell'estensione:

```bash
npm run pack -- <tag_type>
```

Dove `<tag_type>` è uno dei seguenti: `major`, `minor`, `patch`.

2. Fai il push della nuova versione a `main`:

```bash
git commit -am "<tag_type>(<version>): <description>"
git push
```

Facoltativamente, puoi fare il push direttamente a `upstream/main`, ma aprire una PR è raccomandato per un sanity check.

3. Crea una nuova GitHub Release usando la GitHub UI:

- Implementa correttamente il numero di versione, quando crei una nuova tag.
- Upload the `.vsix` file with the release.
- Publish the release, and confirm the action succeeded.

> [!NOTE] Creating a release requires write access to the `freeCodeCamp/courses-vscode-extension` repository.

## Pubblicare l'estensione manualmente

A manual upload to the Visual Studio Marketplace can be achieved, by following these steps:

1. Visit https://marketplace.visualstudio.com/ and sign in
2. Navigate to the [freeCodeCamp Publisher page](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Select the relevant extension, and select `Update`
4. Upload the file from your local files
