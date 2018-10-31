---
title: What Does JavaScript Void 0 Mean
localeTitle: O que significa JavaScript Void 0?
---
## O que significa JavaScript Void 0?

**O operador void do JavaScript avalia uma expressão e retorna indefinido** .

Usando o console para verificar o mesmo: -

![ConsoleOutput](https://github.com/srawat19/-Guide_Images/blob/master/VoidConsole.PNG?raw=true)

**_Nota_** : - **vazio** independentemente de qualquer valor repassado, _sempre retorna **indefinido** como mostrado acima_ . Mas, **nulo com operando 0 é preferido** .

**Duas maneiras de usar o operando 0 -> void (0) ou void 0.** Qualquer uma delas está bem.

#### Quando usar o Javascript void (0)?

Ao clicar no link, você não deseja que o navegador carregue uma nova página ou atualize a mesma página (dependendo do URL especificado). Em vez disso, execute o JavaScript anexado a esse link.

#### Exemplo de Exemplo 1 com Javascript void (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0);alert('Hello ! I am here')">Click Me</a> 
 </body> 
 </html> 
```

#### Saída:

Quando clicado no link do ClickMe, um alerta aparece como abaixo:

![Saída1](https://github.com/srawat19/-Guide_Images/blob/master/voidOutput1.PNG?raw=true)

#### Exemplo de Exemplo 2 com Javascript void (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )>Click Me</a> 
 </body> 
 </html> 
```

#### Saída:

Quando você clica duas vezes no link, um alerta é exibido sem nenhuma atualização de página.

#### Exemplo de Exemplo 3 com Javascript void (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0);https://www.google.co.in/" 
 ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')">Click Me</a> 
 </body> 
 </html> 
```

#### Saída:

Quando você clica duas vezes no link, um alerta é exibido, o fechamento também não redireciona para o google.com.

#### Exemplo de exemplo sem Javascript void (0):

```html

<html> 
 <body> 
 <a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')">Click Me</a> 
 </body> 
 </html> 
```

#### Saída:

Quando você clica duas vezes no link, um alerta é exibido, e o fechamento redireciona para o google.com.

#### Conclusão:

**O** operador **void** é útil quando você precisa evitar qualquer atualização ou redirecionamento de página indesejada. Em vez disso, execute alguma operação de javascript.

#### Mais Informações:

1) [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) 2) [Compreender void 0](https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm)