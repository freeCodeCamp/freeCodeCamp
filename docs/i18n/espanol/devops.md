# Manual de DevOps

Esta guía te ayudará a comprender nuestra infraestructura y cómo le damos mantenimiento a nuestras plataformas. Si bien esta guía no contiene detalles exhaustivos de todas las operaciones, esta podría utilizarse como referencia para tu comprensión de los sistemas.

Déjanos saber, si tienes algún comentario o consulta, y la aclararemos con mucho gusto.

# Manual de vuelo: Despliegues de código

Este repositorio se construye, prueba y despliega continuamente para ** separar conjuntos de infraestructura (Servidores, Bases de Datos, CDNs, etc.)**.

Esto involucra tres pasos que deben seguirse en secuencia:

1. Los nuevos cambios (tanto correcciones como funcionalidades) se integran en nuestra rama principal de desarrollo (`main`) a través de pull requests.
2. Estos cambios son ejecutados a través de una serie de pruebas automatizadas.
3. Una vez que las pruebas se completan de forma satisfactoria, publicamos los cambios (o los actualizamos si es necesario) para desplegarlos en nuestra infraestructura.

#### Construyendo la base de código - Mapeando las ramas de Git con los despliegues.

Normalmente, [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (la rama de desarrollo por defecto) se integra diariamente en la rama [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) y se publica en una infraestructura aislada.

Esta es una publicación intermedia para nuestros desarrolladores y colaboradores voluntarios. También es conocida como nuestra publicación "staging" o "beta".

Este es idéntico a nuestro entorno de producción en `freeCodeCamp.org`, excepto que utiliza un conjunto separado de bases de datos, servidores, web-proxies, etc. Este aislamiento nos permite probar el desarrollo y las funcionalidades de manera continua en un escenario similar al de "producción", sin afectar a los usuarios regulares de las principales plataformas de freeCodeCamp.org.

Una vez que el equipo de desarrolladores [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) está satisfecho con los cambios en la plataforma de "staging", estos cambios se trasladan cada ciertos días a la rama [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current).

Esta es la versión final que despliega los cambios a nuestras plataformas de producción en freeCodeCamp.org.

#### Pruebas de cambios - pruebas de integración y aceptación del usuario.

Empleamos varios niveles de pruebas de integración y aceptación para verificar la calidad del código. Todas nuestras pruebas se realizan a través de software como [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) y [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Contamos con pruebas unitarias para probar nuestras soluciones a los desafíos, las API del servidor y las interfaces de usuario. Estas nos ayudan a probar la integración entre diferentes componentes.

> [!NOTE] También estamos en el proceso de redactar pruebas de usuario final que nos ayudarán a replicar escenarios del mundo real, como actualizar un correo electrónico o hacer una llamada a la API o servicios de terceros.

Juntas, estas pruebas ayudan a evitar que los problemas se repitan y garantizan que no introduzcamos un error mientras trabajamos en otro error o en una funcionalidad.

#### Desplegando los cambios: Enviando los cambios a los servidores.

Hemos configurado un software de entrega continua para publicar los cambios en nuestros servidores de desarrollo y producción.

Una vez que los cambios se envían a las ramas de publicación protegidas, se activa automáticamente un flujo de compilación para la rama. Los flujos de compilación son responsables de construir artefactos y mantenerlos en un almacenamiento en frío para su uso posterior.

El flujo de compilación dispara el flujo de publicación correspondiente si este completa una ejecución exitosa. Los flujos de publicación son responsables de recopilar los artefactos de compilación, moverlos a los servidores y ponerlos en funcionamiento.

Los estados de las compilaciones y publicaciones están [disponibles aquí](#build-test-and-deployment-status).

## Ejecutar una compilación, prueba y despliegue

Actualmente, solo los miembros del equipo de desarrolladores pueden enviar cambios a las ramas de producción. Los cambios en las ramas de `production-*` sólo pueden llegar a través de una fusión fast-forward al [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] En los próximos días mejoraríamos este flujo a través de la implementación de pull-requests, para una mejor administración de acceso y transparencia.

### Cargando cambios a las aplicaciones en producción.

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
   npm run clean-and-develop
   ```

5. Mueve los cambios desde `main` a `prod-staging` mediante una fusión fast-forward

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] No podrás forzar un push y si has reescrito el historial de alguna manera, estos comandos arrojarán errores.
   > 
   > Si esto ocurre, es posible que hayas hecho algo incorrectamente y deberías comenzar de nuevo.

Los pasos anteriores activarán automáticamente un flujo de compilación para la rama `prod-staging`. Una vez que se completa la compilación, los artefactos se guardan como archivos `.zip` en un almacenamiento en frío para ser recuperados y usados más adelante.

El flujo de publicación se activa automáticamente cuando hay un nuevo artefacto disponible en el flujo de compilación conectado. Para las plataformas de staging, este proceso no implica aprobación manual y los artefactos se envían a los servidores de API y CDN Cliente.

### Publicando cambios a las aplicaciones en producción.

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

   > [!NOTE] No podrás forzar un push y si has reescrito el historial de alguna manera, estos comandos arrojarán errores.
   > 
   > Si esto ocurre, es posible que hayas hecho algo incorrectamente y deberías comenzar de nuevo.

Los pasos anteriores activarán automáticamente un flujo de compilación para la rama `prod-current`. Una vez que un artefacto de compilación está listo, este activará la ejecución en el flujo de publicación.

**Pasos Adicionales para el Staff Action**

Una vez que se activa una ejecución de publicación, los miembros del equipo de desarrollado principal recibirán un correo electrónico automatizado de intervención manual. Pueden _aprobar_ o _rechazar_ la publicación.

Si los cambios funcionan y se han probado en la plataforma de staging, entonces se pueden aprobar. La aprobación debe darse dentro de las 4 horas posteriores a la activación de la publicación antes de sea rechazada automáticamente. Un miembro del personal puede volver a iniciar la ejecución de la publicación de manera manual para publicaciones que fueron rechazados o esperar el siguiente ciclo de publicación.

Para uso del personal:

| Revisa tu correo electrónico para ver si hay un enlace directo o [ve al panel de publicaciones](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) después de que la ejecución de la compilación haya terminado. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                             |

Una vez que uno de los miembros del personal apruebe una publicación, el flujo enviará los cambios a los servidores de API y CDN de producción de freeCodeCamp.org.

## Estado de la compilación, pruebas y despliegue

Aquí está el estado actual de las pruebas, compilación y despliegue del código base.

| Rama                                                                             | Pruebas de unidad                                                                                                                                                                                                                | pruebas de integración                                                                                                                                                                                                        | compilación y despliegue                                                                                                          |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Pruebas de Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Pruebas de Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Pruebas de Cypress E2E](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimental, próximamente)                                         | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                             | -                                                                                                                                 |

## Acceso anticipado y pruebas beta

Te invitamos a probar estas versiones en un modo **"prueba beta pública"** y obtener acceso anticipado a las próximas funciones de las plataformas. A veces, estas funcionalidades/cambios se denominan **next, beta, staging,** etc. indistintamente.

Tus contribuciones a través de comentarios y reporte de errores nos ayudarán a hacer que las plataformas de producción en `freeCodeCamp.org` sean más **resistentes**, **consistentes** y **estables** para todos.

Te agradecemos por reportar los errores que encuentres y ayudar a mejorar freeCodeCamp.org. ¡Eres genial!

### Identificando la próxima versión de las plataformas

Actualmente una versión de prueba beta pública está disponible en:

| Aplicación | Idioma  | URL                                      |
|:---------- |:------- |:---------------------------------------- |
| Aprende    | Inglés  | <https://www.freecodecamp.dev>           |
|            | Español | <https://www.freecodecamp.dev/espanol>   |
|            | Chino   | <https://chinese.freecodecamp.dev>       |
| Noticias   | Inglés  | <https://www.freecodecamp.dev/news>      |
| Foro       | Inglés  | <https://forum.freecodecamp.dev>         |
|            | Chino   | <https://chinese.freecodecamp.dev/forum> |
| API        | -       | `https://api.freecodecamp.dev`           |

> [!NOTE] El nombre de dominio es diferente a **`freeCodeCamp.org`**. Esto es intencional para evitar la indexación de los motores de búsqueda y evitar confusiones para los usuarios habituales de la plataforma.
> 
> La lista anterior no es exhaustiva de todas las aplicaciones que proporcionamos. Además, no todas variantes de idiomas se despliegan al mismo tiempo en staging para conservar recursos.

### Identificando la versión actual de las plataformas

**La versión actual de la plataforma siempre está disponible en [`freeCodeCamp.org`](https://www.freecodecamp.org).**

El equipo de desarrollo fusiona los cambios de la rama  `prod-staging` a `prod-current` cuando publican los cambios. El commit más reciente debe ser lo que ves en vivo en el sitio.

Puedes identificar la versión exacta desplegada visitando los registros de compilación y despliegue disponibles en la sección de estado. Alternatively you can also ping us in the [contributors chat room](https://discord.gg/PRyKn3Vbay) for a confirmation.

### Limitaciones Conocidas

Existen algunas limitaciones y problemas conocidos al utilizar la versión beta de la plataforma.

- #### Todos los datos / progreso personal en estas plataformas beta NO se guardarán ni se transferirán a producción.

  **Los usuarios de la versión beta tendrán una cuenta separada a la de producción.** La versión beta usa una base de datos físicamente separada de la de producción. Esto nos da la capacidad de prevenir cualquier pérdida accidental de datos o modificaciones. El equipo de desarrollo puede purgar la base de datos en esta versión beta según sea necesario.

- #### No hay garantías sobre el tiempo de disponibilidad y confiabilidad de las plataformas beta.

  Se espera que el despliegue sea frecuente y en iteraciones rápidas, a veces varias veces al día. Como resultado, en ocasiones habrá cierto tiempo de inactividad inesperado o alguna funcionalidad con problemas en la versión beta.

- #### No envíes a los usuarios habituales a este sitio como una medida para confirmar una solución

  El sitio beta es y siempre ha sido para aumentar el desarrollo y las pruebas locales, nada más. No es una promesa de lo que se avecina, sino un vistazo de lo que se está trabajando.

- #### La página de inicio de sesión puede verse diferente a la de producción

  Usamos un entorno de prueba para freeCodeCamp.dev en Auth0 y por lo tanto, no tenemos la capacidad de establecer un dominio personalizado. Esto hace que todas las redirecciones de peticiones y la página de inicio de sesión aparezcan en un dominio predeterminado como: `https://freecodecamp-dev.auth0.com/`. Esto no afecta la funcionalidad y es lo más cercano a la producción que podemos conseguir.

## Reportando problemas y dejando retroalimentación

Por favor abre un nuevo reporte (issue) para discusiones e informes de errores.

Puedes enviar un correo electrónico a `dev[at]freecodecamp.org` si tienes alguna consulta. Como siempre, todas las vulnerabilidades de seguridad deben notificarse a `security[at]freecodecamp.org` en lugar del registro público o el foro.

# Manual de vuelo: Mantenimiento del servidor

> [!WARNING]
> 
> 1. La guía se aplica únicamente a los **miembros del personal de freeCodeCamp**.
> 2. Estas instrucciones no deben considerarse exhaustivas, por favor ten cuidado.

Como miembro del equipo interno, es posible que se te haya dado acceso a nuestros proveedores de servicios en la nube como Azure, Digital Ocean, etc.

Aquí hay algunos comandos útiles que puedes usar para trabajar en las máquinas virtuales (MV), por ejemplo, realizar actualizaciones de mantenimiento o realizar tareas de limpieza general.

## Obtener una lista de las Máquinas Virtuales

> [!NOTE] Aunque es posible que ya tengas acceso SSH a las máquinas virtuales, esto solamente no te permitirá enumerar las máquinas virtuales a menos que también se te conceda acceso a los portales en la nube.

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

## Ejecutar nuevos recursos

Estamos trabajando para crear nuestra configuración de "laC", y mientras esta en proceso, puedes usar el portal de Azure o Azure CLI para poner en marcha nuevas maquinas virtuales y otros recursos.

> [!TIP] Independientemente de tu elección de ejecución de recursos, tenemos algunos [ archivos de configuración de inicio útiles en la nube](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) para ayudarte a realizar parte del aprovisionamiento básico, como instalar docker o agregar claves SSH, etc.

## Mantener las VMs actualizadas

Debes mantener las máquinas virtuales actualizadas mediante la realización de actualizaciones. Esto asegurará que la máquina virtual se ha parcheado con las correcciones de seguridad más recientes.

> [!WARNING] Antes de ejecutar estos comandos:
> 
> - Asegúrate de que la máquina virtual ha sido provisionada completamente y no hay pasos post-instalación ejecutandose.
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

## Trabajar en Servidores Web (Proxy)

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

3. Configurar redes y cortafuegos.

   Configura los firewalls de Azure y `ufw` según sea necesario para las direcciones de origen de entrada.

4. Agregue la MV al grupo de backend del balanceador de carga.

   Configura y agrega reglas al balanceador de carga si es necesario. Es posible que también necesites agregar las MVs al grupo de backend del balanceador de carga si es necesario.

### Registro de Eventos y Monitoreo

1. Compruebe el estado del servicio NGINX utilizando el siguiente comando:

   ```console
   sudo systemctl status nginx
   ```

2. El registro de eventos y el monitoreo de los servidores están disponibles en:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), nuestro panel de control básico actual. Estamos trabajando en métricas más granulares para una mejor visibilidad de los datos

### Actualización de las Instancias (Mantenimiento)

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

## Trabajar en instancias del API

1. Instala las herramientas de compilación para archivos binarios de Node (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### Primera Instalación

Aprovisionamiento de MVs con el código

1. Instala Node LTS.

2. Actualiza `npm`, instala PM2 y configura `logrotate` e inicio en arranque

   ```console
   npm i -g npm@8
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

7. Compila el servidor

   ```console
   npm run create:config && npm run build:curriculum && npm run build:server
   ```

8. Inicia las Instancias

   ```console
   cd api-server
   pm2 reload ecosystem.config.js
   ```

### Registro de eventos y monitoreo

```console
pm2 logs
```

```console
pm2 monit
```

### Actualización de las instancias (mantenimiento)

Los cambios en el código deben desplegarse en las instancias de la API cada tanto. Esto puede ser una actualización continua o una actualización manual. La última es esencial al cambiar dependencias o al agregar variables de entorno.

> [!ATTENTIÓN] Los flujos automáticos no están manejando actualizaciones de  dependencias en el momento. Necesitamos realizar una actualización manual antes de que se ejecute cualquier flujo de despliegue.

#### 1. Actualizaciones Manuales: Utilizadas para actualizar dependencias, variables de entorno.

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
npm run create:config && npm run build:curriculum && npm run build:server
```

4. Inicia las Instancias

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Actualizaciones continuas: Utilizadas para cambios lógicos en el código.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Estamos manejando actualizaciones continuas de código, lógica, mediante flujos (pipelines). No debes tener que ejecutar estos comandos. Estos están aquí para documentación.

## Trabajar en instancias de cliente

1. Instala las herramientas de compilación para archivos binarios de Node (`node-gyp`), etc.

```console
sudo apt install build-essential
```

### Primera instalación

Aprovisionamiento de MVs con el código

1. Instala Node LTS.

2. Actualiza `npm` e instala PM2 y configura `logrotate` e inicia en el arranque

   ```console
   npm i -g npm@8
   npm i -g pm2@4
   npm install -g serve@13
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clona la configuración del cliente, configura las variables de entorno y las claves.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Inicia las instancias provisionales para el cliente web, estas se actualizarán con los artefactos del flujo de Azure.

   > Todo: Esta configuración debe moverse a S3 o al almacenamiento de Azure Blob 
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

1. Detén todas las instancias

   ```console
   pm2 stop all
   ```

2. Instala o actualiza las dependencias

3. Inicia las Instancias

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Actualizaciones Continuas: Utilizadas para cambios lógicos en el código.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] Estamos manejando actualizaciones continuas de código, lógica, a través de flujos. No necesitarás aplicar estos comandos.  Estos están por la documentación.

## Trabaja en los servidores de Chat

Nuestros servidores de chat están disponibles con una configuración HA [recomendada en la documentación de Rocket.Chat](https://docs.rocket.chat/installation/docker-containers/high-availability-install). El archivo `docker-compose` para esto está [disponible aquí](https://github.com/freeCodeCamp/chat-config).

Aprovisionamos instancias NGINX redundantes que a su vez tienen equilibrio de carga (Azure Load Balancer) frente al clúster Rocket.Chat. El archivo de configuración de NGINX está [disponible aquí](https://github.com/freeCodeCamp/chat-nginx-config).

### Primera Instala

Aprovisionamiento de MVs con el código

**Clúster NGINX:**

1. Instala NGINX y configúralo desde el repositorio.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Instala los certificados de origen de Cloudflare y la configuración de la aplicación upstream.

   Obtén los certificados de origen de almacenamiento seguro de Cloudflare e instálalos en los lugares requeridos.

   **O**

   Mueve los certificados existentes:

   ```console
   # Localmente
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remotamente
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   Actualiza las configuraciones de upstream:

   ```console
   vi configs/upstreams.conf
   ```

   Agrega/actualiza las direcciones IP fuente/origen de la aplicación.

3. Configura redes y cortafuegos.

   Configura los firewalls de Azure y `ufw` según sea necesario para las direcciones de origen de entrada.

4. Agregue la MV al grupo de backend del balanceador de carga.

   Configura y agrega reglas al balanceador de carga si es necesario. Es posible que también debas agregar las VMs al grupo de backend del balanceador de carga si es necesario.

**Clúster de Docker:**

1. Instala NGINX y configúralo desde el repositorio

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. Configura las variables de entorno necesarias y las direcciones IP de la instancia.

3. Ejecuta el servidor de rocket-chat

   ```console
   docker-compose config
   docker-compose up -d
   ```

### Registro de eventos y monitoreo

1. Comprueba el estado del servicio NGINX utilizando el siguiente comando:

   ```console
   sudo systemctl status nginx
   ```

2. Verifica el estado para ejecutar instancias de Docker con:

   ```console
   docker ps
   ```

### Actualización de las instancias (mantenimiento)

**Clúster NGINX:**

Los cambios de configuración a nuestras instancias NGINX se mantienen en GitHub, estos se deben implementar en cada instancia de la siguiente manera:

1. SSH en la instancia e ingresa sudo

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

**Clúster de Docker:**

1. SSH en la instancia y navega hasta la ruta de configuración del chat

   ```console
   cd ~/chat
   ```

2. Obtén el código de configuración más reciente.

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Baja la imagen más reciente de docker para Rocket.Chat

   ```console
   docker-compose pull
   ```

4. Actualiza las instancias en ejecución

   ```console
   docker-compose up -d
   ```

5. Válida que las instancias estén activas

   ```console
   docker ps
   ```

6. Limpia los recursos externos

   ```console
   docker system prune --volumes
   ```

   Salida:

   ```console
   WARNING! This will remove:
     - all stopped containers
     - all networks not used by at least one container
     - all volumes not used by at least one container
     - all dangling images
     - all dangling build cache

   Are you sure you want to continue? [y/N] y
   ```

   Selecciona sí (y) para eliminar todo lo que no esté en uso. Esto eliminará todos los contenedores detenidos, todas las redes y volúmenes no utilizados por al menos un contenedor, y todas las imágenes colgantes y cachés de compilación.

## Trabajar en las herramientas de los colaboradores

### Implementar actualizaciones

ssh en la máquina virtual (alojada en Digital Ocean).

```console
cd tools
git pull origin master
npm ci
npm run build
pm2 restart contribute-app
```

## Actualizar la versión de Node.js en máquinas virtuales

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

Alias la versión `default` de Node.js a la LTS actual (fijada a la última versión mayor)

```console
nvm alias default 16
```

(Opcional) Desinstalar versiones antiguas

```console
nvm uninstall <version>
```

> [!ATTENTION] Para las aplicaciones cliente, el script de shell no se puede resucitar entre las versiones de Node.js con `pm2 resurrect`. En su lugar, despliega procesos desde cero. Esto será mejor cuando pasemos a una configuración basada en Docker.
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

## Instalar y actualizar Agentes de Pipeline Azure

Consulta: https://docs.microsoft.com/es-es/azure/devops/pipelines/agents/v2-linux?view=azure-devops y sigue las instrucciones para detener, eliminar y reinstalar agentes. En términos generales, puedes seguir los pasos que se enumeran aquí.

Necesitarás una PAT, que puedes obtener desde aquí: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Instalación de agentes en objetivos de despliegue

Navega a [Azure Devops](https://dev.azure.com/freeCodeCamp-org) y registra el agente desde cero en el requisito [deployment groups](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] Debes ejecutar los scripts en el directorio de inicio, y asegurarte de que no existe ningún otro directorio `azagent`.

### Actualizando agentes

Actualmente actualizar los agentes requiere que sean eliminados y reconfigurados. Esto es necesario para que recojan correctamente los valores `PATH` y otras variables de entorno del sistema. Necesitamos hacer esto, por ejemplo, para actualizar Node.js en nuestras MV objetivo de implemetación.

1. Navega y revisa el estado del servicio

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. Detén el servicio

   ```console
   sudo ./svc.sh stop
   ```

3. Desinstala el servicio

   ```console
   sudo ./svc.sh uninstall
   ```

4. Remueve el agente de la pila de flujo

   ```console
   ./config.sh remove
   ```

5. Elimina los archivos de configuración

   ```console
   cd ~
   rm -rf ~/azagent
   ```

Una vez que hayas completado los pasos de arriba, puedes repetir los mismos pasos que para instalar el agente.

# Manual de piloto - Correo masivo

Utilizamos [una herramienta CLI](https://github.com/freecodecamp/sendgrid-email-blast) para enviar el boletín semanal. Para actualizar y comenzar el proceso:

1. Inicia sesión en DigitalOcean, e inicia nuevas droplets bajo el proyecto `Sendgrid`. Usa el snapshot de Ubuntu Sendgrid con la fecha más reciente.  Esto viene precargado con la herramienta CLI y el script para obtener correos electrónicos desde la base de datos. Con el volumen actual, tres droplets son suficientes para enviar los correos electrónicos de manera oportuna.

2. Configura el siguiente script para obtener la lista de correos.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   Tendrás que reemplazar los valores del marcador de posición en el archivo `.env` con tus credenciales.

3. Ejecuta el script.

   ```console
   node get-emails.js emails.csv
   ```

   Esto guardará la lista de correos en un archivo `emails.csv`.

4. Divide los correos electrónicos en varios archivos, dependiendo de la cantidad de droplets que necesites. Esto es más fácil de hacer utilizando `scp` para extraer la lista de correos electrónicos localmente y, utilizando tu editor de texto favorito para dividirlos en varios archivos. Cada archivo necesitará el encabezado `email,unsubscribeId`.

5. Cambia al directorio CLI con `cd /home/sendgrid-email-blast` y configura la herramienta [según la documentación](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Ejecuta la herramienta para enviar los correos, según la [documentación de uso](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. Cuando el correo masivo haya terminado, verifica que no hay correos fallados antes de destruir los droplets.

# Manual de vuelo - Agregando instancias de noticias para nuevos idiomas

### Cambios de tema

Utilizamos un [tema](https://github.com/freeCodeCamp/news-theme) personalizado para nuestra publicación de noticias. Los siguientes cambios en el tema permiten añadir nuevos idiomas.

1. Incluya una sentencia `else if` para el nuevo [código de idioma ISO](https://www.loc.gov/standards/iso639-2/php/code_list.php) en [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Crea una carpeta de configuración inicial duplicando la carpeta [`assets/config/es`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) y cambiando su nombre al nuevo código de idioma. (`en` —> `es` para Español)
3. Dentro de la nueva carpeta de idioma, cambie los nombres de las variables en `main.js` y `footer.js` al código corto de idioma relevante (`enMain` —> `esMain` para Español)
4. Duplicar el [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) y renombrarlo al nuevo código de idioma.
5. En [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs), agrega scripts para los archivos de configuración creados recientemente.
6. Agregue el lenguaje relacionado `day.js` script de [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) al [CDN freeCodeCamp](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Cambios en el Dashboard de Ghost

Actualice los recursos de la publicación yendo al panel de Ghost > ajustes > generales y subiendo el icono [de las publicaciones](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), [logo](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png)y [portada](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png).
