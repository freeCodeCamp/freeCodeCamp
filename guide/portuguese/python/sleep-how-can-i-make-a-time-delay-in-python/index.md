---
title: Sleep How Can I Make a Time Delay in Python
localeTitle: Sleep como posso fazer um atraso de tempo em Python
---
## "Sleep"; como posso fazer um atraso de tempo em Python

O módulo de `time` na biblioteca padrão do Python contém a função `sleep()` que pausa um programa por um determinado número de segundos. Após esse tempo, o programa continua sendo executado.

Exemplo:
```
import time 
 
 for letter in 'hello, world!': 
    print(letter) 
    time.sleep(2)  # sleep 2 seconds between each print 
```

Números de ponto flutuante podem ser dados como argumento para `sleep()` para tempos de sono mais precisos.

#### Mais Informações:

[Documentação do](https://docs.python.org/3/library/time.html#time.sleep) módulo de tempo na função dormir.
