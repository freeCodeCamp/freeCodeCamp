---
title: Bash Man
localeTitle: Bash Man
---
## комманда man

Доступ к справочным руководствам, хранимым в системе Linux, предоставляет команда man. После ввода команды man, за которой следует имя конкретной программы, открывается запись интерактивного руководства, относящаяся к этой программе. 

### использование

```bash
man [опции] [имя программы] 
```

Наиболее часто используемые опции:

*   `-f` , напечатать краткое описание данной команды
*   `-a` , последовательно отображать все доступные внутренние справочные страницы, содержащиеся в руководстве

### примеры

* Отобразить страницу со справочным руководством для комманды `ls`  - наберите `man ls`(фрагмент вывода):

```bash
$ man ls 
LS(1)                                                          User Commands                                                         LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about the FILEs (the current directory by default).  Sort entries alphabetically if none of -cftuvSUX nor --sort
       is specified.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..

       --author
              with -l, print the author of each file

       -b, --escape
              print C-style escapes for nongraphic characters
...
```
* можно даже прочитать про ASCII-таблицу - наберите `man ascii` (фрагмент вывода):

```bash
ASCII(7)                                                 Linux Programmer's Manual                                                ASCII(7)

NAME
       ascii - ASCII character set encoded in octal, decimal, and hexadecimal

DESCRIPTION
       ASCII  is the American Standard Code for Information Interchange.  It is a 7-bit code.  Many 8-bit codes (e.g., ISO 8859-1) contain
       ASCII as their lower half.  The international counterpart of ASCII is known as ISO 646-IRV.

       The following table contains the 128 ASCII characters.

       C program '\X' escapes are noted.

       Oct   Dec   Hex   Char                        Oct   Dec   Hex   Char
       ────────────────────────────────────────────────────────────────────────
       000   0     00    NUL '\0' (null character)   100   64    40    @
       001   1     01    SOH (start of heading)      101   65    41    A
       002   2     02    STX (start of text)         102   66    42    B
       003   3     03    ETX (end of text)           103   67    43    C
       004   4     04    EOT (end of transmission)   104   68    44    D
       005   5     05    ENQ (enquiry)               105   69    45    E
       006   6     06    ACK (acknowledge)           106   70    46    F
       007   7     07    BEL '\a' (bell)             107   71    47    G
       010   8     08    BS  '\b' (backspace)        110   72    48    H
       011   9     09    HT  '\t' (horizontal tab)   111   73    49    I
       012   10    0A    LF  '\n' (new line)         112   74    4A    J
...
```


#### Дополнительная информация:

*   Википедия: https://ru.wikipedia.org/wiki/Man
