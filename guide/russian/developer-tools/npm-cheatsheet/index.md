---
title: npm Cheat Sheet
localeTitle: npm Cheat Sheet
---
## npm Cheat Sheet

Список команд терминала и флаги, которые помогут использовать `npm`

## устанавливать зависимости `package.json`

```shell
npm install 
```

**стенография**

```shell
# install 
 npm i <package> 
 # uninstall 
 npm un <package> 
 # update 
 npm up <package> 
```

## Перечислите глобально установленные пакеты.

```shell
npm list -g --depth=0 
```

## Удалить глобальный пакет

```shell
npm -g uninstall <name> 
```

## Обновление NPM в Windows

Попробовав несколько раз обновить npm в Windows, я обнаружил это, пока он соскальзывает в папках npm.

```shell
npm-windows-upgrade 
```

## Обновление глобальных пакетов

Чтобы узнать, какие пакеты необходимо обновить, используйте:

```shell
npm outdated -g --depth=0 
```

Чтобы обновить глобальные пакеты по отдельности, вы можете использовать:

```shell
npm update -g <package> <package> <package> 
```

## список доступных скриптов для запуска

```shell
npm run 
```

## обновить npm

```shell
npm install -g npm@latest 
 # using windows? Then use 
 npm-windows-upgrade 
```

## флаги

`-S` - это то же самое, что `--save` не требуется в npm 5+ `-D` - это то же самое, что и `--save-dev`

## установленная версия

```shell
npm list # for local packages 
```

## Node Version Manager `nvm`

Предположим, вы хотите установить Node v6.9.1, который вы бы записали на терминале:

```shell
nvm install 6 
```

Если в вашей рабочей области установлено несколько версий Node.js, вы можете перейти к определенной версии, написав:

```shell
nvm use 4.8.4 
```

### Создание версии узла по умолчанию.

Чтобы установить версию узла по умолчанию для вашей рабочей области, просто введите:

```shell
nvm alias default 6 
```

Где 6 была версия, которую вы хотели использовать по умолчанию.