# Vlucht handleiding voor het werken aan virtuele machines

Als lid van het personeel of het desv-team u heeft mogelijk toegang gekregen tot onze cloud service providers zoals Azure, Digital Ocean, etc.

Hier zijn enkele handige commando's die je kunt gebruiken om te werken op de virtuele Machines (VM), bijvoorbeeld het uitvoeren van onderhoudsupdates of het doen van algemene huizenhouders.

# Krijg een lijst van de VM's

> [!NOT] Hoewel u misschien al SSH toegang hebt tot de VM's, dat alleen zal u niet toestaan VM's te vermelden, tenzij u ook toegang tot de cloud-portalen wordt verleend.

## Azure

Installeer Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Installeer op macOS met [`homebrew`](https://brew.sh):**

```
brew installatie azure-cli
```

> **(One-time) Login:**

```
az login
```

> **Haal de lijst op met VM-namen en P-adressen:**

```
az vm list-ip-adressen --output tabel
```

## Digitale Oceaan

Installeer Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Installeer op macOS met [`homebrew`](https://brew.sh):**

```
brew installatie doctl
```

> **(One-time) Login:**

Authenticatie en context switching: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth-init
```

> **Haal de lijst op met VM-namen en IP-adressen:**

```
doctl compute droplet list --format "ID,Naam,PublicIPv4"
```

# Een VM (of VM schaalset) draaien

> Todo: Voeg instructies toe voor draaiende VM(s)


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

# Houd VM's bijgewerkt

U moet de VM's up-to-date houden door updates en upgrades uit te voeren. Dit zorgt ervoor dat de virtuele machine wordt aangepast met de nieuwste beveiligingselementen.

> [!WAARSCHUWING] Voordat je deze opdrachten uitvoert:
> 
> - Zorg ervoor dat het VM volledig gereserveerd is en dat er geen post-install stappen worden uitgevoerd.
> - Als u pakketten bijwerkt met een VM die al een applicatie aanbiedt, zorg er dan voor dat de app is gestopt of opgeslagen. Pakket updates leiden netwerkbandbreedte, geheugen en/of CPU-gebruikspikes tot storingen in lopende applicaties.

Update pakket informatie

```console
sudo apt update
```

Upgrade geïnstalleerde pakketten

```console
sudo apt upgrade -y
```

Ongebruikte pakketten opschonen

```console
sudo apt autoremove -y
```

# Werk op webservers (Proxy)

We draaien op load balanced (Azure Load Balancer) instanties voor onze web servers. Deze servers draaien NGINX die een reverse proxy maakt van al het verkeer tot freeCodeCamp.org van verschillende applicaties die op eigen infrastructuren draaien.

De NGINX configuratie is beschikbaar op [deze repositorie](https://github.com/freeCodeCamp/nginx-config).

## Eerste installatie

Voorbereiden van VM's met de Code

### 1. (Optioneel) Installeer NGINX en configureer vanaf repository.

De basis setup moet klaar zijn voor OOTB, via de cloud-init configuratie. SSH en brengen wijzigingen aan waar nodig voor de specifieke instanties.

Als je de cloud-init configuratie niet hebt gebruikt, gebruik dan eerder de onderstaande voor handmatige setup van NGINX en foutpagina's:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Installeer Cloudflare oorsprongcertificaten en upstream applicatieconfiguratie.

Ontvang de Cloudflare oorsprongcertificaten vanuit de beveiligde opslag en installeer op vereiste locaties.

**of**

Verplaatsen over bestaande certificaten:

```console
# Lokale
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Upstream configuraties bijwerken:

```console
vi configs/upstreams.conf
```

Toevoegen/bijwerken van het IP adres van de bron/oorsprong.

### 3. Networking en firewalls instellen.

Configureer Azure firewalls en `ufw` indien nodig voor ingress origin adressen.

### 4. Voeg de VM toe aan de load balancer backend pool.

Configureer en voeg regels toe om de balancer te laden indien nodig. Mogelijk moet je ook de VM's toevoegen om de saldo backend pool te laden indien nodig.

## Logboekregistratie en controle

1. Controleer de status van NGINX service met behulp van het onderstaande commando:

```console
sudo systemctl status nginx
```

2. Logging en monitoring voor de servers zijn beschikbaar op:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Instanties (onderhouden) bijwerken

Configuratiewijzigingen in onze NGINX-instanties worden onderhouden op GitHub, deze moeten worden geïmplementeerd op elke instantie zoals zij:

1. SSH in de instantie en voer sudo in

```console
sudo su
```

2. De nieuwste configuratiecode ophalen.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Test en herlaad de configuratie [met Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Werk aan API Instances

1. Installeer build-tools voor node binaries (`node-gyp`) etc.

```console
sudo apt installeren build-essentieel
```

## Eerste installatie

Voorbereiden van VM's met de Code

1. Installeer Node LTS.

2. Update `npm` en installeer PM2 en installeer logrotate en start bij het opstarten

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Dupliceer freeCodeCamp, setup env en sleutels.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # of een andere branch die moet worden geïmplementeerd
   ```

4. Maak de `.env` vanuit de beveiligde inlogopslag.

5. Maak de `google-credentials.json` aan vanuit de beveiligde opslag van gegevens.

6. dependencies installeren

   ```console
   npm ci
   ```

7. Bouw de server

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Start instanties

   ```console
   cd api-server
   pm2 start productie-start.js -i max --max-memory-herstart 600M --name org
   ```

## Logboekregistratie en controle

```console
pm2 logs
```

```console
pm2 monit
```

## Instanties (onderhouden) bijwerken

Codewijzigingen moeten van tijd tot tijd worden geïmplementeerd in de API-instanties. Het kan een rollende update zijn of een handmatige update. Het later is essentieel bij het veranderen van afhankelijkheden of het toevoegen van enviroment variabelen.

> [!DANGER] De geautomatiseerde pipelines behandelen afhankelijkheidsupdates niet op het minuut. We moeten een handmatige update uitvoeren voordat er een implementatie pipeline wordt uitgevoerd.

### 1. Handmatige updates - Gebruikt voor het bijwerken van afhankelijkheden, env variabelen.

1. Stop alle instanties

```console
pm2 stop alles
```

2. dependencies installeren

```console
npm ci
```

3. Bouw de server

```console
npm run ensure-env && npm run build:server
```

4. Start instanties

```console
pm2 start alle --update-env && pm2 logs
```

### 2. Rollende updates - Gebruikt voor logische wijzigingen in de code.

```console
pm2 herladen alles --update-env && pm2 logs
```

> [!NOT] We zijn rolupdates voor code, logica, via pipelines aan het behandelen. Je zou deze commando's niet moeten uitvoeren. Deze zijn hier voor de documentatie.

# Werk op Client Instances

1. Installeer build-tools voor node binaries (`node-gyp`) etc.

```console
sudo apt installeren build-essentieel
```

## Eerste installatie

Voorbereiden van VM's met de Code

1. Installeer Node LTS.

2. Update `npm` en installeer PM2 en installeer logrotate en start bij het opstarten

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Kloon client config, env en sleutels instellen.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Start placeholder instances for the web client, this will be updated with artefacten from the Azure pipline.

   > Todo: Deze instelling moet worden verplaatst naar S3 of Azure Blob opslag 
   > 
   > ```console
   echo "server-c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 verwijder klant primaire
   pm2 start . client-start-primary.sh --name client-primary
   echo "server-c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 verwijder client-secundaire
   pm2 start ./client-start-secondary.sh --name client-secundaire
```

## Logboekregistratie en controle

```console
pm2 logs
```

```console
pm2 monit
```

## Instanties (onderhouden) bijwerken

Codewijzigingen moeten van tijd tot tijd worden geïmplementeerd in de API-instanties. Het kan een rollende update zijn of een handmatige update. Het later is essentieel bij het veranderen van afhankelijkheden of het toevoegen van enviroment variabelen.

> [!DANGER] De geautomatiseerde pipelines behandelen afhankelijkheidsupdates niet op het minuut. We moeten een handmatige update uitvoeren voordat er een implementatie pipeline wordt uitgevoerd.

### 1. Handmatige updates - Gebruikt voor het bijwerken van afhankelijkheden, env variabelen.

1. Stop alle instanties

   ```console
   pm2 stop alles
   ```

2. Installeer of update afhankelijkheden

3. Start instanties

   ```console
   pm2 start alle --update-env && pm2 logs
   ```

### 2. Rollende updates - Gebruikt voor logische wijzigingen in de code.

```console
pm2 herladen alles --update-env && pm2 logs
```

> [!NOT] We zijn rolupdates voor code, logica, via pipelines aan het behandelen. Je zou deze commando's niet moeten uitvoeren. Deze zijn hier voor de documentatie.
