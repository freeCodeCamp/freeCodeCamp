---
title: Setting up Firebase Realtime Database
localeTitle: Configuración de Firebase Realtime Database
---
# Prerrequisitos

1.  La última versión de Android Studio
2.  Se ha conectado con Firebase de forma manual o mediante el Asistente de Firebase (consulte [Conexión a Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ). Se recomienda que lo haga para no confundirse con instrucciones parciales relacionadas con esto en los documentos que se mencionan a continuación.

# Configurándolo con Android Studio

Después de agregar Firebase a su proyecto, tendrá que agregar dependencias adicionales y hacer otras cosas para configurar la base de datos en tiempo real. Hay dos documentaciones sobre esto:

1.  De inicio rápido firebase [docs](https://www.firebase.com/docs/android/quickstart.html)
2.  [Documentos de](https://firebase.google.com/docs/database/android/start/) Google

Hay algunas discrepancias entre los dos. Para compensarlos, puede seguir los documentos de Firebase, pero en lugar de usar las dependencias de gradle que se enumeran allí, use la siguiente lista. De esa manera, no perderá ningún paso de la documentación.

**Añadir Dependencias de Gradle** 1 En su archivo build.gradle a nivel de aplicación, agregue lo siguiente

```java
dependencies { 
    implementation 'com.firebase:firebase-client-android:2.5.2+' 
    implementation 'com.google.firebase:firebase-database:15.0.0' 
 } 
```

# Instalación de Firebase Android SDK, permisos y código de configuración

Las instrucciones detalladas para estos se pueden encontrar [aquí](https://www.firebase.com/docs/android/quickstart.html) .

# Recursos

Para obtener información sobre cómo leer y escribir en la base de datos en su aplicación de Android, consulte los dos documentos que se enumeran en Referencias. También puede encontrar información sobre cómo usar los productos Firebase en la documentación de Google, pero nuevamente es probablemente una buena idea consultar también los documentos de Firebase, o cualquier cosa que pueda ser útil.

# Referencias

*   FIREBASE, _Android Quickstart_ , 17/04/2018, 07/05/2018, https://www.firebase.com/docs/android/quickstart.html
*   GOOGLE, _configura la base de datos en tiempo real de Firebase para Android_ , 05/04/2018, 05/07/2018, https://firebase.google.com/docs/database/android/start/

# Nota

La primera línea proviene de los [documentos de](https://www.firebase.com/docs/android/quickstart.html) Firebase sobre la configuración de db en tiempo real en Android Studio. En los documentos, se usa 'compilar' pero eso está en desuso y reemplazado por 'implementación'. La segunda línea proviene de la [documentación de](https://firebase.google.com/docs/database/android/start/) Google sobre la configuración de db en tiempo real en Android Studio. Si es realmente redundante agregar ambos, corrija este artículo.