---
title: How to Log in to Your Local Instance of Free Code Camp
localeTitle: Cómo iniciar sesión en su instancia local de Free Code Camp
---
Esta guía lo ayudará a iniciar sesión en su sitio local de FCC usando su cuenta de GitHub. Este proceso debe ser similar para iniciar sesión con otras cuentas de redes sociales. Esta guía asume que ya tiene una copia local de FCC en funcionamiento.

## TL; DR

1.  [Registrar una nueva aplicación OAuth](https://github.com/settings/developers)
2.  Página de inicio: `http://localhost:3000/`
3.  Campo de devolución de llamada: `http://localhost:3000/auth/github/callback`
4.  Copie / pegue el ID de cliente y el Secreto de cliente en su archivo `.env`
5.  Use el puerto 3000 cuando vea su sitio local de FCC

Los Mods y el personal de Free Code Camp están disponibles para ayudarlo con los problemas relacionados con la Solicitud de extracción en nuestra [sala de chat de colaboradores de ayuda.](https://gitter.im/FreeCodeCamp/HelpContributors)

## Renuncia

La salida de la ejecución de `$ gulp` menciona que el **puerto de acceso** es 3001. Solo he iniciado sesión correctamente con GitHub en el puerto 3000: el **puerto proxy** . Si entiende cómo iniciar sesión utilizando otros puertos, considere enviar una solicitud de extracción en este wiki.

## Inicia sesión usando tu cuenta de GitHub

1.  [Registre una nueva aplicación OAuth](https://github.com/settings/developers) y haga clic en **Registrar nueva aplicación**

_Alternativamente_ , haga clic en su **Imagen de perfil** => **Configuración** => **Aplicaciones** => **Aplicaciones de** **desarrollador** => **Registrar nueva aplicación**

![Registrar la aplicación GitHub OAuth](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55f4645c3498ceb8098afe8e8353da8f7c262548.png)

1.  Rellene los campos de aplicación OAuth
    
    *   **Nombre de la aplicación** : elija cualquier nombre, como `fcc-local`
        
    *   **URL de la página principal** - configurada en `http://localhost:3000/`
        
    *   **Descripción de la aplicación** - opcional
        
    *   **URL de devolución de llamada de autorización** : configurada como `http://localhost:3000/auth/github/callback`
        
2.  Haga clic en **Registrar aplicación** para ver la página de la aplicación recién registrada con su ID de cliente y Secreto de cliente.
    

![ID de cliente y secreto de cliente](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43ee37a9f0f228d3663bb28accedc14cca3ff56.png)

1.  Copie y pegue su ID de cliente y Secreto de cliente en su archivo `.env` .

_Nota: su ID de cliente y Secreto de cliente serán valores alfanuméricos largos._

![Actualizar archivo .env](//discourse-user-assets.s3.amazonaws.com/original/2X/5/549aeaa6ea85e119ba5e978c708dc55c39b134b3.png)

## Consejos

1.  Quitar / desarmar con comentario bloquea el proveedor no deseado en el proveedor de [pasaportes](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js) .
    
2.  Agregue SESSION _SECRET y COOKIE_ SECRET en `.env` si obtiene un error en Express-session y cookieParser.
    
    `COOKIE_SECRET='secret' SESSION_SECRET='secret'`
    
3.  Ejecute el comando `node seed` antes de ejecutar `gulp` si no obtiene los desafíos.
    

## Terminado

¡Felicidades! Ahora puede iniciar sesión correctamente en su sitio local de FCC usando su cuenta de GitHub.