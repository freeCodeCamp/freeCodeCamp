# Flughandbuch für die Arbeit an virtuellen Maschinen

Als Mitglied des Teams oder des dev-teams Ihnen wurde möglicherweise Zugang zu unseren -Cloud-Dienstleistern wie Azure, Digital Ocean, etc. gewährt.

Hier sind einige praktische Befehle, die Sie verwenden können, um auf den virtuellen Maschinen (VM), zum Beispiel die Durchführung von Wartungsaktualisierungen oder die Durchführung allgemeiner Hausaufbewahrung.

# Eine Liste der VMs erhalten

> [!HINWEIS] Während Sie möglicherweise bereits SSH-Zugriff auf die VMs haben, dass allein Ihnen keine VMs anzeigen lässt, es sei denn, Ihnen wurde auch Zugriff auf die Cloud-Portale gewährt.

## Azure

Azure CLI `az`installieren: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Einmal) MacOS mit [`Homebrew`](https://brew.sh) installieren:**

```
braue azure-cli
```

> **(Einmal) Login:**

```
az login
```

> **Liste der VM-Namen und P-Adressen erhalten:**

```
az vm list-ip-Adressen --output Tabelle
```

## Digitaler Ozean

Installiere Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Einmal) MacOS mit [`Homebrew`](https://brew.sh) installieren:**

```
braue Doctl
```

> **(Einmal) Login:**

Authentifizierung und Kontextwechsel: https://github.com/digitalocean/doctl#Authentifizierung mit-digitalocean

```
doctl auth init
```

> **Liste der VM-Namen und IP-Adressen erhalten:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# Drehe eine VM (oder VM-Skalierung)

> Todo: Füge Anweisungen zum Drehen von VM(s) hinzu


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

# VMs aktuell halten

Sie sollten die VMs auf dem Laufenden halten, indem Sie Updates und Upgrades durchführen. Dies wird sicherstellen, dass die virtuelle Maschine mit den neuesten Sicherheitskorrekturen gepatcht wird.

> [!WARNUNG] Bevor Sie diese Befehle ausführen:
> 
> - Vergewissern Sie sich, dass die VM vollständig bereitgestellt wurde und dass nach der Installation keine Schritte ausgeführt werden.
> - Wenn Sie Pakete auf einer VM aktualisieren, die bereits eine Anwendung bedient, stellen Sie sicher, dass die App angehalten / gespeichert wurde. Paket-Aktualisierungen verursachen Netzwerk-Bandbreite, Speicher und/oder CPU-Auslastungsspikes, die zu Ausfällen bei laufenden Anwendungen führen.

Paket-Informationen aktualisieren

```console
sudo apt Update
```

Installierte Pakete aktualisieren

```console
sudo apt Upgrade -y
```

Unbenutzte Pakete bereinigen

```console
sudo apt Autoremove -y
```

# Arbeiten auf Web-Servern (Proxy)

Wir führen Lastbalancierungen (Azure Load Balancer) Instanzen für unsere Web-Server aus. Auf diesen Servern läuft NGINX, die den gesamten Datenverkehr auf FreeCodeCamp.org von verschiedenen Anwendungen rückgängig machen, die auf eigenen Infrastrukturen laufen.

Die NGINX-Konfiguration ist auf [dieses Repository](https://github.com/freeCodeCamp/nginx-config) verfügbar.

## Erste Installation

Bereitstellung von VMs mit dem Code

### 1. (Optional) Installieren Sie NGINX und konfigurieren Sie aus dem Projektarchiv.

Die Grundeinstellung sollte über die Cloud-Init-Konfiguration OOTB bereit sein. SSH und nehmen Änderungen vor, die für die jeweilige Instanz(en) notwendig sind.

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

### 2. Cloudflare Ursprungszertifikate und Upstream-Anwendungskonfiguration installieren.

Holen Sie sich die Cloudflare Ursprungszertifikate vom sicheren Speicher und installieren Sie an benötigten Standorten.

**ODER**

Vorhandene Zertifikate übertragen:

```console
# Lokales
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Upstream-Konfigurationen aktualisieren:

```console
vi configs/upstreams.conf
```

IP-Adressen der Quell-/Ursprungsanwendung hinzufügen/aktualisieren.

### 3. Netzwerk und Firewalls einrichten.

Konfigurieren Sie Azure Firewalls und `ufw` bei Bedarf für ingress-Ursprungsadressen.

### 4. Fügen Sie die VM dem Loadbalancer Backend Pool hinzu.

Konfigurieren und Hinzufügen von Regeln zum Ladeausgleich, falls nötig. Möglicherweise müssen Sie auch die VMs hinzufügen, um den Bilanz-Backend Pool zu laden, falls nötig.

## Protokollierung und Überwachung

1. Prüfen Sie den Status auf den NGINX-Dienst mit dem folgenden Befehl:

```console
sudo systemctl status nginx
```

2. Protokollierung und Überwachung der Server sind verfügbar unter:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Aktualisiere Instanzen (Wartung)

Config Änderungen an unseren NGINX-Instanzen werden auf GitHub gepflegt. Diese sollten in jeder Instanz wie folgt eingesetzt werden:

1. SSH in die Instanz und sudo eingeben

```console
sudo su
```

2. Holen Sie sich den neuesten Konfigurationscode.

```console
cd /etc/nginx
git retriech --all --prune
git reset --hard origin/master
```

3. Testen und laden Sie die Konfiguration [mit Signalen](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx) neu.

```console
nginx -t
nginx -s reload
```

# Arbeit an API-Instanzen

1. Build-Tools für Knotenbinärdateien installieren (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## Erste Installation

Bereitstellung von VMs mit dem Code

1. Node LTS installieren.

2. `npm` aktualisieren und PM2 installieren und Logrotate und Start beim Booten einrichten

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env und keys.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # oder eine andere Zweigstelle die zur Verfügung gestellt werden soll
   ```

4. Erstellen Sie das `.env` aus dem sicheren Anmeldedatenspeicher.

5. Erstellen Sie den `google-credentials.json` aus dem sicheren Anmeldedatenspeicher.

6. Abhängigkeiten installieren

   ```console
   npm ci
   ```

7. Server erstellen

   ```console
   npm ensure-env && npm run build:server ausführen
   ```

8. Instanzen starten

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Protokollierung und Überwachung

```console
pm2 Logs
```

```console
pm2 monit
```

## Aktualisiere Instanzen (Wartung)

Code-Änderungen müssen von Zeit zu Zeit in den API-Instanzen eingesetzt werden. Es kann ein rollendes Update oder ein manuelles Update sein. Das spätere ist notwendig, wenn Abhängigkeiten geändert oder Umgebungsvariablen hinzugefügt werden.

> [!DANGER] Die automatisierten Pipelines bearbeiten keine Abhängigkeitsaktualisierungen in der Minute. Wir müssen eine manuelle Aktualisierung vornehmen, bevor eine Deployment-Pipeline läuft.

### 1. Manuelle Updates - Wird für das Aktualisieren von Abhängigkeiten verwendet, env Variablen.

1. Alle Instanzen stoppen

```console
pm2 alle stoppen
```

2. Abhängigkeiten installieren

```console
npm ci
```

3. Server erstellen

```console
npm ensure-env && npm run build:server ausführen
```

4. Instanzen starten

```console
pm2 starten Sie alle --update-env && pm2 Logs
```

### 2. Rollende Updates - Wird für logische Änderungen am Code verwendet.

```console
pm2 alle --update-env && pm2 Logs neu laden
```

> [!HINWEIS] Wir bearbeiten rollende Aktualisierungen zu Code, Logik, über Pipelines. You should not need to run these commands. Diese sind hier zur Dokumentation.

# Arbeiten an Clientinstanzen

1. Build-Tools für Knotenbinärdateien installieren (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## Erste Installation

Bereitstellung von VMs mit dem Code

1. Node LTS installieren.

2. `npm` aktualisieren und PM2 installieren und Logrotate und Start beim Booten einrichten

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 start
   ```

3. Client-Konfiguration, Setup env und Schlüssel.

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
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 löschen Kunden primäre
   pm2 Start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 löschen Kunde Sekundär
   pm2 Start ./client-start-secondary.sh --name client-secondary
```

## Protokollierung und Überwachung

```console
pm2 Logs
```

```console
pm2 monit
```

## Aktualisiere Instanzen (Wartung)

Code-Änderungen müssen von Zeit zu Zeit in den API-Instanzen eingesetzt werden. Es kann ein rollendes Update oder ein manuelles Update sein. Das spätere ist notwendig, wenn Abhängigkeiten geändert oder Umgebungsvariablen hinzugefügt werden.

> [!DANGER] Die automatisierten Pipelines bearbeiten keine Abhängigkeitsaktualisierungen in der Minute. Wir müssen eine manuelle Aktualisierung vornehmen, bevor eine Deployment-Pipeline läuft.

### 1. Manuelle Updates - Wird für das Aktualisieren von Abhängigkeiten verwendet, env Variablen.

1. Alle Instanzen stoppen

   ```console
   pm2 alle stoppen
   ```

2. Abhängigkeiten installieren oder aktualisieren

3. Instanzen starten

   ```console
   pm2 starten Sie alle --update-env && pm2 Logs
   ```

### 2. Rollende Updates - Wird für logische Änderungen am Code verwendet.

```console
pm2 alle --update-env && pm2 Logs neu laden
```

> [!HINWEIS] Wir bearbeiten rollende Aktualisierungen zu Code, Logik, über Pipelines. You should not need to run these commands. Diese sind hier zur Dokumentation.
