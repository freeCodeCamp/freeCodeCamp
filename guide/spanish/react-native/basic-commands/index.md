---
title: Basic Commands
localeTitle: Comandos básicos
---
## Comandos básicos

Aquí encontrará una lista de comandos básicos para comenzar a desarrollar aplicaciones iOS y Android utilizando React Native. Si aún no lo tiene instalado, le recomendamos que siga la [guía oficial](https://facebook.github.io/react-native/docs/getting-started.html) .

### Comenzando un nuevo proyecto

Hay diferentes maneras en que puede arrancar una aplicación nativa de reacción. Puede usar **Expo** o `create-react-native-app` (que a su vez usa Expo-Cli) para comenzar su nuevo proyecto, pero con este método usted tiene más control de lo que sucedió en su proyecto y puede comunicarse, modificar y escribir su Módulos propios con librerías nativas para plataforma móvil iOS y Android.
```
react-native init [PROJECT-NAME] 
 cd [PROJECT-NAME] 
```

**Ejecutar aplicación en el emulador de Android**

Este comando se explica por sí mismo y, como dice, iniciará el emulador de Android e instalará la aplicación que acaba de crear. Debe estar en la raíz del proyecto para ejecutar este comando.
```
react-native run-android 
```

**Ejecutar aplicación en el emulador de iOS**

Este comando hace exactamente lo mismo que `react-native run-android` pero en lugar del emulador de Android, abre el simulador de iPhone.
```
react-native run-ios 
```

**Vincular dependencias a proyectos nativos.**

Algunas bibliotecas tienen dependencias que deben vincularse en el código nativo generado para React Native. Si algo no funciona después de instalar una nueva biblioteca, quizás se deba a que omite este paso.
```
react-native link [LIBRARY-NAME] 
```

**Paquete claro**

Si algo no se ejecuta como se esperaba, tal vez necesite borrar y crear un nuevo paquete con este comando.
```
watchman watch-del-all 
```

**Decoradores de apoyo**

JSX no admite decoradores de forma predeterminada, por lo que necesita instalar el complemento de **Babel** para que funcione.
```
npm install babel-plugin-transform-decorators-legacy --save 
 npm install babel-plugin-transform-class-properties --save 
```

### Exportar APK para ejecutar en dispositivo

Con los siguientes comandos tendrá una apk sin firmar para que pueda instalar y compartir con sus colegas para realizar pruebas. Solo recuerda que esta apk no está lista para subir a la App Store o la producción. Encontrarás tu apk nuevo en _android / app / build / output / apk / app-debug.apk_

**1\. Bundle debug build**
```
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug 
```

**2\. Crear compilación de depuración**
```
cd android 
 ./gradlew assembleDebug 

```