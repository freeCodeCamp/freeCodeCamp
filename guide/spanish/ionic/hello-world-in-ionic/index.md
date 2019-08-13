---
title: Hello World In Ionic 
localeTitle: Hola mundo en Ionic
---
# Hola mundo en Ionic !!

### Este es el tutorial que lo guiará para hacer un simple programa Hola Mundo en Ionic.

### Pasos

#### 1\. Instale `ionic` , `npm` , `angular` y `cordova` si no está instalado. \[Vea la [primera](https://guide.freecodecamp.org/ionic) introducción para obtener más información\]

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

#### 3\. Cambie el directorio a `helloworld` \[este es su directorio iónico\]

```shell
cd helloworld 
```

#### 4\. Abra la carpeta en su editor de texto. Verá varios archivos y subcarpetas.

No entre en pánico, estos archivos se generan automáticamente por npm para usted. Solo vaya a `src` -> `page` -> `home` -> `home.html` .

#### 5\. Formato de archivo básico
```
`home.html` Es la página html donde puede escribir código con notacion html.<br/> 
 
 `home.scss` Es la página css donde puede escribir código con sintaxis css.<br/> 
 
 `home.ts` es la pagina typescript donde puede escribir codigo typescript. 
```

#### 6\. Elimine la plantilla y agregue la sintaxis html como se muestra en la imagen.

```html

 <ion-header> 
  <ion-navbar> 
    <ion-title> 
      Proyecto de Ionic 
    </ion-title> 
   </ion-navbar> 
  </ion-header> 
 
  <ion-content padding> 
   <h2>Hola Mundo</h2> 
  </ion-content> 
 ``` 
 
 
 #### 7. Guardar el código y ejecutar
```

ionic serve
```

 #### 8\. Para ver su código ejecutándose, vaya al navegador y abra localhost: 8100 en la url.
