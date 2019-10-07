---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: 
localeTitle: Bir elemente negatif kenar boşluğu ekleyin
---

## Tanım
<section id='description'>
Bir elementin <code>margin</code>i bir elementin kenarlığı ile etrafındaki elementler arasındaki <code>border</code>ı kontrol eder. Bir elementin <code>margin</code>inini negatif bir değere ayarlarsanız, element büyüyecektir.
</section>


## Talimatlar
<section id='instructions'>
<code>margin</code>i kırmızı kutudaki gibi negatif bir değere ayarlamayı deneyin. 
Mavi kutunun <code>margin</code>ini <code>-15px</code> olarak değiştirin, böylece etrafındaki sarı kutunun tüm yatay genişliğini doldurur.
</section>

## Testler
<section id='tests'>

```yml
tests:
  - text: <code>blue-box</code> sınıfın elementlere <code>-15px</code> <code>margin</code> vermelidir..
    testString: assert($(".blue-box").css("margin-top") === "-15px");

```

</section>

## Meydan Okuma
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</div>



</section>

## Çözüm
<section id='solution'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
