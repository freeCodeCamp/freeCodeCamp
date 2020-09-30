# Podręcznik lotu do pracy nad maszynami wirtualnymi

Jako członek personelu lub zespół deweloperski, Być może otrzymałeś dostęp do naszych dostawców usług w chmurze, takich jak Azure, Ocean Cyfrowy itp.

Oto kilka poręcznych poleceń, które możesz użyć do pracy na maszynach wirtualnych (VM), na przykład przeprowadzanie aktualizacji utrzymania lub prowadzenie ogólnych prac konserwacyjnych.

# Uzyskaj listę VM

> [!NOTE] Podczas gdy masz już dostęp SSH do VM, sam ten nie pozwoli Ci wyświetlić VM, chyba że otrzymasz również dostęp do portali w chmurze.

## Azure

Zainstaluj Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Zainstaluj na macOS z [`homebrew`](https://brew.sh):**

```
instalacja brajska azure-cli
```

> **Logowanie (One-time):**

```
az login
```

> **Pobierz listę nazw VM i adresów P:**

```
tablica az vm list-ip-addresy-output
```

## Ocean cyfrowy

Zainstaluj Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Zainstaluj na macOS z [`homebrew`](https://brew.sh):**

```
instalacja brajska doctl
```

> **Logowanie (One-time):**

Uwierzytelnianie i przełączanie kontekstów: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
Autoryzacja doctla
```

> **Pobierz listę nazw VM i adresów IP:**

```
lista kropli do obliczeń doctl --format "ID,Nazwa,PublicIPv4"
```

# Zakręć VM (lub zestaw skali VM)

> Zadanie: Dodaj instrukcję obracania VM


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

# Zachowaj aktualizację plików VM

Powinieneś aktualizować samochody VM, dokonując aktualizacji i aktualizując wersje. zapewni, że maszyna wirtualna jest aktualizowana z najnowszymi poprawkami zabezpieczeń.

> [!OSTRZEŻENIE] Zanim uruchomisz następujące polecenia:
> 
> - Upewnij się, że komputer VM został całkowicie zabezpieczony i nie działa czynności po zainstalowaniu.
> - Jeśli aktualizujesz pakiety VM, które już obsługują aplikację, upewnij się, że aplikacja została zatrzymana / zapisana. Aktualizacje pakietów spowodują przepustowość sieciową, pamięć i/lub użycie procesora, co prowadzi do przerw na uruchomionych aplikacjach.

Aktualizuj informacje o pakiecie

```console
aktualizacja sudo apt
```

Aktualizuj zainstalowane pakiety

```console
aktualizacja sudo apt -y
```

Czyszczenie nieużywanych pakietów

```console
sudo apt auto-usuń -y
```

# Praca na serwerach internetowych (Proxy)

Używamy instancji Zrównoważonego Obciążenia (Azure Load Balancer) dla naszych serwerów . Te serwery obsługują NGINX, które odwrócą cały ruch do freeCodeCamp.org z różnych aplikacji działających na własną infrastrukturę.

Konfiguracja NGINX jest dostępna w [tym repozytorium](https://github.com/freeCodeCamp/nginx-config).

## Najpierw zainstaluj

Dostarczanie systemów VM za pomocą Kodeksu

### 1. (Opcjonalnie) Zainstaluj NGINX i skonfiguruj z repozytorium.

Podstawowa konfiguracja powinna być gotowa OOTB za pomocą konfiguracji cloud-init. SSH i wprowadzają zmiany niezbędne dla poszczególnych instancji.

Jeśli nie używałeś konfiguracji cloud-init poprzednio użyj poniższych dla instrukcji konfiguracji NGINX i stron błędów:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Zainstaluj certyfikaty pochodzenia Cloudflare i konfigurację aplikacji upstream.

Pobierz certyfikaty pochodzenia Cloudflare z bezpiecznej pamięci i zainstaluj w wymaganych miejscach.

**LUB**

Przenieś ponad istniejącymi certyfikatami:

```console
# Lokalny
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Zdalny
rm -rf ./ssl
mv /tmp/ssl ./
```

Aktualizuj konfiguracje upstream:

```console
vi configs/upstreams.conf
```

Dodaj/aktualizuj adresy IP źródła/pochodzenia aplikacji.

### 3. Skonfiguruj sieć i zapory.

Skonfiguruj zaporę Azure i `ufw` tak jak jest to wymagane dla adresów początkowych.

### 4. Dodaj VM do puli zaplecza balancera obciążenia.

Skonfiguruj i dodaj reguły, aby załadować balancer w razie potrzeby. W razie potrzeby możesz również dodać VM, aby załadować pulę zaplecza balancera.

## Rejestrowanie i monitorowanie

1. Sprawdź status usługi NGINX przy użyciu poniższej komendy:

```console
sudo systemctl status nginx
```

2. Rejestrowanie i monitorowanie serwerów są dostępne na stronie:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Aktualizowanie instancji (konserwacja)

Zmiany konfiguracji do naszych instancji NGINX są utrzymywane na GitHub, powinny być rozmieszczone na każdej instancji jak tak:

1. SSH w instancji i wprowadź sudo

```console
sudo su
```

2. Pobierz najnowszy kod konfiguracyjny.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Przetestuj i odśwież konfigurację [sygnałami](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Pracuj na instancjach API

1. Zainstaluj narzędzia do budowy plików binarnych węzłów (`node-gyp`) itp.

```console
sudo apt instaluje budowlany niezbędny
```

## Najpierw zainstaluj

Dostarczanie systemów VM za pomocą Kodeksu

1. Zainstaluj Node LTS.

2. Zaktualizuj `npm` i zainstaluj PM2 i skonfiguruj logrotate i uruchom przy starcie

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Klonuj freeCodeCamp, konfiguruj env i klucze.

   ```console
   Klon git https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git kasa production-current # lub jakikolwiek inny oddział do wdrożenia
   ```

4. Utwórz `.env` z bezpiecznego przechowywania danych logowania.

5. Utwórz `google-credentials.json` z bezpiecznego przechowywania danych logowania.

6. Zainstaluj zależności

   ```console
   npm ci
   ```

7. Zbuduj serwer

   ```console
   npm run ensure env && npm run build:server
   ```

8. Rozpocznij instancje

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Rejestrowanie i monitorowanie

```console
logi pm2
```

```console
pm2 monit
```

## Aktualizowanie instancji (konserwacja)

Zmiany kodu muszą być od czasu do czasu wprowadzane do instancji API. może to być aktualizacja krocząca lub ręczna aktualizacja. Późniejsze jest niezbędne podczas zmiany zależności lub dodawania zmiennych wirowych.

> [!DANGER] Zautomatyzowane rurociągi nie obsługują aktualizacji zależności w minucie. Musimy wykonać ręczną aktualizację przed rozpoczęciem jakiegokolwiek procesu wdrażania.

### 1. Ręczne aktualizacje - Używane do aktualizacji zależności, zmienne env.

1. Zatrzymaj wszystkie instancje

```console
pm2 zatrzymanie wszystkich
```

2. Zainstaluj zależności

```console
npm ci
```

3. Zbuduj serwer

```console
npm run ensure env && npm run build:server
```

4. Rozpocznij instancje

```console
pm2 uruchom wszystkie --update-env && logi pm2
```

### 2. Aktualizacje - używane do logicznych zmian kodu.

```console
pm2 przeładuj wszystkie --update-env && logi pm2
```

> [!NOTE] Przeprowadzamy aktualizacje kroczące do kodowania, logiki, poprzez rurociągi. nie musisz uruchamiać tych poleceń. Są one tutaj do dokumentacji.

# Pracuj na instancjach klienta

1. Zainstaluj narzędzia do budowy plików binarnych węzłów (`node-gyp`) itp.

```console
sudo apt instaluje budowlany niezbędny
```

## Najpierw zainstaluj

Dostarczanie systemów VM za pomocą Kodeksu

1. Zainstaluj Node LTS.

2. Zaktualizuj `npm` i zainstaluj PM2 i skonfiguruj logrotate i uruchom przy starcie

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 start
   ```

3. Klonuj konfigurację klienta, konfiguruj env i klucze.

   ```console
   Klon git https://github.com/freeCodeCamp/client-config.git client
   cd
   ```

   ```console
   Klon git https://github.com/freeCodeCamp/client-config.git client
   cd
   ```

   Rozpocznij instancje zastępcze dla klienta sieci web, będą one aktualizowane za pomocą artefaktów z pilotki Azure.

   > Zadanie: Ta konfiguracja musi przenieść się do pamięci S3 lub Azure Blob 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 usuń klienta – pierwotny
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 usuń klient-drugorzędny
   pm2 start ./client-start-drugorzędny.sh --name klient-drugorzędny
```

## Rejestrowanie i monitorowanie

```console
logi pm2
```

```console
pm2 monit
```

## Aktualizowanie instancji (konserwacja)

Zmiany kodu muszą być od czasu do czasu wprowadzane do instancji API. może to być aktualizacja krocząca lub ręczna aktualizacja. Późniejsze jest niezbędne podczas zmiany zależności lub dodawania zmiennych wirowych.

> [!DANGER] Zautomatyzowane rurociągi nie obsługują aktualizacji zależności w minucie. Musimy wykonać ręczną aktualizację przed rozpoczęciem jakiegokolwiek procesu wdrażania.

### 1. Ręczne aktualizacje - Używane do aktualizacji zależności, zmienne env.

1. Zatrzymaj wszystkie instancje

   ```console
   pm2 zatrzymanie wszystkich
   ```

2. Zainstaluj lub zaktualizuj zależności

3. Rozpocznij instancje

   ```console
   pm2 uruchom wszystkie --update-env && logi pm2
   ```

### 2. Aktualizacje - używane do logicznych zmian kodu.

```console
pm2 przeładuj wszystkie --update-env && logi pm2
```

> [!NOTE] Przeprowadzamy aktualizacje kroczące do kodowania, logiki, poprzez rurociągi. nie musisz uruchamiać tych poleceń. Są one tutaj do dokumentacji.
