---
title: Windows Command Prompt
localeTitle: Símbolo del sistema de Windows
---# Usando el símbolo del sistema en Windows

Windows, MacOS y Linux tienen interfaces de línea de comandos. La línea de comando predeterminada de Windows es el símbolo del sistema. El símbolo del sistema permite a los usuarios utilizar su computadora sin señalar y hacer clic con el mouse. El símbolo del sistema es una pantalla negra donde los usuarios escriben comandos para usar su computadora. Las mismas tareas que se pueden hacer apuntando y haciendo clic con el mouse también se pueden hacer con el símbolo del sistema. La diferencia es que muchas tareas, como crear carpetas y eliminar archivos, se pueden hacer más rápido en el símbolo del sistema. Además, les permite a los usuarios configurar su computadora y ejecutar programas que de otra manera no podrían hacer al señalar y hacer clic.

## Abrir el símbolo del sistema

Para acceder al símbolo del sistema, haga clic en el menú de inicio de Windows en la barra de herramientas del escritorio (también puede presionar el botón de Windows en su teclado) y escriba `cmd` y presione `enter` . Aparecerá el símbolo del sistema, se mostrará un texto similar al siguiente: \`\` \` C: \\ Users \\ YourUserName>
```
## Navigating Directories (Moving through folders) 
 `C:\Users\YourUserName` is called your current working directory (directory is another way to say folder). It is like a street address that tells you where you are on your computer. The current working directory can be a guide as you navigate through your computer. On the right of the `>` we can type `cd`, which stands for Change Directory, and the name of a directory that you want to navigate to. In this case we will type `Documents`. Enter `cd Documents` and your current working directory should look like the following: 
```

C: \\ Users \\ YourUserName \\ Documents>
```
To go back one directory type and enter `cd..`. Your current working directory should return to this: 
```

C: \\ Users \\ YourUserName>
```
With the `cd` and `cd ..` commands you can move back and forth through directories. This might seem very basic at first but as you learn more commands the command prompt will become a very useful and efficient tool. 
 
 ## Here is a list of common commands: 
 | Command | Description  | 
 |---------|--------------| 
 |`help`   |Lists commands that can be used| 
 |  `dir`  |Lists the current directories contents| 
 |`dir /a` |Shows hidden files| 
 | `mkdir` |Creates a new directory| 
 | `rmdir` |Deletes a directory (if empty)| 
 | `rmdir /s`|Deletes a folder and its contents 
 | `cls`  |Clears the command prompt screen 
 | `exit`|Closes the command prompt 
 
 ## Usage Examples: 
 #### Making a Directory 
```

mkdir nombre _del_ _directorio_ que _quieres_ hacer
```
#### Getting Info on a Command 
```

tu\_comando /?
```
#### Deleting a File and Contents 
```

rm / s nombre _del_ directorio __que__ desea eliminar \`\` \`

## Consejos útiles:

*   El comando `Ipconfig` muestra la dirección IP de su computadora
*   Si escribe parte del nombre de un directorio y presiona la tecla de `tab` el símbolo del sistema lo completará automáticamente y si presiona la tecla de `tab` repetidamente, recorrerá los directorios que comienzan con la misma letra
*   Puedes usar otros shells o herramientas como git bash o cmder para agregar más comandos y funcionalidad a tu símbolo del sistema.
*   Algunas tareas requieren que ejecute el indicador de comando como administrador, haga clic en el botón de Windows y escriba `cmd admin` y presione la tecla `enter`
*   Si conoce la ruta a un archivo o directorio, puede escribir `cd PATH_TO_YOUR_DIRECTORY` lugar de cambiar directorios varias veces para llegar a un directorio o archivo
*   Cuando presiona la tecla de flecha hacia arriba, aparecerá su comando previamente ingresado y si lo presiona repetidamente, pasará por todos los comandos ingresados ​​anteriormente.