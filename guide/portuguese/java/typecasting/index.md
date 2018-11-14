---
title: Typecasting
localeTitle: Typecasting
---## Typecasting

Converter um tipo de dados em outro tipo de dados é conhecido como conversão de tipo. Desde a Java é uma linguagem de programação Orientada a Objetos e suporta **Inheritance** e **Polymorphism** . É fácil que a variável de referência super class esteja apontando para o objeto subClass.

Quando atribuímos o valor de um tipo de dados a outro, os dois tipos podem não ser compatíveis entre si. Se os tipos de dados forem compatíveis, a JVM executará a conversão automaticamente conhecida como conversão automática de tipo e, caso contrário, será necessário converter ou converter explicitamente.

### Tipos de Typecasting

Java, tipo casting é classificado em dois tipos.

**_1\. Tipografia Implícita_** Aqui, o vazamento automático ocorre quando os dois tipos são compatíveis o tipo de destino é maior que o tipo de origem. por exemplo. \`\` \`java int i = 100; long l = i; // nenhum tipo explícito de casting requerido float f = l; // nenhum tipo explícito de casting requerido
```
***2.  Explicit Typecasting*** 
 When we assign a larger type value to a variable of smaller type, then we need to perform explicit type casting. 
 eg. 
```

Java d duplo = 100,04; long l = (long) d; // casting de tipo explícito requerido int i = (int) l; // casting de tipo explícito requerido \`\` \`

#### Mais Informações:

*   [Oracle Java Docs: Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)