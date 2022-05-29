# Estensione di VSCode per i corsi

Questo dettaglia le linee guida della manutenzione del repo [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) che contiene il codice sorgente per l'estensione [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Pubblicazione dell'estensione

Una azione GitHub pubblica l'estensione automagicamente su Visual Studio marketplace quando il branch `prod` viene aggiornato.

Assicurati di essere sul branch `main`.

```bash
git checkout main
```

Aggiorna il repository locale con `upstream`, e ripristina `main`.

```bash
git fetch upstream
git reset --hard upstream/main
```

Vai sul branch `prod`.

```bash
git checkout prod
```

Unisci i commit da distribuire in `prod`.

```bash
git merge main
```

Fai il push del ramo locale a `upstream`.

```bash
git push upstream
```

> [!NOTE] Fare il push ad `upstream` richieste il permesso di scrittura al repo `freeCodeCamp/courses-vscode-extension`.

## Pubblicare l'estensione manualmente

Un upload manuale a Visual Studio Code può essere fatto, seguendo questi step:

1. Visita https://marketplace.visualstudio.com/ e fai l'accesso
2. Naviga alla pagina [freeCodeCamp Publisher page](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Seleziona l'estensione rilevante, e seleziona `Update`
4. Carica il file dal tuo file locale
