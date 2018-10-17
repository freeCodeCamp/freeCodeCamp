---
title: Haskell
localeTitle: Haskell
---
## Что такое Haskell?

Haskell - стандартизированный, универсальный, чисто функциональный язык программирования с декларативной и сильной статической типизацией.

У Хаскелла есть глубокие корни в математике, и вы скоро научитесь ценить последствия этого.

## Версия

В настоящее время последняя версия GHC составляет 8,6 (по состоянию на 12 октября 2018 года)

## Монтаж

Рекомендуемый способ установки Haskell - использование stack: [stack download](https://docs.haskellstack.org/en/stable/README/#how-to-install) Stack - это кросс-платформенная программа для разработки проектов Haskell. Он нацелен на Haskellers как новых, так и опытных.

Чтобы начать использовать Haskell, вам нужен GHC (компилятор Glasgow Haskell), поэтому для настройки: [настройка стека](https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide)

```shell
stack new my-project 
 cd my-project 
 stack setup 
 stack build 
 stack exec my-project-exe 
```

Слово осторожное, постарайтесь не использовать установку стека даже если он будет устанавливать пакет по всему миру, это не рекомендуется, так как разные версии пакетов совместимы с различными версиями GHC. Следовательно, использование локальной копии пакета с использованием сборки стека - лучший способ следовать.

## Привет мир

```haskell
main :: IO () 
 main = print "Hello Haskell :)" 
```

Сохраните код выше в файле с именем «hello.hs» и сохраните.

Чтобы скомпилировать пример Hello World, это преобразует наш код haskell в машинные понятные байт-коды.

```shell
stack ghc hello.hs 
 ./hello 
```

## Документация

Hackage предоставляет документацию для Haskell

## Хотите узнать больше?

*   [Ссылка на](https://wiki.haskell.org/Haskell) Haskell wiki