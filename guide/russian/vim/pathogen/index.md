---
title: Pathogen
localeTitle: патогенный микроорганизм
---
## патогенный микроорганизм

Pathogen помогает вам легко управлять своим временем выполнения.

Он позволяет легко установить пакет для Vim.

Выполните следующие команды:
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \ 
 curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim 
```

* * *

## Манипуляция пути выполнения

Добавьте эту команду в файл .vimrc:
```
execute pathogen#infect() 
```

Если у вас нет файла .vimrc, введите `vim ~/.vimrc` и вставьте это:
```
execute pathogen#infect() 
 syntax on 
 filetype plugin indent on 
```

Это очень простой пример. В этот момент каждый плагин будет извлечен в `~/.vim/bundle` и будет добавлен в _`runtimepath`_

* * *

#### | пример

Если вы хотите установить такие плагины, как NERDTree, просто запустите это:
```
cd ~/.vim/bundle 
 git clone https://github.com/scrooloose/nerdtree 
```

Он будет добавлен к \_ `runtimepath` .

Курированный источник Vim плагинов: [Vim Awesome](https://vimawesome.com)