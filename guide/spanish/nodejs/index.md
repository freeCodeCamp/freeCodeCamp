---
title: Node.js
localeTitle: Node.js
---
## Node.js

Node.js es un tiempo de ejecución de JavaScript creado en el motor de JavaScript V8 de Chrome. Node.js utiliza un modelo de E / S sin bloqueo controlado por eventos que lo hace ligero y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema más grande de bibliotecas de código abierto del mundo.

#### Vamos a descomponerlo.

*   JavaScript runtime construido en el motor de JavaScript V8 de Chrome.  
    Cada navegador tiene un motor JavaSript incorporado para procesar archivos JavaScript contenidos en sitios web. Google Chrome utiliza el motor V8 que se construye utilizando C ++. Node.js también usa este motor súper rápido para interpretar archivos JavaScript.
*   Node.js utiliza un modelo controlado por eventos.  
    Esto significa que Node.js espera que ciertos eventos tengan lugar. Entonces actúa sobre esos eventos. Los eventos pueden ser desde un clic hasta una solicitud HTTP. También podemos declarar nuestros propios eventos personalizados y hacer que node.js escuche esos eventos.
*   Node.js utiliza un modelo de E / S sin bloqueo.  
    Sabemos que las tareas de E / S llevan mucho más tiempo que las tareas de procesamiento. Node.js usa funciones de devolución de llamada para manejar tales solicitudes.

Supongamos que una tarea de E / S en particular tarda 5 segundos en ejecutarse. Y queremos realizar esta E / S dos veces en nuestro código.

**Python**

```python
import time 
 
 def my_io_task(): 
  time.sleep(5) 
  print("done") 
 
 my_io_task() 
 my_io_task() 
```

**Node.js**

```node
function my_io_task() { 
    setTimeout(function() { 
      console.log('done'); 
    }, 5000); 
 } 
 
 my_io_task(); 
 my_io_task(); 
```

Ambos se parecen, pero el tiempo de ejecución es diferente. El código de Python tarda 10 segundos en ejecutarse, mientras que el código Node.js tarda solo 5 segundos en ejecutarse.

Node.js toma menos tiempo debido a su modelo de E / S sin bloqueo. La primera llamada a `my_io_task()` inicia el temporizador y lo deja allí. No espera la respuesta de la función, en su lugar, pasa a llamar al segundo `my_io_task()` , inicia el temporizador y lo deja allí.

Cuando el temporizador de la completa ejecución de tomar 5 segundos, se llama a la función y las impresiones `done` en la consola. Dado que ambos temporizadores se inician juntos, se completan juntos y, por lo tanto, toman la misma cantidad de tiempo.

#### Más información:

*   [Sitio oficial de NodeJS](https://nodejs.org)
*   [Gestor de versiones de nodo](https://github.com/creationix/nvm/blob/master/README.md)
*   [n: Interactive NodeJS Version Manager](https://github.com/tj/n)
