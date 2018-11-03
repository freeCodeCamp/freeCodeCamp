---
title: Using the Find Command
localeTitle: Usando el comando Buscar
---
# Usando el comando Buscar

El comando de búsqueda de Linux es una herramienta poderosa para ayudarlo a localizar archivos y directorios en su servidor. Con un poco de práctica, puede rastrear fácilmente las cosas en función del nombre, el tipo, el tamaño o la fecha (cuando se crearon o actualizaron por última vez).

Piense en encontrar como su ayudante ansioso:

Tu: "Estoy buscando algo en mi servidor".

Encuentra: "¡Puedo ayudar! ¿Qué puedes decirme al respecto?"

Usted: "Era un archivo, más grande que 2GB, en algún lugar bajo mi directorio personal, actualizado en las últimas 48 horas".

Encuentra: "Tada!"

Find es un programa, así que realmente tendrías que decirle que `find ~ -type f -size +2G` .

Aquí hay algunos ejemplos de comandos que usan find:

*   `find ~ -type d # Show me all the subdirectories inside my home directory`
*   `find / -type f -name 'todo.txt' # Show me files named 'todo.txt' anywhere under the root directory (ie anywhere)`

El primer parámetro siempre nombra el directorio en el que buscaremos. En nuestros ejemplos anteriores, estos son ~ (directorio de inicio del usuario actual) y / (directorio raíz del sistema de archivos).

Otros parámetros son opcionales y se pueden combinar de cualquier manera que encuentre útil:

*   El parámetro de tipo le permite restringir la búsqueda de archivos solo (f), solo directorios (d) o enlaces simbólicos (l). Si omite el parámetro de tipo, buscará todos estos tipos.
*   El parámetro nombre le permite especificar lo que desea buscar por nombre, ya sea con una cadena literal ('nombre\_archivo.txt') o usando comodines ('archivo?. \*').

`man find` te mostrará muchos más parámetros, y vale la pena revisarlos. Find puede ubicar archivos por nombre, usuario, fecha de creación, tamaño y mucho más. La próxima vez que estés buscando algo, ¡encuéntralo!