---
title: Comments in HTML
localeTitle: Comentários em HTML
---
## Comentários em HTML

A tag de comentário é um elemento usado para deixar notas, principalmente relacionadas ao projeto ou ao site. Essa tag é freqüentemente usada para explicar algo no código ou deixar algumas recomendações sobre o projeto. A tag de comentário também torna mais fácil para o desenvolvedor voltar e entender o código que ele escreveu em um estágio posterior. Os comentários também podem ser usados ​​para comentar linhas de código para fins de depuração.

É recomendável adicionar comentários ao seu código, especialmente ao trabalhar com uma equipe ou empresa.

Os comentários são iniciados com `<!--` e terminados com `-->` e podem abranger várias linhas. Eles podem conter código ou texto e não aparecerão no front-end do site quando um usuário visitar uma página. Você pode visualizar comentários por meio do Inspector Console ou exibindo Page Source.

### Exemplo

```html

<!-- You can comment out a large number of lines like this. 
 Author: xyz 
 Date: xx/xx/xxxx 
 Purpose: abc 
 --> 
 Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR 
 <!DOCTYPE html> 
 <html> 
    <body> 
        <h1>FreeCodeCamp web</h1> 
        <!-- Leave some space between the h1 and the p in order to understand what are we talking about--> 
        <p>FreeCodeCamp is an open-source project that needs your help</p> 
            <!-- For readability of code use proper indentation --> 
    </body> 
 </html> 
```

## Comentários condicionais

Os Comentários condicionais definem algumas tags HTML a serem emitidas quando uma determinada codificação é preenchida.

Os comentários condicionais são reconhecidos apenas pela versão 5 do Internet Explorer até a versão 9 - IE5 - IE9.

### Exemplo

```html

<!DOCTYPE html> 
 <html> 
    <body> 
        <!--[if IE 9]> 
                <h1>FreeCodeCamp web</h1> 
            <p>FreeCodeCamp is an open-source project that needs your help</p> 
        <![endif]--> 
    </body> 
 </html> 
```

### Comentários condicionais do IE

Esses comentários estão disponíveis apenas no Internet Explorer e podem ser usados ​​até o IE9. Nos tempos atuais, há uma boa mudança que você nunca verá, mas é bom saber sobre sua existência. Os comentários condicionais são uma maneira de oferecer uma experiência diferente para diferentes navegadores de clientes. Por exemplo:

```html

<!--[if lt IE 9]> <p>Your browser is lower then IE9</p> <![endif]--> 
 <!--[if IE 9]> <p>Your browser is IE9</p> <![endif]--> 
 <!--[if gt IE 9]> <p>Your browser is greater then IE9</p> <![endif]--> 
```

[Sobre comentários condicionais](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)