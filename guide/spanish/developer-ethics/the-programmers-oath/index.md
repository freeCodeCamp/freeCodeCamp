---
title: The Programmers Oath
localeTitle: El juramento de los programadores
---
## El juramento de los programadores

El juramento de los programadores es un juramento creado por Robert C. Martin, que destaca las pautas para una mejor web. El juramento es el siguiente:

> Para defender y preservar el honor de la profesión de programadores informáticos, Prometo eso, a mi mejor capacidad y buen juicio:
> 
> 1.  No produciré código dañino.
> 2.  El código que produzco será siempre mi mejor trabajo. A sabiendas, no permitiré que se acumule el código defectuoso en el comportamiento o la estructura.
> 3.  Produciré, con cada versión, una prueba rápida, segura y repetible de que cada elemento del código funciona como debería.
> 4.  Haré lanzamientos frecuentes, pequeños, para que no impida el progreso de los demás.
> 5.  Voy a mejorar sin miedo e implacablemente mis creaciones en cada oportunidad. Nunca los degradaré.
> 6.  Haré todo lo que pueda para mantener la productividad de mí mismo y de los demás lo más alto posible. No haré nada que disminuya esa productividad.
> 7.  Me aseguraré continuamente de que otros puedan cubrirse por mí y de que puedo cubrirlos por mí.
> 8.  Produciré estimaciones que sean honestas tanto en magnitud como en precisión. No haré promesas sin certeza.
> 9.  Nunca dejaré de aprender y mejorar mi oficio.

[Una serie web en el canal freeCodeCamp](https://www.youtube.com/watch?v=36NgPu9OyRM) desglosa lo que significa el juramento y cómo seguirlo.

### Promesa 1

> 1.  No produciré código dañino.

#### ¿Qué es el código dañino?

El código dañino es un código que es perjudicial para los clientes, compañeros programadores o para la estructura del sistema. El daño viene en muchas formas diferentes. **Usted,** como programador profesional, promete no producir código dañino, sea lo que sea el daño en su juicio y en el de sus compañeros.

### Promesa 2

> 2.  El código que produzco será siempre mi mejor trabajo. A sabiendas, no permitiré que se acumule el código defectuoso en el comportamiento o la estructura.

Como programador, usted desea creer en hacer su mejor trabajo y nunca quiere estar en una situación en la que el código que libere no sea, a sabiendas, su mejor trabajo.

No desea permitir que el código defectuoso se acumule en su sistema. Es posible que no pueda evitar que ingrese a su sistema (por ejemplo, una versión de emergencia), pero no permitirá que el viaje se acumule.

Observe que en la promesa, hay un aspecto de ambos "comportamiento" y "estructura" en el juramento. Algo que es defectuoso en el comportamiento es **claramente un problema,** pero el código defectuoso en la estructura reducirá la productividad de los miembros de su equipo, hasta que apenas pueda hacer algo.

### Promesa 3

> 3.  Produciré, con cada versión, una prueba rápida, segura y repetible de que cada elemento del código funciona como debería.

Los clientes, los usuarios e incluso las empresas esperan que podamos demostrar de manera inmediata que nuestro código funciona como se supone. Observe que en el juramento hay palabras como rápido, seguro y repetible. Desea poder comprobar en un instante que el código aún funciona como se supone.

Si agrega una nueva función, eso no quiebra nada antiguo, o arregla una nueva estructura que no rompe nada que solía estar allí, quiere poder mostrar eso rápida y fácilmente, que el código todavía hace lo que está destinado a hacer.

### Promesa 4

> 4.  Haré lanzamientos frecuentes, pequeños, para que no impida el progreso de los demás.

La forma simple de decir esto es no revisar algo y verificar algo durante un **mes** . Una manera más perspicaz de decir esto, es decir que todo lo que haga en el código, debe hacerlo en pequeños pasos. Si lo que está haciendo actualmente está bloqueando a otra persona, no puede bloquearlo por mucho tiempo **porque** lo está haciendo en pequeños pasos.

La ventaja de trabajar en pequeños pasos es enorme. Asegúrate de que cuando haces cosas en los compromisos, lo haces por hora. Cuando haces check-ins, haz check-ins con frecuencia. Cuando haces combinaciones, haces combinaciones con frecuencia.

### Promesa 5

> 5.  Voy a mejorar sin miedo e implacablemente mis creaciones en cada oportunidad. Nunca los degradaré.

Cada vez que vea un problema en su código, pruebas o estructura de lanzamiento, **mejore el problema** . Incluso si no ve un problema, mire su código y dígase: "Apuesto a que hay una manera de mejorar esto. Puedo mejorarlo de alguna manera".

Somos humanos, hacemos las cosas mejor. Eso es lo que hacen los humanos, o al menos lo que queremos que hagan los humanos. Constantemente mejoraremos nuestro código y nunca lo degradaremos a propósito. Nunca empeorando las cosas.

### Promesa 6

> 6.  Haré todo lo que pueda para mantener la productividad de mí mismo y de los demás lo más alto posible. No haré nada que disminuya esa productividad.

Se trata de pensar en tus compañeros de equipo y asociados. Las personas que trabajan con usted y las personas que dependen de su código. Por ejemplo, no hagas nada que desacelere a nadie más. No escriba una función con demasiados argumentos, o haga un lío en el código de otra persona. No haga esto para codificar de lo que otras personas dependen, porque solo va a **reducir la velocidad** .

No ponga pruebas de larga duración en la suite de pruebas. Mantenga esas pruebas corriendo rápido. Considera a tus compañeros de equipo en todo momento. Considera el medio ambiente en todo momento. Mantén todo funcionando rápido. No impida su productividad.

### Promesa 7

> 7.  Me aseguraré continuamente de que otros puedan cubrirse por mí y de que puedo cubrirlos por mí.

Esto es algo que a menudo descuidamos hacer. Somos un equipo, y la forma en que se comportan los equipos, es que si otro compañero de equipo se cae, otro compañero de equipo los cubre.

En software, lo que eso significa es que necesitas saber cómo funcionan las cosas de tus compañeros de equipo, y dónde están sus scripts, dónde están sus archivos, cómo está estructurado su código, etc.

Si caen, no queremos tener silos de conocimiento de nuestros equipos, queremos que ese conocimiento se difunda.

Una forma de hacerlo es a través de la programación por pares. Asegúrese de que puede cubrir entre sí.

### Promesa 8

> 8.  Produciré estimaciones que sean honestas tanto en magnitud como en precisión. No haré promesas sin certeza.

Uno de los mayores problemas que tienen los programadores es que hacen estimaciones que se consideran promesas. Cuando realice una estimación, debe dejar muy claro que es una conjetura, y no una muy buena conjetura. Me aseguraría de que cuando haga estimaciones, las haga en tres números: mejor caso, peor caso y caso nominal. Asegúrese de que todo el mundo sabe que el peor caso podría suceder.

No haga promesas que no está seguro de poder completar. Si haces una promesa, tienes que cumplirla.

Cuando alguien te dice "Necesito que esto se haga antes del martes" y no estás seguro de poder hacerlo antes del martes, entonces no prometes. Usted dice " **no** , no estoy seguro de poder hacerlo antes del martes". Tenga mucho cuidado, porque alguien podría decirle que lo **intente** , y su respuesta sería: "Ya lo estoy intentando". Ya estás haciendo tu mejor esfuerzo, así que nunca dejes que nadie te convenza para que intentes más.

### Promesa 9

> 9.  Nunca dejaré de aprender y mejorar mi oficio.

Esto no necesita mucha explicación. Siempre debe tratar de aprender nuevos idiomas, nuevos marcos, nuevas técnicas, nuevas disciplinas, nuevos procesos. Necesitas aplicar lo que aprendes entonces, para mejorar constantemente tu oficio.

### Promesa 10

> 10.  Solo produciré código que se ajuste a la ética.

Los programadores deben trabajar para desarrollar sistemas informáticos que puedan reducir las consecuencias negativas para la sociedad, como las amenazas a la seguridad y la salud, y que puedan facilitar las actividades cotidianas y el trabajo. Es "una obligación de desarrollar a altos estándares".

### **En conclusión:**

Quizás debería haber más promesas que deberíamos hacer, de hecho, muchas de estas promesas **pueden no ser prácticas** . Sin embargo, todas estas promesas parecen ser importantes de alguna manera y razonables como un juramento que haría un programador profesional.