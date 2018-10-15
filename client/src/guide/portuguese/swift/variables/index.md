---
title: Variables
localeTitle: Variáveis
---
## Variáveis

Uma variável associa um nome a um valor de um tipo específico. No Swift, existem duas maneiras principais de criar variáveis. `let` e `var` . Para declarar constantes, use a palavra-chave `let` . Para declarar variáveis ​​mutáveis, use a palavra-chave `var` .

O benefício de ter duas maneiras de armazenar variáveis ​​no Swift é evitar erros de variáveis ​​variáveis ​​que devem ser constantes.

\`\` \`Swift deixe daysInAWeek = 7 var amountOfMoney = 100

amountOfMoney = 150 // amountOfMoney agora é de 150

daysInAWeek = 10 // Isso nos dá um erro!

\`\` \`

Nesse caso, a variável `daysInAWeek` deve ser uma constante porque há apenas sete dias em uma semana, enquanto a variável `amountOfMoney` deve ser um var porque a quantidade de dinheiro na conta é alterada.

Os nomes constantes e variáveis ​​podem conter praticamente qualquer caractere, incluindo caracteres Unicode:

```Swift
  let π = 3.14159 
  let 你好 = "你好世界" 
  let 🐶🐮 = "dogcow" 
```

Para testar se suas variáveis ​​possuem o valor correto, use `print()` .

```Swift
  let money = 50 
 
  print(money) 
  // This prints 50 
```

#### Mais Informações:

*   [A linguagem de programação rápida](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)