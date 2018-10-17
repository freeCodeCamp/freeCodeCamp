---
title: Npm Behind a Proxy Server
localeTitle: Npm detrás de un servidor proxy
---
## Casos de uso

Es posible que deba modificar los comandos de `npm install` que acceden a los repositorios remotos ( [npmjs](https://www.npmjs.com/) , por ejemplo) para instalar los módulos Node JS; Si su acceso a internet es a través de un [servidor proxy](https://en.wikipedia.org/wiki/Proxy_server) .

Los servidores proxy son comunes en entornos universitarios y de tipo empresarial.

Puede [localizar la configuración](http://www.wikihow.com/Change-Proxy-Settings) de [su proxy](http://www.wikihow.com/Change-Proxy-Settings) desde el panel de [configuración](http://www.wikihow.com/Change-Proxy-Settings) de su navegador.

## Usando Proxy con NPM

Una vez que haya obtenido la configuración del proxy (URL del servidor, puerto, nombre de usuario y contraseña); necesita configurar sus configuraciones `npm` siguiente manera.
```
$ npm config set proxy http://<username>:<password>@<proxy-server-url>:<port> 
 $ npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port> 
```

Tendría que reemplazar `<username>` , `<password>` , `<proxy-server-url>` , `<port>` con los valores específicos de sus credenciales de servidor proxy.

Estos campos son opcionales. Por ejemplo, es posible que su servidor proxy ni siquiera requiera `<username>` y `<password>` , o que se esté ejecutando en el puerto 80 (en cuyo caso no se requiere `<port>` ).

Una vez que haya configurado esto, su `npm install` `npm i -g` , `npm i -g` etc. funcionaría correctamente.

## Cuándo no usar

No debería tener que usar los comandos `npm` con la configuración del proxy, si ocurre alguno de los siguientes:

> *   El administrador del sistema o la política corporativa no le permite acceder a los repositorios remotos de `npm` desde NPM-JS, por ejemplo.
> *   El repositorio remoto de módulos Node en cuestión no se encuentra en su máquina, pero está dentro de la red interna.

## Desactivar configuración de proxy

Utilice [esta](http://luxiyalu.com/how-to-remove-all-npm-proxy-settings/) publicación de blog para anular la configuración de su proxy. También puede eliminar manualmente las líneas que especifican su configuración de proxy de su [archivo](https://docs.npmjs.com/files/npmrc) `.npmrc` .

## Recursos

Puede usar los siguientes recursos para leer más sobre esto:

> *   [¿Puedo iniciar sesión detrás de un servidor proxy?](https://github.com/npm/npm/issues/9401#issuecomment-134569585)
> *   [NPM detrás de un proxy corporativo](http://intenseagile.com/2015/09/04/npm-behind-proxy.html)