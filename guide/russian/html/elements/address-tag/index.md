---
title: Address Tag
localeTitle: Адрес тега
---
## Адрес тега

Элементы формы Bootstrap расширяют наши стили формы перезагрузки с помощью классов. Используйте эти классы, чтобы выбрать их настроенные дисплеи для более последовательного отображения в браузерах и устройствах.

Обязательно используйте атрибут соответствующего типа на всех входах (например, адрес электронной почты для адреса электронной почты или номер для цифровой информации), чтобы использовать преимущества новых элементов управления входами, таких как проверка электронной почты, выбор номера и многое другое.

Вот краткий пример демонстрации стилей формы Bootstrap. Продолжайте читать документацию по требуемым классам, форме макета и т. Д.

#### использование

```html

<form> 
  <div class="form-group"> 
    <label for="exampleInputEmail1">Email address</label> 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> 
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> 
  </div> 
  <div class="form-group"> 
    <label for="exampleInputPassword1">Password</label> 
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> 
  </div> 
  <div class="form-check"> 
    <label class="form-check-label"> 
      <input type="checkbox" class="form-check-input"> 
      Check me out 
    </label> 
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button> 
 </form> 

```