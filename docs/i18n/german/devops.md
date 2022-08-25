# Das DevOps Handbuch

Dieser Leitfaden wird dir helfen zu verstehen, wie unser Infrastruktur-Stack aufgebaut ist und wie wir unsere Plattformen warten. Dieses Handbuch enthält zwar nicht alle Einzelheiten zu allen Vorgängen, aber er kann als Referenz für dein Verständnis der Systeme dienen.

Lassen es uns wissen, wenn du Feedback oder Fragen hast, dann klären wir das gerne.

# Handbuch - Bereitstellung von Code

Dieses Repository wird kontinuierlich entwickelt, getestet und auf **einzelne Infrastrukturen (Server, Datenbanken, CDNs, etc.)** verteilt.

Dies umfasst drei Schritte, die nacheinander zu durchlaufen sind:

1. Neue Änderungen (sowohl Fixes als auch Features) werden über Pull-Requests in unseren primären Entwicklungsbranch (`main`) eingebunden.
2. Diese Änderungen durchlaufen eine Reihe von automatisierten Tests.
3. Sobald die Tests bestanden sind, geben wir die Änderungen frei (oder aktualisieren sie bei Bedarf) und stellen sie in unserer Infrastruktur bereit.

#### Erstellen der Codebasis - Zuordnen von Git-Branches zu Deployments.

Normalerweise wird [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (der Standard-Entwicklungsbranch) einmal am Tag in den [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging)-Branch zusammengeführt und in einer isolierten Infrastruktur freigegeben.

Dies ist eine Zwischenversion für unsere Entwickler und freiwillig Mitwirkenden. Sie wird auch als unsere "Staging"- oder "Beta"-Version bezeichnet.

Sie ist identisch mit unserer Live-Produktionsumgebung auf `freeCodeCamp.org`. Sie verwendet jedoch einen separaten Satz von Datenbanken, Servern, Web-Proxies, etc. Diese Isolation ermöglicht es uns, laufende Entwicklungen und Funktionen in einem "produktionsähnlichen" Szenario zu testen, ohne die regulären Benutzer der Hauptplattformen von freeCodeCamp.org zu beeinträchtigen.

Sobald das Entwicklerteam [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) mit den Änderungen auf der Staging-Plattform zufrieden ist, werden diese Änderungen alle paar Tage auf den [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current)-Branch verschoben.

Dies ist die finale Version, die Änderungen auf unsere Produktionsplattformen auf freeCodeCamp.org überführt.

#### Test von Änderungen, Integrations- und Benutzerakzeptanztests.

Wir verwenden verschiedene Stufen von Integrations- und Abnahmetests, um die Qualität des Codes zu überprüfen. Alle unsere Tests werden durch Software wie [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) und [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) durchgeführt.

Wir nutzen Unit-Tests zum Testen unserer Aufgabenlösungen, Server-APIs und Client-Benutzeroberflächen. Diese helfen uns, die Integration zwischen verschiedenen Komponenten zu testen.

> [!NOTE] Wir sind auch dabei, Endnutzertests zu schreiben, die dabei helfen werden, reale Szenarien zu erzeugen, wie z. B. das Aktualisieren einer E-Mail oder das Aufrufen der API von Diensten eines Drittanbieters.

All diese Tests helfen dabei, zu verhindern, dass sich Probleme wiederholen und stellen sicher, dass wir keinen Fehler einführen, während wir an einem anderen Fehler oder einer Funktion arbeiten.

#### Bereitstellen von Änderungen - Übertragen von Änderungen auf die Server.

Wir haben eine Continuous-Delivery-Software konfiguriert, um Änderungen auf unsere Entwicklungs- und Produktionsserver zu übertragen.

Sobald die Änderungen in die geschützten Release-Branches geschoben werden, wird automatisch eine Build-Pipeline für den Branch erstellt. Die Build-Pipelines sind für die Erstellung von Artefakten und deren Aufbewahrung in einem Cold Storage zur späteren Verwendung zuständig.

Die Build-Pipeline erstellt eine entsprechende Release-Pipeline, wenn sie einen erfolgreichen Lauf absolviert hat. Die Release-Pipelines sind dafür verantwortlich, die Build-Artefakte zu sammeln, sie auf die Server zu verschieben und live zu gehen.

Status der Builds und Releases sind [hier](#build-test-and-deployment-status) verfügbar.

## Build, Test und Deploy auslösen

Derzeit können nur Mitglieder des Entwicklerteams in die Produktionsbranches pushen. Die Änderungen in den `production*`-Branches können nur per Fast-Forward-Merge im [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) landen.

> [!NOTE]   In der nächsten Zeit wollen wir diesen Ablauf verbessern, indem wir ihn über Pull-Requests abwickeln, um eine bessere Zugriffsverwaltung und Transparenz zu erreichen.

### Änderungen in die Staging-Anwendungen verschieben.

1. Den Remotezugriff korrekt konfigurieren.

   ```sh
   git remote -v
   ```

   **Ergebnisse:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Stelle sicher, dass dein `main`-Branch fehlerfrei ist und mit dem upstream synchronisiert ist.

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. Prüfe ob das GitHub CI den `main`-Branch für den upstream weitergibt.

   Die [Continuous Integration](https://github.com/freeCodeCamp/freeCodeCamp/actions)-Tests sollten für den `main`-Branch grün und BESTANDEN (PASSING) sein. Klicke auf das grüne Häkchen neben dem Commit-Hash, wenn du den Code des `main`-Branch siehst.

    <details> <summary> Überprüfen des Status auf GitHub Actions (Screenshot) </summary>
      <br>
      ![Überprüfen des Build-Status auf GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   Wenn dies fehlschlägt, solltest du anhalten und die Fehler untersuchen.

4. Bestätige dass du in der Lage bist, das Repository lokal zu erstellen.

   ```
   npm run clean-and-develop
   ```

5. Verschieben von Änderungen von `main` nach `prod-staging` über ein Fast-Forward-Merge

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE]  Du kannst keinen Push erzwingen und wenn du die History in irgendeiner Weise umgeschrieben hast, werden diese Befehle fehlschlagen.
   > 
   > Wenn dies der Fall ist, hast du möglicherweise etwas falsch gemacht und solltest noch einmal von vorn beginnen.

Die obigen Schritte lösen automatisch einen Lauf in der Build-Pipeline für den `prod-staging`-Branch aus. Sobald der Build abgeschlossen ist, werden die Artefakte als `.zip`-Dateien in einem Cold Storage gespeichert, um später abgerufen und verwendet werden zu können.

Die Release-Pipeline wird automatisch ausgelöst, wenn ein neues Artefakt über die angeschlossene Build-Pipeline verfügbar ist. Für Staging-Plattformen erfordert dieser Prozess keine manuelle Freigabe und die Artefakte werden auf den Client CDN und API-Server geschoben.

### Pushen von Änderungen an Produktionsanwendungen.

Der Prozess ist meist identisch mit den Staging-Plattformen, wobei einige zusätzliche Kontrollen durchgeführt werden. Dies geschieht nur, um sicherzustellen, dass wir nichts auf freeCodeCamp.org beschädigen, das jederzeit von Hunderten von Benutzern verwendet werden kann.

| Führe diese Befehle NICHT aus, bevor du nicht sichergestellt hast, dass alles auf der Staging-Plattform funktioniert. Du solltest keine Tests auf Staging umgehen oder überspringen, bevor du weiter fortfährst. |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                  |

1. Stelle sicher, dass dein `prod-staging`-Branch fehlerfrei ist und mit dem upstream synchronisiert ist.

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. Verschiebe Änderungen von `prod-staging` nach `prod-current` mittels eines fast-forward Merge

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] Du kannst keinen Push erzwingen und wenn du die History in irgendeiner Weise umgeschrieben hast, werden diese Befehle fehlschlagen.
   > 
   > Wenn dies der Fall ist, hast du vielleicht etwas falsch gemacht und solltest noch einmal von vorne beginnen.

Die obigen Schritte lösen automatisch einen Lauf in der Build-Pipeline für den `prod-current`-Branch aus. Sobald ein Build-Artefakt fertig ist, löst es einen Lauf in der Release-Pipeline aus.

**Zusätzliche Schritte für Mitarbeiter (Staffs)**

Wenn ein Release-Lauf ausgelöst wird, erhalten die Mitarbeiter des Entwicklerteams eine automatisierte E-Mail zum manuellen Eingriff. Sie können den Freigabedurchlauf entweder _genehmigen_ oder _ablehnen_.

Wenn die Änderungen einwandfrei funktionieren und auf der Staging-Plattform getestet wurden, kann die Freigabe erfolgen. Die Genehmigung muss innerhalb von 4 Stunden nach dem Auslösen der Veröffentlichung erteilt werden, bevor sie automatisch abgelehnt wird. Ein Mitarbeiter kann den Freigabelauf für abgelehnte Läufe manuell erneut auslösen oder auf den nächsten Freigabezyklus warten.

Für Mitarbeiter bestimmt:

| Prüfe deine E-Mail für einen direkten Link oder [geh zum Release Dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release), nachdem der Build-Lauf abgeschlossen ist. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                      |

Sobald einer der Mitarbeiter eine Freigabe genehmigt, schiebt die Pipeline die Änderungen live auf das Produktions-CDN und die API-Server von freeCodeCamp.org.

## Build, Test and Deployment Status

Hier ist der aktuelle Test-, Build- und Deployment-Status der Codebasis.

| Branch                                                                           | Unit-Tests                                                                                                                                                                                                                       | Integrations-Tests                                                                                                                                                                                                       | Builds & Deployments                                                                                                              |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimentell, in Vorbereitung)                                     | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                        | -                                                                                                                                 |

## Früher Zugang (Early access) und Beta-Tests

Wir laden dich ein, diese Versionen in einem **"public beta testing"** Modus zu testen und frühen Zugriff auf kommende Funktionen der Plattformen zu erhalten. Manchmal werden diese Funktionen/Änderungen als **, Beta, Staging,** usw. bezeichnet.

Deine Mitwirkung in Form von Feedback und Fehlerberichten helfen uns, die Produktionsplattformen auf `freeCodeCamp.org` für alle **resilient**, **konsistent** und **stabil** zu machen.

Wir danken dir, dass du uns Fehler meldest, auf die du stößt und uns hilfst, freeCodeCamp.org besser zu machen. Du rockst!

### Identifizierung der kommenden Version der Plattformen

Derzeit ist eine öffentliche Beta-Testversion verfügbar:

| Anwendung | Sprache    | URL                                      |
|:--------- |:---------- |:---------------------------------------- |
| Lernen    | Englisch   | <https://www.freecodecamp.dev>           |
|           | Spanisch   | <https://www.freecodecamp.dev/espanol>   |
|           | Chinesisch | <https://chinese.freecodecamp.dev>       |
| News      | Englisch   | <https://www.freecodecamp.dev/news>      |
| Forum     | Englisch   | <https://forum.freecodecamp.dev>         |
|           | Chinesisch | <https://chinese.freecodecamp.dev/forum> |
| API       | -          | `https://api.freecodecamp.dev`           |

> [!NOTE] Der Domainname ist anders als **`freeCodeCamp.org`**. Dies ist beabsichtigt, um die Indizierung durch Suchmaschinen zu verhindern und Verwirrung bei regelmäßigen Benutzern der Plattform zu vermeiden.
> 
> Die obige Liste ist nicht abschließend für alle Anwendungen, die wir bereitstellen. Außerdem werden nicht alle Sprachvarianten im Staging bereitgestellt, um Ressourcen zu sparen.

### Identifizierung der aktuellen Version der Plattformen

**Die aktuelle Version der Plattform ist immer verfügbar unter [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Das Entwicklerteam führt Änderungen aus dem `prod-staging`-Branch nach `prod-current` zusammen, wenn sie Änderungen veröffentlichen. Das oberste Commit sollte das sein, was du live auf der Website siehst.

Du kannst die genaue Version, die eingesetzt wurde, in den Build- und Deployment-Protokollen im Statusbereich nachlesen. Alternativ kannst du uns auch im ["contributers"-Chatraum](https://discord.gg/PRyKn3Vbay) anpingen, um eine Bestätigung zu erhalten.

### Bekannte Einschränkungen

Es gibt einige bekannte Einschränkungen und Kompromisse bei der Beta-Version der Plattform.

- #### Alle Daten / persönliche Fortschritte auf diesen Beta-Plattformen werden NICHT gespeichert oder in die Produktion übernommen.

  **Benutzer der Beta-Version haben ein von der Produktionsversion getrenntes Konto.** Die Beta-Version verwendet eine von der Produktionsversion physisch getrennte Datenbank. So können wir versehentliche Datenverluste oder Änderungen verhindern. Das Entwicklerteam kann die Datenbank dieser Betaversion bei Bedarf löschen.

- #### Es gibt keine Garantie für die Betriebszeit und Zuverlässigkeit der Beta-Plattformen.

  Es wird erwartet, dass die Deployments häufig und in schnellen Iterationen erfolgen, manchmal mehrmals am Tag. Daher kann es in der Beta-Version manchmal zu unerwarteten Ausfällen oder fehlerhaften Funktionen kommen.

- #### Schicke keine normalen Nutzer auf diese Seite, um eine Korrektur zu bestätigen.

  Die Beta-Seite ist und war immer dazu da, die lokale Entwicklung und das Testen zu unterstützen, nichts anderes. Es ist kein Versprechen auf das, was kommt, sondern ein Ausblick auf das, woran gearbeitet wird.

- #### Die Anmeldeseite kann anders aussehen als die Produktionsseite

  Wir verwenden einen Test-Mandanten für freeCodeCamp.dev auf Auth0 und haben daher nicht die Möglichkeit, eine benutzerdefinierte Domain einzustellen. Dies führt dazu, dass alle Weiterleitungsaufrufe und die Anmeldeseite auf einer Standarddomain erscheinen, wie z.B.: `https://freecodecamp-dev.auth0.com/`. Dies hat keinen Einfluss auf die Funktionalität und ist so nah an der Produktion, wie wir es nur bekommen können.

## Fehler melden und Feedback hinterlassen

Bitte eröffne neue Issues für Diskussionen und zum Melden von Fehlern.

Du kannst eine E-Mail an `dev[at]freecodecamp.org` senden, wenn du irgendwelche Fragen hast. Wie immer sollten alle Sicherheitslücken an `security[at]freecodecamp.org` gemeldet werden, anstatt an den öffentlichen Tracker und das Forum.

# Handbuch- Serverwartung

> [!WARNING]
> 
> 1. Diese Handbuch gilt nur für die **freeCodeCamp Mitarbeiter**.
> 2. Diese Anweisungen sollten nicht als vollständig angesehen werden, bitte sei vorsichtig.

Als Mitarbeiterin oder Mitarbeiter hast du vielleicht Zugang zu unseren Cloud-Anbietern wie Azure, Digital Ocean usw. erhalten.

Hier sind einige praktische Befehle, mit denen du an den virtuellen Maschinen (VM) arbeiten kannst, z. B. um Wartungsupdates durchzuführen oder allgemeine Aufgaben zu erledigen.

## Eine Liste der VMs abrufen

> [!NOTE] Auch wenn du bereits SSH-Zugriff auf die VMs hast, kannst du damit allein noch nicht VMs auflisten, wenn du nicht auch Zugriff auf die Cloud-Portale hast.

### Azure

Installiere Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Einmalig) Installation auf macOS mit [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Einmalig) Login:**

```
az login
```

> **Abruf der Liste der VM-Namen und IP-Adressen:**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Installiere Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Einmalig) Installation unter macOS mit [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Einmalig) Login:**

Authentifizierung und Kontextwechsel: https://github.com/digitalocean/doctl#Authentifizierung mit-digitalocean

```
doctl auth init
```

> **Liste der VM-Namen und IP-Adressen abrufen:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Neue Ressourcen erzeugen

Wir arbeiten daran, unser IaC-Setup zu erstellen. Während das in Arbeit ist, kannst du das Azure-Portal oder die Azure CLI nutzen, um neue virtuelle Maschinen und andere Ressourcen zu starten.

> [!TIP] Unabhängig davon, welche Spinning-Ressourcen du wählst, haben wir ein paar [handliche Cloud-Init-Konfigurationsdateien](https://github.com/freeCodeCamp/infra/tree/main/cloud-init), die dir bei der grundlegenden Einrichtung helfen, z.B. bei der Installation von Docker oder dem Hinzufügen von SSH-Schlüsseln usw.

## VMs auf dem neuesten Stand halten

Du solltest die VMs auf dem neuesten Stand halten, indem du Updates und Upgrades durchführst. So wird sichergestellt, dass die virtuelle Maschine mit den neuesten Sicherheitsupdates gepatcht ist.

> [!WARNING] Bevor du diese Befehle ausführst:
> 
> - Vergewissere dich, dass die VM vollständig provisioniert wurde und keine Post-Installationsschritte laufen.
> - Wenn du Pakete auf einer VM aktualisierst, auf der bereits eine Anwendung läuft, stelle sicher, dass die Anwendung gestoppt/gespeichert wurde. Paket-Updates verursachen Netzwerkbandbreite, Speicher- und/oder CPU-Nutzungsspitzen, die zu Ausfällen bei laufenden Anwendungen führen.

Paketinformationen aktualisieren

```console
sudo apt update
```

Installierte Pakete upgraden

```console
sudo apt upgrade -y
```

Unbenutzte Pakete entfernen

```console
sudo apt autoremove -y
```

## Arbeit an Webservern (Proxy)

Wir betreiben lastverteilte (Azure Load Balancer) Instanzen für unsere Webserver. Auf diesen Servern läuft NGINX, das den gesamten Datenverkehr von verschiedenen Anwendungen, die auf ihrer eigenen Infrastruktur laufen, zu freeCodeCamp.org umleitet.

Die NGINX-Konfiguration ist verfügbar in [diesem Repository](https://github.com/freeCodeCamp/nginx-config).

### Erste Installation

Provisionieren der VMs mit Code

1. Installiere NGINX und konfiguriere es aus dem Repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Installiere die Cloudflare-Ursprungszertifikate und die upstream Anwendungskonfiguration.

   Hole die Cloudflare-Ursprungszertifikate aus dem sicheren Speicher und installiere sie an erforderlichen Stellen.

   **oder**

   Übertrage bestehende Zertifikate:

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Aktualisiere die Upstream-Konfigurationen:

   ```console
   vi configs/upstreams.conf
   ```

   Ergänze/aktualisiere die Quell-/Herkunfts-IP-Adressen der Anwendung.

3. Richte Netzwerke und Firewalls ein.

   Konfiguriere die Azure Firewalls und `ufw` nach Bedarf für die ingress-Ursprungsadressen.

4. Füge die VM zum Load Balancer Backend Pool hinzu.

   Konfiguriere den Load Balancer und füge ihm Regeln hinzu, falls nötig. Es kann möglicherweise erforderlich sein, auch die VMs zum Load Balancer-Backend-Pool hinzufügen.

### Logging und Monitoring

1. Überprüfe den Status des NGINX-Dienstes mit dem folgenden Befehl:

   ```console
   sudo systemctl status nginx
   ```

2. Logging und Monitoring für die Server sind verfügbar unter:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), unser aktuelles Basis-Monitoring-Dashboard. Wir arbeiten an feineren Metriken für eine bessere Messbarkeit

### Aktualisieren von Instanzen (Wartung)

Konfigurationsänderungen an unseren NGINX-Instanzen werden auf GitHub gepflegt, diese sollten auf jeder Instanz wie folgt bereitgestellt werden:

1. Verbinde dich per SSH mit der Instanz und gib sudo ein

```console
sudo su
```

2. Lade den neuesten Konfigurationscode herunter.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. Teste und lade die Konfiguration neu [mit Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

## Arbeiten an API-Instanzen

1. Installiere Build-Tools für Node-Binaries (`node-gyp`) usw.

```console
sudo apt install build-essential
```

### Erste Installation

Bereitstellung von VMs mit dem Code

1. Installiere Node LTS.

2. Aktualisiere `npm` und installiere PM2 und richte `logrotate` und Start beim Booten ein

   ```console
   npm i -g npm@8
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klone freeCodeCamp, richte die Umgebungsvariablen (env) und Schlüssel ein.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout prod-current # or any other branch to be deployed
   ```

4. Erstelle die `.env` aus dem geschützten Speicher für Anmeldeinformationen.

5. Erstelle die `google-credentials.json` aus dem geschützten Speicher für die Anmeldedaten.

6. Installiere Abhängigkeiten

   ```console
   npm ci
   ```

7. Errichte den Server.

   ```console
   npm run create:config && npm run build:curriculum && npm run build:server
   ```

8. Starte Instanzen

   ```console
   cd api-server
   pm2 reload ecosystem.config.js
   ```

### Logging und Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Aktualisieren von Instanzen (Wartung)

Codeänderungen müssen von Zeit zu Zeit auf die API-Instanzen übertragen werden. Es kann ein fortlaufendes Update oder ein manuelles Update sein. Letzteres ist wichtig beim Ändern von Abhängigkeiten oder Hinzufügen von Umgebungsvariablen.

> [!ATTENTION] Automatisierte Pipelines können derzeit keine Aktualisierungen von Abhängigkeiten vornehmen. Wir müssen eine manuelle Aktualisierung durchführen, bevor die Deployment-Pipeline ausgeführt wird.

#### 1. Manuelle Updates - Werden für die Aktualisierung von Abhängigkeiten und Umgebungsvariablen verwendet.

1. Stoppe alle Instanzen

```console
pm2 stop all
```

2. Installiere Abhängigkeiten

```console
npm ci
```

3. Errichte den Server

```console
npm run create:config && npm run build:curriculum && npm run build:server
```

4. Starte Instanzen

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Fortlaufende (Rolling) Updates - Werden für logische Änderungen am Code verwendet.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Wir führen fortlaufende Aktualisierungen des Codes, der Logik, mittels Pipelines durch. Du solltest diese Befehle nicht ausführen müssen. Sie dienen nur der Dokumentation.

## Arbeiten an Client-Instanzen

1. Installiere Build-Tools für Node-Binaries (`node-gyp`) usw.

```console
sudo apt install build-essential
```

### Erste Installation

Bereitstellung von VMs mit dem Code

1. Installiere Node LTS.

2. Aktualisiere `npm` und installiere PM2 und richte `logrotate` und Start beim Booten ein

   ```console
   npm i -g npm@8
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klone die Client-Konfiguration, richte die Umgebungsvariablen und Schlüssel ein.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Starte die Platzhalterinstanzen für den Webclient, diese werden mit Artefakten aus der Azure-Pipeline aktualisiert.

   > Todo: Dieses Setup muss zu S3 oder Azure Blob Storage verschoben werden 
   > 
   > ```console
   >    echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../../serve.json www -p 52525" >> client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### Logging und Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Aktualisieren von Instanzen (Wartung)

Codeänderungen müssen von Zeit zu Zeit auf die API-Instanzen übertragen werden. Es kann ein fortlaufendes Update oder ein manuelles Update sein. Letzteres ist wichtig, wenn du Abhängigkeiten ändern oder Umgebungsvariablen hinzufügen.

> [!ATTENTION] Automatisierte Pipelines können derzeit keine Aktualisierungen von Abhängigkeiten vornehmen. Wir müssen eine manuelle Aktualisierung durchführen, bevor die Deployment-Pipeline ausgeführt wird.

#### 1. Manuelle Updates - Werden für die Aktualisierung von Abhängigkeiten und Umgebungsvariablen verwendet.

1. Stoppe alle Instanzen

   ```console
   pm2 stop all
   ```

2. Installiere oder aktualisiere Abhängigkeiten

3. Starte Instanzen

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Fortlaufende (Rolling) Updates - Werden für logische Änderungen am Code verwendet.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Wir führen fortlaufende Aktualisierungen des Codes, der Logik, mittels Pipelines durch. Du sollte diese Befehle nicht ausführen müssen. Sie dienen nur der Dokumentation.

## Arbeiten an Chat-Servern

Unsere Chatserver sind mit einer HA-Konfiguration verfügbar, die [in den Rocket.Chat-Dokumenten empfohlen wird](https://docs.rocket.chat/installation/docker-containers/high-availability-install). Die Datei `docker-compose` dafür ist [hier](https://github.com/freeCodeCamp/chat-config) verfügbar.

Wir stellen redundante NGINX-Instanzen bereit, die ihrerseits einen Load Balancing (Azure Load Balancer) vor dem Rocket.Chat-Cluster aufweisen. Die NGINX-Konfigurationsdatei ist [hier](https://github.com/freeCodeCamp/chat-nginx-config) verfügbar.

### Erstinstallation

Bereitstellen von VMs mit dem Code

**NGINX Cluster:**

1. Installiere NGINX und konfiguriere es aus dem Repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Installiere die Cloudflare-Ursprungszertifikate und die upstream Anwendungskonfiguration.

   Hole die Cloudflare-Ursprungszertifikate aus dem sicheren Speicher und installiere sie an erforderlichen Stellen.

   **oder**

   Übertrage bestehende Zertifikate:

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Aktualisiere die Upstream-Konfigurationen:

   ```console
   vi configs/upstreams.conf
   ```

   Ergänze/aktualisiere die Quell-/Herkunfts-IP-Adressen der Anwendung.

3. Richte Netzwerke und Firewalls ein.

   Konfiguriere die Azure Firewalls und `ufw` nach Bedarf für die ingress-Ursprungsadressen.

4. Füge die VM zum Load Balancer Backend Pool hinzu.

   Konfiguriere den Load Balancer und füge ihm Regeln hinzu, falls nötig. Eventuell musst du auch die VMs zum Load Balancer-Backend-Pool hinzufügen, falls erforderlich.

**Docker Cluster:**

1. Installiere Docker und konfiguriere aus dem Repository

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. Konfiguriere die erforderlichen Umgebungsvariablen und Instanz-IP-Adressen.

3. Starte den Rocket-Chat-Server

   ```console
   docker-compose config
   docker-compose up -d
   ```

### Logging und Monitoring

1. Überprüfe den Status des NGINX-Dienstes mit dem folgenden Befehl:

   ```console
   sudo systemctl status nginx
   ```

2. Überprüfe den Status für laufende Docker-Instanzen mit:

   ```console
   docker ps
   ```

### Instanzen aktualisieren (Wartung)

**NGINX Cluster:**

Konfigurationsänderungen für unsere NGINX-Instanzen werden auf GitHub gepflegt. Diese sollten auf jeder Instanz wie folgt implementiert werden:

1. Verbinde dich per SSH mit der Instanz und gib sudo ein

   ```console
   sudo su
   ```

2. Hol dir den aktuellsten Konfigurationscode.

   ```console
   cd /etc/nginx
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Teste und lade die Konfiguration neu [mit Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

   ```console
   nginx -t
   nginx -s reload
   ```

**Docker Cluster:**

1. Verbinde dich per SSH mit der Instanz und navigiere zum Chat-Konfigurationspfad

   ```console
   cd ~/chat
   ```

2. Hol dir den aktuellsten Konfigurationscode.

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Lade das neueste Docker-Image für Rocket.Chat herunter

   ```console
   docker-compose pull
   ```

4. Aktualisiere die laufenden Instanzen

   ```console
   docker-compose up -d
   ```

5. Überprüfe, ob die Instanzen aktiv sind

   ```console
   docker ps
   ```

6. Überflüssige Ressourcen bereinigen

   ```console
   docker system prune --volumes
   ```

   Output:

   ```console
   WARNING! This will remove:
     - all stopped containers
     - all networks not used by at least one container
     - all volumes not used by at least one container
     - all dangling images
     - all dangling build cache

   Are you sure you want to continue? [y/N] y
   ```

   Wähle ja (y), um alles zu entfernen, was nicht in Gebrauch ist. Dadurch werden alle gestoppten Container, alle Netzwerke und Volumes, die nicht von mindestens einem Container verwendet werden, sowie alle überflüssigen Images und Build-Caches entfernt.

## Arbeit an Contributor Tools

### Updates bereitstellen

ssh in die VM (gehostet auf Digital Ocean).

```console
cd tools
git pull origin master
npm ci
npm run build
pm2 restart contribute-app
```

## Update von Node.js-Versionen auf VMs

Liste die aktuell installierten node & npm Versionen auf

```console
nvm -v
node -v
npm -v

nvm ls
```

Installiere die neueste Node.js LTS, und installiere alle globalen Pakete neu

```console
nvm install --lts --reinstall-packages-from=default
```

Überprüfe installierte Pakete

```console
npm ls -g --depth=0
```

Verändere die `Standard` Node.js Version zur aktuellen LTS (angeheftet an die letzte Hauptversion)

```console
nvm alias default 16
```

(Optional) Deinstalliere alte Versionen

```console
nvm uninstall <version>
```

> [!ATTENTION] In Client-Anwendungen ist es nicht möglich, `pm2 resurrect` zu verwenden, um Shell-Skripte zwischen Node.js-Versionen wieder herzustellen. Setze stattdessen Prozesse von Grund auf neu auf. Dies sollte einfacher werden, wenn wir zu einem Docker-basierten Setup wechseln.
> 
> Wenn du PM2 für Prozesse verwendest, musst du auch die Anwendungen aufrufen und die Prozessliste für die automatische Wiederherstellung bei Neustarts speichern.

Hole die Anweisungen/Befehle zur Deinstallation mit dem Befehl `unstartup` und verwende die Ausgabe, um die systemctl Dienste zu entfernen

```console
pm2 unstartup
```

Hole dir die Installationsanweisungen/Befehle mit dem `startup` Befehl und benutze die Ausgabe, um die systemctl Dienste hinzuzufügen

```console
pm2 startup
```

Kurzbefehle für PM2, um gespeicherte Prozesse aufzulisten, wiederherzustellen usw.

```console
pm2 ls
```

```console
pm2 resurrect
```

```console
pm2 save
```

```console
pm2 logs
```

## Installieren und Aktualisieren von Azure-Pipeline-Agents

Siehe: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops und befolge die Anweisungen zum Stoppen, Entfernen und Neuinstallieren von Agents. Im Großen und Ganzen kannst du die hier aufgeführten Schritte befolgen.

Du benötigst einen PAT, den du hier finden kannst: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installieren eines Agenten auf einem Einsatzziel

Navigiere zu [Azure Devops](https://dev.azure.com/freeCodeCamp-org) und registriere den Agenten von Grund auf  neu in den erforderlichen [Entwicklungsgruppen](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] Du solltest die Skripte im Home-Verzeichnis ausführen und sicherstellen, dass kein anderes `azagent` Verzeichnis existiert.

### Agents aktualisieren

Derzeit müssen Agents zum Aktualisieren entfernt und neu konfiguriert werden. Dies ist erforderlich, damit sie die `PATH`-Werte und andere Systemumgebungsvariablen korrekt übernehmen können. Wir müssen dies zum Beispiel tun, um Node.js auf unseren Ziel-VMs zu aktualisieren.

1. Navigiere zum Dienst und prüfe den Status

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. Stoppe den Dienst

   ```console
   sudo ./svc.sh stop
   ```

3. Deinstalliere den Dienst

   ```console
   sudo ./svc.sh uninstall
   ```

4. Den Agenten aus dem Pipeline-Pool entfernen

   ```console
   ./config.sh remove
   ```

5. Entferne die Konfigurationsdateien

   ```console
   cd ~
   rm -rf ~/azagent
   ```

Wenn du die oben genannten Schritte abgeschlossen hast, kannst du die gleichen Schritte wie bei der Installation des Agenten wiederholen.

# Handbuch - E-Mail Versand

Wir verwenden [ein CLI-Tool](https://github.com/freecodecamp/sendgrid-email-blast), um den wöchentlichen Newsletter zu versenden. Um dieses in Betrieb zu nehmen und den Prozess zu beginnen:

1. Melde dich bei DigitalOcean an und erstelle neue Droplets unter dem `Sendgrid`-Projekt. Verwende den Ubuntu Sendgrid-Snapshot mit dem aktuellsten Datum. Dieser wird mit dem CLI-Tool und dem Skript zum Abrufen von E-Mails aus der Datenbank geliefert. Bei dem aktuellen Volumen reichen drei Droplets aus, um die E-Mails rechtzeitig zu versenden.

2. Richte das Skript zum Abrufen der E-Mail-Liste ein.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   Du musst die Platzhalterwerte in der `.env`-Datei durch deine Anmeldedaten ersetzen.

3. Starte das Script

   ```console
   node get-emails.js emails.csv
   ```

   Dadurch wird die E-Mail-Liste in einer `emails.csv`-Datei gespeichert.

4. Teile die E-Mails in mehrere Dateien auf, je nachdem, wie viele Droplets du brauchst. Das geht am einfachsten, indem du `scp` verwendest, um die E-Mail-Liste lokal zu speichern und sie mit deinem bevorzugten Texteditor in mehrere Dateien aufzuteilen. Jede Datei benötigt den `email,unsubscribeId`-Header.

5. Wechsle mit `cd /home/sendgrid-email-blast` in das CLI-Verzeichnis und konfiguriere das Tool [gemäß der Dokumentation](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Führe das Tool aus, um die E-Mails zu versenden und folge dabei der [Benutzungsdokumentation](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. Wenn der E-Mail-Versand abgeschlossen ist, überprüfe, dass keine E-Mails fehlgeschlagen sind, bevor du die Droplets vernichtest.

# Handbuch - Hinzufügen von Nachrichteninstanzen für neue Sprachen

### Änderungen des Themes

Wir verwenden ein eigenes [Theme](https://github.com/freeCodeCamp/news-theme) für unsere Nachrichtenpublikation. Wenn du die folgenden Änderungen am Theme vornimmst, können neue Sprachen hinzugefügt werden.

1. Füge eine `else if`-Anweisung für den neuen [ISO Sprachcode](https://www.loc.gov/standards/iso639-2/php/code_list.php) in [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js) ein
2. Erstelle einen ersten Konfigurationsordner, indem du den [`assets/config/de`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) Ordner duplizierst und seinen Namen in den neuen Sprachcode änderst. (`de` —> `es` für Spanisch)
3. Ändere im neuen Sprachordner die Variablennamen in `main.js` und `footer.js` in die entsprechende Sprachkurzform (`enMain` -> `esMain` für Spanisch)
4. Dupliziere den [`locales/de.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) und benenne ihn in den neuen Sprachcode.
5. In [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs) fügst du Skripte für die neu erstellten Konfigurationsdateien hinzu.
6. Füge das Skript (`day.js`) der zugehörigen Sprache von [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) zum [freeCodeCamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale) hinzu

### Ghost Dashboard Änderungen

Aktualisiere die Publikations-Assets, indem du zum Ghost Dashboard > Einstellungen > Allgemein gehst und die [Icon](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), das [Logo](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png) und das [Cover](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png) der Publikationen hochlädst.
