---
title: Exceptions and Errors Handling
localeTitle: Exceções e erros no manuseio
---
## Exceções e erros no manuseio

Ao criar um programa, podemos cometer erros que terminam com erros e os piores programas que deixamos de executar, seria ainda mais irritante se não pudéssemos encontrar erros no código que fizemos ou o que estava errado. Em palavras simples, os erros são algo que os programadores evitam ao criar um programa. Para resolver este problema em python podemos usar `try` e `except`

Exemplo:

```shell
>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except: 
 >>> . . . print "error" 
 error 
```

e se você deseja obter mensagens de erro com mais detalhes do seu código, você pode adicionar argumentos, `except Exception as err`

```shell
>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except Exception as err: 
 >>> . . . print "error:\n"+str(err) 
 error: 
 cannot concatenate 'str' and 'int' objects 
```

Mais Informações:

[Documentação de](https://docs.python.org/2/tutorial/errors.html) Erros e Exceções.