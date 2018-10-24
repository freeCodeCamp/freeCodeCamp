---
title: Hello World In Ionic 
localeTitle: Hola mundo en Ionic
---
# Hola mundo en Ionic !!

### Este es el tutorial que necesitas para hacer un simple programa Hello World en Ionic.

### Pasos

#### 1\. Instala `ionic` , `npm` , `angular` y `cordova` si no está instalado. \[Vea la [primera](https://guide.freecodecamp.org/ionic) introducción para obtener más información\]

```shell
sudo apt-get install nodejs 
 sudo apt-get install npm 
 sudo npm install -g ionic cordova 
```

#### 2\. Crea una carpeta llamada `helloworld`

```shell
ionic start helloworld blank 
```

Nota: Como este es un proyecto pequeño, ingrese No o N cuando se le solicite durante la ejecución del programa.

#### 3\. Cambia el directorio a `helloworld` \[este es su directorio de Ionic\]

```shell
cd helloworld 
```

#### 4\. Abre la carpeta en su editor de texto. Verá varios archivos y subcarpetas.

No entre en pánico, estos archivos se generan automáticamente por npm . Solo ve a `src` -> `page` -> `home` -> `home.html` .

#### 5\. Formato de archivo básico
```
`home.html` es el archivo html  donde podrás escribir tu html .<br/> 
 
 `home.scss` es el archivo css para escribir tu css .<br/> 
 
 `home.ts` es el archivo typescript  para escribir tu código typescript . 
```

#### 6\. Elimina la plantilla y agregua la sintaxis html como se muestra en la imagen.

```html

 <ion-header> 
  <ion-navbar> 
    <ion-title> 
      Ionic Project 
    </ion-title> 
   </ion-navbar> 
  </ion-header> 
 
  <ion-content padding> 
   <h2>Hello World </h2> 
  </ion-content> 
 ``` 
 
 
 #### 7. Guarda el código y ejecuta 
```

Shell Ionic service \`\` \`

#### 8\. Para ver su código, vaya al navegador y abra localhost: 8100 en la url.
