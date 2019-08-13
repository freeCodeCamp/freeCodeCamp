---
title: Node.js
localeTitle: Node.js
---
## Node.js

O Node.js é um tempo de execução de JavaScript criado no mecanismo JavaScript V8 do Chrome. O Node.js usa um modelo de E / S sem bloqueio orientado a eventos que o torna leve e eficiente. O ecossistema de pacotes do Node.js, npm, é o maior ecossistema de bibliotecas de código aberto do mundo.

#### Vamos acabar com isso.

*   Tempo de execução de Javascript criado no mecanismo JavaScript V8 do Chrome.  
    Cada navegador tem um mecanismo JavaSript embutido para processar arquivos JavaScript contidos em sites. O Google Chrome usa o mecanismo V8, que é criado usando o C ++. O Node.js também usa esse mecanismo super rápido para interpretar arquivos JavaScript.
*   O Node.js usa um modelo controlado por eventos.  
    Isso significa que o Node.js aguarda determinados eventos. Em seguida, ele age nesses eventos. Os eventos podem ser qualquer coisa, desde um clique até uma solicitação HTTP. Também podemos declarar nossos próprios eventos personalizados e fazer o node.js escutar esses eventos.
*   O Node.js usa um modelo de E / S sem bloqueio.  
    Sabemos que as tarefas de E / S levam muito mais tempo do que as tarefas de processamento. O Node.js usa funções de retorno para lidar com tais solicitações.

Vamos supor que uma tarefa de E / S específica leve 5 segundos para ser executada. E queremos executar essa E / S duas vezes em nosso código.

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

```js
function my_io_task() { 
    setTimeout(function() { 
      console.log('done'); 
    }, 5000); 
 } 
 
 my_io_task(); 
 my_io_task(); 
```

Ambos parecem semelhantes, mas o tempo gasto para executar é diferente. O código python leva 10 segundos para ser executado enquanto o código Node.js leva apenas 5 segundos para ser executado.

O Node.js leva menos tempo devido ao seu modelo de E / S sem bloqueio. A primeira chamada para `my_io_task()` inicia o cronômetro e o deixa lá. Ele não espera pela resposta da função, em vez disso, passa a chamar o segundo `my_io_task()` , inicia o cronômetro e o deixa lá.

Quando o temporizador conclui sua execução, levando 5 segundos, ele chama a função e as impressões `done` no console. Já que ambos os temporizadores são iniciados juntos, eles se completam juntos e, portanto, levam o mesmo tempo.

#### Mais Informações:

*   [Site oficial do NodeJS](https://nodejs.org)
*   [Gerenciador de versões de nó](https://github.com/creationix/nvm/blob/master/README.md)
*   [n: Gerenciador interativo de versões do NodeJS](https://github.com/tj/n)