# Flythåndbok for arbeid på virtuelle maskiner

Som medlem av staben eller dev-gruppen, du har kanskje fått tilgang til våre skytjenesteleverandører som Azure, Digital Ocean, osv.

Her er noen praktiske kommandoer du kan bruke til å arbeide med de virtuelle maskinene (VM), for eksempel å utføre vedlikeholdsoppdateringer eller gjennomføre generelle boliger.

# Få en liste over VMs

> [!MERK] Mens du allerede har SSH tilgang til VM-ene, det alene vil ikke la deg liste VMs med mindre du har fått tilgang til skyportalene også.

## Azure

Installer Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Installer på macOS med [`homebrew`](https://brew.sh):**

```
brygg installerer azure-cli
```

> **(Engang) Innlogging:**

```
az login
```

> **Få listen over VM navn og P adresser:**

```
az vm list-ip-adresser – utskriftstabell
```

## Digitalt hav

Installer Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Installer på macOS med [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Engang) Innlogging:**

Autentisering og kontekst bryter: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth-autorisasjon
```

> **Få listen over VM navn og IP-adresser:**

```
doctl beregner droplet liste --format "ID,Name,PublicIPv4"
```

# Spin en VM (eller VM Skala Sett)

> Todo: Legg til instruksjoner for roterende VM(er)


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

# Behold VMs oppdatert

Du bør beholde VMs oppdatert ved å utføre oppdateringer og oppgraderinger. Dermed vil sikre at den virtuelle maskinen lettes med de siste sikkerhetsfeilene.

> [!ADVARSEL] Før du kjører disse kommandoene:
> 
> - Kontroller at VM er fullstendig bestemt, og at det ikke er etter installasjon trinn er kjørt.
> - Hvis du oppdaterer pakker på et VM som allerede serverer et program, pass på at appen har blitt stoppet / lagret. Pakkeoppdateringer vil forårsake nettverksbåndbredde, minne og/eller CPU-bruk som fører til strømbrudd på kjørende programmer.

Oppdater pakkeinformasjonen

```console
sudo apt oppdatering
```

Oppgrader installerte pakker

```console
sudo app-oppgradering -y
```

Rydd opp ubrukte pakker

```console
sudo apt autoremove -y
```

# Arbeid på webservere (Proxy)

Vi kjører lastbalansert (Azure Load Balancer) instanser for våre web servere. Disse serverne kjører NGINX som reverserer all trafikk til freeCodeCamp.org fra ulike applikasjoner som kjører på egen infrastruktur.

NGINX konfigurasjonen er tilgjengelig på [dette kodelageret](https://github.com/freeCodeCamp/nginx-config).

## Første installasjon

Foreslå VMs med koden

### 1. (Valgfritt) Installer NGINX og konfigurer fra depot.

Grunnleggende oppsett må være klart OOTB, via skytekstkonfigurasjonen. SSH og gjør endringer etter behov i den eller de enkelte tilfellene.

If you not use the cloud-init config previously use the below for manual setup of NGINX and error pages:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Installer Cloudflare opprinnelsessertifikater og upstream applikasjon config.

Få Skyflare-opprinnelsessertifikatene fra sikker lagring og installer på nødvendige steder.

**ELLER**

Flytt over eksisterende sertifikater:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/sssl ./
```

Oppdater oppstrøms konfigurasjoner:

```console
vi configs/upstreams.conf
```

Legg til/oppdater programmets IP-adresser til kilde/opprinnelse.

### 3. Oppsett av nettverks- og brannmurer.

Konfigurer Azure brannmurer og `ufw` etter behov for inndra opprinnelsesadresser.

### 4. Legg til VM i backend-bassenget for last.

Konfigurer og legg til regler for å laste balanseringer hvis nødvendig. Du må også legge til VMs for å laste reservebasseng ved behov.

## Logging og overvåking

1. Kontroller statusen for NGINX-tjenesten ved å bruke kommandoen nedenfor:

```console
sudo systemctl status nginx
```

2. Logging og overvåking av serverne er tilgjengelige på:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Oppdaterer Instanser (vedlikehold)

Konfigurasjonsendringer i våre NGINX-instanser opprettholdes på GitHub, disse bør distribueres i hver enkelt forekomst slik:

1. SSH i instansen og enter sudo

```console
sudo su
```

2. Få den nyeste konfigurasjonskoden.

```console
cd /etc/nginx
git hent --all --prune
git reset --hard origin/master
```

3. Test og last konfigurasjonen på nytt [med signaler](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Arbeid med API instanser

1. Installer byggeverktøy for node binærfiler (`node-gyp`) osv.

```console
sudo apt installasjons bygg-vesentlig
```

## Første installasjon

Foreslå VMs med koden

1. Installer Node LTS.

2. Oppdater `npm` og installer PM2 og sett logrotate og oppstart ved oppstart

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env og nøkler.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # eller hvilken som helst annen filial skal distribueres
   ```

4. Opprett `.env` fra sikker legitimasjonslagring.

5. Opprett `google-credentials.json` fra sikker legitimasjonslagring.

6. Installere avhengigheter

   ```console
   npm ci
   ```

7. Bygg serveren

   ```console
   npm kjøre ensureenv && npm kjøre build:server
   ```

8. Start Instanser

   ```console
   cd api-server
   pm2 start produksjon-start.js -i max --max-memory-restart 600M --name org
   ```

## Logging og overvåking

```console
pm2 logger
```

```console
pm2 monit
```

## Oppdaterer Instanser (vedlikehold)

Endringer i koden må distribueres til API-forekomstene fra tid til annen. Det kan være en rullende oppdatering eller en manuell oppdatering. Senere er det avgjørende ved endring av avhengigheter eller tilføyelse av identifikasjonsvariabler.

> De automatiske rørledningene håndterer ikke avhengigheter oppdateringer på minutt. Før en eventuell distribusjon av rør, må vi gjøre en manuell oppdatering.

### 1. Manuelle oppdateringer - brukes til å oppdatere avhengigheter i env variabler.

1. Stopp alle forekomster

```console
pm2 stopp alle
```

2. Installere avhengigheter

```console
npm ci
```

3. Bygg serveren

```console
npm kjøre ensureenv && npm kjøre build:server
```

4. Start Instanser

```console
pm2 start alle --update-env && pm2 logger
```

### 2. Rullende oppdateringer - Brukes for logiske kodeendringer.

```console
pm2 Last alle --update-env && pm2 logger
```

> Vi håndterer oppdateringer for å kode, logisk, via rørledninger. Du bør ikke bruke disse kommandoene. Her er det dokumentasjon.

# Arbeid med klient instanser

1. Installer byggeverktøy for node binærfiler (`node-gyp`) osv.

```console
sudo apt installasjons bygg-vesentlig
```

## Første installasjon

Foreslå VMs med koden

1. Installer Node LTS.

2. Oppdater `npm` og installer PM2 og sett logrotate og oppstart ved oppstart

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 oppstart
   ```

3. Klon klientkonfigurasjon, oppsett env og nøkler.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Start plassholderinstanser for den nettklienten, disse vil bli oppdatert med artifakter fra Azurepipleten.

   > Dagens : Denne oppsettet må flytte til S3 eller Azure Blob lagring 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 slette klient-primære
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 slette client-secondary
   pm2 start ./client-start-secondary.sh --name client-secondary
```

## Logging og overvåking

```console
pm2 logger
```

```console
pm2 monit
```

## Oppdaterer Instanser (vedlikehold)

Endringer i koden må distribueres til API-forekomstene fra tid til annen. Det kan være en rullende oppdatering eller en manuell oppdatering. Senere er det avgjørende ved endring av avhengigheter eller tilføyelse av identifikasjonsvariabler.

> De automatiske rørledningene håndterer ikke avhengigheter oppdateringer på minutt. Før en eventuell distribusjon av rør, må vi gjøre en manuell oppdatering.

### 1. Manuelle oppdateringer - brukes til å oppdatere avhengigheter i env variabler.

1. Stopp alle forekomster

   ```console
   pm2 stopp alle
   ```

2. Avhengigheter for installasjon eller oppdatering

3. Start Instanser

   ```console
   pm2 start alle --update-env && pm2 logger
   ```

### 2. Rullende oppdateringer - Brukes for logiske kodeendringer.

```console
pm2 Last alle --update-env && pm2 logger
```

> Vi håndterer oppdateringer for å kode, logisk, via rørledninger. Du bør ikke bruke disse kommandoene. Her er det dokumentasjon.
