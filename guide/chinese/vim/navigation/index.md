---
title: Navigation
localeTitle: 导航
---
## Vim导航

### 基本动作

有许多方法可以在Vim中移动光标，但这些基本动作将允许 新用户可以使用普通模式进行文件导航。

*   在正常模式下，键`h` ， `j` ， `k` ， `l`对应于移动光标 一个字符分别为左，下，上和右。
    
*   要一次导航一个单词，键`w`和`b`将光标移动到 下一个单词的开头，或前一个单词的开头。 `e` 键将光标移动到当前单词的末尾。
    
*   要移至当前行的开头，请键入`0` ，然后移至末尾 当前行，键入`$` 。
    
*   最后，要移动到文件的第一行，输入`gg` ，然后移动到 在文件的最后一行，输入`G`
    

综上所述：

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