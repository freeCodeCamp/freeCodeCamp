---
title: Deploying to Openshift
localeTitle: Desplegando a Openshift
---
Si implementa sus aplicaciones en Heroku, solo puede cargar 5 aplicaciones; si desea implementar una nueva, debe verificar su cuenta con su tarjeta de crédito.

![Error Heroku](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

Estos son los pasos que debe seguir para implementarse en [OpenShift](https://www.openshift.com/app/account/new) .

## Requerimientos

*   Una cuenta en [OpenShift](https://www.openshift.com/app/account/new)
*   Nuestra aplicación en un repositorio [Git](//forum.freecodecamp.com/t/wiki-git-resources/13136)

## Cambios en tu código

*   `app.listen` con `process.env.OPENSHIFT_NODEJS_PORT` y `process.env.OPENSHIFT_NODEJS_IP` , ambos requieren.
*   En su **package.json** configure su `"main": 'yourMainFile.js` y `"script": { "start": "node yourMainFile.js" }`

## Desplegando nuestra aplicación

*   [Añadir una nueva aplicación](https://openshift.redhat.com/app/console/application_types)

![Elige un cartucho de programación web.](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   Elija un nombre (la segunda entrada será la misma para todas sus aplicaciones)

El ![Rellena nuestro nombre y nuestro dominio.](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg)

*   Rellena nuestra URL de Git y el nombre de nuestra rama

![Donde puedes encontrar tu URL de Git y el nombre de tu sucursal en Github](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg)

![Rellena tu URL de Git y el nombre de tu rama](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   "Crear aplicación". Tomará un poco de tiempo

![Será redirigido aquí cuando termine la implementación](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg)

*   Ingrese a "Aplicación", luego ingrese a su aplicación y verifique que haya comenzado.

![Tu lista de aplicaciones](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg)

![Detalles de su aplicación](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg)

## Variables de entorno

En mi caso, tengo mi base de datos en mLab, por lo que necesito crear algunas variables de entorno.

*   [Instala Ruby y Rhc.](https://developers.openshift.com/getting-started/windows.html#client-tools)

**rhc** solo funciona con las versiones 1.9.3 y 2.0.0 de Ruby.

*   [Configuración de su máquina](https://developers.openshift.com/getting-started/windows.html#rhc-setup)

Si tiene problemas con la configuración de `rhc` , intente [esta](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import) respuesta en StackOverflow.

*   [Variables de entorno personalizadas](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name` .

Necesitas reiniciar tu aplicación para cargar las variables.

Si encuentras una manera mejor de resolver esta limitación. Siéntase libre de contribuir a nuestro Wiki y compartirlo con nosotros.

Puede verificar que la aplicación funcione en [http://voting-pitazo.rhcloud.com/#/polls](http://voting-pitazo.rhcloud.com/#/polls)