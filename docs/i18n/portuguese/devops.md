# DevOps Handbook

This guide will help you understand our infrastructure stack and how we maintain our platforms. While this guide does not have exhaustive details for all operations, it could be used as a reference for your understanding of the systems.

Fale com a gente, se você tiver algum comentário ou dúvidas, e teremos prazer em esclarecê-las.

# Flight Manual - Code deployments

This repository is continuously built, tested and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

This involves three steps to be followed in sequence:

1. New changes (both fixes and features) are merged into our primary development branch (`main`) via pull requests.
2. These changes are run through a series of automated tests.
3. Once the tests pass we release the changes (or update them if needed) to deployments on our infrastructure.

#### Compilando a base de código - mapeando branches do Git para implementações.

Normalmente, é feito um merge de [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (branch padrão de desenvolvimento) na branch [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) uma vez ao dia e liberada em uma infraestrutura isolada.

This is an intermediate release for our developers and volunteer contributors. É também conhecida como a nossa versão de "preparo" (staging) ou "beta".

Ela é idêntica ao nosso ambiente de produção em `freeCodeCamp.org`, tirando o fato de ela usar um conjunto separado de bancos de dados, servidores, web-proxies, etc. Este isolamento nos permite testar o desenvolvimento e as funcionalidades de forma contínua em um cenário semelhante ao de "produção", sem que os usuários regulares da plataforma principal do freeCodeCamp.org sejam afetados.

Uma vez que a equipe de desenvolvedores [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) esteja feliz com as mudanças na plataforma de preparo, essas alterações são movidas a cada poucos dias para a branch [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current).

This is the final release that moves changes to our production platforms on freeCodeCamp.org.

#### Testando alterações - Teste de integração e de aceitação do usuário.

We employ various levels of integration and acceptance testing to check on the quality of the code. All our tests are done through software like [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) and [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Temos testes unitários para nossas soluções de desafio, APIs do servidor e interfaces de usuário e cliente. These help us test the integration between different components.

> [!NOTE] We are also in the process of writing end user tests which will help in replicating real world scenarios like updating an email or making a call to the API or third-party services.

Juntos, esses testes ajudam a evitar que problemas se repitam e garantem que não introduzimos um erro enquanto trabalhamos em outra falha ou recurso.

#### Deploying Changes - Pushing changes to servers.

We have configured continuous delivery software to push changes to our development and production servers.

Uma vez que as alterações são enviadas para as branches de lançamento protegidas, um pipeline de construção é automaticamente acionado para a branch. Os pipelines de compilação são responsáveis pela compilação de artefatos e os guardam em um armazenamento de longo prazo para uso posterior.

O pipeline de compilação aciona um correspondente pipeline de lançamento se ele completar uma execução bem-sucedida. The release pipelines are responsible for collecting the build artifacts, moving them to the servers and going live.

Estado de compilações e lançamentos estão [disponíveis aqui](#build-test-and-deployment-status).

## Acione uma compilação, um teste e uma implantação

Atualmente, somente membros da equipe de desenvolvedores podem dar push nas branches de produção. As alterações nas branches `production-*` podem ser enviadas para [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) apenas por meio de um fast-forward merge.

> [!NOTE] Nos próximos dias, nós vamos melhorar este fluxo a ser feito por meio de pull-requests, para melhor gerenciamento de acesso e transparência.

### Enviando alterações para aplicações em fase de preparo.

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

2. Certifique-se de que a sua branch `main` está intacta e sincronizada com a upstream.

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. Check that the GitHub CI is passing on the `main` branch for upstream.

   The [continuous integration](https://github.com/freeCodeCamp/freeCodeCamp/actions) tests should be green and PASSING for the `main` branch. Clique na marca de verificação verde próximo ao hash do commit quando estiver visualizando o código da branch `main`.

    <details> <summary> Verificando o status no GitHub Actions (captura de tela) </summary>
      <br>
      ![Veja o estado de compilação no GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   Se houver falhas, você deve parar e investigar os erros.

4. Confirme se você consegue compilar o repositório localmente.

   ```
   npm run clean-and-develop
   ```

5. Mova as alterações da `main` para a `production-staging` através de um fast-forward merge

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in anyway these commands will error out.
   > 
   > If they do, you may have done something incorrectly and you should just start over.

As etapas acima vão disparar automaticamente uma execução no pipeline de compilação para a branch `production-staging`. Quando a compilação estiver completa, os artefatos são salvos como arquivos `.zip` em um armazenamento de longo prazo para serem recuperados e usados mais tarde.

O pipeline de lançamento é acionado automaticamente quando um novo artefato estiver disponível a partir do pipeline de compilação conectado. For staging platforms, this process does not involve manual approval and the artifacts are pushed to the Client CDN and API servers.

### Enviando alterações para aplicações de produção.

O processo é quase o mesmo das plataformas de preparo, com algumas verificações extras. This is just to make sure, we do not break anything on freeCodeCamp.org which can see hundreds of users using it at any moment.

| Do NOT execute these commands unless you have verified that everything is working on the staging platform. Você não deve ignorar qualquer teste na fase de preparo antes de prosseguir. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                         |

1. Garanta que sua branch `prod-staging` esteja impecável e sincronizada com a upstream.

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. Mova as alterações da `prod-staging` para a `prod-current` através de um fast-forward merge

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in anyway these commands will error out.
   > 
   > Se falharem, você pode ter feito algo errado e deve começar de novo.

As etapas acima vão disparar automaticamente uma execução no pipeline de compilação para a branch `prod-current`. Assim que um artefato de compilação estiver pronto, ele acionará uma execução no pipeline de lançamento.

**Etapas adicionais para a equipe**

One a release run is triggered, members of the developer staff team will receive an automated manual intervention email. Eles podem _aprovar_ ou _rejeitar_ o release run.

If the changes are working nicely and have been tested on the staging platform, then it can be approved. The approval must be given within 4 hours of the release being triggered before getting rejected automatically. A staff can re-trigger the release run manually for rejected runs, or wait for the next cycle of release.

For staff use:

| Check your email for a direct link or [go to the release dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) after the build run is complete. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                    |

Uma vez que um dos membros da equipe aprovar o lançamento, as mudanças serão feitas nos servidores CDN e API da produção do freeCodeCamp.org.

## Estado de compilação, teste e implantação

Aqui está o estado atual de teste, compilação e implantação do código.

| Branch                                                                           | Teste de unidade                                                                                                                                                                                                                 | Testes de integração                                                                                                                                                                                                      | Compilações & implantações                                                                                                           |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------ |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Testes Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                    |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Testes Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Pipelines da Azure](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Testes Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Pipelines da Azure](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimental, ainda está por vir)                                   | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                         | -                                                                                                                                    |

## Early access and beta testing

Você é bem-vindo para testar estes lançamentos em um modo **de "beta testing público"** e obter acesso antecipado às funcionalidades que estão por vir. Às vezes, esses recursos/mudanças são referidos como **next, beta, staging,** etc. interligadamente.

Suas contribuições por meio de comentários e issues nos ajudarão a fazer as plataformas de produção do `freeCodeCamp. rg` mais **resilientes**, **consistentes** e **estáveis** para todos.

Agradecemos por relatar erros que encontra e ajuda para melhorar o freeCodeCamp.org. Você é demais!

### Identifying the upcoming version of the platforms

Atualmente uma versão pública de testes beta está disponível em:

| Aplicação | Linguagem | URL                                      |
|:--------- |:--------- |:---------------------------------------- |
| Aprenda   | Inglês    | <https://www.freecodecamp.dev>           |
|           | Espanhol  | <https://www.freecodecamp.dev/espanol>   |
|           | Chinês    | <https://chinese.freecodecamp.dev>       |
| Novidades | Inglês    | <https://www.freecodecamp.dev/news>      |
| Fórum     | Inglês    | <https://forum.freecodecamp.dev>         |
|           | Chinês    | <https://chinese.freecodecamp.dev/forum> |
| API       | -         | `https://api.freecodecamp.dev`           |

> [!NOTE] O nome do domínio é diferente de **`freeCodeCamp.org`**. Isso é intencional para evitar que ferramentas de busca indexem e evitar confusões da parte dos usuários regulares da plataforma.
> 
> A lista (não muito longa) abaixo contém todos os aplicativos que fornecemos. Nem todas as variantes das linguagens são implantadas na fase de preparação para conservar recursos.

### Identifying the current version of the platforms

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

O time de desenvolvimento faz o merge nas mudanças da branch `prod-staging` para `prod-current` quando lançam mudanças. O commit principal deve ser o que você vê no site.

Você pode identificar a versão exata implantada visitando os registros de compilação e implantação disponíveis na seção de estado. Alternativamente, você também pode entrar em contato na [sala de bate-papo dos contribuidores](https://chat.freecodecamp.org/channel/contributors).

### Known Limitations

Existem algumas limitações e desvantagens conhecidas ao usar a versão beta da plataforma.

- #### All data / personal progress on these beta platforms `will NOT be saved or carried over` to production.

  **Users on the beta version will have a separate account from the production.** The beta version uses a physically separate database from production. This gives us the ability to prevent any accidental loss of data or modifications. The dev team may purge the database on this beta version as needed.

- #### Não há garantias na disponibilidade e confiabilidade das plataformas beta.

  Deployment is expected to be frequent and in rapid iterations, sometimes multiple times a day. As a result there will be unexpected downtime at times or broken functionality on the beta version.

- #### Não envie usuários regulares para este site como uma medida de confirmar uma correção

  The beta site is and always has been to augment local development and testing, nothing else. It's not a promise of what’s coming, but a glimpse of what is being worked upon.

- #### Sign in page may look different than production

  Nós utilizamos um locatário de teste para o freeCodeCamp.dev no Auth 0 e, portanto, não temos a capacidade de definir um domínio personalizado. This makes it so that all the redirect callbacks and the login page appear at a default domain like: `https://freecodecamp-dev.auth0.com/`. Isso não afeta a funcionalidade e é o mais próximo da produção que conseguimos.

## Relatar problemas e deixar comentário

Abra novas issues para discussões e informações sobre erros.

Você pode enviar um e-mail para `dev[at]freecodecamp.org` se você tiver alguma dúvida. Como sempre, todas as vulnerabilidades de segurança devem ser relatadas à `security[at]freecodecamp.org` em vez do rastreador público e fórum.

# Manual de voo - Mantendo o servidor

> [!WARNING]
> 
> 1. O guia se aplica aos **membros da equipe freeCodeCamp apenas**.
> 2. Não se deve considerar que essas instruções cubram todas as possibilidades. Tenha cuidado.

As a member of the staff, you may have been given access to our cloud service providers like Azure, Digital Ocean, etc.

Aqui estão alguns comandos úteis que você pode usar ao trabalhar com máquinas virtuais (VM), por exemplo, realizando atualizações de manutenção ou limpezas em geral.

## Obtenha a lista de VMs

> [!NOTE] Talvez você já tenha acesso SSH às VMs. Só isso não permitirá que você liste VMs, a menos que você tenha acesso aos portais de nuvem também.

### Azure

Instale o Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Apenas uma vez) Instale no macOS com [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Apenas uma vez) Login:**

```
az login
```

> **Obtenha a lista de nomes de VM e endereços IP:**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Instale Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

Authentication and context switching: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Obtenha a lista de nomes de VM e endereços IP:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Rodar novos recursos

Nós estamos trabalhando na criação da configuração do IaC. Enquanto isso está ocorrendo, você pode usar o portal Azure ou o Azure CLI para criar uma nova VM e outros recursos.

> [!TIP] Não importa sua escolha de como gastar os recursos, nós temos alguns [arquivos de configuração úteis cloud-init](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) para ajudar você a fazer provisionamento básico de como instalar o docker ou adicionar chaves SSH, etc.

## Keep VMs updated

You should keep the VMs up to date by performing updates and upgrades. Isto vai garantir que a máquina virtual está corrigida com correções de segurança mais recentes.

> [!WARNING] Antes de executar estes comandos:
> 
> - Certifique-se que a MV foi completamente fornecida e que não há etapas pós instalação sendo executadas.
> - Se você estiver atualizando pacotes em uma MV que já está servindo uma aplicação, certifique-se que a aplicação está parada/salva. Atualizações de pacotes causarão picos no uso da banda larga, memória e/ou CPU levando à falhas nas aplicações que estão sendo executadas.

Atualize informações do pacote

```console
sudo apt update
```

Atualize pacotes instalados

```console
sudo apt upgrade -y
```

Limpe pacotes não utilizados

```console
sudo apt autoremove -y
```

## Trabalhe em servidores web (Proxy)

Estamos executando instâncias equilibradas (Azure Load Balancer) para nossos servidores na web. Esses servidores estão executando NGINX, que reverte o proxy de todo o tráfego para freeCodeCamp.org a partir de várias aplicações em execução em suas próprias infraestruturas.

The NGINX config is available on [this repository](https://github.com/freeCodeCamp/nginx-config).

### Primeiro instale

Provisioning VMs with the Code

1. Instale o NGINX e configure a partir do repositório.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Instale os certificados de origem Cloudflare e a configuração de aplicativos upstream.

   Obtenha os certificados de origem Cloudflare a partir do armazenamento seguro e instale nos locais requiridos.

   **OU**

   Mova os certificados existentes:

   ```console
   # Localmente
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remotamente
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Atualize as configurações upstream:

   ```console
   vi configs/upstreams.conf
   ```

   Adicione/atualize os endereços IP do aplicativo fonte/origem.

3. Configure a rede e o firewall.

   Configure o firewall da Azure e `ufw` conforme o necessário para entrar os endereços de origem.

4. Adicione a MV ao pool de back-end do balanceador de carga.

   Configure e adicione as regras ao balanceador de carga, se necessário. You may also need to add the VMs to load balancer backend pool if needed.

### Logging and Monitoring

1. Check status for NGINX service using the below command:

   ```console
   sudo systemctl status nginx
   ```

2. Logging and monitoring for the servers are available at:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), our current basic monitoring dashboard. We are working on more granular metrics for better observability

### Updating Instances (Maintenance)

Config changes to our NGINX instances are maintained on GitHub, these should be deployed on each instance like so:

1. SSH into the instance and enter sudo

```console
sudo su
```

2. Get the latest config code.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. Test and reload the config [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

## Work on API Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup `logrotate` and startup on boot

   ```console
   npm i -g npm@6
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout prod-current # or any other branch to be deployed
   ```

4. Create the `.env` from the secure credentials storage.

5. Create the `google-credentials.json` from the secure credentials storage.

6. Install dependencies

   ```console
   npm ci
   ```

7. Build the server

   ```console
   npm run ensure-env && npm run build:curriculum && npm run build:server
   ```

8. Start Instances

   ```console
   cd api-server
   pm2 start ./lib/production-start.js -i max --max-memory-restart 600M --name org
   ```

### Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding environment variables.

> [!ATTENTION] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

```console
pm2 stop all
```

2. Install dependencies

```console
npm ci
```

3. Build the server

```console
npm run ensure-env && npm run build:curriculum && npm run build:server
```

4. Start Instances

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.

## Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup `logrotate` and startup on boot

   ```console
   npm i -g npm@6
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone client config, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Start placeholder instances for the web client, these will be updated with artifacts from the Azure pipeline.

   > Todo: This setup needs to move to S3 or Azure Blob storage 
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

### Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding environment variables.

> [!ATTENTION] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

   ```console
   pm2 stop all
   ```

2. Install or update dependencies

3. Start Instances

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.

## Work on Chat Servers

Our chat servers are available with a HA configuration [recommended in Rocket.Chat docs](https://docs.rocket.chat/installation/docker-containers/high-availability-install). The `docker-compose` file for this is [available here](https://github.com/freeCodeCamp/chat-config).

We provision redundant NGINX instances which are themselves load balanced (Azure Load Balancer) in front of the Rocket.Chat cluster. The NGINX configuration file are [available here](https://github.com/freeCodeCamp/chat-nginx-config).

### First Install

Provisioning VMs with the Code

**NGINX Cluster:**

1. Install NGINX and configure from repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Install Cloudflare origin certificates and upstream application config.

   Get the Cloudflare origin certificates from the secure storage and install at required locations.

   **OR**

   Move over existing certificates:

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Update Upstream Configurations:

   ```console
   vi configs/upstreams.conf
   ```

   Add/update the source/origin application IP addresses.

3. Setup networking and firewalls.

   Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

4. Add the VM to the load balancer backend pool.

   Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

**Docker Cluster:**

1. Install Docker and configure from the repository

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. Configure the required environment variables and instance IP addresses.

3. Run rocket-chat server

   ```console
   docker-compose config
   docker-compose up -d
   ```

### Logging and Monitoring

1. Check status for NGINX service using the below command:

   ```console
   sudo systemctl status nginx
   ```

2. Check status for running docker instances with:

   ```console
   docker ps
   ```

### Updating Instances (Maintenance)

**NGINX Cluster:**

Config changes to our NGINX instances are maintained on GitHub, these should be deployed on each instance like so:

1. SSH into the instance and enter sudo

   ```console
   sudo su
   ```

2. Get the latest config code.

   ```console
   cd /etc/nginx
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Test and reload the config [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

   ```console
   nginx -t
   nginx -s reload
   ```

**Docker Cluster:**

1. SSH into the instance and navigate to the chat config path

   ```console
   cd ~/chat
   ```

2. Get the latest config code.

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Pull down the latest docker image for Rocket.Chat

   ```console
   docker-compose pull
   ```

4. Update the running instances

   ```console
   docker-compose up -d
   ```

5. Validate the instances are up

   ```console
   docker ps
   ```

6. Cleanup extraneous resources

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

   Select yes (y) to remove everything that is not in use. This will remove all stopped containers, all networks and volumes not used by at least one container, and all dangling images and build caches.

## Updating Node.js versions on VMs

List currently installed node & npm versions

```console
nvm -v
node -v
npm -v

nvm ls
```

Install the latest Node.js LTS, and reinstall any global packages

```console
nvm install 'lts/*' --reinstall-packages-from=default
```

Verify installed packages

```console
npm ls -g --depth=0
```

Alias the `default` Node.js version to the current LTS

```console
nvm alias default lts/*
```

(Optional) Uninstall old versions

```console
nvm uninstall <version>
```

> [!WARNING] If using PM2 for processes you would also need to bring up the applications and save the process list for automatic recovery on restarts.

Quick commands for PM2 to list, resurrect saved processes, etc.

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

> [!ATTENTION] For client applications, the shell script can't be resurrected between Node.js versions with `pm2 resurrect`. Deploy processes from scratch instead. This should become nicer when we move to a docker based setup.

## Installing and Updating Azure Pipeline Agents

See: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops and follow the instructions to stop, remove and reinstall agents. Broadly you can follow the steps listed here.

You would need a PAT, that you can grab from here: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installing agents on Deployment targets

Navigate to [Azure Devops](https://dev.azure.com/freeCodeCamp-org) and register the agent from scratch in the requisite [deployment groups](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] You should run the scripts in the home directory, and make sure no other `azagent` directory exists.

### Updating agents

Currently updating agents requires them to be removed and reconfigured. This is required for them to correctly pick up `PATH` values and other system environment variables. We need to do this for instance updating Node.js on our deployment target VMs.

1. Navigate and check status of the service

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. Stop the service

   ```console
   sudo ./svc.sh stop
   ```

3. Uninstall the service

   ```console
   sudo ./svc.sh uninstall
   ```

4. Remove the agent from the pipeline pool

   ```console
   ./config.sh remove
   ```

5. Remove the config files

   ```console
   cd ~
   rm -rf ~/azagent
   ```

Once You have completed the steps above, you can repeat the same steps as installing the agent.

# Flight Manual - Email Blast

We use [a CLI tool](https://github.com/freecodecamp/sendgrid-email-blast) to send out the weekly newsletter. To spin this up and begin the process:

1. Sign in to DigitalOcean, and spin up new droplets under the `Sendgrid` project. Use the Ubuntu Sendgrid snapshot with the most recent date. This comes pre-loaded with the CLI tool and the script to fetch emails from the database. With the current volume, three droplets are sufficient to send the emails in a timely manner.

2. Set up the script to fetch the email list.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   You will need to replace the placeholder values in the `.env` file with your credentials.

3. Run the script.

   ```console
   node get-emails.js emails.csv
   ```

   This will save the email list in an `emails.csv` file.

4. Break the emails down into multiple files, depending on the number of droplets you need. This is easiest to do by using `scp` to pull the email list locally and using your preferred text editor to split them into multiple files. Each file will need the `email,unsubscribeId` header.

5. Switch to the CLI directory with `cd /home/sendgrid-email-blast` and configure the tool [per the documentation](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Run the tool to send the emails, following the [usage documentation](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. When the email blast is complete, verify that no emails have failed before destroying the droplets.
