---
title: Required
localeTitle: Requeridos
---
## Requeridos

O atributo HTML requerido é usado em um elemento input para fazer o campo de entrada em um formulário requerido para submeter o formulário. Se o usuário não preencher o campo de entrada, o formulário não será enviado e ele enviará uma mensagem solicitando ao usuário que preencha o campo. O atributo `< Required>` é aplicável a `<input>` , `<select>` , `<textarea>` .

Por exemplo:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>HTML Required Attribute</title> 
  </head> 
  <body> 
    <form action="/"> 
      Text Field: <input type="text" name="textfield" required> 
      <input type="submit" value="Submit"> 
    </form> 
  </body> 
 </html> 
```

Selecione o exemplo:

```html

<form action="/action.php"> 
 <select required> 
  <option value="">None</option> 
  <option value="volvo">Volvo</option> 
  <option value="saab">Saab</option> 
  <option value="mercedes">Mercedes</option> 
  <option value="audi">Audi</option> 
 </select> 
 </form> 
```

Exemplo de área de texto:

```html

<form action="/action.php"> 
  <textarea name="comment" required></textarea> 
  <input type="submit"> 
 </form> 
```

Basta adicionar `required` a um elemento de entrada

#### Mais Informações:

[Artigo do MDN sobre o elemento de entrada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)