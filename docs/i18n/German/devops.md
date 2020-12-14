# DevOps Handbook

This guide will help you understand our infrastructure stack and how we maintain our platforms. While this guide does not have exhaustive details for all operations, it could be used as a reference for your understanding of the systems.

Let us know, if you have feedback or queries, and we will be happy to clarify.

# Flight Manual - Code deployments

This repository is continuously built, tested and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

This involves three steps to be followed in sequence:

1. New changes (both fixes and features) are merged into our primary development branch (`master`) via pull requests.
2. These changes are run through a series of automated tests.
3. Once the tests pass we release the changes (or update them if needed) to deployments on our infrastructure.

#### Building the codebase - Mapping Git Branches to Deployments.

Typically, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (the default development branch) is merged into the [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) branch once a day and is released into an isolated infrastructure.

This is an intermediate release for our developers and volunteer contributors. It is also known as our "staging" or "beta" release.

Es ist identisch mit unserer Live-Produktionsumgebung unter `freeCodeCamp.org`, außer mit einem separaten Satz von Datenbanken, Servern, Webproxies usw. Diese Isolierung ermöglicht es uns, laufende Entwicklungen und Features in einem "Produktion" wie dem Szenario zu testen, ohne die normalen Benutzer der Hauptplattformen von FreeCodeCamp.org zu beeinträchtigen. This isolation lets us test ongoing development and features in a "production" like scenario, without affecting regular users of freeCodeCamp.org's main platforms.

Sobald das Entwicklerteam [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) mit den Änderungen auf der Staging-Plattform zufrieden ist, diese Änderungen werden alle paar Tage in den Produktionszweig [``](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) verschoben.

This is the final release that moves changes to our production platforms on freeCodeCamp.org.

#### Testing changes - Integration and User Acceptance Testing.

We employ various levels of integration and acceptance testing to check on the quality of the code. All our tests are done through software like [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) and [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

We have unit tests for testing our challenge solutions, Server APIs and Client User interfaces. These help us test the integration between different components.

> [!HINWEIS] Wir sind auch dabei, Endanwender-Tests zu schreiben, die dazu beitragen, reale Weltszenarien wie das Aktualisieren einer E-Mail oder einen Aufruf an die API oder die Dienste von Drittanbietern zu replizieren.

Together these tests help in preventing issues from repeating themselves and ensure we do not introduce a bug while working on another bug or a feature.

#### Deploying Changes - Pushing changes to servers.

We have configured continuous delivery software to push changes to our development and production servers.

Once the changes are pushed to the protected release branches, a build pipeline is automatically triggered for the branch. The build pipelines are responsible for building artifacts and keeping them in a cold storage for later use.

The build pipeline goes on to trigger a corresponding release pipeline if it completes a successful run. The release pipelines are responsible for collecting the build artifacts, moving them to the servers and going live.

Status of builds and releases are [available here](#build-test-and-deployment-status).

## Trigger a build, test and deploy

Currently, only members on the developer team can push to the production branches. The changes to the `production-*` branches can land only via fast-forward merge to the [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!HINWEIS] In den kommenden Tagen würden wir diesen Fluss verbessern, der über Pull-Requests erfolgen soll, um das Zugangsmanagement und die Transparenz zu verbessern.

### Pushing changes to Staging Applications.

1. Configure your remotes correctly.

   ```sh
   git remote -v
   ```

   **Results:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Make sure your `master` branch is pristine and in sync with the upstream.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Check that the Travis CI is passing on the `master` branch for upstream.

   The [continuous integration](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) tests should be green and PASSING for the `master` branch.

    <details> <summary> Checking status on Travis CI (screenshot) </summary>
      <br>
      ![Check build status on Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   If this is failing you should stop and investigate the errors.

4. Confirm that you are able to build the repository locally.

   ```
   npm run clean-and-develop
   ```

5. Move changes from `master` to `production-staging` via a fast-forward merge

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > [!HINWEIS] Du wirst nicht in der Lage sein, Push zu erzwingen und wenn du den Verlauf auf jeden Fall neu geschrieben hast, werden diese Befehle fehlerhaft sein.
   > 
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `production-staging` branch. Once the build is complete, the artifacts are saved as `.zip` files in a cold storage to be retrieved and used later.

The release pipeline is triggered automatically when a fresh artifact is available from the connected build pipeline. For staging platforms, this process does not involve manual approval and the artifacts are pushed to the Client CDN and API servers.

> [!TIP|label:Estimates] Der Build-Run dauert normalerweise ~20-25 Minuten, um den Release-Run abzuschließen, der ~15-20 Minuten dauert, für den Client und ~5-10 Minuten für die API verfügbar sein. From code push to being live on the staging platforms the whole process takes **~35-45 mins** in total.

### Pushing changes to Production Applications.

The process is mostly the same as the staging platforms, with a few extra checks in place. This is just to make sure, we do not break anything on freeCodeCamp.org which can see hundreds of users using it at any moment.

| Do NOT execute these commands unless you have verified that everything is working on the staging platform. You should not bypass or skip any testing on staging before proceeding further. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                            |


1. Make sure your `production-staging` branch is pristine and in sync with the upstream.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Move changes from `production-staging` to `production-current` via a fast-forward merge

   ```
   git checkout production-current
   git merge production-staging
   git push upstream
   ```

   > [!HINWEIS] Du wirst nicht in der Lage sein, Push zu erzwingen und wenn du den Verlauf auf jeden Fall neu geschrieben hast, werden diese Befehle fehlerhaft sein.
   > 
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `production-current` branch. Once a build artifact is ready, it will trigger a run on the release pipeline.

> [!TIP|label:Estimates] Der Build-Run dauert normalerweise ~20-25 Minuten.

**Additional Steps for Staff Action**

One a release run is triggered, members of the developer staff team will receive an automated manual intervention email. They can either _approve_ or _reject_ the release run.

If the changes are working nicely and have been tested on the staging platform, then it can be approved. The approval must be given within 4 hours of the release being triggered before getting rejected automatically. A staff can re-trigger the release run manually for rejected runs, or wait for the next cycle of release.

For staff use:

| Check your email for a direct link or [go to the release dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) after the build run is complete. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                    |


Once one of the staff members approves a release, the pipeline will push the changes live to freeCodeCamp.org's production CDN and API servers. They typically take ~15-20 mins for the client, and ~5 mins for the API servers to be available live.

> [!TIP|label:Estimates] Der Release-Run benötigt normalerweise ~15-20 Minuten für jede Clientinstanz, und ~5-10 Minuten für jede API-Instanz, um live verfügbar zu sein. From code push to being live on the production platforms the whole process takes **~90-120 mins** in total (not counting the wait time for the staff approval).

## Build, Test and Deployment Status

Here is the current test, build and deployment status of the codebase.

| Type             | Branch                                                                                       | Status                                                                                                                                                                                                                                              | Dashboard                                                                                 |
|:---------------- |:-------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------- |
| CI Tests         | [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                         | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Go to status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Tests         | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Go to status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Build Pipeline   | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Build Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Release Pipeline | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                     | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Tests         | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Go to status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Build Pipeline   | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Build Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Release Pipeline | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                     | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Early access and beta testing

We welcome you to test these releases in a **"public beta testing"** mode and get early access to upcoming features to the platforms. Manchmal werden diese Funktionen/Änderungen als **, Beta, Staging,** usw. bezeichnet.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent** and **stable** for everyone.

We thank you for reporting bugs that you encounter and help in making freeCodeCamp.org better. You rock!

### Identifying the upcoming version of the platforms

Currently a public beta testing version is available at:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!HINWEIS] Der Domainname unterscheidet sich von **`freeCodeCamp.org`**. This is intentional to prevent search engine indexing and avoid confusion for regular users of the platform.

### Identifying the current version of the platforms

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

The dev-team merges changes from the `production-staging` branch to `production-current` when they release changes. The top commit should be what you see live on the site.

You can identify the exact version deployed by visiting the build and deployment logs available in the status section. Alternatively you can also ping us in the [contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) for a confirmation.

### Known Limitations

There are some known limitations and tradeoffs when using the beta version of the platform.

- #### All data / personal progress on these beta platforms `will NOT be saved or carried over` to production.

  **Users on the beta version will have a separate account from the production.** The beta version uses a physically separate database from production. This gives us the ability to prevent any accidental loss of data or modifications. The dev team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta platforms.

  Deployment is expected to be frequent and in rapid iterations, sometimes multiple times a day. As a result there will be unexpected downtime at times or broken functionality on the beta version.

- #### Do not send regular users to this site as a measure of confirming a fix

  The beta site is and always has been to augment local development and testing, nothing else. It's not a promise of what’s coming, but a glimpse of what is being worked upon.

- #### Sign page may look different than production

  We use a test tenant for freecodecamp.dev on Auth0, and hence do not have the ability to set a custom domain. This makes it so that all the redirect callbacks and the login page appear at a default domain like: `https://freecodecamp-dev.auth0.com/`. This does not affect the functionality is as close to production as we can get.

## Reporting issues and leaving feedback

Please open fresh issues for discussions and reporting bugs. You can label them as **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** for triage.

You may send an email to `dev[at]freecodecamp.org` if you have any queries. As always all security vulnerabilities should be reported to `security[at]freecodecamp.org` instead of the public tracker and forum.

# Flight Manual - Server Maintenance

> [!WARNING]
> 
> 1. The guide applies to the **freeCodeCamp Staff members only**.
> 2. These instructions should not be considered exhaustive, please use caution.

As a member of the staff, you may have been given access to our cloud service providers like Azure, Digital Ocean, etc.

Here are some handy commands that you can use to work on the Virtual Machines (VM), for instance performing maintenance updates or doing general houeskeeping.

## Abfragen einer Liste der VMs

> [!HINWEIS] Während Sie möglicherweise bereits SSH-Zugriff auf die VMs haben, dass allein Ihnen keine VMs anzeigen lässt, es sei denn, Ihnen wurde auch Zugriff auf die Cloud-Portale gewährt.

### Azure

Install Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Einmalig) Installation unter macOS mit [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Einmalig) Login:**

```
az login
```

> **Abfragen der Liste der VM-Namen und IP-Adressen:**

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

> **Abfragen der Liste VM-Namen und IP-Adressen:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Hochfahren einer VM (oder eines VM Scale Set)

> Zu erledigen: Hinzufügen von Anleitungen zum Hoch- und Herunterfahren von VM(s)


<!--

The below instructions are stale.

### 0. Prerequisites (workspace Setup) for Staff

Get a login session on `azure cli`, and clone the
[`infra`](https://github.com/freeCodeCamp/infra) for setting up template
workspace.

```console
az login
git clone https://github.com/freeCodeCamp/infra
cd infra
```

Use the Scratchpad subdirectory for temporary files, and making one-off edits.
The contents in this subdirectory are intentionally ignored from source control.

### 1. Provision VMs on Azure.

List all Resource Groups

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
```

Create a Resource Group

```
az group create --location eastus --name stg-rg
```

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
stg-rg                             eastus         Succeeded
```

Next per the need, provision a single VM or a scaleset.

#### A. provision single instances

```console
az vm create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

#### B. provision scaleset instance

```console
az vmss create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_SCALESET_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --upgrade-policy-mode automatic \
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

> [!NOTE]
>
> - The custom-data config should allow you to configure and add SSH keys,
>   install packages etc. via the `cloud-init` templates in your local
>   workspace. Tweak the files in your local workspace as needed. The cloud-init
>   config is optional and you can omit it completely to do setups manually as
>   well.
>
> - The virtual machine SKU is something like: **Standard_B2s** which can be
>   retrived by executing something like
>   `az vm list-sizes -l eastus --output table` or checking the Azure portal
>   pricing.

-->

## VMs aktuell halten

Sie sollten die VMs auf dem Laufenden halten, indem Sie Updates und Upgrades durchführen. Dies wird sicherstellen, dass die virtuelle Maschine mit den neuesten Sicherheitskorrekturen gepatcht wird.

> [!WARNUNG] Bevor Sie diese Befehle ausführen:
> 
> - Vergewissern Sie sich, dass die VM vollständig bereitgestellt wurde und dass nach der Installation keine Schritte ausgeführt werden.
> - Wenn Sie Pakete auf einer VM aktualisieren, die bereits eine Anwendung bedient, stellen Sie sicher, dass die App angehalten / gespeichert wurde. Paket-Aktualisierungen verursachen Netzwerk-Bandbreite, Speicher und/oder CPU-Auslastungsspikes, die zu Ausfällen bei laufenden Anwendungen führen.

Paket-Informationen aktualisieren

```console
sudo apt update
```

Installierte Pakete aktualisieren

```console
sudo apt upgrade -y
```

Unbenutzte Pakete entfernen

```console
sudo apt autoremove -y
```

## Arbeiten mit Web-Servern (Proxy)

Wir führen Lastbalancierungen (Azure Load Balancer) Instanzen für unsere Web-Server aus. Auf diesen Servern läuft NGINX, die den gesamten Datenverkehr auf FreeCodeCamp.org von verschiedenen Anwendungen rückgängig machen, die auf eigenen Infrastrukturen laufen.

Die NGINX-Konfiguration ist auf [dieses Repository](https://github.com/freeCodeCamp/nginx-config) verfügbar.

### Erste Installation

Provisionieren der VMs mit Code

#### 1. (Optional) Installieren Sie NGINX und konfigurieren Sie aus dem Repository.

Die Grundeinstellung sollte über die cloud-init-Konfiguration bereits vorhanden sein. SSH und nehmen Änderungen vor, die für die jeweilige Instanz(en) notwendig sind.

If you did not use the cloud-init config previously use the below for manual setup of NGINX and error pages:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

#### 2. Installieren von Cloudflare Origin Certificates und Upstream-Anwendungskonfiguration.

Holen Sie sich die Cloudflare Ursprungszertifikate vom sicheren Speicher und installieren Sie an benötigten Standorten.

**ODER**

Vorhandene Zertifikate übertragen:

```console
# Lokal
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Auf dem Server
rm -rf ./ssl
mv /tmp/ssl ./
```

Upstream-Konfigurationen aktualisieren:

```console
vi configs/upstreams.conf
```

IP-Adressen der Quell-/Ursprungsanwendung hinzufügen/aktualisieren.

#### 3. Netzwerk und Firewalls einrichten.

Konfigurieren Sie Azure Firewalls und `ufw` je nach Bedarfsfall für eingehende Ursprungsadressen.

#### 4. Fügen Sie die VM dem Loadbalancer Backend Pool hinzu.

Falls erforderlich, konfigurieren und fügen Sie Regeln für den Loadbalancer hinzu. Möglicherweise müssen Sie auch die VMs hinzufügen, um den Bilanz-Backend Pool zu laden, falls nötig.

### Aktualisiere Instanzen (Wartung)

1. Prüfen Sie den Status des NGINX Services mit folgendem Befehl:

```console
sudo systemctl status nginx
```

2. Protokollierung und Überwachung der Server sind zu finden unter:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
### Aktualisieren von Instanzen (Wartung)

Config Änderungen an unseren NGINX-Instanzen werden auf GitHub gepflegt. Diese sollten in jeder Instanz wie folgt eingesetzt werden:

1. Per SSH mit der Instanz verbinden und sudo eingeben

```console
sudo su
```

2. Herunterladen des neuesten Konfigurationscodes.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Testen und laden Sie die Konfiguration [mit Signalen](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx) neu.

```console
nginx -t
nginx -s reload
```

## Arbeiten an API-Instanzen

1. Installieren Sie Build-Tools für Node Binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### Erste Installation

Provisionieren der VMs mit Code

1. Node LTS installieren.

2. `npm` aktualisieren und PM2 installieren und Logrotate und Start beim Booten einrichten

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klonen von freeCodeCamp, einrichten von env und Schlüsseln.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # oder einen andere auszurollenden Zweig
   ```

4. Erstellen Sie die `.env` aus dem geschützten Zugangsdatenspeicher.

5. Erstellen Sie die `google-credentials.json` aus dem geschützten Zugangsdatenspeicher.

6. Installation von Abhängigkeiten

   ```console
   npm ci
   ```

7. Erstellen des Servers

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Starte Instanz

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

### Aktualisiere Instanzen (Wartung)

```console
## Protokollierung und Überwachung

```console
pm2 Logs
```

```console
pm2 monit
```

### Aktualisieren von Instanzen (Wartung)

Code-Änderungen müssen von Zeit zu Zeit in den API-Instanzen verteilt werden. Es kann ein rollendes Update oder ein manuelles Update sein. Das spätere ist notwendig, wenn Abhängigkeiten geändert oder Umgebungsvariablen hinzugefügt werden.

> [!DANGER] Die automatisierten Pipelines bearbeiten keine Abhängigkeitsaktualisierungen in der Minute. Wir müssen eine manuelle Aktualisierung durchführen, bevor eine Deployment-Pipeline läuft.

#### 1. Manuelle Aktualisierungen - Wird für das Aktualisieren von Abhängigkeiten und env Variablen verwendet.

1. Stoppen aller Instanzen

```console
pm2 stop all
```

2. Installation von Abhängigkeiten

```console
npm ci
```

3. Erstellen des Servers

```console
npm run ensure-env && npm run build:server
```

4. Starte Instanz

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Rollende Aktualisierungen - Wird für logische Änderungen am Code verwendet.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Wir handhaben rollende Aktualisierungen am Code, Logik, über Pipelines. You should not need to run these commands. Diese dienen der Dokumentation.

## Arbeiten an Client-Instanzen

1. Installieren Sie Build-Tools für Node Binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### Erste Installation

Provisionieren der VMs mit Code

1. Node LTS installieren.

2. `npm` aktualisieren und PM2 installieren und Logrotate und Start beim Booten einrichten

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klonen von Client-Konfiguration, einrichten von env und Schlüsseln.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Starte Platzhalter-Instanzen für den Web-Client, diese werden mit Artefakten aus der Azure Pipline aktualisiert.

   > Todo: Dieses Setup muss in den S3 oder Azure Blob Speicher verschoben werden 
   > 
   > ```console
   ```console
     echo "serve -c ../../serve.json www -p 50505" &#062;&#062; client-start-primary.sh
     chmod +x client-start-primary. h
     pm2 löschen Kunden primäre
     pm2 Start . client-start-primary.sh --name client-primary
     echo "serve -c . /../serve.json www -p 52525" &#062;&#062; client-start-secondary.sh
     chmod +x client-start-secondary. h
     pm2 löschen Kunde Sekundär
     pm2 Start ./client-start-secondary.sh --name client-secondary
```

### Aktualisiere Instanzen (Wartung)

```console
## Protokollierung und Überwachung

```console
pm2 Logs
```

```console
pm2 monit
```

### Aktualisieren von Instanzen (Wartung)

Code-Änderungen müssen von Zeit zu Zeit in den API-Instanzen verteilt werden. Es kann ein rollendes Update oder ein manuelles Update sein. Das spätere ist notwendig, wenn Abhängigkeiten geändert oder Umgebungsvariablen hinzugefügt werden.

> [!DANGER] Die automatisierten Pipelines bearbeiten keine Abhängigkeitsaktualisierungen in der Minute. Wir müssen eine manuelle Aktualisierung durchführen, bevor eine Deployment-Pipeline läuft.

#### 1. Manuelle Aktualisierungen - Wird für das Aktualisieren von Abhängigkeiten und env Variablen verwendet.

1. Stoppen aller Instanzen

   ```console
   pm2 stop all
   ```

2. Abhängigkeiten installieren oder aktualisieren

3. Starte Instanz

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Rollende Aktualisierungen - Wird für logische Änderungen am Code verwendet.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Wir handhaben rollende Aktualisierungen am Code, Logik, über Pipelines. You should not need to run these commands. Diese dienen der Dokumentation.
