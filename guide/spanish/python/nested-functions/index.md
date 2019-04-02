---
title: Nested Functions in Python
localeTitle: Funciones anidadas en Python
---
### Espacios de nombres

Los parámetros de una función, más cualquier variable que esté vinculada (por asignación o por otras declaraciones vinculantes, como def) en el cuerpo de la función, conforman el espacio de nombres local de la función, también conocido como ámbito local. Cada una de estas variables se conoce como una variable local de la función.

Las variables que no son locales se conocen como variables globales (en ausencia de definiciones de funciones anidadas, que analizaremos en breve). Las variables globales son atributos del objeto de módulo, como se describe en "Atributos de los objetos de módulo" en la página 140. Cuando una variable local de una función tiene el mismo nombre que una variable global, ese nombre, dentro del cuerpo de la función, se refiere a la variable local, No la global. Expresamos esto diciendo que la variable local oculta la variable global del mismo nombre en todo el cuerpo de la función.

### La declaración global

De forma predeterminada, cualquier variable que esté vinculada dentro del cuerpo de una función es una variable local de la función. Si una función necesita volver a vincular algunas variables globales, la primera La declaración de la función debe ser:

identificadores globales

donde identificadores es uno o más identificadores separados por comas (,). Los identificadores enumerados en una declaración global se refieren a las variables globales (es decir, los atributos del objeto de módulo) que la función necesita volver a vincular. Por ejemplo, el contador de funciones que vimos en "Otros atributos de objetos de función" en la página 73 podría implementarse utilizando una variable global y global, en lugar de un atributo del objeto de función:

\_count = 0 def contador (): cuenta global \_count + = 1 devolver \_cuenta

Sin la declaración global, la función de contador generaría una excepción UnboundLocal-Error porque \_count sería una variable local no iniciada (no vinculada). Si bien la declaración global permite este tipo de programación, este estilo suele ser poco elegante y desaconsejable. Como mencioné anteriormente, cuando desea agrupar un estado y un comportamiento, los mecanismos orientados a objetos que se describen en el Capítulo 5 suelen ser los mejores.

No use global si el cuerpo de la función solo usa una variable global (incluida la mutación del objeto vinculado a esa variable si el objeto es mutable). Use una declaración global solo si el cuerpo de la función vuelve a vincular una variable global (generalmente asignando el nombre de la variable). Como cuestión de estilo, no use global a menos que sea estrictamente necesario, ya que su presencia hará que los lectores de su programa asuman que la afirmación está ahí por algún propósito útil. En particular, nunca use global excepto como la primera declaración en un cuerpo de función.

{mospagebreak title = Funciones anidadas y ámbitos anidados}

Una declaración de definición dentro de un cuerpo de función define una función anidada, y la función cuyo cuerpo incluye la definición se conoce como una función externa a la función anidada. El código en el cuerpo de una función anidada puede acceder (pero no volver a vincular) las variables locales de una función externa, también conocidas como variables libres de la función anidada.

La forma más sencilla de permitir que una función anidada acceda a un valor es a menudo no confiar en los ámbitos anidados, sino más bien pasar ese valor como uno de los argumentos de la función. Si es necesario, el valor del argumento puede vincularse cuando la función anidada se define utilizando el valor como predeterminado para un argumento opcional. Por ejemplo:

def percent1 (a, b, c): def pc (x, total = a + b + c): retorno (x \* 100.0) / total imprima "Los porcentajes son:", pc (a), pc (b), pc (c)

Aquí está la misma funcionalidad que usa los ámbitos anidados:

def percent2 (a, b, c): def pc (x): return (x \* 100.0) / (a ​​+ b + c) imprima "Los porcentajes son:", pc (a), pc (b), pc (c)

En este caso específico, percent1 tiene una pequeña ventaja: el cálculo de a + b + c ocurre solo una vez, mientras que pc de la función interna de percent2 repite el cálculo tres veces. Sin embargo, si la función externa vuelve a vincular sus variables locales entre las llamadas a la función anidada, puede ser necesario repetir el cálculo. Por lo tanto, es aconsejable conocer los dos enfoques y elegir el caso por caso más apropiado.

Una función anidada que accede a valores desde variables locales externas también se conoce como cierre. El siguiente ejemplo muestra cómo construir un cierre:

def make\_adder (agosto): def add (addend): retorno addend + augend volver agregar

Los cierres son una excepción a la regla general de que los mecanismos orientados a objetos cubiertos en el Capítulo 5 son la mejor manera de agrupar datos y códigos. Cuando necesita construir específicamente objetos que se pueden llamar, con algunos parámetros fijos en el momento de la construcción del objeto, los cierres pueden ser más simples y más efectivos que las clases. Por ejemplo, el resultado de make\_adder (7) es una función que acepta un solo argumento y agrega 7 a ese argumento. Una función externa que devuelve un cierre es una "fábrica" ​​para los miembros de una familia de funciones que se distingue por algunos parámetros, como el valor del argumento augend en el ejemplo anterior, y a menudo puede ayudarlo a evitar la duplicación de código.

### Expresiones lambda

Si el cuerpo de una función es una sola declaración de expresión de retorno, puede elegir reemplazar la función con la forma de expresión lambda especial:

parámetros lambda: expresión

Una expresión lambda es el equivalente anónimo de una función normal cuyo cuerpo es una sola declaración de retorno. Tenga en cuenta que la sintaxis lambda no utiliza la palabra clave return. Puede usar una expresión lambda donde quiera que pueda usar una referencia a una función. Lambda a veces puede ser útil cuando se quiere usar una función simple como argumento o valor de retorno. Aquí hay un ejemplo que usa una expresión lambda como un argumento para la función de filtro incorporada (cubierto en el filtro en la página 161):

aList = \[1, 2, 3, 4, 5, 6, 7, 8, 9\] bajo = 3 alto = 7 filtro (lambda x, l = bajo, h = alto: h> x> l, aList) # devuelve: \[4, 5, 6\]

Como alternativa, siempre puede usar una declaración de definición local que le dé un nombre al objeto de función. A continuación, puede utilizar este nombre como argumento o valor de retorno. Aquí está el mismo ejemplo de filtro usando una declaración de definición local:

aList = \[1, 2, 3, 4, 5, 6, 7, 8, 9\] bajo = 3 alto = 7 def dentro de los _límites (valor, l = bajo, h = alto): devuelve h> valor> l filter (dentro de los_ límites, aList) # devuelve: \[4, 5, 6\]

Si bien lambda ocasionalmente puede ser útil, muchos usuarios de Python prefieren def, que es más general, y pueden hacer que su código sea más legible si elige un nombre razonable para la función.

{mospagebreak title = Generadores}

Cuando el cuerpo de una función contiene una o más apariciones del rendimiento de la palabra clave, la función se conoce como generador. Cuando llama a un generador, el cuerpo de la función no se ejecuta. En su lugar, llamar al generador devuelve un objeto iterador especial que envuelve el cuerpo de la función, sus variables locales (incluidos sus parámetros) y el punto actual de ejecución, que inicialmente es el inicio de la función.

Cuando se llama al siguiente método de este objeto iterador, el cuerpo de la función se ejecuta hasta la siguiente declaración de rendimiento, que toma la forma:

expresión de rendimiento

Cuando se ejecuta una declaración de rendimiento, la ejecución de la función se "congela", con el punto de ejecución actual y las variables locales intactas, y la siguiente expresión de rendimiento se devuelve como resultado del siguiente método. Cuando se vuelve a llamar a next, la ejecución del cuerpo de la función se reanuda donde se detuvo, nuevamente hasta la siguiente declaración de rendimiento. Si el cuerpo de la función finaliza, o ejecuta una instrucción de retorno, el iterador genera una excepción StopIteration para indicar que la iteración ha finalizado. Las declaraciones de retorno en un generador no pueden contener expresiones.

Un generador es una forma muy útil de construir un iterador. Dado que la forma más común de usar un iterador es hacer un bucle con una instrucción for, normalmente se llama a un generador como este:

para avariable en somegenerator (argumentos):

Por ejemplo, supongamos que desea una secuencia de números que cuenten de 1 a N y luego nuevamente a 1. Un generador puede ayudar:

def updown (N): para x en xrange (1, N): rendimiento x para x en xrange (N, 0, -1): rendimiento x para i en updown (3): imprimir i # impresiones: 1 2 3 2 1

Aquí hay un generador que funciona de forma similar a la función xrange incorporada, pero devuelve una secuencia de valores de coma flotante en lugar de una secuencia de enteros:

def frange (inicio, parada, paso = 1.0): mientras se inicia <detener: comienzo de rendimiento inicio + = paso

Este ejemplo de frange es solo un poco como xrange porque, por simplicidad, hace que los argumentos comiencen y paren de manera obligatoria, y supone silenciosamente que el paso es positivo.

Los generadores son más flexibles que las funciones que devuelven listas. Un generador puede construir un iterador ilimitado, es decir, uno que devuelve un flujo infinito de resultados (para usar solo en bucles que terminan por otros medios, por ejemplo, a través de una instrucción break). Además, un iterador creado por generador realiza una evaluación perezosa: el iterador calcula cada elemento sucesivo solo cuando es necesario, justo a tiempo, mientras que la función equivalente realiza todos los cálculos por adelantado y puede requerir grandes cantidades de memoria para contener la lista de resultados. Por lo tanto, si todo lo que necesita es la capacidad de iterar en una secuencia calculada, a menudo es mejor calcular la secuencia en un generador en lugar de en una función que devuelve una lista. Si la persona que llama necesita una lista de todos los elementos producidos por algunos generadores limitados G (argumentos), la persona que llama simplemente puede usar el siguiente código:

Lista\_resultada = lista (G (argumentos))

### Expresiones generadoras

Python 2.4 introduce una forma aún más sencilla de codificar generadores particularmente simples: expresiones generadoras, comúnmente conocidas como genexps. La sintaxis de un genexp es igual a la de una lista de comprensión (como se describe en "Lista de comprensión" en la página 67), excepto que un genexp se incluye entre paréntesis (()) en lugar de corchetes (\[\]); la semántica de un genexp es la misma que la de la comprensión de la lista correspondiente, excepto que un genexp produce un iterador que produce un elemento a la vez, mientras que la comprensión de la lista produce una lista de todos los resultados en la memoria (por lo tanto, utilizando un genexp, cuando apropiado, guarda la memoria). Por ejemplo, para sumar los cuadrados de todos los enteros de un solo dígito, en cualquier Python moderno, puede codificar suma (\[x _x para x en xrange (10)\]); en Python 2.4, puede expresar esta funcionalidad aún mejor, codificándola como suma (x_ x para x en xrange (10)) (igual, pero omitiendo los corchetes), y obtenga exactamente el mismo resultado mientras consume menos memoria. Tenga en cuenta que los paréntesis que indican la llamada a la función también "cumplen una doble función" y encierran el genexp (no se necesitan paréntesis adicionales).

{mospagebreak title = Generadores en Python 2.5}

En Python 2.5, los generadores se mejoran aún más, con la posibilidad de recibir un valor (o una excepción) de la persona que llama a medida que se ejecuta cada rendimiento. Estas características avanzadas permiten a los generadores en 2.5 implementar co-rutinas de pleno derecho, como se explica en http://www.python.org/peps/pep-0342.html. El cambio principal es que, en 2.5, el rendimiento no es una declaración, sino una expresión, por lo que tiene un valor. Cuando se reanuda un generador llamando a su método a continuación, el valor del rendimiento correspondiente es Ninguno. Para pasar un valor x a un generador g (de modo que g reciba x como el valor del rendimiento en el que está suspendido), en lugar de llamar a g.next (), el llamador llama a g.send (x) (llamando a g.send (Ninguno) es como llamar a g.next ()). Además, un rendimiento simple sin argumentos, en Python 2.5, se convierte en legal y equivalente a ninguno.

Otras mejoras de Python 2.5 a los generadores tienen que ver con las excepciones, y están cubiertas en "Mejoras del generador" en la página 126.

### Recursion

Python admite la recursión (es decir, una función de Python puede llamarse a sí misma), pero hay un límite a la profundidad de la recursión. De forma predeterminada, Python interrumpe la recursión y genera una excepción RecursionLimitExceeded (tratada en "Clases de excepción estándar" en la página 130) cuando detecta que la pila de llamadas recursivas ha superado la profundidad de 1.000. Puede cambiar el límite de recursión con la función setrecursionlimit del módulo sys, cubierto en setrecursionlimit en la página 171.

Sin embargo, cambiar el límite de recursión no le otorga una recursión ilimitada; el límite máximo absoluto depende de la plataforma en la que se ejecuta su programa, en particular del sistema operativo subyacente y la biblioteca de tiempo de ejecución de C, pero generalmente son unos pocos miles de niveles. Si las llamadas recursivas son demasiado profundas, su programa falla. Dicha recursión fuera de control, después de una llamada a setrecursionlimit que excede las capacidades de la plataforma, es una de las pocas formas en que un programa Python puede fallar: realmente falla, sin la red de seguridad habitual de los mecanismos de excepción de Python. Por lo tanto, desconfíe de intentar arreglar un programa que está obteniendo excepciones RecursionLimitExceeded elevando el límite de recursión demasiado alto con setrecursionlimit. La mayoría de las veces, le recomendamos que busque formas de eliminar la recursión o, más específicamente, limite la profundidad de recursión que su programa necesita.

Los lectores que están familiarizados con los lenguajes Lisp, Scheme o de programación funcional deben saber, en particular, que Python no implementa la optimización de la "eliminación de la llamada de cola", que es tan importante en estos idiomas. En Python, cualquier llamada, recursiva o no, tiene el mismo costo en términos de tiempo y espacio de memoria, dependiendo solo del número de argumentos: el costo no cambia, si la llamada es una "llamada de cola" (lo que significa que la llamada es la última operación que ejecuta la persona que llama) o cualquier otra llamada que no sea de cola.