# Manual do DevOps

Este guia irá ajudá-lo a entender nossas ferramentas de infraestrutura e como mantemos nossas plataformas. Embora este guia não tenha muitos detalhes para todas as operações, ele pode ser usado como referência para a compreensão dos sistemas.

Let us know if you have feedback or queries and we will be happy to clarify.

## Flight Manual - Code Deployments

This repository is continuously built, tested, and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

Isto implica três passos a serem seguidos em sequência:

1. Novas alterações (sejam consertos ou funcionalidades) são mergeadas na nossa branch principal de desenvolvimento (`main`) por meio de pull requests.
2. Estas alterações são executadas por uma série de testes automatizados.
3. Uma vez que os testes passem, liberamos as alterações (ou as atualizamos se necessário) para implementações na nossa infraestrutura.

### Building the codebase - Mapping Git Branches to Deployments

Normalmente, é feito um merge de [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (branch padrão de desenvolvimento) na branch [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) uma vez ao dia e liberada em uma infraestrutura isolada.

Esta é uma versão intermediária para nossos desenvolvedores e colaboradores voluntários. É também conhecida como a nossa versão de "preparo" (staging) ou "beta".

Ela é idêntica ao nosso ambiente de produção em `freeCodeCamp.org`, tirando o fato de ela usar um conjunto separado de bancos de dados, servidores, web-proxies, etc. Este isolamento nos permite testar o desenvolvimento e as funcionalidades de forma contínua em um cenário semelhante ao de "produção", sem que os usuários regulares da plataforma principal do freeCodeCamp.org sejam afetados.

Uma vez que a equipe de desenvolvedores [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) esteja feliz com as mudanças na plataforma de preparo, essas alterações são movidas a cada poucos dias para a branch [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current).

Esta é a versão final que move as mudanças para as nossas plataformas de produção no freeCodeCamp.org.

### Testing changes - Integration and User Acceptance Testing

Empregamos vários níveis de testes de integração e aceitação para verificar a qualidade do código. Todos os nossos testes são feitos através de software como [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) e [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

We have unit tests for testing our challenge solutions, Server APIs, and Client User interfaces. Eles nos ajudam a testar a integração entre diferentes componentes.

> [!NOTE] We are also in the process of writing end user tests which will help in replicating real-world scenarios like updating an email or making a call to the API or third-party services.

Juntos, esses testes ajudam a evitar que problemas se repitam e garantem que não introduzimos um erro enquanto trabalhamos em outra falha ou recurso.

### Deploying Changes - Pushing changes to servers

Nós configuramos software de entrega contínua para fazer push de mudanças no nosso servidor de desenvolvimento e produção.

Uma vez que as alterações são enviadas para as branches de lançamento protegidas, um pipeline de construção é automaticamente acionado para a branch. Os pipelines de compilação são responsáveis pela compilação de artefatos e os guardam em um armazenamento de longo prazo para uso posterior.

O pipeline de compilação aciona um correspondente pipeline de lançamento se ele completar uma execução bem-sucedida. The release pipelines are responsible for collecting the build artifacts, moving them to the servers, and going live.

The statuses of builds and releases are [available here](#build-test-and-deployment-status).

## Trigger a Build, Test, and Deploy

Currently, only members of the developer team can push to the production branches. As alterações nas branches `production-*` podem ser enviadas para [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) apenas por meio de um fast-forward merge.

> [!NOTE] In the upcoming days, we would improve this flow to be done via pull requests, for better access management and transparency.

### Pushing changes to Staging Applications

1. Configure seus remotes corretamente.

   ```sh
   git remote -v
   ```

   **Resultados:**

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

3. Verifique se a IC do GitHub está passando a branch `main` para o upstream.

   Os testes de  [integração contínua](https://github.com/freeCodeCamp/freeCodeCamp/actions) devem estar verdes e PASSANDO para a branch `main`. Clique na marca de verificação verde próximo ao hash do commit quando estiver visualizando o código da branch `main`.

    <details> <summary> Verificando o status no GitHub Actions (captura de tela) </summary>
      <br>
      ![Veja o estado de compilação no GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   Se houver falhas, você deve parar e investigar os erros.

4. Confirme se você consegue compilar o repositório localmente.

   ```
   pnpm run clean-and-develop
   ```

5. Mova as alterações da `main` para a `production-staging` através de um fast-forward merge

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > Se isso acontecer, pode ser que você tenha feito algo errado e você deve simplesmente começar de novo.

As etapas acima vão disparar automaticamente uma execução no pipeline de compilação para a branch `production-staging`. Quando a compilação estiver completa, os artefatos são salvos como arquivos `.zip` em um armazenamento de longo prazo para serem recuperados e usados mais tarde.

O pipeline de lançamento é acionado automaticamente quando um novo artefato estiver disponível a partir do pipeline de compilação conectado. For staging platforms, this process does not involve manual approval, and the artifacts are pushed to the Client CDN and API servers.

### Pushing changes to Production Applications

O processo é quase o mesmo das plataformas de preparo, com algumas verificações extras. Só para garantir, não quebramos nada no freeCodeCamp.org que possa ver centenas de usuários usá-lo a qualquer momento.

| NÃO execute esses comandos a menos que tenha verificado que tudo está funcionando na plataforma de preparo. Você não deve ignorar qualquer teste na fase de preparo antes de prosseguir. |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                          |

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

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > Se falharem, você pode ter feito algo errado e deve começar de novo.

As etapas acima vão disparar automaticamente uma execução no pipeline de compilação para a branch `prod-current`. Assim que um artefato de compilação estiver pronto, ele acionará uma execução no pipeline de lançamento.

**Etapas adicionais para a equipe**

Once a release run is triggered, members of the developer staff team will receive an automated manual intervention email. Eles podem _aprovar_ ou _rejeitar_ o release run.

Se as alterações estão funcionando bem e foram testadas na plataforma de preparo, então podem ser aprovadas. A aprovação deve ser dada no prazo de 4 horas após a liberação ser acionada antes de ser automaticamente rejeitada. Uma equipe pode acionar novamente a execução de lançamento manualmente para execuções rejeitadas ou esperar pelo próximo ciclo de lançamento.

Para uso de funcionários:

| Verifique seu e-mail para obter um link direto ou [vá para o painel de liberação](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) depois que a execução da compilação estiver concluída. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                        |

Uma vez que um dos membros da equipe aprovar o lançamento, as mudanças serão feitas nos servidores CDN e API da produção do freeCodeCamp.org.

## Build, Test and Deployment Status

Aqui está o estado atual de teste, compilação e implantação do código.

| Branch                                                                           | Teste de unidade                                                                                                                                                                                                                 | Testes de integração                                                                                                                                                                                                      | Compilações & implantações                                                                                                           |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------ |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Testes Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                    |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Testes Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Pipelines da Azure](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Testes Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Pipelines da Azure](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimental, ainda está por vir)                                   | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                         | -                                                                                                                                    |

## Early Access and Beta Testing

Você é bem-vindo para testar estes lançamentos em um modo **de "beta testing público"** e obter acesso antecipado às funcionalidades que estão por vir. Às vezes, esses recursos/mudanças são referidos como **next, beta, staging,** etc. interligadamente.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent**, and **stable** for everyone.

Agradecemos por relatar erros que encontra e ajuda para melhorar o freeCodeCamp.org. Você é demais!

### Identifying the Upcoming Version of the Platforms

Currently, a public beta testing version is available at:

| Aplicação | Linguagem | URL                                      |
|:--------- |:--------- |:---------------------------------------- |
| Aprenda   | Inglês    | <https://www.freecodecamp.dev>           |
|           | Espanhol  | <https://www.freecodecamp.dev/espanol>   |
|           | Chinês    | <https://www.freecodecamp.dev/chinese>   |
| Novidades | Inglês    | <https://www.freecodecamp.dev/news>      |
| Fórum     | Inglês    | <https://forum.freecodecamp.dev>         |
|           | Chinês    | <https://freecodecamp.dev/chinese/forum> |
| API       | -         | `https://api.freecodecamp.dev`           |

> [!NOTE] O nome do domínio é diferente de **`freeCodeCamp.org`**. Isso é intencional para evitar que ferramentas de busca indexem e evitar confusões da parte dos usuários regulares da plataforma.
> 
> The above list is not exhaustive of all the applications that we provision. Also, not all language variants are deployed in staging to conserve resources.

### Identifying the Current Version of the Platforms

**A versão atual da plataforma está sempre disponível em [`freeCodeCamp.org`](https://www.freecodecamp.org).**

O time de desenvolvimento faz o merge nas mudanças da branch `prod-staging` para `prod-current` quando lançam mudanças. O commit principal deve ser o que você vê no site.

Você pode identificar a versão exata implantada visitando os registros de compilação e implantação disponíveis na seção de estado. Alternatively, you can also ping us in the [contributors chat room](https://discord.gg/PRyKn3Vbay) for a confirmation.

### Known Limitations

Existem algumas limitações e desvantagens conhecidas ao usar a versão beta da plataforma.

- #### All data / personal progress on these beta platforms will NOT be saved or carried over to production

  **Os usuários na versão beta terão uma conta separada da produção.** A versão beta usa um banco de dados fisicamente separado da produção. Isso nos dá a capacidade de evitar qualquer perda acidental de dados ou modificações. The dev-team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta platforms

  Espera-se que a implantação seja frequente e em iterações rápidas, às vezes várias vezes ao dia. As a result, there will be unexpected downtime at times or broken functionality on the beta version.

- #### Não envie usuários regulares para este site como uma medida de confirmar uma correção

  O site beta é e sempre foi para melhorar o desenvolvimento e os testes locais, nada mais. Não é uma promessa do que está por vir, mas um vislumbre do que está sendo trabalhado.

- #### O login na página pode parecer diferente da produção

  Nós utilizamos um locatário de teste para o freeCodeCamp.dev no Auth 0 e, portanto, não temos a capacidade de definir um domínio personalizado. Isso faz com que todas as callbacks de redirecionamento e a página de login apareçam em um domínio padrão como: `https://freecodecamp-dev.auth0.com/`. Isso não afeta a funcionalidade e é o mais próximo da produção que conseguimos.

## Reporting issues and leaving feedback

Abra novas issues para discussões e informações sobre erros.

Você pode enviar um e-mail para `dev[at]freecodecamp.org` se você tiver alguma dúvida. Como sempre, todas as vulnerabilidades de segurança devem ser relatadas à `security[at]freecodecamp.org` em vez do rastreador público e fórum.

## Flight Manual - Server Maintenance

> [!WARNING]
> 
> 1. O guia se aplica aos **membros da equipe freeCodeCamp apenas**.
> 2. Não se deve considerar que essas instruções cubram todas as possibilidades. Tenha cuidado.

Como membro da equipe, você pode ter acesso aos nossos provedores de serviços em nuvem, como Azure, Digital Ocean, etc.

Aqui estão alguns comandos úteis que você pode usar ao trabalhar com máquinas virtuais (VM), por exemplo, realizando atualizações de manutenção ou limpezas em geral.

## Get a list of the VMs

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you have been granted access to the cloud portals as well.

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

> **(Apenas uma vez) Instale no macOS com [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Apenas uma vez) Login:**

Autenticação e troca de contexto: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Obtenha a lista de nomes de VM e endereços IP:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Spin New Resources

Nós estamos trabalhando na criação da configuração do IaC. Enquanto isso está ocorrendo, você pode usar o portal Azure ou o Azure CLI para criar uma nova VM e outros recursos.

> [!TIP] Não importa sua escolha de como gastar os recursos, nós temos alguns [arquivos de configuração úteis cloud-init](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) para ajudar você a fazer provisionamento básico de como instalar o docker ou adicionar chaves SSH, etc.

## Keep VMs Updated

Você deve manter as VMs atualizadas realizando atualizações e atualizações. This will ensure that the virtual machine is patched with the latest security fixes.

> [!WARNING] Antes de executar estes comandos:
> 
> - Make sure that the VM has been provisioned completely and that there are no post-install steps running.
> - Se você estiver atualizando pacotes em uma MV que já está servindo uma aplicação, certifique-se de que a aplicação está parada/salva. Atualizações de pacotes causarão picos no uso da banda larga, memória e/ou CPU levando à falhas nas aplicações que estão sendo executadas.

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

## Work on Web Servers (Proxy)

Estamos executando instâncias equilibradas (Azure Load Balancer) para nossos servidores na web. Esses servidores estão executando NGINX, que reverte o proxy de todo o tráfego para freeCodeCamp.org a partir de várias aplicações em execução em suas próprias infraestruturas.

A configuração do NGINX está disponível neste [repositório](https://github.com/freeCodeCamp/nginx-config).

### Primeira instalação

Provisionando VMs com o código

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

3. Set up networking and firewalls.

   Configure o firewall da Azure e `ufw` conforme o necessário para entrar os endereços de origem.

4. Adicione a MV ao pool de back-end do balanceador de carga.

   Configure e adicione as regras ao balanceador de carga, se necessário. Você também pode precisar adicionar as MVs ao pool do balanceador de cargas, se necessário.

### Registro e monitoramento

1. Verifique o estado do serviço NGINX usando o comando abaixo:

   ```console
   sudo systemctl status nginx
   ```

2. Registro e monitoramento para os servidores estão disponíveis em:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), nosso painel básico para monitoração atual. Estamos melhorando as observações com mais métricas granulares

### Atualizando instâncias (Manutenção)

Configure as mudanças das instâncias do NGINX que são mantidas no GitHub, estas devem ser implantadas em cada instância assim:

1. SSH na instância e digite sudo

```console
sudo su
```

2. Obtenha o código de configuração mais recente.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. Teste e recarregue a configuração [com Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

## Work on API Instances

1. Instale ferramentas de compilação para binários node (`node-gyp`), etc.

```console
sudo apt install build-essential
```

### Primeira instalação

Provisionando MVs com o código

1. Instale o Node LTS.

2. Instale o pnpm globalmente.

```console
npm install -g pnpm
```

3. Clone freeCodeCamp, set up env, and keys.

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
cd freeCodeCamp
git checkout prod-current # ou qualquer outra branch a ser implementada
```

4. Crie o `.env` a partir do armazenamento seguro de credenciais.

5. Instale as dependências

```console
pnpm install
```

6. Configure o pm2 `logrotate` e inicialize no boot

```console
pnpm pm2 install pm2-logrotate
pnpm pm2 startup
```

7. Compile o servidor

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

8.  Inicie as instâncias

```console
pnpm start:server
```

### Registro e Monitoramento

```console
pnpm pm2 logs
```

```console
pnpm pm2 monit
```

### Atualizando instâncias (Manutenção)

Mudanças no código devem ser implementadas na instância da API de tempos em tempos. Pode ser uma atualização contínua ou manual. The latter is essential when changing dependencies or adding environment variables.

> [!ATTENTION] Os pipelines automatizados não estão manipulando atualizações de dependências no momento. É necessário fazer uma atualização manual antes que qualquer desenvolvimento nas pipelines seja executado.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Pare todas as instâncias

```console
pnpm pm2 stop all
```

2. Instale as dependências

```console
pnpm install
```

3. Compile o servidor

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

4. Inicie as instâncias

```console
pnpm start:server && pnpm pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pnpm reload:server && pnpm pm2 logs
```

> [!NOTE] We are handling rolling updates to code and logic via pipelines. Você não deve executar estes comandos. Eles estão aqui para a documentação.

#### 3. Updating Node

1. Instale a nova versão do Node

2. Atualize o pm2 para que ele use a nova versão

```console
pnpm pm2 update
```

## Work on Client Instances

1. Instale ferramentas de compilação para os binários do node (`node-gyp` e outros).

```console
sudo apt install build-essential
```

### Primeira instalação

Provisionando MVs com o código

1. Instale o Node LTS.

2. Atualize o `npm` e instale o PM2 e configure `logrotate` e inicie quando reiniciar

   ```console
   npm i -g npm@8
   npm i -g pm2@4
   npm install -g serve@13
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Faça a clonagem do client, configure env e as chaves.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Inicie instâncias placeholder para o cliente web, elas serão atualizadas com artefatos do Azure pipeline.

   > A fazer: Esta configuração precisa ser movida para S3 ou armazenamento Azure Blob 
   > 
   > ```console
   >    echo "serve -c ../serve.json -p 50505 www" > client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../serve.json -p 52525 www" > client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### Registro e monitoramento

```console
pm2 logs
```

```console
pm2 monit
```

### Atualizando instâncias (Manutenção)

As alterações no código precisam ser implementadas para as instâncias de API de vez em quando. Pode ser uma atualização contínua ou manual. A data posterior é essencial quando estão sendo realizadas mudanças ou adições variáveis de ambiente.

> [!ATTENTION] Os pipelines automatizados não estão manipulando atualizações de dependências no momento. É necessário fazer uma atualização manual antes que qualquer deploy nas pipelines seja executado.

#### 1. Atualizações manuais - Usado para atualizar dependências, variáveis de ambiente.

1. Pare todas as instâncias

   ```console
   pm2 stop all
   ```

2. Instale ou atualize as dependências

3. Inicie as instâncias

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Atualizações contínuas - Usado par mudanças lógicas no código.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Nós estamos lidando com atualizações contínuas no código, lógico, via pipelines. Você não deve ter a necessidade de executar esses comandos. Eles estão aqui para documentação.

## Work on Chat Servers

Nossos servidores de chat estão disponíveis com uma configuração HA [recomendada na documentação Rocket.Chat](https://docs.rocket.chat/installation/docker-containers/high-availability-install). O arquivo `docker-compose` para isso está [disponível aqui](https://github.com/freeCodeCamp/chat-config).

Fornecemos instâncias NGINX redundantes com balanceamento de carga (Azure Load Balancer) na frente do cluster Rocket.Chat. O arquivo de configuração NGINX está [disponível aqui](https://github.com/freeCodeCamp/chat-nginx-config).

### First Install

Provisionando MVs com código

**Cluster do NGINX:**

1. Instale o NGINX e configure a partir do repositório.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Instale os certificados de origem Cloudflare e a configuração de aplicativos upstream.

   Obtenha os certificados de origem Cloudflare a partir do armazenamento seguro e instale nos locais requiridos.

   **OU**

   Mova os certificados existentes:

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Atualize as configurações upstream:

   ```console
   vi configs/upstreams.conf
   ```

   Adicione/atualize os endereços IP do aplicativo fonte/origem.

3. Set up networking and firewalls.

   Configure os firewalls da Azure e `ufw` conforme necessário para entrar os endereços de origem.

4. Adicione a MV ao pool de back-end do balanceador de carga.

   Configure e adicione as regras ao balanceador de carga, se necessário. Você também pode precisar adicionar as MVs ao pool do balanceador de cargas, se necessário.

**Cluster do Docker:**

1. Instale o Docker e configure a partir do repositório

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. Configure as variáveis de ambiente necessárias e as instâncias dos endereços de IP.

3. Execute o servidor do rocket-chat

   ```console
   docker-compose config
   docker-compose up -d
   ```

### Logging and Monitoring

1. Verifique o estado do serviço NGINX usando o comando abaixo:

   ```console
   sudo systemctl status nginx
   ```

2. Verifique o estado das instâncias do Docker que estão sendo executadas com:

   ```console
   docker ps
   ```

### Updating Instances (Maintenance)

**Cluster do NGINX:**

As alterações na configuração das nossas instâncias NGINX são mantidas no GitHub, elas devem ser implantadas em cada instância assim:

1. Use o SSH na instância e digite sudo

   ```console
   sudo su
   ```

2. Obtenha o código de configuração mais recente.

   ```console
   cd /etc/nginx
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Teste e recarregue a configuração [com Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

   ```console
   nginx -t
   nginx -s reload
   ```

**Cluster do Docker:**

1. Use SSH na instância e vá para onde está o arquivo de configuração do chat

   ```console
   cd ~/chat
   ```

2. Obtenha o código de configuração mais recente.

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Obtenha a imagem docker mais recente do Rocket.Chat

   ```console
   docker-compose pull
   ```

4. Atualize as instâncias que estão executando

   ```console
   docker-compose up -d
   ```

5. Veja se as instâncias estão executando

   ```console
   docker ps
   ```

6. Limpe recursos estranhos

   ```console
   docker system prune --volumes
   ```

   Resultado:

   ```console
   WARNING! This will remove:
     - all stopped containers
     - all networks not used by at least one container
     - all volumes not used by at least one container
     - all dangling images
     - all dangling build cache

   Are you sure you want to continue? [y/N] y
   ```

   Selecione yes (y) para remover tudo que não está sendo usado. Isso vai remover todos os contêineres parados, todas as redes e volumes não usados por pelo menos um contêiner e imagens pendentes e caches de compilação.

## Work on Contributor Tools

### Deploy Updates

ssh na VM (hospedada na Digital Ocean).

```console
cd tools
git pull origin master
pnpm install
pnpm run build
pm2 restart contribute-app
```

## Updating Node.js Versions on VMs

Liste as versões do node e do npm instaladas

```console
nvm -v
node -v
npm -v

nvm ls
```

Instale a versão LTS Node.js mais recente e reinstale qualquer pacote global

```console
nvm install --lts --reinstall-packages-from=default
```

Verifique os pacotes instalados

```console
npm ls -g --depth=0
```

Alias the `default` Node.js version to the current LTS (pinned to the latest major version)

```console
nvm alias default 16
```

(Opcional) Desinstale versões antigas

```console
nvm uninstall <versão>
```

> [!ATTENTION] Para aplicações de client, o shell script não pode ser revivido entre versões do Node.js com `pm2 resurrect`. Implante processos de zero ao invés disso. This should become nicer when we move to a docker-based setup.
> 
> Se estiver usando PM2 para os processos você também vai precisar executar as aplicações e salvar a lista de processos para restaurações automáticas quando reiniciar.

Obtenha as instruções/comandos de desinstalação com o comando `unstartup` e use a saída para remover os serviços systemctl

```console
pm2 unstartup
```

Obtenha as instruções/comandos de instalação com o comando `startup` e use a saída para adicionar os serviços systemctl

```console
pm2 startup
```

Comandos rápidos PM2 para listar, reviver processos salvos, etc.

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

## Installing and Updating Azure Pipeline Agents

See: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops and follow the instructions to stop, remove, and reinstall agents. Em resumo, você pode seguir as etapas listadas aqui.

Você vai precisar de um PAT, que você pode pegar nesse link: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installing Agents on Deployment targets

Vá para [Azure Devops](https://dev.azure.com/freeCodeCamp-org) e registre o agente do zero nos [grupos de implantação](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup) necessários.

> [!NOTE] Você deve executar os scripts no diretório raiz e certificar-se de que nenhum outro diretório `azagent` existe.

### Updating Agents

Atualmente, atualizar os agentes requer que sejam removidos e reconfigurados. Isso é necessário para que eles tenham os valores do `PATH` e de outras variáveis de ambiente corretos. Precisamos fazer isso, por exemplo, para atualizar Node.js em nossas MVs de implantação.

1. Vá e verifique o estado do serviço

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. Pare o serviço

   ```console
   sudo ./svc.sh stop
   ```

3. Desinstale o serviço

   ```console
   sudo ./svc.sh uninstall
   ```

4. Remova o agente do pool do pipeline

   ```console
   ./config.sh remove
   ```

5. Remova os arquivos de configuração

   ```console
   cd ~
   rm -rf ~/azagent
   ```

Quando você completar as etapas acima, você pode repetir as mesmas etapas na instalação do agente.

## Flight Manual - Email Blast

Nós usamos [uma ferramenta de linha de comando](https://github.com/freecodecamp/sendgrid-email-blast) para enviar a newsletter semanal. Para começar o processo:

1. Se inscreva na DigitalOcean, e inicie o use de novas droplets sob o projeto `Sendgrid`. Use uma snapshot da Sendgrid no Ubuntu com a data mais recente. Isso vem pré-instalado com a ferramenta da linha de comando para pegar e-mails da base de dados. Com o volume atual, três droplets são suficientes para enviar emails de forma oportuna.

2. Configure o script para pegar a lista de email.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   Você vai precisar substituir os valores padrão dentro do arquivo `.env` com suas credenciais.

3. Rode o script.

   ```console
   node get-emails.js emails.csv
   ```

   Isso vai salvar a lista de email em um arquivo `emails.csv`.

4. Divida os e-mails em vários arquivos, dependendo do número de droplets que você precisa. Isso fica mais fácil usando `scp` para baixar a lista de e-mails localmente e usar seu editor de texto favorito para dividi-los em múltiplos arquivos. Cada arquivo precisará do cabeçalho `email,unsubscribeId`.

5. Mude para o diretório CLI com `cd /home/sendgrid-email-blast` e configure a ferramenta [conforme a documentação](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Execute a ferramenta para enviar os e-mails, seguindo a [documentação](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. Quando o disparo de email estiver completo, verifique se nenhum e-mail falhou antes de destruir os droplets.

## Flight Manual - Adding news instances for new languages

### Theme Changes

Usamos um [tema personalizado](https://github.com/freeCodeCamp/news-theme) para nossa publicação de notícias. Adicionar as seguintes alterações ao tema permite a inserção de novos idiomas.

1. Inclua a instrução `else if` para o novo [código de idioma ISO](https://www.loc.gov/standards/iso639-2/php/code_list.php) em [`setup-local.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Crie uma pasta inicial de configuração duplicando a pasta [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) e alterando seu nome para o novo código de idioma. (`en` —> `es` para espanhol)
3. Dentro da pasta do novo idioma, altere os nomes das variáveis no `main.js` e no `footer.js` para o código curto de idioma relevante (`enMain` —> `esMain` para o espanhol)
4. Duplique o [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) e renomeie-o para o código do novo idioma.
5. Em [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs), adicione scripts para arquivos de configuração recém-criados.
6. Adicione o script `day.js` do idioma relacionado [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) ao [CDN do freeCodeCamp](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Ghost Dashboard Changes

Atualize os itens de publicação indo no painel do Ghost > Settings > General e atualizando o [ícone](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), [logotipo](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png) e a [capa](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png).
