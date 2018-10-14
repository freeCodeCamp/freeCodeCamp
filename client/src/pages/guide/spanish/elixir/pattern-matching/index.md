---
title: Pattern Matching
localeTitle: La coincidencia de patrones
---
## La coincidencia de patrones

La coincidencia de patrones es una técnica que elixir hereda de Erlang. Es una técnica muy poderosa que nos permite extraer subestructuras más simples de estructuras de datos complicadas como listas, tuplas, mapas, etc.

Un partido tiene 2 partes principales, una izquierda y una derecha. El lado derecho es una estructura de datos de cualquier tipo. El lado izquierdo intenta hacer coincidir la estructura de datos en el lado derecho y vincular cualquier variable a la izquierda a la subestructura correspondiente a la derecha. Si no se encuentra una coincidencia, el operador genera un error.

La coincidencia más simple es una variable aislada a la izquierda y cualquier estructura de datos a la derecha. Esta variable coincidirá con cualquier cosa. Por ejemplo:  
`x = 12`  
`x = "Hello"`  
`IO.puts(x)`

Puede colocar variables dentro de una estructura para poder capturar una subestructura. Por ejemplo:  
`[var_1, _unused_var, var_2] = [{"First variable"}, 25, "Second variable" ]`  
`IO.puts(var_1)`  
`IO.puts(var_2)`

Esto almacenará los valores, `{"First variable"}` en var _1 y `"Second variable"` en var_ 2. También hay una variable \_ especial (o variables con el prefijo '\_') que funciona exactamente igual que otras variables pero le dice a elixir, "Asegúrate de que haya algo aquí, pero no me importa exactamente qué es". En el ejemplo anterior, \_unused\_var era una de esas variables.

Podemos igualar patrones más complicados usando esta técnica. Por ejemplo, si desea desenvolver y obtener un número en una tupla que está dentro de una lista que a su vez está en una lista, puede usar el siguiente comando:  
`[_, [_, {a}]] = ["Random string", [:an_atom, {24}]]`  
`IO.puts(a)`

El programa anterior genera el siguiente resultado:  
`24`

Esto vinculará a a 24. Otros valores se ignoran ya que estamos usando '\_'.

En la coincidencia de patrones, si usamos una variable a la derecha, se usa su valor. Si desea utilizar el valor de una variable de la izquierda, deberá utilizar el operador de pin.

Por ejemplo, si tiene una variable "a" que tiene un valor de 25 y desea asociarla con otra variable "b" que tiene un valor de 25, entonces debe ingresar -  
`a = 25`  
`b = 25`  
`^a = b`

La última línea coincide con el valor actual de a, en lugar de asignarlo, al valor de b. Si tenemos un conjunto no coincidente de lado izquierdo y derecho, el operador de coincidencia genera un error. Por ejemplo, si intentamos hacer coincidir una tupla con una lista o una lista de tamaño 2 con una lista de tamaño 3, se mostrará un error.