---
title: Navigation
localeTitle: навигация
---
## Навигация по Vim

### Основное движение

Есть много способов перемещения курсора в Vim, но эти основные движения позволят новые пользователи смогут комфортно использовать обычный режим для навигации по файлам.

*   В нормальном режиме клавиши `h` , `j` , `k` , `l` соответствуют перемещению курсора один символ слева, вниз, вверх и справа соответственно.
    
*   Чтобы перемещаться по одному слову за раз, клавиши `w` и `b` будут перемещать курсор на начало следующего слова или начало предыдущего слова. `e` клавиша переместит курсор в конец текущего слова.
    
*   Чтобы перейти к началу текущей строки, введите `0` и переместитесь в конец текущей строки, введите `$` .
    
*   Наконец, чтобы перейти к первой строке файла, введите `gg` и перейдите к последняя строка в файле, введите `G`
    

В итоге:

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