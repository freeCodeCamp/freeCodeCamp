---
title: Heroku Deployment Guide
localeTitle: Guía de implementación de Heroku
---
1.  Crear una cuenta Heroku.
    
2.  Después de hacer una cuenta, puedes ir a tu [panel de control.](https://dashboard.heroku.com/apps)
    
3.  Haga clic en el signo + en la esquina superior derecha y haga clic en Crear nueva aplicación (al igual que está haciendo un nuevo repositorio en github). Déle un nombre y haga clic en Crear.
    
4.  Después de crear la aplicación verás su nombre en tu panel de control. Haz click en eso.
    
5.  Serás llevado a un panel de control para esa aplicación. Haga clic en la pestaña Implementar.
    
6.  Allí estará encantado de encontrar que puede conectarse a un repositorio de github. En la sección Método de implementación, elija Github y autentíquese iniciando sesión en Github.
    
7.  Justo debajo de eso, completa tu nombre de repositorio de github. (Por supuesto, esto requiere que hayas enviado un repositorio a github desde cloud9 o desde tu máquina local ... y que lo hayas configurado correctamente. Más sobre esto más adelante).
    
8.  Desplácese hacia abajo y haga clic en Implementación automática o desplácese hacia abajo aún más y haga clic en Implementación manual. Después de unos momentos, debería ver su aplicación ejecutándose en su-repo-name.herokuapp.com. Dulce.
    

## Creando tu aplicación localmente o en Cloud9

1.  Cree una nueva carpeta llamada timestamp-microservice (o como se llame a su proyecto).

`$ mkdir timestamp-microservice && cd timestamp-microservice`

1.  Crea los archivos que vas a necesitar:

`$ touch .env .gitignore README.md index.html server.js`

1.  Instala los paquetes que necesites en el camino.

Ejemplos:

`$ npm install --save express`

`$ npm install --save moment`

Estos se agregarán a una carpeta llamada node\_modules en su carpeta raíz.

1.  Inicialice el proyecto con package.json haciendo `$ npm init`

Le hará una serie de preguntas y creará un archivo package.json en su carpeta raíz en función de sus respuestas y sus valores predeterminados. Si ya ha creado un archivo llamado server.js como se mencionó anteriormente, esta línea _esencial_ se agregará a su archivo package.json:
```
  "scripts": { 
 
  "start": "node server.js" 
 
  } 
```

Sin embargo, si le da otro nombre, como 'index.js', esa línea no se agregará y tendrá que agregarla manualmente. Ese es el comportamiento predeterminado como se menciona [aquí](https://docs.npmjs.com/files/package.json#default-values) . Puede instalar módulos de nodo antes o después de este paso y se agregarán automáticamente a package.json.

1.  Cuando esté listo, cree un nuevo repositorio en github, copie la URL remota e inicie el proyecto localmente haciendo:

`$ git init`

`$ git add .`

`$ git commit -m "initial commit"`

`$ git remote add origin <your github url>`

`$ git push -u origin master`

Consejo: en su archivo server.js, asegúrese de usar `app.listen(process.env.PORT || <default port>)` para que la aplicación funcione en heroku.

Vuelva al paso 7 anterior.