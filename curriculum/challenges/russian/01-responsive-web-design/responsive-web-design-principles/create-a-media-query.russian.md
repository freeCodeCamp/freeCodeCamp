---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: https://scrimba.com/p/pzrPu4/cqwKrtm
forumTopicId: 301139
localeTitle: Создание медиа-запроса
---

## Description
<section id='description'>
Медиа-запросы - это новый метод, введенный в CSS3, который изменяет представление контента на основе разных размеров видовых экранов. Окно просмотра - видимая область пользователя на веб-странице и отличается в зависимости от устройства, используемого для доступа к сайту. Медиа-запросы состоят из типа носителя, и если этот тип носителя соответствует типу устройства, на котором отображается документ, применяются стили. Вы можете иметь столько селекторов и стилей внутри вашего медиа-запроса, сколько хотите. Ниже приведен пример медиа-запроса, который возвращает содержимое, когда ширина устройства меньше или равна 100px: <code>@media (max-width: 100px) { /* CSS Rules */ }</code> и следующий медиа-запрос возвращает содержимое, когда Высота устройства больше или равна 350px: <code>@media (min-height: 350px) { /* CSS Rules */ }</code> Помните, что CSS внутри медиа-запроса применяется только в том случае, если тип материала соответствует типу используемого устройства.
</section>

## Instructions
<section id='instructions'>
Добавьте медиа-запрос, чтобы тэг <code>p</code> имел <code>font-size</code> 10px, когда высота устройства меньше или равна 800px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.
    testString: assert($("style").text().replace(/\s/g ,'').match(/@media\(max-height:800px\)/g));
  - text: Your <code>p</code> element should have a <code>font-size</code> of 10px when the device <code>height</code> is less than or equal to 800px.
    testString: assert($("style").text().replace(/\s/g ,'').match(/@media\(max-height:800px\){p{font-size:10px;?}}/g));
  - text: Your <code>p</code> element should have an initial <code>font-size</code> of 20px when the device <code>height</code> is more than 800px.
    testString: assert($("style").text().replace(/\s/g ,'').replace(/@media.*}/g, '').match(/p{font-size:20px;?}/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 20px;
  }

  /* Add media query below */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</section>
