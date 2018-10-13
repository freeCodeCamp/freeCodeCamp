---
title: Form Tag
localeTitle: Tag de formulário
---
## Tag de formulário

A tag `<form>` é usada para criar formulários em HTML que são para entrada do usuário. Depois que um usuário insere dados e os envia, os dados são enviados ao servidor para serem processados.

Aqui está um exemplo básico de como usar a tag `<form>` :

```html

<form action="/example.php" method="get"> 
 Name: <input type="text"><br> 
 Email Address: <input type="text"><br> 
 <input type="submit" value="Submit"> 
 </form> 
```

### Atributo de ação

Todo elemento `<form>` precisa de um atributo de ação. O valor do atributo de ação é a URL no servidor que receberá os dados no formulário quando enviados.

Aqui está um exemplo usando o atributo action:

```html

<form action="http://www.google.com/form.php" method="get"> 
 <p>Controls will appear inside here.</p> 
 </form> 
```

Como você pode ver, o formulário está enviando seus dados para o URL [http://www.google.com/from.php](http://www.google.com/from.php) .

### Método

Os formulários podem ser enviados usando o método GET ou POST.

*   O método GET é ideal para formulários mais curtos, pois anexa dados ao final da URL especificada dentro do atributo action.
    
*   O método POST é ideal para formulários mais longos ou quando você está adicionando ou excluindo informações de um banco de dados. Com o método POST, os valores do formulário estão sendo enviados em cabeçalhos HTTP.
    

### Elementos

O elemento `<form>` terá pelo menos um dos seguintes elementos aninhados dentro dele:

*   [`<input>`](https://guide.freecodecamp.org/html/elements/input "Entrada")
*   [`<button>`](https://guide.freecodecamp.org/html/elements/button-tag "Botão")
*   [`<label>`](https://guide.freecodecamp.org/html/elements/label-tag "Rótulo")
*   [`<select>`](https://guide.freecodecamp.org/html/elements/select-tag "Selecione")
*   [`<textarea>`](https://guide.freecodecamp.org/html/elements/textarea-tag "Textarea")
*   [`<fieldset>`](https://guide.freecodecamp.org/html/elements/fieldsets-and-legends "Fieldset")

### Recursos

*   [W3 Escolas Recurso Formulário](https://www.w3schools.com/tags/tag_form.asp "Escolas W3")
*   [Recurso de Formulário do Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "Formulário Mozilla")