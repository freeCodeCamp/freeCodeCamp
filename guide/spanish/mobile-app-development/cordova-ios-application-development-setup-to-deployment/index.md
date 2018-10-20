---
title: Cordova iOS Application Development Setup to Deployment
localeTitle: Instalación de Desarrollo de Aplicaciones Cordova para iOS para Implementación
---
# Instalación de Desarrollo de Aplicaciones Cordova para iOS para Implementación

![iphone_1737513_1920](https://image.ibb.co/iKCSuQ/Xz_J197k8_QI32.jpg)

El desarrollo de aplicaciones híbridas para Android es muy fácil, ya sea para el desarrollo o la configuración de producción, sin embargo, personalmente me parece que la configuración, el desarrollo y la implementación de iOS de Córdoba son un poco complicados.

La mayoría de los desarrolladores de aplicaciones híbridas que están en la etapa de aprendizaje no pueden explorar el proceso de desarrollo de aplicaciones híbridas de iOS debido a la sencilla razón de que no poseen una mac, ya que desarrollar aplicaciones de iOS requiere el SDK de iOS y XCode a diferencia del SDK de Android que se ejecuta en cualquier SO de escritorio. Por lo tanto, el objetivo de esta guía es mostrar el flujo de trabajo básico del desarrollo de aplicaciones híbridas de iOS en una mac, de modo que un desarrollador, incluso si no puede desarrollar aplicaciones de iOS, esté al menos familiarizado con cómo se hace.

## Creando proyecto cordova

Comience abriendo el terminal y creando un nuevo proyecto de cordova (use sudo solo si tiene problemas de permisos, es decir, errores de EACCESS):
```
sudo cordova create iosdemo 
 cd iosdemo 
 sudo cordova platform add ios 
```

En el momento de redactar esta guía, la versión de la plataforma cordova para iOS es: 4.3.1.

No modificaremos ningún código fuente de la aplicación y simplemente continuaremos con el código de muestra predeterminado que cordova agrega automáticamente cuando ejecutamos el comando crear. Sin embargo, se supone que agregaremos complementos para modificar el código en la carpeta `www` durante el flujo de desarrollo normal.

El siguiente paso es ejecutar el comando de compilación de cordova. Esto convertirá nuestro código de aplicación en un archivo .xcodeproj que usaremos a continuación.
```
sudo cordova build ios 
```

El archivo del Proyecto Xcode generado estará en:
```
[Your App Folder]/platforms/ios/[Your App Name].xcodeproj 
```

Ahora, en el caso de Android, la firma del código se realiza mediante el archivo de almacén de claves que está en formato .jks. Sin embargo, en el caso de iOS para distribuir aplicaciones de iOS, es necesario que tenga una cuenta de desarrollador de Apple, Esto es para que podamos generar los _Certificados_ y los _Perfiles de Aprovisionamiento_ requeridos para distribuir la aplicación.

Para conocer los precios de la cuenta de desarrollador, consulte [esta página.](https://developer.apple.com/support/purchase-activation/)

## Creación de certificados de desarrollo

Una vez que tenga la cuenta lista, podemos continuar y acceder a la [cuenta de desarrollador de Apple](https://developer.apple.com/account/)

La pantalla del tablero de mandos debería verse así: ![Proyecto de apertura en Xcode](https://image.ibb.co/j0d8zQ/Clipboard_image_2017_09_18_11_35_58.png)

Haga clic en `Certificates, Identifiers & Profiles` Esto debería llevarlo a la siguiente pantalla, que de manera predeterminada muestra los Certificados emitidos desde su cuenta: ![Certificados, identificadores y perfiles](https://image.ibb.co/fk8mm5/1.png)

Los Certificados de iOS son principalmente de dos tipos: Desarrollo o Distribución, haga clic en el botón Más (+) en la esquina superior derecha de la lista que abrirá la siguiente página: ![Añadir certificado de iOS](https://image.ibb.co/dksXtk/2.png)

Primero vamos a crear un perfil de desarrollo: Seleccione _iOS App Development_ y haga clic en continuar.

Esto debería llevarlo a la siguiente pantalla, donde se le solicita que cree y cargue un archivo de solicitud de firma de certificado o CSR. ![Subir archivo CSR](https://image.ibb.co/iwBE65/3.png)

Siga las instrucciones en pantalla para generarla y continúe. Una vez que el certificado esté listo, descárguelo en su Mac y haga doble clic en él. Esto lo agregará a Keychain Access en la Mac. ![Descargar certificado de desarrollo](https://image.ibb.co/dJg6m5/4.png)

## Creación de certificados de distribución

La creación de certificados de distribución es similar al proceso para crear certificados de desarrollo, Sin embargo, aquí seleccionamos `App Store and Ad Hoc` de la sección de `Production` en la página `Add iOS Certifcate Page`

![Añadir certificado de iOS](https://image.ibb.co/bEKFeQ/5.png)

## Creación de la ID de la aplicación

Seleccione `App IDs` en la sección `Identifiers` , esto abrirá la lista de ID de aplicación existentes, A continuación, haga clic en el botón Más en la parte superior derecha (+). Esto abrirá la página _Registrar IDs de aplicaciones iOS_ .

![Registrar IDs de aplicaciones iOS](https://image.ibb.co/iXTuOk/6.png)

Seleccione ID de aplicación explícita

La descripción de la aplicación puede ser cualquier nombre relacionado que se mostrará en la lista de ID de la aplicación frente a la ID de la aplicación en particular.

Una identificación de aplicación es una cadena en el formato _AB11A1ABCD.com.mycompany.myapp_ donde _AB11A1ABCD_ es el prefijo de identificación de la aplicación, que es por defecto la ID del equipo y _com.mycompany.myapp_ es la ID del paquete que es única para cada aplicación. Se recomienda que la ID del paquete debe estar en una cadena de estilo de nombre de dominio inverso, por ejemplo, la empresa MYCOMPANY puede tener dos aplicaciones (App1 y App2), por lo tanto, la URL http para cada aplicación suele ser app1.mycompany.com y app2.mycompany .com Por lo tanto, los ID de paquete para cada aplicación serán com.mycompany.app1 y com.mycompany.app2

A continuación, seleccione cualquier servicio de la lista de chcek que necesite usar en su aplicación, como notificaciones push, billetera, etc. A continuación, haga clic en continuar y confirme los detalles y finalmente registre el ID de la aplicación.

## Agregar dispositivos a la cuenta de desarrollador

Seleccione la sección `All` `Devices` , esto abrirá la lista de dispositivos ya agregados a su cuenta de desarrollador de Apple, Solo estos dispositivos pueden ejecutar la aplicación durante el desarrollo. Para agregar un nuevo dispositivo Haga clic en el botón Más en la parte superior derecha (+) Se mostrará la siguiente pantalla: ![agregar pantalla de dispositivo](https://image.ibb.co/gTmW3k/8.png)

Aquí el nombre puede ser cualquier ejemplo de nombre fácil de entender, iPhone 5s ABC Pvt Ltd. El UDID del dispositivo es el ID exclusivo asociado con cada dispositivo Apple.

Para encontrar el UDID de un dispositivo, siga los pasos mencionados a continuación: 1) Conecta el dispositivo a tu Mac. 2) Abra la aplicación Información del sistema ubicada en la carpeta / Aplicaciones / Utilidades. 3) Seleccione USB en Hardware en la columna izquierda. 4\_ A la derecha, seleccione el dispositivo conectado en el árbol de dispositivos USB. La ID del dispositivo, o "Número de serie", aparece a continuación.

Una vez que haya ingresado el UDID del dispositivo y el nombre, haga clic en continuar, luego confirme los detalles y regístrese.

## Creación de perfil de aprovisionamiento de desarrollo

Para crear un perfil de aprovisionamiento de desarrollo, haga clic en Perfiles de aprovisionamiento -> Todos Esto debería mostrar todos los perfiles, desarrollo y distribución. A continuación, haga clic en el botón Más en la parte superior derecha (+) Esto debería mostrar la siguiente página: ![Creación de un perfil de aprovisionamiento de desarrollo](https://image.ibb.co/dk3KOk/7.png)

Aquí seleccione `iOS App Development` y haga clic en continuar. En el menú desplegable que se muestra, seleccione la ID de la aplicación que creamos anteriormente y continúe.

A continuación, se muestra una lista de verificación de certificados desde la que podemos seleccionar uno o varios. Estos son certificados de desarrollo y no de distribución. El perfil de aprovisionamiento generado se vinculará a estos certificados.

Al hacer clic en Continuar, se muestra una lista de verificación de dispositivos, seleccione uno, múltiplos o todos. Solo los dispositivos seleccionados podrán ejecutar la aplicación utilizando este perfil de aprovisionamiento.

Luego, al hacer clic en continuar, ingrese el nombre para el perfil de aprovisionamiento y descargue el archivo .mobileprovision generado.

## Creación de un perfil de distribución de distribución ad hoc

Este proceso es el mismo que la creación del perfil de desarrollo.

## Creación del perfil de aprovisionamiento de distribución de AppStore

Este proceso es el mismo que el de la Creación del perfil de desarrollo, excepto que aquí no seleccionamos dispositivos, ya que la aplicación estará disponible públicamente a través de AppStore.

Ahora que tenemos todo lo que necesitamos, podemos continuar generando el ipa real utilizando Xcode.

_Nota: el comando de compilación de cordova convierte nuestro código de aplicación al proyecto xcode, utilizando Xcode creamos un archivo .ipa que es la aplicación real que se instalará._

* * *

Antes de avanzar, toque dos veces los Certificados para agregarlos al llavero

## Continuando en Xcode

A continuación, toque dos veces el archivo .xcodeproj que debería abrirlo en Xcode. (Por favor use la última versión de Xcode, he usado Xcode 8.3.2)

![Proyecto de apertura en Xcode](https://image.ibb.co/mPdGKQ/Screen_Shot_2017_09_18_at_11_06_55_AM.png) La pantalla de Xcode debería verse algo como esto.

Haga clic en el nombre de la aplicación en la esquina superior izquierda de la ventana, esto abrirá la vista detallada en el lado derecho. ![Ajustes del proyecto](https://image.ibb.co/fqb3ZQ/Screen_Shot_2017_09_18_at_5_07_53_PM.png)

Luego haga clic en Objetivos-> Nombre de la aplicación

![objetivos](https://image.ibb.co/i0znTk/Screen_Shot_2017_09_18_at_5_11_28_PM.png)

Esto mostrará la siguiente pestaña de detalles: ![detalles del objetivo](https://image.ibb.co/ksBj8k/Screen_Shot_2017_09_18_at_5_15_29_PM.png)

Clik en general, que debe mostrar: ![Detalles generales](https://image.ibb.co/k8KFEQ/Screen_Shot_2017_09_18_at_5_18_29_PM.png)

Desmarque la casilla de verificación Gestionar automáticamente firma

Esto debería mostrar el siguiente error, indicando que AppNAme requiere un perfil de aprovisionamiento ![error de perfil](https://image.ibb.co/mDq5EQ/Screen_Shot_2017_09_18_at_5_20_35_PM.png)

A continuación, en Firma (depuración), haga clic en el menú desplegable Perfil de aprovisionamiento y seleccione la opción de _perfil de impot_ . En el cuadro de diálogo de selección de archivos que aparece, navegue hasta la ruta donde se descarga el perfil de desarrollo del desarrollo y selecciónelo. Tendrá una extensión de _.mobileprovision_

Después de la selección, el error debe desaparecer y debe mostrarse Equipo como Nombre del equipo en la cuenta de desarrollador de Apple y Nombre del certificado de firma.

Haga lo mismo para la sección Firma (Liberación), sin embargo, en el cuadro de diálogo de selección de archivos, seleccione el Perfil de distribución Ad Hoc.

Ahora que los pasos para firmar el Código están listos, o bien

*   ejecuta la aplicación directamente en el dispositivo
*   ejecuta la aplicación en un simulador
*   generar un archivo ipa para su distribución
*   subir la aplicación a la appstore

## Ejecutando la aplicación directamente en el dispositivo

Para ejecutar la aplicación en el dispositivo, conecte el dispositivo a la Mac a través de USB, luego, en la esquina superior izquierda de la lista de dispositivos, seleccione el dispositivo conectado y haga clic en el botón Ejecutar o Reproducir (botón triangular negro) ![ejecutar dispositivo](https://image.ibb.co/k4xo15/Screen_Shot_2017_09_18_at_5_34_14_PM.png) ![ejecutar dispositivo](https://image.ibb.co/hjzhuQ/Screen_Shot_2017_09_18_at_5_36_55_PM.png)

El estado de compilación se mostrará en la barra de estado en la parte superior de la ventana. Si todo va bien, la aplicación debe instalarse en el dispositivo y cargarse automáticamente por un tiempo.

## Ejecutando la aplicación en un simulador

Los pasos son los mismos que los que se ejecutan en el dispositivo, pero en lugar de un dispositivo real, utilizamos los simuladores de iPhone y iPad disponibles de la lista de dispositivos.

## Generar un archivo ipa para su distribución.

Este enfoque se puede hacer en caso de que necesite distribuir la aplicación al equipo de prueba, etc. Sin embargo, el dispositivo utilizado por ellos debe tener un UDID presente en el perfil de aprovisionamiento.

En el menú Xcode, seleccione `Product` -> `Clean` , Entonces `Product` -> `Archive` , Aparece el organizador de Archivos y muestra el nuevo archivo. ![organizador de archivos ios](https://image.ibb.co/iunfMG/6_ios_archive_organizer_2x.png) En el panel lateral derecho, seleccione la opción Exportar, aparecerá una lista de opciones.

Para distribuir su aplicación a los usuarios con dispositivos designados, seleccione "Guardar para Implementación Ad Hoc". La aplicación será un código firmado con el certificado de distribución.

Para distribuir su aplicación para pruebas internas, seleccione "Guardar para implementación de desarrollo". La aplicación será un código firmado con su certificado de desarrollo. ![organizador de archivos ios exportar como ad hoc](https://image.ibb.co/jQJLMG/6_ios_createappstorepackage_1_2x.png)

En el cuadro de diálogo que aparece, elija un equipo en el menú emergente y haga clic en Elegir. ![ios export select team](https://image.ibb.co/gH2VMG/6_ios_export_choose_team_2x.png)

A continuación, aparecerá el cuadro de diálogo de selección de dispositivos. Seleccione _Todos los dispositivos_ o _dispositivos específicos,_ haga clic en siguiente.

A continuación se muestra el diálogo de revisión, Aquí se mostrará el certificado de firma y el perfil de aprovisionamiento utilizados para generar la compilación. Revisa y haz click en siguiente. Finalmente, se muestra el archivo Guardar como emergente para seleccionar la ubicación en el sistema de archivos para almacenar el archivo de aplicación exportado.

La aplicación se exporta como archivo \`\` .ipa\`\`\`.

Para ejecutar este archivo en el dispositivo, simplemente tóquelo dos veces para abrirlo en iTunes.

Luego, conecte su dispositivo (Esto debería mostrar un pequeño icono de dispositivo en la esquina superior izquierda de la ventana de iTunes) Al tocarlo se mostrará el resumen del dispositivo, como aplicaciones, música, etc. en el dispositivo. Seleccione la pestaña de aplicaciones, en el panel izquierdo, seleccione la aplicación que desea instalar y haga clic en instalar. Espere a que se complete el proceso y haga clic en Aplicar, Esto debería instalar el archivo ipa en su dispositivo.

Para depurar la aplicación: 1) Safari abierto, 2) abrir la aplicación en el dispositivo 3) En la barra de menú de Safari, seleccione `Develop --> Your Device Name --> Your App` .

## Eso es todo amigos !!!