---
title: Python Input Function
localeTitle: Función de entrada de Python
---
Muchas veces, en un programa necesitamos algo de entrada del usuario. Tomar entradas del usuario hace que el programa se sienta interactivo. En Python 3, para obtener información del usuario, tenemos una función `input()` . Si se llama a la función de entrada, el flujo del programa se detendrá hasta que el usuario haya dado una entrada y haya terminado la entrada con la tecla de retorno. Veamos algunos ejemplos:

1.  Cuando solo queremos tomar la entrada:
    
    # Esto solo dará un mensaje sin ningún mensaje
    
    inp = entrada ()
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CUqX/0)

1.  Para dar un mensaje con un mensaje:
    
    mensaje _con_ mensaje = entrada (' ')
    
    # \_
    
    # La '\_' en la salida es el indicador
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CUqX/1)

3\. Cuando queremos tomar una entrada entera:
```
number = int(input('Please enter a number: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CUqX/2)

Si ingresa un valor no entero, Python generará un error `ValueError` . **Así que siempre que uses esto, asegúrate de que también lo atrapes.** De lo contrario, su programa se detendrá inesperadamente después del aviso.
```
number = int(input('Please enter a number: ')) 
 # Please enter a number: as 
 # Enter a string and it will throw this error 
 # ValueError: invalid literal for int() with base 10 'as' 
```

4\. Cuando queremos una entrada de cadena:
```
string = str(input('Please enter a string: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CUqX/3)

Sin embargo, las entradas se almacenan por defecto como una cadena. El uso de la función `str()` deja claro al lector de códigos que la entrada será una "cadena". Es una buena práctica mencionar qué tipo de información se tomará de antemano.

[Documentos oficiales](https://docs.python.org/3/library/functions.html#input)