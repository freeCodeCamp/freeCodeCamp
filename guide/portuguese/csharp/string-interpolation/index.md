---
title: String Interpolation
localeTitle: Interpolação de Cadeias
---
# Interpolação de Cadeias

Em C #, normalmente para concatenar strings, você usaria o operador “+” ou a formatação composta com um método como String.Format. Por formatação composta, estou me referindo a uma cadeia de formato com espaços reservados indexados (itens de formato) e uma lista de objetos a serem usados ​​nos espaços reservados.

# #
```
string message = "Hello " + firstName + " " + lastName + "!"; 
 
 string message2 = string.Format("Hello {0} {1}!", firstName, lastName); 
```

Com expressões de string interpoladas, você tem uma string com expressões contidas que são substituídas pelos resultados das expressões. Você precisa prefixar sua string literal com um sinal de dólar ($). As expressões que você deseja incluir na string são colocadas em linha entre chaves. A mensagem acima ficaria assim:

# #
```
string message = $"Hello {firstName} {lastName}!"; 
```

**Pouco de informação útil** Na interpolação de string, você pode chamar funções, propriedades e operadores ternários:
```
int a = 3; 
 int b = 454; 
 string result = $"{a}+{b} = {a+b}"; 

```