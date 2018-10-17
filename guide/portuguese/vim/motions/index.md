---
title: Motions
localeTitle: Movimentos
---
# Vim Basic Movimentos

### Movimentos dos cursores

Primeiro no VIM podemos usar as teclas de seta se quisermos mover o arquivo de texto, mas não é a melhor maneira de fazer isso, e perdemos a vantagem dos comandos de combinação que o VIM oferece.

Em vez disso, o padrão e a melhor maneira de percorrer o texto é usando as teclas `h` (esquerda), `j` (abaixo), `k` (acima) e `l` (direita).
```
     ^ 
     | 
     k 
 <- h   l -> 
     j 
     | 
     v 
```

A vantagem de usar essas teclas em vez das teclas de seta é combinar movimentos com outros comandos, como:

*   `d2j` -> delete 2 linhas abaixo
*   `y10k` -> copie 10 linhas para cima
*   `10l` -> move 10 caracters à direita
*   `2h` -> mova 2 caracteres restantes

### Movimentos de palavras

Uma palavra consiste em uma seqüência de letras, dígitos e sublinhados ou seqüência de outros caracteres não-brancos, separados por espaços em branco (espaços, guias, fim de linha). Uma linha vazia também é considerada uma palavra.

É possível mover palavras com este comunicado:

*   `w` -> move para a próxima palavra
*   `W` -> move para a próxima **PALAVRA** \*
*   `e` -> mova para o final da próxima palavra
*   `E` -> passar para o final da próxima **PALAVRA**
*   `b` -> mover para a palavra anterior
*   `B` -> passar para o **WORD** anterior
*   `ge` -> move para o final da palavra anterior
*   `gE` -> passar para o final da **PALAVRA** anterior

\* Um **WORD** consiste em uma seqüência de caracteres não-brancos, separados por branco espaço. Uma linha vazia também é considerada uma **PALAVRA** , ou seja: `quux(foo,` `bar,` `foo);`

Com esses movimentos combinados com outros comandos, você pode fazer coisas como:

*   `dw` -> delete a palavra
*   `5e` -> passar para o final da quinta palavra daqui

### Movimentos de pesquisa

Outra maneira de se mover pela posição que você gosta, é usar os movimentos de busca, os movimentos de busca consistem no movimento + um caractere para pesquisar

*   `fx` -> move para o próximo `x`
*   `tx` -> move para a primeira posição antes do próximo `x`
*   `;` -> próximo x
*   `Fx` -> mover para o `x` anterior
*   `Tx` -> move para a primeira posição após o `x` anterior
*   `,` -> x anterior

### Início e Fim das Linhas

Você também pode mover para o início ou fim da linha com o VIM, com estes comandos:

*   `0` -> Início da linha
*   `^` -> Primeiro caractere não-preto da linha
*   `$` -> Fim da linha

### Movimentos de arquivo

No VIM você pode se mover através do arquivo usando estes comandos:

*   `gg` -> move para a primeira linha do arquivo
*   `G` -> mover para a última linha do arquivo
*   `<ctrl> + f` -> move uma página para baixo
*   `<ctrl> + b` -> move uma página para cima
*   `/text` -> encontrar `text`
*   `n` -> move para a próxima ocorrência do `text` (comando anterior)
*   `?text` -> encontrar `text` anterior
*   `N` -> passar para a ocorrência anterior de `text`
*   `{` -> mover um parágrafo para cima
*   `}` -> mover um parágrafo para baixo
*   `(` -> mover uma frase para cima
*   `)` -> mova um sentece para baixo
*   `#` -> palavra achado sob cursor para cima
*   `*` -> encontrar a palavra sob o cursor para baixo