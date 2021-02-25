# Manual de DevOps

Esta guía te ayudará a comprender nuestra infraestructura y cómo le damos mantenimiento a nuestras plataformas. Si bien esta guía no contiene detalles exhaustivos de todas las operaciones, ésta podría utilizarse como referencia para tu comprensión de los sistemas.

Déjanos saber, si tienes algún comentario o consulta, y la aclararemos con mucho gusto.

# Manual de Vuelo - Despliegues de código

Este repositorio se construye, prueba y despliega continuamente para ** separar conjuntos de infraestructura (Servidores, Bases de Datos, CDNs, etc.)**.

Esto involucra tres pasos que deben seguirse en secuencia:

1. New changes (both fixes and features) are merged into our primary development branch (`main`) via pull requests.
2. Estos cambios son ejecutados a través de una serie de pruebas automatizadas.
3. Una vez que las pruebas se completan de forma satisfactoria, publicamos los cambios (o los actualizamos si es necesario) para desplegarlos en nuestra infraestructura.

#### Construyendo la base de código - Mapeando las Ramas de Git con los Despliegues.

Typically, [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (the default development branch) is merged into the [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) branch once a day and is released into an isolated infrastructure.

Esta es una publicación intermedia para nuestros desarrolladores y colaboradores voluntarios. También es conocida como nuestra publicación "staging" o "beta".

Este es idéntico a nuestro entorno de producción en ` freeCodeCamp.org`, excepto que utiliza un conjunto separado de bases de datos, servidores, web-proxies, etc. Este aislamiento nos permite probar el desarrollo y las funcionalidades de manera continua en un escenario similar al de "producción", sin afectar a los usuarios regulares de las principales plataformas de freeCodeCamp.org.

Once the developer team [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) is happy with the changes on the staging platform, these changes are moved every few days to the [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current) branch.

Esta es la versión final que despliega los cambios a nuestras plataformas de producción en freeCodeCamp.org.

#### Pruebas de cambios - Pruebas de Integración y Aceptación del Usuario.

Empleamos varios niveles de pruebas de integración y aceptación para verificar la calidad del código. All our tests are done through software like [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) and [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Contamos con pruebas unitarias para probar nuestras soluciones a los desafíos, las API del Servidor y las interfaces de Usuario. Estas nos ayudan a probar la integración entre diferentes componentes.

> [!NOTE] También estamos en el proceso de redactar pruebas de usuario final que nos ayudarán a replicar escenarios del mundo real, como actualizar un correo electrónico o hacer una llamada al API o servicios de terceros.

Juntas, estas pruebas ayudan a evitar que los problemas se repitan y garantizan que no introduzcamos un error mientras trabajamos en otro error o en una funcionalidad.

#### Desplegando los Cambios: Enviando los cambios a los servidores.

Hemos configurado un software de entrega continua para publicar los cambios en nuestros servidores de desarrollo y producción.

Una vez que los cambios se envían a las ramas de publicación protegidas, se activa automáticamente un flujo de compilación para la rama. Los flujos de compilación son responsables de construir artefactos y mantenerlos en un almacenamiento en frío para su uso posterior.

El flujo de compilación dispara el flujo de publicación correspondiente si este completa una ejecución exitosa. Los flujos de publicación son responsables de recopilar los artefactos de compilación, moverlos a los servidores y ponerlos en funcionamiento.

Los estados de las compilaciones y publicaciones están [disponibles aquí](#build-test-and-deployment-status).

## Ejecutar una compilación, prueba y despliegue

Actualmente, solo los miembros del equipo de desarrolladores pueden enviar cambios a las ramas de producción. Los cambios en las ramas de `production-*` sólo pueden llegar a través de una fusión fast-forward al [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] En los próximos días mejoraríamos este flujo a través de la implementación de pull-requests, para una mejor administración de acceso y transparencia.

### Publicando cambios a las Aplicaciones en Staging.

1. Configura tus repositorios remotos correctamente.

   ```sh
   git remote -v
   ```

   **Resultado:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Make sure your `maim` branch is pristine and in sync with the upstream.

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. Check that the GitHub CI is passing on the `main` branch for upstream.

   The [continuous integration](https://github.com/freeCodeCamp/freeCodeCamp/actions) tests should be green and PASSING for the `main` branch. Click the green check mark next to the commit hash when viewing the `main` branch code.

    <details> <summary> Checking status on GitHub Actions (screenshot) </summary>
      <br>
      ![Check build status on GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   Si esto está fallando debes detenerte e investigar los errores.

4. Confirme que puede crear el repositorio localmente.

   ```
   npm run clean-and-develop
   ```

5. Move changes from `main` to `prod-staging` via a fast-forward merge

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] No podrás forzar un push y si has reescrito el historial de alguna manera, estos comandos arrojarán errores.
   > 
   > Si esto ocurre, es posible que hayas hecho algo incorrectamente y deberías comenzar de nuevo.

The above steps will automatically trigger a run on the build pipeline for the `prod-staging` branch. Una vez que se completa la compilación, los artefactos se guardan como archivos `.zip` en un almacenamiento en frío para ser recuperados y usados más adelante.

El flujo de publicación se activa automáticamente cuando hay un nuevo artefacto disponible en el flujo de compilación conectado. Para las plataformas de staging, este proceso no implica aprobación manual y los artefactos se envían a los servidores de API y CDN Cliente.

### Publicando cambios a las Aplicaciones en Producción.

El proceso es prácticamente el mismo que el de las plataformas de staging, con algunas comprobaciones adicionales. Esto es solo para asegurarnos de que no rompemos nada en freeCodeCamp.org, el cual puede tener a cientos de usuarios usándolo en cualquier momento.

| NO ejecutes estos comandos a menos que hayas verificado que todo funciona en la plataforma de staging. No debes omitir ni evitar ninguna prueba en staging antes de continuar. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                |


1. Make sure your `prod-staging` branch is pristine and in sync with the upstream.

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. Move changes from `prod-staging` to `prod-current` via a fast-forward merge

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] No podrás forzar un push y si has reescrito el historial de alguna manera, estos comandos arrojarán errores.
   > 
   > Si esto ocurre, es posible que hayas hecho algo incorrectamente y deberías comenzar de nuevo.

The above steps will automatically trigger a run on the build pipeline for the `prod-current` branch. Una vez que un artefacto de compilación está listo, este activará la ejecución en el flujo de publicación.

**Pasos Adicionales para el Staff Action**

Una vez que se activa una ejecución de publicación, los miembros del equipo de desarrollado principal recibirán un correo electrónico automatizado de intervención manual. Pueden _aprobar_ o _rechazar_ la publicación.

Si los cambios funcionan y se han probado en la plataforma de staging, entonces se pueden aprobar. La aprobación debe darse dentro de las 4 horas posteriores a la activación de la publicación antes de sea rechazada automáticamente. Un miembro del personal puede volver a iniciar la ejecución de la publicación de manera manual para publicaciones que fueron rechazados o esperar el siguiente ciclo de publicación.

Para uso del personal:

| Revisa tu correo electrónico para ver si hay un enlace directo o [ve al panel de publicaciones](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) después de que la ejecución de la compilación haya terminado. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                             |


Once one of the staff members approves a release, the pipeline will push the changes live to freeCodeCamp.org's production CDN and API servers.

## Estado de la Compilación, Pruebas y Despliegue

Aquí está el estado actual de las pruebas, compilación y despliegue del código base.

| Branch                                                                           | Unit Tests                                                                                                                                                                                                                       | Integration Tests                                                                                                                                                                                                        | Builds & Deployments                                                                                                              |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimental, upcoming)                                             | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                        | -                                                                                                                                 |

## Acceso anticipado y pruebas beta

Te invitamos a probar estas versiones en un modo **"prueba beta pública"** y obtener acceso anticipado a las próximas funciones de las plataformas. A veces, estas funcionalidades/cambios se denominan **next, beta, staging,** etc. indistintamente.

Tus contribuciones a través de comentarios y reporte de errores nos ayudarán a hacer que las plataformas de producción en `freeCodeCamp.org` sean más **resistentes**, **consistentes** y **estables** para todos.

Te agradecemos por reportar los errores que encuentres y ayudar a mejorar freeCodeCamp.org. ¡Eres genial!

### Identificando la próxima version de las plataformas

Actualmente una versión de prueba beta pública está disponible en:

| Application | Language | URL                                      |
|:----------- |:-------- |:---------------------------------------- |
| Learn       | English  | <https://www.freecodecamp.dev>           |
|             | Espanol  | <https://www.freecodecamp.dev/espanol>   |
|             | Chinese  | <https://chinese.freecodecamp.dev>       |
| News        | English  | <https://www.freecodecamp.dev/news>      |
| Forum       | English  | <https://forum.freecodecamp.dev>         |
|             | Chinese  | <https://chinese.freecodecamp.dev/forum> |
| API         | -        | `https://api.freecodecamp.dev`           |

> [!NOTE] The domain name is different than **`freeCodeCamp.org`**. This is intentional to prevent search engine indexing and avoid confusion for regular users of the platform.
> 
> The above list not exhaustive of all the applications that we provision. Also not all language variants are deployed in staging to conserve resources.

### Identificando la versión actual de las plataformas

**La versión actual de la plataforma siempre está disponible en [`freeCodeCamp.org`](https://www.freecodecamp.org).**

The dev-team merges changes from the `prod-staging` branch to `prod-current` when they release changes. El commit más reciente debe ser lo que ves en vivo en el sitio.

Puedes identificar la versión exacta desplegada visitando los registros de compilación y despliegue disponibles en la sección de estado. Alternatively you can also ping us in the [contributors chat room](https://chat.freecodecamp.org/channel/contributors) for a confirmation.

### Limitaciones Conocidas

Existen algunas limitaciones y problemas conocidos al utilizar la versión beta de la plataforma.

- #### Todos los datos / progreso personal en estas plataformas beta `NO se guardarán ni se transferirán` a producción.

  **Los usuarios de la versión beta tendrán una cuenta separada a la de producción.** La versión beta usa una base de datos físicamente separada de la de producción. Esto nos da la capacidad de prevenir cualquier pérdida accidental de datos o modificaciones. El equipo de desarrollo puede purgar la base de datos en esta versión beta según sea necesario.

- #### No hay garantías sobre el tiempo de disponibilidad y confiabilidad de las plataformas beta.

  Se espera que el despliegue sea frecuente y en iteraciones rápidas, a veces varias veces al día. Como resultado, en ocasiones habrá cierto tiempo de inactividad inesperado o alguna funcionalidad con problemas en la versión beta.

- #### No envíes a los usuarios habituales a este sitio como una medida para confirmar una solución

  El sitio beta es y siempre ha sido para aumentar el desarrollo y las pruebas locales, nada más. No es una promesa de lo que se avecina, sino un vistazo de lo que se está trabajando.

- #### Sign in page may look different than production

  Usamos un entorno de pruebas para freecodecamp.dev en Auth0 y, por lo tanto, no tenemos la capacidad de configurar un dominio personalizado. Esto hace que todas las redirecciones de peticiones y la página de inicio de sesión aparezcan en un dominio predeterminado como: `https://freecodecamp-dev.auth0.com/`. Esto no afecta la funcionalidad y es lo más cercano a producción que podemos tener.

## Reportando problemas y dejando retroalimentación

Please open fresh issues for discussions and reporting bugs.

Puedes enviar un correo electrónico a `dev[at]freecodecamp.org` si tienes alguna consulta. Como siempre, todas las vulnerabilidades de seguridad deben notificarse a `security[at]freecodecamp.org` en lugar del registro público o el foro.

# Flight Manual - Server Maintenance

> [!WARNING]
> 
> 1. The guide applies to the **freeCodeCamp Staff members only**.
> 2. These instructions should not be considered exhaustive, please use caution.

Como miembro del equipo interno, es posible que se te haya dado acceso a nuestros proveedores de servicios en la nube como Azure, Digital Ocean, etc.

Estos son algunos comandos prácticos que puedes usar para trabajar en las Máquinas Virtuales (VM), por ejemplo, realizar actualizaciones de mantenimiento o realizar un mantenimiento general.

## Obtener una lista de las Máquinas Virtuales

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you been granted access to the cloud portals as well.

### Azure

Instala el CLI de Azure `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(One-time) Login:**

```
az login
```

> **Get the list of VM names and P addresses:**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Instalar el CLI de Digital Ocean `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Una sola vez) Instalar en macOS con [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Una sola vez) Inicio de sesión:**

Autenticación y cambio de contexto: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Iniciar una VM (o Conjunto de Escalado de VMs)

> Todo: Add instructions for spinning VM(s)


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

## Mantener las VMs actualizadas

Debes mantener las máquinas virtuales actualizadas mediante la realización de actualizaciones. Esto asegurará que la máquina virtual se ha parcheado con las correcciones de seguridad más recientes.

> [!WARNING] Before you run these commands:
> 
> - Make sure that the VM has been provisioned completely and there is no post-install steps running.
> - If you are updating packages on a VM that is already serving an application, make sure the app has been stopped / saved. Package updates will cause network bandwidth, memory and/or CPU usage spikes leading to outages on running applications.

Actualizar la información de paquetes

```console
sudo apt update
```

Actualizar los paquetes instalados

```console
sudo apt upgrade -y
```

Limpieza de paquetes no utilizados

```console
sudo apt autoremove -y
```

## Trabajar en Servidores Web (Proxy)

Estamos ejecutando instancias de balanceo de cargas (Azure Load Balancer) para nuestros servidores web. Estos servidores ejecutan NGINX como proxy inverso, enrutando hacia freeCodeCamp.org el tráfico de varias aplicaciones que se ejecutan en sus propias infraestructuras.

La configuración de NGINX está disponible en [este repositorio](https://github.com/freeCodeCamp/nginx-config).

### Primera Instalación

Aprovisionamiento de máquinas virtuales con el código

#### 1. (Opcional) Instale NGINX y configúrelo desde el repositorio.

La configuración básica debe estar lista OOTB, mediante la configuración cloud-init. SSH y hacer los cambios según sea necesario para la(s) instancia(s) concreta(s).

Si anteriormente no utilizaste la configuración cloud-init, utiliza lo siguiente para obtener manualmente la configuración de NGINX y páginas de error:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

#### 2. Instale los certificados de origen de Cloudflare y la configuración de la aplicación upstream.

Obtén los certificados de origen de almacenamiento seguro de Cloudflare e instálalos en los lugares requeridos.

**O**

Reemplazar los certificados existentes:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Actualizar las Configuraciones de Upstream:

```console
vi configs/upstreams.conf
```

Agregar/actualizar las direcciones IP source/origin de la aplicación.

#### 3. Configurar redes y firewalls.

Configure los firewalls de Azure y `ufw` según sea necesario para las direcciones de origen de entrada.

#### 4. Agregar la VM al grupo de backend del balanceador de cargas.

Configura y agrega reglas al balanceador de carga si es necesario. Es posible que también debas agregar las VMs al grupo de backend del balanceador de carga si es necesario.

### Registro de Eventos y Monitoreo

1. Comprueba el estado del servicio NGINX utilizando el siguiente comando:

```console
sudo systemctl status nginx
```

2. El registro de eventos y el monitoreo de los servidores están disponibles en:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
### Actualización de las Instancias (Mantenimiento)

Los cambios en la configuración de nuestras instancias NGINX son mantenidos en GitHub, y se deben implementar en cada instancia de la siguiente manera:

1. SSH en la instancia y entra en modo sudo

```console
sudo su
```

2. Obtén el código de configuración más reciente.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. Prueba y recarga la configuración [con Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

## Trabajar en Instancias del API

1. Instala las herramientas de compilación para archivos binarios de Node (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### Primera Instalación

Aprovisionamiento de las VMs con el código

1. Instala Node LTS.

2. Actualiza `npm`, instala PM2, configura logrotate e inícialo en el arranque

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona freeCodeCamp, configura las variables de entorno y las llaves.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout prod-current # or any other branch to be deployed
   ```

4. Crea el archivo `.env` desde el almacenamiento de credenciales seguras.

5. Crea el archivo `google-credentials.json` desde el almacenamiento de credenciales seguras.

6. Instala las dependencias

   ```console
   npm ci
   ```

7. Construye el servidor

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Inicia las Instancias

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

### Registro de Eventos y Monitoreo

```console
pm2 logs
```

```console
pm2 monit
```

### Actualización de las Instancias (Mantenimiento)

Los cambios en el código deben desplegarse en las instancias del API cada cierto tiempo. Esto puede ser una actualización continua o una actualización manual. La última es esencial al cambiar dependencias o al agregar variables de entorno.

> [!DANGER] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

#### 1. Actualizaciones Manuales - Utilizadas para actualizar dependencias, variables de entorno.

1. Detén todas las instancias

```console
pm2 stop all
```

2. Instala las dependencias

```console
npm ci
```

3. Construye el servidor

```console
npm run ensure-env && npm run build:server
```

4. Inicia las Instancias

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Actualizaciones Continuas - Utilizadas para cambios lógicos en el código.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.

## Trabajar en Instancias de Cliente

1. Instala las herramientas de compilación para archivos binarios de Node (`node-gyp`), etc.

```console
sudo apt install build-essential
```

### Primera Instalación

Aprovisionamiento de las VMs con el código

1. Instala Node LTS.

2. Actualiza `npm`, instala PM2, configura logrotate e inícialo en el arranque

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona la configuración del cliente, configura las variables de entorno y las claves.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Start placeholder instances for the web client, these will be updated with artifacts from the Azure pipeline.

   > Todo: This setup needs to move to S3 or Azure Blob storage 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary.sh
   pm2 delete client-primary
   pm2 start  ./client-start-primary.sh --name client-primary
   echo "serve -c ../../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary.sh
   pm2 delete client-secondary
   pm2 start  ./client-start-secondary.sh --name client-secondary
```

### Registro de Eventos y Monitoreo

```console
pm2 logs
```

```console
pm2 monit
```

### Actualización de las Instancias (Mantenimiento)

Los cambios de código deben desplegarse en las instancias de API cada cierto tiempo. Esto puede ser una actualización continua o una actualización manual. La última es esencial al cambiar dependencias o al agregar variables de entorno.

> [!DANGER] Los flujos automáticos no están manejando actualizaciones de dependencias en el momento. Necesitamos realizar una actualización manual antes de que se ejecute cualquier flujo de despliegue.

#### 1. Actualizaciones Manuales - Utilizadas para actualizar dependencias, variables de entorno.

1. Detén todas las instancias

   ```console
   pm2 stop all
   ```

2. Instala o actualiza las dependencias

3. Inicia las Instancias

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Actualizaciones Continuas - Utilizadas para cambios lógicos en el código.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Estamos manejando las actualizaciones continuas de código, lógica, mediante flujos (pipelines). No deberías tener que ejecutar estos comandos. Están aquí para documentación.
