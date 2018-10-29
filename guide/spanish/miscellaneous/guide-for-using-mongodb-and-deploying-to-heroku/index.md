---
title: Guide for Using MongoDB and Deploying to Heroku
localeTitle: Guía para usar MongoDB y desplegar en Heroku
---
En esta guía, veamos cómo trabajar con MongoDB localmente y con `mLab` para implementarlo en Heroku. Alternativamente, también puede usar el complemento `mLab` en Heroku, es gratis pero puede requerir los datos de su tarjeta de crédito. Por lo tanto, si no está interesado en proporcionar los detalles de su tarjeta de crédito, puede ir al [sitio](https://mlab.com) web de [mLab](https://mlab.com) .

## Configuración de una cuenta gratuita en Heroku y `mLab` :

Regístrate para [Heroku](https://signup.heroku.com/) y [mLab](https://mlab.com/signup/)

## A partir de su Mongodb (localmente):

Para iniciar su base de datos en su propio sistema, ejecute el siguiente comando:
```
# Create a directory named 'data' if it doesn't exist 
 $ mongod --port 27017 --dbpath=./data 
```

Ahora tu Db esta corriendo a

`mongodb://localhost:27017/my_database_name`

Si está utilizando c9 y si tiene problemas para iniciar su DB en C9, consulte esta [página](https://community.c9.io/t/setting-up-mongodb/1717)

## Comenzando su Mongodb ( `mLab` ):

1.  Después de crear su cuenta de `mLab` , haga clic en el botón **Crear nuevo** y seleccione Nodo único -> Caja de arena para obtener la base de datos gratuita y asigne un nombre a su base de datos (para este ejemplo, he creado una base de datos denominada "comida").
2.  Ahora se crea una base de datos con el nombre 'comida'. Puedes crear una nueva colección por tu cuenta.
3.  Finalmente, agregue un usuario / usuarios que puedan acceder a esta base de datos. Mientras agrega un usuario, le pedirá el nombre de usuario y la contraseña que se utilizan para acceder a la base de datos.

Ahora su base de datos se está ejecutando en url algo como esto -

`mongodb://username:password@ds01316.mlab.com:1316/food`

donde nombre de usuario y contraseña son los detalles que proporcionó cuando agregó un usuario.

Puede encontrar su URL de [_base de datos_](https://mlab.com/databases/your_database_name) en [https://mlab.com/databases/your nombre de la _base de datos_](https://mlab.com/databases/your_database_name)

## Estableciendo una conexión con MongoDB en Node.js (mientras DB se ejecuta en su sistema local):

Para trabajar con la base de datos, primero debe crear una conexión. En esta sección, usaremos el controlador Node.js nativo de MongoDB para crear la conexión con el servidor MongoDB. Para instalar los controladores nativos de mongodb, use el comando npm para instalar el módulo mongodb. Después de eso, ejecute el siguiente comando en el directorio de su proyecto.

`npm install mongodb`

Código básico para conectarse a MongoDB
```
//lets require/import the mongodb native drivers. 
 var mongodb = require('mongodb'); 
 
 //We need to work with "MongoClient" interface in order to connect to a mongodb server. 
 var MongoClient = mongodb.MongoClient; 
 
 // Connection URL. This is where your mongodb server is running. 
 
 //(Focus on This Variable) 
 var url = 'mongodb://localhost:27017/my_database_name'; 
 //(Focus on This Variable) 
 
 // Use connect method to connect to the Server 
  MongoClient.connect(url, function (err, db) { 
  if (err) { 
    console.log('Unable to connect to the mongoDB server. Error:', err); 
  } else { 
    console.log('Connection established to', url); 
 
    // do some work here with the database. 
 
    //Close connection 
    db.close(); 
  } 
 }); 
```

Para más ejemplos para trabajar con MongoDB puede consultar este [blog.](http://blog.modulus.io/mongodb-tutorial)

Necesitamos saber dónde se está ejecutando nuestro servidor mongodb. La url representa la ubicación donde se ejecuta la instancia del servidor mongodb, de modo que podamos conectarnos a ella. La url contiene el nombre de la base de datos a la que pretendemos conectar.

Suponiendo que su base de datos se está ejecutando en la URL mencionada anteriormente, concentrémonos ahora en la URL que conecta la base de datos (local)

`var url = 'mongodb://localhost:27017/my_database_name';`

### Estableciendo una conexión con MongoDB en Node.js (mientras DB se está ejecutando en su `mLab` ):

La url para conectar a `mLab` DB se ve así

`var url = 'mongodb://username:password@ds01316.mlab.com:1316/food';`

Puede reemplazar la variable url con esto y todo funcionará exactamente como debe ser y, finalmente, su base de datos estará segura en `mLab` donde podrá ver sus colecciones, usuarios, copias de seguridad, etc.

### Nota IMPORTANTE:

Pero Comprometerse su nombre de usuario y contraseña para tu repositorio público a veces es muy peligroso por lo que nunca cometen ellos en repositorios públicos, su lugar se puede utilizar variables de entorno para almacenar la URL (que contiene nombre de usuario y contraseña), para hacer esto en el sistema **local**

Para usuarios de Mac / Linux, simplemente puede escribir:

`export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

Para usuarios de Windows:

`SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

Después de configurar las variables de entorno, debe llamar la variable de entorno a su código. Puedes hacerlo escribiendo esto

`var url = process.env.MONGOLAB_URI;`

Ahora su URL de MongoDb se inserta en su código de forma segura. Ahora puedes cometerlo y desplegarlo en tu heroku.

Si necesita más ayuda sobre cómo implementar en Heroku, puede consultar esta [Wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Heroku-Deployment-Guide)

## Pasos finales:

Después de implementar su código en su aplicación Heroku, debe configurar la variable de entorno para el código en heroku.

Para hacer esto, necesita ejecutar el siguiente comando desde su control remoto de Heroku,

`heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

Eso es todo, su aplicación ahora se implementó con éxito en heroku con `mLab` DB