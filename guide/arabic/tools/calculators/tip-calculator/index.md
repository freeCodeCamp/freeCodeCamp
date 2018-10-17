---
title: Tip Calculator
localeTitle: نوع الكمبيوتر
---
## تلميح حاسبة

حاسبة التلميحات هي عبارة عن آلة حاسبة تقوم بحساب معلومات سرية بناءً على النسبة المئوية للفاتورة الإجمالية.

## الخطوة 1 - HTML:

نحن ننشئ نموذجًا لإدخال المبلغ المفضل:

 `
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
` 

## الخطوة 2 - CSS:

يمكنك تصميم النمط كيفما تشاء. يمكنك أيضًا استخدام CSS لإخفاء النتائج وعرضها من خلال جافا سكريبت بعد ملء المستخدم للنموذج:

 `  #results { 
         display:none; 
       } 
` 

## الخطوة 3: JavaScript:

نضيف حدث onchange. يحدث الحدث onchange عندما يتفاعل المستخدم مع النموذج.

سيقوم هذا الإجراء بتنفيذ وظيفة تقوم بحساب مبلغ الفاتورة النهائي استنادًا إلى طرف النسبة المئوية ، ثم تقوم بإرجاع النتائج.

 ``document.querySelector('#tip-form').onchange = function(){ 
 
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
`` 

يمكنك مشاهدة مثال [عملي ورمزه](https://codepen.io/voula12/pen/djrZGw) على [Codepen.io](https://codepen.io/voula12/pen/djrZGw) .