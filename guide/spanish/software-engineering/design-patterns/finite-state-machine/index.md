---
title: Finite State Machine
localeTitle: Máquina de estados finitos
---
La máquina de estados finitos (FSM) es un patrón de diseño de software en el que un modelo dado transita a otros estados de comportamiento a través de una entrada externa.

## Máquina de estados finitos

Un FSM se define por sus **estados** , su **estado inicial** y las **transiciones** .

El poder de FSM proviene de la capacidad de definir claramente diferentes _comportamientos_ en diferentes condiciones. Por lo general, FSM se usa con secuencias de comandos de comportamiento de bucle que evalúan constantemente la situación actual en un bucle o con eventos.

Para ayudar a formar una imagen de cómo podría aplicarse esto, se utilizará una máquina de café como ejemplo de una máquina de estados finitos. También cubriremos un diagrama de estado para visualizar el FSM y proporcionar ejemplos de codificación.

### Diagrama de estado

![Máquina de café diagrama de máquina de estado finito](https://raw.githubusercontent.com/arunma/blogimages/master/AkkaFSM/CoffeeMachineFSM.png) Este diagrama muestra tres estados posibles para la máquina de café:

*   Abierto
*   ReadyToBuy
*   Apagado

Las líneas entre estos estados muestran qué transiciones son posibles entre estados y en qué dirección. Estas transiciones tienen condiciones para cuando el FSM necesita cambiar entre estados.

*   StartUpMachine Desde el estado PoweredOff al estado Open, la máquina debe iniciarse. Esto se hace manualmente en este caso.
    
*   deposito> = costo del cafe El FSM evalúa la cantidad de efectivo depositado en un bucle o cuando la cantidad cambia (recomendado en este caso) Si deposita suficiente dinero en efectivo en la máquina de café, el FSM pasará de "Abrir" a "Listo para comprar".
    
*   Apagar la maquina La máquina pasará automáticamente de Abierto a PoweredOff a través del método ShutDownMachine si se cumple la condición "no quedan más cafés".
    
*   DispenseCoffee En el estado ReadyToBuy, el usuario puede comprar un café y, a continuación, se elaborará y dispensará. La condición es cuando se activa el evento BuyCoffee (¡Enlace al patrón de observador!). (no se muestra en el diagrama)
    
*   Cancelar café Si el usuario opta por cancelar, la máquina pasará de ReadyToBuy a Open.
    
*   ShutDownMachine La máquina pasará a estado PoweredOff
    

### Estados

En cada estado hay un comportamiento definido que solo se ejecutará cuando el objeto esté en ese estado. Por ejemplo, durante la Apagado automático la máquina de café no prepara café antes de que se encienda, durante el estado Abierto, esperará hasta que haya suficiente dinero insertado, hasta que se dé el comando de apagado, o hasta que se agote el café. Durante este estado Abierto, puede hacer rutinas como la limpieza que no sucederá en otros estados.

### Estado inicial

Cada FSM tiene un estado inicial, esto significa en qué estado comienza cuando se crea y debe definirse cuando se construye o crea una instancia. Por supuesto, es posible cambiar directamente el estado si se cumplen las condiciones.

### Transiciones

Cada estado evalúa constantemente si debe realizar la transición a otro estado o hará la transición a otro estado en función de un evento activado.

## DFA y NFA

Hay dos tipos de autómatas finitos, determinista (DFA) y no determinista (NFA). Ambos aceptan lenguajes regulares y operan más o menos de la misma manera descrita anteriormente, pero con algunas diferencias.

Un DFA acepta o rechaza una cadena de símbolos y solo produce un cálculo o autómata único para cada cadena de entrada. _Determinista se_ refiere a la unicidad de la computación. Una máquina de estado finito se llama DFA si obedece las siguientes reglas:

1.  Cada una de sus transiciones está determinada _únicamente_ por su estado de origen y símbolo de entrada
2.  Se requiere la lectura de un símbolo de entrada para cada transición de estado.

Una NFA no necesita obedecer estas restricciones, lo que significa que cada DFA también es una NFA. Y dado que ambos solo reconocen lenguajes regulares, cada NFA se puede convertir en un DFA equivalente utilizando el algoritmo de construcción powerset.

Entonces, ¿qué tipo de reglas podemos esperar encontrar en las NFA pero no en las DFA?

1.  Una NFA puede tener una transición de _cadena vacía_ (generalmente denotada por una épsilon). Lo que significa que cuando se encuentra en un estado determinado con una épsilon para una regla de transición, la máquina puede pasar al siguiente estado sin leer un símbolo de entrada
2.  En una NFA, cada par de estado y símbolo de transición puede tener múltiples estados de destino en lugar de los destinos únicos de pares en DFA
3.  Cada par de símbolos de estado y transición produce una 'rama' de cómputo para cada uno de sus posibles destinos, creando una especie de sistema multiproceso.
4.  Un DFA rechazará la cadena de entrada si cae en cualquier estado que no sea el estado de aceptación. En una NFA, solo necesitamos una 'rama' para aterrizar en un estado de aceptación para aceptar la cadena.