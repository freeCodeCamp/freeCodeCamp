---
id: 65e9728d484dd50f720e6ff0
title: Вивчіть типи даних та умови. Запитання K
challengeType: 15
dashedName: learn-data-types-and-conditionals-question-k
---

# --description--

Інструкцію `switch` використовують, щоб виконати різні дії на основі різних умов. Вона схожа до інструкції `if-else`, але є читабельнішою і її простіше зрозуміти, коли потрібно перевірити декілька умов. Інструкцію `switch` використовують, щоб вибрати один з багатьох блоків коду, які потрібно виконати.

Інструкція `switch` оцінює вираз та порівнює його зі значеннями кожного випадку. Якщо є збіг, то виконується відповідний блок коду. Якщо збігу немає, то виконується блок коду за замовчуванням.

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}
```

У прикладі вище порівнюється змінна `day` зі значеннями кожного випадку. Якщо є збіг, то виконується відповідний блок коду. Якщо збігу немає, то виконується блок коду за замовчуванням.

# --question--

## --text--

Вище дано фрагмент коду JavaScript, який змінює змінну `activity` на основі дня тижня. Яким буде значення змінної `activity`, якщо значенням змінної `day` є `"Tuesday"`?

```javascript
let day = "Tuesday";
let activity;

switch (day) {
  case "Monday":
    activity = "Go to the gym";
    break;
  case "Tuesday":
    activity = "Attend coding meetup";
    break;
  case "Wednesday":
    activity = "Watch a movie";
    break;
  case "Thursday":
    activity = "Visit a museum";
    break;
  case "Friday":
    activity = "Dinner with friends";
    break;
  case "Saturday":
    activity = "Hiking in the mountains";
    break;
  case "Sunday":
    activity = "Rest at home";
    break;
  default:
    activity = "Undefined day";
}

```

## --answers--

Значенням змінної `activity` буде `"Attend coding meetup"`.

---

Значенням змінної `activity` буде `"Watch a movie"`.

---

Значенням змінної `activity` буде `"Undefined day"`.

---

Значенням змінної `activity` буде `"Go to the gym"`.

## --video-solution--

1
