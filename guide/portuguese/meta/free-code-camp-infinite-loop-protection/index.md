---
title: Free Code Camp Infinite Loop Protection
localeTitle: Proteção de Loop Infinito do Code Camp Livre
---
O [executor de](https://github.com/jsbin/loop-protect) código do Free Code Camp possui um recurso Infinite Loop Protect, aproveitado do [Loop Protect](https://github.com/jsbin/loop-protect) do [JSBin](https://github.com/jsbin/loop-protect) . A proteção de loop injeta algum código em loops criados pelo usuário para permitir uma saída segura se mais de ~ 500 ms passar sem sair do loop. Loop protect irá capturar muitos, mas nem todos os problemas de loop infinito. Se você vir esta mensagem:

`Error: Potential infinite loop at line X`

Isso significa que você foi protegido de um loop infinito.

**Nota: O** Loop Protect não pode detectar recursão infinita.

## Desativar Loop Protect

Em alguns casos - um computador lento ou um loop longo - você pode obter uma proteção de loop incorreta. Para desabilitar a proteção de loop, inclua o seguinte comentário na linha que a lista de mensagens de proteção de loop contém:

`//noprotect`

**Aviso:** Desativar a proteção de loop significa que você pode potencialmente permitir que seu código entre em um loop infinito, fazendo com que seu navegador não responda.

## Recuperando código sem resposta

Se você errou e desativou incorretamente a proteção de loop e agora tem uma solução que não responde, é possível desativar a Execução Automática de Código.

Por padrão, o site Free Code Camp carrega e executa automaticamente sua última solução gravada. Se você criou acidentalmente um loop infinito ou outro erro irrecuperável ou simplesmente não confia no código, é possível desativar a execução automática de código, colocando o seguinte no seu URL: run = disabled

Exemplo:
```
URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?solution=function%20meetBonfire(argument) 
 
 No-Run URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?run=disabled&solution=function%20meetBonfire(argument) 

```