Folge dieser Anleitung, um die freeCodeCamp mobile App lokal auf deinem System einzurichten. Dies ist sehr empfehlenswert, wenn du regelmäßig einen Beitrag leisten willst.

Für einige der Arbeitsabläufe - wie das Beheben von Fehlern in der Codebasis - musst du die freeCodeCamp-App lokal ausführen.

### Wie du deinen lokalen Rechner vorbereitest

Installiere zunächst die erforderliche Software für dein Betriebssystem.

#### Voraussetzungen:

| Voraussetzung                                 | Version | Notizen                                                       |
| --------------------------------------------- | ------- | ------------------------------------------------------------- |
| [Flutter](https://flutter.dev/)               | `3.x`   | -                                                             |
| Dart (wird zusammen mit Flutter ausgeliefert) | `2.x`   | Wir verwenden die Version, die mit Flutter ausgeliefert wird. |

> [!ATTENTION] Wenn du eine andere Version hast, installiere bitte die empfohlene Version. Wir können nur Installationsprobleme für die empfohlenen Versionen unterstützen.

Wenn Flutter bereits auf deinem Rechner installiert ist, führe die folgenden Befehle aus, um die Versionen zu überprüfen:

```console
flutter --version
dart --version
```

> [!TIP] Wir empfehlen dringend, auf die neuesten stabilen Versionen der oben aufgeführten Software zu aktualisieren.

Sobald du die notwendigen Ressourcen installiert hast, musst du deine Entwicklungsumgebung vorbereiten. Dies ist bei vielen Entwicklungsabläufen üblich, und du musst dies nur einmal tun.

##### Befolge diese Schritte, um deine Entwicklungsumgebung vorzubereiten:

1. Installiere [Git](https://git-scm.com/) oder deinen bevorzugten Git-Client, falls du das nicht schon getan hast. Aktualisiere die neueste Version; die Version, die mit deinem Betriebssystem mitgeliefert wurde, ist möglicherweise veraltet.

2. Richte [Android Studio](https://developer.android.com/studio) und [Android Emulatoren](https://developer.android.com/studio/run/managing-avds) mit der neuesten Android-Version ein. Wir empfehlen die Verwendung des Pixel 3a XL und Nexus One (für die Emulation kleinerer Bildschirme).

3. (Optional für MacOS) Richte Xcode und den iOS-Simulator mit der neuesten veröffentlichten iOS-Version ein.

4. (Optional, aber empfohlen) [Richte einen SSH-Schlüssel](https://help.github.com/articles/generating-an-ssh-key/) für GitHub ein.

5. Installiere einen Code-Editor deiner Wahl.

   Wir empfehlen dringend die Verwendung von [Visual Studio Code](https://code.visualstudio.com/) oder Android Studio. Wir empfehlen auch die Installation der offiziellen [Erweiterungen](https://docs.flutter.dev/get-started/editor?tab=vscode).

## Forke das Repository auf GitHub

[Forking](https://help.github.com/articles/about-forks/) ist ein Schritt, bei dem du deine eigene Kopie des Repositorys (auch bekannt als _Repo_) auf GitHub erhältst.

Dies ist wichtig, da es dir ermöglicht, an deiner eigenen Kopie der freeCodeCamp mobile App auf GitHub zu arbeiten oder dein Repository herunterzuladen (zu klonen), um lokal daran zu arbeiten. Später kannst du über einen Pull Request (PR) beantragen, dass Änderungen aus deinem Fork in das Haupt-Repository gezogen werden.

> [!TIP] Das Haupt-Repository unter `https://github.com/freeCodeCamp/mobile` wird oft als `upstream`-Repository bezeichnet.
> 
> Dein Fork unter `https://github.com/YOUR_USER_NAME/mobile` wird oft als `origin`-Repository bezeichnet. `YOUR_USER_NAME` wird durch deinen GitHub-Benutzernamen ersetzt.

**Folge diesen Schritten, um das `https://github.com/freeCodeCamp/mobile`-Repository zu forken:**

1. Gehe zum freeCodeCamp mobile Repository auf GitHub: <https://github.com/freeCodeCamp/mobile>

2. Klicke auf den "Fork"-Button in der oberen rechten Ecke der Benutzeroberfläche ([Mehr Details hier](https://help.github.com/articles/fork-a-repo/))

3. Nachdem das Repository geforkt wurde, gelangst du zu deiner Kopie des Repositorys unter `https://github.com/YOUR_USER_NAME/mobile` (`YOUR_USER_NAME` würde durch deinen GitHub-Benutzernamen ersetzt werden)

## Klone deinen Fork von GitHub

Beim [Klonen](https://help.github.com/articles/cloning-a-repository/) **downloadest ** du eine Kopie eines Repositorys von einem `remote`- Ort, der entweder dir oder einer anderen Person gehört. In deinem Fall ist dieser Remote-Speicherort dein `Fork` des freeCodeCamp-Repositorys, das unter `https://github.com/YOUR_USER_NAME/mobile` verfügbar sein sollte. (`YOUR_USER_NAME` wird durch deinen GitHub-Benutzernamen ersetzt.)

Führe diese Befehle auf deinem lokalen Rechner aus:

1. Öffne ein Terminal / Command Prompt / Shell in deinem Projektverzeichnis

   _z.B.: `/yourprojectsdirectory/`_

2. Klone deinen Fork von freeCodeCamp und ersetze `YOUR_USER_NAME` durch deinen GitHub Benutzernamen

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/mobile.git
   ```

Dadurch wird das gesamte freeCodeCamp mobile Repository in dein Projektverzeichnis heruntergeladen.

Hinweis: `--depth=1` erstellt einen oberflächlichen Klon deines Forks, der nur den jüngsten Verlauf/Commit enthält.

## Synchronisierung vom übergeordneten System konfigurieren

Jetzt, wo du eine Kopie deines Forks heruntergeladen hast, musst du einen `upstream` zum übergeordneten Repository einrichten.

[Wie bereits erwähnt](#fork-the-repository-on-github), wird das Haupt-Repository als `upstream`-Repository bezeichnet. Dein Fork wird als `origin`-Repository bezeichnet.

Du benötigst eine Referenz von deinem lokalen Klon auf das `upstream`-Repository zusätzlich zum `origin`-Repository. Auf diese Weise kannst du Änderungen aus dem Haupt-Repository synchronisieren, ohne dass du wiederholt forken und klonen musst.

1. Wechsle in das neue `mobile`-Verzeichnis:

   ```console
   cd mobile
   ```

2. Füge eine Remote-Referenz zum Haupt-Repository von freeCodeCamp mobile hinzu:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/mobile.git
   ```

3. Stelle sicher, dass die Konfiguration korrekt aussieht:

   ```console
   git remote -v
   ```

   Die Ausgabe sollte in etwas so aussehen wie unten (ersetze `YOUR_USER_NAME` durch deinen GitHub Benutzernamen):

   ```console
   origin    https://github.com/YOUR_USER_NAME/mobile.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/mobile.git (push)
   upstream    https://github.com/freeCodeCamp/mobile.git (fetch)
   upstream    https://github.com/freeCodeCamp/mobile.git (push)
   ```

## freeCodeCamp mobile App lokal ausführen

Jetzt, da du eine lokale Kopie der mobilen Anwendung hast, kannst du die folgenden Anweisungen befolgen, um sie lokal auszuführen.

Wenn du auf Probleme stößt, führe zunächst eine Suche nach deinem Problem im Web durch und siehe nach, ob es bereits beantwortet wurde. Wenn du keine Lösung findest, suche bitte auf unserer [GitHub issues](https://github.com/freeCodeCamp/mobile/issues) Seite nach einer Lösung und melde das Problem, falls es noch nicht gemeldet wurde.

Und wie immer kannst du Fragen in der [Kategorie 'Contributors' in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder [auf unserem Chat-Server](https://discord.gg/PRyKn3Vbay) stellen.

> [!NOTE] Das Verzeichnis `mobile` enthält zwei Ordner, nämlich `mobile-api` und `mobile-app`. `mobile-api` enthält den API-Code, der für die Bereitstellung der Podcasts verwendet wird. `mobile-app` enthält die Flutter-App. Dort solltest du dich befinden, wenn du die folgenden Schritte befolgst.

### Konfigurieren der Abhängigkeiten

#### Schritt 1: Einrichten der Umgebungsvariablendatei

Die Standard-API-Schlüssel und Umgebungsvariablen sind in der Datei `sample.env` gespeichert. Diese Datei muss in eine neue Datei namens `.env` kopiert werden, auf die während des Installationsschritts dynamisch zugegriffen wird. Denke daran, das Verzeichnis in `mobile-app` zu ändern, bevor du die folgenden Befehle ausführst.

```console
# Erstelle eine Kopie der "sample.env" und benenne sie ".env".
# Trage die notwendigen API-Schlüssel und Secrets in die Datei ein:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

Die Schlüssel in der `.env` Datei müssen _nicht_ geändert werden, um die App lokal auszuführen. Du kannst die aus `sample.env` kopierten Standardwerte so belassen, wie sie sind.

#### Schritt 2: Installieren von Abhängigkeiten

In diesem Schritt werden die für die Ausführung der Anwendung erforderlichen Abhängigkeiten installiert:

```console
flutter pub get
```

#### Schritt 3: Starte die freeCodeCamp mobile App

Starte den Emulator deiner Wahl (Android oder iOS) und warte, bis der Startvorgang abgeschlossen ist.

Du kannst die App nun mit folgendem Befehl starten:

```console
flutter run
```

> [!TIP] Wenn du VSCode oder Android Studio verwendest, kannst du die App ganz einfach starten, ohne Terminalbefehle ausführen zu müssen. Mehr Informationen dazu [hier](https://docs.flutter.dev/get-started/test-drive).

## Änderungen lokal vornehmen

Du kannst jetzt Änderungen an Dateien vornehmen und deine Änderungen an deinen lokalen Klon deines Forks übertragen.

Folge diesen Schritten:

1. Überprüfe, ob du dich auf dem `main`-Branch befindest:

   ```console
   git status
   ```

   Du solltest eine Ausgabe wie diese erhalten:

   ```console
   On branch main
   Your branch is up-to-date with 'origin/main'.

   nothing to commit, working directory clean
   ```

   Wenn du nicht auf main bist oder dein Arbeitsverzeichnis nicht bereinigt ist, löse alle ausstehenden Dateien/Commits auf und checke `main` aus:

   ```console
   git checkout main
   ```

2. Synchronisiere die letzten Änderungen aus dem Upstream `main`-Zweig mit deinem lokalen Hauptzweig:

   > [!WARNING] Wenn du noch ausstehende Pull Requests aus dem `main`-Zweig deines Forks besitzt, verlierst du sie am Ende dieses Schrittes.
   > 
   > Du solltest sicherstellen, dass dein Pull-Request von einem Moderator zusammengeführt wird, bevor du diesen Schritt ausführst. Um dieses Szenario zu vermeiden, solltest du **immer** auf einem anderen Zweig als dem `main` arbeiten.

   Dieser Schritt **synchronisiert die letzten Änderungen** aus dem Haupt-Repository von freeCodeCamp mobile. Es ist wichtig, dass du deinen Zweig so oft wie möglich auf den neuesten `upstream/main` zurücksetzt, um spätere Konflikte zu vermeiden.

   Aktualisiere deine lokale Kopie des freeCodeCamp mobile Upstream-Repository:

   ```console
   git fetch upstream
   ```

   Führe einen Hard Reset deines Hauptzweiges mit dem freeCodeCamp mobile main durch:

   ```console
   git reset --hard upstream/main
   ```

   Schiebe deinen Hauptbranch in deinen origin, um einen sauberen Verlauf deines Forks auf GitHub zu haben:

   ```console
   git push origin main --force
   ```

   Du kannst überprüfen, ob dein aktueller main mit dem upstream/main übereinstimmt, indem du einen diff durchführst:

   ```console
   git diff upstream/main
   ```

   Die resultierende Ausgabe sollte leer sein.

3. Erstelle einen neuen Zweig:

   Die Arbeit an einem separaten Zweig für jede Ausgabe hilft dir, deine lokale Arbeitskopie sauber zu halten. Du solltest niemals am `main` arbeiten. Dadurch wird deine Kopie von freeCodeCamp mobile verunreinigt und du musst eventuell mit einem neuen Klon oder Fork neu beginnen.

   Vergewissere dich, dass du auf `main` bist, wie zuvor erklärt, und zweige von dort ab:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Dein Zweigname sollte mit `fix/`, `feat/`, `docs/` usw. beginnen. Vermeide die Verwendung von Issue-Nummern in Zweigen. Halte sie kurz, aussagekräftig und einzigartig.

   Einige Beispiele für gute Zweignamen sind:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Bearbeite Seiten und arbeite am Code in deinem bevorzugten Texteditor.

5. Wenn du mit den Änderungen zufrieden bist, solltest du die mobile App optional lokal ausführen, um eine Vorschau der Änderungen zu erhalten.

6. Stelle sicher, dass du alle Fehler korrigierst und die Formatierung deiner Änderungen überprüfst.

7. Überprüfe und bestätige die Dateien, die du aktualisierst:

   ```console
   git status
   ```

   Dies sollte eine Liste `unstaged`-Dateien anzeigen, die du verändert hast.

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes were not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in the working directory)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
   ...
   ```

8. Führe die Änderungen durch und mache einen Commit:

   In diesem Schritt solltest du nur Dateien markieren, die du selbst bearbeitet oder hinzugefügt hast. Bei Bedarf kannst du einen Reset durchführen und Dateien lösen, die du nicht ändern wolltest.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Oder du kannst alle `unstaged`-Dateien zum Staging-Bereich hinzufügen:

   ```console
   git add .
   ```

   Nur die Dateien, die in den Staging-Bereich verschoben wurden, werden hinzugefügt, wenn du einen Commit durchführst.

   ```console
   git status
   ```

   Ausgabe:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
   ```

   Jetzt kannst du deine Änderungen mit einer kurzen Nachricht wie dieser übertragen:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Einige Beispiele:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Optional:

   Wir empfehlen dringend eine konventionelle Commit-Nachricht zu verfassen. Dies ist eine gute Praxis, die du bei einigen der beliebten Open-Source-Repositories sehen kannst. Dies ermutigt dich als Entwickler, Standardverfahren zu befolgen.

   Einige Beispiele für konventionelle Commit-Meldungen sind:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Halte sie kurz, nicht länger als 50 Zeichen. Du kannst jederzeit zusätzliche Informationen in der Beschreibung der Commit-Nachricht hinzufügen.

   Das dauert nicht länger als eine unkonventionelle Meldung wie "update file" oder "add index.md"

   Mehr darüber, warum du konventionelle Commits verwenden solltest, erfährst du [hier](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Wenn du feststellst, dass du eine Datei bearbeiten oder die Commit-Nachricht aktualisieren musst, nachdem du einen Commit gemacht hast, kannst du das nach der Bearbeitung der Dateien wie folgt tun:

   ```console
   git commit --amend
   ```

   Dies öffnet einen Standard-Texteditor wie `nano` oder `vi`, in dem du den Titel der Commit-Nachricht bearbeiten und die Beschreibung hinzufügen/bearbeiten kannst.

10. Als nächstes kannst du deine Änderungen in deinen Fork schieben:

    ```console
    git push origin branch/name-here
    ```

## Einen Pull Request (PR) vorschlagen

Nachdem du deine Änderungen übertragen hast, kannst du hier nachlesen, [wie man einen Pull Request erstellt](how-to-open-a-pull-request.md).

<!-- ## Quick commands reference - NEED TO DISCUSS ABOUT THIS

A quick reference to the commands that you will need when working locally.

| command                                                        | description                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installs / re-install all dependencies and bootstraps the different services.       |
| `npm run seed`                                                 | Parses all the challenge markdown files and inserts them into MongoDB.              | -->

## Fehlerbehebung

### Probleme bei der Installation der empfohlenen Voraussetzungen

Wir entwickeln regelmäßig auf den neuesten oder beliebtesten Betriebssystemen wie macOS 10.15 oder höher, Ubuntu 18.04 oder höher und Windows 10 (mit WSL2).

Es wird empfohlen, dein spezifisches Problem auf Ressourcen wie Google, Stack Overflow und Stack Exchange zu untersuchen. Es besteht eine gute Chance, dass jemand mit demselben Problem konfrontiert war und bereits eine Antwort auf deine spezifische Frage gefunden hat.

Wenn du mit einem anderen Betriebssystem arbeitest und/oder immer noch Probleme hast, lese bitte [Hilfe erhalten](#getting-help).

### Probleme mit der Benutzeroberfläche, Build-Fehler usw.

Wenn du Probleme mit der Benutzeroberfläche oder Build-Fehler hast, kann eine Bereinigung nützlich sein:

```console
flutter clean
```

### Probleme bei der Installation von Abhängigkeiten

Wenn du bei der Installation der Abhängigkeiten Fehler erhältst, vergewissere dich bitte, dass du dich nicht in einem eingeschränkten Netzwerk befindest oder dass deine Firewall-Einstellungen den Zugriff auf die Ressourcen nicht verhindern.

Sei geduldig, denn die Ersteinrichtung kann je nach Netzwerkbandbreite eine Weile dauern.

## Hilfe bekommen

Wenn du nicht weiterkommst und Hilfe brauchst, kannst du deine Fragen in der [Kategorie "Contributors" in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder im ["Contributors "Chatraum](https://discord.gg/PRyKn3Vbay) stellen.

In der Konsole deines Browsers oder in der Bash / Terminal / Kommandozeile kann eine Fehlermeldung erscheinen, die dir hilft, das Problem zu identifizieren. Gib diese Fehlermeldung in deiner Problembeschreibung an, damit andere das Problem leichter identifizieren und dir bei der Suche nach einer Lösung helfen können.
