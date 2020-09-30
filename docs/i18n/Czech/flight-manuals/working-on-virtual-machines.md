# Letová příručka pro práci na virtuálních strojích

jako zaměstnanec nebo dev-team, vám byl umožněn přístup k našim poskytovatelům cloudových služeb, jako je Azure, Digital Ocean, atd.

Zde jsou nějaké přímočaré příkazy, které můžete použít k práci na virtuálních strojích (VM), například provádění aktualizací údržby nebo obecné houeskeeping.

# Získejte seznam VM

> [!POZNÁMKA] Zatímco již máte přístup k VM SSH, to samo o sobě vám neumožní seznam VM, pokud vám nebude umožněn přístup k cloudovým portálům.

## Azure

Nainstalujte Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Nainstalujte na macOS pomocí [`homebrew`](https://brew.sh):**

```
pivovar instalace azure-cli
```

> **(Nečasové) přihlášení:**

```
az login
```

> **Získejte seznam VM jmen a adres P:**

```
az vm list-ip-address --output tabulka
```

## Digitální oceán

Nainstalujte si CLI Digital Ocean `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Nainstalujte na macOS pomocí [`homebrew`](https://brew.sh):**

```
pivovar instalace doctl
```

> **(Nečasové) přihlášení:**

Přepínání ověřování a kontextů: https://github.com/digitalocean/doctl#auticating-with-digitalocean

```
Doktor autentizuje
```

> **Získejte seznam VM jmen a IP adres:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# Přerušit VM (nebo sadu měřítka VM)

> Dnes: Přidat instrukce pro spřádání VM


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

# Ponechat aktualizované VM

Měli byste VM průběžně aktualizovat prováděním aktualizací a aktualizací. Tím se zajistí, že virtuální počítač bude zaplněn nejnovějšími opravami zabezpečení.

> [!WARNING] Před spuštěním těchto příkazů:
> 
> - Ujistěte se, že VM bylo poskytnuto zcela a neexistují žádné kroky po instalaci.
> - Pokud aktualizujete balíčky na VM, který již obsluhuje aplikaci, ujistěte se, že aplikace byla zastavena / uložena. Aktualizace balíčků způsobí síťovou šířku, paměť a/nebo spiknutí CPU vedoucí k výpadkům běžících aplikací.

Aktualizovat informace o balíčku

```console
sudo apt update
```

Aktualizace nainstalovaných balíčků

```console
sudo apt upgrade -y
```

Vyčistit nepoužité balíčky

```console
sudo apt autoremove -y
```

# Práce na webových serverech (Proxy)

Zatížení je vyvážené (Azure Load Balancer) pro naše webové servery. Tyto servery používají NGINX, které reverzují proxy veškerý provoz do FreeCodeCamp.org z různých aplikací provozovaných na jejich vlastní infrastrukturě.

Konfigurace NGINX je k dispozici na [tomto repozitáři](https://github.com/freeCodeCamp/nginx-config).

## První instalace

Poskytování VM s kodexem

### 1. (Volitelné) Nainstalujte NGINX a nakonfigurujte z repositáře.

Základní nastavení by mělo být připraveno OOTB, a to prostřednictvím konfigurace cloud-init. SSH a provádějí změny podle potřeby pro konkrétní případ(y).

Pokud jste nepoužili konfiguraci cloud-init dříve použijte níže uvedené pro ruční nastavení NGINX a chybové stránky:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Nainstalujte certifikáty původu Cloudflare a předstreamovou aplikaci.

Získejte certifikáty původu Cloudflare z zabezpečeného úložiště a nainstalujte na požadovaných místech.

**NEBO**

Přesunout přes existující certifikáty:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Aktualizovat nastavení předřazení:

```console
vi configs/upstreams.conf
```

Přidat/aktualizovat IP adresy zdrojového kódu/původu.

### 3. Nastavit síť a firewall.

Nakonfigurujte firewalls Azure a `ufw` podle potřeby pro vstupní adresy.

### 4. Přidejte VM do backendového bazálu vyrovnávače zatížení.

Nakonfigurujte a přidejte pravidla pro načtení zůstatku v případě potřeby. Možná budete muset také přidat VM, abyste v případě potřeby načetli balancer backend pole.

## Logování a sledování

1. Zkontrolovat stav služby NGINX pomocí níže uvedeného příkazu:

```console
sudo systemctl status nginx
```

2. Logování a monitorování serverů je k dispozici na:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Aktualizace instancí (Maintenance)

Změny konfigurace v našich instancích NGINX jsou udržovány na GitHubu, měly by být nasazeny v každé instanci, jako také:

1. SSH do instance a zadejte sudo

```console
sudo su
```

2. Získejte nejnovější konfigurační kód.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Vyzkoušejte a obnovte konfiguraci [se signály](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Práce na API instancích

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt instalovat build-essential
```

## První instalace

Poskytování VM s kodexem

1. Instalovat uzel LTS.

2. Aktualizujte `npm` a nainstalujte PM2 a nastavte logrotate a spustte při startu

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klonovat freeCodeCamp, nastavit env a klíče.

   ```console
   git klonovat https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # nebo jakoukoli jinou pobočku, která má být nasazena
   ```

4. Vytvořte `.env` z bezpečného úložiště.

5. Vytvořte `google-credentials.json` z bezpečného úložiště přihlašovacích údajů.

6. Instalovat závislosti

   ```console
   npm ci
   ```

7. Sestavit server

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Počáteční instance

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Logování a sledování

```console
pm2 logů
```

```console
pm2 monit
```

## Aktualizace instancí (Maintenance)

Změny kódu je třeba čas od času použít do instancí API. Může to být klouzavá aktualizace nebo manuální aktualizace. Později je nezbytné při změně závislostí nebo přidávání proměnných závěti.

> [!DANGER] Automatizované produktovody nezpracovávají aktualizace závislostí během minuty. Před spuštěním každého zaváděcího potrubí musíme provést manuální aktualizaci.

### 1. Manuální aktualizace - Používá se pro aktualizaci závislostí, env proměnných.

1. Zastavit všechny instance

```console
pm2 zastaví vše
```

2. Instalovat závislosti

```console
npm ci
```

3. Sestavit server

```console
npm run ensure-env && npm run build:server
```

4. Počáteční instance

```console
pm2 spustí všechny --update-env && pm2 logy
```

### 2. Rolling aktualizace - Používá se pro logické změny kódu.

```console
pm2 znovu načte všechny --update-env && pm2 logy
```

> [!POZNÁMKA] Zpracováváme klouzavé aktualizace kódu, logiky přes pipelines. Neměli byste spouštět tyto příkazy. Jsou zde pro dokumentaci.

# Práce na klientských instancích

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt instalovat build-essential
```

## První instalace

Poskytování VM s kodexem

1. Instalovat uzel LTS.

2. Aktualizujte `npm` a nainstalujte PM2 a nastavte logrotate a spustte při startu

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 instalace pm2-logrotate
   pm2
   ```

3. Klonovat klient nakonfigurovat, nastavit env a klíče.

   ```console
   git klonuje https://github.com/freeCodeCamp/client-config.git klienta
   cd klienta
   ```

   ```console
   git klonuje https://github.com/freeCodeCamp/client-config.git klienta
   cd klienta
   ```

   Spusťte zástupné instance pro webového klienta, budou aktualizovány s artefakty z Azure pipline.

   > Todo: Toto nastavení se musí přesunout do úložiště S3 nebo Azure Blob 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 odstranit klienta primární
   pm2 start . klient-start-primary.sh --name client-primary
   opakuje "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 smaže klient-sekundární
   pm2 start ./client-start-secondary.sh --name client-secondary
```

## Logování a sledování

```console
pm2 logů
```

```console
pm2 monit
```

## Aktualizace instancí (Maintenance)

Změny kódu je třeba čas od času použít do instancí API. Může to být klouzavá aktualizace nebo manuální aktualizace. Později je nezbytné při změně závislostí nebo přidávání proměnných závěti.

> [!DANGER] Automatizované produktovody nezpracovávají aktualizace závislostí během minuty. Před spuštěním každého zaváděcího potrubí musíme provést manuální aktualizaci.

### 1. Manuální aktualizace - Používá se pro aktualizaci závislostí, env proměnných.

1. Zastavit všechny instance

   ```console
   pm2 zastaví vše
   ```

2. Instalovat nebo aktualizovat závislosti

3. Počáteční instance

   ```console
   pm2 spustí všechny --update-env && pm2 logy
   ```

### 2. Rolling aktualizace - Používá se pro logické změny kódu.

```console
pm2 znovu načte všechny --update-env && pm2 logy
```

> [!POZNÁMKA] Zpracováváme klouzavé aktualizace kódu, logiky přes pipelines. Neměli byste spouštět tyto příkazy. Jsou zde pro dokumentaci.
