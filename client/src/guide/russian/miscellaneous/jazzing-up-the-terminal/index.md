---
title: Jazzing Up the Terminal
localeTitle: Раздирание терминала
---
Из коробки терминал, поставляемый с Ubuntu, немного мягкий. Этот раздел позволит вам стать пользователем власти ![:muscle:](//forum.freecodecamp.com/images/emoji/emoji_one/muscle.png?v=2 ": Мышцы:") ,

## Инструменты:

#### терминатор

[Терминатор](https://launchpad.net/terminator) позволяет организовать несколько терминалов в сетчатом интерфейсе.  
Для установки терминатора введите терминал терминалов `sudo apt-get install terminator` .

Скриншот Terminator:

![Скриншот Terminator](//discourse-user-assets.s3.amazonaws.com/original/2X/6/6af4988ebfb1835ff3c19366865eaaaaf224cb19.png)

#### О, мой ZSH!

Предпосылки:

*   `git` должен быть установлен

Для установки `ZSH` и `Oh My ZSH!` используйте следующие команды:
```
sudo apt install zsh && chsh -s $(which zsh) 
```

> Примечание: вам нужно будет выйти из системы и снова использовать ZSH вместо bash в качестве оболочки по умолчанию.
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" 
```

Как только вы перезапустите свой терминал, `Oh My ZSH!` должен быть установлен.

Оформить [официальную документацию,](https://github.com/robbyrussell/oh-my-zsh/wiki) чтобы узнать, как устанавливать плагины и темы.

#### Продвинутые учебные пособия

*   [Курс командной строки](http://cli.learncodethehardway.org/book/)
*   [Искусство командной строки](https://github.com/jlevy/the-art-of-command-line)
*   [Узнайте, достаточно ли командной строки, чтобы быть опасным](https://www.learnenough.com/command-line-tutorial)

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая | ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") | следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:")  
[**Настройка Ubuntu**](//forum.freecodecamp.com/t/customizing-ubuntu/18382) | [**Содержание**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Установка DevTools и современных веб-браузеров**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385)