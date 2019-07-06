---
title: sapply() Function
localeTitle: Função sapply()
---
## Função sapply()

A função `sapply()` é parte da família de funções `apply()` que nos ajudam a manipular dados. Ela recebe 2 ou mais parâmetros e retorna um vetor ou uma matriz. O primeiro parâmetro pode ser um vetor ou um data frame. O segundo parâmetro é geralmente uma função que você deseja utilizar com os elementos de coluna do primeiro parâmetro.

Você pode usar `sapply` para retornar o máximo de cada coluna de um data frame como um vetor.

```r
df <- data.frame(a = c(49, 12, 32, 21, 16), b = c(22, 39, 8, 54, 26))
df
#      a    b   
# 1   49   22  
# 2   13   39   
# 3   32    8   
# 4   21   54  
# 5   16   26  
df <- sapply(df, max)
df
#  a   b
# 49  54  
```

No exemplo acima, o data frame é transformado utilizando a função `sapply()` diretamente sobre ele.

Você também pode usar a `sapply()` dentro de uma função.

```r
df <- data.frame(a = c(49, 12, 32, 21, 16), b = c(22, 39, 8, 54, 26))
df
#      a    b   
# 1   49   22  
# 2   13   39   
# 3   32    8   
# 4   21   54  
# 5   16   26  

# Função para retornar o valor máximo de cada coluna para qualquer dataframe
colMax <- function(data) sapply(data, max)

# maxes é um vetor com os valores máximos de cada coluna do dataframe df
maxes <- colMax(df)
maxes
#  a   b
# 49  54
```

Você pode usar várias funções nativas do R como por exemplo `sqrt`, `min` ou `mean` com a função `sapply()`.

## Referências

- [Study Trails](http://www.studytrails.com/r/core/control_structures_r_apply_functions/)
- [bookdown](https://bookdown.org/rdpeng/rprogdatascience/loop-functions.html)
- [DataCamp](https://www.datacamp.com/community/tutorials/r-tutorial-apply-family)
- [Advanced R](http://adv-r.had.co.nz/Functionals.html)
