---
title: Split
localeTitle: Dividido
---
# Abrindo arquivos no Vim com o Split

No Vim, os arquivos podem ser abertos ou `split` horizontalmente e verticalmente para criar uma janela ou viewport adicional para um determinado arquivo.

### Teclas de Comando

Os comandos para criar uma divisão horizontal:

: `[N]split` `[file]`

: `[N]sp` `[file]`

onde `sp` é a abreviatura curta para `split` .

Os comandos para criar uma divisão vertical:

: `[N]vsplit` `[file]`

: `[N]vs` `[file]`

onde `vs` é a abreviatura curta para `vsplit` e…

*   `[N]` é a altura (o padrão é metade da janela atual).
*   `[file]` é o arquivo a ser aberto na nova janela dividida (arquivo atual usado se nenhum for dado).

### Exemplos

Alguns exemplos de uso da divisão no Vim:

*   : `sp` Dividir a janela atual em janelas horizontais iguais para o arquivo atual.
*   : `10sp` Dividir a janela atual criando uma nova janela com altura 10 para o arquivo atual.
*   : `sp` `index.html` Divida a janela atual em janelas horizontais iguais e abra `index.html` na nova janela.
*   : `vs` `main.css` Divide a janela atual em janelas verticais iguais e abre `main.css` na nova janela.