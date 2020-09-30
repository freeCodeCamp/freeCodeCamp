# Flight Manual para trabalhar em Máquinas Virtuais

Como membro da equipe ou da equipe dev, você pode ter acesso a nossos provedores de serviços em nuvem , como Azure, Digital Ocean, etc.

Aqui estão alguns comandos úteis que você pode usar para trabalhar na Máquina Virtual (VM), por exemplo, executando atualizações de manutenção ou realizando a manutenção de casa em geral.

# Obter uma lista das VMs

> [!NOTE] Enquanto você já pode ter acesso SSH às VMs, só isso não permitirá que você liste VMs a menos que você tenha acesso aos portais de nuvem também.

## Azure

Instalar o Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Um) Instale no macOS com [`homebrew`](https://brew.sh):**

```
Instalação de brew azure-cli
```

> **(uma vez) Login:**

```
az login
```

> **Obter a lista de nomes de VM e endereços P:**

```
az vm list-ip-addresses --output table
```

## Digital Ocean

Instalar Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Um) Instale no macOS com [`homebrew`](https://brew.sh):**

```
Instalar brew doctl
```

> **(uma vez) Login:**

Autenticação e troca de contexto: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
init doctl auth
```

> **Obter a lista de nomes de VM e endereços IP:**

```
Lista de droplet doctl computada --formato "ID,Nome,PublicIPv4"
```

# Gire uma VM (ou VM Escala Configurada)

> Todo: Adicionar instruções para girar a VM(s)


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

# Manter as VMs atualizadas

Você deve manter as VMs atualizadas realizando atualizações e atualizações. Isto irá garantir que a máquina virtual seja corrigida com correções de segurança mais recentes.

> [!AVISO] Antes de executar estes comandos:
> 
> - Certifique-se de que a VM foi provisionada completamente e não há etapas de pós-instalação em execução.
> - Se você estiver atualizando pacotes em uma VM que já está servindo uma aplicação, verifique se o aplicativo foi parado / salvo. Atualizações de pacotes causarão largura de banda de rede, espinhos de uso de memória e/ou CPU levando a falhas em aplicações em execução.

Atualizar informações do pacote

```console
sudo atualização apt
```

Atualizar pacotes instalados

```console
sudo upgrade apt -y
```

Limpar pacotes não utilizados

```console
sudo autoremoção apt -y
```

# Trabalhar em servidores web (Proxy)

Estamos executando instâncias equilibradas (Azure Load Balancer) para nossos servidores na web. web. Esses servidores estão executando NGINX que reverte o proxy todo o tráfego para freeCodeCamp.org de várias aplicações em execução em suas próprias infraestruturas.

A configuração do NGINX está disponível neste [repositório](https://github.com/freeCodeCamp/nginx-config).

## Primeira instalação

Provisionando VMs com o Código

### 1. (Opcional) Instale NGINX e configure a partir do repositório.

A configuração básica deve estar pronta para o OOTB, através da configuração da cloud-init. SSH e fazem alterações conforme necessário para a(s) instância(s).

Se você não usou a configuração da cloud-init anteriormente use o abaixo para configuração manual de NGINX e páginas de erro:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Instalar certificados de origem Cloudflare e configuração de aplicativos a montante.

Obter os certificados de origem do Cloudflare do armazenamento seguro e instalar em locais necessários.

**ou**

Mover sobre os certificados existentes:

```console
#
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Configurações de Atualização Upstream:

```console
Configurações do vi
```

Adicionar/atualizar o aplicativo de origem/origem endereços IP.

### 3. Configure redes e firewalls.

Configure Azure firewalls e `ufw` conforme necessário para endereços de origem da socorro.

### 4. Adiciona a VM ao banco de backend do balanceador de carga.

Configurar e adicionar regras para carregar o balanceador, se necessário. Você também pode precisar adicionar as VMs para carregar o pool de backend do balanceador, se necessário.

## Registro e Monitoramento

1. Verifique o status para serviço NGINX usando o comando abaixo:

```console
sudo systemctl status nginx
```

2. Registro e monitoramento para os servidores estão disponíveis em:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Atualizando instâncias (Maintenance)

As alterações na configuração das nossas instâncias NGINX são mantidas no GitHub, elas devem ser implantadas em cada instância assim:

1. SSH na instância e digite sudo

```console
sudo su
```

2. Obter o código de configuração mais recente.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Teste e recarregue a configuração [com Sinais](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Trabalhar em instâncias de API

1. Instalar ferramentas de compilação para binários do nó (`node-gyp`), etc.

```console
sudo apt install build-essencial
```

## Primeira instalação

Provisionando VMs com o Código

1. Instalar Node LTS.

2. Atualize o `npm` e instale o PM2 e configure logrotate e inicie na inicialização

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clonar freeCodeCamp, configuração env e chaves.

   ```console
   clone git https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git check-current # ou qualquer outro branch a ser implantado
   ```

4. Crie o `.env` a partir do armazenamento seguro de credenciais.

5. Crie o `google-credentials.json` a partir do armazenamento seguro de credenciais.

6. Instalar dependências

   ```console
   npm ci
   ```

7. Construa o servidor

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Instâncias Inicial

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Registro e Monitoramento

```console
logs pm2
```

```console
pm2 monit
```

## Atualizando instâncias (Maintenance)

As alterações de código precisam ser implementadas para as instâncias de API de vez em quando. Pode ser uma atualização rolante ou uma atualização manual. A data posterior é essencial para alterar as dependências ou adicionar variáveis de inveja.

> [!DANGER] Os pipelines automatizados não estão manipulando dependências atualizadas no minuto. Precisamos fazer uma atualização manual antes que qualquer pipeline de deploy seja executado.

### 1. Atualizações manuais - Usado para atualizar dependências, variáveis env.

1. Parar todas as instâncias

```console
pm2 parar tudo
```

2. Instalar dependências

```console
npm ci
```

3. Construa o servidor

```console
npm run ensure-env && npm run build:server
```

4. Instâncias Inicial

```console
pm2 inicia todos --update-env && pm2 logs
```

### 2. Atualizações de rolagem - Usado para mudanças lógicas no código.

```console
o pm2 recarrega todos --update-env && pm2 logs
```

> [!NOTE] Estamos lidando com atualizações rolantes para código, lógica, via pipelines. Você não precisa executar esses comandos. São eles para documentação.

# Trabalhar em instâncias de cliente

1. Instalar ferramentas de compilação para binários do nó (`node-gyp`), etc.

```console
sudo apt install build-essencial
```

## Primeira instalação

Provisionando VMs com o Código

1. Instalar Node LTS.

2. Atualize o `npm` e instale o PM2 e configure logrotate e inicie na inicialização

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clonar configuração de cliente, env e chaves.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git cliente
   cliente cd
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git cliente
   cliente cd
   ```

   Inicie instâncias de espaço reservado para o cliente web, estes serão atualizados com artefatos da linha do Azure.

   > Todo: Esta configuração precisa mover para o armazenamento S3 ou Azure Blob 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 5050505" >> client-start-primary.sh
   chmod +x clienteent-start-primary. h
   pm2 delete cliente-primário
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> cliente-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 exclui cliente-secundário
   pm2 start ./client-start-secondary.sh --name client-secondary
```

## Registro e Monitoramento

```console
logs pm2
```

```console
pm2 monit
```

## Atualizando instâncias (Maintenance)

As alterações de código precisam ser implementadas para as instâncias de API de vez em quando. Pode ser uma atualização rolante ou uma atualização manual. A data posterior é essencial para alterar as dependências ou adicionar variáveis de inveja.

> [!DANGER] Os pipelines automatizados não estão manipulando dependências atualizadas no minuto. Precisamos fazer uma atualização manual antes que qualquer pipeline de deploy seja executado.

### 1. Atualizações manuais - Usado para atualizar dependências, variáveis env.

1. Parar todas as instâncias

   ```console
   pm2 parar tudo
   ```

2. Instalar ou atualizar dependências

3. Instâncias Inicial

   ```console
   pm2 inicia todos --update-env && pm2 logs
   ```

### 2. Atualizações de rolagem - Usado para mudanças lógicas no código.

```console
o pm2 recarrega todos --update-env && pm2 logs
```

> [!NOTE] Estamos lidando com atualizações rolantes para código, lógica, via pipelines. Você não precisa executar esses comandos. São eles para documentação.
