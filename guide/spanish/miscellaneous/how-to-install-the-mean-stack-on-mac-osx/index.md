---
title: How to Install the Mean Stack on Mac Osx
localeTitle: Cómo instalar el Mean Stack en Mac Osx
---
Para instalar MongoDB, debes tener Mac OS X 10.6 (Snow Leopard) o superior. Para averiguar qué versión de OS X tiene, haga clic en el ícono en la esquina superior izquierda de su pantalla y seleccione `About This Mac` .

![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":advertencia:") **ADVERTENCIA: ¡** haga una copia de seguridad de Time Machine antes de realizar cualquiera de los siguientes pasos!

## Paso 1: instalando MongoDB

La forma más fácil de instalar MongoDB en OS X es usar [HomeBrew](http://brew.sh/) . Si no ha usado HomeBrew antes, simplemente ejecute el siguiente comando en una ventana de Terminal:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

Después de instalar HomeBrew correctamente, siga con este comando:
```
brew update && brew install mongodb 
```

HomeBrew instalará automáticamente todas las dependencias para usted.

## Paso 2: instalando Node.js

De nuevo, dejaremos que HomeBrew haga el trabajo pesado:
```
brew install node 
```

El ejecutable npm ya está incluido en el paquete Node.js.

Antes de continuar, asegurémonos de que otros módulos puedan encontrar los módulos de Node.js ( ![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":advertencia:") **PRECAUCIÓN** : es mejor copiar y pegar estos comandos, ya que perdería el contenido original de su archivo `.bashrc` si escribiera `>` en lugar de `>>` ):
```
echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc 
```

Para verificar si la configuración está vigente, ejecute:
```
echo $NODE_PATH 
```

Debería ver `./node_modules:/usr/local/lib/node_modules` impreso debajo de su comando.

Si usa un shell diferente al Bash, simplemente reemplace `~/.bashrc` con su archivo de configuración del shell.

## Paso 3: instalando herramientas fullstack
```
npm install -g express yo grunt grunt-cli generator-angular-fullstack bower 
```

## Paso 4: generando una aplicación fullstack

Haga un directorio para sus proyectos Back End Project. Asumiendo que su escritorio es su espacio de trabajo de facto:
```
mkdir ~/Desktop/Back End Projects && cd ~/Desktop/Back End Projects 
```

Ahora que todos los preparativos están en su lugar, es el momento del evento principal:
```
yo angular-fullstack 
```

Responda las preguntas de acuerdo con los elementos de la lista de verificación \# 13-23 del [Desafío: Prepárese para proyectos de Back-End](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) . Consulte \# 24-27 si encuentra errores. Esto descargará ~ 350 MB de archivos en su directorio actual.

Antes de continuar, debemos solucionar un [problema conocido](https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate) en algunos archivos generados:
```
echo "sed -i '' -e 's/_.merge/_.extend/' server/api/*/*.controller.js" > \ 
 fix-exports-update.sh && chmod +x fix-exports-update.sh && \ 
 ./fix-exports-update.sh 
```

`./fix-exports-update.sh` ejecutar `./fix-exports-update.sh` cada vez que genere un nuevo punto final de API (hasta que solucionen esto en sentido ascendente, es decir).

## Paso 5: inicializando el repositorio local de Git

Dile a Git que no haga un seguimiento de tu base de datos:
```
echo "data" >> .gitignore 
```

Convierta el directorio en el que se encuentra su aplicación en un repositorio Git ejecutando los siguientes comandos:
```
git init && git add . && git commit -am 'initial commit' 
```

## Paso 6: iniciando MongoDB

Para iniciar MongoDB por primera vez en el directorio de su aplicación, ejecute los siguientes comandos en su terminal:
```
mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface' > mongod.sh && chmod a+x mongod.sh && ./mongod.sh 
```

A partir de este punto, simplemente puede iniciar MongoDB ejecutando `./mongod.sh` . Algunas cosas a tener en cuenta:

*   El archivo `.conf` indica a `mongod` que escriba mensajes en un archivo de registro en lugar de en la `mongod` . Para ver el registro, ejecute lo siguiente en una pestaña de Terminal separada: `less /usr/local/var/log/mongodb/mongo.log` .
*   Ya que no estamos en Cloud9, no necesitamos la opción `--nojournal` . El `mongod` en `mongod` le permite recuperar la base de datos en caso de que se `mongod` un fallo de `mongod`
*   Tienes que hacer una base de datos limpia para cada proyecto. Si copió el directorio de `data` de un proyecto anterior, `mongod` no se iniciará. Si ese es el caso, simplemente `rm -rf data && mkdir data && ./mongod.sh` .

## Paso 7: comenzando Grunt

Abra una nueva pestaña de Terminal presionando `⌘T` , y ejecute el siguiente comando:
```
grunt serve 
```

Grunt debería abrir automáticamente la página de índice de su nuevo sitio Angular tan pronto como termine de iniciarse.

Ahora deberías poder seguir el resto de las instrucciones del desafío para empujar a GitHub y Heroku. Simplemente ignore la parte sobre la clave SSH (# 33-36) y reemplace `~/workspace` con la ruta del directorio de su aplicación.

## Nota

Los pasos anteriores fueron probados bajo la siguiente configuración:

*   OS X 10.10.5
*   zsh 5.0.8 (x86\_64-apple-darwin14.3.0)
*   nodo v0.12.7
*   npm 2.11.3