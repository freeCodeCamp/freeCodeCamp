Folgen Sie diesen Richtlinien, um FreeCodeCamp lokal auf Ihrem System einzurichten. Dies wird dringend empfohlen, wenn Sie regelmäßig einen Beitrag leisten möchten.

Für einige der Beitragsworkflows müssen Sie FreeCodeCamp lokal laufen lassen. Zum Beispiel die Vorschau von Codierungsproblemen oder das Debuggen und das Beheben von Fehlern in der Codebase.

> [!TIPP] Wenn du kein Interesse daran hast, FreeCodeCamp lokal einzurichten, erwäge die Verwendung von Gitpod, eine kostenlose Entwicklungsumgebung.
> 
> [![In Gitpod öffnen](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Startet eine Entwicklungsumgebung für FreeCodeCamp in deinem Browser.)

## Bereiten Sie Ihre lokale Maschine vor

Beginnen Sie mit der Installation der vorausgesetzten Software für Ihr Betriebssystem.

Wir unterstützen in erster Linie die Entwicklung auf **\*nix** Systemen. Unsere Mitarbeiter und Community-Mitwirkende arbeiten regelmäßig mit der Codebase unter Verwendung von Werkzeugen auf Ubuntu und macOS.

Wir unterstützen auch Windows 10 via WSL2, die Sie durch [vorbereiten können, lesen Sie diesen Leitfaden](/how-to-setup-wsl).

Einige Community-Mitglieder entwickeln auch unter Windows 10 nativ mit Git für Windows (Git Bash) und anderen unter Windows installierten Tools. Wir haben derzeit keine offizielle Unterstützung für ein solches Setup. Wir empfehlen stattdessen WSL2 zu verwenden.

**Voraussetzungen:**

| Voraussetzung                                                                                 | Version | Notizen                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Node.js](http://nodejs.org)                                                                  | `12x`   | [LTS-Zeitplan](https://github.com/nodejs/Release#release-schedule)                                                                                                                                     |
| npm (wird mit Knoten gebündelt)                                                               | `6.x`   | Hat keine LTS-Releases, wir verwenden die mit Node LTS gebündelte Version                                                                                                                              |
| [MongoDB Community-Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Versionshinweise](https://docs.mongodb.com/manual/release-notes/), Hinweis: Wir befinden uns derzeit auf `3.6`, ein [Upgrade ist geplant](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Wenn Sie eine andere Version haben, installieren Sie bitte die empfohlene Version. Wir können nur Installationsprobleme für empfohlene Versionen unterstützen. Siehe [Fehlerbehebung](#troubleshooting) für Details.

Wenn Node.js bereits auf Ihrem Rechner installiert ist, führen Sie die folgenden Befehle aus, um die Versionen zu validieren:

```console
knode -v
npm -v
```

> [!TIP] Wir empfehlen dringend, die neuesten stabilen Versionen der oben aufgeführten Software zu aktualisieren, auch bekannt als Long Term Support (LTS) Releases.

Wenn Sie die Voraussetzungen haben, müssen Sie Ihre Entwicklungsumgebung vorbereiten. Dies ist für viele Entwicklungs-Workflows üblich, und Sie müssen dies nur einmal tun.

**Folgen Sie diesen Schritten, um Ihre Entwicklungsumgebung fertig zu machen:**

1. Installieren Sie [Git](https://git-scm.com/) oder Ihren Lieblings-Git-Client, wenn Sie es noch nicht getan haben. Update auf die neueste Version; die Version, die mit Ihrem Betriebssystem gebündelt wurde, ist möglicherweise veraltet.

2. (Optional, aber empfohlen) [Richte einen SSH-Schlüssel](https://help.github.com/articles/generating-an-ssh-key/) für GitHub ein.

3. Installieren Sie einen Code-Editor Ihrer Wahl.

   Wir empfehlen die Verwendung von [Visual Studio Code](https://code.visualstudio.com/) oder [Atom](https://atom.io/). Dies sind große, kostenlose und Open Source Code-Editoren.

4. Legen Sie die Linting für Ihren Code-Editor fest.

   Sie sollten [ESLint in Ihrem Editor laufen lassen](http://eslint.org/docs/user-guide/integrations.html), und es markiert alles, was nicht mit dem [freeCodeCamp's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) übereinstimmt.

   > [!TIP] Bitte ignorieren Sie keine Verlinkungsfehler. They are meant to **help** you and to ensure a clean and simple codebase.

## Fork das Repository auf GitHub

[Forking](https://help.github.com/articles/about-forks/) ist ein Schritt, in dem Sie Ihre eigene Kopie von freeCodeCamps Hauptrepository (a.k.a _Repository_) auf GitHub erhalten.

Dies ist wichtig, da es dir erlaubt, an deiner eigenen Kopie von FreeCodeCamp auf GitHub zu arbeiten, oder um Ihr Projektarchiv herunterzuladen (klonen) um lokal zu arbeiten. Später können Sie Änderungen anfordern, die über eine Pull-Request (PR) in das Hauptarchiv von Ihrem Fork gezogen werden.

> [!TIP] Das Hauptrepository unter `https://github.com/freeCodeCamp/freeCodeCamp` wird oft als das `Upstream` Repository bezeichnet.
> 
> Ihr Fork unter `https://github.com/YOUR_USER_NAME/freeCodeCamp` wird oft als `Ursprung` Repository bezeichnet.

**Folge diesen Schritten, um `https://github.com/freeCodeCamp/freeCodeCamp` zu forken:**

1. Gehe zum FreeCodeCamp Repository auf GitHub: [https://github.com/freeCodeCamp/freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)

2. Klicke auf den "Fork" Button in der oberen rechten Ecke des Interfaces ([Mehr Details hier](https://help.github.com/articles/fork-a-repo/))

3. Nachdem das Projektarchiv geforkt wurde, werden Sie zu Ihrer Kopie des FreeCodeCamp Repositorys unter `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Wie man FreeCodeCamp auf GitHub forkt (Screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Wie man FreeCodeCamp auf GitHub forkert" />
</details>

## Fork von GitHub klonen

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In Ihrem Fall ist diese entfernte Position Ihr `Fork` des FreeCodeCamps Repository, das unter `https://github.com/YOUR_USER_NAME/freeCodeCamp` verfügbar sein sollte.

Führen Sie diese Befehle auf Ihrem lokalen Rechner aus:

1. Öffnen Sie ein Terminal / Kommandozeile / Shell in Ihrem Projektverzeichnis

   _z.B.: `/yourprojectsdirectory/`_

2. Klone deine Fork von FreeCodeCamp, ersetze `YOUR_USER_NAME` durch deinen GitHub Benutzernamen

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Dies wird das gesamte FreeCodeCamp Repository in Ihr Projektverzeichnis herunterladen.

Hinweis: `--depth=1` erzeugt einen seichten Klon Ihrer Fork, mit nur dem letzten Verlauf/Commit.

## Synchronisation von Elternteil einrichten

Jetzt, da Sie eine Kopie Ihres Forks heruntergeladen haben, müssen Sie ein `Upstream` in das übergeordnete Repository einrichten.

[Wie bereits erwähnt](#fork-the-repository-on-github)wird das Hauptrepository `im Upstream` Repository verwiesen. Ihr Fork namens `Ursprung` Repository.

Sie benötigen eine Referenz von Ihrem lokalen Klon auf das `Upstream` Projektarchiv zusätzlich zum `Ursprung` Projektarchiv. Dies ist so, dass Sie Änderungen aus dem Hauptarchiv synchronisieren können, ohne wiederholte Forking und klonen zu müssen.

1. Verzeichnis in das neue FreeCodeCamp-Verzeichnis wechseln:

   ```console
   cd FreeCodeCamp
   ```

2. Fügen Sie eine entfernte Referenz zum FreeCodeCamp-Hauptarchiv hinzu:

   ```console
   git entfernter Upstream hinzufügen https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Stellen Sie sicher, dass die Konfiguration korrekt aussieht:

   ```console
   git remote -v
   ```

   Die Ausgabe sollte wie unten aussehen:

   ```console
   origine https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## FreeCodeCamp lokal ausführen

Nun, da Sie eine lokale Kopie von freeCodeCamp haben, können Sie diese Anweisungen befolgen, um es lokal auszuführen. Dies erlaubt dir:

- Vorschau der Bearbeitungen auf Seiten, wie sie auf der Lernplattform erscheinen würden.
- Arbeiten Sie mit Fragen und Verbesserungen der Benutzeroberfläche.
- Debuggen und beheben Sie Probleme mit den Anwendungsservern und Client-Apps.

Wenn Sie Probleme haben, führen Sie zuerst eine Websuche nach Ihrem Problem durch und sehen Sie, ob es bereits beantwortet wurde. Wenn Sie keine Lösung finden bitte durchsuchen Sie unsere [GitHub-Seite](https://github.com/freeCodeCamp/freeCodeCamp/issues) nach einer Lösung und melden Sie das Problem, wenn es noch nicht gemeldet wurde.

Und wie immer fühle dich frei zu unserem [Mitwirkenden Chatraum auf Gitter](https://gitter.im/FreeCodeCamp/Contributors) oder [unserem Discord Server](https://discord.gg/pFspAhS)zu springen für schnelle Abfragen.

> [!TIPP] Du kannst FreeCodeCamp lokal überspringen, wenn du einfach Dateien bearbeitest. Zum Beispiel eine `Rebase`oder das Lösen von `Zusammenführen von` Konflikten.
> 
> Sie können zu diesem Teil der Anleitung später immer wieder zurückkehren. Sie sollten **nur** diesen Schritt überspringen, wenn Sie die Apps auf Ihrem Computer nicht ausführen müssen.
> 
> [Springe zu Änderungen](#making-changes-locally).

### Konfiguriere Abhängigkeiten

#### Schritt 1: Einrichten der Umgebungsvariable

Die Standard-API-Schlüssel und Umgebungsvariablen werden in der Datei `sample.env` gespeichert. Diese Datei muss in eine neue Datei namens `.env` kopiert werden, auf die während des Installationsschritts dynamisch zugegriffen wird.

```console
# Erstellen Sie eine Kopie der "sample.env" und benennen Sie sie ".env".
# Mit den notwendigen API-Schlüsseln und Geheimnissen füllen:

# macOS / Linux
cp Beispiel. nv .env

# Windows
kopiere sample.env .env
```

Die Schlüssel in der `.env` Datei sind _nicht_ erforderlich, um die App lokal auszuführen. Sie können die Standardwerte von `sample.env` unverändert lassen.

> [!TIPP] Denken Sie daran, wenn Sie Dienste wie Auth0 oder Algolia verwenden möchten Sie müssen Ihre eigenen API-Schlüssel für diese Dienste erwerben und die Einträge entsprechend im `bearbeiten. nv` Datei.

#### Schritt 2: Installations-Abhängigkeiten

Dieser Schritt wird die Abhängigkeiten installieren, die für die Anwendung benötigt werden:

```console
npm ci
```

#### Schritt 3: Starten Sie die MongoDB und seed die Datenbank

Bevor Sie die Anwendung lokal ausführen können, müssen Sie den MongoDB-Dienst starten.

> [!HINWEIS] Wenn Sie die MongoDB nicht in einem anderen Setup als der Standardeinstellung laufen lassen die URL unter `MONGOHQ_URL` im `gespeichert. nv` Datei sollte gut funktionieren. Wenn Sie eine benutzerdefinierte Konfiguration verwenden, ändern Sie diesen Wert nach Bedarf.

Starten Sie den MongoDB-Server in einem separaten Terminal:

- Auf macOS & Ubuntu:

  ```console
  mongod
  ```

- Unter Windows müssen Sie den vollständigen Pfad zum `mongod` Binär angeben

  ```console
  "C:\Programme\MongoDB\Server\3.6\bin\mongod"
  ```

  Stelle sicher, dass du `3.6` durch die installierte Version ersetzt

> [!TIPP] Du musst MongoDB nicht jedes Mal starten, indem du es als Hintergrunddienst installierst. Sie können [mehr darüber in der Dokumentation für Ihr Betriebssystem erfahren](https://docs.mongodb.com/manual/administration/install-community/)

Als nächstes seed wir die Datenbank. In diesem Schritt führen wir den folgenden Befehl aus, der den MongoDB-Server mit einigen ersten Datensätzen füllt, die von Diensten benötigt werden. Dazu gehören unter anderem einige Programme.

```console
npm Run-Seed
```

#### Schritt 4: Starten Sie die FreeCodeCamp Client-Anwendung und den API Server

Sie können nun den API-Server und die Client-Anwendungen starten.

```console
npm Run-Entwicklung
```

Dieser einzelne Befehl startet alle Dienste, einschließlich des API-Servers und der Client-Anwendungen, an denen Sie arbeiten können.

> [!HINWEIS] Sobald Sie bereit sind, öffnen Sie einen Webbrowser und **besuchen Sie <http://localhost:8000>**. Wenn die App lädt, herzlichen Glückwunsch – du bist alle gesetzt! Du hast jetzt eine Kopie der gesamten Lernplattform von freeCodeCamp, die auf deinem lokalen Rechner läuft.

> [!TIP] Der API-Server dient APIs unter `http://localhost:3000`. Die Gatsby-App dient der Client-Anwendung unter `http://localhost:8000`

> Wenn Sie <http://localhost:3000/explorer> besuchen, sollten Sie die verfügbaren APIs sehen.

## Mit einem lokalen Benutzer anmelden

Ihr lokales Setup füllt automatisch einen lokalen Benutzer in der Datenbank ein. Durch Klicken auf `Anmelden` authentifizieren Sie sich automatisch in der lokalen Anwendung.

Allerdings ist der Zugriff auf die Seite des Benutzerportfolios ein wenig schwierig. In der Entwicklung Gatsby übernimmt den Service der Client-seitigen Seiten und erhält daher eine `404` Seite für das Benutzerportfolio, wenn Sie lokal arbeiten.

Klicken Sie einfach auf den **"Vorschau Custom 404 Page"** Button wird Sie zur richtigen Seite weiterleiten.

<details>
   <summary>
      Anmeldung bei lokaler Arbeit (Screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Wie man sich anmeldet, wenn man lokal arbeitet" />
</details>

## Lokale Änderungen vornehmen

Sie können nun Änderungen an den Dateien vornehmen und Ihre Änderungen an Ihrem lokalen Klon Ihres Forks übertragen.

Folgen Sie diesen Schritten:

1. Überprüfen Sie, dass Sie sich im `Master` Branch befinden:

   ```console
   git status
   ```

   Sie sollten eine Ausgabe wie folgt erhalten:

   ```console
   Am Branchenmeister
   ist Ihre Filiale mit 'origin/master' auf dem neuesten Stand.

   nichts zu übertragen, Arbeitsverzeichnis sauber
   ```

   Wenn Sie nicht auf Master sind oder Ihr Arbeitsverzeichnis nicht sauber ist, lösen Sie alle ausstehenden Dateien/Commits und Kasse `Master`:

   ```console
   git Checkout Master
   ```

2. Synchronisieren Sie die neuesten Änderungen aus dem FreeCodeCamp Upstream `Master` Branch zu Ihrem lokalen Hauptbereich:

   > [!WARNUNG] Wenn du eine ausstehende Pull-Anforderung hast, die du aus dem `Master` Branch deines Gabels gemacht hast Sie werden sie am Ende dieses Schrittes verlieren.
   > 
   > Du solltest sicherstellen, dass dein Pull-Request von einem Moderator zusammengeführt wird, bevor du diesen Schritt ausführst. To avoid this scenario, you should **always** work on a branch other than the `master`.

   Dieser Schritt **wird die letzten Änderungen** aus dem Hauptarchiv von FreeCodeCamp synchronisieren. Es ist wichtig, dass Sie Ihren Zweig so oft wie möglich auf dem neuesten `Upstream/Master` neu basisieren, um Konflikte später zu vermeiden.

   Aktualisieren Sie Ihre lokale Kopie des FreeCodeCamp Upstream-Repository:

   ```console
   git Abruf von Upstream
   ```

   Starte das Zurücksetzen deines Hauptzweiges mit dem FreeCodeCamp-Master:

   ```console
   git Reset --hard upstream/master
   ```

   Drücken Sie Ihren Hauptzweig zu Ihrer Herkunft, um einen sauberen Verlauf auf Ihrer Fork auf GitHub zu erhalten:

   ```console
   git Push-Ursprung Master --force
   ```

   Du kannst deinen aktuellen Master mit dem Upstream/Master validieren, indem du einen Diff durchführst:

   ```console
   git diff Upstream/Master
   ```

   Die resultierende Ausgabe sollte leer sein.

3. Neuen Zweig erstellen:

   Die Arbeit an einem separaten Zweig für jedes Problem hilft Ihnen, Ihre lokale Arbeitskopie sauber zu halten. Du solltest niemals an dem `Master` arbeiten. Dies wird Ihre Kopie von FreeCodeCamp aufbewahren und Sie müssen eventuell mit einem frischen Klon oder Gabeln beginnen.

   Vergewissern Sie sich, dass Sie auf `Master` sind, wie bereits erklärt und von dort abbiegen:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Ihr Branchenname sollte mit einer `fix/`, `feat/`, `docs/`, etc. beginnen. Vermeiden Sie die Verwendung von Ticket-Nummern in Branchen. Halten Sie sie kurz, aussagekräftig und einzigartig.

   Einige Beispiele für gute Branchennamen sind:

   ```md
   fix/update-challenges-for-reaction
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Bearbeiten Sie Seiten und arbeiten Sie am Code in Ihrem Lieblingstexteditor.

5. Sobald du mit den Änderungen zufrieden bist, solltest du FreeCodeCamp wahlweise lokal ausführen, um eine Vorschau der Änderungen zu erhalten.

6. Stellen Sie sicher, dass Sie Fehler beheben und überprüfen Sie die Formatierung Ihrer Änderungen.

7. Überprüfen und bestätigen Sie die Dateien, die Sie aktualisieren:

   ```console
   git status
   ```

   Dies sollte eine Liste von `unbearbeiteten` Dateien anzeigen, die Sie bearbeitet haben.

   ```console
   Auf Branchen-feat/documentation
   ist Ihr Branch mit 'upstream/feat/documentation' auf dem neuesten Stand.

   Keine Änderungen für Commit:
   (verwenden Sie "git add/rm <file>... um zu aktualisieren, was übergeben wird)
   (verwenden Sie "git checkout -- <file>. ." um Änderungen im Arbeitsverzeichnis zu verwerfen)

       geändert: VERTRIBUTING. d
       geändert: docs/README.md
       geändert: docs/how-to-setup-freecodecamp-local. d
       geändert: docs/how-to-work-on-guide-articles.md
...
   ```

8. Etappe die Änderungen und mache einen Commit:

   In diesem Schritt sollten Sie nur Dateien markieren, die Sie selbst bearbeitet oder hinzugefügt haben. Sie können Dateien zurücksetzen und auflösen, die Sie bei Bedarf nicht ändern wollten.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Oder Sie können alle `ungepackten` Dateien zum Staging-Bereich hinzufügen:

   ```console
   git add .
   ```

   Nur die Dateien, die in den Staging-Bereich verschoben wurden, werden hinzugefügt, wenn Sie einen Commit machen.

   ```console
   git status
   ```

   Ausgabe:

   ```console
   Auf Branchen-feat/documentation
   ist Ihr Branch mit 'upstream/feat/documentation' auf dem neuesten Stand.

   Änderungen, die übertragen werden sollten:
   (verwenden Sie "git reset HEAD <file>..." ...)

       geändert: CONTRIBUTING.md
       geändert: docs/README.md
       geändert: docs/how-to-setup-freecodecamp-locally.md
       geändert: docs/how-to-work-on-guide-articles.md
   ```

   Jetzt können Sie Ihre Änderungen mit einer kurzen Nachricht wie folgt übertragen:

   ```console
   git commit -m "fix: meine kurze Commit-Nachricht"
   ```

   Einige Beispiele:

   ```md
   fix: aktualisiere den Leitfaden für Java - für Schleife
   feat: füge einen Leitfaden für alexa Fähigkeiten hinzu
   ```

   Optional:

   Wir empfehlen dringend eine konventionelle Commit-Nachricht. Dies ist eine gute Praxis, die Sie auf einigen der populären Open Source Repositories sehen werden. Als Entwickler ermutigt Sie dies dazu, Standardpraxen zu folgen.

   Einige Beispiele für konventionelle Commit-Nachrichten sind:

   ```md
   fix: Update HTML Guide Artikel
   fix: Update Build-Skripte für Travis-CI
   feat: Fügen Sie Artikel für JavaScript hoisting
   docs: Aktualisieren Sie die Richtlinien
   ```

   Halten Sie diese kurzen, nicht mehr als 50 Zeichen. In der Beschreibung der Commit-Nachricht können Sie jederzeit zusätzliche Informationen hinzufügen.

   Dies benötigt keine zusätzliche Zeit als eine unkonventionelle Nachricht wie 'Datei aktualisieren' oder 'index.md'

   Hier erfahren Sie mehr darüber, warum Sie konventionelle Commits [verwenden sollten](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Wenn du merkst, dass du eine Datei bearbeiten oder die Übertragen-Nachricht aktualisieren musst, kannst du dies nach dem Bearbeiten der Dateien tun:

   ```console
   git commit --modify
   ```

   Dies öffnet einen Standard-Texteditor wie `nano` oder `vi` , in dem Sie den Titel der Commit-Nachricht bearbeiten und die Beschreibung hinzufügen oder bearbeiten können.

10. Als nächstes kannst du deine Änderungen in deinen Fork verschieben:

    ```console
    git Push-Ursprung Branch/name-here
    ```

## Vorschlag einer Pull-Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Schnellbefehle Referenz

Eine kurze Referenz auf die Befehle, die Sie bei der Arbeit vor Ort benötigen.

| befehl                                                              | beschreibung                                                                                       |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `npm ci`                                                            | Installiert / installieren Sie alle Abhängigkeiten und Bootstraps die verschiedenen Dienste.       |
| `npm Run-Seed`                                                      | Analysiert alle Challenge-Markdown-Dateien und fügt sie in MongoDB ein.                            |
| `npm Run-Entwicklung`                                               | Startet den FreeCodeCamp API Server und Client-Anwendungen.                                        |
| `npm Test`                                                          | Führen Sie alle JS Tests im System durch, einschließlich Client, Server, Lint und Challenge-Tests. |
| `npm run test:client`                                               | Führen Sie die Client-Testsuite aus.                                                               |
| `npm run test:curriculum`                                           | Führen Sie den Lehrplan Testsuite aus.                                                             |
| `npm führen Sie test:curriculum --block='Basic HTML und HTML5' aus` | Teste einen bestimmten Block.                                                                      |
| `npm run test:curriculum --superblock='responsive-web-design'`      | Teste einen bestimmten SuperBlock.                                                                 |
| `npm test-curriculum-Vollausgabe ausführen`                         | Führen Sie den Lehrplan Testsuite aus, ohne nach dem ersten Fehler zu retten                       |
| `npm run test:server`                                               | Führen Sie die Server-Testsuite aus.                                                               |
| `npm e2e ausführen`                                                 | Führen Sie das Cypress Ende, um Tests zu beenden.                                                  |
| `npm starten`                                                       | Deinstalliert alle Abhängigkeiten und bereinigt Caches.                                            |

## Fehlerbehebung

### Probleme bei der Installation der empfohlenen Voraussetzungen

Wir entwickeln regelmäßig auf den neuesten oder beliebtesten Betriebssystemen wie macOS 10.15 oder später, Ubuntu 18.04 oder höher und Windows 10 (mit WSL2).

Es wird empfohlen, Ihr spezielles Problem auf Ressourcen wie Google, Stack Overflow und Stack Exchange zu prüfen. Es besteht eine gute Chance, dass jemand mit dem gleichen Problem konfrontiert ist und es gibt bereits eine Antwort auf Ihre spezifische Anfrage.

Wenn Sie auf einem anderen Betriebssystem sind und/oder immer noch Probleme haben, lesen Sie [die Hilfe](#getting-help).

> [!WARNUNG]
> 
> Bitte vermeide das Erstellen von GitHub Problemen für grundständige Probleme. Sie liegen außerhalb des Rahmens dieses Projekts.

### Probleme mit der Benutzeroberfläche, Schriftarten, Build-Fehler etc.

Wenn Sie Probleme mit der Benutzeroberfläche haben, Schriftarten oder Builds Fehler sehen, kann eine Bereinigung nützlich sein:

```console
npm run clean
npm ci
npm run seed
npm run development
```

ODER

Verknüpfung verwenden

```
npm laufen sauber und entwickeln
```

Wenn Sie weiterhin Probleme mit der Erstellung haben, wird empfohlen, den Arbeitsbereich zu bereinigen.

`Git clean` im interativen Modus verwenden:

```
git clean -ifdX
```

<details>
   <summary>
      Wie man unverfolgte Dateien aufräumt (Screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Wie man unverfolgte Dateien aufräumt" />
</details>

### Probleme mit API, Login, Challenge Einreichungen etc.

Wenn du dich nicht anmelden kannst, siehst du stattdessen einen Banner mit einer Fehlermeldung, dass er an FreeCodeCamp gemeldet wird, bitte überprüfen Sie, dass Ihr lokaler Port `3000` nicht von einem anderen Programm verwendet wird.

**Unter Linux / macOS / WSL unter Windows - Von Terminal:**

```console
netstat -ab | grep "3000"

tcp4 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Windows - Von Erhöhter PowerShell:**

```powershell
netstat -ab | Select-String "3000"

TCP 0.0.0.0:3000 DESKTOP LISTENING
```

### Probleme beim Installieren von Abhängigkeiten

Wenn Sie Fehler bei der Installation der Abhängigkeiten erhalten, Bitte stellen Sie sicher, dass Sie nicht in einem eingeschränkten Netzwerk sind oder Ihre Firewall-Einstellungen nicht daran hindern, auf Ressourcen zuzugreifen.

Die erste Einrichtung kann je nach Netzwerk-Bandbreite eine Weile dauern. Seien Sie geduldig, und wenn Sie immer noch stecken, empfehlen wir GitPod anstelle eines Offline-Setups zu verwenden.

## Hilfe erhalten

Wenn Sie stecken bleiben und Hilfe benötigen, lassen Sie es uns wissen, indem Sie in der [Kategorie 'Mitwirkende' in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder im [Mitwirkenden Chatraum](https://gitter.im/FreeCodeCamp/Contributors) auf Gitter fragen.

Möglicherweise gibt es einen Fehler in der Konsole Ihres Browsers oder in der Bash / Terminal / Kommandozeile, der das Problem identifizieren kann. Geben Sie diese Fehlermeldung in Ihrer Problembeschreibung an, damit andere das Problem leichter erkennen und Ihnen helfen können, eine Lösung zu finden.
