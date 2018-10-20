---
title: Identify Basic Internet Problems with Ping
localeTitle: Identificar problemas básicos de Internet con ping
---
![Pantalla de sonar](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b1bfc671722851eed4adfe2d4ec24eb9ab8a875b.png)

La próxima vez que llame a la mesa de ayuda, ¿quiere sorprenderlos con su conocimiento de redes? El uso de un comando llamado "ping", integrado directamente en su computadora Mac, Windows o Linux existente, ayudará a identificar problemas de conexión básicos. Bien, esto podría no ser suficiente para "sorprender" a los miembros de tu equipo, sin embargo, apreciarán que hayas iniciado el proceso de depuración. Y recuerde que su personal de soporte son especialistas en depuración, así que siga sus instrucciones cuando le guíen por la secuencia de resolución de problemas.

## TL; DR:

Puede usar el comando `ping` integrado en su computadora Mac OS X, Windows o Linux para identificar problemas básicos de conectividad de red. Esto puede ayudarlo a resolver el problema y / u obtener información de depuración valiosa como primer paso antes de llamar al soporte. Lea a continuación para obtener detalles sobre cómo iniciar una ventana de línea de comandos y ejecutar `ping` desde su máquina Mac OS X o Windows.

## El comando `ping` :

El comando `ping` es una forma sencilla de verificar que otra computadora puede recibir información de usted. El autor original, [Mike Muuss](https://en.wikipedia.org/wiki/Mike_Muuss) , en realidad [llamó al programa por el sonido "ping"](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History) que envía un submarino para detectar objetos en el agua. Si un eco del ping vuelve, significa que hay algo por ahí. De hecho, `ping` utiliza la " [Solicitud de eco del protocolo de mensajes de control de Internet](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) " como parte de su diseño de software subyacente.

En su forma más simple, el comando `ping` proporciona dos datos valiosos, ya sea que el mensaje se haya devuelto ( `64 bytes from…` ) y cuánto tiempo se tarda en recibir el mensaje (por ejemplo, `time=6.396 ms` ). Dependiendo del tipo de computadora que esté utilizando, incluso puede obtener un resumen que contenga mínimo, máximo, promedio y más. El tiempo de respuesta se muestra en "ms", o milisegundos, que es 1/1000 de segundo. Un tiempo de respuesta de 10 ms o menos es bastante rápido, sin embargo, los valores suelen estar en el rango de 100 ms. A muy por encima de los 200 ms, probablemente notará que tiene una conexión lenta.

## Cuando todo está bien:

Así es como se ve mi respuesta de `ping` en mi computadora Mac OS X cuando todo funciona normalmente aquí en Malasia:
```
MacBook-Pro:~ ajm$ ping Google.com 
 PING google.com (216.58.196.46): 56 data bytes 
 64 bytes from 216.58.196.46: icmp\_seq=0 ttl=55 time=6.396 ms 
 64 bytes from 216.58.196.46: icmp\_seq=1 ttl=55 time=6.368 ms 
 64 bytes from 216.58.196.46: icmp\_seq=2 ttl=55 time=26.773 ms 
 64 bytes from 216.58.196.46: icmp\_seq=3 ttl=55 time=6.984 ms 
 ^C 
 --- google.com ping statistics --- 
 4 packets transmitted, 4 packets received, 0.0% packet loss 
 round-trip min/avg/max/stddev = 6.368/11.630/26.773/8.746 ms 
```

Así es como se ve mi respuesta de `ping` en una computadora con Windows cuando todo funciona bien:
```
C:\Users\BJM>ping Google.com 
 Pinging google.com [216.58.196.46] with 32 bytes of data: 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=15ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Ping statistics for 216.58.196.46: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milli-seconds: 
    Minimum = 6ms, Maximum = 15ms, Average = 8ms 
```

Puede ver en estos ejemplos que la conexión es bastante buena con tiempos de respuesta promedio de menos de 10 ms.

### Cuando algo está mal (tres ejemplos):

Entonces, ¿qué pasaría si no pudiera conectarme a `Google.com` ? Por ejemplo, \# 1 , simulo una conexión de red rota a mi Mac desenchufando mi enrutador de la pared y vuelvo a ejecutar el comando. Lo primero que noté es que el comando tarda _mucho_ más en responder:
```
MacBook-Pro:~ ajm$ ping google.com 
 ping: cannot resolve google.com: Unknown host 
 MacBook-Pro:~ ajm$ 
```

O, por ejemplo, \# 2 , dependiendo exactamente de cómo falla la conexión:
```
PING google.com (216.58.196.46): 56 data bytes 
 Request timeout for icmp\_seq 0 
 Request timeout for icmp\_seq 1 
 Request timeout for icmp\_seq 2 
 ^C 
```

Y a veces, si tengo una conexión particularmente inestable, veré una mezcla de estos mensajes. Por ejemplo, el \# 3 , puedo simular esto conectando mi computadora Mac a una conexión Wi-Fi pública que está al otro lado de la calle:
```
PING google.com (216.58.196.206): 56 data bytes 
 64 bytes from 216.58.196.206: icmp\_seq=0 ttl=57 time=273.655 ms 
 64 bytes from 216.58.196.206: icmp\_seq=1 ttl=57 time=808.546 ms 
 64 bytes from 216.58.196.206: icmp\_seq=2 ttl=57 time=179.613 ms 
 Request timeout for icmp\_seq 3 
 Request timeout for icmp\_seq 4 
 64 bytes from 216.58.196.206: icmp\_seq=5 ttl=57 time=374.612 ms 
 Request timeout for icmp\_seq 6 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 7 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 8 
 ^C 
```

En la primera prueba, `ping` me dijo que mi máquina ni siquiera podía encontrar la dirección de Internet (IP `216.58.196.46` ) para `Google.com` . En la segunda prueba, mi computadora recordó la dirección IP de Google, pero no pudo llegar a los servidores de Google ( `Request timeout` ). En la tercera prueba, `sendto: No route to host` significa que el dispositivo de red sabe dónde están los servidores de Google, pero algo a lo largo de la ruta digital está roto.

## Usuarios de Mac: Cómo ejecutar el comando `ping` :

En una Mac, normalmente ejecutas `ping` desde la línea de comandos del terminal. Para iniciar el terminal, haga clic en el icono de lupa OS X Spotlight en la parte superior derecha del escritorio:

![Spotlight Mac](//discourse-user-assets.s3.amazonaws.com/original/2X/9/924e9346b5f92fe41127f6b3e403f454773edae9.png)

Cuando aparezca la ventana de búsqueda, escriba "terminal", resalte "Terminal - Utilidades" y haga doble clic (o presione

regreso

): ![Lanzamiento de terminal de Mac](//discourse-user-assets.s3.amazonaws.com/original/2X/9/976e1fb628c0d0bf2a6a9b57504305fd844716d4.png)

Se iniciará la ventana de comandos del terminal, y puede ingresar el comando `ping Google.com` muestra en mis ejemplos: ![Línea de comandos de Mac](//discourse-user-assets.s3.amazonaws.com/original/2X/0/05d1e4d360c14921f7bd7ab871358b956f1e7d03.png)

**Consejo importante para Mac** : el comando `ping` se ejecutará para siempre si no le dices que se detenga. Para hacer eso, presione el

`control`

tecla (abajo a la derecha en el teclado) y la

`c`

llave. Eso interrumpirá la prueba con un Control-C ( `^C` ) y devolverá el control de la línea de comandos. Para el usuario de Windows, el comando se detendrá solo después de unas pocas iteraciones.

## Usuarios de Windows: Cómo ejecutar el comando `ping` :

La apertura del símbolo del sistema difiere entre las versiones de Windows 10, 8.1, 8 y 7; Aquí hay una gran guía en [Cómo abrir el símbolo del sistema](http://pcsupport.about.com/od/commandlinereference/f/open-command-prompt.htm) . En una máquina con Windows 7, por ejemplo, haga clic en el ícono "Inicio" de Windows de la parte inferior izquierda, seleccione "Símbolo del sistema" y haga doble clic (o presione

`enter`

):

![Win Terminal Launch](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4e0b18755930ad0d64e6e38763f0b96054fd76fb.png)

Esto abrirá la ventana de comandos, y puede ingresar el comando `ping Google.com` muestra en los ejemplos:

![Ganar línea de comandos](//discourse-user-assets.s3.amazonaws.com/original/2X/9/94d8ed91d29574497ad0f2eb2cd235050132851e.png)

Ahora que sabe cómo usar el comando `ping` , puede resolver problemas básicos de su conexión de red. Con un poco de creatividad, puede trabajar con su persona de soporte de TI local o conocimiento de su topología de red y dirección IP (por ejemplo, hacer `ping` al enrutador, hacer `ping` su ISP) para identificar aún más los problemas de la red.