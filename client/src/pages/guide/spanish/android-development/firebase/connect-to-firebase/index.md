---
title: connecting-to-firebase
localeTitle: conexión a base de fuego
---
# Prerrequisitos

1.  La última versión de Android Studio

La forma más fácil de conectarse a firebase es usar el asistente de firebase.

# 1\. Conexión utilizando el Asistente Firebase

1.  Crea una cuenta en la [Consola Firebase](https://console.firebase.google.com) . Haga clic en Agregar proyecto para agregar su proyecto de Android Studio.
    
2.  Instalar el repositorio de Google Puede hacer esto agregando la dependencia a su archivo build.gradle a nivel de proyecto de esta manera:
    

```java
allprojects{ 
  repositories { 
        maven { 
            url "https://maven.google.com" // Google's Maven repository 
        } 
    } 
 } 
```

Alternativamente, puedes hacerlo [usando la GUI](https://developer.android.com/studio/write/firebase) .

3.  Vaya a Herramientas> Firebase y seleccione Conectar a Firebase

Si desea conectarse a firebase manualmente, las instrucciones detalladas están disponibles [aquí](https://firebase.google.com/docs/android/setup) . Una vez que haya conectado su proyecto de Android Studio a Firebase, puede:

1.  haga clic en un producto en el asistente de base de fuego y diríjase a los documentos de Google donde se le indicará cómo proceder
2.  vaya al producto deseado en la **Descripción del proyecto** en la consola y haga clic en **Comenzar**
3.  [Vaya a los documentos de Firebase](https://www.firebase.com/docs/android/quickstart.html) para ver cómo configurar productos individuales en su proyecto

Leer una combinación de los tres le permitirá configurar el producto, que incluye agregar dependencias adecuadas a su archivo build.gradle.

**Si te encuentras Gradle Sync** Intente cambiar la versión de Firebase-core o la versión de Firebase-database