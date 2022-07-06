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
- Fai l'upload del file `.vsix` con la nuova release.
- Pubblica la release, e conferma che l'azione ha avuto successo.

> [!NOTE] Creare una release richiede permessi di scrittura sul repository `freeCodeCamp/courses-vscode-extension`.

## Pubblicare l'estensione manualmente

Un upload manuale al Visual Studio Marketplace può essere fatto, seguendo questi step:

1. Visita https://marketplace.visualstudio.com/ e fai log in
2. Naviga alla [pagina freeCodeCamp Publisher](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Seleziona l'estensione rilevante, e seleziona `Update`
4. Carica il file dai tuoi file locali
