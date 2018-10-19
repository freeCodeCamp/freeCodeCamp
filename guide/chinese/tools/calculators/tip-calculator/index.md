---
title: Tip Calculator
localeTitle: 电脑类型
---
## 提示计算器

小费计算器是一种计算器，可根据总账单的百分比计算小费。

## 第1步 - HTML：

我们创建一个表单以输入首选金额：

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

## 第2步 - CSS：

您可以根据需要设计样式。您还可以使用CSS隐藏结果，并在用户填写表单后通过JavaScript显示结果：

```css
  #results { 
         display:none; 
       } 
```

## 第3步：JavaScript：

我们添加onchange事件。当用户与表单交互时，会发生onchange事件。

此操作将执行一个函数，该函数根据百分比提示计算最终的帐单金额，然后返回结果。

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

您可以在[Codepen.io](https://codepen.io/voula12/pen/djrZGw)上看到一个工作示例及其代码。