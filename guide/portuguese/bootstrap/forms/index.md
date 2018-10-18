---
title: Forms
localeTitle: Formulários
---
## \## Forms

A estrutura do Bootstrap fornece um recurso de formulário que um programador pode usar para criar facilmente formulários HTML bonitos. O uso do formulário de bootstrap fornece a cada elemento de formulário individual um estilo global unificado. Formulário Bootstrap adiciona o espaçamento certo e olha para cada elemento.

Cada elemento de formulário de bootstrap deve ter um _controle de formulário de_ classe. Essa classe é como o bootstrao sabe quais elementos devem ser estilizados. Todos os elementos textuais como **input,** **textarea** e **selecione** que tem classe _de controle de formulário_ terá% largura de 100 por padrão. Existem dois tipos de formulários do Bootstrap, que são:

*   Formulário embutido - cria o formulário em uma única linha. Útil para formulários de login em uma barra de navegação
*   Formulário horizontal - cria um formulário com cada elemento em uma linha diferente

## Exemplo de uma forma básica

\`\` \`html

Endereço de e-mail 

Senha 

Entrada de arquivo 

Exemplo de texto de ajuda em nível de bloco aqui.

 Olhe para mim 

Enviar
```
## Example of an inline form 
```

html

Nome 

O email 

Enviar convite
```
## Example of horizontal form 
```

html

O email

Senha

 Lembre de mim 

assinar em
```
![Inline Form 2](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form2.PNG) 
```

html

Quantidade (em dólares)

$

.00

Transferir dinheiro
```
Bootstrap forms allow the programmer to use classes to easily make HTML forms presentable and responsive. 
 Take the following simple form: 
 
 ![](https://siamcomm.com/wp-content/uploads/2017/10/Forms-·-Bootstrap.png) 
```

html

Endereço de e-mail  Nós nunca vamos compartilhar seu e-mail com mais ninguém.

Senha 

 Olhe para mim 

Enviar
```
Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`. 
 
 The `<input>` tag should be given a class of `form-control`. 
 
 The `<button>` tag should be given the classes of `btn btn-primary`. 
 
 #### More Information: 
 <!-- Please add any articles you think might be helpful to read before writing the article --> 
 [The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/) 
 
 ![Inline Form 3](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form3.PNG) 
 
 #### Horizontal Form 
 In combination with Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding `.form-horizontal` to the form. Doing so changes `.form-group`s to behave as grid rows, so no need for `.row`. 
```

html

O email

Senha

 Lembre de mim 

assinar em

\`\` \`

![Forma Horizontal](https://github.com/TroyB12/Pictures/blob/master/Horizontal%20Form.PNG)