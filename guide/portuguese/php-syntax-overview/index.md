---
title: PHP Syntax Overview
localeTitle: Visão Geral da Sintaxe do PHP
---
Este capítulo lhe dará uma idéia da sintaxe muito básica do PHP e é muito importante para tornar sua base do PHP forte.

### Escapando para o PHP

O mecanismo de análise do PHP precisa de uma maneira de diferenciar o código PHP de outros elementos da página. O mecanismo para fazer isso é conhecido como 'escapando para o PHP'. Existem quatro maneiras de fazer isso

#### Tags PHP canônicas

O estilo de tag PHP mais universalmente eficaz é -
```
<?php...?> 
```

Se você usar esse estilo, pode ter certeza de que suas tags sempre serão interpretadas corretamente.

#### Tags abreviadas (estilo SGML)

Tags curtas ou abreviadas se parecem com isso -
```
<?...?> 
```

Tags curtas são, como se poderia esperar, a opção mais curta Você deve fazer uma das duas coisas para permitir que o PHP reconheça as tags -

Escolha a opção de configuração --enable-short-tags quando você está construindo o PHP.

Defina a configuração de tag de _abertura_ curta em seu arquivo php.ini para on. Essa opção deve ser desativada para analisar XML com PHP porque a mesma sintaxe é usada para tags XML.

#### Tags de estilo ASP

As tags de estilo ASP imitam as tags usadas pelo Active Server Pages para delinear blocos de código. Tags de estilo ASP se parecem com isso -
```
<%...%> 
```

Para usar tags no estilo ASP, você precisará definir a opção de configuração no arquivo php.ini.

#### Tags de script HTML

Tags de script HTML se parecem com isso -
```
<script language="PHP">...</script> 
```

### Comentando o código PHP

Um comentário é a parte de um programa que existe apenas para o leitor humano e retirado antes de exibir o resultado do programa. Existem dois formatos de comentário em PHP -

#### Comentários de linha única -

Eles geralmente são usados ​​para breves explicações ou notas relevantes para o código local. Aqui estão os exemplos de comentários de linha única.

\`\` \` <? # Este é um comentário e # Esta é a segunda linha do comentário

// Este é um comentário também. Cada estilo só comenta print "Um exemplo com comentários de linha única"; ?>
```
#### Multi-lines printing − 
 Here are the examples to print multiple lines in a single print statement − 
 
 ``` 
 <? 
   # First Example 
   print <<<END 
   This uses the "here document" syntax to output 
   multiple lines with $variable interpolation. Note 
   that the here document terminator must appear on a 
   line with just a semicolon no extra whitespace! 
   END; 
 
   # Second Example 
   print "This spans 
   multiple lines. The newlines will be 
   output as well"; 
 ?> 
```

#### Comentários em várias linhas -

Eles geralmente são usados ​​para fornecer algoritmos de pseudocódigo e explicações mais detalhadas quando necessário. O estilo multilinha de comentar é o mesmo que em C. Aqui está o exemplo de comentários de várias linhas.
```
<? 
   /* This is a comment with multiline 
      Author : Mohammad Mohtashim 
      Purpose: Multiline Comments Demo 
      Subject: PHP 
   */ 
 
   print "An example with multi line comments"; 
 ?> 
```

### PHP é insensível a espaços em branco

Espaços em branco são as coisas que você digita que normalmente são invisíveis na tela, incluindo espaços, tabulações e retornos de carro (caracteres de final de linha).

O espaço em branco do PHP insensível significa que quase nunca importa quantos caracteres de espaço em branco você tem em uma linha. Um caractere de espaço em branco é o mesmo que muitos desses caracteres.

Por exemplo, cada uma das seguintes instruções do PHP que atribui a soma de 2 + 2 à variável $ quatro é equivalente -
```
$four = 2 + 2; // single spaces 
 $four <tab>=<tab2<tab>+<tab>2 ; // spaces and tabs 
 $four = 
 2+ 
 2; // multiple lines 
```

### PHP é case sensitive

Sim, é verdade que o PHP é uma linguagem que diferencia maiúsculas de minúsculas. Experimente o seguinte exemplo -
```
<html> 
   <body> 
 
      <?php 
         $capital = 67; 
         print("Variable capital is $capital<br>"); 
         print("Variable CaPiTaL is $CaPiTaL<br>"); 
      ?> 
 
   </body> 
 </html> 
```

Isso produzirá o seguinte resultado -
```
Variable capital is 67 
 Variable CaPiTaL is 
```

### Declarações são expressões terminadas por ponto e vírgula

Uma instrução em PHP é qualquer expressão que é seguida por um ponto-e-vírgula (;) Qualquer sequência de instruções PHP válidas contidas nas tags PHP é um programa PHP válido. Aqui está uma declaração típica em PHP, que neste caso atribui uma string de caracteres a uma variável chamada $ greeting -
```
$greeting = "Welcome to PHP!"; 
```

### Expressões são combinações de tokens

Os menores blocos de construção do PHP são os tokens indivisíveis, como números (3.14159), strings (. Dois), variáveis ​​($ dois), constantes (TRUE) e as palavras especiais que compõem a sintaxe do próprio PHP como se , mais, enquanto, por e assim por diante

### Chaves fazem blocos

Embora as instruções não possam ser combinadas como expressões, você sempre pode colocar uma sequência de instruções em qualquer lugar que uma instrução possa ir colocando-as em um conjunto de chaves.

Aqui ambas as declarações são equivalentes -
```
if (3 == 2 + 1) 
   print("Good - I haven't totally lost my mind.<br>"); 
 
 if (3 == 2 + 1) { 
   print("Good - I haven't totally"); 
   print("lost my mind.<br>"); 
 } 
```

### Executando Script PHP no Prompt de Comando

Sim, você pode executar seu script PHP no seu prompt de comando. Supondo que você tenha o seguinte conteúdo no arquivo test.php
```
<?php 
   echo "Hello PHP!!!!!"; 
 ?> 
```

Agora, execute este script como um prompt de comando da seguinte maneira:
```
$ php test.php 
```

Produzirá o seguinte resultado -
```
Hello PHP!!!!! 
```

Espero que agora você tenha conhecimentos básicos de PHP Syntax.