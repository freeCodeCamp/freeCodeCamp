---
title: Hello World In Ionic 
localeTitle: Hola mundo en Ionic
---
# Hola mundo en Ionic !!

### Esta es una guía que le llevará a crear un simple programa Hello World en Ionic.

### Pasos

#### 1. Instale `ionic` , `npm` , `angular` y `cordova` si no está instalado. \[Vea la [primera](https://guide.freecodecamp.org/ionic) introducción para obtener más información\]

```shell
sudo apt-get install nodejs 
 sudo apt-get install npm 
 sudo npm install -g ionic cordova 
```

#### 2. Crea una carpeta llamada `helloworld`

```shell
ionic start helloworld blank 
```

Nota: Como este es un proyecto pequeño, ingrese No o N cuando se le solicite durante la ejecución del programa.

#### 3. Cambie el directorio a `helloworld` \[este es su directorio de Ionic\]

```shell
cd helloworld 
```

#### 4. Abra la carpeta en su editor de texto. Verá varios archivos y subcarpetas.

No entre en pánico, estos archivos se generan automáticamente por npm para usted. Solo vaya a `src` -> `page` -> `home` -> `home.html` .

#### 5. Formato de archivo básico
```
`home.html` es la página html donde puede escribir sintaxis html.<br/> 
 
 `home.scss` es la página css donde escribir código de estilos css<br/> 
 
 `home.ts` es el fichero typescript donde escribir lógica en typescript. 
```

#### 6. Elimine la plantilla y agregue la sintaxis html como se muestra en la imagen.

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
 
 
 #### 7. Guarde el código y lance la aplicación

```shell
ionic serve
```

#### 8. Para ver su código ejecutándose, vaya al navegador y abra localhost:8100 en la url.



