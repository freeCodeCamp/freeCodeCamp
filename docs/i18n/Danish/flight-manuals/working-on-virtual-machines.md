# Flyvemanual til arbejde på virtuelle maskiner

Som medlem af personalet eller dev-teamet du kan have fået adgang til vores cloud serviceudbydere som Azure, Digital Ocean, etc.

Her er nogle praktiske kommandoer, som du kan bruge til at arbejde på de virtuelle maskiner (VM), for eksempel udfører vedligeholdelsesopdateringer eller laver generel houeskeeping.

# Få en liste over VM'er

> [!BEMÆRK] Mens du måske allerede har SSH adgang til VM'erne, det alene vil ikke lade dig liste VM'er, medmindre du er blevet tildelt adgang til cloud-portaler samt.

## Azure

Installer Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Installer på macOS med [`hjemmebryg`](https://brew.sh):**

```
brygget installation azure-cli
```

> **(engang) Login:**

```
az login
```

> **Hent listen over VM navne og P adresser:**

```
az vm list-ip-adresser --output tabel
```

## Digitalt Ocean

Installer Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Installer på macOS med [`hjemmebryg`](https://brew.sh):**

```
bryg installation doctl
```

> **(engang) Login:**

Autentificering og kontekstskift: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Hent listen over VM-navne og IP-adresser:**

```
doctl beregner droplet list -- format "ID, Name,PublicIPv4"
```

# Spin et VM (eller VM Skalalesæt)

> Todo: Tilføj instruktioner til spinning VM(s)


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

# Hold VMs opdateret

Du bør holde VMs opdateret ved at udføre opdateringer og opgraderinger. Dette vil sikre, at den virtuelle maskine er lappet med nyeste sikkerhedsrettelser.

> [!ADVARSEL] Før du kører disse kommandoer:
> 
> - Sørg for, at VM er blevet leveret fuldstændigt, og der er ingen efter installationstrin kører.
> - Hvis du opdaterer pakker på en VM, der allerede betjener et program, sørg for at appen er blevet stoppet / gemt. Pakkeopdateringer vil forårsage netværksbåndbredde, hukommelse og/eller CPU-forbrugspigge, der fører til udfald af kørende applikationer.

Opdater pakkeinformation

```console
sudo apt opdatering
```

Opgrader installerede pakker

```console
sudo apt upgrade - y
```

Oprydning af ubrugte pakker

```console
sudo apt autoremove - y
```

# Arbejde på webservere (Proxy)

Vi kører belastning balanceret (Azure Load Balancer) instanser for vores web servere. Disse servere kører NGINX, som omdanner proxy hele trafikken til freeCodeCamp.org fra forskellige programmer, der kører på deres egne infrastrukturer.

NGINX config er tilgængelig på [dette repository](https://github.com/freeCodeCamp/nginx-config).

## Første Installer

Levering af VM med kodeksen

### 1. (Valgfrit) Installer NGINX og konfigurér fra lageret.

Den grundlæggende opsætning bør være klar OOTB, via cloud-init konfiguration. SSH og foretager de nødvendige ændringer i den eller de pågældende tilfælde.

Hvis du ikke bruger cloud-init config tidligere bruge nedenstående til manuel opsætning af NGINX og fejlsider:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Installer Cloudflare oprindelsescertifikater og opstrøms applikation konfiguration.

Få Cloudflare oprindelsescertifikater fra den sikre opbevaring og installere på krævede steder.

**ELLER**

Flyt over eksisterende certifikater:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Opdater Upstream Konfigurationer:

```console
vi configs/upstreams.conf
```

Tilføj/opdater kilde/oprindelses applikationens IP-adresser.

### 3. Opsætning af netværk og firewalls.

Konfigurer Azure firewalls og `ufw` efter behov for indtrængen oprindelsesadresser.

### 4. Tilføje VM til load balancer backend pool.

Konfigurer og tilføj regler for at indlæse balancer hvis nødvendigt. Du kan også være nødt til at tilføje VMs for at indlæse balancer backend puljen, hvis det er nødvendigt.

## Logning og overvågning

1. Tjek status for NGINX-tjenesten ved hjælp af kommandoen nedenfor:

```console
sudo systemctl status nginx
```

2. Logning og overvågning af serverne er tilgængelig på:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Opdatering Af Instanser (Maintenance)

Konfigurer ændringer i vores NGINX forekomster vedligeholdes på GitHub, disse bør implementeres på hver instans som så:

1. SSH ind i instansen og indtast sudo

```console
sudo su
```

2. Få den seneste konfigurationskode.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Test og genindlæs konfigurationen [med signaler](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Arbejd på API-tilfælde

1. Installér byggeværktøjer til binære noder (`node-gyp`) osv.

```console
sudo apt install build-essential
```

## Første Installer

Levering af VM med kodeksen

1. Installer Node LTS.

2. Opdater `npm` og installer PM2 og opsæt logrotate og opstart ved opstart

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klon freeCodeCamp, opsætning env og nøgler.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # eller enhver anden gren der skal implementeres
   ```

4. Opret `.env` fra opbevaringen af sikre legitimationsoplysninger.

5. Opret `google-credentials.json` fra opbevaringen af sikre legitimationsoplysninger.

6. Installér afhængigheder

   ```console
   npm ci
   ```

7. Byg serveren

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Start Instanser

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-genstart 600M --name org
   ```

## Logning og overvågning

```console
pm2 logfiler
```

```console
pm2 monit
```

## Opdatering Af Instanser (Maintenance)

Kodeændringer skal implementeres til API-instanser fra tid til anden. Det kan være en rullende opdatering eller en manuel opdatering. Det senere er vigtigt, når du ændrer afhængigheder eller tilføjer miljøvariabler.

> [!DANGER] De automatiserede rørledninger håndterer ikke afhængigheder opdateringer på minut. Vi er nødt til at foretage en manuel opdatering, før nogen udrulningsrørledninger kører.

### 1. Manuelle opdateringer - Bruges til opdatering af afhængigheder, env variabler.

1. Stop alle forekomster

```console
pm2 stop alle
```

2. Installér afhængigheder

```console
npm ci
```

3. Byg serveren

```console
npm run ensure-env && npm run build:server
```

4. Start Instanser

```console
pm2 start alle --update-env && pm2 logs
```

### 2. Rullende opdateringer - Bruges til logiske ændringer af kode.

```console
pm2 genindlæs alle --update-env && pm2 logs
```

> [!BEMÆRK] Vi håndterer rullende opdateringer til kode, logik, via rørledninger. Du behøver ikke at køre disse kommandoer. Disse er her for dokumentation.

# Arbejde på klient Instanser

1. Installér byggeværktøjer til binære noder (`node-gyp`) osv.

```console
sudo apt install build-essential
```

## Første Installer

Levering af VM med kodeksen

1. Installer Node LTS.

2. Opdater `npm` og installer PM2 og opsæt logrotate og opstart ved opstart

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 start
   ```

3. Klon klient config, setup env og nøgler.

   ```console
   git klon https://github.com/freeCodeCamp/client-config.git klient
   cd klient
   ```

   ```console
   git klon https://github.com/freeCodeCamp/client-config.git klient
   cd klient
   ```

   Start pladsholder instanser for webklienten, disse vil blive opdateret med artefakter fra Azure pipline.

   > Todo: Denne opsætning skal flyttes til S3 eller Azure Blob lagerplads 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 delete client-primary
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 delete client-secondary
   pm2 start ./client-start-secondary.sh --name client-secondary
```

## Logning og overvågning

```console
pm2 logfiler
```

```console
pm2 monit
```

## Opdatering Af Instanser (Maintenance)

Kodeændringer skal implementeres til API-instanser fra tid til anden. Det kan være en rullende opdatering eller en manuel opdatering. Det senere er vigtigt, når du ændrer afhængigheder eller tilføjer miljøvariabler.

> [!DANGER] De automatiserede rørledninger håndterer ikke afhængigheder opdateringer på minut. Vi er nødt til at foretage en manuel opdatering, før nogen udrulningsrørledninger kører.

### 1. Manuelle opdateringer - Bruges til opdatering af afhængigheder, env variabler.

1. Stop alle forekomster

   ```console
   pm2 stop alle
   ```

2. Installer eller opdater afhængigheder

3. Start Instanser

   ```console
   pm2 start alle --update-env && pm2 logs
   ```

### 2. Rullende opdateringer - Bruges til logiske ændringer af kode.

```console
pm2 genindlæs alle --update-env && pm2 logs
```

> [!BEMÆRK] Vi håndterer rullende opdateringer til kode, logik, via rørledninger. Du behøver ikke at køre disse kommandoer. Disse er her for dokumentation.
