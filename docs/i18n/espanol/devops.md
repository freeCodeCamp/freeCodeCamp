# Manual de DevOps

Esta guía te ayudará a comprender nuestra infraestructura y cómo le damos mantenimiento a nuestras plataformas. Si bien esta guía no contiene detalles exhaustivos de todas las operaciones, esta podría utilizarse como referencia para tu comprensión de los sistemas.

Let us know if you have feedback or queries and we will be happy to clarify.

## Flight Manual - Code Deployments

This repository is continuously built, tested, and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

Esto involucra tres pasos que deben seguirse en secuencia:

1. Los nuevos cambios (tanto correcciones como funcionalidades) se integran en nuestra rama principal de desarrollo (`main`) a través de pull requests.
2. Estos cambios son ejecutados a través de una serie de pruebas automatizadas.
3. Una vez que las pruebas se completan de forma satisfactoria, publicamos los cambios (o los actualizamos si es necesario) para desplegarlos en nuestra infraestructura.

### Building the codebase - Mapping Git Branches to Deployments

Normalmente, [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (la rama de desarrollo por defecto) se integra diariamente en la rama [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) y se publica en una infraestructura aislada.

Esta es una publicación intermedia para nuestros desarrolladores y colaboradores voluntarios. También es conocida como nuestra publicación "staging" o "beta".

Este es idéntico a nuestro entorno de producción en `freeCodeCamp.org`, excepto que utiliza un conjunto separado de bases de datos, servidores, web-proxies, etc. Este aislamiento nos permite probar el desarrollo y las funcionalidades de manera continua en un escenario similar al de "producción", sin afectar a los usuarios regulares de las principales plataformas de freeCodeCamp.org.

Una vez que el equipo de desarrolladores [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) está satisfecho con los cambios en la plataforma de "staging", estos cambios se trasladan cada ciertos días a la rama [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current).

Esta es la versión final que despliega los cambios a nuestras plataformas de producción en freeCodeCamp.org.

### Testing changes - Integration and User Acceptance Testing

Empleamos varios niveles de pruebas de integración y aceptación para verificar la calidad del código. Todas nuestras pruebas se realizan a través de software como [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) y [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

We have unit tests for testing our challenge solutions, Server APIs, and Client User interfaces. Estas nos ayudan a probar la integración entre diferentes componentes.

> [!NOTE] We are also in the process of writing end user tests which will help in replicating real-world scenarios like updating an email or making a call to the API or third-party services.

Juntas, estas pruebas ayudan a evitar que los problemas se repitan y garantizan que no introduzcamos un error mientras trabajamos en otro error o en una funcionalidad.

### Deploying Changes - Pushing changes to servers

Hemos configurado un software de entrega continua para publicar los cambios en nuestros servidores de desarrollo y producción.

Una vez que los cambios se envían a las ramas de publicación protegidas, se activa automáticamente un flujo de compilación para la rama. Los flujos de compilación son responsables de construir artefactos y mantenerlos en un almacenamiento en frío para su uso posterior.

El flujo de compilación dispara el flujo de publicación correspondiente si este completa una ejecución exitosa. The release pipelines are responsible for collecting the build artifacts, moving them to the servers, and going live.

The statuses of builds and releases are [available here](#build-test-and-deployment-status).

## Trigger a Build, Test, and Deploy

Currently, only members of the developer team can push to the production branches. Los cambios en las ramas de `production-*` sólo pueden llegar a través de una fusión fast-forward al [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] In the upcoming days, we would improve this flow to be done via pull requests, for better access management and transparency.

### Pushing changes to Staging Applications

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

2. Asegúrate de que tu rama `main` sea impecable y esté sincronizada con la corriente ascendente.

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. Comprueba que el GitHub CI este aprobado en la rama `main` para el flujo upstream.

   Las pruebas de [integración continua](https://github.com/freeCodeCamp/freeCodeCamp/actions) deben estar en verde y en estado PASSING para la rama  `main`. Haz clic en la marca de verificación verde junto al hash del commit si estás viendo el código de la rama `main`.

    <details> <summary> Comprobando el estado en GitHub actions (captura de pantalla) </summary>
      <br>
      ![Revisa el estado de compilación en GitHub actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   Si esto está fallando debes detenerte e investigar los errores.

4. Confirme que puede crear el repositorio localmente.

   ```
   pnpm run clean-and-develop
   ```

5. Mueve los cambios desde `main` a `prod-staging` mediante una fusión fast-forward

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > Si esto ocurre, es posible que hayas hecho algo incorrectamente y deberías comenzar de nuevo.

Los pasos anteriores activarán automáticamente un flujo de compilación para la rama `prod-staging`. Una vez que se completa la compilación, los artefactos se guardan como archivos `.zip` en un almacenamiento en frío para ser recuperados y usados más adelante.

El flujo de publicación se activa automáticamente cuando hay un nuevo artefacto disponible en el flujo de compilación conectado. For staging platforms, this process does not involve manual approval, and the artifacts are pushed to the Client CDN and API servers.

### Pushing changes to Production Applications

El proceso es prácticamente el mismo que el de las plataformas de staging, con algunas comprobaciones adicionales. Esto es solo para asegurarnos de que no rompemos nada en freeCodeCamp.org, el cual puede tener a cientos de usuarios usándolo en cualquier momento.

| NO ejecutes estos comandos a menos que hayas verificado que todo funciona en la plataforma de staging. No debes omitir ni evitar ninguna prueba en staging antes de continuar. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                |

1. Asegúrate de que tu rama `prod-staging` este sin cambios y sincronizada con el upstream.

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. Mueve los cambios de `prod-staging` a  `prod-current` mediante una fusión fast-forward

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > Si esto ocurre, es posible que hayas hecho algo incorrectamente y deberías comenzar de nuevo.

Los pasos anteriores activarán automáticamente un flujo de compilación para la rama `prod-current`. Una vez que un artefacto de compilación está listo, este activará la ejecución en el flujo de publicación.

**Pasos Adicionales para el Staff Action**

Once a release run is triggered, members of the developer staff team will receive an automated manual intervention email. Pueden _aprobar_ o _rechazar_ la publicación.

Si los cambios funcionan y se han probado en la plataforma de staging, entonces se pueden aprobar. La aprobación debe darse dentro de las 4 horas posteriores a la activación de la publicación antes de sea rechazada automáticamente. Un miembro del personal puede volver a iniciar la ejecución de la publicación de manera manual para publicaciones que fueron rechazados o esperar el siguiente ciclo de publicación.

Para uso del personal:

| Revisa tu correo electrónico para ver si hay un enlace directo o [ve al panel de publicaciones](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) después de que la ejecución de la compilación haya terminado. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                             |

Una vez que uno de los miembros del personal apruebe una publicación, el flujo enviará los cambios a los servidores de API y CDN de producción de freeCodeCamp.org.

## Build, Test and Deployment Status

Aquí está el estado actual de las pruebas, compilación y despliegue del código base.

| Rama                                                                             | Pruebas de unidad                                                                                                                                                                                                                | pruebas de integración                                                                                                                                                                                                        | compilación y despliegue                                                                                                          |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Pruebas de Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Pruebas de Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Pruebas de Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimental, próximamente)                                         | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                             | -                                                                                                                                 |

## Early Access and Beta Testing

Te invitamos a probar estas versiones en un modo **"prueba beta pública"** y obtener acceso anticipado a las próximas funciones de las plataformas. A veces, estas funcionalidades/cambios se denominan **next, beta, staging,** etc. indistintamente.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent**, and **stable** for everyone.

Te agradecemos por reportar los errores que encuentres y ayudar a mejorar freeCodeCamp.org. ¡Eres genial!

### Identifying the Upcoming Version of the Platforms

Currently, a public beta testing version is available at:

| Aplicación | Idioma  | URL                                      |
|:---------- |:------- |:---------------------------------------- |
| Aprende    | Inglés  | <https://www.freecodecamp.dev>           |
|            | Español | <https://www.freecodecamp.dev/espanol>   |
|            | Chino   | <https://www.freecodecamp.dev/chinese>   |
| Noticias   | Inglés  | <https://www.freecodecamp.dev/news>      |
| Foro       | Inglés  | <https://forum.freecodecamp.dev>         |
|            | Chino   | <https://freecodecamp.dev/chinese/forum> |
| API        | -       | `https://api.freecodecamp.dev`           |

> [!NOTE] El nombre de dominio es diferente a **`freeCodeCamp.org`**. Esto es intencional para evitar la indexación de los motores de búsqueda y evitar confusiones para los usuarios habituales de la plataforma.
> 
> The above list is not exhaustive of all the applications that we provision. Also, not all language variants are deployed in staging to conserve resources.

### Identifying the Current Version of the Platforms

**La versión actual de la plataforma siempre está disponible en [`freeCodeCamp.org`](https://www.freecodecamp.org).**

El equipo de desarrollo fusiona los cambios de la rama  `prod-staging` a `prod-current` cuando publican los cambios. El commit más reciente debe ser lo que ves en vivo en el sitio.

Puedes identificar la versión exacta desplegada visitando los registros de compilación y despliegue disponibles en la sección de estado. Alternatively, you can also ping us in the [contributors chat room](https://discord.gg/PRyKn3Vbay) for a confirmation.

### Known Limitations

Existen algunas limitaciones y problemas conocidos al utilizar la versión beta de la plataforma.

- #### All data / personal progress on these beta platforms will NOT be saved or carried over to production

  **Los usuarios de la versión beta tendrán una cuenta separada a la de producción.** La versión beta usa una base de datos físicamente separada de la de producción. Esto nos da la capacidad de prevenir cualquier pérdida accidental de datos o modificaciones. The dev-team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta platforms

  Se espera que el despliegue sea frecuente y en iteraciones rápidas, a veces varias veces al día. As a result, there will be unexpected downtime at times or broken functionality on the beta version.

- #### No envíes a los usuarios habituales a este sitio como una medida para confirmar una solución

  El sitio beta es y siempre ha sido para aumentar el desarrollo y las pruebas locales, nada más. No es una promesa de lo que se avecina, sino un vistazo de lo que se está trabajando.

- #### La página de inicio de sesión puede verse diferente a la de producción

  Usamos un entorno de prueba para freeCodeCamp.dev en Auth0 y por lo tanto, no tenemos la capacidad de establecer un dominio personalizado. Esto hace que todas las redirecciones de peticiones y la página de inicio de sesión aparezcan en un dominio predeterminado como: `https://freecodecamp-dev.auth0.com/`. Esto no afecta la funcionalidad y es lo más cercano a la producción que podemos conseguir.

## Reporting issues and leaving feedback

Por favor abre un nuevo reporte (issue) para discusiones e informes de errores.

Puedes enviar un correo electrónico a `dev[at]freecodecamp.org` si tienes alguna consulta. Como siempre, todas las vulnerabilidades de seguridad deben notificarse a `security[at]freecodecamp.org` en lugar del registro público o el foro.

## Flight Manual - Server Maintenance

> [!WARNING]
> 
> 1. La guía se aplica únicamente a los **miembros del personal de freeCodeCamp**.
> 2. Estas instrucciones no deben considerarse exhaustivas, por favor ten cuidado.

Como miembro del equipo interno, es posible que se te haya dado acceso a nuestros proveedores de servicios en la nube como Azure, Digital Ocean, etc.

Aquí hay algunos comandos útiles que puedes usar para trabajar en las máquinas virtuales (MV), por ejemplo, realizar actualizaciones de mantenimiento o realizar tareas de limpieza general.

## Get a list of the VMs

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you have been granted access to the cloud portals as well.

### Azure

Instala el CLI de Azure `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Una sola vez) Instalar en macOS con [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Una sola vez) Inicio de sesión:**

```
az login
```

> **Obtener la lista de nombres de las máquinas virtuales y direcciones IP:**

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

> **Obtener la lista de nombres de las máquinas virtuales y direcciones IP:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Spin New Resources

Estamos trabajando para crear nuestra configuración de "laC", y mientras esta en proceso, puedes usar el portal de Azure o Azure CLI para poner en marcha nuevas maquinas virtuales y otros recursos.

> [!TIP] Independientemente de tu elección de ejecución de recursos, tenemos algunos [ archivos de configuración de inicio útiles en la nube](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) para ayudarte a realizar parte del aprovisionamiento básico, como instalar docker o agregar claves SSH, etc.

## Keep VMs Updated

Debes mantener las máquinas virtuales actualizadas mediante la realización de actualizaciones. This will ensure that the virtual machine is patched with the latest security fixes.

> [!WARNING] Antes de ejecutar estos comandos:
> 
> - Make sure that the VM has been provisioned completely and that there are no post-install steps running.
> - Si estás actualizando paquetes en una máquina virtual que ya está sirviendo una aplicación, asegúrate de que la aplicación se ha detenido / guardado. Las actualizaciones de paquetes causarán que el ancho de banda de la red, la memoria y/o CPU tengan picos que pueden ocasionar interrupciones en aplicaciones en ejecución.

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

## Work on Web Servers (Proxy)

Estamos ejecutando instancias de balanceo de cargas (Azure Load Balancer) para nuestros servidores web. Estos servidores ejecutan NGINX como proxy inverso, enrutando hacia freeCodeCamp.org el tráfico de varias aplicaciones que se ejecutan en sus propias infraestructuras.

La configuración de NGINX está disponible en [este repositorio](https://github.com/freeCodeCamp/nginx-config).

### Primera Instalación

Aprovisionamiento de máquinas virtuales con el código

1. Instala NGINX y configúralo desde el repositorio.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Instala los certificados de origen de Cloudflare y la configuración de la aplicación upstream.

   Obtén los certificados de origen de Cloudflare del almacenamiento seguro e instálalos en las ubicaciones requeridas.

   **O**

   Mueve los certificados existentes:

   ```console
   # En Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # En Remoto
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Actualiza las configuraciones upstream:

   ```console
   vi configs/upstreams.conf
   ```

   Agrega/actualiza las direcciones IP fuente/origen de la aplicación.

3. Set up networking and firewalls.

   Configura los firewalls de Azure y `ufw` según sea necesario para las direcciones de origen de entrada.

4. Agregue la MV al grupo de backend del balanceador de carga.

   Configura y agrega reglas al balanceador de carga si es necesario. Es posible que también necesites agregar las MVs al grupo de backend del balanceador de carga si es necesario.

### Registro de eventos y monitoreo

1. Compruebe el estado del servicio NGINX utilizando el siguiente comando:

   ```console
   sudo systemctl status nginx
   ```

2. El registro de eventos y el monitoreo de los servidores están disponibles en:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), nuestro panel de control básico actual. Estamos trabajando en métricas más granulares para una mejor visibilidad de los datos

### Actualización de las instancias (mantenimiento)

Los cambios en la configuración de nuestras instancias NGINX son mantenidos en GitHub, y se deben desplegar en cada instancia de la siguiente manera:

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

## Work on API Instances

1. Instala las herramientas de compilación para archivos binarios de Node (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### Primera instalación

Aprovisionamiento de MVs con el código

1. Install Node LTS.

2. Install pnpm globally.

```console
npm install -g pnpm
```

3. Clone freeCodeCamp, set up env, and keys.

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
cd freeCodeCamp
git checkout prod-current # or any other branch to be deployed
```

4. Create the `.env` from the secure credentials storage.

5. Install dependencies

```console
pnpm install
```

6. Setup pm2 `logrotate` and startup on boot

```console
pnpm pm2 install pm2-logrotate
pnpm pm2 startup
```

7. Build the server

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

8.  Start Instances

```console
pnpm start:server
```

### Registro de eventos y monitoreo

```console
pnpm pm2 logs
```

```console
pnpm pm2 monit
```

### Actualización de las instancias (mantenimiento)

Los cambios en el código deben desplegarse en las instancias de la API cada tanto. Esto puede ser una actualización continua o una actualización manual. The latter is essential when changing dependencies or adding environment variables.

> [!ATTENTIÓN] Los flujos automáticos no están manejando actualizaciones de  dependencias en el momento. Necesitamos realizar una actualización manual antes de que se ejecute cualquier flujo de despliegue.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

```console
pnpm pm2 stop all
```

2. Install dependencies

```console
pnpm install
```

3. Build the server

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

4. Start Instances

```console
pnpm start:server && pnpm pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pnpm reload:server && pnpm pm2 logs
```

> [!NOTE] We are handling rolling updates to code and logic via pipelines. No debes tener que ejecutar estos comandos. Estos están aquí para documentación.

#### 3. Updating Node

1. Install new Node version

2. Update pm2 to use the new version

```console
pnpm pm2 update
```

## Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### Primera Instala

Aprovisionamiento de MVs con el código

1. Install Node LTS.

2. Update `npm` and install PM2 and setup `logrotate` and startup on boot

   ```console
   npm i -g npm@8
   npm i -g pm2@4
   npm install -g serve@13
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
   >    echo "serve -c ../serve.json -p 50505 www" > client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../serve.json -p 52525 www" > client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### Registro de eventos y monitoreo

```console
pm2 logs
```

```console
pm2 monit
```

### Actualización de las instancias (mantenimiento)

Los cambios en el código deben desplegarse en las instancias del API cada cierto tiempo. Esto puede ser una actualización continua o una actualización manual. La última es esencial al cambiar dependencias o al agregar variables de entorno.

> [!ATTENTION] Los flujos automáticos no están manejando actualizaciones de dependencias en el momento. Necesitamos realizar una actualización manual antes de que se ejecute cualquier flujo de despliegue.

#### 1. Actualizaciones Manuales: Utilizadas para actualizar dependencias, variables de entorno.

1. Stop all instances

   ```console
   pm2 stop all
   ```

2. Install or update dependencies

3. Start Instances

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Actualizaciones continuas: Utilizadas para cambios lógicos en el código.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Estamos manejando actualizaciones continuas de código, lógica, a través de flujos. No necesitarás aplicar estos comandos.  Estos están por la documentación.

## Work on Chat Servers

Nuestros servidores de chat están disponibles con una configuración HA [recomendada en la documentación de Rocket.Chat](https://docs.rocket.chat/installation/docker-containers/high-availability-install). El archivo `docker-compose` para esto está [disponible aquí](https://github.com/freeCodeCamp/chat-config).

Aprovisionamos instancias NGINX redundantes que a su vez tienen equilibrio de carga (Azure Load Balancer) frente al clúster Rocket.Chat. El archivo de configuración de NGINX está [disponible aquí](https://github.com/freeCodeCamp/chat-nginx-config).

### First Install

Aprovisionamiento de MVs con el código

**Clúster NGINX:**

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

3. Set up networking and firewalls.

   Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

4. Add the VM to the load balancer backend pool.

   Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

**Clúster de Docker:**

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

**Clúster NGINX:**

Los cambios de configuración a nuestras instancias NGINX se mantienen en GitHub, estos se deben implementar en cada instancia de la siguiente manera:

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

**Clúster de Docker:**

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

## Work on Contributor Tools

### Deploy Updates

ssh en la máquina virtual (alojada en Digital Ocean).

```console
cd tools
git pull origin master
pnpm install
pnpm run build
pm2 restart contribute-app
```

## Updating Node.js Versions on VMs

Lista las versiones instaladas de node y npm

```console
nvm -v
node -v
npm -v

nvm ls
```

Instala el último Node.js LTS y reinstala cualquier paquete global

```console
nvm install --lts --reinstall-packages-from=default
```

Verifica los paquetes instalados

```console
npm ls -g --depth=0
```

Alias the `default` Node.js version to the current LTS (pinned to the latest major version)

```console
nvm alias default 16
```

(Opcional) Desinstalar versiones antiguas

```console
nvm uninstall <version>
```

> [!ATTENTION] Para las aplicaciones cliente, el script de shell no se puede resucitar entre las versiones de Node.js con `pm2 resurrect`. En su lugar, despliega procesos desde cero. This should become nicer when we move to a docker-based setup.
> 
> Si utilizas PM2 para procesos, también deberás abrir las aplicaciones y guardar la lista de procesos para la recuperación automática en los reinicios.

Obtén las instrucciones/comandos de desinstalación con el comando `unstartup` y usa la salida para eliminar los servicios de systemctl

```console
pm2 unstartup
```

Obtén las instrucciones/comandos de instalación con el comando  `startup` y usa la salida para agregar los servicios de systemctl

```console
pm2 startup
```

Comandos rápidos para que PM2 enumere, reviva procesos guardados, etc.

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

See: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops and follow the instructions to stop, remove, and reinstall agents. En términos generales, puedes seguir los pasos que se enumeran aquí.

Necesitarás una PAT, que puedes obtener desde aquí: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installing Agents on Deployment targets

Navega a [Azure Devops](https://dev.azure.com/freeCodeCamp-org) y registra el agente desde cero en el requisito [deployment groups](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] Debes ejecutar los scripts en el directorio de inicio, y asegurarte de que no existe ningún otro directorio `azagent`.

### Updating Agents

Actualmente actualizar los agentes requiere que sean eliminados y reconfigurados. Esto es necesario para que recojan correctamente los valores `PATH` y otras variables de entorno del sistema. Necesitamos hacer esto, por ejemplo, para actualizar Node.js en nuestras MV objetivo de implemetación.

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

Una vez que hayas completado los pasos de arriba, puedes repetir los mismos pasos que para instalar el agente.

## Flight Manual - Email Blast

Utilizamos [una herramienta CLI](https://github.com/freecodecamp/sendgrid-email-blast) para enviar el boletín semanal. Para actualizar y comenzar el proceso:

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

## Flight Manual - Adding news instances for new languages

### Theme Changes

Utilizamos un [tema](https://github.com/freeCodeCamp/news-theme) personalizado para nuestra publicación de noticias. Los siguientes cambios en el tema permiten añadir nuevos idiomas.

1. Include an `else if` statement for the new [ISO language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) in [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Create an initial config folder by duplicating the [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) folder and changing its name to the new language code. (`en` —> `es` for Spanish)
3. Inside the new language folder, change the variable names in `main.js` and `footer.js` to the relevant language short code (`enMain` —> `esMain` for Spanish)
4. Duplicate the [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) and rename it to the new language code.
5. In [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs), add scripts for the newly created config files.
6. Add the related language `day.js` script from [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) to the [freeCodeCamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Ghost Dashboard Changes

Actualice los recursos de la publicación yendo al panel de Ghost > ajustes > generales y subiendo el icono [de las publicaciones](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), [logo](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png)y [portada](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png).
