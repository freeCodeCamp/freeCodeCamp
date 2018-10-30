---
title: Haskell
localeTitle: Haskell
---
## Что такое Haskell?

Haskell - стандартизированный декларативный универсальный функциональный язык программирования с сильной статической типизацией.


Haskell глубоко уходит корнями в математику, скоро вы оцените его преимущества.


## Версии


В настоящее время последняя версия GHC - 8.6 (по состоянию на 12 октября 2018 года).


## Установка

Рекомендуемый способ установки Haskell - использование stack: [stack download](https://docs.haskellstack.org/en/stable/README/#how-to-install). Stack - это кросс-платформенная среда для разработки проектов Haskell, нацеленная на повсеместное использование как опытными хаскелерами, так и новичками.


Чтобы начать использовать Haskell нужен GHC (Glasgow Haskell Compiler), поэтому для установки можно воспользоваться [этой ссылкой](https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide), или просто набрав в консоли:

```shell
stack new my-project 
 cd my-project 
 stack setup 
 stack build 
 stack exec my-project-exe 
```

## Внимание
Постарайтесь не использовать `stack install`, т.к. эта команда будет устанавливать пакет глобально, что не рекомендуется, так как разные версии пакетов могут быть не совместимы с разными версиями GHC. Поэтому лучшим вариантов является локальная установка с использованием `stack`.

## Hellow, world!

```haskell
main :: IO () 
 main = print "Hello Haskell :)" 
```

Сохраните код в файле с названием «hello.hs».

Чтобы скомпилировать его и запустить, наберите

```shell
stack ghc hello.hs 
 ./hello 
```

## Документация

[Haskell.org](https://www.haskell.org/documentation) - книги, курсы по Haskell
[Hackage](https://hackage.haskell.org) - пакетный менеджер для Haskell

## Хотите узнать больше?

*   [Ссылка на](https://wiki.haskell.org/Haskell) Haskell wiki

