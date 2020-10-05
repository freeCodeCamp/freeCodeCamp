# Entwickleroperationen auf FreeCodeCamp.org

Dieser Leitfaden wird Ihnen helfen, unseren Infrastruktur-Stapel zu verstehen und wie wir unsere Plattformen pflegen. Obwohl diese Anleitung nicht über vollständige Details für alle Operationen verfügt, könnte sie als Referenz für Ihr Verständnis der Systeme verwendet werden.

Teilen Sie uns mit, wenn Sie Feedback oder Fragen haben, und wir werden gerne klären.

## Wie können wir die Codebase bauen, testen und bereitstellen?

Dieses Projektarchiv wird kontinuierlich erstellt, getestet und in **separate Infrastruktur-Sätze (Server, Datenbanken, CDNs, etc.) eingesetzt** bereitgestellt.

Dies beinhaltet drei Schritte, die nacheinander verfolgt werden müssen:

1. Neue Änderungen (Fixes und Features) werden über Pull-Requests in unserem primären Entwicklungszweig (`Master`) zusammengeführt.
2. Diese Änderungen werden durch eine Reihe automatisierter Tests durchgeführt.
3. Sobald die Tests bestanden, werden die Änderungen freigegeben (oder bei Bedarf aktualisiert).

#### Bau der Codebase - Mapping Git Branches to Deployments.

Normalerweise [`Master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (der Standard-Entwicklungszweig) wird einmal täglich in den [`Produktions-Staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) Branch zusammengeführt und in eine isolierte Infrastruktur freigesetzt.

Dies ist eine Zwischenveröffentlichung für unsere Entwickler und Freiwillige. Es ist auch bekannt als unsere "Inszenierung" oder "Beta" Release.

Es ist identisch mit unserer Live-Produktionsumgebung unter `freeCodeCamp.org`, außer mit einem separaten Satz von Datenbanken, Servern, Webproxies usw. Diese Isolierung ermöglicht es uns, laufende Entwicklungen und Features in einem "Produktion" wie dem Szenario zu testen, ohne die normalen Benutzer der Hauptplattformen von FreeCodeCamp.org zu beeinträchtigen. Diese Isolierung ermöglicht es uns, laufende Entwicklungen und Features in einem "Produktion" wie dem Szenario zu testen, ohne die normalen Benutzer der Hauptplattformen von FreeCodeCamp.org zu beeinträchtigen.

Sobald das Entwicklerteam [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) mit den Änderungen auf der Staging-Plattform zufrieden ist, diese Änderungen werden alle paar Tage in den Produktionszweig [``](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) verschoben.

Dies ist die finale Veröffentlichung, die Änderungen an unseren Produktionsplattformen auf FreeCodeCamp.org verschiebt.

#### Testing changes - Integration und User Acceptance Testing.

Um die Qualität des Codes zu überprüfen, setzen wir verschiedene Integrations- und Akzeptanzstufen ein. Alle unsere Tests werden mit Software wie [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) und [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) durchgeführt.

Wir haben Unit-Tests zum Testen unserer Challenge-Lösungen, Server-APIs und Client-Benutzeroberflächen. Diese helfen uns, die Integration zwischen verschiedenen Komponenten zu testen.

> [!HINWEIS] Wir sind auch dabei, Endanwender-Tests zu schreiben, die dazu beitragen, reale Weltszenarien wie das Aktualisieren einer E-Mail oder einen Aufruf an die API oder die Dienste von Drittanbietern zu replizieren.

Zusammen helfen diese Tests zu verhindern, dass sich Probleme wiederholen und stellen sicher, dass wir keinen Fehler einführen, während wir an einem anderen Fehler oder einer Funktion arbeiten.

#### Weitergabe von Änderungen - Pushing Änderungen an Server.

Wir haben kontinuierliche Liefersoftware so konfiguriert, dass Änderungen an unseren Entwicklungs- und Produktionsservern beschleunigt werden.

Sobald die Änderungen in die geschützten Versionszweige gedrückt werden, wird automatisch eine Build-Pipeline für den Zweig ausgelöst. Die Pipelines sind dafür verantwortlich, Artefakte zu bauen und sie für einen späteren Gebrauch in einem Kaltlager zu halten.

Die Build-Pipeline löst eine entsprechende Release-Pipeline aus, wenn sie einen erfolgreichen Lauf abschließt. Die Release-Pipelines sind dafür verantwortlich, die Build-Artefakte zu sammeln, sie auf die Server zu verschieben und live zu gehen.

Status of builds and releases are [available here](#build-test-and-deployment-status).

## Ein Build, Test und Deployment auslösen.

Derzeit können nur Mitglieder des Entwicklerteams in die Produktionsbranchen schieben. Die Änderungen an den `-Produktions-*` Zweigen können nur über Schnellweiterleitung in den [`Upstream`](https://github.com/freeCodeCamp/freeCodeCamp) landen.

> [!HINWEIS] In den kommenden Tagen würden wir diesen Fluss verbessern, der über Pull-Requests erfolgen soll, um das Zugangsmanagement und die Transparenz zu verbessern.

### Änderungen an Staging Applikationen schieben.

1. Konfigurieren Sie Ihre Fernbedienungen richtig.

   ```sh
   git remote -v
   ```

   **Ergebnisse:**

   ```
   origin git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Vergewissern Sie sich, dass Ihr `Master` Branch unverändert und mit dem Upstream synchronisiert ist.

   ```sh
   git Checkout Master
   git retriech --all --prune
   git reset --hard upstream/master
   ```

3. Überprüfen Sie, ob der Travis CI den `Master` Branch für den Upstream weitergibt.

   Die [kontinuierlichen Integrations-](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) Tests sollten grün und PASSING für den `Master` Zweig sein.

    <details> <summary> Überprüfe den Status auf Travis CI (Screenshot) </summary>
      <br>
      ![Build-Status auf Travis CI überprüfen](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Wenn dies fehlschlägt, sollten Sie aufhören und die Fehler untersuchen.

4. Bestätigen Sie, dass Sie das Projektarchiv lokal erstellen können.

   ```
   npm laufen sauber und entwickeln
   ```

5. Änderungen von `master` auf `Production-Staging` über eine Schnell-Forware-Merge verschieben

   ```
   git checkout Production-Staging
   git merge master
   git push upstream
   ```

   > [!HINWEIS] Du wirst nicht in der Lage sein, Push zu erzwingen und wenn du den Verlauf auf jeden Fall neu geschrieben hast, werden diese Befehle fehlerhaft sein.
   > 
   > Wenn das der Fall ist, haben Sie möglicherweise etwas falsch gemacht, und Sie sollten einfach neu anfangen.

The above steps will automatically trigger a run on the build pipeline for the `production-staging` branch. Sobald die Erstellung abgeschlossen ist, werden die Artefakte als `.zip` Dateien in einem kalten Speicher gespeichert, der später abgerufen und verwendet wird.

Die Release-Pipeline wird automatisch ausgelöst, wenn ein neues Artefakt über die angeschlossene Build-Pipeline verfügbar ist. Für Staging-Plattformen erfordert dieser Prozess keine manuelle Freigabe und die Artefakte werden auf den Client CDN und API-Server geschoben.

> [!TIP|label:Estimates] Der Build-Run dauert normalerweise ~20-25 Minuten, um den Release-Run abzuschließen, der ~15-20 Minuten dauert, für den Client und ~5-10 Minuten für die API verfügbar sein. Vom Code-Push bis zum Live Live auf den Staging-Plattformen dauert der gesamte Prozess **~35-45 Minuten** insgesamt.

### Pushing von Änderungen an Produktionsanwendungen.

Der Prozess ist meist identisch mit den Staging-Plattformen, wobei einige zusätzliche Kontrollen durchgeführt werden. Dies ist nur, um sicherzustellen, dass wir nichts auf freeCodeCamp.org kaputt machen, das jederzeit hunderte von Benutzern sehen kann, die es verwenden.

| Führen Sie diese Befehle NICHT aus, es sei denn, Sie haben überprüft, dass alles auf der Staging-Plattform funktioniert. Du solltest keine Tests auf Staging umgehen oder überspringen, bevor du weiter fortfährst. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                     |


1. Vergewissern Sie sich, dass Ihr `-Produktions-Staging-` Zweig unberührt und mit dem Upstream synchronisiert ist.

   ```sh
   git checkout Production-Staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Änderungen von `Produktionsphase` auf `Produktionsstrom verschieben` durch Schnell-Forware-Zusammenführung

   ```
   git checkout produktion-current
   git merge production-staging
   git push upstream
   ```

   > [!HINWEIS] Du wirst nicht in der Lage sein, Push zu erzwingen und wenn du den Verlauf auf jeden Fall neu geschrieben hast, werden diese Befehle fehlerhaft sein.
   > 
   > Wenn das der Fall ist, haben Sie möglicherweise etwas falsch gemacht, und Sie sollten einfach neu anfangen.

Die obigen Schritte werden automatisch einen Run auf die Build-Pipeline für den `Produktionsstrom-Branch` auslösen. Sobald ein Build-Artefakt fertig ist, wird es einen Run auf die Release-Pipeline auslösen.

> [!TIP|label:Estimates] Der Build-Run dauert normalerweise ~20-25 Minuten.

**Zusätzliche Schritte für die Personalaktion**

Ein Release-Run wird ausgelöst, Mitglieder des Entwicklerteams erhalten eine automatisierte manuelle Interventions-E-Mail. They can either _approve_ or _reject_ the release run.

Wenn die Änderungen gut funktionieren und auf der Staging-Plattform getestet wurden, kann sie genehmigt werden. Die Genehmigung muss innerhalb von 4 Stunden nach dem Auslösen der Veröffentlichung erteilt werden, bevor sie automatisch abgelehnt wird. Ein Stab kann die Freigabe manuell für abgelehnte Läufe auslösen oder auf den nächsten Release-Zyklus warten.

Für Personalnutzung:

| Überprüfen Sie Ihre E-Mail für einen direkten Link oder [gehen Sie zum Release-Dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) nachdem der Build-Run abgeschlossen ist. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                  |


Sobald einer der Mitarbeiter eine Veröffentlichung genehmigt, wird die Pipeline die Änderungen live auf FreeCodeCamp.orgs Produktions-CDN- und API-Server übertragen. Sie benötigen normalerweise ~15-20 Minuten für den Client, und ~5 Minuten für die Verfügbarkeit der API-Server.

> [!TIP|label:Estimates] Der Release-Run benötigt normalerweise ~15-20 Minuten für jede Clientinstanz, und ~5-10 Minuten für jede API-Instanz, um live verfügbar zu sein. Vom Code-Push bis zum Live-Betrieb auf den Produktionsplattformen dauert der gesamte Prozess **~90-120 Minuten** (ohne die Wartezeit auf die Genehmigung des Personals zu zählen).

## Bau-, Test- und Einsatzstatus

Hier ist der aktuelle Test-, Build-und Bereitstellungsstatus der Codebase.

| Typ                | Zweig                                                                                           | Status                                                                                                                                                                                                                                           | Dashboard                                                                                        |
|:------------------ |:----------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------ |
| CI Tests           | [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                            | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                     | [Zum Status Dashboard wechseln](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Tests           | [`produktionsphase`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                         | [Zum Status Dashboard wechseln](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Pipeline bauen     | [`produktionsphase`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      | [![Baustatus](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Zum Status Dashboard wechseln](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Pipeline freigeben | [`produktionsphase`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      |                                                                                                                                                                                                                                                  | [Zum Status Dashboard wechseln](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Tests           | [`produktionstrom-Strom`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                         | [Zum Status Dashboard wechseln](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Pipeline bauen     | [`produktionstrom-Strom`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Baustatus](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Zum Status Dashboard wechseln](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Pipeline freigeben | [`produktionstrom-Strom`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                  | [Zum Status Dashboard wechseln](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Früher Zugriff und Betatest

Wir freuen uns, dass Sie diese Versionen im **"Public Beta testing"** Modus testen und frühzeitigen Zugriff auf die kommenden Funktionen auf den Plattformen erhalten. Manchmal werden diese Funktionen/Änderungen als **, Beta, Staging,** usw. bezeichnet.

Deine Beiträge durch Feedback und Fehlerberichte werden uns helfen, die Produktionsplattformen unter `freeCodeCamp zu erstellen. rg` mehr **widerstandsfähig**, **konsistent** und **stabil** für alle.

Wir danken Ihnen für die Fehlermeldung, auf die Sie stoßen, und helfen Ihnen FreeCodeCamp.org zu verbessern. Du rockst!

### Identifizierung der kommenden Version der Plattformen

Derzeit ist eine öffentliche Beta-Testversion verfügbar:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!HINWEIS] Der Domainname unterscheidet sich von **`freeCodeCamp.org`**. Dies ist beabsichtigt, die Indexierung von Suchmaschinen zu verhindern und Verwirrung für normale Benutzer der Plattform zu vermeiden.

### Identifizierung der aktuellen Version der Plattformen

**Die aktuelle Version der Plattform ist immer verfügbar unter [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Das dev-team führt Änderungen vom `-Produktions-Staging-` Branch zu `Produktions-Strom` , wenn sie freigegeben werden. Der beste Commit sollte sein, was du live auf der Seite siehst.

Sie können die genaue Version ermitteln, indem Sie die Build- und Bereitstellungsprotokolle im Abschnitt Status aufrufen. Alternativ kannst du uns auch im [Mitwirkenden Chatraum](https://gitter.im/FreeCodeCamp/Contributors) um eine Bestätigung zu erhalten.

### Bekannte Einschränkungen

Es gibt einige bekannte Einschränkungen und Kompromisse bei der Beta-Version der Plattform.

- #### All data / personal progress on these beta platforms `will NOT be saved or carried over` to production.

  **Benutzer der Beta-Version werden ein separates Konto von der Produktion haben.** Die Beta-Version verwendet eine physikalisch getrennte Datenbank von der Produktion. Dies gibt uns die Möglichkeit, zufällige Datenverluste oder Änderungen zu verhindern. Das Entwicklerteam kann die Datenbank auf dieser Beta-Version gegebenenfalls löschen.

- #### Es gibt keine Garantien für die Laufzeit und die Zuverlässigkeit der Beta-Plattformen.

  Es wird erwartet, dass die Einsatzbereitschaft häufig und in raschen Iterationen erfolgt, manchmal mehrmals am Tag. Infolgedessen wird es zu unerwarteten Ausfallzeiten oder zu kaputten Funktionalitäten auf der Beta-Version kommen.

- #### Senden Sie keine regulären Benutzer auf diese Seite um eine Korrektur zu bestätigen

  Die Beta-Seite ist und war es immer gewesen, lokale Entwicklung und Testing, nichts anderes. Es ist kein Versprechen, was kommt, sondern ein Blick auf das, woran man arbeitet.

- #### Zeichenseite kann anders aussehen als die Produktion

   Wir verwenden einen Test-Mieter für freecodecamp.dev auf Auth0 und haben daher nicht die Möglichkeit, eine eigene Domain zu setzen. Dies macht es so dass alle Redirect Callbacks und die Login-Seite auf einer Standard-Domain erscheinen wie: `https://freecodecamp-dev.auth0.com/`. Dies hat keinen Einfluss auf die Funktionalität ist so nah an der Produktion, wie wir erhalten können.

## Fehler melden und Feedback hinterlassen

Bitte öffnen Sie neue Ausgaben für Diskussionen und Fehlermeldungen. Sie können sie als **[`Release benennen: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** für Triage.

Sie können eine E-Mail an `dev[at]freecodecamp.org` senden, wenn Sie Fragen haben. Wie immer sollten alle Sicherheitslücken an `security[at]freecodecamp.org` anstatt an den öffentlichen Tracker und Forum gemeldet werden.
