---
title: Git Behind a Proxy Server
localeTitle: Git detrás de un servidor proxy
---
**Casos de uso**

Es posible que deba modificar los comandos de `git` que acceden (para actualizar y leer) los repositorios remotos si su acceso a Internet es a través de un [servidor proxy](https://en.wikipedia.org/wiki/Proxy_server) .

Los servidores proxy son comunes en entornos universitarios y de tipo empresarial.

Puede [localizar la configuración](http://www.wikihow.com/Change-Proxy-Settings) de [su proxy](http://www.wikihow.com/Change-Proxy-Settings) desde el panel de [configuración](http://www.wikihow.com/Change-Proxy-Settings) de su navegador.

## Usando Proxy con Git

Una vez que haya obtenido la configuración del proxy (URL del servidor, puerto, nombre de usuario y contraseña); necesitas configurar tu git de la siguiente manera:
```
$ git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port> 
```

Necesitará reemplazar `<username>` , `<password>` , `<proxy-server-url>` , `<port>` con los valores específicos de sus credenciales de servidor proxy. Estos campos son opcionales. Por ejemplo, es posible que su servidor proxy ni siquiera requiera `<username>` y `<password>` , o que se esté ejecutando en el puerto 80 (en cuyo caso no se requiere `<port>` ).

Una vez que hayas configurado esto, tu `git pull` , `git push` o incluso `git fetch` funcionarán correctamente.

## Cuándo no usar

No debería tener que usar los comandos `git` con la configuración del proxy, si ocurre cualquiera de los siguientes

*   El administrador del sistema o la política corporativa no le permite acceder a los repositorios remotos de `git` desde GitHub, BitBucket, etc.
*   El repositorio remoto en cuestión no está en su máquina, pero está dentro de la red interna. Un ejemplo de GitLab implementado internamente en su empresa es un buen ejemplo.

## Desactivar configuración de proxy

Utilice [esta](http://stackoverflow.com/questions/11499805/git-http-proxy-setting) discusión de desbordamiento de pila para anular la configuración de su proxy.

## Recursos

Puede usar lo siguiente para leer más sobre esto:

*   [¿Puedo iniciar sesión detrás de un servidor proxy?](https://help.github.com/desktop/faq/articles/can-i-log-in-behind-a-proxy-server/#platform-windows)
*   [Git Config](https://git-scm.com/docs/git-config)