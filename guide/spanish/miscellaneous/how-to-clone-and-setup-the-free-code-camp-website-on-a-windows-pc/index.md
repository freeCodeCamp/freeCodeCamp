---
title: How to Clone and Setup the Free Code Camp Website on a Windows Pc
localeTitle: Cómo clonar y configurar el sitio web de Free Code Camp en una PC con Windows
---
Esta lista funciona con el sitio freeCodeCamp y también se ha probado en este [tutorial angular](https://docs.angularjs.org/tutorial) . Configurar el entorno de desarrollo en una PC con Windows es fácil, aunque es probable que dé muchos errores primero en el proceso. Lo importante es corregir estos errores.

## Prerrequisitos

1.  [Git Bash](https://msysgit.github.io/)
2.  [Node.js](https://nodejs.org/)
3.  [MongoDB](https://www.mongodb.org/downloads)
4.  [Python 2.7.10](https://www.python.org/downloads/release/python-2710/)

Descargue e instale los 4 requisitos previos. Al instalar Python y Node, es importante marcar la opción agregar a la variable de ruta. El instalador de Node lo hace por defecto. Es opcional agregar Mongo a la ruta. Python debe instalarse en una subcarpeta en% programfiles%

1.  Abra un símbolo del sistema con derechos de administrador.
    
2.  Verifique que Nodo esté en la ruta ejecutando `node -v`
    
3.  Verifique que npm esté en la ruta ejecutando `npm -v`
    
4.  Ejecuta los siguientes comandos:
    
    ```
    npm install gulp -g 
     npm install node-gyp -g 
    
    ```
    
5.  Si desea ahorrar tiempo en el explorador para encontrar Mongo cuando debe iniciarse, cree un archivo `.cmd` en su escritorio y escriba la ruta a Mongo. Probablemente `%programfiles%\MongoDB\Server\3.0\bin\mongod.exe` .
    
6.  Cree la carpeta predeterminada para que Mongo almacene bases de datos: `C:\data\db`
    

**Los siguientes comandos todos _tienen_ que ser ejecutado en Git Bash**

1.  Sigue las instrucciones aquí en [**freeCodeCamp en Github**](https://github.com/FreeCodeCamp/freecodecamp) y clona el proyecto.
2.  Asegúrate de estar en el directorio que clonaste con GitHub (de manera predeterminada, esto es freecodecamp).
3.  Ejecutar `cp sample.env .env`
4.  Ejecutar `npm install`
5.  Inicie Mongo desde el acceso directo del escritorio y ejecute `npm run only-once` . Ahora debería ver mucha actividad en la ventana donde inició Mongo.
6.  Ejecutar `gulp` . Después de un rato, su versión local de freeCodeCamp debería estar ejecutándose. Puede visitarlo en su navegador en `http://localhost:3000`

Felicidades, has terminado! Si tiene algún problema al configurar su versión local de freeCodeCamp, no dude en comunicarse con [nuestra sala de chat de colaboradores](https://gitter.im/FreeCodeCamp/Contributors) .