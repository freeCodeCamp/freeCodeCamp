---
id: 587d7dbc367417b2b2512bb1
title: Створіть простий елемент JSX
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

React — це бібліотека з відкритим вихідним кодом, яку підтримує Facebook. Це хороший інструмент для візуалізації інтерфейсу користувача (UI) у сучасних вебзастосунках.

React використовує розширення синтаксису JavaScript під назвою JSX, що дозволяє писати HTML одразу в JavaScript. JSX має декілька переваг. JSX дозволяє використовувати усі програмні можливості JavaScript у HTML, а також допомагає з читабельністю коду. JSX подібний до HTML, який ви вже вивчали, хоча є декілька ключових відмінностей, які ми розглянемо протягом завдань.

Наприклад, оскільки JSX є синтаксичним розширенням JavaScript, ви можете писати JavaScript одразу в JSX. Для цього просто напишіть код у фігурних дужках, якщо він має сприйматися як JavaScript: `{ 'this is treated as JavaScript code' }`. Це знадобиться вам у майбутніх завданнях.

Однак JSX не є дійсним JavaScript, тому JSX потрібно спочатку скомпілювати в JavaScript. Для цього часто використовують транспайлер Babel. Ми вже додали його для вашої зручності. Якщо у вас буде недійсний синтаксис JSX, то перший тест у завданнях видасть помилку.

Варто зазначити, що завдання непомітно викликають `ReactDOM.render(JSX, document.getElementById('root'))`. Цей виклик функції розміщує JSX у просте вираження DOM, що створює React. Потім React використовує снапшоти власних DOM, щоб оптимізувати оновлення конкретних частин у конкретній DOM.

# --instructions--

Поточний код використовує JSX, щоб призначити елемент `div` до константи `JSX`. Замініть `div` на елемент `h1` та додайте текст `Hello JSX!` до нього.

# --hints--

Константа `JSX` має повернути елемент `h1`.

```js
assert(JSX.type === 'h1');
```

Тег `h1` має містити текст `Hello JSX!`

```js
assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = <div></div>;
```

# --solutions--

```jsx
const JSX = <h1>Hello JSX!</h1>;
```
