# Kurse VSCode Erweiterung

Dies beschreibt die Wartungsrichtlinien für das [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension) Repository, das den Quellcode für die [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses) Erweiterung enthält.

## Veröffentlichung der Erweiterung

Eine GitHub-Aktion veröffentlicht automatisch die Erweiterung im Visual Studio Marketplace bei der Veröffentlichung einer neuen GitHub-Version.

1. Packe eine neue Version der Erweiterung:

```bash
npm run pack -- <tag_type>
```

Dabei ist `<tag_type>` eines von: `major`, `minor`, `patch`.

2. Schiebe die neue Version nach `main`:

```bash
git commit -am "<tag_type>(<version>): <description>"
git push
```

Optional kannst du direkt zu `upstream/main` pushen, aber es wird empfohlen, einen neuen PR zu eröffnen, um die Richtigkeit zu überprüfen.

3. Erstelle eine neues GitHub-Release über die GitHub-Benutzeroberfläche:

- Erhöhe die Versionsnummer korrekt, wenn du einen neuen Tag erstellst.
- Lade die `.vsix`-Datei mit dem Release hoch.
- Veröffentliche das Release und bestätige, dass die Aktion erfolgreich war.

> [!NOTE] Das Erstellen einer Version erfordert Schreibzugriff auf das `freeCodeCamp/courses-vscode-extension` Repository.

## Manuelles Veröffentlichen der Erweiterung

Ein manueller Upload auf den Visual Studio Marketplace kann mit den folgenden Schritten durchgeführt werden:

1. Besuche https://marketplace.visualstudio.com/ und melde dich an
2. Navigiere zur [freeCodeCamp Publisher Seite](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Wähle die entsprechende Erweiterung aus und wähle `Update`
4. Lade die Datei aus deinen lokalen Dateien hoch
