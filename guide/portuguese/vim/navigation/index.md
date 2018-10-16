---
title: Navigation
localeTitle: Navegação
---
## Navegação Vim

### Movimento básico

Há muitas maneiras de mover o cursor no Vim, mas esses movimentos básicos permitirão novos usuários se sintam confortáveis ​​usando o modo normal para navegação de arquivos.

*   No modo normal, as teclas `h` , `j` , `k` , `l` correspondem ao movimento do cursor um caractere para a esquerda, para baixo, para cima e para a direita, respectivamente.
    
*   Para navegar uma palavra por vez, as teclas `w` e `b` moverão o cursor para o início da próxima palavra ou o início da palavra anterior. `e` A tecla moverá o cursor até o final da palavra atual.
    
*   Para ir para o início da linha atual, digite `0` e vá para o final da linha atual, digite `$` .
    
*   Finalmente, para ir para a primeira linha do arquivo, digite `gg` e mova para o última linha no arquivo, digite `G`
    

Em suma:

```vim
h   moves one character left 
 j   moves one row down 
 k   moves one row up 
 l   moves one character right 
 
 w   moves to the beginning of the next word 
 b   moves to the beginning of the previous word 
 e   moves to the end of the current word 
 
 0   moves to the beginning of the current line 
 $   moves to the end of the current line 
 :n  moves to line n (ex. :23 moves to line 23) can also use nG 
 
 ZZ  moves to the center of the line your on 
 H   moves to the top of the screen 
 M   moves to the middle of the screen 
 L   moves to the bottom of the screen 
 
 gg  moves to the first line in the file 
 G   moves to the last line in the file 

```