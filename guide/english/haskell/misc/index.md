---
title: miscellaneous
---

For when you are a bit more comfortable with how Haskell works.

## hoogle
It's like Google but for Haskell libraries

To install hoogle with stack:

```shell
    stack build hoogle
```

## haskelly
A VS code plugin that allows for easier Haskell development

Get it [here.](https://marketplace.visualstudio.com/items?itemName=UCL.haskelly)

**(Requires Intero and QuickCheck)**

Install instructions:

```
stack install intero QuickCheck stack-run  # for a global installation
stack build intero QuickCheck stack-run # for a local installation
```

## lambda bot
An irc bot written in haskell, which can evaluate Haskell and install plugins.
[Homepage](https://wiki.haskell.org/Lambdabot)

If you're using GHC 6.10.x you can install the bot using:

```shell
cabal install lambdabot
```



