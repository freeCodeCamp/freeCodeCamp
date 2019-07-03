---
title: Storing Mongo Username  Password Persistently Using Dotenv
localeTitle: Almacenamiento de la contraseña del nombre de usuario de Mongo de forma persistente usando Dotenv
---
## Almacenamiento de información segura para aplicaciones con dotenv

Este artículo trata sobre cómo guardar la información de las credenciales de nombre de usuario y contraseña para el acceso seguro a la base de datos en sitios de terceros como mLab en su entorno de prueba local para protegerlos de cualquier persona que busque en su repositorio público en un sitio como github.

La información segura o privada nunca debe almacenarse dentro de su código y enviarse a un repositorio, ya que estaría expuesta públicamente, lo que pone su información en riesgo y lo pone en riesgo de perder el acceso a la API o la base de datos si alguien usa sus credenciales de manera fraudulenta.

[Este artículo de la wiki](//forum.freecodecamp.com/t/guide-for-using-mongodb-and-deploying-to-heroku/19347/3) explica cómo proteger sus credenciales con el comando de exportación, pero para hacer que estas variables sean persistentes, tiene dos opciones. Sin embargo, las variables de activación establecidas de esta manera se borran cada vez que se reinicia el shell, como cuando apaga su computadora y se reinicia para una nueva sesión de codificación.

Tendría que seguir todos los pasos nuevamente para establecer sus variables de entorno cada vez que inicie un nuevo shell de terminal. Esto significa que necesitará almacenar sus credenciales en un archivo de texto en algún lugar, o seguir buscando en su cuenta de terceros (como mLab).

Hacer esto cada vez que inicie una nueva sesión se vuelve tedioso, y en lugar de almacenarlos en el código en el que es fácil de encontrar, le mostraré una forma de usar el archivo de texto e importar sus credenciales.

La primera opción es usar su perfil de shell y exportar estas variables cada vez que inicie un nuevo terminal. Sin embargo, durante algunas semanas de desarrollo de nuevas aplicaciones y proyectos, su perfil de shell se atascará con una lista masiva de variables que no necesitará en cada sesión. Solo necesita las credenciales para la aplicación en la que está trabajando actualmente.

## Limpiando un repositorio de git que contiene credenciales seguras

Si ya ha presionado su repositorio a github con sus credenciales almacenadas en el código base, simplemente eliminándolas y presionándolas nuevamente no ayudará, porque sus credenciales se almacenan en su historial, que también es visible para el público. Si este es el caso, usa estos comandos para restablecer tu repositorio git y borrar tu historial.

**Primero,** borre su repositorio de github. Vas a crear una nueva cuando estemos listos.

**Segundo,** elimine su repositorio local de git de su directorio de trabajo.  
\-Cambiar directorios a su directorio de trabajo. Tu archivo .git repo debería estar aquí.  
CUIDADO: el uso de la marca -rf puede eliminar todo el disco duro si no se usa correctamente. Utilizo el indicador -i, que significa interactivo para estar seguro de que estoy EN el directorio correcto. Después de revisar algunos archivos y estoy 100% seguro de que estoy en el lugar correcto, mataré ese comando y lo ejecutaré nuevamente sin la marca -i. Haga lo que le resulte más cómodo, pero se recomienda tener una copia de seguridad completa de su computadora (en más de un lugar) antes de ejecutar un comando -rm.
```
cd <project-name> 
 rm -i -rf .git 
```

**Tercero,** asegúrese de actualizar su archivo .gitignore para incluir el archivo .env además de cualquier otra carpeta que desee mantener en privado. Los archivos IDE locales, como .idea / si, por ejemplo, utilizan Jetbrains, podrían estar en este archivo. Mi archivo .gitignore se ve así. Tenga en cuenta que puede agregar una carpeta o un archivo aquí antes de que se cree sin causar ningún error.

`.gitignore`  
nodo\_módulos  
.env  
datos/  
.idea/

**Finalmente** crea un nuevo repositorio. Ahora está listo para continuar creando su archivo .env y empujando su repositorio de manera segura a github y manteniendo seguras sus credenciales.

`git init`

## Cómo usar dotenv en tu aplicación local

Aquí es donde el módulo de nodo dotenv puede ayudar. Para usar dotenv, debe exigirlo en el código de su aplicación, llame a la función config () que extrae sus credenciales de un archivo almacenado localmente en su computadora. Este archivo se llama `.env`

**Paso 1:** Crea un archivo .env y almacena tus variables en él.  
`MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

**Paso 2:** Requiere dotenv en tu aplicación principal  
en tu `app.js` principal (o como se llame)  
`var dotenv = require('dotenv');`

**Paso 3:** Llama a la función de configuración en tu variable. (tenga en cuenta que todo esto se puede hacer en una línea mediante el encadenamiento, pero me gusta ver que esto ocurra como una actividad separada).  
`dotenv.config();`

**Paso 4:** configura tu URL mongodb llamando a tus procesos variables:  
`var url = process.env.MONGOLAB_URI;`

Esta solución mantiene su código limpio de las credenciales seguras que no desea enviar a un repositorio público, mientras mantiene cada aplicación perfectamente organizada y ahorra tiempo durante el desarrollo.

**Referencias:**

[osxdaily.com](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/)

! \[\] (http://cdn.osxdaily.com/wp-content/uploads/2014/08/terminal-icon-osx.png) ### [Dónde establecer las variables de entorno en Mac OS X](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/) En la línea de comandos, las variables de entorno se definen para el shell actual y se heredan por cualquier comando o proceso en ejecución. Pueden determinar cualquier cosa desde el shell predeterminado, el PATH, ...

[stackoverflow.com](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

[! \[Drake Main](https://cdn-media-1.freecodecamp.org/imgr/jRaTj.jpg) \] (http://stackoverflow.com/users/4956243/drake-main) #### [Práctica recomendada al usar una clave API en Node.js](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

\*\* node.js, api-key \*\*

Preguntado por [Drake Main](http://stackoverflow.com/users/4956243/drake-main) en [07:05 AM - 12 Feb 16](http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js)

[stackoverflow.com](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)

[! \[Peiniau](https://www.gravatar.com/avatar/9db1745a666cface1731c12d54e189e6?s=128&d=identicon&r=PG) \] (http://stackoverflow.com/users/105813/peiniau) #### [¿Cómo eliminar completamente un repositorio git creado con init?](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)

\*\* git, git-init \*\*

Preguntado por [Peiniau](http://stackoverflow.com/users/105813/peiniau) el [04:06 PM - 31 Jul 09](http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init)