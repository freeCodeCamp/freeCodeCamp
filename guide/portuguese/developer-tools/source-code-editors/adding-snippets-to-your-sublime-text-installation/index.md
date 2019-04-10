---
title: Adding Snippets to Your Sublime Text Installation
localeTitle: Adicionando trechos à sua instalação de texto sublime
---
Se você é um usuário de texto sublime (eu espero que você esteja, ele chuta burro. Você pode obtê-lo [aqui](https://www.sublimetext.com/) ), então você já deve ter notado algumas das capacidades de conclusão de tabulação. Por exemplo, quando você está abrindo uma tag html como `<p>` , ela automaticamente fecha a tag assim que você digita `/` . Você pode obter funcionalidade semelhante para trechos de código que você acaba reescrevendo várias vezes, e é surpreendentemente fácil!

Aqui está um exemplo, que ativa depois de digitar `div` e, em seguida, aba:

![texto alternativo](//discourse-user-assets.s3.amazonaws.com/original/2X/5/59a4d233d2dcb17b76a9c36ca30c5bb07a35d00b.png)

## Passo 1.

Clique em `Tools > New Snippet...` na barra de navegação. Isso abrirá um arquivo skeletton de fragmentos que se parecerá com isto:

![texto alternativo](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a56106fbf754f7e641342d1ebdbc3f5bed582263.png)

## Passo 2.

Você adicionará o snippet substituindo o texto `Hello, ${1:this} is a ${2:snippet}.`

No caso do snippet `div` , é tão simples quanto colocar o seguinte texto na área do snippet:
```
<!-- $1 --> 
 <div class= "$1"> 
 
 </div> 
 <!-- $1 --> 
```

O operador `$` referencia as variáveis ​​que serão digitadas depois que você digitar `div` e, em seguida, a guia. Na verdade, você pode ter qualquer número deles!

## Etapa 3.

Salve o arquivo. Você pode dar qualquer nome de arquivo desejado, mas a extensão **deve** ser `.sublime-snippet` . Lembre-se, você só pode ter um snippet por arquivo! Eu gosto de dar nomes descritivos, como `html-div.sublime-snippet` .

E aí está você! Você pode ser tão criativo quanto quiser.