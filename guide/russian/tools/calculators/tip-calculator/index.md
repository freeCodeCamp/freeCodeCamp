---
title: Tip Calculator
localeTitle: Тип компьютера
---
## Калькулятор подсказок

Калькулятор подсказок - калькулятор, который вычисляет подсказку на основе процента от общего счета.

## Шаг 1 - HTML:

Мы создаем форму для ввода предпочтительной суммы:

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

## Шаг 2 - CSS:

Вы разрабатываете стиль, как хотите. Вы также можете использовать CSS для скрытия результатов и отображения их через JavaScript после заполнения пользователем формы:

```css
  #results { 
         display:none; 
       } 
```

## Шаг 3: JavaScript:

Мы добавляем событие onchange. Событие onchange происходит, когда пользователь взаимодействует с формой.

Это действие будет выполнять функцию, которая вычисляет окончательную сумму счета на основе процентного наконечника, а затем возвращает результаты.

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

Вы можете увидеть рабочий пример и его код на [Codepen.io](https://codepen.io/voula12/pen/djrZGw) .