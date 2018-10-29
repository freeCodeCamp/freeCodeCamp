---
title: Setting up Firebase Storage
localeTitle: Configuración de Firebase Storage
---
# Configuración de Firebase Storage

## Prerrequisitos

1.  La última versión de Android Studio
2.  Se ha conectado con Firebase de forma manual o mediante el Asistente de Firebase (consulte [Conexión a Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ).

Se recomienda que lo haga para no confundirse con instrucciones parciales relacionadas con esto en los documentos que se mencionan a continuación.

## Configurándolo con Android Studio

Después de agregar Firebase a su proyecto, tendrá que agregar dependencias adicionales y hacer otras cosas para configurar El almacenamiento Firebase. Hay la siguiente documentación sobre esto:

*   [Base de fuego](https://firebase.google.com/docs/storage/android/start)

Puede haber riesgo de confusión en esa documentación o, si es nuevo en Firebase, es posible que tenga un poco de dificultad para entenderlo. Así que sigue los pasos de belows cuidadosamente:

**Añadir Dependencias de Gradle**

En su archivo build.gradle a nivel de aplicación, agregue lo siguiente

```java
dependencies { 
    implementation 'com.google.firebase:firebase-storage:16.0.2' 
 } 
```

## Instalación de Firebase Android SDK, permisos y código de configuración

Las instrucciones detalladas para estos se pueden encontrar [aquí](https://firebase.google.com/docs/android/setup) .

## Recursos

Para obtener información sobre cómo leer y escribir en el almacenamiento de su aplicación de Android, consulte los documentos que se enumeran a continuación.

*   [Subir archivos desde Android Guía Firebase](https://firebase.google.com/docs/storage/android/upload-files)
    
*   [Descargar archivos a Android Guía Firebase](https://firebase.google.com/docs/storage/android/download-files)
    

## Ejemplos de proyectos de desarrolladores de Firebase

Puede hacer un seguimiento de estos ejemplos de los desarrolladores de Firebase para iniciar el almacenamiento de Firebase. Firebase Quickstart-Android [\-muestra](https://github.com/firebase/quickstart-android/tree/master/storage)

## Nota

Google ahora ha desaprobado "compilar" y, en lugar de eso, debe usar "implementación".