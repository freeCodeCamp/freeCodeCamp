---
title: Tip Calculator
localeTitle: Tipo de computador
---
## Calculadora de gorjeta

A Tip Calculator é uma calculadora que calcula uma dica com base na porcentagem da conta total.

## Etapa 1 - HTML:

Criamos um formulário para inserir a quantia preferida:

```html

<!doctype html> 
 <html lang="en"> 
  <head> 
    <title>Tip Calculator</title> 
    <!-- Required meta tags --> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
 
    <!-- Bootstrap CSS --> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
 
 
 
  </head> 
  <body class="bg-dark"> 
    <div class="container"> 
      <div class="row"> 
        <div class="col-md-6 mx-auto"> 
          <div class="card card-body text-center mt-5"> 
            <h1 class="heading display-5 pb-3">Tip Calculator</h1> 
            <form id="tip-form"> 
              <div class="form-group"> 
                <div class="input-group"> 
                  <span class="input-group-addon">$</span> 
                  <input type="number" class="form-control" id="billTotal" placeholder="Total Bill"> 
                </div> 
              </div> 
              <div class="form-group tipPersent"> 
                <div class="input-group"> 
                  <label for="">Tip:</label> 
 
 
                  <input type="range" class="form-control" id="tipInput" value="0"> 
                  <span class="input-group-addon" id="tipOutput"></span> 
                </div> 
              </div> 
 
 
 
            </form> 
            <hr> 
 
            <!-- RESULTS --> 
            <div id="results" class="pt-4"> 
              <h5>Results</h5> 
              <div class="form-group"> 
                <div class="input-group"> 
                  <span class="input-group-addon">Tip amount</span> 
                  <input type="number" class="form-control" id="tipAmount" disabled> 
                </div> 
              </div> 
 
              <div class="form-group"> 
                <div class="input-group"> 
                  <span class="input-group-addon">Total Bill with Tip</span> 
                  <input type="number" class="form-control" id="totalBillWithTip" disabled> 
                </div> 
              </div> 
 
 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Optional JavaScript --> 
    <!-- jQuery first, then Popper.js, then Bootstrap JS --> 
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> 
 
  </body> 
 </html> 
```

## Etapa 2 - CSS:

Você projeta o estilo como quiser. Você também pode usar o CSS para ocultar os resultados e mostrá-los por meio do JavaScript depois que o usuário preencher o formulário:

```css
  #results { 
         display:none; 
       } 
```

## Etapa 3: JavaScript:

Nós adicionamos o evento onchange. O evento onchange ocorre quando o usuário interage com o formulário.

Essa ação executará uma função que calcula o valor final da fatura com base na dica da porcentagem e retorna os resultados.

```javascript
document.querySelector('#tip-form').onchange = function(){ 
 
  var bill = Number(document.getElementById('billTotal').value); 
  var tip = document.getElementById('tipInput').value; 
  document.getElementById('tipOutput').innerHTML = `${tip}%`; 
  var tipValue = bill * (tip/100) 
  var finalBill = bill + tipValue 
 console.log(finalBill) 
 var tipAmount = document.querySelector('#tipAmount') 
 var totalBillWithTip = document.querySelector('#totalBillWithTip') 
 
 tipAmount.value = tipValue.toFixed(2); 
 totalBillWithTip.value =finalBill.toFixed(2); 
 
 //Show Results 
 
  document.getElementById('results').style.display='block' 
 } 
```

Você pode ver um exemplo de trabalho e seu código no [Codepen.io](https://codepen.io/voula12/pen/djrZGw) .