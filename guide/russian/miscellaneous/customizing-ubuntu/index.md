---
title: Customizing Ubuntu
localeTitle: Настройка Ubuntu
---
В этом учебном пособии показано, как добавлять псевдонимы к терминалу, настраивать единство и удалять предварительно установленные вирусы.

## шаги:

### Удаление Bloatware

Чтобы удалить все предварительно установленные вирусы из-за проблем с конфиденциальностью или сохранить минимальную операционную систему, ознакомьтесь с [этим](https://gist.github.com/ansell/61313400e26cd42289f8) вопросом.

### Псевдонимы

Вы можете создать временный псевдоним следующим образом:
```
alias alias_name="command_to_run" 
```

Однако, когда вы закрываете сеанс оболочки, этот псевдоним перестает существовать.

Чтобы создать постоянный псевдоним, вам нужно создать файл `~/.bash_aliases` используя команду `touch ~/.bash_aliases` . После того, как вы открыли этот файл с помощью своего текстового редактора, добавьте строку внизу документа, аналогичную приведенному выше примеру.

Чтобы узнать больше, у DigitalOcean есть отличный учебник, который можно найти [здесь](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions) .

### Инструмент Tweak для Unity

Инструмент Unity Tweak Tool предоставляет пользователям множество настроек для настройки Unity Desktop.

Чтобы установить инструмент Unity Tweak Tool, используйте `sudo apt install unity-tweak-tool` , и запустите его, `unity-tweak-tool` .

[Вот](http://www.techrepublic.com/blog/linux-and-open-source/six-must-have-ubuntu-unity-tweaks/) список шести обязательных Ubuntu Unity Tweaks.

[**Скачать и установить Ubuntu Desktop**](//forum.freecodecamp.com/t/download-and-install-ubuntu-desktop/18383) | [**Содержание**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Раздирание терминала**](//forum.freecodecamp.com/t/jazzing-up-the-terminal/18386)