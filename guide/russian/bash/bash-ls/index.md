---
title: Bash ls
localeTitle: Bash ls
---## Bash ls

`ls` - это команда в Unix-подобных операционных системах для отображения содержимого каталога, например имен папок и файлов.

### использование

```bash
cat [options] [file_names] 
```

Наиболее часто используемые опции:

*   `-a` , все файлы и папки, в том числе скрытые и начинающиеся с `.`
*   `-l` , Список в длинном формате
*   `-G` , включить цветной вывод.

### Пример:

Список файлов в `freeCodeCamp/guide/`

```bash
ls                                                                ⚬ master 
 CODE_OF_CONDUCT.md bin                package.json       utils 
 CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock 
 LICENSE.md         gatsby-config.js   src 
 README.md          gatsby-node.js     static 
 assets             gatsby-ssr.js      translations 
```

#### Дополнительная информация:

*   [Википедия](https://en.wikipedia.org/wiki/Ls)