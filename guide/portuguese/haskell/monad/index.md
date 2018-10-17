---
title: Monad
localeTitle: Mônada
---
# Leis de Monad

Existem 3 leis que devem ser satisfeitas por um tipo de dados para serem consideradas como mônadas

# Talvez Mônada

```haskell
justHead :: Maybe Char 
 justHead = do 
    (x:xs) <- Just "" 
    return x 
```

# Listar Monad

retorno é o mesmo que puro de aplicativo

instância Monad \[\] onde  
return x = \[x\]  
xs >> = f = concat (mapa f xs)  
falhar \_ = \[\]