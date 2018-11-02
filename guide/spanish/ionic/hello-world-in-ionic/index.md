---
title: Hello World In Ionic 
localeTitle: Hola mundo en jónico
---
# Hola mundo en jónico !!

### Este es el editorial que lo revisará para hacer un simple programa Hello World en Ionic.

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
`home.html` is the html page where you can write html syntax.<br/> 
 
 `home.scss` is the css page to write css syntax.<br/> 
 
 `home.ts` is the typescript page to write typescript code. 
```

#### 6\. Elimine la plantilla y agregue la sintaxis html como se muestra en la imagen.

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
 
 
 #### 7. Save the code and run 
```

cáscara servicio iónico \`\` \`

#### 8\. Para ver su código ejecutándose, vaya al navegador y abra localhost: 8100 en la url.