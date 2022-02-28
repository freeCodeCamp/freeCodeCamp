Diese Seite beschreibt, wie du zu den freeCodeCamp-Tutorials und -Projekten beitragen kannst, die mit der CodeRoad VS Code-Erweiterung durchgeführt werden.

## Wie die Tutorials funktionieren

Die freeCodeCamp-Tutorials, die CodeRoad verwenden, haben jeweils ihr eigenes Repo unter der freeCodeCamp GitHub-Organisation. Sie beginnen alle mit `learn-`. Zum Beispiel: `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Jedes Tutorial-Repo hat einen `main`-Branch und einen „Version“-Branch, z.B. `v1.0.0`.

Die beiden wichtigsten Dateien im `main`-Branch sind `TUTORIAL.md` und `coderoad.yaml`. `TUTORIAL.md` enthält alle Anweisungen, Hinweise, Titel und so weiter für das Tutorial. `coderoad.yaml` enthält Anweisungen für CodeRoad, z.B. welche Befehle wann ausgeführt werden sollen, welche Dateien auf Änderungen zu beobachten sind und welcher Versionsbranch für die Schritte zu verwenden ist.

Der „Version“-Branch enthält die Commits, die bei jedem Schritt eines Tutorials geladen werden. Die Commit-Nachrichten für diesen Branch müssen präzise sein. Der erste Commit benötigt `INIT` für seine Nachricht und enthält alle Dateien, die vor der ersten Lektion geladen werden sollen.

Nachfolgende Commit-Nachrichten müssen mit der Schrittnummer in `TUTORIAL.md` aus dem `main`-Branch übereinstimmen. Zum Beispiel wird der Commit mit der Nachricht `10.1` geladen, wenn ein Benutzer zum Schritt `10.1` geht.

Um Änderungen an den Commits in einem Versionsbranch vorzunehmen, musst du die Commits, die du ändern willst, rebasen und bearbeiten. Dadurch wird die Git-Historie umgeschrieben, sodass wir keine PRs für diese Art von Branch akzeptieren können. Sobald ein Versionsbranch im freeCodeCamp-Repository vorhanden ist, sollte er sich nicht mehr ändern.

> [!WARNING]
> 
> Nimm niemals Änderungen an einem Versionsbranch vor, der sich in einem der freeCodeCamp-Repos befindet. Erstelle immer einen Neuen.

## Wie du dich beteiligen kannst

### Voraussetzungen

Installiere die [CodeRoad CLI Tools](https://www.npmjs.com/package/@coderoad/cli) mit `npm install -g @coderoad/cli`.

Es gab einige Probleme mit der neuesten Version. Wenn `coderoad --version` nach der Installation nicht funktioniert, mache ein Downgrade auf `0.7.0` mit `npm install -g @coderoad/cli@0.7.0`.

### Arbeiten an `main`

Diese Anleitung ist für PRs, die nur kleine Änderungen an `main` zu **bestehenden Lektionen** vornehmen. Dabei handelt es sich hauptsächlich um Änderungen oder Korrekturen von Tippfehlern, Grammatik, Hinweisen und Anleitungen in der Datei `TUTORIAL.md`.

Für alles andere, einschließlich des Hinzufügens oder Löschens von Lektionen, befolge den [Leitfaden zum Arbeiten an einem Versionsbranch](#working-on-version-branch). Du musst dafür keinen neuen Versionsbranch erstellen - du kannst einen PR erstellen, indem du den Anweisungen unten folgst.

> [!NOTE]
> 
> Diese Änderungen werden den bestehenden Versionsbranch verwenden. Wenn sie besonders wichtig sind, kannst du sie gerne in die `CHANGELOG.md` aufnehmen. In den meisten Fällen sollte eine gute Commit-Nachricht ausreichen.

Du musst die Datei `tutorial.json` nie direkt ändern. Diese wird mit den CLI-Tools erstellt.

Wenn du nur geringfügige Änderungen vornimmst, wie z. B. das Ausbessern eines Schreib- oder Grammatikfehlers, musst du deine Änderungen nicht testen.

Befolge diese Anweisungen, um einen PR zu erstellen. Beachte dabei, dass die Anweisungen normalerweise die Lektionen um sie herum als Kontext verwenden:

- Erstelle eine Kopie des neuesten Versionsbranch mit `git branch vX.X.X upstream/vX.X.X` - du musst diesen Branch nicht auschecken, er muss nur existieren.
- Erstelle einen neuen Branch von `main` und checke ihn aus.
- Mache deine Änderungen und führe einen **Commit** durch. Zur Erinnerung: Du musst nichts in der Datei `tutorial.json` ändern. Wahrscheinlich musst du nur Änderungen an der `TUTORIAL.md` vornehmen
- Führe `coderoad build` aus, um die Datei `tutorial.json` neu zu erstellen
- Übertrage deine Änderungen mit `update json` als Nachricht
- Erstelle einen PR

### Änderungen an `main` testen

Wenn du deine Änderungen an `main` nach den obigen Anweisungen testen willst, befolge diese Anweisungen:

- Befolge die Anweisungen auf dem [rdb-alpha Repo](https://github.com/freeCodeCamp/rdb-alpha), um einen Container zu starten
- Starte das Tutorial mit der `tutorial.json` Datei auf dem neuen Branch

### Überprüfen von PRs für `main`

Wenn du einen PR überprüfst, der nur `main` ändert und dabei wie oben beschrieben didaktische oder grammatikalische Probleme behandelt, sollten die Änderungen in `TUTORIAL.md` mit den Änderungen in `tutorial.json` übereinstimmen.

Die Datei `tutorial.json` sollte keine Änderungen an Commit-Hashes oder Step/Level-Ids enthalten. Start- oder Level-Befehle oder Datei-Überwachungen sollten wahrscheinlich auch nicht geändert werden. Es gibt Ausnahmen, wenn es ein Problem mit einer Stufe gibt, aber die sollten mit mehr Vorsicht behandelt werden.

Denke auch daran, dass die Anleitungen in der Regel die Lektionen um sie herum als Kontext verwenden, also achte darauf, dass sie sinnvoll sind.

### Arbeiten an einem Versionsbranch

> [!WARNING]
> 
> Zur Erinnerung: Nimm niemals Änderungen an einem Versionsbranch vor, der sich in einem der freeCodeCamp-Repos befindet. Erstelle immer einen Neuen.

Es gibt keine einfache Möglichkeit, genau zu sehen, was sich zwischen den Versionsbranches geändert hat, da die Git-Historie neu geschrieben wird. Die Verwendung neuer Versionsbranches muss sorgfältig abgewogen und getestet werden.

Diese Anweisungen gelten für alle Änderungen in einem "Versions"-Branch, wie z. B. Tests, Testtexte, Zurücksetzen von Dateien, Hinzufügen und Löschen von Schritten und vieles mehr.

Befolge diese Anweisungen, um eine neue Version zu erstellen:

- Checke den **letzten** Versionsbranch mit `git checkout -b vX.X.X upstream/vX.X.X` aus
- Erstelle einen neuen Branch davon, indem du die Version mit `git checkout -b vX.X.Y` erhöhst
- Nimm deine Änderungen an dem Versionsbranch vor. Weitere Informationen zur Arbeit mit Tutorials findest du in der [CodeRoad Dokumentation](https://coderoad.github.io/docs/edit-tutorial)
- Schiebe den neuen Branch zu deinem Fork mit `git push -u origin vX.X.Y`
- Schau dir den `main`-Branch an
- Erstelle einen neuen Branch von `main`. z.B. `feat/version-X.X.Y`
- Ändere die `uri` in `coderoad.yaml` zu deinem Fork des Repos. So können du und die Prüfer sie testen, bevor sie in das freeCodeCamp-Repository gestellt wird. Ändere die Version auf den neuen Branch an den beiden Stellen der Datei. Füge deine Änderungen für die neue Version in die `CHANGELOG.md` ein. Nimm alle anderen Änderungen vor, die du benötigst.
- Bestätige (Commit) deine Änderungen mit der Nachricht `Feat: Release Version X.X.Y - <optionale Beschreibung>`
- Starte `coderoad build`, um eine neue `tutorial.json`-Datei zu erstellen
- Füge die Datei hinzu und übertrage sie
- Schiebe die Änderungen in deinen Fork
- Teste deine Änderungen gemäß der [Testanweisungen unten](#testing-changes-to-a-version-branch). Nimm weitere Änderungen vor und übertrage sie, wie du es soeben getan hast, oder befolge den Rest der Anweisungen, wenn du zufrieden bist
- Erstelle einen PR für `main` mit deinem neuen `feat/version-X.X.Y`-Branch. Gib ihm einen Titel wie `Version X.X.Y ready for review`. Dies wird nicht zusammengeführt (merged), sondern dient nur dazu, die Prüfer wissen zu lassen, dass eine neue Version bereitsteht
- Danach werden deine Änderungen überprüft

### Änderungen an einem Versionsbranch testen

- Befolge die Anweisungen auf dem [rdb-alpha Repo](https://github.com/freeCodeCamp/rdb-alpha), um einen Container zu starten
- Starte das Tutorial mit der Datei `tutorial.json` in dem Fork, in dem sich die Änderungen befinden. Achte darauf, dass du die Datei im `feat: Version-X.X.Y`-Branch verwendest und nicht im `main`-Branch

### Eine neue Version pushen

Bevor du eine neue Version veröffentlichst, schau dir den neuen `feat/version-vX.X.Y`-Branch (wird mit `main` zusammengeführt) auf dem Fork des Benutzers an. Vergewissere dich, dass die Datei `CHANGELOG.md` um die neuen Änderungen ergänzt wurde und dass die Version an den beiden Stellen der `coderoad.yaml` mit dem neuen Versionsbranch übereinstimmt.

Wenn du Schreibzugriff auf das freeCodeCamp-Repository hast, die Dateien `CHANGELOG` und `coderoad.yaml` überprüft hast, die Änderungen anhand der obigen Anweisungen getestet hast und eine neue Version eines Tutorials pushen möchtest:

> [!WARNING]
> 
> Zur Erinnerung: Nimm niemals Änderungen an einem Versionsbranch vor, der sich in einem der freeCodeCamp-Repos befindet. Erstelle immer einen Neuen.

- Wenn du keinen Remote-Zugang zu dem Ort hast, an dem die neuen Änderungen existieren, erstelle einen Remote-Zugang zum Fork des Benutzers mit `git remote add <users_fork>`
- Lösche alle **lokalen** Branches, die den gleichen Namen haben wie die neuen Branches. Wahrscheinlich heißen sie entweder `vX.X.Y` oder `feat/version-X.X.Y`
- Checke den neuen Versionsbranch mit `git checkout -b vX.X.Y <remote>/vX.X.Y` aus
- Schiebe den neuen Versionszweig mit `git push -u upstream/vX.X.Y` in das freeCodeCamp Repo. Du musst den neuen Branch pushen, bevor du `main` mit der neuen `tutorial.json`-Datei aktualisierst
- Checke den Benutzerbranch aus, der mit `main` zusammengeführt werden soll, mit `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Ändere die `uri` in `coderoad.yaml` zurück auf das freeCodeCamp Repo
- Füge die Änderungen hinzu und übertrage sie
- Starte `coderoad build`, um die neue `tutorial.json`-Datei zu erstellen
- Füge die Datei hinzu und übertrage sie
- Schiebe die Änderungen in deinen Fork mit `git push -u origin/feat/version-X.X.Y`
- Erstelle einen PR zu `main` auf dem freeCodeCamp Repo
- Wenn du zufrieden bist, füge es zusammen oder lass es und bitte um eine Überprüfung von jemandem
- Nachdem der PR zusammengeführt wurde, öffne das Tutorial, indem du den Anweisungen im [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha) folgst, um sicherzustellen, dass es richtig geladen wird und du einige Schritte durchlaufen kannst
- Wenn es bereits PRs für diese Version gibt, schließe sie

### Wie du zu einer früheren Version zurückkehrst

- Erstelle einen neuen Branch vom neuesten `main` mit `git checkout -b revert/to-version-X.X.X`
- Mach alle Commits in diesem Branch rückgängig, bis einschließlich des Commits der Version, die auf die Version folgt, zu der du zurückkehren willst. Du könntest zum Beispiel Commits haben, die wie folgt aussehen:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

Wenn du zu v1.0.0 zurückkehren willst, nimm alle Commits ab `Release: Version 1.0.1` und danach zurück

- Erstelle einen PR. Gib ihm einen Titel wie `revert: to version X.X.X`
