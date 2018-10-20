---
title: Windows Command Prompt
localeTitle: Consola de comandos de Windows
---
# Usando la consola de comandos en Windows

Windows, MacOS y Linux tienen interfaces de línea de comandos. La línea de comando predeterminada de Windows es la consola de comandos. La consola de comandos permite a los usuarios utilizar su computadora sin señalar y hacer clic con el mouse. La consola de comandos es una pantalla negra donde los usuarios escriben comandos para usar su computadora. Las mismas tareas que se pueden hacer apuntando y haciendo clic con el mouse también se pueden hacer con la consola de comandos. La diferencia es que muchas tareas, como crear carpetas y eliminar archivos, se pueden hacer más rápido en la consola de comandos. Además, les permite a los usuarios configurar su computadora y ejecutar programas que de otra manera no podrían hacer al señalar y hacer clic.

## Abrir la consola de comandos

Para acceder la consola de comandos, haga clic en el menú de inicio de Windows en la barra de herramientas del escritorio (también puede presionar el botón de Windows en su teclado) y escriba `cmd` y presione `enter` . Aparecerá la consola de comandos, se mostrará un texto similar al siguiente:
```
C:\Usuarios\TuNombreDeUsuario>
```

## Navegando directorios (carpetas)
El nombre del directorio (directorio es otra forma de decir carpeta) de trabajo actual es `C:\Usuarios\SuNombreDeUsuario`. Es como una dirección de una casa que te dice donde estas en tu computadora. El directorio de trabajo actual puede ser un guía a medida que navegas a través de tu computadora. A la derecha de la `>` podemos ingresar `cd`, que significa Cambiar de Directorio, y el nombre del directorio al cual quieres navegar. En este caso vamos a ingresar `Documentos`. Ingresa `cd Documentos` y el directorio de trabajo actual debería de verse de la siguiente manera:
```
C:\Usuarios\TuNombreDeUsuario\Documentos>
```

Para navegar hacia un directorio atrás ingresa `cd..`. El directorio de trabajo actual debería regresar a: 
```
C:\Usuarios\TuNombreDeUsuario>
```

Con los comandos `cd` y `cd ..` puedes moverte para adelante y para atrás a través de los directorios. Esto puede parecer bastante básico al principio, pero a medida que aprendas mas comandos, la consola de comandos poco a poco se convertirá en una herramienta útil y eficaz. 
 
## Aqui hay una lista de los comandos más comunes: 
 | Comando | Descripción  | 
 |---------|--------------| 
 |`help`   |Lista los comandos que pueden ser usados| 
 |  `dir`  |Lista los contenidos del actual directorio| 
 |`dir /a` |Muestra archivos ocultos| 
 | `mkdir` |Crea un nuevo directorio| 
 | `rmdir` |Borra un directorio (si esta vacío)| 
 | `rmdir /s`|Borra un directorio y sus contenidos|
 | `cls`  |Limpia la pantalla de la consola de comandos| 
 | `exit`|Cierra la consola de comandos|
 
## Ejemplos de uso: 
#### Creando un directorio 
```
mkdir nombre_del_directorio_que_quieres_crear
```
#### Obteniendo información de un comando
```
tu_comando ?
```
#### Borrando un directorio y sus contenidos 
```
rm /s nombre_del_directorio_que_deseas_eliminar
```

## Consejos útiles:

*   El comando `Ipconfig` muestra la dirección IP de su computadora
*   Si escribe parte del nombre de un directorio y presiona la tecla de `tab` la consola de comandos lo completará automáticamente y si presiona la tecla de `tab` repetidamente, recorrerá los directorios que comienzan con la misma letra
*   Puedes usar otros shells o herramientas como git bash o cmder para agregar más comandos y funcionalidad a tu consola de comandos.
*   Algunas tareas requieren que ejecutes la consola de comandos como administrador, haz clic en el botón de Windows y escribe `cmd admin` y presiona la tecla `enter`.
*   Si conoces la ruta a un archivo o directorio, puedes escribir `cd RUTA_A_TU_DIRECTORIO` en lugar de cambiar directorios varias veces para llegar a un directorio o archivo.
*   Cuando presionas la tecla de flecha hacia arriba, aparecerá el comando previamente ingresado y si la presionas repetidamente, pasarás por todos los comandos ingresados anteriormente.
