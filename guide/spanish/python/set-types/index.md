---
title: Python Set Types
localeTitle: Tipos de conjuntos de Python
---
Un objeto establecido es una colección desordenada de objetos hashable distintos. Los usos comunes incluyen la prueba de membresía, la eliminación de duplicados de una secuencia y el cálculo de operaciones matemáticas como intersección, unión, diferencia y diferencia simétrica.

[Python Docs - Set Types Set Frozenset](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)

**TODO: explicar hash / hashable** Una tabla hash es un vector contiguo de registros, cuyas ranuras vienen en tres sabores

1.  Slots con pares clave + valor. Llama a estos ciudadanos.
2.  Ranuras aún no utilizadas. Llama a estas vírgenes.
3.  Las ranuras que una vez fueron ciudadanos, pero cuya clave se eliminó, y donde otro par clave + valor aún no ha sobrescrito la ranura. Llama a estos turds (ese es el término técnico <0.9 wink>).

Python redimensiona la tabla cuando el número de vírgenes cae por debajo de un tercio de el número total de ranuras. En el caso habitual, Python duplica el tamaño de la tabla. (Hasta un máximo actual de 1,073,741,824 ranuras). Sin embargo, si muchos Las eliminaciones dejan atrás a muchos turds, es posible para el número de vírgenes bajar muy a pesar de que quedan pocos ciudadanos; en ese caso, Python en realidad reduce la tabla (hasta un mínimo actual de 4 ranuras).

Para evitar golpes cuando se realiza una mezcla de adiciones y eliminaciones cuando el la tabla está cerca de un umbral de cambio de tamaño, Python en realidad no comprueba el número de vírgenes después de una eliminación (en efecto, se supone que pronto reemplazará la turds con ciudadanos de nuevo). Así que, curiosamente, borrar una clave _nunca_ encoge la mesa. Una larga secuencia de eliminaciones seguidas de un complemento puede reducirse aunque, Una forma de forzar una posible contracción sin agregar una clave es:
```
dict = dict.copy() 
```

dict.copy () siempre devuelve un diccionario libre de turd, del más pequeño Tamaño de potencia de 2 que deja al menos un tercio de las ranuras vírgenes.