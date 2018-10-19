---
title: Monad
localeTitle: Monada
---
# Leyes de la mónada

Hay 3 leyes que deben ser cumplidas por un tipo de datos para ser considerado como mónada

# Tal vez mónada

```haskell
justHead :: Maybe Char 
 justHead = do 
    (x:xs) <- Just "" 
    return x 
```

# Lista Mónada

El retorno es igual al puro de aplicativo.

caso de la mónada \[\] donde  
devuelve x = \[x\]  
xs >> = f = concat (mapa f xs)  
falla \_ = \[\]